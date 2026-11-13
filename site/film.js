// Spike: a five-beat film (arrival, one coin, zoom out, proof, yours) that settles into the site home.
// One progress value (0..1) drives everything; scrolling and Play both move it.
import * as THREE from './pilot/vendor/three.module.min.js';
import {record} from './record.js';

const $ = (s) => document.querySelector(s);
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => t * t * (3 - 2 * t);
const span = (p, a, b) => ease(clamp((p - a) / (b - a)));
// 1 inside [a,b], fading over f on each side
const windowed = (p, a, b, f = 0.025) => Math.min(span(p, a - f, a), 1 - span(p, b, b + f));

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const film = $('#film');
const canvas = $('#space');

/* ---------- scene ---------- */
const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true, powerPreference: 'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x0e1c18, 9, 21);
const CAM_Z = 10, FOV = 35;
const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 80);
camera.position.set(0, 0, CAM_Z);

scene.add(new THREE.HemisphereLight(0xfff4e2, 0x1d3a33, 1.25));
const key = new THREE.DirectionalLight(0xffe9cf, 1.9);
key.position.set(-3, 5, 6);
scene.add(key);

// stars: two shells for parallax
function makeStars(count, rMin, rMax, size, opacity) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = lerp(rMin, rMax, Math.random());
    const th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
    pos[i * 3 + 2] = r * Math.cos(ph) - 6;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dot = document.createElement('canvas'); dot.width = dot.height = 64;
  const c = dot.getContext('2d'); const gr = c.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  c.fillStyle = gr; c.fillRect(0, 0, 64, 64);
  const m = new THREE.PointsMaterial({map: new THREE.CanvasTexture(dot), color: 0xf3ead8, size, sizeAttenuation: true,
    transparent: true, opacity, depthWrite: false, fog: false, blending: THREE.AdditiveBlending});
  const pts = new THREE.Points(g, m); pts.renderOrder = -2;
  return pts;
}
const starsFar = makeStars(reduced ? 300 : 700, 14, 30, 0.16, 0.75);
const starsNear = makeStars(reduced ? 60 : 140, 7, 13, 0.11, 0.5);
scene.add(starsFar, starsNear);

// soft glow behind the robot
const glowCanvas = document.createElement('canvas'); glowCanvas.width = glowCanvas.height = 256;
{ const c = glowCanvas.getContext('2d'); const g = c.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, 'rgba(247,231,205,.55)'); g.addColorStop(0.4, 'rgba(212,161,124,.16)'); g.addColorStop(1, 'rgba(212,161,124,0)');
  c.fillStyle = g; c.fillRect(0, 0, 256, 256); }
const glow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
  new THREE.MeshBasicMaterial({map: new THREE.CanvasTexture(glowCanvas), transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending}));
glow.renderOrder = -1;
scene.add(glow);

// the approved artwork, unchanged, on two planes that cross-fade
const loader = new THREE.TextureLoader();
function robotPlane(file) {
  const tex = loader.load(new URL(`./pilot/assets/${file}`, import.meta.url).href, () => { dirty = true; });
  tex.colorSpace = THREE.SRGBColorSpace; tex.premultiplyAlpha = true;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const mat = new THREE.MeshBasicMaterial({map: tex, transparent: true, premultipliedAlpha: true, depthWrite: false, fog: false, toneMapped: false});
  return new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
}
const robot = new THREE.Group();
const standing = robotPlane('noguru-guide-original.png');
const sitting = robotPlane('noguru-guide-attentive-original.png');
sitting.material.opacity = 0;
robot.add(standing, sitting);
scene.add(robot);

