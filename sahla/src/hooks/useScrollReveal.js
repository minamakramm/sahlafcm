// ============================================
// Sahla — useScrollReveal Hook
// The workhorse: fades/slides elements in
// when they enter the viewport via GSAP
// ScrollTrigger.
// ============================================

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useReducedMotion } from './useReducedMotion'
import { duration as durationTokens, ease, trigger as triggerDefaults } from '@/lib/motionTokens'

export const useScrollReveal = ({
  from = { y: 40, opacity: 0 },
  to = { y: 0, opacity: 1 },
  dur = durationTokens.normal,
  delay = 0,
  triggerStart = triggerDefaults.default,
  scrub = false,
  once = true,
  markers = false,
} = {}) => {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(() => {
    if (!ref.current) return

    if (reduced) {
      // Skip animation — just show the element
      gsap.set(ref.current, { opacity: 1, x: 0, y: 0, scale: 1 })
      return
    }

    // Set initial state immediately (prevents FOUC)
    gsap.set(ref.current, from)

    // Mobile: reduce movement intensity
    const isMobile = window.innerWidth < 768
    const adjustedFrom = isMobile
      ? { ...from, y: from.y ? from.y * 0.5 : undefined, x: from.x ? from.x * 0.5 : undefined }
      : from

    gsap.set(ref.current, adjustedFrom)

    const tween = gsap.to(ref.current, {
      ...to,
      duration: dur,
      delay,
      ease: ease.gsapOut,
      scrollTrigger: {
        trigger: ref.current,
        start: triggerStart,
        toggleActions: once
          ? 'play none none none'
          : 'play none none reverse',
        scrub: scrub ? 1 : false,
        markers,
      },
    })

    return () => {
      tween.kill()
    }
  }, { scope: ref })

  return ref
}
