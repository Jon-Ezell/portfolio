/**
 * dotBlobHero.js — animated dot-mesh blob, Three.js ES module
 * API: initDotBlobHero({ container, theme }) → { dispose, setTheme, setParams }
 */

import * as THREE from 'three';

// ── Defaults ────────────────────────────────────────────────────────────────
const CFG = {
  DETAIL_DESKTOP : 8,
  DETAIL_MOBILE  : 5,
  BLOB_RADIUS    : 1.8,
  NOISE_AMP      : 0.91,
  NOISE_FREQ     : 2.3,
  NOISE_SPEED    : 0.46,
  POINT_SIZE     : 0.2,
  GLOW_AMOUNT    : 2.0,    // halo brightness multiplier
  GLOW_FALLOFF   : 4.5,   // halo tightness (higher = tighter)
  PARALLAX_STRENGTH  : 0.08,
  MOUSE_SENSITIVITY  : 0.0007, // angular impulse per pixel of mouse delta
  FRICTION           : 0.99,   // per-frame velocity multiplier (higher = longer coast)
  AUTO_ROTATE_SPEED  : 0.0006,
  BLOB_SCALE         : 1.45,
  CAMERA_FOV  : 55,
  CAMERA_DIST : 4.5,
  BLOB_X_OFFSET : 0,   // fraction of visible width; 0 = centred
};

// ── Themes ───────────────────────────────────────────────────────────────────
const THEMES = {
  warm: {
    colorCore      : new THREE.Color(0.72, 0.08, 0.02),
    colorHighlight : new THREE.Color(1.00, 0.50, 0.08),
    colorRim       : new THREE.Color(1.00, 0.82, 0.45),
  },
  mono: {
    colorCore      : new THREE.Color(0.15, 0.15, 0.15),
    colorHighlight : new THREE.Color(0.65, 0.65, 0.65),
    colorRim       : new THREE.Color(1.00, 1.00, 1.00),
  },
  cool: {
    colorCore      : new THREE.Color(0.02, 0.10, 0.60),
    colorHighlight : new THREE.Color(0.10, 0.65, 0.90),
    colorRim       : new THREE.Color(0.70, 0.95, 1.00),
  },
  // Deep purple core bleeding into electric magenta rim
  plasma: {
    colorCore      : new THREE.Color(0.25, 0.00, 0.55),
    colorHighlight : new THREE.Color(0.80, 0.10, 0.90),
    colorRim       : new THREE.Color(1.00, 0.40, 1.00),
  },
  // Rich ember — darker crimson core, bright gold rim
  ember: {
    colorCore      : new THREE.Color(0.50, 0.03, 0.00),
    colorHighlight : new THREE.Color(1.00, 0.35, 0.00),
    colorRim       : new THREE.Color(1.00, 0.90, 0.20),
  },
  // Northern lights — deep teal core into lime/cyan
  aurora: {
    colorCore      : new THREE.Color(0.00, 0.28, 0.22),
    colorHighlight : new THREE.Color(0.05, 0.85, 0.55),
    colorRim       : new THREE.Color(0.60, 1.00, 0.70),
  },
  // Ghostly white-blue — barely-there, ethereal
  ghost: {
    colorCore      : new THREE.Color(0.05, 0.06, 0.12),
    colorHighlight : new THREE.Color(0.30, 0.40, 0.65),
    colorRim       : new THREE.Color(0.85, 0.90, 1.00),
  },
  // Sunset — coral pink through amber
  sunset: {
    colorCore      : new THREE.Color(0.60, 0.08, 0.20),
    colorHighlight : new THREE.Color(1.00, 0.45, 0.20),
    colorRim       : new THREE.Color(1.00, 0.78, 0.35),
  },
};

