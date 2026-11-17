// The explainer video: opened by any button with data-video-open, shown over the page, closed with the
// button, Esc or a tap outside. It never starts by itself. What is watched is counted (site/track.js).
import {track} from './track.js';

const dialog = document.getElementById('video');
const video = dialog?.querySelector('video');

if (dialog && video) {
  const end = dialog.querySelector('#video-end'), root = document.documentElement;
  const length = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;

  // How much was really watched: seconds that played, not the furthest point reached, so that
  // dragging the bar to the end does not count as watching it.
  let watched = 0, last = null, from = '', played = false;
  const marks = new Set();
  const share = () => (video.duration > 0 ? Math.min(1, watched / video.duration) : 0);
  const bucket = () => { const s = share(); return s >= 0.95 ? 100 : s >= 0.75 ? 75 : s >= 0.5 ? 50 : s >= 0.25 ? 25 : 0; };
  const mark = (name, at) => { if (share() >= at && !marks.has(name)) { marks.add(name); track(name); } };

  video.addEventListener('timeupdate', () => {
    const now = video.currentTime;
    if (last !== null && !video.seeking && now > last && now - last < 1.5) watched += now - last;
    last = now;
    mark('video-25', 0.25); mark('video-50', 0.5); mark('video-75', 0.75); mark('video-complete', 0.95);
  });
  video.addEventListener('seeking', () => { last = null; });
  video.addEventListener('play', () => { end.hidden = true; if (!played) { played = true; track('video-play', {from}); } });
  video.addEventListener('ended', () => { end.hidden = false; });
  video.addEventListener('loadedmetadata', () => { document.querySelectorAll('[data-video-length]').forEach((n) => { n.textContent = length(video.duration); }); });
  video.addEventListener('error', () => { dialog.classList.add('failed'); track('video-error'); });

  // The larger file only where the screen can show it and the visitor has not asked to save data.
  const source = () => (video.dataset.srcLarge && screen.width * (devicePixelRatio || 1) >= 1600 && Math.min(innerWidth, innerHeight) >= 600 && !navigator.connection?.saveData ? video.dataset.srcLarge : video.dataset.src);
  function open(place) {
    from = place || 'page';
    if (!dialog.showModal) { location.href = video.dataset.src; return; }      // very old browsers: open the file itself
    if (!video.getAttribute('src')) video.setAttribute('src', source());
    end.hidden = true; dialog.classList.remove('failed');
    dialog.showModal(); root.classList.add('video-open'); document.dispatchEvent(new Event('noguru:video'));
    track('video-open', {from});
    video.play().catch(() => { /* the visitor presses play */ });
  }
  function closed() {
    video.pause(); root.classList.remove('video-open'); document.dispatchEvent(new Event('noguru:video'));
    if (played) track('video-close', {seconds: Math.round(watched), percent: bucket()});
  }
  dialog.addEventListener('close', closed);
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });   // a tap on the dark surround
  dialog.querySelectorAll('[data-video-close]').forEach((n) => n.addEventListener('click', () => dialog.close()));
  dialog.querySelector('[data-video-replay]')?.addEventListener('click', () => { video.currentTime = 0; video.play(); });
  document.querySelectorAll('[data-video-open]').forEach((n) => n.addEventListener('click', () => open(n.dataset.videoOpen)));
  // Leaving the page with the video open: count what was watched.
  addEventListener('pagehide', () => { if (dialog.open && played) track('video-close', {seconds: Math.round(watched), percent: bucket()}); });
  // ?video opens it directly, for a link from a post or an e-mail. Browsers may hold back the sound until a tap.
  if (new URLSearchParams(location.search).has('video')) open('link');
}