// ceramic coins
const COINS = [
  ['BTC', '#d4a17c'], ['ETH', '#aaa5be'], ['SOL', '#8fa898'], ['LINK', '#e6dcc6'], ['AVAX', '#d9b59a'],
  ['ADA', '#9fb4a6'], ['DOT', '#c2bdd2'], ['XRP', '#ead9bd'], ['NEAR', '#b9c7b6'],
];
function coinFace(label, color) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256; const c = cv.getContext('2d');
  c.fillStyle = color; c.fillRect(0, 0, 256, 256);
  c.strokeStyle = 'rgba(38,62,58,.28)'; c.lineWidth = 7; c.beginPath(); c.arc(128, 128, 98, 0, Math.PI * 2); c.stroke();
  c.fillStyle = 'rgba(38,62,58,.78)'; c.font = '700 54px Manrope, Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText(label, 128, 134);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.center.set(0.5, 0.5); t.rotation = Math.PI / 2; return t;
}
const coinGeo = new THREE.CylinderGeometry(1, 1, 0.16, 56);
const orbit = new THREE.Group(); scene.add(orbit);
const coins = COINS.map(([label, color], i) => {
  const side = new THREE.MeshStandardMaterial({color, roughness: 0.82, metalness: 0.02});
  const face = new THREE.MeshStandardMaterial({map: coinFace(label, color), roughness: 0.78, metalness: 0.02});
  const mesh = new THREE.Mesh(coinGeo, [side, face, face]);
  mesh.rotation.order = 'YXZ';
  orbit.add(mesh);
  const ring = i % 3;
  return {mesh, phase: (i / COINS.length) * Math.PI * 2 + ring * 0.7, speed: 0.16 + ring * 0.045, radius: 0.78 + ring * 0.2,
    tilt: -0.34 + ring * 0.3, lift: (ring - 1) * 0.16, size: 0.082 - ring * 0.01, spin: 0.5 + i * 0.13, picked: [0, 2, 3, 4].includes(i)};
});
const hero = coins[0]; // the one we follow

/* ---------- layout ---------- */
let L = {};
function layout() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.updateProjectionMatrix();
  const visH = 2 * Math.tan((FOV * Math.PI) / 360) * CAM_Z, visW = visH * camera.aspect;
  const portrait = camera.aspect < 0.9;
  // On phones the robot gets whatever space is left between the top bar and the words below it.
  const fit = (panel, maxShare) => {
    const top = 62, bottom = Math.max(top + 90, panel.getBoundingClientRect().top - 10);
    const size = Math.min(visW * 0.86, ((bottom - top) / h) * visH, visH * maxShare);
    return {size, y: visH / 2 - (((top + bottom) / 2) / h) * visH};
  };
  if (portrait) {
    const a = fit($('#intro'), 0.42), b = fit($('#story'), 0.3), c = fit($('#landing'), 0.42);
    L = {portrait, visH, visW, size: a.size, x: 0, y: a.y, size2: b.size, x2: 0, y2: b.y, size3: c.size, x3: 0, y3: c.y};
  } else {
    L = {portrait, visH, visW,
      size: Math.min(visH * 0.74, visW * 0.4), x: visW * 0.23, y: -visH * 0.02,
      size2: Math.min(visH * 0.6, visW * 0.34), x2: visW * 0.25, y2: -visH * 0.02};
    L.size3 = L.size; L.x3 = L.x; L.y3 = L.y;
  }
  L.orbitMax = portrait ? visW * 0.5 - 0.16 : visW * 0.19;
  // where the picked coins line up: just under the "picks a handful of coins" caption
  const capBox = $('#captions').getBoundingClientRect(), capH = document.querySelector('[data-cap=pick]').offsetHeight;
  const gapPx = portrait ? Math.min(82, (w - 40) / 4) : Math.min(130, capBox.width / 4.4);
  const rowX = portrait ? w / 2 : capBox.left + gapPx * 2, rowY = capBox.top + capH + gapPx * (portrait ? 0.95 : 0.9);
  L.row = {x: (rowX / w - 0.5) * visW, y: (0.5 - rowY / h) * visH, gap: (gapPx / h) * visH, r: ((gapPx * 0.4) / h) * visH};
  dirty = true;
}

