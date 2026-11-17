// What visitors do on a page, counted with Umami (see tools/analytics.json). No cookies, nothing stored
// on the device, and nothing is sent when the statistics script is absent or the browser asks not to be tracked.
//
// Events, each counted against the page it happened on:
//   time-30s, time-1m, time-3m, time-5m   the page was open and visible for that long
//   scroll-50, scroll-90                   how far down a long page was read
//   seen-<section>                         a section of the home page stayed on screen for two seconds
//   question-open {question}               a question was opened
//   video-open, video-play, video-25/50/75, video-complete, video-close {seconds, percent}   (site/video.js)
//   cta-start {place}, signup-…            links, named in the HTML with data-umami-event
export function track(name, data) {
  try { window.umami?.track(name, data); } catch { /* statistics must never break the page */ }
  document.dispatchEvent(new CustomEvent('noguru:track', {detail: {name, data}}));
}

const once = new Set();
const first = (name, data) => { if (!once.has(name)) { once.add(name); track(name, data); } };

/* ---------- time on the page, counted only while it is visible ---------- */
const STEPS = [[30, 'time-30s'], [60, 'time-1m'], [180, 'time-3m'], [300, 'time-5m']];
let visibleFor = 0, since = document.hidden ? null : performance.now();
const tick = () => {
  if (since === null) return;
  const total = visibleFor + (performance.now() - since) / 1000;
  for (const [seconds, name] of STEPS) if (total >= seconds) first(name);
  if (total >= STEPS[STEPS.length - 1][0]) clearInterval(timer);
};
const timer = setInterval(tick, 5000);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { if (since !== null) visibleFor += (performance.now() - since) / 1000; since = null; }
  else since = performance.now();
});

/* ---------- how far a long page is read ---------- */
const depth = () => {
  const room = document.documentElement.scrollHeight - innerHeight;
  if (room < innerHeight * 0.5) return;                       // a page that fits the screen has no depth to measure
  const at = scrollY / room;
  if (at >= 0.5) first('scroll-50');
  if (at >= 0.9) { first('scroll-90'); removeEventListener('scroll', depth); }
};
addEventListener('scroll', depth, {passive: true});

/* ---------- sections of the home page that were really looked at ---------- */
const sections = [...document.querySelectorAll('[data-seen]')];
if (sections.length && 'IntersectionObserver' in window) {
  const timers = new Map();
  // A section counts once it has covered the middle of the screen for two seconds.
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      clearTimeout(timers.get(e.target));
      if (e.isIntersecting) timers.set(e.target, setTimeout(() => { first(`seen-${e.target.dataset.seen}`); io.unobserve(e.target); }, 2000));
    }
  }, {rootMargin: '-50% 0px -50% 0px'});
  sections.forEach((s) => io.observe(s));
}

/* ---------- questions that were opened ---------- */
document.addEventListener('toggle', (e) => {
  const d = e.target;
  if (!(d instanceof HTMLDetailsElement) || !d.open || !d.closest('.q-list, [data-questions]')) return;
  const question = (d.querySelector('summary span') || d.querySelector('summary'))?.textContent.trim().slice(0, 80);
  if (question) track('question-open', {question});
}, true);
