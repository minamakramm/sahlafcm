import React, { memo } from 'react'

/**
 * SubjectVisual — Enhanced pure SVG visuals for subject cards.
 * Each visual is animated, thematic, and semantically rich.
 */
const SubjectVisualInner = ({ slug, color = '#534AB7' }) => {
  const visualMap = {
    'neural-networks': 'neural-networks',
    'machine-learning': 'machine-learning',
    'intelligent-programming': 'intelligent-programming',
    'data-mining': 'data-mining',
    'database': 'database',
    'smart-systems': 'smart-systems',
    'ds-tools': 'ds-tools',
  }

  const visualId = visualMap[slug] || slug

  const keyframes = `
    @keyframes vPulse { 0%,100%{opacity:.5} 50%{opacity:1} }
    @keyframes vFlow  { to{stroke-dashoffset:-20} }
    @keyframes vShimmer { 0%,100%{opacity:.3} 50%{opacity:.8} }
  `

  /* ── NEURAL NETWORKS ─────────────────────────────── */
  if (visualId === 'neural-networks') {
    return (
      <svg width="100%" viewBox="80 0 520 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{keyframes}</style>
          <radialGradient id={`nn-glow-${slug}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity=".8" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background faint connections */}
        <g opacity=".2" stroke={color} strokeWidth="1" fill="none">
          <line x1="120" y1="50" x2="310" y2="40" /><line x1="120" y1="50" x2="310" y2="90" /><line x1="120" y1="50" x2="310" y2="140" />
          <line x1="120" y1="130" x2="310" y2="40" /><line x1="120" y1="130" x2="310" y2="90" /><line x1="120" y1="130" x2="310" y2="140" />
          <line x1="310" y1="40" x2="500" y2="65" /><line x1="310" y1="40" x2="500" y2="115" />
          <line x1="310" y1="90" x2="500" y2="65" /><line x1="310" y1="90" x2="500" y2="115" />
          <line x1="310" y1="140" x2="500" y2="65" /><line x1="310" y1="140" x2="500" y2="115" />
        </g>

        {/* Active path highlight */}
        <g fill="none" strokeWidth="2.5" opacity=".75">
          <line x1="120" y1="50" x2="310" y2="90" stroke={color} style={{ animation: 'vPulse 2s ease-in-out infinite' }} />
          <line x1="310" y1="90" x2="500" y2="115" stroke={color} style={{ animation: 'vPulse 2s ease-in-out infinite .4s' }} />
        </g>

        {/* Input nodes */}
        <g style={{ animation: 'vPulse 3s ease-in-out infinite' }}>
          <rect x="106" y="34" width="28" height="28" rx="6" fill="none" stroke={color} strokeWidth="2" />
          <rect x="106" y="116" width="28" height="28" rx="6" fill="none" stroke={color} strokeWidth="2" />
        </g>

        {/* Hidden layer nodes */}
        {[40, 90, 140].map((y, i) => (
          <circle key={i} cx="310" cy={y} r="13"
            fill={i === 1 ? color : 'transparent'} fillOpacity={i === 1 ? .2 : 1}
            stroke={color} strokeWidth={i === 1 ? 2.5 : 1.5}
            style={i === 1 ? { animation: 'vPulse 2.2s ease-in-out infinite .3s' } : undefined} />
        ))}

        {/* Output nodes + glow */}
        {[65, 115].map((y, i) => (
          <g key={i}>
            {i === 1 && <circle cx="500" cy={y} r="30" fill={`url(#nn-glow-${slug})`} style={{ animation: 'vPulse 2s ease-in-out infinite .6s' }} />}
            <circle cx="500" cy={y} r="16"
              fill={color} fillOpacity={i === 1 ? .6 : .2}
              stroke={color} strokeWidth={i === 1 ? 2.5 : 2}
              style={i === 1 ? { animation: 'vPulse 1.8s ease-in-out infinite .6s' } : undefined} />
          </g>
        ))}

        {/* Layer labels */}
        {[
          { x: 120, label: 'Input' },
          { x: 310, label: 'Hidden' },
          { x: 500, label: 'Output' },
        ].map(({ x, label }) => (
          <text key={label} x={x} y="170" textAnchor="middle" fontSize="11" fill={color} fillOpacity=".6" fontFamily="sans-serif">{label}</text>
        ))}
      </svg>
    )
  }

  /* ── MACHINE LEARNING ────────────────────────────── */
  if (visualId === 'machine-learning') {
    const clusterA = [
      { x: 200, y: 55, r: 6 }, { x: 235, y: 46, r: 5 }, { x: 265, y: 62, r: 5.5 },
      { x: 295, y: 42, r: 6 }, { x: 320, y: 58, r: 5 },
    ]
    const clusterB = [
      { x: 385, y: 112 }, { x: 425, y: 120 }, { x: 462, y: 104 }, { x: 492, y: 126 },
    ]
    return (
      <svg width="100%" viewBox="80 0 520 170" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{keyframes}</style>
          <marker id={`arr-ml-${slug}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>
        {/* Axes */}
        <line x1="145" y1="20" x2="145" y2="145" stroke={color} strokeOpacity=".3" strokeWidth="1.5" />
        <line x1="145" y1="145" x2="560" y2="145" stroke={color} strokeOpacity=".3" strokeWidth="1.5" />
        {/* Confidence band */}
        <path d="M160,134 Q355,88 548,30 L548,50 Q355,110 160,152Z" fill={color} fillOpacity=".07" />
        {/* Regression line */}
        <line x1="160" y1="133" x2="548" y2="32" stroke={color} strokeWidth="2" strokeDasharray="8 4" opacity=".6" />
        {/* Cluster A — filled */}
        {clusterA.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={color} fillOpacity=".85" />
        ))}
        {/* Cluster B — outlined */}
        {clusterB.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={5} fill="none" stroke={color} strokeWidth="1.5" strokeOpacity=".7" />
        ))}
        {/* Prediction arrow */}
        <line x1="532" y1="88" x2="532" y2="35" stroke={color} strokeWidth="1.5"
          markerEnd={`url(#arr-ml-${slug})`} style={{ animation: 'vPulse 2.5s ease-in-out infinite' }} />
        <text x="542" y="62" fontSize="12" fill={color} fontFamily="sans-serif" style={{ animation: 'vPulse 2.5s ease-in-out infinite' }}>ŷ</text>
        {/* Axis labels */}
        <text x="355" y="162" textAnchor="middle" fontSize="11" fill={color} fillOpacity=".5" fontFamily="sans-serif">Feature x</text>
        <text x="128" y="83" textAnchor="middle" fontSize="11" fill={color} fillOpacity=".5" fontFamily="sans-serif" transform="rotate(-90,128,83)">Label y</text>
      </svg>
    )
  }

  /* ── INTELLIGENT PROGRAMMING ─────────────────────── */
  if (visualId === 'intelligent-programming') {
    return (
      <svg width="100%" viewBox="80 0 520 170" xmlns="http://www.w3.org/2000/svg">
        <defs><style>{keyframes}</style></defs>
        {/* Tree edges */}
        <g stroke={color} strokeWidth="1.5" fill="none" strokeOpacity=".5">
          <line x1="340" y1="44" x2="220" y2="82" />
          <line x1="340" y1="44" x2="460" y2="82" />
          <line x1="220" y1="104" x2="155" y2="130" />
          <line x1="220" y1="104" x2="285" y2="130" />
          <line x1="460" y1="104" x2="395" y2="130" />
          <line x1="460" y1="104" x2="525" y2="130" />
        </g>
        {/* Root */}
        <rect x="305" y="22" width="70" height="36" rx="8" fill="none" stroke={color} strokeWidth="2" />
        <text x="340" y="40" textAnchor="middle" dominantBaseline="central" fontSize="12" fontWeight="500" fill={color} fontFamily="sans-serif">start</text>
        {/* Mid nodes */}
        {[{ x: 185, label: 'if / else' }, { x: 425, label: 'loop' }].map(({ x, label }) => (
          <g key={label}>
            <rect x={x} y="82" width="70" height="33" rx="8" fill="none" stroke={color} strokeOpacity=".6" strokeWidth="1.5" />
            <text x={x + 35} y="98" textAnchor="middle" dominantBaseline="central" fontSize="11" fill={color} fillOpacity=".8" fontFamily="sans-serif">{label}</text>
          </g>
        ))}
        {/* Leaves */}
        <rect x="124" y="125" width="62" height="30" rx="6" fill={color} fillOpacity=".15" stroke={color} strokeWidth="1.5" style={{ animation: 'vPulse 2s ease-in-out infinite' }} />
        <text x="155" y="140" textAnchor="middle" dominantBaseline="central" fontSize="10" fill={color} fontFamily="sans-serif">✓ true</text>
        <rect x="254" y="125" width="62" height="30" rx="6" fill="none" stroke={color} strokeOpacity=".4" strokeWidth="1.5" />
        <text x="285" y="140" textAnchor="middle" dominantBaseline="central" fontSize="10" fill={color} fillOpacity=".6" fontFamily="sans-serif">✗ false</text>
        <rect x="364" y="125" width="62" height="30" rx="6" fill="none" stroke={color} strokeOpacity=".4" strokeWidth="1.5" />
        <text x="395" y="140" textAnchor="middle" dominantBaseline="central" fontSize="10" fill={color} fillOpacity=".6" fontFamily="sans-serif">next()</text>
        <rect x="494" y="125" width="62" height="30" rx="6" fill="none" stroke={color} strokeOpacity=".4" strokeWidth="1.5" />
        <text x="525" y="140" textAnchor="middle" dominantBaseline="central" fontSize="10" fill={color} fillOpacity=".6" fontFamily="sans-serif">break</text>
      </svg>
    )
  }

  /* ── DATA MINING ─────────────────────────────────── */
  if (visualId === 'data-mining') {
    const clusters = [
      { cx: 200, cy: 80, r: 48, c: color,    dots: [{ x: 180, y: 65 }, { x: 218, y: 95 }, { x: 190, y: 100 }, { x: 215, y: 65 }] },
      { cx: 380, cy: 72, r: 44, c: '#D85A30', dots: [{ x: 360, y: 58 }, { x: 398, y: 84 }, { x: 365, y: 90 }] },
      { cx: 540, cy: 90, r: 40, c: '#1D9E75', dots: [{ x: 522, y: 78 }, { x: 556, y: 76 }, { x: 525, y: 105 }] },
    ]
    return (
      <svg width="100%" viewBox="80 0 520 165" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{keyframes}</style>
          {clusters.map(({ cx, cy, c }, i) => (
            <radialGradient key={i} id={`dm-rg-${slug}-${i}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={c} stopOpacity=".55" />
              <stop offset="100%" stopColor={c} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>
        {clusters.map(({ cx, cy, r, c, dots }, i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r} fill={`url(#dm-rg-${slug}-${i})`} />
            <circle cx={cx} cy={cy} r={r - 2} fill="none" stroke={c} strokeWidth="1" strokeDasharray="5 4" strokeOpacity=".45"
              style={{ animation: `vPulse 3s ease-in-out infinite ${i * .8}s` }} />
            <circle cx={cx} cy={cy} r="10" fill={c} fillOpacity=".9" style={{ animation: `vPulse 2s ease-in-out infinite ${i * .5}s` }} />
            {dots.map((d, j) => (
              <circle key={j} cx={d.x} cy={d.y} r="4.5" fill={c} fillOpacity=".55" />
            ))}
          </g>
        ))}
        <text x="200" y="153" textAnchor="middle" fontSize="11" fill={color} fillOpacity=".6" fontFamily="sans-serif">Cluster A</text>
        <text x="380" y="133" textAnchor="middle" fontSize="11" fill="#D85A30" fillOpacity=".7" fontFamily="sans-serif">Cluster B</text>
        <text x="540" y="148" textAnchor="middle" fontSize="11" fill="#1D9E75" fillOpacity=".7" fontFamily="sans-serif">Cluster C</text>
      </svg>
    )
  }

  /* ── DATABASE ────────────────────────────────────── */
  if (visualId === 'database') {
    const stacks = [
      { cx: 200, label: 'Primary', delay: '0s', active: true },
      { cx: 340, label: 'Replica',  delay: '.5s', active: false },
      { cx: 480, label: 'Replica',  delay: '1s', active: false },
    ]
    const ry = 10, rx = 38
    const tiers = [128, 90, 52]
    return (
      <svg width="100%" viewBox="80 0 520 168" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{keyframes}</style>
          <marker id={`arr-db-${slug}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>
        {stacks.map(({ cx, label, delay, active }) => (
          <g key={cx}>
            {/* Bottom tier */}
            <ellipse cx={cx} cy={128} rx={rx} ry={ry} fill="none" stroke={color} strokeOpacity=".4" strokeWidth="1.5" />
            <path d={`M${cx - rx},128 L${cx - rx},90 A${rx} ${ry} 0 0 0 ${cx + rx} 90 L${cx + rx},128`} fill={color} fillOpacity=".06" stroke={color} strokeOpacity=".3" strokeWidth="1.5" />
            {/* Mid tier */}
            <ellipse cx={cx} cy={90} rx={rx} ry={ry} fill={color} fillOpacity=".12" stroke={color} strokeOpacity=".5" strokeWidth="1.5" />
            <path d={`M${cx - rx},90 L${cx - rx},52 A${rx} ${ry} 0 0 0 ${cx + rx} 52 L${cx + rx},90`} fill={color} fillOpacity=".18" stroke={color} strokeOpacity=".4" strokeWidth="1.5" />
            {/* Top tier */}
            <ellipse cx={cx} cy={52} rx={rx} ry={ry}
              fill={color} fillOpacity={active ? .55 : .28}
              stroke={color} strokeWidth={active ? 2 : 1.5}
              style={active ? { animation: `vPulse 2.5s ease-in-out ${delay} infinite` } : undefined} />
            {active && <circle cx={cx} cy={52} r="5" fill="white" fillOpacity=".9" style={{ animation: 'vShimmer 2.5s ease-in-out infinite' }} />}
            <text x={cx} y="22" textAnchor="middle" fontSize="11" fill={color} fillOpacity={active ? .85 : .5} fontFamily="sans-serif">{label}</text>
          </g>
        ))}
        {/* Replication arrows */}
        <line x1="238" y1="90" x2="302" y2="90" stroke={color} strokeWidth="1" strokeDasharray="5 3" strokeOpacity=".5" markerEnd={`url(#arr-db-${slug})`} />
        <line x1="378" y1="90" x2="442" y2="90" stroke={color} strokeWidth="1" strokeDasharray="5 3" strokeOpacity=".5" markerEnd={`url(#arr-db-${slug})`} />
        <text x="270" y="84" textAnchor="middle" fontSize="10" fill={color} fillOpacity=".4" fontFamily="sans-serif">sync</text>
        <text x="410" y="84" textAnchor="middle" fontSize="10" fill={color} fillOpacity=".4" fontFamily="sans-serif">sync</text>
      </svg>
    )
  }

  /* ── SMART SYSTEMS ───────────────────────────────── */
  if (visualId === 'smart-systems') {
    const sensors = [
      { x: 290, y: 38, label: 'temp',   lx: 160, ly: 52 },
      { x: 390, y: 38, label: 'light',  lx: 520, ly: 52 },
      { x: 272, y: 110, label: 'motion', lx: 145, ly: 108 },
      { x: 408, y: 110, label: 'audio',  lx: 535, ly: 108 },
    ]
    return (
      <svg width="100%" viewBox="80 0 520 165" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{keyframes}</style>
          <radialGradient id={`ss-glow-${slug}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity=".75" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Outer rings */}
        <circle cx="340" cy="80" r="68" fill="none" stroke={color} strokeWidth="1" strokeDasharray="10 6" strokeOpacity=".2" style={{ animation: 'vPulse 4s ease-in-out infinite' }} />
        <circle cx="340" cy="80" r="50" fill="none" stroke={color} strokeWidth="1" strokeDasharray="6 5" strokeOpacity=".3" style={{ animation: 'vPulse 3s ease-in-out infinite .5s' }} />
        {/* Sensor nodes + feed lines */}
        {sensors.map(({ x, y, label, lx, ly }, i) => {
          const left = lx < 340
          return (
            <g key={i}>
              <line x1={left ? lx + 20 : lx - 20} y1={ly} x2={x} y2={y}
                stroke={color} strokeWidth="1" strokeDasharray="4 3" strokeOpacity=".45" fill="none"
                style={{ animation: `vFlow 1.8s linear infinite` }} />
              <text x={left ? lx - 4 : lx + 4} y={ly + 4}
                textAnchor={left ? 'end' : 'start'} fontSize="11" fill={color} fillOpacity=".6" fontFamily="sans-serif"
                style={{ animation: `vPulse 3s ease-in-out infinite ${i * .4}s` }}>{label}</text>
              <circle cx={x} cy={y} r="7" fill={color} fillOpacity=".85"
                style={{ animation: `vPulse 2s ease-in-out infinite ${i * .3}s` }} />
            </g>
          )
        })}
        {/* Center glow + hub */}
        <circle cx="340" cy="80" r="36" fill={`url(#ss-glow-${slug})`} />
        <circle cx="340" cy="80" r="16" fill={color} fillOpacity=".85" style={{ animation: 'vPulse 2s ease-in-out infinite' }} />
        <circle cx="340" cy="80" r="8" fill="white" fillOpacity=".85" />
      </svg>
    )
  }

  /* ── DS TOOLS ────────────────────────────────────── */
  if (visualId === 'ds-tools') {
    const teeth = [0, 45, 90, 135, 180, 225, 270, 315]
    return (
      <svg width="100%" viewBox="80 0 520 180" xmlns="http://www.w3.org/2000/svg">
        <defs><style>{keyframes}</style></defs>
        {/* Orbit dashes */}
        <circle cx="340" cy="90" r="60" fill="none" stroke={color} strokeWidth="1" strokeDasharray="10 5" strokeOpacity=".25" style={{ animation: 'vPulse 4s ease-in-out infinite' }} />
        {/* Orbiting nodes */}
        {[0, 72, 144, 216, 288].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          const nx = 340 + 60 * Math.cos(rad)
          const ny = 90 + 60 * Math.sin(rad)
          return (
            <g key={i}>
              <line x1="340" y1="90" x2={nx} y2={ny} stroke={color} strokeWidth="1" strokeDasharray="3 3" strokeOpacity=".35" />
              <circle cx={nx} cy={ny} r="7" fill={color} fillOpacity=".8" style={{ animation: `vPulse 2.4s ease-in-out infinite ${i * .4}s` }} />
            </g>
          )
        })}
        {/* Gear teeth */}
        {teeth.map(deg => {
          const rad = (deg * Math.PI) / 180
          const tx = 340 + 36 * Math.cos(rad) - 5
          const ty = 90 + 36 * Math.sin(rad) - 8
          return (
            <rect key={deg} x={tx} y={ty} width="10" height="16" rx="3"
              fill={color} fillOpacity=".7"
              transform={`rotate(${deg}, ${tx + 5}, ${ty + 8})`} />
          )
        })}
        {/* Inner hub */}
        <circle cx="340" cy="90" r="28" fill="none" stroke={color} strokeWidth="2.5" strokeOpacity=".6" />
        <circle cx="340" cy="90" r="22" fill={color} fillOpacity=".1" />
        {/* Bar chart inside hub */}
        <rect x="326" y="86" width="5" height="12" rx="1" fill={color} fillOpacity=".8" />
        <rect x="334" y="78" width="5" height="20" rx="1" fill="white" fillOpacity=".7" />
        <rect x="342" y="82" width="5" height="16" rx="1" fill={color} fillOpacity=".6" />
        <rect x="350" y="90" width="5" height="8" rx="1" fill={color} fillOpacity=".5" />
        {/* Floating data dots */}
        <circle cx="220" cy="62" r="6" fill={color} fillOpacity=".7" style={{ animation: 'vPulse 2s ease-in-out infinite' }} />
        <circle cx="460" cy="118" r="6" fill={color} fillOpacity=".7" style={{ animation: 'vPulse 2s ease-in-out infinite .5s' }} />
        <circle cx="460" cy="52" r="4" fill="white" fillOpacity=".5" />
        <circle cx="220" cy="128" r="4" fill="white" fillOpacity=".5" />
        {/* Arcs */}
        <path d="M220,62 Q340,28 460,52" stroke={color} strokeWidth="1.5" fill="none" strokeOpacity=".4" strokeDasharray="4 2" />
        <path d="M220,128 Q340,162 460,118" stroke={color} strokeWidth="1.5" fill="none" strokeOpacity=".4" strokeDasharray="4 2" />
      </svg>
    )
  }

  /* ── FALLBACK / GENERIC ──────────────────────────── */
  return (
    <svg width="100%" viewBox="80 0 520 180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>{keyframes}</style>
        <radialGradient id={`fb-glow-${slug}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity=".6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Background web */}
      <g opacity=".3" stroke={color} strokeWidth="1" fill="none">
        <path d="M240,40 L440,140 M240,140 L440,40 M340,30 L340,150 M230,90 L450,90" />
        <circle cx="340" cy="90" r="45" strokeDasharray="4 4" />
        <circle cx="340" cy="90" r="75" strokeDasharray="8 6" opacity=".5" />
      </g>
      
      {/* Floating nodes */}
      {[
        { x: 240, y: 40, d: '0s' }, { x: 440, y: 140, d: '.3s' },
        { x: 240, y: 140, d: '.6s' }, { x: 440, y: 40, d: '.9s' },
        { x: 340, y: 30, d: '1.2s' }, { x: 340, y: 150, d: '1.5s' },
        { x: 230, y: 90, d: '1.8s' }, { x: 450, y: 90, d: '2.1s' }
      ].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="5" fill={color} fillOpacity=".8"
          style={{ animation: `vPulse 2s ease-in-out infinite ${p.d}` }} />
      ))}
      
      {/* Center Core */}
      <circle cx="340" cy="90" r="28" fill={`url(#fb-glow-${slug})`} style={{ animation: 'vPulse 3s ease-in-out infinite' }} />
      <polygon points="340,75 353,98 327,98" fill="none" stroke={color} strokeWidth="2" strokeOpacity=".8" style={{ animation: 'vShimmer 2.5s ease-in-out infinite' }} />
      <polygon points="340,105 353,82 327,82" fill="none" stroke={color} strokeWidth="2" strokeOpacity=".5" style={{ animation: 'vShimmer 2.5s ease-in-out infinite .5s' }} />
    </svg>
  )
}

export const SubjectVisual = memo(SubjectVisualInner)