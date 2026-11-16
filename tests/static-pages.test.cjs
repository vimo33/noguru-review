// Checks the built pages the way a crawler without JavaScript meets them:
// every page has its own text, title, description and address, and every internal link and anchor resolves.
// Run `node tools/build-static.mjs` first; these tests read the files it writes into site/.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const SITE = path.join(__dirname, '..', 'site');
const read = (rel) => fs.readFileSync(path.join(SITE, rel), 'utf8');
const text = (html) => html.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const sitemap = read('sitemap.xml');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const origin = new URL(locs[0]).origin + new URL(locs[0]).pathname.replace(/\/$/, '');
const pages = locs.map((loc) => loc.slice(origin.length + 1)).filter(Boolean);     // '' is the home page

test('the sitemap lists the home page and every reading page, and each has a file', () => {
  assert.ok(pages.length >= 80, `only ${pages.length} pages`);
  for (const p of pages) assert.ok(fs.existsSync(path.join(SITE, p, 'index.html')), `missing ${p}index.html`);
  for (const internal of ['all-pages/', 'source-home/', 'review-home/']) assert.ok(!pages.includes(internal), `${internal} must not be public`);
});

test('each page carries its own title, description, canonical address, heading and real text without JavaScript', () => {
  const titles = new Map(), descriptions = new Map();
  for (const p of pages) {
    const html = read(`${p}index.html`);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1], description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert.ok(title && title.length <= 75, `${p}: title missing or too long (${title?.length})`);
    assert.ok(description && description.length >= 40 && description.length <= 170, `${p}: description length ${description?.length}`);
    assert.ok(html.includes(`<link rel="canonical" href="${origin}/${p}">`), `${p}: canonical`);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${p}: exactly one h1`);
    assert.ok(html.includes('application/ld+json'), `${p}: structured data`);
    if (p !== 'market/') assert.ok(text(html).split(' ').length > 250, `${p}: too little text in the HTML`);
    assert.ok(!titles.has(title), `${p}: same title as ${titles.get(title)}`); titles.set(title, p);
    assert.ok(!descriptions.has(description), `${p}: same description as ${descriptions.get(description)}`); descriptions.set(description, p);
  }
});

test('every internal link and anchor on every page resolves, and nothing points at the old site or the old reader', () => {
  const idsOf = new Map();
  const ids = (file) => { if (!idsOf.has(file)) idsOf.set(file, new Set([...fs.readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))); return idsOf.get(file); };
  for (const p of ['', ...pages]) {
    const html = read(`${p}index.html`), dir = path.join(SITE, p);
    for (const [, href] of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
      assert.ok(!/read\/\?page=|^\?page=/.test(href), `${p}: old reader link ${href}`);
      if (/^https?:/.test(href)) { assert.ok(!/^https?:\/\/(www\.)?noguru\.io\/(?!api\/|data\/)/.test(href) || /\/api\/public\/go\//.test(href) === false && /noguru\.io\/(api|data)\//.test(href), `${p}: old-site link ${href}`); continue; }
      if (/^(mailto:|tel:)/.test(href)) continue;
      const [rel, anchor] = href.split('#');
      let file = rel ? path.join(dir, rel) : path.join(dir, 'index.html');
      if (rel && (rel.endsWith('/') || !path.extname(rel))) file = path.join(file, 'index.html');
      assert.ok(fs.existsSync(file), `${p}: broken link ${href}`);
      if (anchor && file.endsWith('.html')) assert.ok(ids(file).has(decodeURIComponent(anchor)), `${p}: missing anchor ${href}`);
    }
  }
});

test('the record is in the HTML: the trade-by-trade page lists every finished trade and the home page shows dated figures', () => {
  const record = read('track-record/index.html');
  if (!/data-snapshot=/.test(record)) return;      // built with --no-fetch or while the feed was unreachable
  const finished = Number(record.match(/<b>([\d,]+)<\/b><span>finished trades<\/span>/)?.[1].replace(/,/g, ''));
  assert.ok(finished > 1000, 'finished-trade count');
  const every = record.slice(record.indexOf('id="record-every"'));
  assert.equal((every.match(/<tr[ >]/g) || []).length - 2, finished, 'one row per finished trade (two header rows)');
  assert.ok(!/<td>(BTC|ETH|SOL|XRP|ZEC)<\/td><td class="n">\d+<\/td><td class="n">[+−]/.test(every), 'no coin beside a single trade');
  const home = read('index.html');
  assert.match(home, /id="ev-closed">[\d,]+</, 'home shows the finished-trade count');
  assert.match(home, /id="ev-status"[^>]*>Snapshot of /, 'home says the figures are a dated snapshot');
});

test('a review build stays out of search engines; old addresses redirect', () => {
  const robots = read('robots.txt');
  if (/Disallow: \/\s*$/.test(robots.split('\n').slice(0, 2).join('\n'))) for (const p of ['', ...pages.slice(0, 5)]) assert.match(read(`${p}index.html`), /<meta name="robots" content="noindex, nofollow">/);
  for (const old of ['how-it-works.html', 'pricing.html', 'track-record.html', 'academy/expectancy.html', 'legal/terms.html', 'read/index.html']) assert.match(read(old), /http-equiv="refresh"|location\.replace/, `${old} redirects`);
});

test('sign-up links carry an event name; statistics stay off unless switched on', () => {
  const home = read('index.html');
  for (const name of ['signup-trial', 'signup-cornix', 'signup-cornix-bot']) assert.match(home, new RegExp(`data-umami-event="${name}"`), name);
  for (const p of ['', ...pages]) {
    const html = read(`${p}index.html`);
    for (const tag of html.match(/<a\b[^>]*href="https:\/\/(t\.me\/NoGuruMembers_bot|noguru\.io\/api\/public\/go\/)[^>]*>/g) || []) assert.match(tag, /data-umami-event="signup-/, `${p}: ${tag}`);
    assert.match(read('legal/privacy/index.html'), /the name of that campaign is kept in your browser until you close the tab.*If you start a trial, it is stored with your sign-up\./, 'privacy page says what happens to a campaign name');
    if (/data-website-id=/.test(html)) assert.doesNotMatch(read('legal/privacy/index.html'), /we run no third-party analytics, no advertising trackers, and set no cookies/, 'privacy page matches the statistics script');
  }
});
