import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { computeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
import { DirtUniforms, patchMaterial } from './dirt.js';

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

/* ------------------------------------------------------------------
   Модели. Чтобы заменить машину — положите .glb в /models и добавьте
   строку сюда. front: +1 — перед машины смотрит в +Z, -1 — в −Z.
------------------------------------------------------------------- */
const CARS = window.CAR_MODELS || [
  { id: 'haval',  name: 'Haval H6',       url: 'models/haval.glb',  front: -1, paint: 'mat1' },
  { id: 'omoda',  name: 'Omoda 5',        url: 'models/omoda.glb',  front: 1,  paint: 'CarPaint' },
  { id: 'jetour', name: 'Jetour Dashing', url: 'models/jetour.glb', front: 1,  paint: 'CarPaint_UV0' },
];
const CAR_LENGTH = 4.6;
// цвет кузова «как в видео» — глубокий чёрный глянец (null — оставить родной цвет модели)
const PAINT_COLOR = window.CAR_PAINT === undefined ? '#060708' : window.CAR_PAINT;
let paintMat = null;
function getPaintMaterial() {
  if (!paintMat) paintMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(PAINT_COLOR), metalness: 0.15, roughness: 0.12,
    clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.25,
  });
  return paintMat;
}

const $ = (s) => document.querySelector(s);
const canvas = $('#scene');
const stage = $('.stage');
const isTouch = matchMedia('(pointer: coarse)').matches;
const lowPower = isTouch || (navigator.hardwareConcurrency || 8) <= 4 || location.search.includes('lite');

/* ---------------- renderer / scene ---------------- */
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, lowPower ? 1.5 : 1.75));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x07080a);
scene.fog = new THREE.Fog(0x07080a, 12, 26);

const camera = new THREE.PerspectiveCamera(36, 1, 0.3, 60);
const controls = new OrbitControls(camera, canvas);
controls.enablePan = false;
controls.enableZoom = false;        // зум — pinch / Ctrl+колесо / кнопки (колесо листает страницу)
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.rotateSpeed = 0.7;
controls.minPolarAngle = 0.32;      // «облёт» только по X/Y: без крена, не ниже пола
controls.maxPolarAngle = 1.5;
controls.minDistance = 3.4;
controls.maxDistance = 12;
controls.target.set(0, 0.72, 0);
camera.position.set(-4.6, 1.55, 5.6);
canvas.style.touchAction = 'pan-y';  // на телефоне вертикальный свайп листает, горизонтальный — крутит

/* ---------------- environment (студия с LED-полосами + HDRI Poly Haven) ---------------- */
const pmrem = new THREE.PMREMGenerator(renderer);
function stripGeo(len, w = 0.07) { return new THREE.BoxGeometry(w, 0.03, len); }

function buildEnv(hdr) {
  const env = new THREE.Scene();
  if (hdr) {
    const sph = new THREE.Mesh(new THREE.SphereGeometry(30, 32, 16),
      new THREE.MeshBasicMaterial({ map: hdr, side: THREE.BackSide, color: new THREE.Color(0.1, 0.1, 0.11) }));
    env.add(sph);
  }
  const lm = new THREE.MeshBasicMaterial({ color: new THREE.Color(4.5, 4.5, 4.8) });
  for (let i = -3; i <= 3; i++) {
    const s = new THREE.Mesh(stripGeo(16, 0.18), lm);
    s.position.set(i * 1.5, 4, 0); s.rotation.y = 0.32; env.add(s);
  }
  // боковые софтбоксы
  const sb = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.6, 1.75) });
  const l = new THREE.Mesh(new THREE.PlaneGeometry(8, 1.2), sb); l.position.set(-9, 2, 0); l.rotation.y = Math.PI / 2; env.add(l);
  const r = l.clone(); r.position.x = 9; r.rotation.y = -Math.PI / 2; env.add(r);
  const env1 = pmrem.fromScene(env, 0.02).texture;
  scene.environment = env1;
  scene.environmentIntensity = 1.0;
}

