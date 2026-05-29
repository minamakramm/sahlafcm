// ============================================
// Sahla — Lenis Smooth Scroll
// Buttery smooth scrolling that integrates
// natively with GSAP ScrollTrigger.
// ============================================

import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'

let lenis = null
let tickerFn = null

/**
 * Initialize Lenis smooth scroll and connect it to GSAP's ticker.
 * Returns the Lenis instance.
 */
export const initLenis = () => {
  // Skip on reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  })

  // Connect Lenis scroll events to ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)

  // Drive Lenis via GSAP ticker for perfect frame sync
  tickerFn = (time) => {
    if (lenis) lenis.raf(time * 1000)
  }
  
  gsap.ticker.add(tickerFn)
  gsap.ticker.lagSmoothing(0)

  return lenis
}

/**
 * Get the active Lenis instance.
 */
export const getLenis = () => lenis

/**
 * Destroy the Lenis instance and clean up.
 */
export const destroyLenis = () => {
  if (tickerFn) {
    gsap.ticker.remove(tickerFn)
    tickerFn = null
  }
  
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
}