/* ---------- chart ---------- */
const X0 = 10, X1 = 310, P_MIN = 72, P_MAX = 106, Y_TOP = 16, Y_BOT = 132;
const px = (u) => lerp(X0, X1, u);
const py = (price) => lerp(Y_BOT, Y_TOP, (price - P_MIN) / (P_MAX - P_MIN));
// price over the cycle: buy at 100, falls to 80, dips, recovers to about 2% above the 88.89 average
const KEYS = [[0, 101.5], [0.06, 100], [0.16, 95], [0.27, 88], [0.38, 80], [0.47, 76.5], [0.56, 79], [0.66, 85.5], [0.74, 88.6], [0.80, 90.67], [0.9, 93], [1, 94.5]];
const U_BUY1 = 0.06, U_BUY2 = 0.38, U_SELL = 0.80;
function priceAt(u) {
  for (let i = 1; i < KEYS.length; i++) if (u <= KEYS[i][0]) {
    const [u0, p0] = KEYS[i - 1], [u1, p1] = KEYS[i];
    const t = ease((u - u0) / (u1 - u0));
    return lerp(p0, p1, t) + Math.sin(u * 61) * 0.55 + Math.sin(u * 23 + 1) * 0.4 * Math.sin(Math.PI * t);
  }
  return KEYS[KEYS.length - 1][1];
}
const N = 180; let d = '';
for (let i = 0; i <= N; i++) { const u = i / N; d += `${i ? 'L' : 'M'}${px(u).toFixed(1)} ${py(priceAt(u)).toFixed(1)}`; }
const pricePath = $('#price'); pricePath.setAttribute('d', d); $('#price-ghost').setAttribute('d', d);
const pathLen = pricePath.getTotalLength();
pricePath.style.strokeDasharray = pathLen;
const place = (id, u, price) => $(id).setAttribute('transform', `translate(${px(u).toFixed(1)} ${py(price).toFixed(1)})`);
place('#mark-buy1', U_BUY1, 100); place('#mark-buy2', U_BUY2, 80); place('#mark-sell', U_SELL, 90.67);
const avgLine = $('#avg-line'), avgLabel = $('#avg-label'), targetLine = $('#target-line'), head = $('#head');
targetLine.setAttribute('y1', py(90.67)); targetLine.setAttribute('y2', py(90.67));

/* ---------- the record, as dots ---------- */
let CLOSED = 1048, BELOW = 2, OPEN = 20, TOTAL_PCT = 34.9; // replaced by the live record when it arrives
const dots = $('#dots'), dctx = dots.getContext('2d');
let dotGrid = null, dotShown = -1;
function layoutDots() {
  const w = dots.clientWidth; if (!w) return;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const cols = innerHeight < 720 ? 60 : w < 420 ? 45 : 54, pitch = w / cols, rows = Math.ceil((CLOSED + OPEN) / cols);
  dots.width = Math.round(w * dpr); dots.height = Math.round(rows * pitch * dpr);
  dots.style.height = `${rows * pitch}px`;
  dotGrid = {cols, pitch: pitch * dpr, r: pitch * dpr * 0.3}; dotShown = -1;
}
function drawDots(count, openO) {
  if (!dotGrid) return;
  const key = count + Math.round(openO * 20) / 100; if (key === dotShown) return; dotShown = key;
  const {cols, pitch, r} = dotGrid;
  dctx.clearRect(0, 0, dots.width, dots.height);
  for (let i = 0; i < CLOSED + OPEN; i++) {
    const x = (i % cols + 0.5) * pitch, y = (Math.floor(i / cols) + 0.5) * pitch;
    dctx.beginPath(); dctx.arc(x, y, r, 0, Math.PI * 2);
    if (i < CLOSED) {
      if (i >= count) { dctx.fillStyle = 'rgba(247,243,234,.07)'; dctx.fill(); continue; }
      dctx.fillStyle = i >= CLOSED - BELOW ? '#d4a17c' : (i > count - 14 ? '#ffffff' : 'rgba(247,243,234,.82)'); dctx.fill();
    } else if (openO > 0) { dctx.strokeStyle = `rgba(143,163,152,${openO})`; dctx.lineWidth = Math.max(1, r * 0.35); dctx.stroke(); }
  }
}

