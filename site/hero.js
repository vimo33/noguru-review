// The home page's hero: the robot with its coins in orbit, beside the headline.
// It is the opening picture of the earlier scroll film (site/film.js), without the film.
import * as THREE from './pilot/vendor/three.module.min.js';
import {record} from './record.js';
import {exampleAmount} from './example.js';

const $ = (s) => document.querySelector(s);
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => t * t * (3 - 2 * t);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const hero = $('#hero'), canvas = $('#space');

/* ---------- the figure beside the headline comes from the live record ---------- */
record.then((ev) => {
  if (ev.status === 'unavailable' || !ev.closed) return; // keep the last checked figures rather than show nothing
  const day = (iso) => new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'short', timeZone: 'UTC'}).format(new Date(iso));
  const set = (key, value) => document.querySelectorAll(`[data-rec="${key}"]`).forEach((n) => { n.textContent = value; });
  set('pct', `+${ev.profitPct.toFixed(1)}%`);
  set('period', `${day(ev.profitStart)} – ${day(ev.profitEnd)} ${new Date(ev.profitEnd).getUTCFullYear()}`);
  set('amount', `About ${exampleAmount(ev.profitPct)}.`);
});

/* ---------- scene ---------- */
let renderer = null;
try { renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true, powerPreference: 'high-performance'}); } catch { /* no WebGL: the still picture below stays */ }
if (!renderer) hero.classList.add('no-gl');
else {
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
  const makeStars = (count, rMin, rMax, size, opacity) => {
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
  };
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

  // the approved artwork at its full size, stored as WebP: about a tenth of the PNG's weight
  const tex = new THREE.TextureLoader().load(new URL('./pilot/assets/noguru-guide.webp', import.meta.url).href);
  tex.colorSpace = THREE.SRGBColorSpace; tex.premultiplyAlpha = true;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const robot = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({map: tex, transparent: true, premultipliedAlpha: true, depthWrite: false, fog: false, toneMapped: false}));
  scene.add(robot);

  // ceramic coins
  const COINS = [
    ['BTC', '#d4a17c'], ['ETH', '#aaa5be'], ['SOL', '#8fa898'], ['LINK', '#e6dcc6'], ['AVAX', '#d9b59a'],
    ['ADA', '#9fb4a6'], ['DOT', '#c2bdd2'], ['XRP', '#ead9bd'], ['NEAR', '#b9c7b6'],
  ];
  const coinFace = (label, color) => {
    const cv = document.createElement('canvas'); cv.width = cv.height = 256; const c = cv.getContext('2d');
    c.fillStyle = color; c.fillRect(0, 0, 256, 256);
    c.strokeStyle = 'rgba(38,62,58,.28)'; c.lineWidth = 7; c.beginPath(); c.arc(128, 128, 98, 0, Math.PI * 2); c.stroke();
    c.fillStyle = 'rgba(38,62,58,.78)'; c.font = '700 54px Manrope, Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText(label, 128, 134);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.center.set(0.5, 0.5); t.rotation = Math.PI / 2; return t;
  };
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
      tilt: -0.34 + ring * 0.3, lift: (ring - 1) * 0.16, size: 0.082 - ring * 0.01, spin: 0.5 + i * 0.13};
  });

  /* ---------- layout ---------- */
  let L = {};
  const layout = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    const visH = 2 * Math.tan((FOV * Math.PI) / 360) * CAM_Z, visW = visH * camera.aspect;
    const portrait = camera.aspect < 0.9;
    if (portrait) {
      // On phones the robot gets the space between the top bar and the words below it.
      const top = 66, bottom = Math.max(top + 90, $('#intro').getBoundingClientRect().top - canvas.getBoundingClientRect().top - 10);
      const size = Math.min(visW * 0.86, ((bottom - top) / h) * visH, visH * 0.42);
      L = {portrait, size, x: 0, y: visH / 2 - (((top + bottom) / 2) / h) * visH, orbitMax: visW * 0.5 - 0.16};
    } else {
      L = {portrait, size: Math.min(visH * 0.74, visW * 0.4), x: visW * 0.23, y: -visH * 0.02, orbitMax: visW * 0.19};
    }
  };

  const pointer = {x: 0, y: 0};
  addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') { pointer.x = (e.clientX / innerWidth - 0.5) * 2; pointer.y = -(e.clientY / innerHeight - 0.5) * 2; } }, {passive: true});

  const start = performance.now();
  const draw = (t) => {
    const float = reduced ? 0 : Math.sin(t * 0.9) * 0.045;
    const bloom = reduced ? 1 : ease(clamp(t / 1.1)), enter = reduced ? 1 : ease(clamp((t - 0.55) / 1.5));
    const {size, x: rx} = L, ry = L.y + float;
    robot.position.set(rx, ry, 0);
    robot.scale.setScalar(size * lerp(0.965, 1, enter));
    robot.rotation.z = reduced ? 0 : Math.sin(t * 0.6) * 0.018;
    robot.material.opacity = enter;
    glow.position.set(rx, ry, -0.6); glow.scale.setScalar(size * lerp(0.9, 2.1, bloom) * (1 + (1 - enter) * bloom * 0.35));
    glow.material.opacity = Math.min(1, bloom * (0.9 + (1 - enter) * 0.9));
    const R = Math.min(size * 0.72, L.orbitMax);
    orbit.position.set(rx, ry, 0);
    coins.forEach((c, i) => {
      const ang = c.phase + t * c.speed * (reduced ? 0 : 1);
      const r = R * c.radius, x = Math.cos(ang) * r, z = Math.sin(ang) * r;
      const y = Math.sin(ang) * r * c.tilt + c.lift * size;
      const inT = reduced ? 1 : ease(clamp((t - 0.5 - i * 0.12) / 1.4));
      c.mesh.position.set(x * lerp(2.6, 1, inT), y, z);
      c.mesh.scale.setScalar(Math.max(size * c.size * inT, 0.0001));
      c.mesh.rotation.set(Math.PI / 2 + Math.sin(t * 0.7 + i) * 0.12, reduced ? 0.35 : t * c.spin + i, 0);
    });
    starsFar.rotation.y = t * 0.006; starsNear.rotation.y = t * 0.014;
    camera.position.x = lerp(camera.position.x, pointer.x * 0.25, 0.06);
    camera.position.y = lerp(camera.position.y, pointer.y * 0.18, 0.06);
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  };

  // Draw only while the hero is on screen and the tab is visible, and not behind the open video.
  let onScreen = true, raf = 0;
  const frame = (now) => { raf = 0; draw((now - start) / 1000); schedule(); };
  const schedule = () => { if (!raf && onScreen && !document.hidden && !document.documentElement.classList.contains('video-open')) raf = requestAnimationFrame(frame); };
  new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; schedule(); }).observe(hero);
  document.addEventListener('visibilitychange', schedule);
  document.addEventListener('noguru:video', schedule);
  const relayout = () => { layout(); schedule(); };
  addEventListener('resize', relayout);
  document.fonts?.ready.then(relayout);
  relayout();
}
