// Writes the production website into one clean folder: a production build, and only the files its pages use.
//
//   node tools/bundle-production.mjs                 -> dist/production
//   node tools/bundle-production.mjs --out=/some/dir -> that folder (it must be empty or not exist)
//   --origin=https://… and --no-fetch are passed on to tools/build-static.mjs
//
// The working copy is not touched: the build runs in a temporary copy, so site/ stays a review build.
// Drafts, earlier experiments and working pages stay behind because no public page refers to them.
// The run fails if a kept page refers to a file that does not exist, or if anything from the review site is left.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url)), REPO = path.join(HERE, '..');
const args = process.argv.slice(2);
const OUT = path.resolve(args.find((a) => a.startsWith('--out='))?.slice(6) || path.join(REPO, 'dist', 'production'));
const pass = args.filter((a) => a.startsWith('--origin=') || a === '--no-fetch');
if (fs.existsSync(OUT) && fs.readdirSync(OUT).length) { console.error(`${OUT} is not empty. Empty it yourself or choose another --out; this tool does not delete folders.`); process.exit(1); }

/* ---------- 1. a production build in a temporary copy ---------- */
const work = fs.mkdtempSync(path.join(os.tmpdir(), 'noguru-production-'));
for (const dir of ['site', 'tools']) fs.cpSync(path.join(REPO, dir), path.join(work, dir), {recursive: true});
const manifestFile = path.join(work, 'manifest.json');
console.log(execFileSync(process.execPath, [path.join(work, 'tools', 'build-static.mjs'), '--production', ...pass], {env: {...process.env, NOGURU_MANIFEST: manifestFile}, encoding: 'utf8'}).trim());
const SITE = path.join(work, 'site');
const written = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));