/* ---------- timeline ---------- */
const stage = $('#stage');
const el = {
  intro: $('#intro'), landing: $('#landing'), story: $('#story'), chart: $('#chart'), record: $('#record'), control: $('#control'),
  hint: $('#hint'), bar: $('#progress'), dawn: $('#dawn'), hudFilm: $('#hud-film'),
  in: $('#ledger-in'), avg: $('#ledger-avg'), out: $('#ledger-out'), foot: $('#chart-foot'), count: $('#count'), proofPct: $('#proof-pct'),
  caps: Object.fromEntries([...document.querySelectorAll('.caption')].map((n) => [n.dataset.cap, n])),
  buy1: $('#mark-buy1'), buy2: $('#mark-buy2'), sell: $('#mark-sell'),
  roles: [...document.querySelectorAll('.roles li')], terms: document.querySelector('.terms'),
};
// Act one (arrival + one coin) runs on a = p / ACT; act two (zoom out, proof, yours, settle) on q.
const ACT = 0.5, ACT2 = 0.47;
const A = {intro: [0, 0.085], pick: [0.12, 0.25], buy: [0.31, 0.435], dip: [0.465, 0.6], wait: [0.63, 0.745], sell: [0.775, 0.9]};
const Q = {many: [0.03, 0.15], hold: [0.185, 0.3], proof: [0.335, 0.57], yours: [0.615, 0.81]};
const cycleU = (a) => clamp((a - 0.335) / (0.88 - 0.335));
const fade = (node, o, shift = 14) => { node.style.opacity = o.toFixed(3); node.style.transform = `translateY(${((1 - o) * shift).toFixed(1)}px)`; };
const heroPanel = (node, o) => {
  if (!L.portrait) { node.style.opacity = o.toFixed(3); node.style.transform = `translateY(calc(-46% - ${((1 - o) * 24).toFixed(1)}px))`; }
  else fade(node, o, -24);
  node.style.pointerEvents = o < 0.5 ? 'none' : 'auto';
};
const money = (v) => `${v.toFixed(0)} USDT`;
const settleOf = (q) => span(q, 0.86, 0.97);

function applyDom(p) {
  const a = p / ACT, q = (p - ACT2) / (1 - ACT2), s = settleOf(q);
  heroPanel(el.intro, 1 - span(a, A.intro[1], A.intro[1] + 0.04));
  heroPanel(el.landing, span(q, 0.92, 0.995));
  el.hint.style.opacity = (1 - span(a, 0.015, 0.05)).toFixed(3);
  el.story.style.opacity = (span(a, 0.095, 0.12) * (1 - span(q, 0.825, 0.86))).toFixed(3);
  for (const k in A) if (k !== 'intro') fade(el.caps[k], windowed(a, A[k][0], A[k][1]));
  for (const k in Q) fade(el.caps[k], windowed(q, Q[k][0], Q[k][1], 0.02));

  // one coin
  const u = cycleU(a);
  fade(el.chart, Math.min(span(a, 0.295, 0.33), 1 - span(a, 0.905, 0.93)), 18);
  pricePath.style.strokeDashoffset = (pathLen * (1 - u)).toFixed(1);
  head.setAttribute('cx', px(u)); head.setAttribute('cy', py(priceAt(u))); head.style.opacity = u > 0 && u < 1 ? 1 : 0;
  const b1 = span(u, U_BUY1 - 0.01, U_BUY1 + 0.03), b2 = span(u, U_BUY2 - 0.01, U_BUY2 + 0.03), sold = span(u, U_SELL - 0.01, U_SELL + 0.03);
  el.buy1.style.opacity = b1; el.buy2.style.opacity = b2; el.sell.style.opacity = sold;
  const avg = lerp(100, 88.89, span(u, U_BUY2, U_BUY2 + 0.07));
  avgLine.setAttribute('y1', py(avg)); avgLine.setAttribute('y2', py(avg)); avgLine.style.opacity = b1 * 0.9;
  avgLabel.setAttribute('y', py(avg) + 13); avgLabel.textContent = `average ${avg.toFixed(avg % 1 ? 2 : 0)}`; avgLabel.style.opacity = b1;
  targetLine.style.opacity = span(u, 0.5, 0.56) * 0.8;
  el.in.textContent = money(Math.round(lerp(0, 100, b1) + lerp(0, 100, b2)));
  el.avg.textContent = b1 > 0.5 ? avg.toFixed(2) : '—';
  el.out.textContent = sold > 0.02 ? money(lerp(200, 204, sold)) : '—';
  el.foot.textContent = sold > 0.6 ? '+4 USDT on 200: about 2%, a typical sale. An illustration with round numbers.' : 'An illustration with round numbers.';

  // the record
  fade(el.record, Math.min(span(q, 0.035, 0.075), 1 - span(q, 0.575, 0.6)), 18);
  const count = Math.round(CLOSED * ease(clamp((q - 0.05) / 0.3)));
  el.count.textContent = count.toLocaleString('en-US');
  drawDots(count, span(q, 0.2, 0.26));
  // the profit figure climbs with the dots and settles on the record's total
  el.proofPct.textContent = `+${(TOTAL_PCT * count / CLOSED).toFixed(1)}%`;

  // yours
  fade(el.control, windowed(q, 0.625, 0.805, 0.02), 18);
  el.roles.forEach((li, i) => { li.style.opacity = span(q, 0.635 + i * 0.03, 0.665 + i * 0.03).toFixed(3); });
  el.terms.style.opacity = span(q, 0.735, 0.765).toFixed(3);

  // settle into the site
  stage.style.setProperty('--settle', s.toFixed(3));
  el.dawn.style.opacity = s.toFixed(3);
  el.hudFilm.style.opacity = (1 - span(q, 0.84, 0.88)).toFixed(3); el.hudFilm.style.pointerEvents = q > 0.86 ? 'none' : 'auto';
  el.bar.style.transform = `scaleX(${p.toFixed(4)})`; el.bar.parentNode.style.opacity = (1 - s).toFixed(2);
}