// ── Simplex noise GLSL (Ashima Arts, MIT) ────────────────────────────────────
const NOISE_GLSL = `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);
  const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(
    i.z+vec4(0.,i1.z,i2.z,1.))
    +i.y+vec4(0.,i1.y,i2.y,1.))
    +i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;
  vec4 s1=floor(b1)*2.+1.;
  vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
  m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

// ── Vertex shader ─────────────────────────────────────────────────────────────
const VERT = `
${NOISE_GLSL}
uniform float uTime;
uniform float uNoiseAmp;
uniform float uNoiseFreq;
uniform float uPointSize;
attribute float aRandom;
varying float vNoise;
varying float vRandom;
void main(){
  float n1=snoise(normal*uNoiseFreq+uTime*0.28);
  float n2=snoise(normal*uNoiseFreq*2.4+uTime*0.55+31.7);
  float n=n1*0.70+n2*0.30;
  vec3 displaced=position+normal*n*uNoiseAmp;
  vec4 mvPos=modelViewMatrix*vec4(displaced,1.);
  gl_Position=projectionMatrix*mvPos;
  float dist=-mvPos.z;
  gl_PointSize=uPointSize*(300./dist)*(0.55+0.45*aRandom);
  vNoise=n;
  vRandom=aRandom;
}`;

// ── Fragment shader ───────────────────────────────────────────────────────────
const FRAG = `
uniform vec3  uColorCore;
uniform vec3  uColorHighlight;
uniform vec3  uColorRim;
uniform float uGlowAmount;
uniform float uGlowFalloff;
varying float vNoise;
varying float vRandom;
void main(){
  vec2  uv=gl_PointCoord-0.5;
  float r=length(uv);
  float core=1.-smoothstep(0.18,0.50,r);
  float halo=exp(-r*uGlowFalloff)*uGlowAmount;
  float brightness=core+halo;
  // Soft circular mask — antialiased edge, replaces hard discard to eliminate dark ring artifact
  float mask=1.0-smoothstep(0.44,0.50,r);
  brightness*=mask;
  if(brightness<0.001)discard;
  float t=vNoise*0.5+0.5;
  vec3 col=mix(uColorCore,uColorHighlight,t);
  col=mix(col,uColorRim,vRandom*0.30*t);
  gl_FragColor=vec4(col*brightness,brightness);
}`;

// ── Main export ───────────────────────────────────────────────────────────────
export function initDotBlobHero({ container, theme = 'warm' } = {}) {
  const isMobile      = window.innerWidth < 768;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Local mutable config (JS-side params not needing shader recompile)
  const live = {
    noiseSpeed       : CFG.NOISE_SPEED,
    autoRotateSpeed  : CFG.AUTO_ROTATE_SPEED,
    parallaxStrength : CFG.PARALLAX_STRENGTH,
    mouseSensitivity : CFG.MOUSE_SENSITIVITY,
    friction         : CFG.FRICTION,
    xOffset          : CFG.BLOB_X_OFFSET,
  };

  // ── Renderer ──────────────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  const canvas = renderer.domElement;
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  if (getComputedStyle(container).position === 'static') container.style.position = 'relative';
  container.prepend(canvas);

  // ── Scene / Camera ────────────────────────────────────────────────────────
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(CFG.CAMERA_FOV, container.offsetWidth / container.offsetHeight, 0.1, 100);
  camera.position.z = CFG.CAMERA_DIST;

  // ── Geometry ──────────────────────────────────────────────────────────────
  const detail  = isMobile ? CFG.DETAIL_MOBILE : CFG.DETAIL_DESKTOP;
  const geo     = new THREE.IcosahedronGeometry(CFG.BLOB_RADIUS, detail);
  const count   = geo.attributes.position.count;
  const randoms = new Float32Array(count);
  for (let i = 0; i < count; i++) randoms[i] = Math.random();
  geo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

  // ── Uniforms / Material ───────────────────────────────────────────────────
  const palette  = THEMES[theme] ?? THEMES.warm;
  const uniforms = {
    uTime          : { value: 0 },
    uNoiseAmp      : { value: CFG.NOISE_AMP },
    uNoiseFreq     : { value: CFG.NOISE_FREQ },
    uPointSize     : { value: isMobile ? CFG.POINT_SIZE * 0.65 : CFG.POINT_SIZE },
    uGlowAmount    : { value: CFG.GLOW_AMOUNT },
    uGlowFalloff   : { value: CFG.GLOW_FALLOFF },
    uColorCore     : { value: palette.colorCore.clone() },
    uColorHighlight: { value: palette.colorHighlight.clone() },
    uColorRim      : { value: palette.colorRim.clone() },
  };

  const mat = new THREE.ShaderMaterial({
    vertexShader: VERT, fragmentShader: FRAG, uniforms,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geo, mat);
  points.scale.setScalar(CFG.BLOB_SCALE);
  scene.add(points);

  function computeXOffset() {
    if (isMobile) return 0;
    const vFovRad = CFG.CAMERA_FOV * Math.PI / 180;
    const visH    = 2 * Math.tan(vFovRad / 2) * CFG.CAMERA_DIST;
    const visW    = visH * (container.offsetWidth / container.offsetHeight);
    return visW * live.xOffset;
  }
  points.position.x = computeXOffset();

  // ── Momentum rotation ─────────────────────────────────────────────────────
  // angVelY/X accumulate mouse impulses and decay toward baseline each frame.
  // The blob never fully stops — autoRotateSpeed is the steady-state floor.
  let angVelY = live.autoRotateSpeed;
  let angVelX = 0;
  let lastMouseX = null;
  let lastMouseY = null;
  let lastTouchX = null;
  let lastTouchY = null;

  function onMouseMove(e) {
    if (reducedMotion) return;
    if (lastMouseX !== null) {
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      angVelY += dx * live.mouseSensitivity * live.parallaxStrength;
      angVelX += dy * live.mouseSensitivity * live.parallaxStrength;
    }
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  }
  function onMouseLeave() {
    lastMouseX = null;
    lastMouseY = null;
  }
  function onTouchMove(e) {
    if (reducedMotion) return;
    const t = e.touches[0];
    if (lastTouchX !== null) {
      const dx = t.clientX - lastTouchX;
      const dy = t.clientY - lastTouchY;
      angVelY += dx * live.mouseSensitivity * live.parallaxStrength * 0.5;
      angVelX += dy * live.mouseSensitivity * live.parallaxStrength * 0.5;
    }
    lastTouchX = t.clientX;
    lastTouchY = t.clientY;
  }
  function onTouchEnd() {
    lastTouchX = null;
    lastTouchY = null;
  }
  window.addEventListener('mousemove',  onMouseMove,  { passive: true });
  window.addEventListener('mouseleave', onMouseLeave, { passive: true });
  container.addEventListener('touchmove', onTouchMove, { passive: true });
  container.addEventListener('touchend',  onTouchEnd,  { passive: true });

  // ── Resize ────────────────────────────────────────────────────────────────
  let resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const w = container.offsetWidth, h = container.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      points.position.x = computeXOffset();
    }, 150);
  }
  window.addEventListener('resize', onResize);

  // ── Animation loop ────────────────────────────────────────────────────────
  let rafId;
  const clock = new THREE.Clock();

  function tick() {
    rafId = requestAnimationFrame(tick);
    if (!reducedMotion) {
      uniforms.uTime.value = clock.getElapsedTime() * live.noiseSpeed;
      // Decay toward baseline: angVelY settles at autoRotateSpeed, angVelX settles at 0
      angVelY = angVelY * live.friction + live.autoRotateSpeed * (1 - live.friction);
      angVelX *= live.friction;
      points.rotation.y += angVelY;
      points.rotation.x += angVelX;
    }
    renderer.render(scene, camera);
  }
  tick();

  // ── Public API ────────────────────────────────────────────────────────────
  function setTheme(name) {
    const p = THEMES[name] ?? THEMES.warm;
    uniforms.uColorCore.value.copy(p.colorCore);
    uniforms.uColorHighlight.value.copy(p.colorHighlight);
    uniforms.uColorRim.value.copy(p.colorRim);
  }

  /**
   * setParams — update any tweakable parameter live
   * @param {object} p
   * p.noiseAmp        0–1       displacement magnitude
   * p.noiseFreq       0.1–4     spatial frequency
   * p.noiseSpeed      0–1       animation speed
   * p.pointSize       1–20      dot size
   * p.glowAmount      0–2       halo brightness
   * p.glowFalloff     1–20      halo tightness
   * p.autoRotateSpeed 0–0.01    idle rotation speed
   * p.parallaxStrength 0–0.5   mouse influence
   * p.scale           0.1–3    overall blob scale
   * p.xOffset         -0.5–0.5 horizontal position (fraction of visible width)
   */
  function setParams(p = {}) {
    if (p.noiseAmp        != null) uniforms.uNoiseAmp.value      = p.noiseAmp;
    if (p.noiseFreq       != null) uniforms.uNoiseFreq.value     = p.noiseFreq;
    if (p.pointSize       != null) uniforms.uPointSize.value     = p.pointSize;
    if (p.glowAmount      != null) uniforms.uGlowAmount.value    = p.glowAmount;
    if (p.glowFalloff     != null) uniforms.uGlowFalloff.value   = p.glowFalloff;
    if (p.colorCore      != null) uniforms.uColorCore.value.setStyle(p.colorCore);
    if (p.colorHighlight != null) uniforms.uColorHighlight.value.setStyle(p.colorHighlight);
    if (p.colorRim       != null) uniforms.uColorRim.value.setStyle(p.colorRim);
    if (p.noiseSpeed       != null) live.noiseSpeed               = p.noiseSpeed;
    if (p.autoRotateSpeed  != null) live.autoRotateSpeed          = p.autoRotateSpeed;
    if (p.parallaxStrength != null) live.parallaxStrength         = p.parallaxStrength;
    if (p.mouseSensitivity != null) live.mouseSensitivity         = p.mouseSensitivity;
    if (p.friction         != null) live.friction                 = p.friction;
    if (p.scale           != null) points.scale.setScalar(p.scale);
    if (p.xOffset         != null) {
      live.xOffset = p.xOffset;
      points.position.x = computeXOffset();
    }
  }

  function dispose() {
    cancelAnimationFrame(rafId);
    clearTimeout(resizeTimer);
    window.removeEventListener('mousemove',  onMouseMove);
    window.removeEventListener('mouseleave', onMouseLeave);
    window.removeEventListener('resize',     onResize);
    container.removeEventListener('touchmove', onTouchMove);
    container.removeEventListener('touchend',  onTouchEnd);
    geo.dispose();
    mat.dispose();
    renderer.dispose();
    canvas.remove();
  }

  return { dispose, setTheme, setParams };
}
