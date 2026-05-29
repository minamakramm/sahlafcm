// ============================================
// Sahla — useParallax Hook
// Subtle parallax effect on scroll via GSAP
// ScrollTrigger scrub.
// ============================================

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from './useReducedMotion'

export const useParallax = ({
  speed = 0.3,
  direction = 'up',
} = {}) => {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(() => {
    if (!ref.current || reduced) return

    const yPercent = direction === 'up' ? -speed * 100 : speed * 100

    const tween = gsap.to(ref.current, {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => tween.kill()
  }, { scope: ref })

  return ref
}
