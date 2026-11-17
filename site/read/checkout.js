// The pricing page's checkout: 14 days free, or a paid term in crypto.
//
// It does exactly what the live noguru.io pricing page has done since October 2026, through the same three
// routes of NoGuru's own server (the member gate):
//   GET  /gate/api/price    the price table a new buyer gets (founding or standard), never typed in here
//   POST /gate/api/trial    {buyer_tg, consent, ref, src}            -> starts the 14 days; src is the campaign
//                           of this visit, the same tag the Telegram link carries as trial_<tag> (optional)
//   POST /gate/api/invoice  {plan, asset, buyer_tg, consent, ref}    -> {id}; the payment page is /gate/i/<id>
// Nothing is sent before the four agreement boxes are ticked. No payment details are handled on this site.
import {track} from '../track.js';
import {currentCampaign} from '../campaign.js';

// The agreement text is stored on the server under this version, so a stored consent can be traced to the exact
// words that were on screen. Change it in the same commit as ANY change to the four sentences in tools/checkout.html.
const AGREEMENT_VERSION = '2026-11-01.3';
const PLAN_BASE = 'STEPGRID';
// The routes exist on noguru.io only. A copy of the site anywhere else (the review address, a local preview)
// shows the form and the prices but never starts a trial or creates an invoice.
const LIVE = /(^|\.)noguru\.io$/.test(location.hostname);
const API = LIVE ? '' : 'https://noguru.io';