/* ---------------- room ---------------- */
const room = new THREE.Group(); scene.add(room);
{
  // пол: зеркало + полупрозрачный тёмный бетон поверх
  const size = 40;
  if (!lowPower) {
    const refl = new Reflector(new THREE.PlaneGeometry(size, size), {
      textureWidth: 1024, textureHeight: 1024, color: 0x8a8d92,
    });
    refl.rotation.x = -Math.PI / 2; refl.position.y = -0.03;
    room.add(refl);
  }
  const floorTex = makeConcreteTexture();
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping; floorTex.repeat.set(6, 6);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshStandardMaterial({
    color: 0x16171a, map: floorTex, roughness: 0.55, metalness: 0.0,
    transparent: !lowPower, opacity: lowPower ? 1 : 0.8,
  }));
  floor.rotation.x = -Math.PI / 2;
  room.add(floor);

  // мокрые лужи под машиной (ярче отражают)
  // потолочные LED-полосы
  const ledMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(5, 5, 5.3), toneMapped: false, fog: true });
  for (let i = -4; i <= 4; i++) {
    const s = new THREE.Mesh(stripGeo(22, 0.07), ledMat);
    s.position.set(i * 1.45, 3.45, 0); s.rotation.y = 0.32; room.add(s);
  }
  // стены-панели
  const wallTex = makePanelTexture();
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x0b0c0e, map: wallTex, roughness: 0.75, metalness: 0.1, side: THREE.BackSide, envMapIntensity: 0.15 });
  const box = new THREE.Mesh(new THREE.BoxGeometry(26, 3.9, 26), wallMat);
  box.position.y = 1.7; room.add(box); // низ коробки ниже пола — без z-fighting
  // светящиеся вертикальные линии на дальней стене
  const vMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 1.9, 2.2), toneMapped: false });
  for (const x of [-7, -2.5, 2.5, 7]) {
    const v = new THREE.Mesh(new THREE.BoxGeometry(0.05, 2.8, 0.02), vMat);
    v.position.set(x, 1.7, -12.95); room.add(v);
    const v2 = v.clone(); v2.position.z = 12.95; room.add(v2);
  }
}

/* ---------------- contact shadow ---------------- */
const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({
  map: makeShadowTexture(), transparent: true, depthWrite: false, color: 0x000000, opacity: 0.92,
  polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
}));
shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.01; shadow.renderOrder = 1; scene.add(shadow);

/* ---------------- 3D-маска ручной мойки ---------------- */
const MX = 48, MY = 36, MZ = 112;
const maskData = new Uint8Array(MX * MY * MZ);
const maskTex = new THREE.Data3DTexture(maskData, MX, MY, MZ);
maskTex.format = THREE.RedFormat; maskTex.type = THREE.UnsignedByteType;
maskTex.minFilter = maskTex.magFilter = THREE.LinearFilter;
maskTex.unpackAlignment = 1; maskTex.needsUpdate = true;
DirtUniforms.uMask.value = maskTex;

/* ---------------- моечная арка (водяная завеса) ---------------- */
const arch = new THREE.Group(); scene.add(arch);
const waterMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  uniforms: { uTime: { value: 0 }, uFade: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
  fragmentShader: `
    varying vec2 vUv; uniform float uTime; uniform float uFade;
    float h(float n){ return fract(sin(n)*43758.5453); }
    float n1(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
      float a=h(i.x+i.y*57.), b=h(i.x+1.+i.y*57.), c=h(i.x+(i.y+1.)*57.), d=h(i.x+1.+(i.y+1.)*57.);
      return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }
    void main(){
      float s1 = n1(vec2(vUv.x*140., vUv.y*4. + uTime*9.));
      float s2 = n1(vec2(vUv.x*60. + 3., vUv.y*2. + uTime*6.));
      float streak = smoothstep(.55, 1., s1)*.8 + smoothstep(.6, 1., s2)*.5;
      float edge = smoothstep(0., .06, vUv.x) * smoothstep(1., .94, vUv.x);
      float top = smoothstep(1., .9, vUv.y);
      float bottomMist = smoothstep(.12, 0., vUv.y)*.15;
      float a = (streak*.55 + .05 + bottomMist) * edge * uFade;
      gl_FragColor = vec4(vec3(.72,.86,1.)*a*(.7+top*.6), a);
    }`,
});
const sheet = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), waterMat); arch.add(sheet);
const barMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.2, 2.6, 4), toneMapped: false, transparent: true });
const bar = new THREE.Mesh(new THREE.BoxGeometry(1, 0.05, 0.06), barMat); arch.add(bar);
const barBody = new THREE.Mesh(new THREE.BoxGeometry(1, 0.12, 0.16), new THREE.MeshStandardMaterial({ color: 0x222428, metalness: 0.8, roughness: 0.35, transparent: true }));
arch.add(barBody);

