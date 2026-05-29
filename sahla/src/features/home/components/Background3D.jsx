import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// ── Shaders ───────────────────────────────────────────────────────────────────

const STAR_VERT = `
  attribute float aPhase;
  attribute float aSize;
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uTime;
  void main() {
    float tw = 0.65 + 0.35 * sin(uTime * 1.4 + aPhase * 6.2832);
    vColor = color;
    vAlpha = tw;
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (300.0 / -mvPos.z) * tw;
    gl_Position = projectionMatrix * mvPos;
  }
`

const STAR_FRAG = `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float r = dot(uv, uv);
    if (r > 0.25) discard;
    float core = 1.0 - smoothstep(0.0, 0.07, r);
    float glow = 1.0 - smoothstep(0.0, 0.25, r);
    float b = core * 1.1 + glow * 0.45;
    gl_FragColor = vec4(vColor * b, b * vAlpha);
  }
`

// Animated nebula layer rendered as a fullscreen plane behind stars
const NEBULA_VERT = `
  varying vec2 vUV;
  void main() {
    vUV = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const NEBULA_FRAG = `
  varying vec2 vUV;
  uniform float uTime;
  uniform float uAspect;

  float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
  float noise(vec2 p){
    vec2 i=floor(p), f=fract(p);
    f = f*f*(3.0-2.0*f);
    float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
    return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);
  }
  float fbm(vec2 p){
    float v=0.0, a=0.5;
    for(int i=0;i<5;i++){ v+=a*noise(p); p=p*2.1+vec2(1.7,9.2); a*=0.5; }
    return v;
  }

  void main() {
    vec2 uv = vUV - 0.5;
    uv.x *= uAspect;
    float t = uTime * 0.012;

    float n1 = fbm(uv * 1.6 + t);
    float n2 = fbm(uv * 2.4 - t * 0.7 + 3.1);
    float n3 = fbm(uv * 0.9 + t * 0.4 + 7.3);

    // Original colors: purple #9333ea, teal #14b8a6
    vec3 purple = vec3(0.576, 0.200, 0.918);
    vec3 teal   = vec3(0.082, 0.722, 0.651);
    vec3 void_  = vec3(0.0, 0.0, 0.02);

    vec3 col = void_;
    col = mix(col, purple, pow(n1, 2.2) * 0.28);
    col = mix(col, teal,   pow(n2, 2.5) * 0.18);
    col = mix(col, purple * 0.6 + teal * 0.4, pow(n3, 3.0) * 0.12);

    float vig = 1.0 - smoothstep(0.3, 1.1, length(uv));
    col *= vig * vig;

    gl_FragColor = vec4(col, 1.0);
  }
`

// ── Original 4 colors from the first snippet ─────────────────────────────────
// #9333ea purple  #14b8a6 teal  #f59e0b amber  #f43f5e coral
const BASE_PALETTE = [
  new THREE.Color('#9333ea'),
  new THREE.Color('#14b8a6'),
  new THREE.Color('#f59e0b'),
  new THREE.Color('#f43f5e'),
]

// ── Nebula plane ──────────────────────────────────────────────────────────────
function Nebula() {
  const matRef = useRef()
  useFrame(({ clock, viewport }) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value   = clock.getElapsedTime()
      matRef.current.uniforms.uAspect.value = viewport.width / viewport.height
    }
  })
  return (
    <mesh position={[0, 0, -90]} scale={[300, 300, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={NEBULA_VERT}
        fragmentShader={NEBULA_FRAG}
        uniforms={{ uTime: { value: 0 }, uAspect: { value: 1 } }}
        depthWrite={false}
      />
    </mesh>
  )
}

// ── Stars ─────────────────────────────────────────────────────────────────────
function Stars() {
  const matRef   = useRef()
  const groupRef = useRef()
  const { camera } = useThree()
  const smooth = useRef({ mx: 0, my: 0, scroll: 0, rotY: 0, camZ: 22 })

  const N = 2200

  const { positions, colors, phases, sizes } = useMemo(() => {
    const positions = new Float32Array(N * 3)
    const colors    = new Float32Array(N * 3)
    const phases    = new Float32Array(N)
    const sizes     = new Float32Array(N)

    for (let i = 0; i < N; i++) {
      // Spherical shell — true space distribution, no cube edges
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 35 + Math.random() * 80
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Strictly the original 4 colors
      const c   = BASE_PALETTE[Math.floor(Math.random() * BASE_PALETTE.length)]
      const bri = 0.45 + Math.random() * 0.55
      colors[i * 3]     = c.r * bri
      colors[i * 3 + 1] = c.g * bri
      colors[i * 3 + 2] = c.b * bri

      // Realistic magnitude: mostly dim, few bright
      const mag = Math.random()
      sizes[i] = mag < 0.04 ? 4.5 + Math.random() * 2.5
               : mag < 0.18 ? 2.2 + Math.random() * 1.5
               :               0.8 + Math.random() * 1.1

      phases[i] = Math.random() * Math.PI * 2
    }
    return { positions, colors, phases, sizes }
  }, [])

  useFrame(({ clock, mouse }) => {
    const s = smooth.current
    const t = clock.getElapsedTime()

    // Smooth mouse parallax
    s.mx = s.mx + (mouse.x - s.mx) * 0.035
    s.my = s.my + (mouse.y - s.my) * 0.035

    // Smooth scroll
    const scrollMax = document.body.scrollHeight - window.innerHeight
    const rawScroll = scrollMax > 0 ? window.scrollY / scrollMax : 0
    s.scroll = s.scroll + (rawScroll - s.scroll) * 0.04

    // Slow auto-rotate, scroll boosts speed
    s.rotY += 0.0006 + s.scroll * 0.005

    if (groupRef.current) {
      groupRef.current.rotation.y = s.rotY + s.mx * 0.22
      groupRef.current.rotation.x = s.my * 0.15
    }

    // Camera drifts inward on scroll — feels like flying through space
    const targetZ = 22 - s.scroll * 14
    s.camZ = s.camZ + (targetZ - s.camZ) * 0.04
    camera.position.z = s.camZ

    if (matRef.current) matRef.current.uniforms.uTime.value = t
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={N} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color"    count={N} array={colors}    itemSize={3} />
          <bufferAttribute attach="attributes-aPhase"   count={N} array={phases}    itemSize={1} />
          <bufferAttribute attach="attributes-aSize"    count={N} array={sizes}     itemSize={1} />
        </bufferGeometry>
        <shaderMaterial
          ref={matRef}
          vertexShader={STAR_VERT}
          fragmentShader={STAR_FRAG}
          uniforms={{ uTime: { value: 0 } }}
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

// ── Export ────────────────────────────────────────────────────────────────────
export function Background3D() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', background: '#000005' }}>
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 22], fov: 60 }}
        dpr={[1, 2]}
      >
        <Nebula />
        <Stars />
      </Canvas>
    </div>
  )
}