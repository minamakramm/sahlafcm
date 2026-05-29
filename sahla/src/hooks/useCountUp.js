// ============================================
// Sahla — useCountUp Hook
// Animated number counter that fires when
// the element scrolls into view.
// ============================================

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from './useReducedMotion'

export const useCountUp = ({
  end,
  start = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
} = {}) => {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(() => {
    if (!ref.current) return

    if (reduced) {
      ref.current.textContent = `${prefix}${end}${suffix}`
      return
    }

    const obj = { value: start }
    gsap.to(obj, {
      value: end,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        ref.current.textContent =
          `${prefix}${obj.value.toFixed(decimals)}${suffix}`
      },
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: ref })

  return ref
}