// брызги
const DROPS = lowPower ? 900 : 2000;
const dropGeo = new THREE.BufferGeometry();
const dropPos = new Float32Array(DROPS * 3), dropVel = new Float32Array(DROPS * 3), dropLife = new Float32Array(DROPS);
dropGeo.setAttribute('position', new THREE.BufferAttribute(dropPos, 3));
dropGeo.setAttribute('aLife', new THREE.BufferAttribute(dropLife, 1));
const dropMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  uniforms: { uFade: { value: 0 }, uPx: { value: renderer.getPixelRatio() } },
  vertexShader: `attribute float aLife; varying float vL; uniform float uPx;
    void main(){ vL = aLife; vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv;
      gl_PointSize = max(1.5, uPx * (0.012 + 0.02*aLife) / -mv.z); }`,
  fragmentShader: `varying float vL; uniform float uFade;
    void main(){ vec2 c = gl_PointCoord-.5; float d = length(c); if(d>.5) discard;
      float a = smoothstep(.5,.0,d) * .55 * uFade * clamp(vL*3.,0.,1.);
      gl_FragColor = vec4(vec3(.8,.9,1.)*a, a); }`,
});
const drops = new THREE.Points(dropGeo, dropMat); drops.frustumCulled = false; scene.add(drops);

// пена от губки
const FOAM = 1400;
const foamGeo = new THREE.BufferGeometry();
const foamPos = new Float32Array(FOAM * 3), foamLife = new Float32Array(FOAM), foamVel = new Float32Array(FOAM * 3);
foamGeo.setAttribute('position', new THREE.BufferAttribute(foamPos, 3));
foamGeo.setAttribute('aLife', new THREE.BufferAttribute(foamLife, 1));
const foamMat = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false,
  uniforms: { uPx: { value: renderer.getPixelRatio() } },
  vertexShader: `attribute float aLife; varying float vL; uniform float uPx;
    void main(){ vL=aLife; vec4 mv = modelViewMatrix*vec4(position,1.); gl_Position = projectionMatrix*mv;
      gl_PointSize = uPx*(0.014+0.022*(1.0-aLife))/-mv.z; }`,
  fragmentShader: `varying float vL; void main(){ vec2 c=gl_PointCoord-.5; float d=length(c); if(d>.5) discard;
      float ring = smoothstep(.5,.38,d) * (0.55 + 0.45*smoothstep(.15,.42,d));
      float a = ring * clamp(vL*1.5,0.,1.) * .85; gl_FragColor = vec4(vec3(.96,.98,1.), a); }`,
});
const foam = new THREE.Points(foamGeo, foamMat); foam.frustumCulled = false; scene.add(foam);
let foamIdx = 0;

/* ---------------- post ---------------- */
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.45, 0.25, 1.1);
composer.addPass(bloom);
composer.addPass(new OutputPass());

/* ---------------- загрузка машины ---------------- */
const loader = new GLTFLoader();
loader.setMeshoptDecoder(MeshoptDecoder);
let car = null, carMeshes = [], carBox = new THREE.Box3(), sweepMin = -3, sweepMax = 3;
let surfaceVoxels = null, bvhReady = false, loadToken = 0;
const loaderEl = $('#loader'), loaderBar = $('#loader-bar'), loaderTxt = $('#loader-txt');

