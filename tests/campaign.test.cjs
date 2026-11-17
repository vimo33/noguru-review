const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const load = () => import(pathToFileURL(path.join(__dirname, '..', 'site', 'campaign.js')).href);
const TRIAL = 'https://t.me/NoGuruMembers_bot?start=trial_cornixpage', SIGNUP = 'https://noguru.io/api/public/go/cornix-signup?s=site-home', BOT = 'https://noguru.io/api/public/go/cornix-bot?s=site-home';

test('the campaign tag comes from the landing address, in the agreed format only', async () => {
  const {campaignTag} = await load();
  assert.equal(campaignTag('?utm_campaign=reddit-dca'), 'reddit-dca');
  assert.equal(campaignTag('?utm_campaign=Reddit-DCA'), 'reddit-dca', 'lowercased');
  assert.equal(campaignTag('?utm_source=substack'), 'substack', 'falls back to the source');
  assert.equal(campaignTag('?utm_campaign=has_underscore&utm_source=x1'), 'x1', 'an underscore is not allowed in the tag');
  assert.equal(campaignTag('?utm_campaign=this-tag-is-far-too-long'), '', 'longer than 16 is dropped');
  assert.equal(campaignTag('?utm_campaign=%3Cscript%3E'), '');
  assert.equal(campaignTag('', 'reddit-dca'), 'reddit-dca', 'kept for the visit');
  assert.equal(campaignTag('?utm_campaign=yt-1', 'reddit-dca'), 'yt-1', 'a new landing tag wins');
  assert.equal(campaignTag('', 'BAD TAG'), '');
  for (const name of ['none', 'other', 'plain', 'site-form']) { assert.equal(campaignTag(`?utm_campaign=${name}&utm_source=yt-1`), 'yt-1', `${name} is a row in the server's report`); assert.equal(campaignTag('', name), ''); }
});

test('the tag goes into the trial link and the Cornix links, and nowhere else', async () => {
  const {withCampaign} = await load();
  assert.equal(withCampaign(TRIAL, 'reddit-dca'), 'https://t.me/NoGuruMembers_bot?start=trial_reddit-dca');
  assert.equal(withCampaign(SIGNUP, 'reddit-dca'), 'https://noguru.io/api/public/go/cornix-signup?s=reddit-dca');
  assert.equal(withCampaign(BOT, 'reddit-dca'), 'https://noguru.io/api/public/go/cornix-bot?s=reddit-dca');
  assert.equal(withCampaign('https://t.me/NoGuruMembers_bot?start=trial_cornixpage_REF123', 'reddit-dca'), 'https://t.me/NoGuruMembers_bot?start=trial_reddit-dca_REF123', 'a referral code stays in place');
  assert.equal(withCampaign(TRIAL, 'other'), TRIAL, 'reserved name');
  for (const href of [TRIAL, SIGNUP, BOT]) { assert.equal(withCampaign(href, ''), href); assert.equal(withCampaign(href, 'Not_Valid'), href); }
  for (const other of ['https://t.me/NoGuruMembers_bot', 'https://t.me/NoGuruMembers_bot?start=REF123', 'https://t.me/nogurusignals', 'https://www.binance.com/register?ref=1211286433', 'https://noguru.io/api/public/track-record', './pricing/']) assert.equal(withCampaign(other, 'reddit-dca'), other, other);
});

test('the record has one monthly pace, and the pay-back figure follows from it', async () => {
  globalThis.location ||= {href: 'https://noguru.io/pilot/page.html', origin: 'https://noguru.io', search: ''};
  const {recordPace, paybackCapital} = await import(pathToFileURL(path.join(__dirname, '..', 'site', 'pilot', 'data.js')).href);
  assert.equal(recordPace({grossMonthly: 9.94, allocMonthly: 9.42}), 9.94, 'the figure the record page shows');
  assert.equal(recordPace({grossMonthly: null, allocMonthly: 9.42}), 9.42, 'the fallback');
  assert.equal(recordPace({grossMonthly: 0}), null); assert.equal(recordPace(null), null);
  assert.equal(paybackCapital(49, 9.94), 500, 'rounded up to the next $10');
  assert.equal(paybackCapital(49, null), null);
});

