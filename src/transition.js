// Монтажные переходы между двумя «кадрами»: застывший снимок (tSnap) и живая сцена (tDiffuse).
// mode 1 — шторка по рваной маске, вертикальная полоса идёт слева направо;
// mode 2 — whip pan: снимок с размытием улетает вправо, новый кадр влетает слева.
import * as THREE from 'three';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

const VERT = /* glsl */`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const FRAG = /* glsl */`
uniform sampler2D tDiffuse; uniform sampler2D tSnap;
uniform float uP; uniform int uMode; uniform float uAspect;
varying vec2 vUv;
float h1(float n){ return fract(sin(n)*43758.5453); }
float n1(float x){ float i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f); return mix(h1(i), h1(i+1.0), f); }
float fbm1(float x){ float s = 0.0, a = 0.5; for(int i=0;i<5;i++){ s += a*n1(x); x = x*2.07 + 13.1; a *= 0.5; } return s; }
float easeIO(float t){ return t < 0.5 ? 4.0*t*t*t : 1.0 - pow(-2.0*t + 2.0, 3.0)/2.0; }

void main(){
  vec2 uv = vUv;
  if (uMode == 1) {
    // ---- шторка: граница x = edge(y), рваная, с тонкими «волокнами»
    float p = 0.5 - 0.5*cos(3.14159265*uP);     // ровнее, без рывка посередине
    float edge = mix(-0.18, 1.18, p);
    float y = uv.y * 2.4;
    edge += (fbm1(y*3.0) - 0.5) * 0.16 + (n1(y*40.0) - 0.5) * 0.025;
    float d = uv.x - edge;                       // <0 — уже новый кадр
    float m = smoothstep(-0.004, 0.004, d);      // 1 — ещё старый кадр
    // у кромки кадр слегка «тянется» и светится
    float glow = exp(-abs(d) * 55.0);
    vec2 duv = uv + vec2(-glow * 0.012, 0.0);
    vec4 live = texture2D(tDiffuse, duv);
    vec4 snap = texture2D(tSnap, duv);
    vec4 col = mix(live, snap, m);
    col.rgb += vec3(0.75, 0.88, 1.0) * glow * 0.45 + vec3(1.0) * exp(-abs(d) * 260.0) * 0.6;
    gl_FragColor = col;
  } else {
    // ---- whip pan: смаз по горизонтали; до середины уезжает старый кадр, после — въезжает новый
    float p = clamp(uP, 0.0, 1.0);
    bool first = p < 0.5;
    float q = first ? p / 0.5 : (p - 0.5) / 0.5;
    float off = first ? easeIO(q) * 0.85 : -(1.0 - easeIO(q)) * 0.85;   // сдвиг кадра
    float speed = first ? sin(q * 1.5708) : cos(q * 1.5708);           // скорость → длина смаза
    float blur = 0.02 + 0.22 * speed * speed;
    vec3 acc = vec3(0.0); float wsum = 0.0;
    for (int i = 0; i < 32; i++) {
      float t = float(i) / 31.0 - 0.5;
      vec2 s = vec2(uv.x - off + t * blur, uv.y);
      s.x = abs(s.x); s.x = 1.0 - abs(1.0 - s.x);   // зеркалим края, чтобы не было пустоты
      float w = 1.0 - abs(t) * 1.2;
      acc += (first ? texture2D(tSnap, s).rgb : texture2D(tDiffuse, s).rgb) * w; wsum += w;
    }
    vec3 col = acc / wsum;
    col *= 1.0 + 0.35 * speed;                                          // лёгкий пересвет на пике
    gl_FragColor = vec4(col, 1.0);
  }
}`;

export class TransitionPass extends Pass {
  constructor() {
    super();
    this.enabled = false;
    this.needsSwap = true;
    this.capture = false;
    this.snapRT = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType });
    this.copy = new FullScreenQuad(new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: VERT,
      fragmentShader: 'uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ gl_FragColor = texture2D(tDiffuse, vUv); }',
      depthTest: false, depthWrite: false,
    }));
    this.material = new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null }, tSnap: { value: this.snapRT.texture }, uP: { value: 0 }, uMode: { value: 1 }, uAspect: { value: 1 } },
      vertexShader: VERT, fragmentShader: FRAG, depthTest: false, depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.material);
  }
  setSize(w, h) { this.snapRT.setSize(w, h); this.material.uniforms.uAspect.value = w / h; }
  render(renderer, writeBuffer, readBuffer) {
    if (this.capture) {           // снимок текущего кадра — «первый фрагмент видео»
      this.copy.material.uniforms.tDiffuse.value = readBuffer.texture;
      renderer.setRenderTarget(this.snapRT); this.copy.render(renderer);
      this.capture = false;
    }
    this.material.uniforms.tDiffuse.value = readBuffer.texture;
    renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
    this.quad.render(renderer);
  }
}