async function loadCar(def) {
  const token = ++loadToken;
  loaderEl.classList.remove('hidden');
  loaderBar.style.transform = 'scaleX(0)';
  loaderTxt.textContent = 'Загружаем ' + def.name + '…';
  let gltf;
  try {
    gltf = await loader.loadAsync(def.url, (e) => {
      if (e.total) loaderBar.style.transform = `scaleX(${e.loaded / e.total})`;
    });
  } catch (err) {
    loaderTxt.textContent = 'Не удалось загрузить модель. Откройте сайт через локальный сервер (см. README).';
    console.error(err); return;
  }
  if (token !== loadToken) return;
  if (car) { scene.remove(car); disposeObj(car); }

  const root = gltf.scene;
  const wrap = new THREE.Group(); wrap.add(root);
  // нормализация: длина по Z, перед в +Z, стоит на полу, по центру
  let b = preciseBox(root), s = b.getSize(new THREE.Vector3());
  if (s.x > s.z) root.rotation.y = Math.PI / 2;
  if ((def.front || 1) < 0) root.rotation.y += Math.PI;
  b = preciseBox(root); s = b.getSize(new THREE.Vector3());
  const k = CAR_LENGTH / Math.max(s.x, s.z);
  root.scale.multiplyScalar(k);
  b = preciseBox(root);
  const c = b.getCenter(new THREE.Vector3());
  root.position.sub(new THREE.Vector3(c.x, b.min.y, c.z));
  wrap.updateMatrixWorld(true);

  carMeshes = []; let missingExterior = false;
  wrap.traverse((o) => {
    if (o.isMesh) {
      carMeshes.push(o);
      // _exterior запекается скриптом tools/bake-exterior.mjs; без него вся модель считается внешней
      const g = o.geometry;
      if (!g.attributes._exterior && g.attributes.position) {
        g.setAttribute('_exterior', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count).fill(1), 1));
        missingExterior = true;
      }
      if (PAINT_COLOR && def.paint && !Array.isArray(o.material) && o.material.name === def.paint) {
        o.material = getPaintMaterial();
      }
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m) => {
        patchMaterial(m);
        if (m.isMeshPhysicalMaterial && m.transmission > 0) m.envMapIntensity = 1.2;
        // тонировка: слишком прозрачные тёмные стёкла делаем плотнее
        if (m.transparent && m.opacity < 0.55 && m.color && m.color.getHSL({}).l < 0.2 && !m.map) m.opacity = 0.62;
      });
    }
  });
  if (missingExterior) console.warn('В модели нет атрибута _EXTERIOR — салон будет пачкаться. Прогоните её через tools/bake-exterior.mjs');
  car = wrap; scene.add(car);
  carBox.copy(preciseBox(car));
  const size = carBox.getSize(new THREE.Vector3());
  const pad = new THREE.Vector3(0.12, 0.12, 0.12);
  DirtUniforms.uBoxMin.value.copy(carBox.min).sub(pad);
  DirtUniforms.uBoxSize.value.copy(size).add(pad.multiplyScalar(2));
  // мойка идёт спереди назад
  DirtUniforms.uSweepDir.value.set(0, 0, -1);
  sweepMin = -carBox.max.z - 0.15; sweepMax = -carBox.min.z + 0.15;

  shadow.scale.set(size.x * 1.55, size.z * 1.22, 1);
  // арка по размеру машины
  const archW = size.x + 1.1, archH = size.y + 0.55;
  sheet.scale.set(archW, archH, 1); sheet.position.y = archH / 2;
  bar.scale.x = barBody.scale.x = archW; bar.position.y = archH - 0.02; barBody.position.y = archH + 0.06;
  arch.userData = { w: archW, h: archH };
  controls.target.set(0, size.y * 0.45, 0);

  maskData.fill(0); maskTex.needsUpdate = true;
  buildSurfaceVoxels();
  bvhReady = false;
  loaderBar.style.transform = 'scaleX(1)';
  // прогрев шейдеров
  renderer.compile(scene, camera);
  setTimeout(() => loaderEl.classList.add('hidden'), 250);
  document.querySelectorAll('.car-chip').forEach((el) => el.classList.toggle('active', el.dataset.id === def.id));
  // BVH для губки — в фоне
  setTimeout(() => { if (token === loadToken) buildBVH(); }, 600);
}

// точный бокс по вершинам (с учётом инстансинга) — Box3.setFromObject иногда врёт на инстансах
function preciseBox(root) {
  const box = new THREE.Box3(), v = new THREE.Vector3(), mi = new THREE.Matrix4(), mw = new THREE.Matrix4();
  root.updateMatrixWorld(true);
  root.traverse((m) => {
    if (!m.isMesh || !m.geometry.attributes.position) return;
    const pos = m.geometry.attributes.position;
    const step = Math.max(1, Math.floor(pos.count / 20000));
    const inst = m.isInstancedMesh ? m.count : 1;
    for (let j = 0; j < inst; j++) {
      mw.copy(m.matrixWorld);
      if (m.isInstancedMesh) { m.getMatrixAt(j, mi); mw.multiply(mi); }
      for (let i = 0; i < pos.count; i += step) box.expandByPoint(v.fromBufferAttribute(pos, i).applyMatrix4(mw));
    }
  });
  return box;
}

function buildBVH() {
  for (const m of carMeshes) { if (!m.geometry.boundsTree) { try { m.geometry.computeBoundsTree(); } catch (e) { console.warn(e); } } }
  bvhReady = true;
}

function disposeObj(o) {
  o.traverse((n) => {
    if (n.isMesh) {
      n.geometry.dispose();
      const mats = Array.isArray(n.material) ? n.material : [n.material];
      mats.forEach((m) => { if (m === paintMat) return; for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose(); m.dispose(); });
    }
  });
}