const tmp = new THREE.Vector3();
const FOG_DARK = new THREE.Color(0x0e1c18), FOG_LIGHT = new THREE.Color(0xf7f3ea);
function applyScene(p, t) {
  const a = p / ACT, q = (p - ACT2) / (1 - ACT2), s = settleOf(q);
  const back = span(q, 0, 0.08);                               // robot stands up again, orbit returns
  const cyc = span(a, 0.27, 0.34) * (1 - back);                // following one coin
  const compact = Math.max(cyc, windowed(a, 0.11, 0.3, 0.03), Math.min(span(q, 0.02, 0.08), 1 - span(q, 0.82, 0.88))); // smaller robot while words or a block sit below it
  const float = reduced ? 0 : Math.sin(t * 0.9) * 0.045;
  const size = lerp(lerp(L.size, L.size2, compact), L.size3, s);
  const rx = lerp(lerp(L.x, L.x2, compact), L.x3, s), ry = lerp(lerp(L.y, L.y2, compact), L.y3, s) + float;
  const bloom = reduced ? 1 : ease(clamp(t / 1.1));
  const enter = reduced ? 1 : ease(clamp((t - 0.55) / 1.5));
  robot.position.set(rx, ry, 0);
  robot.scale.setScalar(size * lerp(0.965, 1, enter));
  robot.rotation.z = reduced ? 0 : Math.sin(t * 0.6) * 0.018;
  const sit = span(a, 0.285, 0.325) * (1 - span(q, 0, 0.05));
  standing.material.opacity = enter * (1 - span(a, 0.275, 0.315) * (1 - span(q, 0.01, 0.06)));
  sitting.material.opacity = sit;
  glow.position.set(rx, ry, -0.6); glow.scale.setScalar(size * lerp(0.9, 2.1, bloom) * (1 + (1 - enter) * bloom * 0.35));
  glow.material.opacity = Math.min(1, bloom * (0.9 + (1 - enter) * 0.9)) * (1 - s);

  const pickGlow = windowed(a, 0.13, 0.255, 0.035);
  let seat = 0;
  const busy = windowed(q, 0.03, 0.31, 0.03);
  const R = Math.min(size * 0.72, L.orbitMax);
  const sale = span(a, 0.775, 0.84);
  orbit.position.set(rx, ry, 0);
  coins.forEach((c, i) => {
    const ang = c.phase + t * c.speed * (reduced ? 0 : 1) * (1 + busy * 1.6) + p * 11;
    const r = R * c.radius * lerp(1, 1.5, cyc);
    const x = Math.cos(ang) * r, z = Math.sin(ang) * r;
    const y = Math.sin(ang) * r * c.tilt + c.lift * size + lerp(0, 0.5, cyc);
    const inT = reduced ? 1 : ease(clamp((t - 0.5 - i * 0.12) / 1.4));
    let sc = size * c.size * inT;
    c.mesh.position.set(x * lerp(2.6, 1, inT), y, z - cyc * 6.5);
    let face = 0;
    if (c.picked) {
      // the handful it picked leaves the orbit and lines up under the words
      tmp.set(L.row.x + (seat - 1.5) * L.row.gap - rx, L.row.y - ry, 0); seat += 1;
      c.mesh.position.lerp(tmp, pickGlow); sc = lerp(sc, L.row.r, pickGlow); face = pickGlow;
    } else { sc *= 1 - pickGlow * 0.55; c.mesh.position.z -= pickGlow * 4; }
    // while it runs many cycles, coins take turns "selling": a quick swell and a warm flash
    const pulse = busy * Math.pow(Math.max(0, Math.sin(q * 150 + i * 2.3)), 10);
    sc *= 1 + pulse * 0.45;
    c.mesh.material[1].emissive.setRGB(0.75 * pulse, 0.6 * pulse, 0.35 * pulse);
    if (c === hero) {
      const follow = Math.min(span(a, 0.28, 0.35), 1 - sale);
      tmp.set(L.portrait ? -R * 0.55 : -R * 1.25, L.portrait ? -size * 0.62 : -size * 0.1, 1.6);
      c.mesh.position.lerp(tmp, follow);
      sc = lerp(sc, size * 0.085, follow) * (1 - span(a, 0.335, 0.37) * (1 - sale));
    }
    c.mesh.scale.setScalar(Math.max(sc, 0.0001));
    c.mesh.rotation.set(Math.PI / 2 + Math.sin(t * 0.7 + i) * 0.12 * (1 - face), (reduced ? 0.35 : t * c.spin + i) * (1 - face), 0);
  });

  scene.fog.color.copy(FOG_DARK).lerp(FOG_LIGHT, s);
  starsFar.material.opacity = 0.75 * (1 - s); starsNear.material.opacity = 0.5 * (1 - s);
  starsFar.rotation.y = t * 0.006 + p * 1; starsFar.rotation.x = p * 0.36;
  starsNear.rotation.y = t * 0.014 + p * 2.2; starsNear.position.y = p * 4.4;
  camera.position.x = lerp(camera.position.x, pointer.x * 0.25, 0.06);
  camera.position.y = lerp(camera.position.y, pointer.y * 0.18, 0.06);
  camera.lookAt(0, 0, 0);
}