/* ---------- 2. follow every reference from the pages the build wrote ---------- */
const TEXT = /\.(html|js|mjs|css|json|svg|webmanifest|xml|txt)$/;
const ASSET = 'png|jpe?g|webp|gif|svg|ico|mp3|mp4|webm|wav|ogg|woff2?|ttf|glb|json|js|mjs|css|webmanifest';
const exists = (rel) => { try { return fs.statSync(path.join(SITE, rel)).isFile(); } catch { return false; } };
function references(rel, text) {
  const out = [];
  const grab = (re) => { for (const m of text.matchAll(re)) out.push(m[1]); };
  if (/\.(html|svg)$/.test(rel)) { grab(/(?:href|src|poster|data-src)\s*=\s*["']([^"'#?]+)/g); for (const m of text.matchAll(/srcset\s*=\s*["']([^"']+)/g)) for (const part of m[1].split(',')) out.push(part.trim().split(/\s+/)[0]); }
  if (/\.(html|css)$/.test(rel)) grab(/url\(\s*["']?([^"')#?]+)/g);
  if (/\.(html|js|mjs)$/.test(rel)) {
    grab(/(?:from|import)\s*\(?\s*["'`]([^"'`]+)["'`]/g);                                  // import … from '…', import('…')
    grab(new RegExp(`["'\`]((?:\\.{1,2}/)[^"'\`\\s?#]+\\.(?:${ASSET}))["'\`]`, 'g'));        // './pilot/assets/x.png'
    grab(/new URL\(\s*["'`]([^"'`$]+)["'`]\s*,\s*import\.meta\.url/g);
  }
  return out;
}
// Paths a script builds at run time, which the patterns above cannot see. Each is [the script, what it loads].
const BUILT_AT_RUN_TIME = [['film.js', ['pilot/assets/noguru-guide-original.png', 'pilot/assets/noguru-guide-attentive-original.png']]];

const keep = new Set(), missing = [];
const queue = written.filter((rel) => exists(rel));
for (const rel of written) if (!exists(rel)) missing.push(`the build's own file ${rel}`);
while (queue.length) {
  const rel = queue.pop();
  if (keep.has(rel)) continue;
  keep.add(rel);
  for (const [script, extra] of BUILT_AT_RUN_TIME) if (rel === script) queue.push(...extra);
  if (!TEXT.test(rel)) continue;
  const text = fs.readFileSync(path.join(SITE, rel), 'utf8');
  const baseHref = rel.endsWith('.html') ? text.match(/<base href="([^"]+)"/)?.[1] : null;
  for (const ref of references(rel, text)) {
    if (/^(https?:|\/\/|data:|mailto:|tel:|javascript:|blob:)/.test(ref) || ref.includes('${')) continue;
    let target = ref.startsWith('/') ? ref.slice(1) : path.posix.normalize(path.posix.join(baseHref ? baseHref.replace(/^\//, '') : path.posix.dirname(rel), ref));
    if (target.startsWith('..')) continue;
    if (target === '.' || target === '') target = 'index.html';
    if (target.endsWith('/')) target += 'index.html';
    else if (!exists(target) && exists(`${target}/index.html`)) target = `${target}/index.html`;
    if (exists(target)) queue.push(target);
    else if (/\.(html|css|js|mjs)$/.test(rel) && new RegExp(`\\.(?:${ASSET}|html)$`).test(target)) missing.push(`${rel} → ${ref}`);
  }
}
// A script can mention a file name in a comment or a string that is never loaded; only report what a page needs.
const reallyMissing = missing.filter((m) => !/→ (?:\.\/)?[\w-]+\.(?:js|mjs)$/.test(m) || /^[\w/-]+\.html/.test(m));

/* ---------- 3. checks, then copy ---------- */
const problems = [];
for (const rel of keep) {
  if (!TEXT.test(rel)) continue;
  const text = fs.readFileSync(path.join(SITE, rel), 'utf8');
  if (/vimo33|noguru-review|github\.io/.test(text)) problems.push(`${rel} mentions the review site`);
  if (rel.endsWith('.html') && /Review preview|Dated prior review/.test(text)) problems.push(`${rel} carries review wording`);
}
const sitemapPages = [...fs.readFileSync(path.join(SITE, 'sitemap.xml'), 'utf8').matchAll(/<loc>https?:\/\/[^/]+\/([^<]*)<\/loc>/g)].map((m) => `${m[1]}index.html`);
for (const rel of sitemapPages) {
  if (!keep.has(rel)) problems.push(`${rel} is in the sitemap but not in the bundle`);
  else if (/<meta name="robots" content="noindex/.test(fs.readFileSync(path.join(SITE, rel), 'utf8'))) problems.push(`${rel} is in the sitemap but closed to search engines`);
}
if (reallyMissing.length || problems.length) {
  console.error(['Not bundled.', ...reallyMissing.map((m) => `  missing: ${m}`), ...problems.map((p) => `  ${p}`)].join('\n'));
  process.exit(1);
}

let bytes = 0;
for (const rel of [...keep].sort()) {
  const to = path.join(OUT, rel); fs.mkdirSync(path.dirname(to), {recursive: true}); fs.copyFileSync(path.join(SITE, rel), to); bytes += fs.statSync(to).size;
}
const all = []; (function walk(dir) { for (const e of fs.readdirSync(dir, {withFileTypes: true})) e.isDirectory() ? walk(path.join(dir, e.name)) : all.push(path.relative(SITE, path.join(dir, e.name))); })(SITE);
const left = all.filter((rel) => !keep.has(rel));
const leftBytes = left.reduce((sum, rel) => sum + fs.statSync(path.join(SITE, rel)).size, 0);
const groups = {}; for (const rel of left) { const key = rel.includes('/') ? rel.split('/').slice(0, 2).join('/') : rel; groups[key] = (groups[key] || 0) + fs.statSync(path.join(SITE, rel)).size; }
const mb = (n) => `${(n / 1048576).toFixed(1)} MB`;
fs.writeFileSync(path.join(OUT, '..', 'production-left-out.txt'), left.sort().join('\n') + '\n');
console.log(`Bundle: ${keep.size} files, ${mb(bytes)}, in ${OUT}`);
console.log(`Left out: ${left.length} files, ${mb(leftBytes)} (listed in ${path.join(OUT, '..', 'production-left-out.txt')}). Largest:`);
for (const [key, size] of Object.entries(groups).sort((a, b) => b[1] - a[1]).slice(0, 8)) console.log(`  ${mb(size).padStart(8)}  ${key}`);
console.log(`The temporary build copy is at ${work}; it can be deleted.`);
