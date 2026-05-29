// ============================================
// Sahla — useTextReveal Hook
// Word-by-word text reveal animation.
// Falls back to manual splitting (no SplitText
// Club plugin required).
// ============================================

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from './useReducedMotion'
import { duration as durationTokens, ease } from '@/lib/motionTokens'

/**
 * Manually splits text into wrapped word spans.
 * Each word gets an overflow-hidden wrapper so the
 * word can slide up from below.
 */
const splitWords = (el) => {
  const text = el.innerText || ''
  const words = text.split(/\s+/).filter(Boolean)
  el.innerHTML = words
    .map(
      (w) =>
        `<span class="word-wrap" style="display:inline-block;overflow:hidden;vertical-align:bottom"><span class="word" style="display:inline-block">${w}</span></span>`
    )
    .join(' ')
  return el.querySelectorAll('.word')
}

export const useTextReveal = ({
  mode = 'words',
  dur = durationTokens.slow,
  staggerAmount = 0.04,
  triggerStart = 'top 80%',
} = {}) => {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(() => {
    if (!ref.current || reduced) return

    const targets = splitWords(ref.current)

    gsap.set(targets, { y: '110%', opacity: 0 })

    const tween = gsap.to(targets, {
      y: '0%',
      opacity: 1,
      duration: dur,
      ease: ease.gsapOut,
      stagger: staggerAmount,
      scrollTrigger: {
        trigger: ref.current,
        start: triggerStart,
        toggleActions: 'play none none none',
      },
    })

    return () => tween.kill()
  }, { scope: ref })

  return ref
}
