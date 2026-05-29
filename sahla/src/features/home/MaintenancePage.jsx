import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { supabase } from '@/lib/supabase'
import { motion } from 'framer-motion'
import { Sparkles, Send, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

export default function MaintenancePage() {
  const canvasRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: '', request: '' })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let t = 0
    let animationFrameId
    
    let smokes = []
    for (let i = 0; i < 12; i++) smokes.push({ age: i / 12, x: 0, y: 0 })
    
    let bird = { x: -30, y: 60 }

    const sky = () => {
      let g = ctx.createLinearGradient(0, 0, 0, 340)
      g.addColorStop(0, '#0a0a0f')
      g.addColorStop(0.4, '#12121a')
      g.addColorStop(0.7, '#1a1a28')
      g.addColorStop(1, '#0a0a0f')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, 680, 340)

      ctx.save()
      for (let i = 0; i < 6; i++) {
        let cx = ((t * 10 + i * 150) % 800) - 100
        let cy = 30 + i * 20
        ctx.fillStyle = 'rgba(139,92,246,0.03)'
        ctx.beginPath()
        ctx.ellipse(cx, cy, 50, 15, 0, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()

      ctx.save()
      for (let i = 0; i < 60; i++) {
        let sx = (i * 137.5) % 680
        let sy = (i * 83) % 160
        ctx.globalAlpha = 0.2 + 0.6 * Math.sin(t * 0.8 + i * 2.3)
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(sx, sy, i % 5 === 0 ? 1.3 : 0.6, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    const moon = () => {
      ctx.save()
      ctx.shadowBlur = 50
      ctx.shadowColor = 'rgba(139,92,246,0.4)'
      let mg = ctx.createRadialGradient(580, 45, 0, 580, 45, 22)
      mg.addColorStop(0, '#e0e0ff')
      mg.addColorStop(0.8, '#c4b5fd')
      mg.addColorStop(1, '#8b5cf6')
      ctx.fillStyle = mg
      ctx.beginPath()
      ctx.arc(580, 45, 22, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = 'rgba(64, 64, 64, 0.08)'
      ctx.beginPath(); ctx.arc(575, 40, 4, 0, Math.PI * 2); ctx.fill()
      ctx.beginPath(); ctx.arc(586, 52, 5, 0, Math.PI * 2); ctx.fill()
      ctx.beginPath(); ctx.arc(572, 50, 3, 0, Math.PI * 2); ctx.fill()
      ctx.beginPath(); ctx.arc(588, 38, 3, 0, Math.PI * 2); ctx.fill()
      ctx.restore()
    }

    const ground = () => {
      let g = ctx.createLinearGradient(0, 270, 0, 340)
      g.addColorStop(0, '#1a1a28')
      g.addColorStop(1, '#0a0a0f')
      ctx.fillStyle = g
      ctx.fillRect(0, 270, 680, 70)
      ctx.save()
      ctx.strokeStyle = 'rgba(139,92,246,0.06)'
      ctx.lineWidth = 1
      for (let i = 0; i < 20; i++) {
        ctx.beginPath(); ctx.moveTo(i * 36, 340); ctx.lineTo(340, 270); ctx.stroke()
      }
      for (let i = 0; i < 8; i++) {
        let y = 273 + i * 9
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(680, y); ctx.stroke()
      }
      ctx.restore()
    }

    const scaffold = (x, y, w, h) => {
      ctx.save()
      ctx.strokeStyle = 'rgba(160,160,184,0.3)'
      ctx.lineWidth = 2.5
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + h); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(x + w, y); ctx.lineTo(x + w, y + h); ctx.stroke()
      let boards = Math.floor(h / 30)
      for (let i = 0; i <= boards; i++) {
        let by = y + i * (h / boards)
        ctx.fillStyle = 'rgba(120,75,30,0.7)'
        ctx.fillRect(x - 3, by - 3, w + 6, 5)
        ctx.strokeStyle = 'rgba(80,45,10,0.8)'
        ctx.lineWidth = 0.5
        ctx.strokeRect(x - 3, by - 3, w + 6, 5)
        if (i < boards) {
          ctx.strokeStyle = 'rgba(160,160,184,0.15)'
          ctx.lineWidth = 1
          ctx.beginPath(); ctx.moveTo(x, by); ctx.lineTo(x + w, by + h / boards); ctx.stroke()
        }
      }
      ctx.restore()
    }

    const brickWall = (x, y, w, h, fp) => {
      let bh = 11, bw = 28, gap = 2, rows = Math.floor(h / (bh + gap)), vr = Math.floor(rows * fp)
      for (let r = 0; r < vr; r++) {
        let ry = y + h - (r + 1) * (bh + gap), off = (r % 2 === 0) ? 0 : bw / 2 + gap / 2, cols = Math.ceil((w + bw) / bw)
        for (let c = 0; c < cols; c++) {
          let bx = x + off + c * (bw + gap) - gap
          let cx2 = Math.max(bx, x), cx3 = Math.min(bx + bw, x + w), cw = cx3 - cx2
          if (cw <= 0) continue
          let sh = 0.85 + 0.15 * Math.sin(r * 7 + c * 13)
          let g2 = ctx.createLinearGradient(cx2, ry, cx2, ry + bh)
          g2.addColorStop(0, `rgba(30,28,52,${sh})`)
          g2.addColorStop(1, `rgba(18,18,30,${sh})`)
          ctx.fillStyle = g2
          ctx.fillRect(cx2, ry, cw, bh)
          ctx.fillStyle = 'rgba(255,255,255,0.04)'
          ctx.fillRect(cx2, ry, cw, 2)
          ctx.fillStyle = 'rgba(0,0,0,0.3)'
          ctx.fillRect(cx2, ry + bh - 2, cw, 2)
          ctx.strokeStyle = 'rgba(139,92,246,0.15)'
          ctx.lineWidth = 0.5
          ctx.strokeRect(cx2, ry, cw, bh)
        }
      }
    }

    const roof = (x, y, w, h, a) => {
      ctx.save()
      ctx.globalAlpha = a
      let g = ctx.createLinearGradient(x + w / 2, y, x + w / 2, y + h)
      g.addColorStop(0, '#8b5cf6')
      g.addColorStop(1, '#6d28d9')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.moveTo(x - 15, y + h)
      ctx.lineTo(x + w / 2, y)
      ctx.lineTo(x + w + 15, y + h)
      ctx.closePath()
      ctx.fill()
      ctx.strokeStyle = 'rgba(0,0,0,0.2)'
      ctx.lineWidth = 1
      for (let i = 0; i < 5; i++) {
        let p = i / 5
        ctx.beginPath()
        ctx.moveTo(x - 15 + (x + w / 2 - (x - 15)) * p, y + h * p)
        ctx.lineTo((x + w + 15) - (x + w + 15 - (x + w / 2)) * p, y + h * p)
        ctx.stroke()
      }
      ctx.fillStyle = 'rgba(255,255,255,0.08)'
      ctx.beginPath()
      ctx.moveTo(x - 15, y + h)
      ctx.lineTo(x + w / 2, y)
      ctx.lineTo(x + w / 2 + 5, y + 5)
      ctx.lineTo(x, y + h)
      ctx.closePath()
      ctx.fill()
      ctx.fillStyle = '#4c1d95'
      ctx.fillRect(x - 18, y + h - 3, w + 36, 6)
      ctx.restore()
    }

    const chimney = (x, y, w, h) => {
      let g = ctx.createLinearGradient(x, y, x + w, y)
      g.addColorStop(0, '#1e1c34')
      g.addColorStop(1, '#15132a')
      ctx.fillStyle = g
      ctx.fillRect(x, y, w, h)
      ctx.strokeStyle = 'rgba(139,92,246,0.25)'
      ctx.lineWidth = 1
      ctx.strokeRect(x, y, w, h)
      ctx.fillStyle = '#0c0b1a'; ctx.fillRect(x - 3, y, w + 6, 8)
    }

    const updateSmokes = (cx, cy) => {
      smokes.forEach(s => {
        s.age += 0.004; if (s.age > 1) { s.age = 0; }
        s.x = cx + (Math.random() - 0.5) * 2; s.y = cy - s.age * 30
      })
    }

    const smokeP = (cx, cy, age) => {
      ctx.save()
      ctx.globalAlpha = (1 - age) * 0.3
      ctx.fillStyle = '#a0a0b8'
      ctx.beginPath(); ctx.arc(cx, cy, 3 + age * 12, 0, Math.PI * 2); ctx.fill()
      ctx.restore()
    }

    const door = (x, y, w, h) => {
      ctx.fillStyle = '#6d28d9'; ctx.fillRect(x, y, w, h)
      ctx.fillStyle = '#5b21b6'; ctx.beginPath(); ctx.arc(x + w / 2, y, w / 2, Math.PI, 0); ctx.fill()
      ctx.fillStyle = 'rgba(250,204,21,0.8)'; ctx.beginPath(); ctx.arc(x + w - 6, y + h * 0.55, 2.5, 0, Math.PI * 2); ctx.fill()
      ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.lineWidth = 0.5; ctx.beginPath(); ctx.moveTo(x + w / 2, y); ctx.lineTo(x + w / 2, y + h); ctx.stroke()
    }

    const win = (x, y, w, h) => {
      ctx.fillStyle = '#1e1b4b'; ctx.fillRect(x - 2, y - 2, w + 4, h + 4)
      let g = ctx.createLinearGradient(x, y, x + w, y + h)
      g.addColorStop(0, 'rgba(139,92,246,0.12)'); g.addColorStop(1, 'rgba(59,130,246,0.08)')
      ctx.fillStyle = g; ctx.fillRect(x, y, w, h)
      ctx.strokeStyle = 'rgba(139,92,246,0.4)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x + w / 2, y); ctx.lineTo(x + w / 2, y + h); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(x, y + h / 2); ctx.lineTo(x + w, y + h / 2); ctx.stroke()
      ctx.fillStyle = 'rgba(255,255,255,0.1)'; ctx.fillRect(x + 1, y + 1, w / 2 - 2, h / 2 - 2)
      ctx.fillStyle = `rgba(139,92,246,${(0.3 + 0.2 * Math.sin(t * 0.5)) * 0.15})`; ctx.fillRect(x, y, w, h)
    }

    const crane = (sw) => {
      ctx.save()
      let bx = 80, by = 270, tH = 200, g = ctx.createLinearGradient(bx - 8, 0, bx + 8, 0)
      g.addColorStop(0, '#2a2a3d'); g.addColorStop(1, '#1a1a28')
      ctx.fillStyle = g; ctx.fillRect(bx - 8, by - tH, 16, tH)
      ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 1
      for (let i = 0; i < 8; i++) {
        let y1 = by - tH + i * 25, y2 = y1 + 25; ctx.beginPath(); ctx.moveTo(bx - 8, y1); ctx.lineTo(bx + 8, y2); ctx.stroke(); ctx.beginPath(); ctx.moveTo(bx + 8, y1); ctx.lineTo(bx - 8, y2); ctx.stroke()
      }
      ctx.translate(bx, by - tH); ctx.rotate(sw * 0.12); ctx.fillStyle = '#3d3d55'; ctx.fillRect(-55, -4, 55, 8); ctx.fillStyle = '#2a2a3d'; ctx.fillRect(-68, -10, 20, 16)
      let ag = ctx.createLinearGradient(0, -4, 0, 4); ag.addColorStop(0, '#4d4d66'); ag.addColorStop(1, '#3d3d55'); ctx.fillStyle = ag; ctx.fillRect(0, -5, 130, 9)
      ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 0.8
      for (let i = 0; i < 5; i++) {
        ctx.beginPath(); ctx.moveTo(i * 25, 4); ctx.lineTo(i * 25 + 12, -4); ctx.stroke()
      }
      let blink = Math.sin(t * 3) > 0; ctx.fillStyle = blink ? '#8b5cf6' : '#4c1d95'; if (blink) { ctx.shadowBlur = 8; ctx.shadowColor = '#8b5cf6' }
      ctx.beginPath(); ctx.arc(128, -8, 4, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0; ctx.restore()
      let aTx = bx + 128 * Math.cos(sw * 0.12), aTy = by - tH + 128 * Math.sin(sw * 0.12), ld = 60 + 10 * Math.sin(t * 0.3)
      ctx.save(); ctx.strokeStyle = 'rgba(160,160,184,0.4)'; ctx.lineWidth = 1.2; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(aTx, aTy); ctx.lineTo(aTx, aTy + ld); ctx.stroke(); ctx.setLineDash([])
      let lx = aTx - 16, ly = aTy + ld, lg = ctx.createLinearGradient(lx, ly, lx + 32, ly + 20); lg.addColorStop(0, '#4c1d95'); lg.addColorStop(1, '#6d28d9')
      ctx.fillStyle = lg; ctx.fillRect(lx, ly, 32, 20); ctx.strokeStyle = 'rgba(139,92,246,0.4)'; ctx.lineWidth = 1; ctx.strokeRect(lx, ly, 32, 20)
      ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 0.5; ctx.beginPath(); ctx.moveTo(lx, ly + 7); ctx.lineTo(lx + 32, ly + 7); ctx.stroke(); ctx.beginPath(); ctx.moveTo(lx, ly + 14); ctx.lineTo(lx + 32, ly + 14); ctx.stroke(); ctx.beginPath(); ctx.moveTo(lx + 10, ly); ctx.lineTo(lx + 10, ly + 20); ctx.stroke(); ctx.beginPath(); ctx.moveTo(lx + 22, ly); ctx.lineTo(lx + 22, ly + 20); ctx.stroke()
      ctx.fillStyle = '#a0a0b8'; ctx.beginPath(); ctx.arc(aTx, aTy + ld - 2, 3, 0, Math.PI * 2); ctx.fill(); ctx.restore()
    }

    const worker = (x, y, hc, bc) => {
      ctx.save(); ctx.translate(x, y); ctx.fillStyle = 'rgba(0,0,0,0.2)'; ctx.beginPath(); ctx.ellipse(0, 36, 12, 4, 0, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = '#1e1c34'; ctx.fillRect(-5, 20, 4, 16); ctx.fillRect(2, 20, 4, 16)
      ctx.fillStyle = '#0a0a0f'; ctx.fillRect(-6, 33, 6, 4); ctx.fillRect(2, 33, 6, 4)
      ctx.fillStyle = bc; ctx.fillRect(-6, 0, 12, 20)
      ctx.fillStyle = '#fbbf24'; ctx.globalAlpha = 0.9; ctx.fillRect(-6, 2, 12, 16); ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.fillRect(-6, 6, 12, 2); ctx.fillRect(-6, 12, 12, 2); ctx.globalAlpha = 1
      ctx.fillStyle = '#fde68a'; ctx.beginPath(); ctx.arc(0, -6, 7, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = '#1a1a28'; ctx.fillRect(-3, -8, 2, 2); ctx.fillRect(1, -8, 2, 2)
      ctx.fillStyle = hc; ctx.beginPath(); ctx.ellipse(0, -13, 10, 5, 0, 0, Math.PI); ctx.fill(); ctx.fillRect(-10, -14, 20, 4); ctx.restore()
    }

    const workerHammer = (x, y) => {
      worker(x, y, '#8b5cf6', '#f97316'); ctx.save(); ctx.translate(x, y); let ang = -0.8 + 0.5 * Math.sin(t * 6); ctx.translate(-12, 4); ctx.rotate(ang); ctx.fillStyle = '#f97316'; ctx.fillRect(-10, 0, 12, 4); ctx.fillStyle = '#a0a0b8'; ctx.fillRect(-14, -4, 8, 10); if (Math.sin(t * 6) > 0.7) { ctx.fillStyle = '#fbbf24'; for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(-18 + Math.cos(i * 2.1) * 5, 3 + Math.sin(i * 2.1) * 5, 1, 0, Math.PI * 2); ctx.fill(); } } ctx.restore()
    }

    const workerCarry = (x, y) => {
      worker(x, y, '#f97316', '#8b5cf6'); ctx.save(); ctx.translate(x, y); ctx.fillStyle = 'rgba(120,75,30,0.9)'; ctx.fillRect(-5, -5, 45, 5); ctx.fillStyle = 'rgba(139,92,246,0.6)'; ctx.beginPath(); ctx.ellipse(10, -14, 1.5, 2.5, 0.2, 0, Math.PI * 2); ctx.fill(); ctx.restore()
    }

    const cat = (x, y) => {
      ctx.save(); ctx.translate(x, y); ctx.fillStyle = 'rgba(0,0,0,0.2)'; ctx.beginPath(); ctx.ellipse(0, 18, 10, 3, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.ellipse(0, 8, 10, 8, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(0, -4, 8, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.moveTo(-6, -9); ctx.lineTo(-10, -17); ctx.lineTo(-2, -12); ctx.closePath(); ctx.fill(); ctx.beginPath(); ctx.moveTo(6, -9); ctx.lineTo(10, -17); ctx.lineTo(2, -12); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#fca5a5'; ctx.beginPath(); ctx.moveTo(-6, -10); ctx.lineTo(-9, -15); ctx.lineTo(-3, -12); ctx.closePath(); ctx.fill(); ctx.beginPath(); ctx.moveTo(6, -10); ctx.lineTo(9, -15); ctx.lineTo(3, -12); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#1a1a28'; ctx.beginPath(); ctx.ellipse(-3, -5, 1.5, 2, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(3, -5, 1.5, 2, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.beginPath(); ctx.arc(-2.5, -5.5, 0.5, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(3.5, -5.5, 0.5, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = '#fca5a5'; ctx.beginPath(); ctx.moveTo(0, -2.5); ctx.lineTo(-1.5, -1); ctx.lineTo(1.5, -1); ctx.closePath(); ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(-1, 0); ctx.lineTo(-12, -1); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-1, 1); ctx.lineTo(-12, 3); ctx.stroke(); ctx.beginPath(); ctx.moveTo(1, 0); ctx.lineTo(12, -1); ctx.stroke(); ctx.beginPath(); ctx.moveTo(1, 1); ctx.lineTo(12, 3); ctx.stroke(); let ta = 0.4 * Math.sin(t * 2); ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-8, 14); ctx.quadraticCurveTo(-20 + ta * 15, 20, -16 + ta * 10, 8); ctx.stroke(); ctx.restore()
    }

    const thought = (x, y) => {
      let fl = Math.sin(t * 0.8) * 4; ctx.save(); ctx.translate(x, y + fl); ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.beginPath(); ctx.arc(0, 0, 2, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(-3, -7, 3, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(-5, -16, 5, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.rect(-20, -38, 40, 22); ctx.fill(); ctx.stroke(); ctx.strokeStyle = 'rgba(139,92,246,0.8)'; ctx.lineWidth = 1.5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-8, -22); ctx.lineTo(-8, -14); ctx.lineTo(8, -14); ctx.lineTo(8, -22); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-10, -22); ctx.lineTo(0, -30); ctx.lineTo(10, -22); ctx.stroke(); ctx.fillStyle = 'rgba(139,92,246,0.25)'; ctx.fillRect(-8, -22, 16, 8); ctx.restore()
    }

    const mixer = (x, y) => {
      ctx.save(); ctx.translate(x, y); ctx.fillStyle = '#1a1a28'; ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(-15, 18, 7, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.arc(15, 18, 7, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.fillStyle = '#2a2a3d'; ctx.beginPath(); ctx.arc(-15, 18, 3, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.arc(15, 18, 3, 0, Math.PI * 2); ctx.fill(); let fg = ctx.createLinearGradient(-20, 0, 20, 0); fg.addColorStop(0, '#2a2a3d'); fg.addColorStop(1, '#3d3d55'); ctx.fillStyle = fg; ctx.fillRect(-20, -2, 40, 20); ctx.save(); ctx.translate(0, -8); ctx.rotate(t * 1.5); let dg = ctx.createLinearGradient(-18, -14, 18, 14); dg.addColorStop(0, '#3d3d55'); dg.addColorStop(0.5, '#4d4d66'); dg.addColorStop(1, '#2a2a3d'); ctx.fillStyle = dg; ctx.beginPath(); ctx.ellipse(0, 0, 18, 14, 0, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.lineWidth = 1; ctx.stroke(); for (let i = 0; i < 4; i++) { ctx.save(); ctx.rotate(i * Math.PI / 2); ctx.fillStyle = 'rgba(80,80,100,0.8)'; ctx.fillRect(-2, -14, 4, 6); ctx.restore() } ctx.fillStyle = '#1a1a28'; ctx.beginPath(); ctx.ellipse(16, 0, 6, 4, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore(); ctx.fillStyle = 'rgba(120,120,150,0.25)'; ctx.beginPath(); ctx.ellipse(0, 14, 12, 4, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore()
    }

    const drawBird = () => {
      bird.x += 0.6; bird.y += Math.sin(bird.x * 0.05) * 0.3; if (bird.x > 720) bird.x = -30; let fl = Math.sin(bird.x * 0.2) * 0.4; ctx.save(); ctx.translate(bird.x, bird.y); ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = 1.5; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(-8, 0); ctx.quadraticCurveTo(-4, fl * 8 - 3, 0, 0); ctx.stroke(); ctx.beginPath(); ctx.moveTo(8, 0); ctx.quadraticCurveTo(4, fl * 8 - 3, 0, 0); ctx.stroke(); ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.beginPath(); ctx.arc(0, 0, 1.5, 0, Math.PI * 2); ctx.fill(); ctx.restore()
    }

    const blueprint = (x, y) => {
      ctx.save(); ctx.translate(x, y); ctx.rotate(-0.15); ctx.fillStyle = 'rgba(139,92,246,0.08)'; ctx.strokeStyle = 'rgba(139,92,246,0.35)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.rect(-15, -10, 40, 28); ctx.fill(); ctx.stroke(); ctx.strokeStyle = 'rgba(139,92,246,0.45)'; ctx.lineWidth = 0.7; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.moveTo(-11, -5 + i * 6); ctx.lineTo(20, -5 + i * 6); ctx.stroke() } ctx.beginPath(); ctx.moveTo(-5, -10); ctx.lineTo(-5, 18); ctx.stroke(); ctx.strokeStyle = 'rgba(139,92,246,0.65)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, 8); ctx.lineTo(0, 2); ctx.lineTo(8, 2); ctx.lineTo(8, 8); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-1, 2); ctx.lineTo(4, -2); ctx.lineTo(9, 2); ctx.stroke(); ctx.restore()
    }

    const paintBucket = (x, y) => {
      ctx.save(); ctx.translate(x, y); ctx.fillStyle = 'rgba(139,92,246,0.12)'; ctx.beginPath(); ctx.ellipse(-8, 8, 18, 5, Math.PI / 8, 0, Math.PI * 2); ctx.fill(); ctx.rotate(0.4); ctx.fillStyle = 'rgba(139,92,246,0.25)'; ctx.strokeStyle = 'rgba(139,92,246,0.5)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.rect(-8, -12, 16, 18); ctx.fill(); ctx.stroke(); ctx.fillStyle = 'rgba(139,92,246,0.4)'; ctx.beginPath(); ctx.ellipse(0, -12, 8, 3, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, 680, 340)
      t += 0.016
      let sw = Math.sin(t * 0.5), bp = 0.5 + 0.5 * Math.sin(t * 0.15)
      sky(); moon(); ground()
      blueprint(180, 262); paintBucket(165, 265); scaffold(130, 150, 30, 120)
      let bx = 195, by = 130, bw = 210, bh = 140
      ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(bx + 6, by + 6, bw, bh)
      brickWall(bx, by, bw, bh, bp); door(bx + bw / 2 - 18, by + bh - 50, 36, 50)
      if (bp > 0.4) { win(bx + 15, by + bh - 100, 44, 36); win(bx + bw - 59, by + bh - 100, 44, 36) }
      scaffold(bx + bw, by + 40, 30, 270 - by - 40)
      let ra = Math.max(0, Math.min(1, (bp - 0.55) * 6))
      if (ra > 0) { roof(bx, by, bw, 50, ra); chimney(bx + bw - 50, by - 40, 20, 45) }
      let chX = bx + bw - 40, chY = by - 42; updateSmokes(chX, chY); if (ra > 0.5) smokes.forEach(s => smokeP(s.x, s.y, s.age))
      crane(sw)
      if (bp > 0.3) { ctx.fillStyle = 'rgba(10,10,15,0.85)'; ctx.strokeStyle = 'rgba(139,92,246,0.45)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.rect(bx + 30, by + bh / 2 - 8, bw - 60, 18); ctx.fill(); ctx.stroke(); ctx.fillStyle = 'rgba(139,92,246,0.85)'; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center'; ctx.fillText('WORK IN PROGRESS', bx + bw / 2, by + bh / 2 + 4) }
      ctx.save(); ctx.setLineDash([14, 8]); ctx.strokeStyle = 'rgba(245,158,11,0.5)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(bx - 20, by + bh + 2); ctx.lineTo(bx + bw + 20, by + bh + 2); ctx.stroke(); ctx.setLineDash([]); ctx.restore()
      mixer(490, 240); workerHammer(138, 152); workerCarry(350 + Math.sin(t * 0.3) * 55, 240); worker(520, 235, '#10b981', '#3b82f6'); cat(555, 248); thought(545, 224); drawBird()
      if (ra > 0.5) { let sp = 0.6 + 0.4 * Math.sin(t * 2); ctx.save(); ctx.globalAlpha = sp; ctx.fillStyle = '#a78bfa'; for (let i = 0; i < 5; i++) { let ang = t * 0.5 + i * (Math.PI * 2 / 5), r = 18 + 4 * Math.sin(t * 2 + i); ctx.beginPath(); ctx.arc(bx + bw / 2 + Math.cos(ang) * r, by + Math.sin(ang) * r, 1.5, 0, Math.PI * 2); ctx.fill() } ctx.restore() }
      
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.request) return
    setIsSubmitting(true)
    try {
      await supabase.from('feature_requests').insert({
        title: formData.request.slice(0, 100),
        description: formData.request,
        user_id: null,
        status: 'pending'
      })
      toast.success('Thank you! Your request has been saved.')
      setFormData({ name: '', request: '' })
    } catch (err) {
      toast.error('Oops! Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Maintenance — Sahla</title>
        <meta name="description" content="Sahla is upgrading. Big features incoming." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col items-center justify-center relative px-4 py-10 overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
        {/* Background Orbs */}
        <div className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 orb-drift-a" style={{ background: 'var(--accent-violet)', filter: 'blur(120px)', opacity: 0.08, top: '-10%', left: '-10%' }} />
        <div className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 orb-drift-b" style={{ background: 'var(--accent-blue)', filter: 'blur(120px)', opacity: 0.06, bottom: '-10%', right: '-10%' }} />
        <div className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-0 orb-drift-c" style={{ background: 'var(--accent-emerald)', filter: 'blur(100px)', opacity: 0.04, top: '40%', left: '60%' }} />

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-tier-3 glass-highlight max-w-[720px] w-full relative z-10 overflow-hidden"
        >
          {/* Canvas Scene */}
          <div className="w-full overflow-hidden rounded-t-[27px]" style={{ lineHeight: 0 }}>
            <canvas ref={canvasRef} width="680" height="340" className="w-full h-auto" />
          </div>

          {/* Content */}
          <div className="px-6 sm:px-10 pb-12 pt-8 text-center">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl sm:text-4xl font-black tracking-tighter mb-4"
              style={{ fontFamily: "'Chubbo', sans-serif", background: 'linear-gradient(135deg, #fff 30%, #a78bfa 70%, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              New Version Loading... 🚀
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[0.95rem] sm:text-base leading-relaxed mb-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              We're upgrading everything — faster, cleaner, and smarter.<br />
              Big features. Better experience. Same Sahla simplicity.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm sm:text-base font-bold mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              Stay tuned… this one's worth the wait.<br />
              <span style={{ color: 'var(--accent-violet)' }}>✨ Sahla vNext is almost here</span>
            </motion.p>

            {/* Progress Bar */}
            <div className="w-full h-2.5 rounded-full overflow-hidden mb-8 border border-white/5" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #10b981)',
                  backgroundSize: '200% 100%',
                  animation: 'maintenance-progress 6s ease-in-out infinite alternate, maintenance-shimmer 3s linear infinite',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
                }}
              />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 justify-center mb-8">
              {['Sahla magic loading ✨', 'Exorcising MCQ demons 👹', 'Cat reviewing GPA 🐱'].map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="glass-tier-1 inline-flex items-center gap-2 px-4 py-2 text-[0.78rem] font-medium"
                  style={{ color: 'var(--text-muted)', borderRadius: '100px' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ animation: 'maintenance-dot 1.5s ease-in-out infinite' }} />
                  {text}
                </motion.div>
              ))}
            </div>

            {/* Divider + Feature Request */}
            <div className="pt-8 border-t border-white/[0.06]">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Sparkles size={18} className="text-accent-500" />
                <h3 className="text-lg sm:text-xl font-black tracking-tight" style={{ fontFamily: "'Chubbo', sans-serif", color: 'var(--text-primary)' }}>
                  What features do you need?
                </h3>
              </div>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                Tell us what you'd like to see in the new version.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
                <div className="text-left">
                  <label className="block text-[0.68rem] font-black uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                    Name (Optional)
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3.5 rounded-2xl text-sm font-medium outline-none transition-all duration-300 focus:ring-2 focus:ring-accent-500/20"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'var(--text-primary)',
                      fontFamily: "'Supreme', sans-serif"
                    }}
                    placeholder="Your name (or leave blank to be anonymous)"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div className="text-left">
                  <label className="block text-[0.68rem] font-black uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>
                    Feature Request *
                  </label>
                  <textarea 
                    required
                    className="w-full px-4 py-3.5 rounded-2xl text-sm font-medium outline-none transition-all duration-300 resize-none focus:ring-2 focus:ring-accent-500/20"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'var(--text-primary)',
                      fontFamily: "'Supreme', sans-serif"
                    }}
                    placeholder="Ex: AI-powered summaries, more subjects..."
                    rows={3}
                    value={formData.request}
                    onChange={e => setFormData({ ...formData, request: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="accent-button flex items-center justify-center gap-3 w-full text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ height: 52, borderRadius: 18 }}
                >
                  {isSubmitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Saving...</>
                  ) : (
                    <><Send size={18} /> Submit Request</>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Footer Logo */}
            <div className="mt-10 flex items-center justify-center gap-2 opacity-30">
              <img src="/assets/images/favicon.svg" alt="Sahla" className="w-5 h-5" />
              <span className="font-black text-sm" style={{ fontFamily: "'Chubbo', sans-serif", color: 'var(--text-primary)' }}>Sahla</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes maintenance-progress {
          from { width: 20% }
          to { width: 85% }
        }
        @keyframes maintenance-shimmer {
          0% { background-position: 200% 0 }
          100% { background-position: -200% 0 }
        }
        @keyframes maintenance-dot {
          0%, 100% { transform: scale(1); opacity: 1 }
          50% { transform: scale(1.8); opacity: 0.4 }
        }
      `}</style>
    </>
  )
}