/* ---------- progress, play, loop ---------- */
const pointer = {x: 0, y: 0};
addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') { pointer.x = (e.clientX / innerWidth - 0.5) * 2; pointer.y = -(e.clientY / innerHeight - 0.5) * 2; } }, {passive: true});

const maxScroll = () => film.offsetHeight - innerHeight;
let finished = false;
const target = () => (finished ? 1 : clamp(scrollY / Math.max(1, maxScroll())));
let p = target(), dirty = true, playing = false, lastT = 0, playY = 0;
const PLAY_SECONDS = 80;
const playBtn = $('#play'), playLabel = $('#play-label');
function setPlaying(on) {
  playing = on; playBtn.setAttribute('aria-pressed', String(on)); playLabel.textContent = on ? 'Pause' : 'Play';
}
$('#play-big').addEventListener('click', () => { stopGlide(); setPlaying(true); });
playBtn.addEventListener('click', () => { stopGlide(); setPlaying(!playing); if (!playing) { travel = 1; setTimeout(settle, 60); } });
$('#skip').addEventListener('click', () => { clearTimeout(idleTimer); scrollTo(0, maxScroll()); finishFilm(); });
$('#replay').addEventListener('click', () => { reopenFilm(); setPlaying(true); });
for (const ev of ['wheel', 'touchstart', 'keydown']) addEventListener(ev, (e) => { if (ev === 'keydown' && e.target.closest?.('button')) return; if (playing) setPlaying(false); }, {passive: true});

// Someone who has already seen the film lands on the site it settles into.
const SEEN = 'noguru-film-seen';
let seen = false;
try { seen = localStorage.getItem(SEEN) === '1'; } catch { /* private mode */ }
function finishFilm() {
  if (finished) return;
  const max = maxScroll();
  finished = true; glide = null; setPlaying(false); clearTimeout(idleTimer);
  if (!seen) { seen = true; try { localStorage.setItem(SEEN, '1'); } catch { /* private mode */ } }
  film.style.height = '100svh';
  document.documentElement.classList.add('film-done');
  scrollTo(0, Math.max(0, scrollY - max)); lastY = scrollY; p = 1;
}
function reopenFilm() {
  finished = false; film.style.height = '';
  document.documentElement.classList.remove('film-done');
  scrollTo(0, 0); lastY = 0; p = 0;
}

/* ---------- land on complete moments ----------
   A gesture rarely stops exactly where a moment is complete, so once scrolling goes quiet the film
   carries on by itself to the next resting point in the direction of travel. */
