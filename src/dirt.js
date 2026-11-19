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
float dFbm(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ s+=a*dNoise(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=0.5; } return s; }
`;

const FRAG_PARS = /* glsl */`
uniform float uSweep; uniform vec3 uSweepDir; uniform highp sampler3D uMask;
uniform vec3 uBoxMin; uniform vec3 uBoxSize; uniform float uTime; uniform float uDirt;
varying vec3 vDW; varying vec3 vDN;
float gDirt; float gDirtH; float gMudWet; float gWet; float gFoam; vec3 gMud;
${NOISE}
void computeDirt(){
  vec3 p = vDW;
  vec3 b = (p - uBoxMin) / uBoxSize;
  float h = clamp(1.0 - b.y, 0.0, 1.0);             // 1 — у земли
  float up = clamp(vDN.y, 0.0, 1.0);
  float n1 = dFbm(p*1.7);
  float n2 = dFbm(p*7.5 + 3.1);
  float n3 = dNoise(p*38.0);
  // вертикальные потёки
  float streak = dFbm(vec3(p.x*26.0 + p.z*5.0, p.y*1.1 + 0.5*dNoise(p*3.0), p.z*26.0 - p.x*5.0));
  streak = smoothstep(0.3, 0.75, streak);
  float cover = n1*0.55 + streak*0.45 + h*0.7 + up*0.2 + n2*0.25 - 0.12;
  float d = smoothstep(0.30, 0.78, cover);               // толщина слоя
  float splat = smoothstep(0.6, 0.68, dNoise(p*13.0 + 11.0)) * (0.35 + h);
  d = clamp(max(d, splat*0.9), 0.0, 1.0);
  float crack = 1.0 - smoothstep(0.0, 0.03, abs(dNoise(p*20.0) - 0.5));
  vec3 dust = vec3(0.26, 0.20, 0.14);       // светлая пыль (линейный цвет)
  vec3 dry  = vec3(0.14, 0.095, 0.06);     // засохшая грязь
  vec3 wetMud = vec3(0.055, 0.04, 0.026);   // свежая мокрая грязь
  float wetness = smoothstep(0.45, 1.0, h*0.9 + n2*0.6 - 0.25 + streak*0.2);
  gMud = mix(dust, dry, smoothstep(0.2, 0.7, d));
  gMud = mix(gMud, wetMud, wetness);
  gMud *= 0.75 + 0.45*n3;
  gMud = mix(gMud, gMud*0.45, crack*0.5*(1.0-wetness));
  d = smoothstep(0.0, 0.55, d) * (0.9 + 0.1*n3);          // покрытие
  gMudWet = wetness;
  gDirtH = n2*0.7 + n3*0.3 + streak*0.4;

  // чистота: завеса + ручная мойка
  float s = dot(p, uSweepDir);
  float sweepClean = 1.0 - smoothstep(uSweep - 0.025, uSweep + 0.025, s);
  float m = texture(uMask, clamp(b, 0.0, 1.0)).r;
  float clean = max(sweepClean, smoothstep(0.15, 0.85, m));
  gDirt = d * (1.0 - clean) * uDirt;

  float behind = uSweep - s;   // >0 — уже вымыто
  gWet = sweepClean * (1.0 - smoothstep(0.0, 0.9, behind));
  gWet = max(gWet, smoothstep(0.2, 0.6, m) * (1.0 - smoothstep(0.6, 1.0, m)) );
  float edge = 1.0 - smoothstep(0.0, 0.12, abs(s - uSweep));
  float bub = smoothstep(0.35, 0.8, dNoise(p*60.0 + vec3(0.0, -uTime*2.0, 0.0)));
  gFoam = edge * (0.35 + 0.65*bub) * step(0.001, d + 0.3);
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
      .replace('#include <common>', '#include <common>\nvarying vec3 vDW; varying vec3 vDN;')
      .replace('#include <project_vertex>', `#include <project_vertex>
        vec4 dwp = vec4(transformed, 1.0);
        vec3 dwn = objectNormal;
        #ifdef USE_INSTANCING
          dwp = instanceMatrix * dwp;
          dwn = mat3(instanceMatrix) * dwn;
        #endif
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
        roughnessFactor = mix(roughnessFactor, mix(0.95, 0.55, gMudWet), gDirt);
        roughnessFactor = mix(roughnessFactor, 0.6, gFoam);
        roughnessFactor = mix(roughnessFactor, min(roughnessFactor, 0.06), gWet*0.9);`)
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.0, max(gDirt, gFoam));`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        if (gDirt > 0.001) normal = dirtBump(-vViewPosition, normal, gDirtH * 0.012 * gDirt);
        if (gWet > 0.001) {
          float drops = dNoise(vDW*55.0 + vec3(0.0, uTime*0.6, 0.0));
          normal = dirtBump(-vViewPosition, normal, smoothstep(0.55,0.9,drops) * 0.004 * gWet);
        }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance *= 1.0 - gDirt*0.9;`)
      .replace('#include <lights_physical_fragment>', `#include <lights_physical_fragment>
        #ifdef USE_CLEARCOAT
          material.clearcoat *= (1.0 - gDirt);
        #endif`)
      .replace('#include <transmission_fragment>', trans);
  };
  mat.customProgramCacheKey = () => 'dirt-v1';
  mat.needsUpdate = true;
}
