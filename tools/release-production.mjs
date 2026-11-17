// Brings the current commit to the `production` branch, which the production server picks up.
//
//   node tools/release-production.mjs          -> checks everything and prepares the release commit locally
//   node tools/release-production.mjs --push   -> the same, then pushes it to origin/production
//
// What it does, without touching the working copy or switching branches:
//   1. takes the committed state (HEAD) into a temporary folder;
//   2. leaves out the paths listed in tools/production-exclude.txt (drafts, earlier experiments);
//   3. runs what the server runs: `node tools/build-static.mjs --production`, then `node --test tests/*.cjs`;
//   4. stops if anything still mentions the review address, or if a test fails;
//   5. records the result as one new commit on top of `production` (never a force-push).
// The server builds again by itself; step 3 is so that a release that would fail there never leaves this machine.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const REPO = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUSH = process.argv.includes('--push');
const git = (args, opts = {}) => execFileSync('git', args, {cwd: REPO, encoding: 'utf8', maxBuffer: 1 << 28, ...opts}).trim();
const stop = (msg) => { console.error(`Not released. ${msg}`); process.exit(1); };

if (git(['status', '--porcelain'])) stop('The working copy has changes that are not committed; a release is made from a commit.');
const head = git(['rev-parse', 'HEAD']), short = head.slice(0, 7);

/* ---------- 1 and 2: the committed state, without the excluded paths ---------- */
const work = fs.mkdtempSync(path.join(os.tmpdir(), 'noguru-release-'));
execFileSync('sh', ['-c', `git archive ${head} | tar -x -C "${work}"`], {cwd: REPO});
const excluded = fs.readFileSync(path.join(REPO, 'tools', 'production-exclude.txt'), 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
for (const rel of excluded) {
  const target = path.resolve(work, rel);
  if (!target.startsWith(work + path.sep)) stop(`tools/production-exclude.txt names a path outside the repository: ${rel}`);
  fs.rmSync(target, {recursive: true, force: true});
}

/* ---------- 3: what the server runs ---------- */
const run = (args) => execFileSync(process.execPath, args, {cwd: work, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']});
try { console.log(run(['tools/build-static.mjs', '--production']).trim().split('\n').pop()); }
catch (e) { stop(`The production build failed:\n${e.stderr || e.message}`); }
try { const out = run(['--test', ...fs.readdirSync(path.join(work, 'tests')).filter((f) => f.endsWith('.cjs')).map((f) => `tests/${f}`)]); console.log(`Tests: ${out.match(/pass (\d+)/)?.[1]} pass, 0 fail`); }
catch (e) { stop(`A test failed on the production build:\n${(e.stdout || '').split('\n').filter((l) => /^not ok|error:|expected|actual/.test(l.trim())).slice(0, 12).join('\n')}`); }

/* ---------- 4: nothing from the review site ---------- */
// site/pilot/migration.js is the build's own source data; it records where its texts came from and no page shows that.
const SOURCE_DATA = new Set(['site/pilot/migration.js']);
const files = []; (function walk(dir) { for (const e of fs.readdirSync(dir, {withFileTypes: true})) e.isDirectory() ? walk(path.join(dir, e.name)) : files.push(path.relative(work, path.join(dir, e.name))); })(path.join(work, 'site'));
const review = files.filter((rel) => /\.(html|js|mjs|css|json|xml|txt|svg|webmanifest)$/.test(rel) && !SOURCE_DATA.has(rel) && /vimo33|noguru-review|github\.io/.test(fs.readFileSync(path.join(work, rel), 'utf8')));
if (review.length) stop(`These files still mention the review address:\n  ${review.join('\n  ')}\nFix them, or add them to tools/production-exclude.txt if no page uses them.`);
const bytes = files.reduce((sum, rel) => sum + fs.statSync(path.join(work, rel)).size, 0);
if (/<video\b[^>]*\bdata-draft\b/.test(fs.readFileSync(path.join(work, 'site', 'index.html'), 'utf8'))) console.warn('! The film on the home page is still marked as not signed off (data-draft in site/index.html). Remove the mark once it is signed off for the live site.');

/* ---------- 5: one commit on top of production ---------- */
try { git(['fetch', '--quiet', 'origin', 'production'], {stdio: 'ignore'}); } catch { /* the branch does not exist yet */ }
let parent = ''; try { parent = git(['rev-parse', '--verify', '--quiet', 'refs/remotes/origin/production']); } catch { parent = ''; }
const env = {...process.env, GIT_INDEX_FILE: path.join(work, '.release-index'), GIT_WORK_TREE: work};
git(['add', '-A', '.'], {env});
const tree = git(['write-tree'], {env});
if (parent && git(['rev-parse', `${parent}^{tree}`]) === tree) { console.log(`Nothing to release: production already holds this state (${parent.slice(0, 7)}).`); process.exit(0); }
const message = `Release ${short}\n\nBuilt for production from ${head}.\nLeft out: ${excluded.join(', ')}.`;
// The first release hangs on the commit it was made from; later ones on the previous release.
const commit = git(['commit-tree', tree, '-p', parent || head, '-m', message]);
git(['update-ref', 'refs/heads/production', commit]);
console.log(`Release commit ${commit.slice(0, 7)}: ${files.length} files in site/, ${(bytes / 1048576).toFixed(1)} MB, from ${short}.`);
if (PUSH) { console.log(git(['push', 'origin', 'refs/heads/production:refs/heads/production'], {stdio: ['ignore', 'pipe', 'pipe']}) || 'Pushed to origin/production.'); }
else console.log('Prepared locally as the branch `production`. Run again with --push to send it to the server.');
