import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useThemeStore } from '@/stores/themeStore'

/**
 * HeroSection — Cinematic orbital hero.
 * Dark background, glowing orb, subject nodes orbiting with connecting lines.
 * Pure canvas animation — no GSAP, no scroll listeners, no mouse-tracking overhead
 * beyond a single pointermove on the canvas wrapper.
 */

const SUBJECTS = [
  { label: 'Data Mining',              sub: 'Core',               angle: 0.5,  r: 0.72, color: '#7b6ef6' },
  { label: 'Neural Networks',          sub: 'AI',                 angle: 1.55, r: 0.70, color: '#4fa3f7' },
  { label: 'Machine Learning',         sub: 'AI',                 angle: 2.6,  r: 0.74, color: '#7b6ef6' },
  { label: 'Smart Systems',            sub: 'Intelligent Systems', angle: 3.65, r: 0.70, color: '#4fa3f7' },
  { label: 'Database Systems',         sub: 'Core',               angle: 4.7,  r: 0.72, color: '#a78bfa' },
  { label: 'Intelligent Programming',  sub: 'Intelligent Systems', angle: 5.75, r: 0.68, color: '#60a5fa' },
]

/* ─── Canvas renderer ─────────────────────────────────────── */

function useOrbCanvas(onNodeClick) {
  const canvasRef = useRef(null)
  const wrapRef   = useRef(null)
  const stateRef  = useRef({
    t: 0,
    targetMouse: { x: 0, y: 0 },
    mouse: { x: 0, y: 0 },
    scrollY: 0,
    raf: null,
    visible: true,
    ripples: [],         // click-ripple shockwaves
    nodePositions: [],   // cached for hover/click detection
    hoveredNode: -1,
  })

  const prefersReducedMotion = useRef(false)

  const resize = useCallback(() => {
    const canvas = canvasRef.current
    const wrap   = wrapRef.current
    if (!canvas || !wrap) return
    const { width: W, height: H } = wrap.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    canvas.width  = W * dpr
    canvas.height = H * dpr
    canvas.style.width  = `${W}px`
    canvas.style.height = `${H}px`
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)
  }, [])

  useEffect(() => {
    // Detect reduced-motion preference
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.current = mql.matches
    const onMotionChange = (e) => { prefersReducedMotion.current = e.matches }
    mql.addEventListener('change', onMotionChange)

    resize()
    const handleResize = () => {
      resize()
      if (prefersReducedMotion.current) {
        cancelAnimationFrame(stateRef.current.raf)
        stateRef.current.raf = requestAnimationFrame(loop)
      }
    }
    window.addEventListener('resize', handleResize)

    const wrap = wrapRef.current
    const canvas = canvasRef.current

    // IntersectionObserver — pause animation when off-screen
    let observer
    if (wrap) {
      observer = new IntersectionObserver(
        ([entry]) => {
          const wasVisible = stateRef.current.visible
          const isVisible = entry.isIntersecting
          stateRef.current.visible = isVisible
          if (isVisible && !wasVisible) {
            cancelAnimationFrame(stateRef.current.raf)
            stateRef.current.raf = requestAnimationFrame(loop)
          }
        },
        { threshold: 0.05 }
      )
      observer.observe(wrap)
    }

    // Mouse tracking
    const handleMove = (e) => {
      const rect = wrap.getBoundingClientRect()
      stateRef.current.targetMouse.x = e.clientX - rect.left - rect.width  * 0.42
      stateRef.current.targetMouse.y = e.clientY - rect.top  - rect.height * 0.50

      // Node hover detection
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      const nodes = stateRef.current.nodePositions
      let found = -1
      for (let i = 0; i < nodes.length; i++) {
        const dx = mx - nodes[i].x, dy = my - nodes[i].y
        if (dx * dx + dy * dy < 900) { found = i; break } // 30px radius
      }
      stateRef.current.hoveredNode = found
      canvas.style.cursor = found >= 0 ? 'pointer' : 'default'
    }
    const handleLeave = () => {
      stateRef.current.targetMouse = { x: 0, y: 0 }
      stateRef.current.hoveredNode = -1
      canvas.style.cursor = 'default'
    }

    // Click handler — ripple + node navigation
    const handleClick = (e) => {
      const rect = wrap.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      // Spawn ripple
      stateRef.current.ripples.push({ x: cx, y: cy, r: 0, alpha: 0.6 })
      // Check node click
      const idx = stateRef.current.hoveredNode
      if (idx >= 0 && onNodeClick) {
        onNodeClick(SUBJECTS[idx])
      }
    }

    // Scroll parallax
    const handleScroll = () => {
      stateRef.current.scrollY = window.scrollY
    }

    wrap?.addEventListener('pointermove', handleMove)
    wrap?.addEventListener('pointerleave', handleLeave)
    wrap?.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleScroll, { passive: true })

    function drawOrb(ctx, cx, cy, OR, t, isDark) {
      // outer halo rings
      for (let i = 3; i > 0; i--) {
        ctx.beginPath()
        ctx.arc(cx, cy, OR * (1 + i * 0.22), 0, Math.PI * 2)
        ctx.strokeStyle = isDark ? `rgba(108, 99, 255, ${0.05 * i})` : `rgba(108, 99, 255, ${0.12 * i})`
        ctx.lineWidth = isDark ? 1 : 1.5
        ctx.stroke()
      }

      // pulsating energy rings
      for (let i = 0; i < 3; i++) {
        const pulse = 0.95 + 0.08 * Math.sin(t * 3 + i * 2.1)
        const ringR = OR * (1.05 + i * 0.12) * pulse
        const baseAlpha = isDark ? (0.12 - i * 0.03) : (0.25 - i * 0.05)
        const alpha = baseAlpha * (0.7 + 0.3 * Math.sin(t * 2.5 + i))
        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(t * (0.15 + i * 0.08) * (i % 2 === 0 ? 1 : -1))
        ctx.beginPath()
        ctx.arc(0, 0, ringR, 0, Math.PI * 2)
        ctx.setLineDash([8 + i * 6, 14 + i * 4])
        ctx.strokeStyle = i === 1 ? `rgba(56, 189, 248, ${alpha})` : `rgba(108, 99, 255, ${alpha})`
        ctx.lineWidth = isDark ? (1.5 - i * 0.3) : (2 - i * 0.3)
        ctx.stroke()
        ctx.restore()
      }

      // aurora nebula core
      ctx.save()
      ctx.globalCompositeOperation = isDark ? 'screen' : 'source-over'
      const g1 = ctx.createRadialGradient(cx + Math.cos(t)*OR*0.2, cy + Math.sin(t*0.8)*OR*0.2, 0, cx, cy, OR)
      if (isDark) {
        g1.addColorStop(0,    'rgba(108, 99, 255, 0.35)')
        g1.addColorStop(0.5,  'rgba(56, 189, 248, 0.15)')
        g1.addColorStop(0.8,  'rgba(20, 40, 150, 0.05)')
        g1.addColorStop(1,    'rgba(0, 0, 0, 0)')
      } else {
        g1.addColorStop(0,    'rgba(108, 99, 255, 0.22)')
        g1.addColorStop(0.5,  'rgba(56, 189, 248, 0.12)')
        g1.addColorStop(0.8,  'rgba(108, 99, 255, 0.04)')
        g1.addColorStop(1,    'rgba(108, 99, 255, 0)')
      }
      ctx.beginPath()
      ctx.arc(cx, cy, OR, 0, Math.PI * 2)
      ctx.fillStyle = g1
      ctx.fill()
      // secondary aurora lobe
      const g1b = ctx.createRadialGradient(cx - Math.cos(t*0.7)*OR*0.25, cy - Math.sin(t*1.1)*OR*0.25, 0, cx, cy, OR * 0.9)
      if (isDark) {
        g1b.addColorStop(0,   'rgba(56, 189, 248, 0.25)')
        g1b.addColorStop(0.5, 'rgba(167, 139, 250, 0.08)')
        g1b.addColorStop(1,   'rgba(0, 0, 0, 0)')
      } else {
        g1b.addColorStop(0,   'rgba(56, 189, 248, 0.18)')
        g1b.addColorStop(0.5, 'rgba(167, 139, 250, 0.08)')
        g1b.addColorStop(1,   'rgba(56, 189, 248, 0)')
      }
      ctx.beginPath()
      ctx.arc(cx, cy, OR * 0.9, 0, Math.PI * 2)
      ctx.fillStyle = g1b
      ctx.fill()
      ctx.restore()

      // orb core base
      const g2 = ctx.createRadialGradient(cx - OR * 0.15, cy - OR * 0.15, OR * 0.05, cx, cy, OR * 0.9)
      if (isDark) {
        g2.addColorStop(0,    'rgba(150, 140, 255, 0.3)')
        g2.addColorStop(0.3,  'rgba(80, 70, 255, 0.15)')
        g2.addColorStop(1,    'rgba(5, 10, 40, 0.02)')
      } else {
        g2.addColorStop(0,    'rgba(108, 99, 255, 0.18)')
        g2.addColorStop(0.3,  'rgba(80, 70, 255, 0.10)')
        g2.addColorStop(1,    'rgba(108, 99, 255, 0.01)')
      }
      ctx.beginPath()
      ctx.arc(cx, cy, OR * 0.88, 0, Math.PI * 2)
      ctx.fillStyle = g2
      ctx.fill()

      // animated curved mesh on orb surface
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, OR * 0.88, 0, Math.PI * 2)
      ctx.clip()
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(108, 99, 255, 0.08)'
      ctx.lineWidth   = 0.5
      const step = OR * 0.15
      for (let x = cx - OR; x <= cx + OR; x += step) {
        ctx.beginPath()
        ctx.moveTo(x, cy - OR)
        ctx.bezierCurveTo(x + OR*0.3*Math.sin(t), cy, x - OR*0.3*Math.cos(t), cy, x, cy + OR)
        ctx.stroke()
      }
      for (let y = cy - OR; y <= cy + OR; y += step) {
        ctx.beginPath()
        ctx.moveTo(cx - OR, y)
        ctx.bezierCurveTo(cx, y + OR*0.3*Math.cos(t), cx, y - OR*0.3*Math.sin(t), cx + OR, y)
        ctx.stroke()
      }
      ctx.restore()

      // center hex energy core
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(t * 0.5)
      
      const hexPulse = 1 + 0.15 * Math.sin(t * 4)
      // outer glow hex
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = i * Math.PI / 3
        const r = OR * 0.22 * hexPulse
        i === 0 ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r)
      }
      ctx.closePath()
      ctx.strokeStyle = 'rgba(108, 99, 255, 0.15)'
      ctx.lineWidth = 1
      ctx.stroke()
      // inner hex
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const a = i * Math.PI / 3
        const r = OR * 0.14 * hexPulse
        i === 0 ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r)
      }
      ctx.closePath()
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      const hg = ctx.createRadialGradient(0, 0, 0, 0, 0, OR * 0.2)
      hg.addColorStop(0,   'rgba(255, 255, 255, 0.8)')
      hg.addColorStop(0.3, 'rgba(108, 99, 255, 0.5)')
      hg.addColorStop(0.7, 'rgba(56, 189, 248, 0.15)')
      hg.addColorStop(1,   'rgba(56, 189, 248, 0)')
      ctx.fillStyle = hg
      ctx.fill()
      ctx.restore()

      // light rays
      ctx.save()
      ctx.globalAlpha = 0.04
      for (let i = 0; i < 16; i++) {
        const a = i * (Math.PI * 2 / 16) + t * 0.12
        const rayLen = OR * (2.2 + 0.3 * Math.sin(t * 2 + i))
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(cx + Math.cos(a) * rayLen, cy + Math.sin(a) * rayLen)
        ctx.strokeStyle = i % 3 === 0 ? '#38BDF8' : '#6C63FF'
        ctx.lineWidth   = 1
        ctx.stroke()
      }
      ctx.globalAlpha = 1
      ctx.restore()
    }

    function drawGlassSphere(ctx, x, y, size, color, t, i) {
      ctx.save()
      
      // Chromatic aberration (offset red/blue glows)
      ctx.globalCompositeOperation = 'screen'
      ctx.beginPath(); ctx.arc(x - 1, y, size, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255, 0, 0, 0.05)'; ctx.fill()
      ctx.beginPath(); ctx.arc(x + 1, y, size, 0, Math.PI * 2); ctx.fillStyle = 'rgba(0, 255, 255, 0.05)'; ctx.fill()

      // Main glass body
      const g = ctx.createRadialGradient(x - size * 0.3, y - size * 0.3, 0, x, y, size)
      g.addColorStop(0, 'rgba(255, 255, 255, 0.4)')
      g.addColorStop(0.5, color + '33')
      g.addColorStop(1, color + '11')
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fillStyle = g
      ctx.fill()
      
      // Internal "network" details
      ctx.strokeStyle = color + '44'
      ctx.lineWidth = 0.5
      for (let j = 0; j < 3; j++) {
        const ang = t * 2 + j * Math.PI * 0.6
        ctx.beginPath()
        ctx.moveTo(x + Math.cos(ang) * size * 0.5, y + Math.sin(ang) * size * 0.5)
        ctx.lineTo(x - Math.cos(ang) * size * 0.5, y - Math.sin(ang) * size * 0.5)
        ctx.stroke()
      }

      // Specular highlight
      const hg = ctx.createRadialGradient(x - size * 0.4, y - size * 0.4, 0, x - size * 0.4, y - size * 0.4, size * 0.5)
      hg.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
      hg.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.beginPath(); ctx.arc(x - size * 0.4, y - size * 0.4, size * 0.4, 0, Math.PI * 2); ctx.fillStyle = hg; ctx.fill()
      
      ctx.restore()
    }

    function drawGlassCube(ctx, x, y, size, color, t, i) {
      ctx.save()
      const angle = t * 1.5 + i
      const vertices = [
        [-1,-1,-1], [1,-1,-1], [1,1,-1], [-1,1,-1],
        [-1,-1,1],  [1,-1,1],  [1,1,1],  [-1,1,1]
      ]
      const projected = vertices.map(v => {
        // Rotate around Y
        let x1 = v[0] * Math.cos(angle) - v[2] * Math.sin(angle)
        let z1 = v[0] * Math.sin(angle) + v[2] * Math.cos(angle)
        // Rotate around X
        let y1 = v[1] * Math.cos(angle * 0.5) - z1 * Math.sin(angle * 0.5)
        let z2 = v[1] * Math.sin(angle * 0.5) + z1 * Math.cos(angle * 0.5)
        return [x + x1 * size, y + y1 * size, z2]
      })

      const faces = [
        [0,1,2,3], [4,5,6,7], [0,1,5,4], [2,3,7,6], [0,3,7,4], [1,2,6,5]
      ]

      // Chromatic aberration pass
      ctx.globalCompositeOperation = 'screen'
      ctx.lineWidth = 1
      faces.forEach(f => {
        ctx.beginPath()
        ctx.moveTo(projected[f[0]][0] - 1, projected[f[0]][1])
        f.forEach(v => ctx.lineTo(projected[v][0] - 1, projected[v][1]))
        ctx.strokeStyle = 'rgba(255,0,0,0.1)'
        ctx.stroke()
      })

      // Main cube body
      faces.forEach((f, fi) => {
        ctx.beginPath()
        ctx.moveTo(projected[f[0]][0], projected[f[0]][1])
        f.forEach(v => ctx.lineTo(projected[v][0], projected[v][1]))
        ctx.closePath()
        ctx.fillStyle = color + (fi % 2 === 0 ? '22' : '11')
        ctx.fill()
        ctx.strokeStyle = color + '44'
        ctx.lineWidth = 1
        ctx.stroke()
      })
      
      // Internal "core"
      ctx.beginPath(); ctx.arc(x, y, size * 0.3, 0, Math.PI * 2); ctx.fillStyle = color + '66'; ctx.fill()
      
      ctx.restore()
    }

    function drawNodes(ctx, cx, cy, OR, t, mx, my, isDark) {
      const positions = []
      const hovered = stateRef.current.hoveredNode
      
      SUBJECTS.forEach((s, i) => {
        const speed = 0.2 + (i % 3) * 0.05
        const a  = s.angle + t * speed * (i % 2 === 0 ? 1 : -0.8)
        const nx = cx + Math.cos(a) * OR * s.r * 1.6 + mx * (0.6 + i * 0.1)
        const ny = cy + Math.sin(a) * OR * s.r * 0.75 + my * (0.5 + i * 0.08)
        positions.push({ x: nx, y: ny, color: s.color })

        // Node glow halo (brighter when hovered)
        const isHovered = hovered === i
        const glowR = isHovered ? 30 : 22
        const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, glowR)
        ng.addColorStop(0, s.color + (isHovered ? '80' : '40'))
        ng.addColorStop(0.5, s.color + (isHovered ? '30' : '15'))
        ng.addColorStop(1, s.color + '00')
        ctx.beginPath()
        ctx.arc(nx, ny, glowR, 0, Math.PI * 2)
        ctx.fillStyle = ng
        ctx.fill()

        // Base line to center
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(nx, ny)
        ctx.strokeStyle = isDark ? s.color + '18' : 'rgba(0,0,0,0.06)'
        ctx.lineWidth = 0.8
        ctx.stroke()

        // Data pulse segment
        const pulsePos = (t * 0.8 + i * 0.2) % 1
        const px = cx + (nx - cx) * pulsePos
        const py = cy + (ny - cy) * pulsePos
        const pg = ctx.createLinearGradient(px - 15, py - 15, px + 15, py + 15)
        pg.addColorStop(0, s.color + '00')
        pg.addColorStop(0.5, isDark ? s.color + 'ff' : s.color + 'cc')
        pg.addColorStop(1, s.color + '00')
        ctx.beginPath()
        ctx.moveTo(px - (nx - cx) * 0.08, py - (ny - cy) * 0.08)
        ctx.lineTo(px, py)
        ctx.strokeStyle = pg
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw 3D Object (scale up when hovered)
        const nodeSize = isHovered ? 1.25 : 1
        if (i % 2 === 0) {
          drawGlassCube(ctx, nx, ny, 12 * nodeSize, s.color, t, i)
        } else {
          drawGlassSphere(ctx, nx, ny, 14 * nodeSize, s.color, t, i)
        }

        // Orbiting satellites
        for (let j = 0; j < 2; j++) {
          const satA = t * (2 + j) + i
          const satR = 20 + j * 5
          const sx = nx + Math.cos(satA) * satR
          const sy = ny + Math.sin(satA) * satR * 0.5
          ctx.beginPath()
          ctx.arc(sx, sy, 1.5, 0, Math.PI * 2)
          ctx.fillStyle = isDark ? s.color : s.color + 'cc'
          ctx.fill()
        }

        // label — with collision avoidance
        const lx = nx + (nx > cx ? 30 : -30)
        let ly = ny
        // Push label away from previous labels to avoid overlap
        for (let k = 0; k < i; k++) {
          const prev = positions[k]
          if (Math.abs(prev.y - ly) < 28 && Math.abs(prev.x - nx) < 150) {
            ly += (ly > prev.y ? 28 : -28)
          }
        }
        ctx.textAlign = nx > cx ? 'left' : 'right'
        ctx.font      = '700 13px var(--font-heading), system-ui,sans-serif'
        ctx.fillStyle = isDark ? '#fff' : '#1a1a1a'
        if (isDark) {
          ctx.shadowColor = 'rgba(0,0,0,0.5)'
          ctx.shadowBlur = 4
        }
        ctx.fillText(s.label, lx, ly - 2)
        ctx.shadowBlur = 0
        ctx.font      = '600 10px var(--font-sans), system-ui,sans-serif'
        ctx.fillStyle = isDark ? s.color : s.color + 'ee'
        ctx.fillText(s.sub.toUpperCase(), lx, ly + 11)
      })

      // Cache node positions for hover/click detection
      stateRef.current.nodePositions = positions

      // Constellation connections
      ctx.save()
      ctx.globalCompositeOperation = isDark ? 'screen' : 'multiply'
      ctx.lineWidth = 0.5
      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const p1 = positions[i]
          const p2 = positions[j]
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)
          if (dist < OR * 1.6) {
            const alpha = Math.max(0, 1 - dist / (OR * 1.6)) * 0.3
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(108, 99, 255, ${alpha})`
            ctx.stroke()
          }
        }
      }
      ctx.restore()
    }

    function drawParticles(ctx, cx, cy, OR, t, mx, my, isDark) {
      ctx.save()
      for (let i = 0; i < 50; i++) {
        const a  = (i / 50) * Math.PI * 2 + t * 0.05
        const r  = OR * (1.2 + ((i * 137) % 200) / 100)
        const depth = 0.5 + ((i * 43) % 10) / 10
        const px = cx + Math.cos(a) * r + mx * depth * 3
        const py = cy + Math.sin(a) * r * 0.6 + my * depth * 3
        const sz = 0.8 + ((i * 73) % 15) / 10
        
        ctx.globalAlpha = isDark ? (0.2 + depth * 0.5) : (0.15 + depth * 0.35)
        ctx.beginPath()
        ctx.arc(px, py, sz, 0, Math.PI * 2)
        ctx.fillStyle = isDark 
          ? (i % 4 === 0 ? '#ffffff' : '#8899ff')
          : (i % 4 === 0 ? '#6C63FF' : '#38BDF8')
        ctx.fill()
      }
      ctx.restore()
    }

    function drawFlare(ctx, cx, cy, OR, t, isDark) {
      ctx.save()
      ctx.globalCompositeOperation = isDark ? 'screen' : 'source-over'
      const flarePulse = 0.95 + 0.05 * Math.sin(t * 4)
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, OR * 2.8)
      if (isDark) {
        g.addColorStop(0,   'rgba(108, 99, 255, 0.12)')
        g.addColorStop(0.3, 'rgba(56, 189, 248, 0.05)')
        g.addColorStop(0.6, 'rgba(20, 40, 150, 0.01)')
        g.addColorStop(1,   'rgba(0, 0, 0, 0)')
      } else {
        g.addColorStop(0,   'rgba(108, 99, 255, 0.08)')
        g.addColorStop(0.3, 'rgba(56, 189, 248, 0.04)')
        g.addColorStop(0.6, 'rgba(108, 99, 255, 0.01)')
        g.addColorStop(1,   'rgba(108, 99, 255, 0)')
      }
      ctx.fillStyle = g
      ctx.fillRect(cx - OR * 3, cy - OR * 3, OR * 6, OR * 6)
      
      // horizontal anamorphic streak
      const sg = ctx.createLinearGradient(cx - OR * 2.5, cy, cx + OR * 2.5, cy)
      sg.addColorStop(0,   'rgba(108, 99, 255, 0)')
      sg.addColorStop(0.4, 'rgba(167, 139, 250, 0.08)')
      sg.addColorStop(0.5, 'rgba(255, 255, 255, 0.25)')
      sg.addColorStop(0.6, 'rgba(56, 189, 248, 0.08)')
      sg.addColorStop(1,   'rgba(108, 99, 255, 0)')
      ctx.fillStyle = sg
      ctx.fillRect(cx - OR * 2.5, cy - 1, OR * 5, 2)

      // secondary vertical bloom
      const vg = ctx.createLinearGradient(cx, cy - OR * 1.5, cx, cy + OR * 1.5)
      vg.addColorStop(0,   'rgba(56, 189, 248, 0)')
      vg.addColorStop(0.5, 'rgba(255, 255, 255, 0.06)')
      vg.addColorStop(1,   'rgba(56, 189, 248, 0)')
      ctx.fillStyle = vg
      ctx.fillRect(cx - 0.5, cy - OR * 1.5, 1, OR * 3)
      ctx.restore()
    }

    function drawRipples(ctx, t) {
      const ripples = stateRef.current.ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i]
        rp.r += 4
        rp.alpha -= 0.015
        if (rp.alpha <= 0) { ripples.splice(i, 1); continue }
        ctx.save()
        ctx.globalCompositeOperation = 'screen'
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(108, 99, 255, ${rp.alpha})`
        ctx.lineWidth = 2
        ctx.stroke()
        // inner ring
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, rp.r * 0.6, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(56, 189, 248, ${rp.alpha * 0.5})`
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.restore()
      }
    }

    let lastTime = 0
    function loop(time) {
      const dt = time - lastTime
      lastTime = time

      // Skip if not visible (save CPU)
      if (!stateRef.current.visible) {
        return
      }

      // throttle rendering if tab was inactive
      if (dt > 100) {
        stateRef.current.raf = requestAnimationFrame(loop)
        return
      }

      // If reduced-motion is on, draw a single static frame then stop
      const reducedMotion = prefersReducedMotion.current

      const { t, targetMouse, mouse, scrollY } = stateRef.current
      
      // smooth mouse tracking (easing)
      if (targetMouse) {
        mouse.x += (targetMouse.x - mouse.x) * 0.08
        mouse.y += (targetMouse.y - mouse.y) * 0.08
      }

      const W   = canvas.width  / (window.devicePixelRatio || 1)
      const H   = canvas.height / (window.devicePixelRatio || 1)
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, W, H)

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      // Scroll parallax — orb drifts up slightly as user scrolls
      const scrollOffset = scrollY * 0.06
      const cx = W * 0.65
      const cy = H * 0.50 - scrollOffset
      const mx = mouse.x * 0.015
      const my = mouse.y * 0.015
      const OR = Math.min(W, H) * 0.32

      drawParticles(ctx, cx, cy, OR, t, mx, my, isDark)
      drawFlare(ctx, cx, cy, OR, t, isDark)
      drawOrb(ctx, cx, cy, OR, t, isDark)
      drawNodes(ctx, cx, cy, OR, t, mx, my, isDark)
      drawRipples(ctx, t)


      if (!reducedMotion) {
        stateRef.current.t += 0.008
        stateRef.current.raf = requestAnimationFrame(loop)
      }
    }

    stateRef.current.raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(stateRef.current.raf)
      observer?.disconnect()
      mql.removeEventListener('change', onMotionChange)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      wrap?.removeEventListener('pointermove', handleMove)
      wrap?.removeEventListener('pointerleave', handleLeave)
      wrap?.removeEventListener('click', handleClick)
    }
  }, [resize, onNodeClick])

  return { canvasRef, wrapRef }
}

/* ─── Component ───────────────────────────────────────────── */

const Typewriter = ({ text, delay = 0, speed = 50 }) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [started, setStarted] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, started, speed]);

  return <span className="inline-block relative">
    {displayedText}
    <span className="absolute -right-2 top-0 bottom-0 w-[2px] bg-accent-500 animate-pulse" style={{ opacity: displayedText.length === text.length ? 0 : 1 }}></span>
  </span>;
};

const HeroSectionInner = ({ className = '' }) => {
  const { t, i18n } = useTranslation('common')
  const navigate    = useNavigate()
  const isAr        = i18n.language === 'ar'

  const handleNodeClick = useCallback((subject) => {
    const el = document.getElementById('subject-grid')
    el ? el.scrollIntoView({ behavior: 'smooth', block: 'start' }) : navigate('/')
  }, [navigate])

  const { canvasRef, wrapRef } = useOrbCanvas(handleNodeClick)
  
  const resolvedTheme = useThemeStore((s) => s.resolvedTheme)
  const isDark = resolvedTheme === 'dark'

  const scrollToSubjects = () => {
    const el = document.getElementById('subject-grid')
    el ? el.scrollIntoView({ behavior: 'smooth', block: 'start' }) : navigate('/')
  }

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        minHeight: 'max(85svh, 600px)',
        background: 'transparent',
      }}
    >

      {/* ── Left copy ── */}
      <div
        className="relative z-10 flex flex-col justify-center h-full animate-fade-in"
        style={{
          padding: 'clamp(2rem,6vw,4rem) 0 2rem clamp(2rem,8vw,5rem)',
          maxWidth: '50%',
          minHeight: 'inherit',
        }}
      >
        {/* Recruitment Announcement Banner (Holographic Design) */}
        <div 
          className="mb-10 animate-slide-up flex"
          style={{ animationDelay: '50ms', animationFillMode: 'both' }}
        >
          <button
            onClick={() => navigate('/collaborate')}
            className={`group relative flex items-center gap-4 px-5 py-2.5 rounded-full 
              backdrop-blur-3xl border transition-all duration-500 shadow-2xl
              ${isDark ? 'bg-[#0a0a0f]/40 border-white/10 hover:border-indigo-500/40 hover:bg-[#0a0a0f]/60' 
                       : 'bg-white/70 border-black/5 hover:border-indigo-500/30 hover:bg-white/90 shadow-lg'}`}
          >
            {/* Holographic background glow */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            {/* Floating Glass Orbs Group */}
            <div className="flex items-center -space-x-2">
              {[
                { icon: <Users size={11} />, color: 'from-indigo-500 to-blue-500' },
                { icon: <Sparkles size={11} />, color: 'from-blue-400 to-cyan-400' },
                { icon: <Zap size={11} />, color: 'from-fuchsia-500 to-pink-500' },
              ].map(({ icon, color }, i) => (
                <div 
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white
                    bg-gradient-to-br ${color} relative shadow-lg border-2 
                    ${isDark ? 'border-[#0f0e1a]' : 'border-white'}
                    group-hover:-translate-y-1 transition-all duration-300 ease-out`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-[1px]" />
                  <div className="relative z-10 filter drop-shadow-md">{icon}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-0.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
                </span>
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isAr ? 'font-arabic' : 'font-sans'}
                  ${isDark ? 'text-indigo-400/80' : 'text-indigo-600'}`}>
                  {isAr ? 'فرصة انضمام' : 'Recruitment Open'}
                </span>
              </div>
              <span className={`text-[13.5px] font-bold tracking-tight ${isAr ? 'font-arabic' : 'font-sans'}
                ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                {t('hero.recruitmentBanner')}
              </span>
            </div>

            {/* Premium CTA Arrow */}
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300
              ${isDark ? 'bg-white/5 border-white/10 text-white/50 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400' 
                       : 'bg-black/5 border-black/5 text-gray-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400'}`}>
              <ArrowRight size={14} className={`transition-transform duration-300 group-hover:translate-x-0.5 ${isAr ? 'rotate-180 group-hover:-translate-x-0.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* eyebrow */}
        <p className="animate-slide-up" style={{
          fontSize: 12,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-brand)',
          fontWeight: 800,
          fontFamily: 'var(--font-sans)',
          marginBottom: '1.5rem',
          animationDelay: '100ms',
          animationFillMode: 'both'
        }}>
          {t('hero.eyebrow', 'Unlock your potential')}
        </p>

        {/* headline */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          color: isDark ? '#fff' : 'var(--text-primary)',
          fontFamily: 'var(--font-heading)',
          marginBottom: '1.25rem',
          letterSpacing: '-0.03em',
        }}>
          <div className="mb-2">
            <Typewriter text={t('hero.line1', 'Where Knowledge')} delay={200} speed={40} />
          </div>
          <span style={{
            background: 'linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-accent), var(--color-brand-secondary), var(--color-brand-primary))',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
            animation: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1s both, text-shimmer 4s ease-in-out infinite 2s'
          }}>
            {t('hero.line2', 'Meets Innovation')}
          </span>
        </h1>

        {/* subtitle */}
        <p style={{
          fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
          color: isDark ? 'rgba(255,255,255,.7)' : 'var(--text-secondary)',
          lineHeight: 1.6,
          maxWidth: 420,
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          marginBottom: '2.5rem',
          animation: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.2s both'
        }}>
          {t('hero.subtitle', 'Sahla is your gateway to university-grade AI & CS material — notes, quizzes, and past exams.')}
        </p>

        {/* CTAs */}
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', animation: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.6s both' }}
        >
          <button
            onClick={scrollToSubjects}
            className="group relative overflow-hidden"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 32px', borderRadius: 999,
              background: 'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent))',
              color: '#fff', fontSize: 15, fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              border: 'none', cursor: 'pointer',
              boxShadow: '0 10px 30px -5px rgba(108, 99, 255, 0.5)',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 15px 35px -5px rgba(108, 99, 255, 0.6)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(108, 99, 255, 0.5)' }}
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" style={{ pointerEvents: 'none' }} />
            {t('hero.cta', 'Explore Subjects')}
            <ArrowRight size={18} className={`transition-transform duration-300 group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </button>

          <button
            onClick={() => navigate('/about')}
            className="group relative"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px', borderRadius: 999,
              background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, 
              cursor: 'pointer',
              color: isDark ? 'rgba(255,255,255,.9)' : 'var(--text-primary)', 
              fontSize: 15,
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }}
          >
            {t('actions.learnMore', 'Learn More')}
            <div className={`transition-transform duration-300 group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </button>
        </div>
      </div>

      {/* ── Orb canvas ── */}
      <div
        ref={wrapRef}
        style={{
          position: 'absolute',
          inset: 0,
          left: '25%',
          pointerEvents: 'auto'
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ display: 'block', width: '100%', height: '100%' }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

export const HeroSection = memo(HeroSectionInner)