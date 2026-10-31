(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const moreButton = document.querySelector('.more-toggle');
  const learn = document.querySelector('.learn-menu');
  const setLearn = (open, focus = false) => {
    moreButton?.setAttribute('aria-expanded', String(open));
    if (learn) learn.hidden = !open;
    if (focus) moreButton?.focus();
  };
  const setMenu = (open, focus = false) => {
    menuButton?.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
    if (!open) setLearn(false);
    if (focus) menuButton?.focus();
  };
  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  moreButton?.addEventListener('click', () => setLearn(moreButton.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-more')) setLearn(false);
    if (!e.target.closest('.site-header')) setMenu(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (moreButton?.getAttribute('aria-expanded') === 'true') setLearn(false,true);
      else if (menuButton?.getAttribute('aria-expanded') === 'true') setMenu(false,true);
    }
  });
  document.addEventListener('focusin', e => {
    if (!e.target.closest('.nav-more')) setLearn(false);
    if (!e.target.closest('.site-header')) setMenu(false);
  });
  nav?.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  matchMedia('(min-width: 1051px)').addEventListener('change', () => setMenu(false));
  document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
})();

// Make deliberate horizontal overflow discoverable and keyboard-accessible.
(() => {
 const panels=[...document.querySelectorAll('.table-wrap,.source-chart,.scenario-chart-wrap')];
 for(const panel of panels){
  const hint=document.createElement('p');hint.className='scroll-hint';hint.textContent='Scroll horizontally to see the full '+(panel.classList.contains('table-wrap')?'table.':'chart.');hint.hidden=true;panel.before(hint);
  const check=()=>{const overflow=panel.scrollWidth>panel.clientWidth+2;hint.hidden=!overflow;if(overflow){panel.tabIndex=0;panel.setAttribute('role','region');panel.setAttribute('aria-label',panel.classList.contains('table-wrap')?'Scrollable data table':'Scrollable chart');}else{panel.removeAttribute('tabindex');panel.removeAttribute('role');panel.removeAttribute('aria-label');}};
  new ResizeObserver(check).observe(panel);panel.querySelectorAll('img').forEach(img=>img.addEventListener('load',check));check();
 }
})();
