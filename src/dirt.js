// Грязь, мойка и «мокрый» след — патч стандартных PBR-материалов модели.
import * as THREE from 'three';

export const DirtUniforms = {
  uSweep: { value: -100 },              // позиция «водяной завесы» по оси мойки
  uSweepDir: { value: new THREE.Vector3(0, 0, -1) },
  uMask: { value: null },                // 3D-маска ручной мойки
  uBoxMin: { value: new THREE.Vector3(-1, 0, -2.5) },
  uBoxSize: { value: new THREE.Vector3(2, 1.8, 5) },
  uTime: { value: 0 },
  uDirt: { value: 1 },                   // общая «загрязнённость» 0..1
};

const NOISE = /* glsl */`
float dHash(vec3 p){ p = fract(p*0.3183099 + 0.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float dNoise(vec3 x){
  vec3 i = floor(x); vec3 f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(dHash(i+vec3(0,0,0)),dHash(i+vec3(1,0,0)),f.x),
                 mix(dHash(i+vec3(0,1,0)),dHash(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(dHash(i+vec3(0,0,1)),dHash(i+vec3(1,0,1)),f.x),
                 mix(dHash(i+vec3(0,1,1)),dHash(i+vec3(1,1,1)),f.x),f.y),f.z);
}
// Ячеистый шум: расстояние до ближайшей «капли»
float dCell(vec3 p){
  vec3 i = floor(p), f = fract(p); float md = 1.0;
  for (int z=-1; z<=1; z++) for (int y=-1; y<=1; y++) for (int x=-1; x<=1; x++){
    vec3 g = vec3(float(x),float(y),float(z));
    vec3 o = vec3(dHash(i+g), dHash(i+g+19.1), dHash(i+g+47.7));
    md = min(md, length(g + o - f));
  }
  return md;
}
float dFbm(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ s+=a*dNoise(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=0.5; } return s; }
`;

