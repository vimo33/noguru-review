#!/usr/bin/env node
// Builds the reading pages as real HTML files, one per page, each at its own address.
//
//   node tools/build-static.mjs                 review build: every page stays "noindex", robots.txt blocks all
//   node tools/build-static.mjs --production    production build for https://noguru.io: indexable, production robots.txt
//   options: --origin=https://example.org   --no-fetch (skip the live record snapshot)
//            --no-umami   leave out visitor statistics (tools/analytics.json switches them on for the hostnames it lists)
//            --umami=<website id> [--umami-src=<script address>]   use other values than tools/analytics.json
//
// The page content lives in site/pilot/learning.js and is drawn by the same renderer the browser used
// (site/pilot/reading-ui.js), run here against a small stand-in for the browser's document. So a
// crawler, an AI assistant or a visitor without JavaScript gets the full text of every page.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(HERE, '..', 'site');
const args = process.argv.slice(2);
const PRODUCTION = args.includes('--production');
const ORIGIN = (args.find((a) => a.startsWith('--origin='))?.slice(9) || (PRODUCTION ? 'https://noguru.io' : 'https://vimo33.github.io/noguru-review')).replace(/\/$/, '');
const FETCH = !args.includes('--no-fetch');
// Visitor statistics with Umami. tools/analytics.json names the script address and one website id per hostname, so a
// review build and a production build each count under their own id, and a rebuild never drops the script.
const STATS = JSON.parse(fs.readFileSync(path.join(HERE, 'analytics.json'), 'utf8'));
const UMAMI = args.includes('--no-umami') ? '' : args.find((a) => a.startsWith('--umami='))?.slice(8) || STATS.websites?.[new URL(ORIGIN).hostname] || '';
const UMAMI_SRC = args.find((a) => a.startsWith('--umami-src='))?.slice(12) || STATS.src || 'https://cloud.umami.is/script.js';
const UMAMI_HOSTED = /(^|\.)umami\.is$/.test(new URL(UMAMI_SRC).hostname);
const BUILD_DAY = new Date().toISOString().slice(0, 10);