/* ---------------- «чистота» в процентах ---------------- */
function voxelIndex(x, y, z) { return x + y * MX + z * MX * MY; }
// Учитываем в процентах только то, что реально можно помыть:
// внешние поверхности (не салон) и не днище (грани, смотрящие вниз, и самый низ).
function buildSurfaceVoxels() {
  const flags = new Uint8Array(MX * MY * MZ);
  const v = new THREE.Vector3(), nrm = new THREE.Vector3(), mi = new THREE.Matrix4(), mw = new THREE.Matrix4(), nm = new THREE.Matrix3();
  const bmin = DirtUniforms.uBoxMin.value, bs = DirtUniforms.uBoxSize.value;
  const floorY = carBox.min.y + 0.06;
  for (const m of carMeshes) {
    const pos = m.geometry.attributes.position; if (!pos) continue;
    const ext = m.geometry.attributes._exterior, nor = m.geometry.attributes.normal;
    const step = Math.max(1, Math.floor(pos.count / 6000));
    const inst = m.isInstancedMesh ? m.count : 1;
    for (let j = 0; j < inst; j++) {
      mw.copy(m.matrixWorld);
      if (m.isInstancedMesh) { m.getMatrixAt(j, mi); mw.multiply(mi); }
      nm.getNormalMatrix(mw);
      for (let i = 0; i < pos.count; i += step) {
        if (ext && ext.getX(i) < 0.5) continue;                       // салон
        v.fromBufferAttribute(pos, i).applyMatrix4(mw);
        if (v.y < floorY) continue;                                     // самый низ
        if (nor) { nrm.fromBufferAttribute(nor, i).applyMatrix3(nm).normalize(); if (nrm.y < -0.35) continue; } // днище
        const x = Math.floor((v.x - bmin.x) / bs.x * MX), y = Math.floor((v.y - bmin.y) / bs.y * MY), z = Math.floor((v.z - bmin.z) / bs.z * MZ);
        if (x >= 0 && y >= 0 && z >= 0 && x < MX && y < MY && z < MZ) flags[voxelIndex(x, y, z)] = 1;
      }
    }
  }
  const list = [];
  for (let i = 0; i < flags.length; i++) if (flags[i]) list.push(i);
  surfaceVoxels = Int32Array.from(list);
}
function cleanliness() {
  if (!surfaceVoxels || !surfaceVoxels.length) return 0;
  const bmin = DirtUniforms.uBoxMin.value, bs = DirtUniforms.uBoxSize.value, sw = DirtUniforms.uSweep.value;
  let n = 0;
  for (let k = 0; k < surfaceVoxels.length; k++) {
    const i = surfaceVoxels[k];
    if (maskData[i] > 120) { n++; continue; }
    const z = Math.floor(i / (MX * MY));
    const wz = bmin.z + (z + 0.5) / MZ * bs.z;
    if (-wz < sw) n++;
  }
  return n / surfaceVoxels.length;
}

/* ---------------- губка: ручная мойка ---------------- */
let spongeMode = false, painting = false;
const raycaster = new THREE.Raycaster(); raycaster.firstHitOnly = true;
const ndc = new THREE.Vector2();
const cursor = $('#sponge-cursor');

