// Запекает в модель атрибут _EXTERIOR: 1 — внешняя поверхность (её пачкаем и моем),
// 0 — салон, багажник и всё, что закрыто кузовом и стёклами (всегда чистое).
// Из каждой вершины пускаются лучи во все стороны; если хотя бы пара лучей улетает
// наружу, ни во что не попав (стёкла считаются преградой), — вершина внешняя.
//
//   node tools/bake-exterior.mjs input.glb output.glb
//
// Потом сжать как обычно (см. README):
//   npx @gltf-transform/cli optimize output.glb models/car.glb --compress meshopt \
//     --texture-compress webp --texture-size 2048 --simplify false --palette false
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';

const [src, dst] = process.argv.slice(2);
if (!src || !dst) { console.log('usage: node tools/bake-exterior.mjs input.glb output.glb'); process.exit(1); }

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(src);
const root = doc.getRoot();

// 1. Собираем все треугольники сцены в мировых координатах
const items = []; // { prim, world: Matrix4 }
for (const node of root.listNodes()) {
  const mesh = node.getMesh(); if (!mesh) continue;
  const world = new THREE.Matrix4().fromArray(node.getWorldMatrix());
  for (const prim of mesh.listPrimitives()) {
    if (prim.getMode() !== 4) continue; // только TRIANGLES
    items.push({ prim, world });
  }
}
const allPos = [], allIdx = [];
let base = 0;
const v = new THREE.Vector3();
for (const { prim, world } of items) {
  const pos = prim.getAttribute('POSITION'); const n = pos.getCount();
  const el = [];
  for (let i = 0; i < n; i++) { pos.getElement(i, el); v.set(el[0], el[1], el[2]).applyMatrix4(world); allPos.push(v.x, v.y, v.z); }
  const ind = prim.getIndices();
  if (ind) { const a = ind.getArray(); for (let i = 0; i < a.length; i++) allIdx.push(a[i] + base); }
  else for (let i = 0; i < n; i++) allIdx.push(i + base);
  base += n;
}
const geo = new THREE.BufferGeometry();
geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(allPos), 3));
geo.setIndex(allIdx);
geo.computeBoundingBox();
const size = geo.boundingBox.getSize(new THREE.Vector3());
const L = Math.max(size.x, size.y, size.z);
console.log(`triangles: ${allIdx.length / 3}, vertices: ${base}, size: ${size.toArray().map((x) => x.toFixed(2))}`);
const bvh = new MeshBVH(geo);

// 2. Направления лучей — равномерно по сфере
const DIRS = [];
const N = 48, ga = Math.PI * (3 - Math.sqrt(5));
for (let i = 0; i < N; i++) {
  const y = 1 - (i + 0.5) / N * 2, r = Math.sqrt(1 - y * y), t = ga * i;
  DIRS.push(new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r));
}
const eps = L * 0.0012;      // отступ, чтобы луч не попал в собственную грань
const far = L * 3;
const ray = new THREE.Ray();
const NEED = 2;              // столько лучей должно улететь, чтобы считать вершину внешней

// 3. Классификация вершин
const t0 = Date.now();
const done = new Map(); // общий примитив у нескольких узлов — берём максимум
let ext = 0, total = 0;
for (const { prim, world } of items) {
  const pos = prim.getAttribute('POSITION'); const n = pos.getCount();
  const out = done.get(prim) || new Float32Array(n);
  const el = [];
  for (let i = 0; i < n; i++) {
    if (out[i] >= 1) continue;
    pos.getElement(i, el); v.set(el[0], el[1], el[2]).applyMatrix4(world);
    let esc = 0;
    for (const d of DIRS) {
      ray.origin.copy(v).addScaledVector(d, eps); ray.direction.copy(d);
      const hit = bvh.raycastFirst(ray, THREE.DoubleSide, 0, far);
      if (!hit) { esc++; if (esc >= NEED) break; }
    }
    out[i] = Math.max(out[i], esc >= NEED ? 1 : esc / NEED);
  }
  done.set(prim, out);
}
for (const [prim, out] of done) {
  const acc = doc.createAccessor().setType('SCALAR').setArray(out).setBuffer(root.listBuffers()[0]);
  prim.setAttribute('_EXTERIOR', acc);
  total += out.length; for (const x of out) if (x >= 1) ext++;
}
console.log(`exterior ${(ext / total * 100).toFixed(1)}% of ${total} vertices, ${((Date.now() - t0) / 1000).toFixed(1)}s`);
await io.write(dst, doc);