const $ = (id) => document.getElementById(id);
const form = $('checkout'), dialog = $('agree-back');
if (form && dialog) {
  const msg = $('buy-msg'), term = $('term'), boxes = () => [...dialog.querySelectorAll('.agree-ck')];
  let plans = null, discounts = {}, pending = null;
  const planKey = (t) => (t === '1' ? PLAN_BASE : `${PLAN_BASE}_${t}M`);

  /* ---------- prices ---------- */
  function paint() {
    const free = term.value === 'free';
    $('path-free').hidden = !free; $('path-pay').hidden = free; msg.textContent = '';
    if (plans) { $('big-price').textContent = `$${plans[PLAN_BASE]}`; $('term-1').textContent = `1 month — $${plans[PLAN_BASE]}`; }
    if (free) return;
    const total = plans?.[planKey(term.value)], out = $('term-price'), btn = $('buy'), months = parseInt(term.value, 10);
    if (typeof total !== 'number') { out.textContent = 'The price could not be read just now. Try again in a moment.'; btn.textContent = 'Pay'; btn.disabled = true; return; }
    btn.disabled = false; btn.textContent = `Pay $${total.toFixed(2)}`;
    out.textContent = months === 1 ? `You pay $${total.toFixed(2)}, billed every month.`
      : `You pay $${total.toFixed(2)} once, covering ${months} months ($${(total / months).toFixed(2)}/month${discounts[term.value] ? ` — ${discounts[term.value]}% off` : ''}).`;
  }
  const json = (path) => fetch(API + path, {headers: {Accept: 'application/json'}}).then((r) => (r.ok ? r.json() : null)).catch(() => null);
  (async () => {
    // The published table first, then the checkout's own answer for a new buyer, which wins when it is well-formed.
    const sz = await json('/data/sizing.json');
    if (sz) { plans = sz.founding_closed ? sz.plans_standard : sz.plans; discounts = sz.term_discount_pct || {}; paint(); }
    const live = await json('/gate/api/price');
    if (live && live.plans && typeof live.plans[PLAN_BASE] === 'number') {
      plans = live.plans;
      if (live.founding_open === false) $('founding-line')?.remove();
      paint();
    }
  })();
  term.addEventListener('change', paint);
  paint();

  /* ---------- the referral code a visitor arrived with (?ref=CODE), kept as the live site keeps it ---------- */
  const refCode = () => {
    try {
      const q = new URLSearchParams(location.search).get('ref');
      if (q && /^[A-Za-z2-9]{8}$/.test(q)) localStorage.setItem('ref:code', q.toUpperCase());
      return localStorage.getItem('ref:code') || localStorage.getItem('noguru:ref') || null;
    } catch { return null; }
  };
  refCode();

  /* ---------- the agreement ---------- */
  const username = () => {
    const tg = $('tg').value.trim().replace(/^@/, '');
    if (!tg) { msg.textContent = 'Enter your Telegram username first.'; $('tg').focus(); return null; }
    return tg;
  };
  function openAgreement(kind) {
    pending = kind;
    $('agree-intro').textContent = kind === 'trial'
      ? 'The 14 days free connect a real exchange account and place real orders, so these apply from day one. You cannot continue until all four are ticked.'
      : 'Please read these. You cannot continue until all four are ticked.';
    boxes().forEach((b) => { b.checked = false; });
    $('agree-ok').disabled = true;
    if (dialog.showModal) dialog.showModal(); else dialog.setAttribute('open', '');
    track(kind === 'trial' ? 'checkout-trial-open' : 'checkout-pay-open', kind === 'trial' ? undefined : {term: term.value});
  }
  const closeAgreement = () => { if (dialog.close) dialog.close(); else dialog.removeAttribute('open'); };
  boxes().forEach((b) => b.addEventListener('change', () => { $('agree-ok').disabled = !boxes().every((x) => x.checked); }));
  $('agree-cancel').addEventListener('click', () => { pending = null; closeAgreement(); });
  dialog.addEventListener('click', (e) => { if (e.target === dialog) { pending = null; closeAgreement(); } });   // a tap outside the box
  $('trial').addEventListener('click', () => { if (username()) openAgreement('trial'); });
  $('buy').addEventListener('click', () => { if (username()) openAgreement('buy'); });

  /* ---------- send ---------- */
  $('agree-ok').addEventListener('click', async () => {
    const kind = pending, tg = username();
    const consent = {agreement_version: AGREEMENT_VERSION, accepted: boxes().map((b) => b.id), accepted_at: new Date().toISOString()};
    closeAgreement(); pending = null;
    if (!tg || !kind) return;
    if (!LIVE) { msg.textContent = 'This is a review copy of the site. Starting the 14 days and paying work on noguru.io only; nothing was sent.'; return; }
    const post = (path, body) => fetch(API + path, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)});
    try {
      if (kind === 'trial') {
        msg.textContent = 'Starting your 14 days free…';
        const src = currentCampaign();
        const r = await post('/gate/api/trial', {buyer_tg: tg, consent, ref: refCode(), ...(src ? {src} : {})}), d = await r.json();
        if (!r.ok) { msg.textContent = d.error || 'Could not start the trial — try again shortly.'; track('checkout-trial-failed'); return; }
        // A bot cannot message anyone who has not started it, so the last step has to be on screen.
        msg.textContent = 'One step left: open @NoGuruMembers_bot on Telegram and tap Start. Your invite arrives there. ';
        const a = document.createElement('a'); a.className = 'checkout-btn'; a.href = 'https://t.me/NoGuruMembers_bot'; a.textContent = 'Open the bot';
        a.target = '_blank'; a.rel = 'noopener noreferrer'; a.dataset.umamiEvent = 'checkout-open-bot';
        msg.append(a);
        track('checkout-trial-started');
        return;
      }
      msg.textContent = 'Creating invoice…';
      const r = await post('/gate/api/invoice', {plan: planKey(term.value), asset: $('asset').value, buyer_tg: tg, consent, ref: refCode()}), d = await r.json();
      if (!r.ok) { msg.textContent = d.error || 'Checkout unavailable — try again shortly.'; track('checkout-pay-failed'); return; }
      track('checkout-invoice-created', {term: term.value, asset: $('asset').value});
      location.href = `${API}/gate/i/${encodeURIComponent(d.id)}`;
    } catch { msg.textContent = 'Could not reach the server — try again shortly.'; }
  });
}