const FRAG_PARS = /* glsl */`
uniform float uSweep; uniform vec3 uSweepDir; uniform highp sampler3D uMask;
uniform vec3 uBoxMin; uniform vec3 uBoxSize; uniform float uTime; uniform float uDirt;
varying vec3 vDW; varying vec3 vDN; varying float vExt;
float gDirt; float gDirtH; float gMudWet; float gWet; float gFoam; vec3 gMud;
${NOISE}
void computeDirt(){
  vec3 p = vDW;
  vec3 b = (p - uBoxMin) / uBoxSize;
  // Грязь «после дороги», слоями:
  //  1) тонкая пыль на всём кузове (гуще на горизонтальных панелях), сквозь неё виден лак;
  //  2) дорожная грязь снизу — пороги, низ дверей, бамперы, с рваной верхней границей;
  //  3) веер брызг за колёсами и грязные арки;
  //  4) «пылевой мешок» на задней двери и бампере;
  //  5) засохшие капли и дорожки от дождя.
  vec3 n = normalize(vDN);
  float up = clamp(n.y, 0.0, 1.0);
  float side = 1.0 - abs(n.y);
  float L = uBoxSize.z, H = uBoxSize.y;
  float hy = p.y - uBoxMin.y;                       // высота над землёй, м
  float fz = (p.z - uBoxMin.z) / L;                 // 0 — зад, 1 — перед

  float nA = dFbm(p*1.3);
  float nB = dFbm(p*4.0 + 3.1);
  float nC = dNoise(p*45.0);

  // 1) пыль
  float dustA = 0.42 + 0.33*up + 0.12*(nA - 0.5)*2.0;
  dustA *= 0.8 + 0.35*nB;
  // дорожки дождя по пыли на вертикальных панелях
  float rain = smoothstep(0.74, 0.9, dNoise(vec3(p.x*24.0 + p.z*24.0, p.y*0.7 + nA*1.5, p.z*24.0 - p.x*24.0)))
             * smoothstep(0.35, 0.65, dNoise(p*2.2 + 5.0));
  dustA *= 1.0 - 0.55*rain*side;
  dustA = clamp(dustA, 0.0, 0.88);

  // 2) грязь снизу
  float line = 0.38 + 0.10*(nA - 0.5)*2.0 + 0.06*(nB - 0.5)*2.0;   // м над землёй (норм. к H ниже)
  line *= H / 1.65;
  // колёса: приблизительно по габаритам
  float zf = uBoxMin.z + L*0.81, zr = uBoxMin.z + L*0.20, wy = H*0.21;
  float wr = H*0.27;
  float dF = length(vec2(p.y - uBoxMin.y - wy, p.z - zf));
  float dR = length(vec2(p.y - uBoxMin.y - wy, p.z - zr));
  float arch = max(smoothstep(wr*1.55, wr*1.05, dF), smoothstep(wr*1.55, wr*1.05, dR));
  // веер брызг за колесом (едем в +Z, грязь летит назад)
  float behF = zf - p.z, behR = zr - p.z;
  float fan = max(smoothstep(0.0, 0.25, behF) * smoothstep(1.3, 0.2, behF),
                  smoothstep(0.0, 0.25, behR) * smoothstep(1.0, 0.15, behR));
  fan *= smoothstep(H*0.62, H*0.15, hy);
  line += fan * H * 0.12 + arch * H * 0.15;
  // задняя дверь и бампер — «пылевой мешок»
  float rear = smoothstep(0.10, 0.0, fz) * smoothstep(-0.1, -0.6, n.z);
  line += rear * H * 0.35;
  float grimeA = 1.0 - smoothstep(line - H*0.10, line + H*0.03, hy);
  grimeA *= 0.7 + 0.3*nB;
  grimeA = max(grimeA, arch * (0.6 + 0.3*nB));
  grimeA = clamp(grimeA + rear*0.35*nA, 0.0, 1.0);

  // 3) брызги-капли: ниже — гуще
  float lowZone = 1.0 - smoothstep(line, line + H*0.30, hy);
  float c1 = dCell(p*22.0), c2 = dCell(p*55.0 + 7.0);
  float ds = 0.45 + 0.8*dNoise(p*9.0 + 2.0);              // разный размер капель
  float drops = smoothstep(0.30*ds, 0.16*ds, c1) * lowZone * (0.2 + fan*0.7 + arch*0.4) * smoothstep(0.25, 0.6, nB);
  drops = max(drops, smoothstep(0.22, 0.08, c2) * lowZone * 0.6 * smoothstep(0.3, 0.7, nA));
  float ring = smoothstep(0.30*ds, 0.25*ds, c1) * smoothstep(0.13*ds, 0.2*ds, c1) * lowZone * smoothstep(0.25, 0.6, nB);   // засохший ободок

  // цвета (линейные)
  vec3 dustC  = vec3(0.34, 0.31, 0.27) * (0.85 + 0.3*nC);   // серо-бежевая пыль
  vec3 grimeC = mix(vec3(0.13, 0.10, 0.07), vec3(0.26, 0.20, 0.14), smoothstep(0.3, 0.7, nB)) * (0.8 + 0.35*nC);
  vec3 dropC  = vec3(0.22, 0.18, 0.13);

  vec3 col = dustC; float a = dustA;
  col = mix(col, grimeC, grimeA); a = a + grimeA*(1.0 - a);
  col = mix(col, dropC*0.7, drops*0.85); a = a + drops*0.85*(1.0 - a);
  col = mix(col, dropC*1.25, ring*0.5);
  // шины и диски — тёмная пыль, без «пудры»
  gMud = col;
  float d = clamp(a, 0.0, 1.0);
  gMudWet = smoothstep(0.6, 1.0, grimeA) * smoothstep(H*0.18, 0.0, hy) * 0.6;
  gDirtH = grimeA*(0.6*nB + 0.4*nC) + drops*0.15;

  // чистота: завеса + ручная мойка
  float s = dot(p, uSweepDir);
  float sweepClean = 1.0 - smoothstep(uSweep - 0.025, uSweep + 0.025, s);
  float m = texture(uMask, clamp(b, 0.0, 1.0)).r;
  float clean = max(sweepClean, smoothstep(0.15, 0.85, m));
  // салон и всё закрытое кузовом — всегда чистое
  float ext = smoothstep(0.3, 0.9, vExt);
  gDirt = d * (1.0 - clean) * uDirt * ext;

  float behind = uSweep - s;   // >0 — уже вымыто
  gWet = sweepClean * (1.0 - smoothstep(0.0, 0.9, behind));
  gWet = max(gWet, smoothstep(0.2, 0.6, m) * (1.0 - smoothstep(0.6, 1.0, m)) );
  float edge = 1.0 - smoothstep(0.0, 0.12, abs(s - uSweep));
  float bub = smoothstep(0.35, 0.8, dNoise(p*60.0 + vec3(0.0, -uTime*2.0, 0.0)));
  gFoam = edge * (0.35 + 0.65*bub) * ext;
  gWet *= ext;
}
vec3 dirtBump(vec3 surf_pos, vec3 surf_norm, float hgt){
  vec3 sx = dFdx(surf_pos), sy = dFdy(surf_pos);
  vec3 r1 = cross(sy, surf_norm), r2 = cross(surf_norm, sx);
  float det = dot(sx, r1);
  vec3 grad = sign(det) * (dFdx(hgt)*r1 + dFdy(hgt)*r2);
  return normalize(abs(det)*surf_norm - grad);
}
`;

