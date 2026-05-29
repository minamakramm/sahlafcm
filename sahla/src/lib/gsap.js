// ============================================
// Sahla — GSAP Initialization
// Plugin registration, global defaults,
// and reduced-motion support.
// ============================================

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins
gsap.registerPlugin(ScrollTrigger)

// Global GSAP defaults
gsap.defaults({
  ease: 'power4.out',
  duration: 0.5,
})

// ScrollTrigger global defaults
ScrollTrigger.defaults({
  toggleActions: 'play none none none',
})

/**
 * Apply reduced motion mode globally.
 * Called once at app init — if the user has prefers-reduced-motion,
 * we disable Lenis and skip all GSAP transforms.
 */
export const applyReducedMotionMode = () => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    // Make all GSAP animations instant
    gsap.globalTimeline.timeScale(Infinity)
  }
}

export { gsap, ScrollTrigger }
