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