export function patchMaterial(mat) {
  if (!mat || mat.userData.dirtPatched) return;
  if (!(mat.isMeshStandardMaterial)) return;
  mat.userData.dirtPatched = true;
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, DirtUniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vDW; varying vec3 vDN; varying float vExt; attribute float _exterior;')
      .replace('#include <project_vertex>', `#include <project_vertex>
        vec4 dwp = vec4(transformed, 1.0);
        vec3 dwn = objectNormal;
        #ifdef USE_INSTANCING
          dwp = instanceMatrix * dwp;
          dwn = mat3(instanceMatrix) * dwn;
        #endif
        vExt = _exterior;
        vDW = (modelMatrix * dwp).xyz;
        vDN = normalize(mat3(modelMatrix) * dwn);`);

    const trans = THREE.ShaderChunk.transmission_fragment
      .replace('material.transmission = transmission;', 'material.transmission = transmission * (1.0 - gDirt);');

    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + FRAG_PARS)
      .replace('#include <color_fragment>', `#include <color_fragment>
        computeDirt();
        diffuseColor.rgb = mix(diffuseColor.rgb, gMud, gDirt);
        diffuseColor.a = mix(diffuseColor.a, 1.0, gDirt*0.9);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.92,0.95,1.0), gFoam*0.85);
        diffuseColor.a = max(diffuseColor.a, gFoam*0.8);`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, mix(0.92, 0.5, gMudWet), smoothstep(0.0, 0.55, gDirt));
        roughnessFactor = mix(roughnessFactor, 0.6, gFoam);
        roughnessFactor = mix(roughnessFactor, min(roughnessFactor, 0.06), gWet*0.9);`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.0, max(gDirt, gFoam));`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        if (gDirt > 0.001) normal = dirtBump(-vViewPosition, normal, gDirtH * 0.008 * gDirt);
        if (gWet > 0.001) {
          float drops = dNoise(vDW*55.0 + vec3(0.0, uTime*0.6, 0.0));
          normal = dirtBump(-vViewPosition, normal, smoothstep(0.55,0.9,drops) * 0.004 * gWet);
        }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance *= 1.0 - gDirt*0.9;`)
      .replace('#include <lights_physical_fragment>', `#include <lights_physical_fragment>
        #ifdef USE_CLEARCOAT
          material.clearcoat *= 1.0 - smoothstep(0.0, 0.45, gDirt);
        #endif`)
      .replace('#include <transmission_fragment>', trans);
  };
  mat.customProgramCacheKey = () => 'dirt-v1';
  mat.needsUpdate = true;
}
