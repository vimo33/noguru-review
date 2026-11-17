// One example amount for every record figure on the site and in the explainer video.
// The record's percentages are shown as money on a round 10,000 USDT, by plain proportion
// (decided 17 November 2026). Change the amount here and every page follows.
export const EXAMPLE = 10000;
export const EXAMPLE_TEXT = '10,000 USDT';
// A percentage of the example amount, rounded to the nearest 10 USDT because it is an illustration.
export const onExample = (pct) => (Number.isFinite(pct) ? Math.round(EXAMPLE * pct / 100 / 10) * 10 : null);
// "about 3,490 USDT" / "about −20 USDT"
export const exampleAmount = (pct) => {
  const v = onExample(pct);
  return v === null ? null : `${v < 0 ? '−' : ''}${Math.abs(v).toLocaleString('en-US')} USDT`;
};
