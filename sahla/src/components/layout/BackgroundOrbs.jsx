import React, { memo } from 'react'
import { useThemeStore } from '@/stores/themeStore'

/**
 * BackgroundOrbs — GPU-composited ambient background.
 * Adapts to light/dark mode using reduced opacity in light mode.
 */
const BackgroundOrbsInner = () => {
  const resolvedTheme = useThemeStore((s) => s.resolvedTheme)
  const isDark = resolvedTheme === 'dark'

  // In light mode, orbs need higher saturation/opacity to show up clearly on a white background
  const orbOpacity = isDark ? 1 : 0.85

  return (
    <div
      className="BackgroundOrbs fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ contain: 'strict', opacity: orbOpacity, transition: 'opacity 300ms ease' }}
      aria-hidden="true"
    >
      {/* Deep base layer */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 80% 60% at 50% 120%, rgba(6,182,212,0.12) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 80% 60% at 50% 120%, rgba(108,99,255,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Orb 1 — large violet, top-left */}
      <div
        className="orb-drift-a absolute rounded-full"
        style={{
          top: '-15%', left: '-12%',
          width: '55%', height: '55%',
          background: isDark
            ? 'radial-gradient(circle at 40% 40%, rgba(139,92,246,0.55) 0%, rgba(109,40,217,0.25) 40%, transparent 70%)'
            : 'radial-gradient(circle at 40% 40%, rgba(139,92,246,0.65) 0%, rgba(109,40,217,0.3) 40%, transparent 70%)',
          filter: 'blur(90px)',
          opacity: isDark ? 0.5 : 0.7,
          willChange: 'transform',
          contain: 'layout style paint',
        }}
      />

      {/* Orb 2 — electric blue, top-right */}
      <div
        className="orb-drift-b absolute rounded-full"
        style={{
          top: '5%', right: '-10%',
          width: '45%', height: '50%',
          background: isDark
            ? 'radial-gradient(circle at 60% 35%, rgba(59,130,246,0.5) 0%, rgba(37,99,235,0.2) 45%, transparent 70%)'
            : 'radial-gradient(circle at 60% 35%, rgba(59,130,246,0.5) 0%, rgba(37,99,235,0.2) 45%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: isDark ? 0.45 : 0.6,
          willChange: 'transform',
          contain: 'layout style paint',
        }}
      />

      {/* Orb 3 — cyan/teal, bottom-center */}
      <div
        className="orb-drift-c absolute rounded-full"
        style={{
          bottom: '-20%', left: '15%',
          width: '60%', height: '55%',
          background: isDark
            ? 'radial-gradient(circle at 50% 65%, rgba(6,182,212,0.45) 0%, rgba(8,145,178,0.2) 45%, transparent 70%)'
            : 'radial-gradient(circle at 50% 65%, rgba(6,182,212,0.5) 0%, rgba(8,145,178,0.25) 45%, transparent 70%)',
          filter: 'blur(110px)',
          opacity: isDark ? 0.4 : 0.6,
          willChange: 'transform',
          contain: 'layout style paint',
        }}
      />

      {/* Orb 4 — amber warmth, mid-right */}
      <div
        className="orb-drift-d absolute rounded-full"
        style={{
          top: '35%', right: '5%',
          width: '30%', height: '30%',
          background: isDark
            ? 'radial-gradient(circle at 55% 45%, rgba(245,158,11,0.4) 0%, rgba(217,119,6,0.15) 50%, transparent 70%)'
            : 'radial-gradient(circle at 55% 45%, rgba(245,158,11,0.45) 0%, rgba(217,119,6,0.2) 50%, transparent 70%)',
          filter: 'blur(70px)',
          opacity: isDark ? 0.35 : 0.5,
          willChange: 'transform',
          contain: 'layout style paint',
        }}
      />

      {/* Orb 5 — rose/magenta, upper-center */}
      <div
        className="orb-drift-e absolute rounded-full"
        style={{
          top: '10%', left: '30%',
          width: '25%', height: '28%',
          background: isDark
            ? 'radial-gradient(circle at 45% 40%, rgba(236,72,153,0.35) 0%, rgba(244,63,94,0.12) 50%, transparent 70%)'
            : 'radial-gradient(circle at 45% 40%, rgba(236,72,153,0.4) 0%, rgba(244,63,94,0.2) 50%, transparent 70%)',
          filter: 'blur(65px)',
          opacity: isDark ? 0.3 : 0.5,
          willChange: 'transform',
          contain: 'layout style paint',
        }}
      />

      {/* Orb 6 — deep indigo, bottom-right */}
      <div
        className="orb-drift-f absolute rounded-full"
        style={{
          bottom: '0%', right: '-5%',
          width: '35%', height: '40%',
          background: isDark
            ? 'radial-gradient(circle at 60% 60%, rgba(99,102,241,0.4) 0%, rgba(67,56,202,0.15) 50%, transparent 70%)'
            : 'radial-gradient(circle at 60% 60%, rgba(99,102,241,0.5) 0%, rgba(67,56,202,0.25) 50%, transparent 70%)',
          filter: 'blur(85px)',
          opacity: isDark ? 0.38 : 0.55,
          willChange: 'transform',
          contain: 'layout style paint',
        }}
      />

      {/* Mesh vignette — only in dark */}
      {isDark && (
        <div
          className="orb-vignette absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,0,0.3) 100%)',
          }}
        />
      )}

      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(var(--dot-grid-color) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top edge specular highlight */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '1px',
          background: `linear-gradient(90deg, transparent 0%, var(--specular-start) 30%, var(--specular-end) 70%, transparent 100%)`,
        }}
      />
    </div>
  )
}

export const BackgroundOrbs = memo(BackgroundOrbsInner)