(() => {
  const hero = document.querySelector('.home-hero');
  const controls = hero?.querySelector('[data-copy-controls]');
  if (!controls) return;
  const choice = controls.querySelector('#hero-copy-choice');
  const play = controls.querySelector('[data-copy-play]');
  const keep = controls.querySelector('[data-copy-keep]');
  const clear = controls.querySelector('[data-copy-clear]');
  const status = hero.querySelector('[data-copy-status]');
  const headings = [...hero.querySelectorAll('[data-copy-heading]')];
  const supports = [...hero.querySelectorAll('[data-copy-support]')];
  const options = [...choice.options].map(option => ({id:option.value,name:option.textContent.replace(/^\d+ \/ \d+ · /,'')}));
  if (!options.length || headings.length !== options.length || supports.length !== options.length) return;

  const key = 'noguru-hero-copy-preference-v1';
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let preferred = null;
  let storageNote = '';
  try {
    const saved = localStorage.getItem(key);
    if (options.some(option => option.id === saved)) preferred = saved;
  } catch { storageNote = 'Browser storage is unavailable.'; }
  let current = Math.max(0, options.findIndex(option => option.id === preferred));
  let wantsAuto = !preferred && !motion.matches;
  let hovering = window.matchMedia('(hover: hover)').matches && hero.matches(':hover');
  let focused = hero.contains(document.activeElement);
  let allowPlayFocus = false;
  let inView = hero.getBoundingClientRect().bottom > 0 && hero.getBoundingClientRect().top < window.innerHeight;
  let timer = null;
  let pageActive = true;

  function render() {
    const id = options[current].id;
    headings.forEach(node => node.setAttribute('aria-hidden', String(node.dataset.copyHeading !== id)));
    supports.forEach(node => node.setAttribute('aria-hidden', String(node.dataset.copySupport !== id)));
    choice.value = id;
    play.textContent = wantsAuto ? 'Pause' : 'Play';
    play.disabled = motion.matches;
    play.setAttribute('aria-label', motion.matches ? 'Automatic rotation disabled for reduced motion' : wantsAuto ? 'Pause headline rotation' : 'Play headline rotation');
    clear.disabled = !preferred;
    keep.textContent = 'Keep this option';
    keep.setAttribute('aria-pressed', String(preferred === id));
    const mode = motion.matches ? 'Manual mode: reduced motion.' : !wantsAuto ? 'Paused. Choose any draft.' : (hovering || focused) ? 'Paused while you review this hero.' : !inView || document.hidden ? 'Paused while the hero is out of view.' : 'Rotates every 11 seconds.';
    const selected = preferred ? `Selected in this browser: ${options.find(option => option.id === preferred).name}.` : 'No option selected in this browser.';
    status.textContent = `${mode} ${storageNote || selected}`;
  }

  function sync() {
    window.clearTimeout(timer);
    timer = null;
    render();
    if (wantsAuto && !motion.matches && !hovering && !focused && inView && !document.hidden && pageActive) {
      timer = window.setTimeout(() => {
        current = (current + 1) % options.length;
        sync();
      }, 11000);
    }
  }

  function choose(index) {
    current = (index + options.length) % options.length;
    wantsAuto = false;
    sync();
  }

  controls.querySelector('[data-copy-prev]').addEventListener('click', () => choose(current - 1));
  controls.querySelector('[data-copy-next]').addEventListener('click', () => choose(current + 1));
  choice.addEventListener('change', () => choose(options.findIndex(option => option.id === choice.value)));
  play.addEventListener('click', () => {
    if (motion.matches) return;
    wantsAuto = !wantsAuto;
    // Explicit Play can run while this button retains touch or keyboard focus.
    // Moving focus anywhere else in the hero suspends rotation as usual.
    allowPlayFocus = wantsAuto;
    focused = hero.contains(document.activeElement) && !(allowPlayFocus && document.activeElement === play);
    sync();
  });
  keep.addEventListener('click', () => {
    wantsAuto = false;
    preferred = options[current].id;
    try {
      localStorage.setItem(key, preferred);
      storageNote = '';
    } catch { storageNote = `Selected for this visit: ${options[current].name}. Browser storage is unavailable.`; }
    sync();
  });
  clear.addEventListener('click', () => {
    wantsAuto = false;
    preferred = null;
    try {
      localStorage.removeItem(key);
      storageNote = '';
    } catch { storageNote = 'Cleared for this visit. Browser storage is unavailable; a saved choice may return on reload.'; }
    sync();
  });
  hero.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' || event.pointerType === 'pen') { hovering = true; sync(); }
  });
  hero.addEventListener('pointerleave', () => { hovering = false; sync(); });
  hero.addEventListener('focusin', () => { allowPlayFocus = false; focused = true; sync(); });
  hero.addEventListener('focusout', () => {
    queueMicrotask(() => { focused = hero.contains(document.activeElement) && !(allowPlayFocus && document.activeElement === play); sync(); });
  });
  document.addEventListener('visibilitychange', sync);
  const motionChanged = () => { if (motion.matches) wantsAuto = false; sync(); };
  if (motion.addEventListener) motion.addEventListener('change', motionChanged);
  else motion.addListener(motionChanged);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { inView = entries[0].isIntersecting; sync(); }, {threshold:0}).observe(hero);
  }
  window.addEventListener('pagehide', () => { pageActive = false; sync(); });
  window.addEventListener('pageshow', () => { pageActive = true; sync(); });
  sync();
  controls.hidden = false;
})();
