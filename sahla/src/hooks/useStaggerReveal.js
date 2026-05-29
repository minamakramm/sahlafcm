// ============================================
// Sahla — useStaggerReveal Hook
// Staggers children into view for grids and
// lists, following reading order (LTR/RTL).
// ============================================

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useReducedMotion } from './useReducedMotion'
import {
  duration as durationTokens,
  ease,
  stagger as staggerTokens,
  trigger as triggerDefaults,
} from '@/lib/motionTokens'

export const useStaggerReveal = ({
  selector = '[data-stagger]',
  from = { y: 40, opacity: 0 },
  staggerAmount = staggerTokens.normal,
  dur = durationTokens.normal,
  triggerStart = triggerDefaults.early,
  once = true,
} = {}) => {
  const containerRef = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(() => {
    if (!containerRef.current) return
    const items = containerRef.current.querySelectorAll(selector)
    if (!items.length) return

    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0, x: 0, scale: 1 })
      return
    }

    // Mobile: reduce movement intensity
    const isMobile = window.innerWidth < 768
    const adjustedFrom = isMobile
      ? { ...from, y: from.y ? from.y * 0.5 : undefined, x: from.x ? from.x * 0.5 : undefined }
      : from

    gsap.set(items, adjustedFrom)

    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: dur,
      ease: ease.gsapOut,
      stagger: {
        amount: staggerAmount * items.length,
        from: 'start',
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: triggerStart,
        toggleActions: once
          ? 'play none none none'
          : 'play none none reverse',
      },
    })

    return () => tween.kill()
  }, { scope: containerRef })

  return containerRef
}
