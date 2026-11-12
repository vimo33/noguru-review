/**
 * The approved NoGuru artwork, unchanged. This adapter intentionally uses two
 * static original illustrations, not a 3D model or animated interpretation.
 * Semantic scene states choose an existing pose; playback never animates it.
 */
const ASSETS = Object.freeze({
  standing: new URL('./assets/noguru-guide-original.png', import.meta.url).href,
  attentive: new URL('./assets/noguru-guide-attentive-original.png', import.meta.url).href,
});
const POSES = Object.freeze({
  idle: 'standing', greet: 'standing', explain: 'standing', acknowledge: 'standing',
  select: 'attentive', buy: 'attentive', target: 'attentive', wait: 'attentive',
});

export async function createCharacter(container, {reducedMotion = false} = {}) {
  if (!container || typeof container.append !== 'function') throw new TypeError('A character container is required.');
  let disposed = false, paused = true, state = 'idle', displayedPose = null;
  let hidden = document.hidden, visible = true, accent = null;
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = !!reducedMotion || media.matches;
  const images = {}, available = new Set(), failures = [];
  const api = {ready: false, setState, setPaused, setAccent, dispose, getState};
  const owned = document.createElement('div');
  owned.className = 'original-guide-art';
  Object.assign(owned.style, {width: '100%', height: '100%', position: 'relative'});
  container.append(owned);
  container.dataset.characterMode = 'original-static';
  container.dataset.characterState = state;
  container.dataset.characterReady = 'false';

  // The source PNGs remain at their original 1254 x 1254 resolution. Object-fit
  // preserves the whole composition and alpha; no filters, crops or transforms.
  await Promise.all(Object.entries(ASSETS).map(async ([pose, src]) => {
    const image = new Image();
    image.alt = pose === 'attentive'
      ? 'The original NoGuru ceramic guide, seated and holding a small coin.'
      : 'The original NoGuru ceramic guide, standing with an open hand.';
    image.width = 1254; image.height = 1254;
    image.decoding = 'async'; image.draggable = false;
    image.dataset.guidePose = pose;
    Object.assign(image.style, {width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block'});
    images[pose] = image;
    image.src = src;
    try {
      await image.decode();
      if (image.naturalWidth > 0) available.add(pose);
      else failures.push(pose);
    } catch { failures.push(pose); }
  }));
  if (disposed) return api;
  api.ready = available.size > 0;
  container.dataset.characterReady = String(api.ready);
  if (api.ready) showPose();
  else {
    owned.textContent = 'The NoGuru guide illustration is unavailable.';
    owned.setAttribute('role', 'status');
    container.dataset.characterError = 'image-unavailable';
  }
  const observer = typeof IntersectionObserver === 'function'
    ? new IntersectionObserver(entries => { visible = entries[0]?.isIntersecting ?? true; }, {threshold: .01}) : null;
  observer?.observe(container);
  document.addEventListener('visibilitychange', onVisibility);
  media.addEventListener?.('change', onReduced);
  return api;

  function showPose() {
    const intended = POSES[state];
    const next = available.has(intended) ? intended : available.has('standing') ? 'standing' : 'attentive';
    if (displayedPose === next || !available.has(next)) return;
    displayedPose = next;
    owned.replaceChildren(images[next]);
    container.dataset.characterPose = next;
  }
  function setState(name) {
    if (disposed || !Object.hasOwn(POSES, name) || state === name) return;
    state = name;
    container.dataset.characterState = state;
    if (api.ready) showPose();
  }
  function setPaused(value) { if (!disposed) paused = !!value; }
  function setAccent(hex) {
    if (disposed || !/^#[\da-f]{6}$/i.test(hex)) return;
    accent = hex.toLowerCase();
    // The interface may consume this property. Approved character pixels never change.
    container.style.setProperty('--guide-accent', accent);
  }
  function onVisibility() { hidden = document.hidden; }
  function onReduced(event) { reduced = !!reducedMotion || !!event.matches; }
  function getState() {
    const bounds = container.getBoundingClientRect();
    const image = displayedPose ? images[displayedPose] : null;
    return {
      ready: api.ready && !disposed, mode: 'original-static', state, pose: displayedPose,
      requestedPose: POSES[state], paused, reducedMotion: reduced, hidden, offscreen: !visible,
      animating: false, elapsed: 0, width: bounds.width, height: bounds.height,
      pixelRatio: 0, meshes: 0, triangles: 0, drawCalls: 0,
      source: image?.currentSrc || image?.src || null,
      naturalWidth: image?.naturalWidth || 0, naturalHeight: image?.naturalHeight || 0,
      accent, characterRecolored: false, imageFailures: [...failures], disposed,
    };
  }
  function dispose() {
    if (disposed) return;
    disposed = true; api.ready = false;
    observer?.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
    media.removeEventListener?.('change', onReduced);
    owned.remove();
    container.dataset.characterReady = 'false';
  }
}
