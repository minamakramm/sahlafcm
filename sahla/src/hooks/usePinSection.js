// ============================================
// Sahla — usePinSection Hook
// Pins panels for sticky scroll storytelling
// using GSAP ScrollTrigger.
// ============================================

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from '@/lib/gsap'
import { useReducedMotion } from './useReducedMotion'

export const usePinSection = ({
  panelSelector = '[data-panel]',
  scrub = 1,
} = {}) => {
  const containerRef = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(() => {
    if (!containerRef.current || reduced) return

    const panels = containerRef.current.querySelectorAll(panelSelector)
    if (panels.length < 2) return

    const triggers = []

    panels.forEach((panel, i) => {
      if (i === panels.length - 1) return

      const st = ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        end: () => `+=${panel.offsetHeight}`,
        pin: true,
        pinSpacing: false,
        scrub,
      })

      triggers.push(st)
    })

    return () => triggers.forEach((st) => st.kill())
  }, { scope: containerRef })

  return containerRef
}
