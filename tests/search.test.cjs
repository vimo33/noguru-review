const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const SITE = path.join(__dirname, '..', 'site');
const read = (rel) => fs.readFileSync(path.join(SITE, rel), 'utf8');
const graph = (html) => JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph'];

test('the home page and the pricing page describe the same service and price', () => {
  const home = graph(read('index.html')).find((n) => n['@type'] === 'Service'), pricing = graph(read('pricing/index.html')).find((n) => n['@type'] === 'Service');
  assert.ok(home && pricing, 'both pages carry the service');
  assert.equal(home['@id'], pricing['@id']);
  assert.deepEqual(home.offers, pricing.offers);
  assert.match(read('pricing/index.html'), /\$49 a month/, 'the price in the data is the price on the page');
  assert.equal(home.offers.price, '49.00');
});

test('a shared link shows the share card, which exists at 1200 x 630', () => {
  for (const rel of ['index.html', 'pricing/index.html', 'academy/losing-months/index.html']) {
    const html = read(rel);
    assert.match(html, /<meta property="og:image" content="[^"]+\/pilot\/assets\/noguru-share-card\.png">/, rel);
    assert.match(html, /<meta name="twitter:card" content="summary_large_image">/, rel);
    assert.equal((html.match(/property="og:image"/g) || []).length, 1, `${rel}: one share image`);
  }
  const png = fs.readFileSync(path.join(SITE, 'pilot/assets/noguru-share-card.png'));
  assert.equal(png.readUInt32BE(16), 1200); assert.equal(png.readUInt32BE(20), 630);
  assert.ok(fs.existsSync(path.join(SITE, 'pilot/assets/noguru-touch-icon.png')));
});

test('the comparison page is linked from the home page and the pages that explain the strategy', () => {
  for (const rel of ['index.html', 'how-it-works/index.html', 'learn/index.html', 'faq/index.html']) assert.match(read(rel), /href="[^"]*dca-bot-vs-grid-bot\/"/, rel);
});

test('llms.txt names the main pages with their own titles and no page that does not exist', () => {
  const txt = read('llms.txt');
  assert.match(txt, /^# NoGuru\n/);
  const links = [...txt.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((m) => m[1]);
  assert.ok(links.length >= 15);
  const base = read('index.html').match(/<link rel="canonical" href="([^"]+)"/)[1];
  for (const url of links) { assert.ok(url.startsWith(base), url); assert.ok(fs.existsSync(path.join(SITE, url.slice(base.length), 'index.html')), url); }
});

test('digest descriptions fit a search result', () => {
  for (const dir of fs.readdirSync(path.join(SITE, 'digest'))) {
    const file = path.join(SITE, 'digest', dir, 'index.html'); if (!fs.existsSync(file)) continue;
    const d = fs.readFileSync(file, 'utf8').match(/<meta name="description" content="([^"]*)"/)[1].replace(/&[a-z#0-9]+;/g, 'x');
    assert.ok(d.length <= 160, `${dir}: ${d.length}`);
  }
});