/* ---------- a small stand-in for the browser's document ---------- */
const VOID = new Set(['img', 'input', 'br', 'hr', 'meta', 'link']);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = (s) => esc(s).replace(/"/g, '&quot;');
// data-domains keeps the count to the real address, so local previews and copies are not counted.
// data-do-not-track keeps the privacy page's promise: a browser's "Do Not Track" setting switches the counting off.
// Umami files a campaign only with the page a visitor lands on. So that the rest of the visit (later pages, the film,
// the sign-up clicks) can be read per campaign too, every page view and event carries the visit's campaign as Umami's
// "tag". The rule is the one in site/campaign.js; a test keeps the two the same. It has to be a plain script that
// stands before the statistics script, which looks the function up by name when it loads.
const STAT_HOOK = `window.noguruStat=function(t,p){try{var m=/^[a-z0-9-]{1,16}$/,r={none:1,other:1,plain:1,"site-form":1},q=new URLSearchParams(location.search),c="";["utm_campaign","utm_source"].some(function(n){var v=(q.get(n)||"").trim().toLowerCase();return m.test(v)&&!r[v]&&(c=v)});if(!c){c=sessionStorage.getItem("noguru-campaign")||"";if(!m.test(c)||r[c])c=""}if(c&&p)p.tag=c}catch(e){}return p}`;
const ANALYTICS = UMAMI ? `<script>${STAT_HOOK}</script>
  <script defer src="${escAttr(UMAMI_SRC)}" data-website-id="${escAttr(UMAMI)}" data-domains="${escAttr(new URL(ORIGIN).hostname)}" data-do-not-track="true" data-before-send="noguruStat"></script>` : '';
// Every sign-up link carries an event name, so a click on it is counted as a step. Links already named keep their name.
const STEP_LINKS = [[/^https:\/\/t\.me\/NoGuruMembers_bot/, 'signup-trial'], [/\/api\/public\/go\/cornix-signup/, 'signup-cornix'], [/\/api\/public\/go\/cornix-bot/, 'signup-cornix-bot']];
const tagSteps = (html) => html.replace(/<a\b[^>]*>/g, (tag) => {
  if (/\bdata-umami-event=/.test(tag)) return tag;
  const href = tag.match(/\bhref="([^"]*)"/)?.[1] || '';
  const name = tag.match(/\bdata-event="([^"]*)"/)?.[1] || STEP_LINKS.find(([re]) => re.test(href))?.[1];
  return name ? `${tag.slice(0, -1)} data-umami-event="${name}">` : tag;
});
class Text { constructor(text) { this.text = String(text); this.parentElement = null; } get outerHTML() { return esc(this.text); } get textContent() { return this.text; } }
class Raw { constructor(html) { this.html = html; this.parentElement = null; } get outerHTML() { return this.html; } get textContent() { return this.html.replace(/<[^>]+>/g, ' '); } }
const PROPS = {className: 'class', id: 'id', scope: 'scope', type: 'type', min: 'min', max: 'max', step: 'step', value: 'value', src: 'src', alt: 'alt', loading: 'loading', href: 'href', target: 'target', rel: 'rel', dateTime: 'datetime'};
class El {
  constructor(tag) {
    this.tagName = tag.toLowerCase(); this.attrs = {}; this.children = []; this.parentElement = null;
    this.dataset = new Proxy({}, {
      set: (t, k, v) => { t[k] = String(v); this.attrs[`data-${k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`] = String(v); return true; },
      deleteProperty: (t, k) => { delete t[k]; delete this.attrs[`data-${k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`]; return true; },
    });
    for (const [prop, attr] of Object.entries(PROPS)) Object.defineProperty(this, prop, {get: () => this.attrs[attr] ?? '', set: (v) => { this.attrs[attr] = String(v); }});
  }
  setAttribute(k, v) { this.attrs[k] = String(v); }
  getAttribute(k) { return this.attrs[k] ?? null; }
  get hidden() { return 'hidden' in this.attrs; }
  set hidden(v) { if (v) this.attrs.hidden = ''; else delete this.attrs.hidden; }
  get open() { return 'open' in this.attrs; }
  set open(v) { if (v) this.attrs.open = ''; else delete this.attrs.open; }
  #adopt(n) { const node = n instanceof El || n instanceof Text || n instanceof Raw ? n : new Text(n); node.remove?.(); node.parentElement = this; return node; }
  append(...nodes) { for (const n of nodes) this.children.push(this.#adopt(n)); }
  prepend(...nodes) { this.children.unshift(...nodes.map((n) => this.#adopt(n))); }
  before(...nodes) { const p = this.parentElement; if (!p) return; const adopted = nodes.map((n) => p.#adopt(n)); p.children.splice(p.children.indexOf(this), 0, ...adopted); }
  remove() { const p = this.parentElement; if (!p) return; p.children = p.children.filter((c) => c !== this); this.parentElement = null; }
  replaceChildren(...nodes) { for (const c of this.children) c.parentElement = null; this.children = []; this.append(...nodes); }
  set textContent(v) { this.replaceChildren(new Text(v)); }
  get textContent() { return this.children.map((c) => c.textContent).join(''); }
  set innerHTML(v) { this.replaceChildren(new Raw(String(v))); }
  get firstChild() { return this.children[0] || null; }
  get lastElementChild() { return [...this.children].reverse().find((c) => c instanceof El) || null; }
  addEventListener() {}
  querySelectorAll(selector) {
    const cls = selector.startsWith('.') ? selector.slice(1) : null, out = [];
    const walk = (node) => { for (const c of node.children) if (c instanceof El) { if (cls ? (c.attrs.class || '').split(/\s+/).includes(cls) : c.tagName === selector) out.push(c); walk(c); } };
    walk(this); return out;
  }
  querySelector(selector) { return this.querySelectorAll(selector)[0] || null; }
  get innerHTMLString() { return this.children.map((c) => c.outerHTML).join(''); }
  get outerHTML() {
    const attrs = Object.entries(this.attrs).map(([k, v]) => (v === '' && (k === 'hidden' || k === 'open') ? ` ${k}` : ` ${k}="${escAttr(v)}"`)).join('');
    return VOID.has(this.tagName) ? `<${this.tagName}${attrs}>` : `<${this.tagName}${attrs}>${this.innerHTMLString}</${this.tagName}>`;
  }
}
const BUILD_BASE = 'https://build.invalid/';
globalThis.document = {createElement: (tag) => new El(tag), createTextNode: (text) => new Text(text)};
globalThis.location = {href: `${BUILD_BASE}pilot/page.html`, origin: new URL(BUILD_BASE).origin};

const load = (rel) => import(pathToFileURL(path.join(SITE, rel)).href);
const {learningPages} = await load('pilot/learning.js');
// Campaign tags (site/campaign.js) are passed to the sign-up links. The provider asked for this sentence on the privacy
// page and approved the wording on 16 November 2026 (CAMPAIGN_TAGS_2026-11-16_ANSWERS.md); keep it word for word.
{
  const CAMPAIGN = ' If you arrive through one of our campaign links, the name of that campaign is kept in your browser until you close the tab and is passed along when you start a trial or open Cornix through our links, so we can count sign-ups per campaign. If you start a trial, it is stored with your sign-up.';
  const add = (v) => (typeof v === 'string' && v.startsWith('Website:') && v.endsWith('technical logs.') ? v + CAMPAIGN : v);
  const section = learningPages.privacy.sections.find((s) => s.id === 'what-we-collect-and-why');
  const before = JSON.stringify(section);
  if (section) { section.body = (section.body || []).map(add); section.blocks = (section.blocks || []).map((b) => ({...b, text: add(b.text)})); }
  if (!section || JSON.stringify(section) === before) throw new Error('The privacy page no longer has the "Website:" paragraph; update the campaign sentence in tools/build-static.mjs.');
}
// The privacy page says the site runs no analytics. With statistics switched on that sentence is replaced, and the
// hosted service is named as a recipient. The wording for our own installation is the text the provider approved and
// published on noguru.io on 16 November 2026; keep the two the same. The hosted wording is an unapproved draft.
// One clause was added on 17 November 2026 for the video, the questions, reading depth and time on a page
// (site/track.js); the provider approved it the same day.
if (UMAMI) {
  const OLD = 'we run no third-party analytics, no advertising trackers, and set no cookies.';
  const NEW = UMAMI_HOSTED
    ? 'we count visits with Umami, a privacy-focused statistics service: which pages are opened, where visitors arrive from, their country and device type, and which sign-up links are clicked. It sets no cookies and builds no visitor profiles (Art. 6(1)(f) GDPR). We run no advertising trackers.'
    : 'we count visits ourselves, with our own installation of the open-source tool Umami on our own server. It records which pages are opened, the site and campaign link a visitor came from, country, browser, operating system, device type, screen size and language, which sign-up links are clicked, whether the video is played and how much of it is watched, which questions are opened, how far a page is read and roughly how long it stays open. Your IP address is used for a moment to find the country and to form an anonymous visitor number that changes every day; the address itself is not stored. Umami sets no cookies and stores nothing on your device. Legal basis: our legitimate interest in knowing which pages are useful (Art. 6(1)(f) GDPR). You can object at any time through the contact below, and a "Do Not Track" setting in your browser switches the counting off. Visit records are deleted after 12 months. We run no third-party analytics and no advertising trackers.';
  const swap = (v) => (typeof v === 'string' ? v.replace(OLD, NEW).replace('message delivery — governed by Telegram\'s own terms once you use it); no one else.', UMAMI_HOSTED ? 'message delivery — governed by Telegram\'s own terms once you use it); Umami Software, Inc. (website statistics); no one else.' : 'message delivery — governed by Telegram\'s own terms once you use it); no one else.') : v);
  let done = false;
  for (const section of learningPages.privacy.sections) {
    const before = JSON.stringify(section);
    section.body = (section.body || []).map(swap);
    section.blocks = (section.blocks || []).map((b) => ({...b, text: swap(b.text)}));
    if (section.id === 'what-we-collect-and-why' && JSON.stringify(section) !== before) done = true;
  }
  if (!done) throw new Error('The privacy page no longer has the sentence about analytics; update the wording in tools/build-static.mjs.');
}
const {renderReadingPage} = await load('pilot/reading-ui.js');
const {renderRecord, readRecord, readHeadline, getJSON, FEEDS, utcDay} = await load('read/record.js');
const {normalizeEvidence} = await load('pilot/data.js');

/* ---------- the dated digests after the stored ones, from the server's digest feed (tools/digests.mjs) ---------- */
{
  const {DIGEST_LIST, digestAddress, readDigestList, addDigests} = await import('./digests.mjs');
  if (FETCH) try {
    const fresh = readDigestList(await getJSON(DIGEST_LIST)).filter((d) => !learningPages[`digest-${d.slug}`]);
    const entries = []; let missed = 0;
    // One after the other: the public address answers 429 to a burst.
    for (const d of fresh) try { entries.push(await getJSON(digestAddress(d.slug))); } catch { missed += 1; }
    const added = addDigests(learningPages, entries, new Date().toISOString());
    if (fresh.length) console.log(`Digests: ${added} added from the feed${missed || added < entries.length ? `, ${fresh.length - added} could not be read` : ''}.`);
  } catch (error) { console.warn(`! The digest feed could not be read (${error.message}); the digest pages stop at the stored ones.`); }
}
const {homeRecord, withHeadline} = await load('home-record.js');

/* ---------- which pages exist, and where each one lives ---------- */
const SPECIAL = {market: 'Market context', record: 'Trade by trade'};
const INTERNAL = (page) => /^(source-|review-)/.test(page) || page === 'all-pages';   // migration working pages, not for the public
const LEGAL = new Set(['terms', 'privacy', 'impressum', 'disclaimer']);
const pages = [...Object.keys(learningPages).filter((p) => !INTERNAL(p)), ...Object.keys(SPECIAL)];
const known = (page) => pages.includes(page);
function pathOf(page) {
  if (page === 'record') return 'track-record/';
  if (page.startsWith('academy-')) return `academy/${page.slice(8)}/`;
  if (page.startsWith('digest-')) return `digest/${page.slice(7)}/`;
  if (LEGAL.has(page)) return `legal/${page}/`;
  return `${page}/`;
}
const rootOf = (page) => '../'.repeat(pathOf(page).split('/').length - 1);
const HOME = {story: '', evidence: '#evidence', setup: '#start'};
const logicalIds = (page) => (learningPages[page]?.sections || []).map((s, i) => (/^[a-z0-9][a-z0-9-]*$/.test(s.id) ? s.id : `section-${i + 1}`));
const anchorOn = (page, anchor) => (!anchor ? '' : logicalIds(page).includes(anchor) ? `#learning-${anchor}` : `#${anchor}`);

// Pages of the old site now live here: a link to one goes to its page in this site.
const OLD_SITE = /^https:\/\/(www\.)?noguru\.io(\/|$)/;
const OLD_PAGES = {'track-record.html': 'record', 'dashboard.html': 'market', 'market.html': 'market', 'how-it-works.html': 'how-it-works', 'pricing.html': 'pricing',
  'glossary.html': 'glossary', 'methodology.html': 'methodology', 'faq.html': 'faq', 'risks.html': 'risks', 'academy/': 'academy', 'academy/index.html': 'academy',
  'digest/': 'digest', 'digest/index.html': 'digest', 'legal/terms.html': 'terms', 'legal/privacy.html': 'privacy', 'legal/impressum.html': 'impressum', 'legal/disclaimer.html': 'disclaimer'};
const oldPage = (pathname) => {
  const p = pathname.replace(/^\//, ''), m = p.match(/^(academy|digest)\/([\w-]+)\.html$/);
  return m ? `${m[1]}-${m[2]}` : Object.hasOwn(OLD_PAGES, p) ? OLD_PAGES[p] : null;
};

function linkFor(page) {
  const root = rootOf(page);
  const anchorEl = (label, href, external) => {
    const a = new El('a'); a.textContent = external ? `${label} ↗` : label; a.href = href;
    if (external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    return a;
  };
  const internal = (label, target, anchor) => {
    if (!known(target)) return null;
    return anchorEl(label, target === page ? (anchorOn(target, anchor) || '#main') : `${root}${pathOf(target)}${anchorOn(target, anchor)}`);
  };
  return (label, value) => {
    if (typeof value !== 'string') return null;
    if (value.startsWith('?')) {
      let params, anchor = '';
      try { const u = new URL(value, BUILD_BASE); params = u.searchParams; anchor = decodeURIComponent(u.hash.slice(1)); } catch { return null; }
      const target = params.get('page') || 'library';
      if (Object.hasOwn(HOME, target)) return anchorEl(label, `${root}${HOME[target]}` || './');
      return internal(label, target, anchor);
    }
    let url; try { url = new URL(value); } catch { return null; }
    if (url.protocol !== 'https:') return null;
    if (OLD_SITE.test(url.href)) {
      const p = url.pathname.replace(/^\//, '');
      // the old site's e-mail protection does not work outside it: use the address itself
      if (p.startsWith('cdn-cgi/l/email-protection')) return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(label) ? anchorEl(label, `mailto:${label}`) : null;
      if (!/^(api|data)\//.test(p) || p.startsWith('api/public/go/')) {
        const target = oldPage(url.pathname);
        if (!target || target === page || !known(target)) return null;        // already here, or nothing to point at
        return internal(/source/i.test(label) ? (SPECIAL[target] || learningPages[target].title) : label.replace(/\s*↗$/, ''), target, url.hash.slice(1));
      }
    }
    return anchorEl(label, url.href, true);
  };
}

/* ---------- words for search results and link previews ---------- */
const SEO = {
  'how-it-works': ['How NoGuru works: an automated crypto bot on Cornix', 'How NoGuru’s automated crypto bot buys in steps, sells above its average cost and starts again, in your own exchange account through Cornix.'],
  pricing: ['NoGuru pricing: $49 a month after a 14-day free trial', 'One subscription: $49 a month at the founding price after 14 days free. What Cornix costs on top, and how much trading money covers the fee.'],
  faq: ['NoGuru FAQ: safety, costs, crashes and setup', 'Straight answers about NoGuru’s automated crypto bot: where your money stays, what happens in a crash, what it costs and how to start.'],
  risks: ['The risks of an automated crypto bot, said plainly | NoGuru', 'How NoGuru is built to avoid forced selling, and the risks that remain: coins it holds can sit below cost, and what NoGuru cannot control.'],
  glossary: ['Crypto trading glossary in plain language | NoGuru', 'Plain-language explanations of trading and crypto-bot terms, from API key and average cost to trailing take profit.'],
  academy: ['NoGuru Academy: risk, sizing and trading basics', 'Free lessons on risk per trade, drawdowns, leverage, funding and market structure, written in plain language.'],
  digest: ['NoGuru digest: dated market and bot updates', 'The dated archive of NoGuru’s daily and weekly digests: what the market did and what the bot finished.'],
  trial: ['NoGuru free trial: 14 days, no card', 'How the 14-day NoGuru trial and Cornix’s own trial work, what you need to start and what to note down.'],
  methodology: ['How NoGuru’s public record is measured', 'What NoGuru’s published record counts, what it leaves out, and how its figures are worked out.'],
  record: ['NoGuru track record: every finished trade, live', 'NoGuru’s complete public record: completed profit with its basis, the spread of results, coins traded per month and every finished trade.'],
  market: ['Crypto market context: a live public dashboard | NoGuru', 'A free live dashboard of public market readings: trend, sentiment, funding, open interest and the calendar. Context, not a forecast.'],
  terms: ['Terms of Service | NoGuru', 'The terms that apply to NoGuru’s signal subscription: what the service is, what it is not, payment, cancellation and liability.'],
  privacy: ['Privacy | NoGuru', 'What personal data NoGuru handles, why, for how long, and how to use your rights of access, correction and deletion.'],
  impressum: ['Provider and contact | NoGuru', 'Who operates NoGuru: NoGuru LLC, Casper, Wyoming, USA, with the contact address for questions and legal notices.'],
  disclaimer: ['Risk disclaimer | NoGuru', 'NoGuru publishes what an automated system did or would do. It is not investment advice, and trading crypto can lose money.'],
  about: ['About NoGuru: a process you can inspect', 'What NoGuru does and does not do: a repeatable, automated process with a public record, and no guru to follow.'],
  exchanges: ['Exchanges and Cornix compatibility | NoGuru', 'What to check before connecting an exchange account to Cornix for NoGuru: eligibility, account type and trading pairs.'],
  resources: ['NoGuru resources: where each link takes you', 'The places connected to NoGuru and what each one is for, so you know where a click leads before you make it.'],
  'setup-guide': ['NoGuru setup guide: understand it first, then try it', 'A guide to trying NoGuru: what to read first and the steps of the workflow, from Cornix to your own exchange account.'],
  'market-stress': ['What a sharp market fall does to a crypto bot | NoGuru', 'A dated look at a sharp Bitcoin decline on 29–30 October 2026 and what buying in steps means when prices fall fast.'],
  examples: ['Worked examples: what happens to the money | NoGuru', 'Worked examples with round numbers: buying in steps, the average cost, a sale above it, and a path where the target is not reached.'],
  support: ['NoGuru support: find the detail you need', 'Where to find answers about NoGuru’s setup and service, and the provider information for questions.'],
  learn: ['Learn the choices behind the strategy | NoGuru', 'Eight short explanations of the choices behind NoGuru’s strategy: staged buying, weighted averages, separate cycles and cash reserves.'],
  'dca-bot-vs-grid-bot': ['DCA bot vs grid bot vs NoGuru Stepgrid: how they differ', 'How a grid bot and a DCA bot work, when each earns and when each struggles, and where Stepgrid, the NoGuru bot, fits, side by side.'],
  library: ['NoGuru library: everything there is to read', 'All of NoGuru’s reading in one place: how it works, pricing, risks, the academy, the glossary and the dated digest.'],
};
const clip = (text, max) => { const t = String(text || '').replace(/\s+/g, ' ').trim(); if (t.length <= max) return t; const cut = t.slice(0, max - 1); return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), max - 40)).replace(/[\s,;:.–-]+$/, '')}…`; };
function metaFor(page) {
  const data = learningPages[page] || {};
  const name = SPECIAL[page] || data.title || page;
  const digest = page.match(/^digest-(\d{4}-\d{2}-\d{2})-(daily|weekly)$/);
  // Each dated digest is described by its own date and headline; they all share one introduction.
  const [title, description] = SEO[page] || (digest
    ? [clip(`NoGuru ${digest[2]} digest, ${utcDay(digest[1])}`, 70), clip(`NoGuru’s ${digest[2]} digest of ${utcDay(digest[1])}: ${data.title}. A dated entry, kept as published.`, 158)]
    : [clip(`${name} | NoGuru`, 70), clip(data.intro || data.sections?.[0]?.body?.[0] || name, 158)]);
  return {title, description, name};
}
// NoGuru's own profiles, as listed in the footer of noguru.io.
const PROFILES = [['Telegram channel', 'https://t.me/nogurusignals'], ['Telegram chat', 'https://t.me/NoGuru_Crypto_Chat'], ['X', 'https://x.com/nogurusignals'],
  ['YouTube', 'https://www.youtube.com/@nogurusignals'], ['Discord', 'https://discord.gg/AeQjGdUgKA'], ['Bluesky', 'https://bsky.app/profile/nogurusignals.bsky.social']];
// The same profiles in every footer, each with a small drawn icon (our own line drawings, not the brands' logo files).
const ICONS = {
  Telegram: '<path d="M21 4 3 11.2l5.6 2 2.1 6.3 3.1-4 4.4 3.2z"/><path d="m8.6 13.2 8.2-5.6"/>',
  X: '<path d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5"/>',
  YouTube: '<rect x="2.5" y="6" width="19" height="12" rx="3.5"/><path d="m10 9.4 4.6 2.6-4.6 2.6z"/>',
  Discord: '<path d="M8.2 6.2C6.6 6.5 5.4 7 4.6 7.5 3 10.300 2.500 13.600 2.800 16.800c1.400 1 2.800 1.600 4.200 2l1-1.900M15.800 6.200c1.600.3 2.800.8 3.600 1.300 1.600 2.800 2.100 6.100 1.800 9.300-1.400 1-2.800 1.600-4.200 2l-1-1.900"/><path d="M8.200 6.200c2.500-.6 5.100-.6 7.600 0M7.900 16.900c2.700.9 5.500.9 8.200 0"/><circle cx="9.200" cy="12.400" r="1.300"/><circle cx="14.800" cy="12.400" r="1.300"/>',
  Bluesky: '<path d="M12 11.300C10.600 8.500 7.500 5.300 5.200 4.800 3.600 4.500 3 5.500 3.200 7.400c.2 1.800.5 4.300 2.300 5.100 1.200.5 2.800.3 4-.2-2.200.6-4 2-2.600 4 1.800 2.400 4-.3 5.100-2.900 1.100 2.600 3.300 5.300 5.100 2.900 1.400-2-.4-3.400-2.600-4 1.200.5 2.800.7 4 .2 1.800-.8 2.100-3.300 2.300-5.100.2-1.900-.4-2.900-2-2.600-2.300.500-5.400 3.700-6.800 6.500z"/>',
};
const SOCIAL_NAV = `<nav class="foot-social" aria-label="NoGuru elsewhere">${PROFILES.map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer me" data-umami-event="social-${name.toLowerCase().replace(/[^a-z]+/g, '-')}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.600" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name.split(' ')[0]]}</svg><span>${name}</span></a>`).join('')}</nav>`;
const INDEXNOW_KEY = '5a2be5031a137218170e74292429a186';   // public by design: it is served at /<key>.txt
const ORG = {'@type': 'Organization', '@id': `${ORIGIN}/#organization`, name: 'NoGuru', legalName: 'NoGuru LLC', url: `${ORIGIN}/`,
  logo: `${ORIGIN}/pilot/assets/noguru-guide-original.png`, email: 'hello@noguru.io',
  sameAs: PROFILES.map(([, url]) => url),
  address: {'@type': 'PostalAddress', streetAddress: '940 E 3rd St Ste 203', addressLocality: 'Casper', addressRegion: 'WY', postalCode: '82601', addressCountry: 'US'}};
// What is sold, in the words of the pricing page. On the pricing page and the home page.
const serviceNode = (url) => ({'@type': 'Service', '@id': `${ORIGIN}/#service`, name: 'NoGuru', alternateName: 'Stepgrid, the NoGuru bot', serviceType: 'Automated crypto trading signals, run through Cornix', provider: {'@id': ORG['@id']}, url,
  offers: {'@type': 'Offer', price: '49.00', priceCurrency: 'USD', description: 'Founding price per month after a 14-day free trial; the standard price is 99 USD a month.', url: `${ORIGIN}/${pathOf('pricing')}`}});
// The picture a shared link shows: the name and the line, 1200 x 630 (made from tools/share-card.html).
const SHARE = `<meta property="og:image" content="${ORIGIN}/pilot/assets/noguru-share-card.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="NoGuru. An automated crypto trading bot.">
  <meta name="twitter:card" content="summary_large_image">`;
function crumbTrail(page) {
  const trail = [['Home', '']];
  if (page.startsWith('academy-')) trail.push(['Academy', pathOf('academy')]);
  else if (page.startsWith('digest-')) trail.push(['Digest', pathOf('digest')]);
  trail.push([metaFor(page).name, pathOf(page)]);
  return {'@type': 'BreadcrumbList', itemListElement: trail.map(([name, p], i) => ({'@type': 'ListItem', position: i + 1, name, item: `${ORIGIN}/${p}`}))};
}
function structuredData(page, record) {
  const url = `${ORIGIN}/${pathOf(page)}`, {title, description} = metaFor(page), data = learningPages[page];
  const graph = [ORG, crumbTrail(page)];
  if (page === 'pricing') graph.push(serviceNode(url));
  else if (page === 'faq' && data?.sections?.length) graph.push({'@type': 'FAQPage', mainEntity: data.sections.filter((s) => s.body?.length).map((s) => ({'@type': 'Question', name: s.title, acceptedAnswer: {'@type': 'Answer', text: s.body.join(' ')}}))});
  else if (page === 'record') graph.push({'@type': 'Dataset', name: 'NoGuru published trade record', description, url, creator: {'@id': ORG['@id']}, isAccessibleForFree: true,
    ...(record ? {temporalCoverage: `${record.rec.windowStart}/${record.rec.windowEnd}`, dateModified: BUILD_DAY} : {}),
    distribution: [{'@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: FEEDS.record}, {'@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: FEEDS.headline}]});
  else if (page.startsWith('academy-') || page.startsWith('digest-')) graph.push({'@type': 'Article', headline: clip(data.title, 110), description, url, author: {'@id': ORG['@id']}, publisher: {'@id': ORG['@id']},
    ...(page.startsWith('digest-') && /^\d{4}-\d{2}-\d{2}/.test(page.slice(7)) ? {datePublished: page.slice(7, 17)} : {})});
  else graph.push({'@type': 'WebPage', name: title, description, url, isPartOf: {'@id': `${ORIGIN}/#website`}});
  return {'@context': 'https://schema.org', '@graph': graph};
}
const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
const ROBOTS = PRODUCTION ? '' : '\n  <meta name="robots" content="noindex, nofollow">';
function headTags({title, description, url, root, extraCss = '', ld}) {
  return `<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#f7f3ea">${ROBOTS}
  <title>${esc(title)}</title>
  <meta name="description" content="${escAttr(description)}">
  <link rel="canonical" href="${escAttr(url)}">
  <meta property="og:type" content="website"><meta property="og:site_name" content="NoGuru">
  <meta property="og:title" content="${escAttr(title)}"><meta property="og:description" content="${escAttr(description)}">
  <meta property="og:url" content="${escAttr(url)}">${SHARE}
  <link rel="icon" href="${root}experience/assets/companion-mark.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${root}pilot/assets/noguru-touch-icon.png">
  <link rel="preload" href="${root}pilot/fonts/Manrope.woff" as="font" type="font/woff" crossorigin>
  <link rel="preload" href="${root}pilot/fonts/Fraunces.woff" as="font" type="font/woff" crossorigin>
  <link rel="stylesheet" href="${root}pilot/styles.css">
  <link rel="stylesheet" href="${root}read/read.css">${extraCss}
  ${jsonLd(ld)}${ANALYTICS ? `\n  ${ANALYTICS}\n  <script type="module" src="${root}track.js"></script>` : ''}`;
}

/* ---------- the frame every reading page shares ---------- */
const NAMES = {'dca-bot-vs-grid-bot': 'DCA bot vs grid bot', record: 'Trade by trade', library: 'Library', academy: 'Academy', glossary: 'Glossary', digest: 'Digest', pricing: 'Pricing', 'how-it-works': 'How it works', faq: 'FAQ', risks: 'Risks', market: 'Market context', trial: 'The free trials', learn: 'Learn'};
function frame(page, article, {extraCss = '', record = null} = {}) {
  const root = rootOf(page), {title, description, name} = metaFor(page), url = `${ORIGIN}/${pathOf(page)}`;
  const to = (target, label, cls = '') => `<a href="${root}${pathOf(target)}"${cls ? ` class="${cls}"` : ''}${target === page ? ' aria-current="page"' : ''}>${label}</a>`;
  return `<!doctype html>
<html lang="en">
<head>
  ${headTags({title, description, url, root, extraCss, ld: structuredData(page, record)})}
</head>
<body data-page="${escAttr(page)}" data-name="${escAttr(NAMES[page] || name)}" data-root="${root}">
<a class="skip-link" href="#main">Skip to content</a>
<header class="bar">
  <a class="bar-mark" href="${root}" aria-label="NoGuru home">NoGuru<i>.</i></a>
  <nav aria-label="Site">
    <a href="${root}#evidence" class="wide">Evidence</a>
    <a href="${root}#questions" class="wide">Questions</a>
    ${to('how-it-works', 'How it works', 'wide')}
    ${to('pricing', 'Pricing', 'wide')}
    <details class="menu" id="menu"><summary>Menu</summary>
      <div class="menu-panel">
        <p>Home</p>
        <a href="${root}#evidence">The record</a><a href="${root}#questions">Questions</a><a href="${root}#start">Start your free trial</a><a href="${root}#expect">What to expect</a>
        <p>Read more</p>
        ${to('how-it-works', 'How it works')}${to('pricing', 'Pricing')}${to('faq', 'FAQ')}${to('risks', 'Risks')}${to('record', 'Trade by trade')}${to('market', 'Market context')}
        <p>Library</p>
        ${to('library', 'Everything')}${to('academy', 'Academy')}${to('glossary', 'Glossary')}${to('digest', 'Digest')}
        <p>Legal</p>
        ${to('terms', 'Terms')}${to('privacy', 'Privacy')}${to('impressum', 'Provider')}
      </div></details>
    <a class="bar-pill" href="${root}#start">Try it free</a>
  </nav>
</header>
<main id="main">
${article}
  <section class="read-cta" id="read-cta">
    <img src="${root}pilot/assets/noguru-guide-attentive-240.webp" alt="" width="120" height="120" loading="lazy">
    <div><h2>Rather see it than read about it?</h2><p>Fourteen days free, no card. It trades in your own exchange account.</p></div>
    <a class="button primary" href="${root}#start">Try it free for 14 days <span aria-hidden="true">→</span></a>
  </section>
</main>
<footer class="read-foot">
  <nav aria-label="Library and legal"><a href="${root}">Home</a>${to('how-it-works', 'How it works')}${to('pricing', 'Pricing')}${to('record', 'Track record')}${to('library', 'Library')}${to('academy', 'Academy')}${to('glossary', 'Glossary')}${to('digest', 'Digest')}${to('market', 'Free market dashboard')}${to('terms', 'Terms')}${to('privacy', 'Privacy')}${to('impressum', 'Provider')}</nav>
  ${SOCIAL_NAV}
  <p>${PRODUCTION ? '' : 'Review preview. '}Trading crypto can lose money. Coins the bot holds can fall in value and may not recover. NoGuru is operated by NoGuru LLC, Casper, Wyoming, USA.</p>
</footer>
<script type="module" src="${root}read/page.js"></script>
</body>
</html>
`;
}
function crumbFor(page) {
  const root = rootOf(page);
  if (page.startsWith('academy-')) return ['← Academy', `${root}${pathOf('academy')}`];
  if (page.startsWith('digest-')) return ['← Digest', `${root}${pathOf('digest')}`];
  if (page === 'library') return ['← Home', root];
  if (page === 'market' || page === 'record') return ['← The record', `${root}#evidence`];
  return ['← Library', `${root}${pathOf('library')}`];
}
const crumb = (page) => { const [label, href] = crumbFor(page); return `<a href="${href}" class="text-link return-to-guide" id="crumb">${label}</a>`; };

// Pricing carries the checkout (trial and payment) right under its cards.
const checkout = () => new Raw(fs.readFileSync(path.join(HERE, 'checkout.html'), 'utf8').replace(/<!--[\s\S]*?-->\s*/, '').split('{root}').join(rootOf('pricing')).trim());
function readingArticle(page) {
  const data = learningPages[page];
  const article = new El('article'); article.id = 'learning-page'; article.className = 'learning-page'; article.setAttribute('aria-labelledby', 'learning-title');
  const cards = new El('div'); cards.id = 'learning-cards'; cards.className = 'plan-cards';
  const toc = new El('nav'); toc.id = 'learning-toc'; toc.setAttribute('aria-label', 'On this page');
  const sections = new El('div'); sections.id = 'learning-sections';
  const source = new El('aside'); source.id = 'learning-source';
  const tools = new El('details'); tools.className = 'reading-tools';
  tools.append(new Raw('<summary>Find something on this page</summary><label class="search-field">Search this page<input id="learning-search" type="search" placeholder="A word or topic" autocomplete="off"></label><p id="search-status" role="status"></p>'), toc);
  if ((data.sections || []).length < 4) tools.hidden = true;
  article.append(new Raw(`${crumb(page)}\n    <header class="learning-header">${data.eyebrow ? `<p id="learning-eyebrow" class="eyebrow">${esc(data.eyebrow)}</p>` : ''}<h1 id="learning-title" tabindex="-1">${esc(data.title)}</h1>${data.intro ? `<p id="learning-intro" class="summary">${esc(data.intro)}</p>` : ''}</header>`),
    cards, ...(page === 'pricing' ? [checkout()] : []), tools, sections, source);
  renderReadingPage(data, {page, sections, toc, cards, source, link: linkFor(page)});
  // Content images are stored beside the content modules.
  return `  ${article.outerHTML.split(`${BUILD_BASE}pilot/`).join(`${rootOf(page)}pilot/`)}`;
}

/* ---------- the live record, as a dated snapshot ---------- */
async function snapshot() {
  if (!FETCH) return null;
  try {
    const [raw, headRaw] = await Promise.all([getJSON(FEEDS.record), getJSON(FEEDS.headline).catch(() => null)]);
    let head = null; try { head = headRaw ? readHeadline(headRaw) : null; } catch { head = null; }
    return {rec: readRecord(raw), head, evidence: withHeadline(normalizeEvidence(raw), head)};
  } catch (error) { console.warn(`! The live record could not be read (${error.message}); pages are built without a snapshot.`); return null; }
}
function recordArticle(record) {
  const body = new El('div'); body.id = 'record-body';
  if (record) { renderRecord(body, record.rec, record.head); body.dataset.snapshot = utcDay(BUILD_DAY); } else body.hidden = true;
  const state = record ? `Snapshot of ${utcDay(BUILD_DAY)} · covers ${utcDay(record.rec.windowStart)} – ${utcDay(record.rec.windowEnd)} · updates when the page loads` : 'Reading the live record…';
  return `  <article id="record-page" class="learning-page" aria-labelledby="record-title">
    ${crumb('record')}
    <header class="learning-header"><p class="eyebrow">Trade by trade</p><h1 id="record-title" tabindex="-1">Every finished trade. <em>Nothing left out.</em></h1><p class="summary">NoGuru’s published record, read live: what it made, how the results spread, which coins it traded, and every finished trade one by one.</p></header>
    <div class="record-bar"><span class="record-dot" aria-hidden="true"></span><span id="record-status" role="status" data-state="${record ? 'snapshot' : 'loading'}">${esc(state)}</span><button type="button" id="record-refresh"><span aria-hidden="true">↻</span> Refresh</button></div>
    <div id="record-down" class="record-block" hidden><p>The record can’t be reached right now, so nothing is shown rather than old numbers.</p><button type="button" class="record-more" id="record-retry">Try again</button></div>
    ${body.outerHTML}
  </article>`;
}
function marketArticle() {
  const shell = fs.readFileSync(path.join(HERE, 'market-shell.html'), 'utf8').replace(/ data-route/g, '').replace(/href="\?page=market#/g, 'href="#');
  return `  <article id="market-page" class="learning-page" aria-labelledby="market-title">
    ${crumb('market')}
    <header class="learning-header"><p class="eyebrow">A separate source</p><h1 id="market-title" tabindex="-1">A little market context.</h1><p class="summary">A free service from NoGuru: the market readings you would otherwise gather from several sites, in one place. It is context, not your account’s performance, a forecast or a trading instruction.</p></header>
    ${shell.trim()}
  </article>`;
}

/* ---------- write everything ---------- */
const WRITTEN = ['index.html'];   // every file this build writes; tools/bundle-production.mjs starts from this list
function write(rel, content) { WRITTEN.push(rel); const file = path.join(SITE, rel); fs.mkdirSync(path.dirname(file), {recursive: true}); fs.writeFileSync(file, rel.endsWith('.html') ? tagSteps(content) : content); }
const record = await snapshot();
// Pricing: the pay-back figure is worked out from the record, the same way the page does it when it loads
// (site/read/page.js) and the home page does (site/home-record.js). No typed-in figure.
{
  const {recordPace} = await load('pilot/data.js'), {EXAMPLE_TEXT, exampleAmount} = await load('example.js');
  const card = learningPages.pricing.cards.find((c) => c.title === 'On 10,000 USDT, about');
  const rate = recordPace(record?.evidence);
  if (!card) throw new Error('The pricing page no longer has its record-pace card; update tools/build-static.mjs.');
  if (!card.title.includes(EXAMPLE_TEXT)) throw new Error('The pricing card names another example amount than site/example.js.');
  if (Number.isFinite(rate)) {
    card.price = exampleAmount(rate);
    card.body = [`The record’s pace is about ${rate.toFixed(1)}% a month, before fees. On ${EXAMPLE_TEXT} of capital that is about ${exampleAmount(rate)} a month; the subscription is $49.`];
  } else { card.price = '—'; card.body = ['The figure is the record’s monthly pace on 10,000 USDT. It is filled in from the live record when the page loads.']; }
}
// NoGuru's referral list: the exchange links are written into the home page so they are there without JavaScript.
async function referralList() {
  if (!FETCH) return null;
  try { const d = await getJSON('https://noguru.io/data/affiliates.json'); return Array.isArray(d.links) ? d.links : null; }
  catch (error) { console.warn(`! The referral list could not be read (${error.message}); the home page keeps its current exchange list.`); return null; }
}
const referrals = await referralList();
const httpsUrl = (value) => { try { const u = new URL(value); return u.protocol === 'https:' ? u.href : null; } catch { return null; } };
function exchangeItems(links) {
  const exchanges = links.filter((l) => l && typeof l.name === 'string' && /^exchange/.test(l.kind || '')).sort((x, y) => Number(!!y.recommended) - Number(!!x.recommended));
  return exchanges.map((ex) => {
    const url = httpsUrl(ex.url);
    const head = url ? `<span class="adlabel">Ad</span><a href="${escAttr(url)}" target="_blank" rel="sponsored noopener noreferrer" data-event="signup-exchange-${escAttr(ex.key)}">${esc(ex.name)} <span aria-hidden="true">↗</span></a>` : `<b>${esc(ex.name)}</b>`;
    return `<li><p>${head}${ex.recommended ? ' <i class="su-rec">Our recommendation</i>' : ''}</p>${typeof ex.blurb === 'string' && ex.blurb ? `<p class="su-blurb">${esc(ex.blurb)}</p>` : ''}${ex.free_month && url ? '<p class="su-offer">One free month of NoGuru.</p>' : ''}</li>`;
  }).join('');
}
for (const page of pages) {
  const html = page === 'record' ? frame(page, recordArticle(record), {record})
    : page === 'market' ? frame(page, marketArticle(), {extraCss: `\n  <link rel="stylesheet" href="${rootOf(page)}dashboard.css">`})
      : frame(page, readingArticle(page));
  write(`${pathOf(page)}index.html`, html);
}

// Old addresses keep working: the earlier one-address reader, and the old site's .html pages.
const redirect = (target, canonical) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Moved | NoGuru</title>
<link rel="canonical" href="${escAttr(canonical)}"><meta http-equiv="refresh" content="0; url=${escAttr(target)}">
</head><body><p>This page has moved: <a href="${escAttr(target)}">continue</a>.</p></body></html>
`;
write('read/index.html', `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>NoGuru</title>
<script>
// Earlier links looked like /read/?page=pricing#payback. Each page now has its own address.
(function () {
  var paths = ${JSON.stringify(Object.fromEntries(pages.map((p) => [p, pathOf(p)])))}, ids = ${JSON.stringify(Object.fromEntries(pages.filter((p) => learningPages[p]).map((p) => [p, logicalIds(p)])))};
  var page = new URLSearchParams(location.search).get('page') || 'library', anchor = decodeURIComponent(location.hash.slice(1));
  var home = {story: '', evidence: '#evidence', setup: '#start'};
  if (home[page] !== undefined) { location.replace('../' + home[page]); return; }
  if (!paths[page]) page = 'library';
  location.replace('../' + paths[page] + (anchor ? '#' + ((ids[page] || []).indexOf(anchor) >= 0 ? 'learning-' : '') + anchor : ''));
})();
</script></head><body><noscript><p><a href="../library/">Open the NoGuru library</a></p></noscript></body></html>
`);
let stubs = 0;
const legacy = {...OLD_PAGES, 'about.html': 'about', 'exchanges.html': 'exchanges', 'resources.html': 'resources', 'examples.html': 'examples', 'market-stress.html': 'market-stress', 'getting-started.html': 'setup-guide'};
for (const [old, target] of Object.entries(legacy)) {
  if (!old.endsWith('.html') || old.endsWith('index.html') || !known(target)) continue;
  write(old, redirect(`${'../'.repeat(old.split('/').length - 1) || './'}${pathOf(target)}`, `${ORIGIN}/${pathOf(target)}`)); stubs += 1;
}
for (const page of pages) {
  const m = page.match(/^(academy|digest)-(.+)$/); if (!m) continue;
  write(`${m[1]}/${m[2]}.html`, redirect(`./${m[2]}/`, `${ORIGIN}/${pathOf(page)}`)); stubs += 1;
}

// The home page keeps its hand-written file; the build refreshes its search tags and the dated record snapshot in place.
const setText = (html, id, text) => html.replace(new RegExp(`(<[a-z0-9]+\\b[^>]*\\bid="${id}"[^>]*>)[^<]*(<)`), (_, open, close) => `${open}${esc(text)}${close}`);
const EXAMPLE = await load('example.js');
function buildHome() {
  const file = path.join(SITE, 'index.html'); let html = fs.readFileSync(file, 'utf8');
  const title = 'NoGuru — an automated crypto trading bot', description = 'An automated crypto bot that buys in steps, sells above its average and starts again, in your own exchange account. See the live record and try it free for 14 days.';
  const seo = `<!-- seo:start (written by tools/build-static.mjs) -->
  <meta name="description" content="${escAttr(description)}">
  <link rel="canonical" href="${ORIGIN}/">
  <meta property="og:type" content="website"><meta property="og:site_name" content="NoGuru">
  <meta property="og:title" content="${escAttr(title)}"><meta property="og:description" content="${escAttr(description)}">
  <meta property="og:url" content="${ORIGIN}/">${SHARE}
  <link rel="apple-touch-icon" href="./pilot/assets/noguru-touch-icon.png">
  ${jsonLd({'@context': 'https://schema.org', '@graph': [ORG, {'@type': 'WebSite', '@id': `${ORIGIN}/#website`, name: 'NoGuru', url: `${ORIGIN}/`, publisher: {'@id': ORG['@id']}}, serviceNode(`${ORIGIN}/`)]})}
  ${ANALYTICS ? `${ANALYTICS}\n  ` : ''}<!-- seo:end -->`;
  html = /<!-- seo:start[\s\S]*?<!-- seo:end -->/.test(html) ? html.replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->/, seo) : html.replace(/(<title>[^<]*<\/title>)/, `$1\n  ${seo}`);
  // The home page's footer carries the same profile links as every other page.
  if (!/<nav class="foot-social"[\s\S]*?<\/nav>/.test(html)) throw new Error('The home page no longer has its social links; update tools/build-static.mjs.');
  html = html.replace(/<nav class="foot-social"[\s\S]*?<\/nav>/, SOCIAL_NAV);
  html = html.replace(/\n?\s*<meta name="robots" content="noindex, nofollow">/, '').replace(/(<meta name="theme-color"[^>]*>)/, `$1${ROBOTS}`);
  // The footer's "Review preview." belongs to the review build only.
  html = html.replace(/<p>(?:Review preview\. )?Trading crypto can lose money\./, `<p>${PRODUCTION ? '' : 'Review preview. '}Trading crypto can lose money.`);
  if (record) {
    const {texts, latest} = homeRecord(record.evidence);
    for (const [id, text] of Object.entries(texts)) html = setText(html, id, text);
    // The hero's figures (site/hero.js fills the same places from the live record).
    const ev = record.evidence;
    if (ev.closed && Number.isFinite(ev.profitPct)) {
      const day = (iso) => new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'short', timeZone: 'UTC'}).format(new Date(iso));
      const rec = {pct: `+${ev.profitPct.toFixed(1)}%`, period: `${day(ev.profitStart)} – ${day(ev.profitEnd)} ${new Date(ev.profitEnd).getUTCFullYear()}`,
        amount: `About ${EXAMPLE.exampleAmount(ev.profitPct)}.`,
        closed: ev.closed.toLocaleString('en-US'), up: ev.up.toLocaleString('en-US'), down: String(ev.down), open: String(ev.open)};
      html = html.replace(/(<[a-z0-9]+\b[^>]*\bdata-rec="([a-z]+)"[^>]*>)[^<]*(<)/g, (all, open, key, close) => (key in rec ? `${open}${esc(rec[key])}${close}` : all));
    }
    html = setText(html, 'ev-status', `Snapshot of ${utcDay(BUILD_DAY)}. The live record replaces it when the page loads.`);
    html = html.replace(/(<ol class="ev-list" id="ev-list">)[\s\S]*?(<\/ol>)/, (_, open, close) => `${open}${latest.map((r) => `<li><b${r.below ? ' class="neg"' : ''}>${esc(r.result)}</b><span>${esc(r.detail)}</span><time datetime="${escAttr(r.dateTime)}">${esc(r.when)}</time></li>`).join('')}${close}`);
    html = html.replace(/(id="ev-body") hidden/, '$1').replace(/(id="trades" aria-labelledby="tr-title") hidden/, '$1');
  }
  if (referrals) { const items = exchangeItems(referrals); if (items) html = html.replace(/(<ul class="su-exchanges" id="su-exchanges">)[\s\S]*?(<\/ul>)/, (_, open, close) => `${open}${items}${close}`); }
  fs.writeFileSync(file, tagSteps(html));
}
buildHome();

// A page for addresses that do not exist. It can be served from any address, so its links hang on a <base>.
// GitHub Pages serves 404.html by itself; the production server has to be told to (see docs/PRODUCTION-HANDOVER.md).
{
  const base = `${new URL(`${ORIGIN}/`).pathname}${pathOf('library')}`;
  const links = [['Home', '../'], ['How it works', `../${pathOf('how-it-works')}`], ['Pricing', `../${pathOf('pricing')}`], ['Questions and answers', `../${pathOf('faq')}`], ['Every trade, one by one', `../${pathOf('record')}`], ['Everything there is to read', './']];
  const article = `  <article class="learning-page" aria-labelledby="learning-title">
    <header class="learning-header"><p class="eyebrow">Page not found</p><h1 id="learning-title" tabindex="-1">This page isn’t here.</h1><p class="summary">The address may be old or mistyped. One of these will get you back on track.</p></header>
    <div class="learning-source-links">${links.map(([label, href]) => `<a href="${href}">${esc(label)}</a>`).join('')}</div>
  </article>`;
  const html = frame('library', article)
    .replace(/<title>[^<]*<\/title>/, '<title>Page not found | NoGuru</title>')
    .replace(/\s*<link rel="canonical"[^>]*>/, '').replace(/\s*<meta property="og:[a-z_:]+"[^>]*>/g, '').replace(/\s*<meta name="twitter:card"[^>]*>/, '')
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, '').replace(/\s*<meta name="robots"[^>]*>/, '')
    .replace(/(<meta name="description" content=")[^"]*(")/, '$1This address does not exist on noguru.io.$2')
    .replace(/<head>/, `<head>\n  <base href="${escAttr(base)}">\n  <meta name="robots" content="noindex">`)
    .replace(/data-page="library"/, 'data-page="not-found"');
  write('404.html', html);
}

const today = new Set(['', pathOf('record'), pathOf('market')]);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${['', ...pages.map(pathOf)].map((p) => `  <url><loc>${ORIGIN}/${p}</loc>${today.has(p) ? `<lastmod>${BUILD_DAY}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`);
// A plain-text guide to the site for AI assistants (llmstxt.org). No assistant is documented to rely on it; it costs nothing to offer.
{
  const line = (p) => { const {title, description} = metaFor(p); return `- [${title.replace(/ \| NoGuru$/, '')}](${ORIGIN}/${pathOf(p)}): ${description}`; };
  const group = (name, list) => { const rows = list.filter((p) => pages.includes(p)).map(line); return rows.length ? `## ${name}\n\n${rows.join('\n')}\n` : ''; };
  write('llms.txt', [`# NoGuru\n\n> Stepgrid, the NoGuru bot, is an automated crypto spot trading bot. It buys in steps as prices fall and sells above its average, in the customer's own exchange account, through Cornix. NoGuru never holds the customer's money or keys. Trading crypto can lose money.\n\nFigures on this site are read live from NoGuru's published record; quote them with their date.\n`,
    group('The product', ['how-it-works', 'pricing', 'trial', 'faq', 'dca-bot-vs-grid-bot', 'exchanges', 'setup-guide']),
    group('The record and the risks', ['record', 'methodology', 'risks', 'market-stress', 'examples']),
    group('Learning', ['learn', 'academy', 'glossary', 'digest', 'library']),
    group('The company', ['about', 'impressum', 'terms', 'privacy', 'disclaimer', 'support'])].filter(Boolean).join('\n'));
}
// IndexNow: the key file that proves a change notice comes from this site (sent by tools/indexnow.mjs after a release).
if (PRODUCTION) write(`${INDEXNOW_KEY}.txt`, INDEXNOW_KEY);
write('robots.txt', PRODUCTION ? fs.readFileSync(path.join(HERE, 'robots.production.txt'), 'utf8').replace(/\{ORIGIN\}/g, ORIGIN) : 'User-agent: *\nDisallow: /\n');

if (process.env.NOGURU_MANIFEST) fs.writeFileSync(process.env.NOGURU_MANIFEST, JSON.stringify([...new Set(WRITTEN)].sort(), null, 1));
console.log(`${PRODUCTION ? 'Production' : 'Review'} build for ${ORIGIN}: ${pages.length} pages, ${stubs} redirects from old addresses, record snapshot ${record ? `of ${BUILD_DAY}` : 'not included'}.`);