function paintAt(p) {
  const bmin = DirtUniforms.uBoxMin.value, bs = DirtUniforms.uBoxSize.value;
  const R = 0.24;
  const cx = (p.x - bmin.x) / bs.x * MX, cy = (p.y - bmin.y) / bs.y * MY, cz = (p.z - bmin.z) / bs.z * MZ;
  const rx = R / bs.x * MX, ry = R / bs.y * MY, rz = R / bs.z * MZ;
  for (let z = Math.max(0, Math.floor(cz - rz)); z <= Math.min(MZ - 1, Math.ceil(cz + rz)); z++)
    for (let y = Math.max(0, Math.floor(cy - ry)); y <= Math.min(MY - 1, Math.ceil(cy + ry)); y++)
      for (let x = Math.max(0, Math.floor(cx - rx)); x <= Math.min(MX - 1, Math.ceil(cx + rx)); x++) {
        const dx = (x + 0.5 - cx) / rx, dy = (y + 0.5 - cy) / ry, dz = (z + 0.5 - cz) / rz;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d > 1) continue;
        const val = Math.min(255, (1 - d) * 420);
        const i = voxelIndex(x, y, z);
        // повторные проходы домывают
        maskData[i] = Math.min(255, Math.max(maskData[i], val) + 18 * (1 - d));
      }
  maskTex.needsUpdate = true;
  for (let i = 0; i < 10; i++) {
    const j = foamIdx++ % FOAM;
    const a = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * 0.16;
    foamPos[j * 3] = p.x + Math.cos(a) * rr;
    foamPos[j * 3 + 1] = p.y + (Math.random() - 0.5) * 0.18;
    foamPos[j * 3 + 2] = p.z + Math.sin(a) * rr;
    foamVel[j * 3] = (Math.random() - 0.5) * 0.05; foamVel[j * 3 + 1] = -0.05 - Math.random() * 0.1; foamVel[j * 3 + 2] = (Math.random() - 0.5) * 0.05;
    foamLife[j] = 1;
  }
}
function pickCar(e) {
  if (!car) return null;
  if (!bvhReady) buildBVH();
  const r = canvas.getBoundingClientRect();
  ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hit = raycaster.intersectObjects(carMeshes, false)[0];
  return hit ? hit.point : null;
}
let lastPaint = null;
canvas.addEventListener('pointerdown', (e) => {
  if (!spongeMode) return;
  painting = true; canvas.setPointerCapture(e.pointerId);
  const p = pickCar(e); if (p) { paintAt(p); lastPaint = p.clone(); }
});
canvas.addEventListener('pointermove', (e) => {
  if (spongeMode) {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    if (!painting) return;
    const p = pickCar(e); if (!p) { lastPaint = null; return; }
    if (lastPaint) { // интерполяция мазка
      const d = p.distanceTo(lastPaint), n = Math.min(8, Math.ceil(d / 0.08));
      for (let i = 1; i <= n; i++) paintAt(lastPaint.clone().lerp(p, i / n));
    } else paintAt(p);
    lastPaint = p.clone();
  }
});
const endPaint = () => { painting = false; lastPaint = null; };
canvas.addEventListener('pointerup', endPaint);
canvas.addEventListener('pointercancel', endPaint);
canvas.addEventListener('pointerleave', () => cursor.classList.remove('show'));
canvas.addEventListener('pointerenter', () => { if (spongeMode) cursor.classList.add('show'); });

function setSponge(on) {
  spongeMode = on;
  controls.enabled = !on;
  stage.classList.toggle('sponge', on);
  $('#btn-sponge').classList.toggle('active', on);
  $('#btn-rotate').classList.toggle('active', !on);
  cursor.classList.toggle('show', on);
  canvas.style.touchAction = on ? 'none' : 'pan-y';
}
$('#btn-sponge').addEventListener('click', () => setSponge(true));
$('#btn-rotate').addEventListener('click', () => setSponge(false));
// «Испачкать снова»: стираем следы губки И откатываем водяную завесу.
// Смыв завесой привязан к скроллу, поэтому возвращаем страницу к началу первого экрана.
$('#btn-reset').addEventListener('click', () => {
  maskData.fill(0); maskTex.needsUpdate = true;
  const top = hero.getBoundingClientRect().top + scrollY;
  if (scrollY > top + 1) window.scrollTo({ top, behavior: 'instant' });
  progress = 0; sweepSmooth = 0;
});

/* ---------------- зум ---------------- */
let zoomTarget = null;
function zoomBy(f) {
  const d = camera.position.distanceTo(controls.target);
  zoomTarget = THREE.MathUtils.clamp((zoomTarget ?? d) * f, controls.minDistance, controls.maxDistance);
}
$('#btn-zoom-in').addEventListener('click', () => zoomBy(0.8));
$('#btn-zoom-out').addEventListener('click', () => zoomBy(1.25));
canvas.addEventListener('wheel', (e) => {
  if (!e.ctrlKey && !e.metaKey) return;   // обычное колесо — листает страницу и моет машину
  e.preventDefault();
  zoomBy(Math.exp(e.deltaY * 0.006));
}, { passive: false });
// pinch на тач-экранах
const pts = new Map(); let pinchD = 0;
canvas.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch') pts.set(e.pointerId, e); });
canvas.addEventListener('pointermove', (e) => {
  if (!pts.has(e.pointerId)) return; pts.set(e.pointerId, e);
  if (pts.size === 2) {
    const [a, b] = [...pts.values()];
    const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    if (pinchD) zoomBy(pinchD / d);
    pinchD = d;
  }
});
const pinchEnd = (e) => { pts.delete(e.pointerId); pinchD = 0; };
canvas.addEventListener('pointerup', pinchEnd); canvas.addEventListener('pointercancel', pinchEnd);

