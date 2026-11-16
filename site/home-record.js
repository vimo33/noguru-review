// The home page's record wording, worked out from the published record. Pure: no page access, so the
// same wording is used live in the browser (site.js) and for the dated snapshot written into the HTML
// when the site is built (tools/build-static.mjs).
import {paybackCapital, recordPace} from './pilot/data.js';

export const fmtDate = (iso, withTime = false) => new Intl.DateTimeFormat('en-GB', {
  day: 'numeric', month: 'short', ...(withTime ? {hour: '2-digit', minute: '2-digit'} : {year: 'numeric'}), timeZone: 'UTC',
}).format(new Date(iso));
export const pct = (v, d = 1) => `${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v).toFixed(d)}%`;
function took(hours) {
  if (hours < 1) return `${Math.max(1, Math.round(hours * 60))} min`;
  if (hours < 48) return `${Math.round(hours)} h`;
  return `${Math.round(hours / 24)} days`;
}

// Returns {texts: {elementId: text}, latest: [{result, below, detail, dateTime, when}]}.
export function homeRecord(ev) {
  const texts = {
    'ev-pct': pct(ev.grossSinceStart),
    'ev-period': `${fmtDate(ev.windowStart)} – ${fmtDate(ev.windowEnd)}`,
    'ev-closed': ev.closed.toLocaleString('en-US'),
    'ev-up': ev.up.toLocaleString('en-US'),
    'ev-open': ev.open.toLocaleString('en-US'),
  };
  if (Number.isFinite(ev.openVsCost)) {
    const below = ev.openVsCost < 0, gap = `${Math.abs(ev.openVsCost).toFixed(1)}% ${below ? 'below' : 'above'} what they cost`;
    texts['ev-open-note'] = `still open, together ${gap}`;
    texts['q-open-now'] = `Right now ${ev.open} trades are still open, together ${gap}.`;
  }
  const fast = ev.durationSummary?.under24hPct;
  texts['ev-fast'] = Number.isFinite(fast) ? `${Math.round(fast)}%` : '—';
  if (Number.isFinite(fast)) texts['x-fast'] = `${Math.round(fast)}%`;
  const rate = recordPace(ev), need = paybackCapital(49, rate);
  if (need) {
    texts['q-payback'] = `$${need.toLocaleString('en-US')}`;
    texts['q-payback-how'] = `The record’s pace is about ${rate.toFixed(1)}% a month on the money set aside for it, before fees. At that pace $${need.toLocaleString('en-US')} earns about $49 a month. A pace from the past, not a promise. $49 is the founding price; the standard price is $99 a month once founding places are gone.`;
  }
  // One pace for the whole page: the same monthly figure the pay-back answer uses.
  if (Number.isFinite(rate)) texts['x-month'] = `${Math.round(rate)}%`;

  // The sale is not fixed at 2%: the bot follows a rise before selling, so show the spread, not only the middle.
  const sorted = ev.rows.map((r) => r.pct).sort((a, b) => a - b), n = sorted.length;
  const median = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
  const over3 = Math.round(sorted.filter((v) => v > 3).length / n * 100);
  texts['ev-avg'] = `Selling starts about 2% above a coin’s average, then follows the price up. Of ${ev.closed.toLocaleString('en-US')} finished trades, the typical one made ${pct(median, 1)}, ${over3}% made more than 3%, and the best made ${pct(sorted[n - 1], 1)}. The latest six:`;
  const latest = [...ev.rows].sort((a, b) => (a.closedAt < b.closedAt ? 1 : -1)).slice(0, 6).map((row) => {
    const hours = (Date.parse(row.closedAt) - Date.parse(row.openedAt)) / 3600000;
    return {result: pct(row.pct, 2), below: row.pct < 0, detail: `took ${took(hours)} · ${row.rungs} ${row.rungs === 1 ? 'buy' : 'buys'}`,
      dateTime: row.closedAt, when: `${fmtDate(row.closedAt, true)} UTC`};
  });
  return {texts, latest};
}