test('every page states one completed-profit figure: the published one', async () => {
  const {withHeadline} = await import(pathToFileURL(path.join(__dirname, '..', 'site', 'home-record.js')).href);
  const ev = {closed: 10, grossSinceStart: 35.04, windowStart: '2026-08-01', windowEnd: '2026-11-17'};
  assert.deepEqual(withHeadline(ev, {pct: 34.9, since: '2026-08-01', asOf: '2026-11-16'}), {...ev, profitPct: 34.9, profitStart: '2026-08-01', profitEnd: '2026-11-16'});
  assert.equal(withHeadline(ev, null).profitPct, 35.04, 'the fallback when the published figure cannot be read');
});

test('record figures are shown as money on one example amount', async () => {
  const {EXAMPLE, onExample, exampleAmount} = await import(pathToFileURL(path.join(__dirname, '..', 'site', 'example.js')).href);
  assert.equal(EXAMPLE, 10000);
  assert.equal(onExample(34.9), 3490); assert.equal(exampleAmount(34.9), '3,490 USDT');
  assert.equal(exampleAmount(-0.2), '−20 USDT', 'a loss keeps its sign');
  assert.equal(exampleAmount(NaN), null);
});

test('new digests come from the feed in the stored shape; a malformed one is left out', async () => {
  const {readDigestList, digestPage, addDigests} = await import(pathToFileURL(path.join(__dirname, '..', 'tools', 'digests.mjs')).href);
  const daily = {slug: '2026-11-17-daily', kind: 'daily', date: '2026-11-17', headline: 'A headline', body: {results: 'Results text.', headline: 'A headline', novice_note: 'A note.', week_review: [], market_picture: ['Market line.']}};
  const weekly = {slug: '2026-11-15-weekly', kind: 'weekly', date: '2026-11-15', headline: 'Weekly', body: {results: 'This week.', week_review: ['One.', 'Two.'], market_picture: [], novice_note: ''}};
  assert.deepEqual(readDigestList({digests: [{slug: '2026-11-17-daily', kind: 'daily', date: '2026-11-17', title: 'T'}, {slug: '../x', title: 'T'}, {slug: '2026-11-16-daily'}, null]}).map((d) => d.slug), ['2026-11-17-daily']);
  assert.throws(() => readDigestList({}));
  const page = digestPage(daily, '2026-11-17T13:00:00.000Z');
  assert.deepEqual(page.sections.map((s) => s.id), ['context', 'results', 'market-picture', 'novice-note']);
  assert.equal(page.source.url, 'https://noguru.io/api/public/digest/2026-11-17-daily');
  assert.deepEqual(digestPage(weekly, '').sections.map((s) => s.id), ['context', 'results', 'week-review']);
  for (const bad of [null, {}, {...daily, slug: 'x'}, {...daily, kind: 'weekly'}, {...daily, date: '2026-11-16'}, {...daily, headline: ''}, {...daily, body: null}, {...daily, body: {results: 7}}]) assert.equal(digestPage(bad, ''), null);
  const pages = {'digest-2026-11-12-daily': {title: 'Stored'}, digest: {eyebrow: '', sections: [{id: 'commentary', body: ['old', 'kept']}, {id: 'dates', body: []}, {id: '2026-11-12-daily', body: ['Stored']}]},
    library: {sections: [{id: 'digest', links: [{label: 'Stored', url: '?page=digest-2026-11-12-daily'}]}]}};
  assert.equal(addDigests(pages, [daily, weekly, {...daily, slug: 'bad'}, {...daily, slug: '2026-11-12-daily', date: '2026-11-12'}], ''), 2, 'a stored digest is never replaced');
  assert.equal(pages['digest-2026-11-12-daily'].title, 'Stored');
  assert.deepEqual(pages.digest.sections.map((s) => s.id), ['commentary', 'dates', '2026-11-17-daily', '2026-11-15-weekly', '2026-11-12-daily']);
  assert.equal(pages.digest.eyebrow, '3 public entries · latest 2026-11-17');
  assert.equal(pages.digest.sections[0].body[1], 'kept');
  assert.deepEqual(pages.library.sections[0].links.map((l) => l.url), ['?page=digest-2026-11-17-daily', '?page=digest-2026-11-15-weekly', '?page=digest-2026-11-12-daily']);
});

test('the trial form sends the campaign of the visit as src, and nothing when there is none', () => {
  const js = require('node:fs').readFileSync(path.join(__dirname, '..', 'site', 'read', 'checkout.js'), 'utf8');
  assert.match(js, /post\('\/gate\/api\/trial', \{buyer_tg: tg, consent, ref: refCode\(\), \.\.\.\(src \? \{src\} : \{\}\)\}\)/);
  assert.doesNotMatch(js, /\/gate\/api\/invoice'[^\n]*src/, 'the server takes src on the trial route only');
});