$('#btn-view').addEventListener('click', () => { flyHome = 1; });
let flyHome = 0;
const homePos = new THREE.Vector3();
function computeHome() {
  const a = camera.aspect;
  const dist = a < 1 ? 7.4 / Math.max(a, 0.45) * 0.78 : 6.9;
  homePos.set(-0.66, 0.12, 0.74).normalize().multiplyScalar(dist).add(controls.target);
}

/* ---------------- скролл → мойка ---------------- */
const hero = $('#hero');
const phases = [...document.querySelectorAll('.phase')];
let progress = 0, sweepSmooth = 0;
function readScroll() {
  const r = hero.getBoundingClientRect();
  const total = r.height - innerHeight;
  progress = THREE.MathUtils.clamp(-r.top / Math.max(1, total), 0, 1);
}
addEventListener('scroll', readScroll, { passive: true });

const meterVal = $('#meter-val'), meterFill = $('#meter-fill'), stepEl = $('#step-label');

/* ---------------- resize ---------------- */
function resize() {
  const w = stage.clientWidth, h = stage.clientHeight;
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  bloom.resolution.set(w / 2, h / 2);
  camera.aspect = w / h;
  camera.fov = camera.aspect < 0.8 ? 46 : 36;
  // на широких экранах сдвигаем машину вправо, чтобы не мешал заголовок
  if (camera.aspect > 1.25) camera.setViewOffset(w, h, -w * 0.12, 0, w, h); else camera.clearViewOffset();
  camera.updateProjectionMatrix();
  controls.maxDistance = camera.aspect < 1 ? 17 : 12;
  dropMat.uniforms.uPx.value = foamMat.uniforms.uPx.value = renderer.getPixelRatio() * h / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
}
addEventListener('resize', resize);

/* ---------------- loop ---------------- */
const clock = new THREE.Clock();
let frame = 0, visible = true;
new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 }).observe(stage);

function tick() {
  requestAnimationFrame(tick);
  if (!visible) return;
  const dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
  DirtUniforms.uTime.value = t; waterMat.uniforms.uTime.value = t;

  // мойка: 0..0.14 — «привезите грязной», 0.14..0.84 — проезд арки, дальше — чистая
  const wp = THREE.MathUtils.clamp((progress - 0.14) / 0.7, 0, 1);
  sweepSmooth += (wp - sweepSmooth) * Math.min(1, dt * 5);
  const sw = THREE.MathUtils.lerp(sweepMin, sweepMax, sweepSmooth);
  DirtUniforms.uSweep.value = sw;
  const active = sweepSmooth > 0.002 && sweepSmooth < 0.998;
  const fade = THREE.MathUtils.clamp(Math.min(sweepSmooth, 1 - sweepSmooth) * 12, 0, 1);
  arch.visible = fade > 0.01;
  arch.position.z = -sw;
  waterMat.uniforms.uFade.value = fade; dropMat.uniforms.uFade.value = fade;
  barMat.opacity = barBody.material.opacity = fade;

  // брызги
  const aw = arch.userData.w || 3, ah = arch.userData.h || 2;
  for (let i = 0; i < DROPS; i++) {
    const j = i * 3;
    if (dropLife[i] <= 0 || dropPos[j + 1] < 0) {
      if (!active) { dropLife[i] = 0; dropPos[j + 1] = -10; continue; }
      dropPos[j] = (Math.random() - 0.5) * aw; dropPos[j + 1] = ah - Math.random() * 0.1; dropPos[j + 2] = -sw + (Math.random() - 0.5) * 0.06;
      dropVel[j] = (Math.random() - 0.5) * 0.3; dropVel[j + 1] = -2 - Math.random() * 2; dropVel[j + 2] = (Math.random() - 0.5) * 0.9;
      dropLife[i] = 0.5 + Math.random() * 0.8;
    }
    dropVel[j + 1] -= 9.8 * dt;
    dropPos[j] += dropVel[j] * dt; dropPos[j + 1] += dropVel[j + 1] * dt; dropPos[j + 2] += dropVel[j + 2] * dt;
    dropLife[i] -= dt;
    if (dropPos[j + 1] < 0.02 && dropVel[j + 1] < 0 && Math.random() < 0.3) { // отскок
      dropVel[j + 1] *= -0.25; dropVel[j] *= 2; dropVel[j + 2] *= 2; dropPos[j + 1] = 0.03;
    }
  }
  dropGeo.attributes.position.needsUpdate = true; dropGeo.attributes.aLife.needsUpdate = true;

  // пена
  for (let i = 0; i < FOAM; i++) {
    if (foamLife[i] <= 0) continue;
    foamLife[i] -= dt * 0.7;
    foamPos[i * 3] += foamVel[i * 3] * dt; foamPos[i * 3 + 1] += foamVel[i * 3 + 1] * dt; foamPos[i * 3 + 2] += foamVel[i * 3 + 2] * dt;
    if (foamLife[i] <= 0) foamPos[i * 3 + 1] = -10;
  }
  foamGeo.attributes.position.needsUpdate = true; foamGeo.attributes.aLife.needsUpdate = true;

  // зум и «домой»
  if (zoomTarget !== null) {
    const off = camera.position.clone().sub(controls.target);
    const d = off.length(), nd = THREE.MathUtils.lerp(d, zoomTarget, Math.min(1, dt * 8));
    camera.position.copy(controls.target).add(off.setLength(nd));
    if (Math.abs(nd - zoomTarget) < 0.01) zoomTarget = null;
  }
  if (flyHome > 0) {
    computeHome();
    camera.position.lerp(homePos, Math.min(1, dt * 4));
    flyHome -= dt * 0.8;
    if (camera.position.distanceTo(homePos) < 0.02) flyHome = 0;
  }
  controls.update();

  // UI
  phases.forEach((el, i) => {
    const on = (i === 0 && progress < 0.12) || (i === 1 && progress >= 0.12 && progress < 0.86) || (i === 2 && progress >= 0.86);
    el.classList.toggle('on', on);
  });
  if (frame % 12 === 0) {
    const c = Math.round(cleanliness() * 100);
    meterVal.textContent = c + '%';
    meterFill.style.transform = `scaleX(${c / 100})`;
    stepEl.textContent = c >= 98 ? 'Готово · Блеск' : (active ? 'Шаг 2 · Мойка' : (sweepSmooth > 0.99 ? 'Шаг 3 · Блеск' : 'Шаг 1 · Приёмка'));
  }
  frame++;
  composer.render();
}