const RESTS = [
  0, 0.0925, 0.195, 0.285, 0.345, 0.42,                                   // arrival, pick, buy, dip, wait, sold
  ...[0.09, 0.245, 0.45, 0.78, 1].map((q) => ACT2 + (1 - ACT2) * q),      // many, hold, proof, yours, landing
];
let glide = null, idleTimer = 0, lastY = scrollY, travel = 0;
if (seen && !new URLSearchParams(location.search).has('film')) {
  finishFilm();
  if (location.hash) requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
}
function stopGlide() { glide = null; }
function glideTo(pTarget) {
  const from = scrollY, to = pTarget * maxScroll(), dist = Math.abs(to - from);
  if (dist < 2) return;
  if (reduced) { scrollTo(0, to); return; }
  const span01 = dist / Math.max(1, maxScroll());
  glide = {from, to, t0: performance.now(), ms: Math.min(1900, Math.max(650, 800 + span01 * 9000))};
}
function settle() {
  if (playing || glide || finished) return;
  const max = maxScroll();
  if (scrollY >= max - 1) { finishFilm(); return; }     // reached the landing, or went past it into the site
  if (scrollY <= 0) return;                             // still on the first frame
  const here = scrollY / max;
  const ahead = RESTS.find((r) => r >= here - 0.004), behind = [...RESTS].reverse().find((r) => r <= here + 0.004);
  const target = travel >= 0 ? ahead : behind;
  if (target !== undefined) glideTo(target);
}
addEventListener('scroll', () => {
  const dy = scrollY - lastY; lastY = scrollY;
  if (glide || playing || finished) return;
  if (dy) travel = dy;
  clearTimeout(idleTimer); idleTimer = setTimeout(settle, 130);
}, {passive: true});
// Any new gesture takes control back at once.
for (const ev of ['wheel', 'touchstart', 'keydown', 'mousedown']) addEventListener(ev, () => { stopGlide(); clearTimeout(idleTimer); }, {passive: true});
addEventListener('touchend', () => { clearTimeout(idleTimer); idleTimer = setTimeout(settle, 180); }, {passive: true});

const start = performance.now();
function frame(now) {
  const t = (now - start) / 1000, dt = Math.min(0.05, t - lastT); lastT = t;
  if (playing) {
    if (Math.abs(playY - scrollY) > 2) playY = scrollY;
    const next = playY += (maxScroll() / PLAY_SECONDS) * dt;
    scrollTo(0, next);
    if (next >= maxScroll()) finishFilm();
  } else if (glide) {
    const k = Math.min(1, (now - glide.t0) / glide.ms), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    scrollTo(0, glide.from + (glide.to - glide.from) * e);
    if (k >= 1) { glide = null; if (scrollY >= maxScroll() - 1) finishFilm(); }
  }
  const goal = target();
  p = Math.abs(goal - p) < 0.0004 ? goal : lerp(p, goal, reduced ? 1 : 0.14);
  applyDom(p); applyScene(p, t);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
function relayout() {
  for (const n of [el.intro, el.landing]) n.style.transform = L.portrait === false ? 'translateY(-46%)' : 'none';
  layout(); layoutDots();
}
addEventListener('resize', relayout);
document.fonts?.ready.then(relayout);
relayout();
requestAnimationFrame(frame);

/* ---------- the film's numbers come from the live record ---------- */
record.then((ev) => {
  if (ev.status === 'unavailable' || !ev.closed) return; // keep the last checked figures rather than show nothing
  CLOSED = ev.closed; BELOW = ev.down; OPEN = ev.open; TOTAL_PCT = ev.grossSinceStart;
  const day = (iso) => new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'short', timeZone: 'UTC'}).format(new Date(iso));
  const year = new Date(ev.windowEnd).getUTCFullYear();
  const set = (key, value) => document.querySelectorAll(`[data-rec="${key}"]`).forEach((n) => { n.textContent = value; });
  set('pct', `+${ev.grossSinceStart.toFixed(1)}%`); set('period', `${day(ev.windowStart)} – ${day(ev.windowEnd)} ${year}`);
  set('closed', ev.closed.toLocaleString('en-US')); set('up', ev.up.toLocaleString('en-US')); set('down', ev.down); set('open', ev.open);
  document.querySelector('#legend-loss').hidden = ev.down === 0;
  layoutDots();
});