/* ---------------- текстуры (процедурные) ---------------- */
function makeConcreteTexture() {
  // мягкий бетон: низкочастотный шум без пиксельной «ряби» (иначе муар на скользящих углах)
  const small = document.createElement('canvas'); small.width = small.height = 64;
  const sg = small.getContext('2d'); const img = sg.createImageData(64, 64);
  for (let i = 0; i < img.data.length; i += 4) { const n = 125 + Math.random() * 30; img.data[i] = img.data[i + 1] = img.data[i + 2] = n; img.data[i + 3] = 255; }
  sg.putImageData(img, 0, 0);
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const g = c.getContext('2d'); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
  g.drawImage(small, 0, 0, 512, 512);
  g.globalAlpha = 0.06;
  for (let i = 0; i < 40; i++) {
    g.fillStyle = Math.random() > 0.5 ? '#000' : '#fff';
    g.beginPath(); g.arc(Math.random() * 512, Math.random() * 512, 30 + Math.random() * 100, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function makePanelTexture() {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#9a9a9a'; g.fillRect(0, 0, 1024, 256);
  g.fillStyle = '#4a4a4a';
  for (let x = 0; x < 1024; x += 128) g.fillRect(x, 0, 3, 256);
  g.fillRect(0, 120, 1024, 2);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 1); return t;
}
function makeShadowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(128, 128, 10, 128, 128, 128);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.55, 'rgba(255,255,255,.75)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c); return t;
}

/* ---------------- старт ---------------- */
const chips = $('#car-chips');
CARS.forEach((d) => {
  const b = document.createElement('button');
  b.className = 'car-chip'; b.dataset.id = d.id; b.textContent = d.name;
  b.addEventListener('click', () => loadCar(d));
  chips.appendChild(b);
});

resize(); computeHome(); camera.position.copy(homePos); readScroll();
new EXRLoader().load('assets/studio.exr', (hdr) => { hdr.mapping = THREE.EquirectangularReflectionMapping; buildEnv(hdr); }, undefined, () => buildEnv(null));
buildEnv(null);
const startCar = CARS.find((c) => c.id === new URLSearchParams(location.search).get('car')) || CARS[0];
loadCar(startCar);
tick();

window.__wash = { get car() { return car; }, setProgress: (p) => { progress = p; sweepSmooth = THREE.MathUtils.clamp((p - 0.14) / 0.7, 0, 1); }, setSponge, paintAt, camera, controls, DirtUniforms, cleanliness };
