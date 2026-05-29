import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from './useReducedMotion'

export const useHeroEntrance = () => {
  const containerRef = useRef(null)
  const reduced = useReducedMotion()

  useGSAP(() => {
    if (!containerRef.current) return
    
    if (reduced) {
      gsap.set(containerRef.current.querySelectorAll('.hero-anim'), { 
        opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' 
      })
      return
    }

    const elements = containerRef.current.querySelectorAll('.hero-anim')
    const badge = containerRef.current.querySelector('.hero-badge')
    const titleLines = containerRef.current.querySelectorAll('.hero-title-line')
    const subtitle = containerRef.current.querySelector('.hero-subtitle')
    const ctas = containerRef.current.querySelectorAll('.hero-cta')
    const search = containerRef.current.querySelector('.hero-search')
    const stats = containerRef.current.querySelectorAll('.hero-stat')

    // Safely collect all generic targets to avoid null errors in GSAP
    const genericTargets = [
      badge,
      subtitle,
      ...Array.from(ctas),
      search,
      ...Array.from(stats)
    ].filter(Boolean)

    // Initial state
    if (genericTargets.length > 0) {
      gsap.set(genericTargets, { 
        opacity: 0, 
        y: 30,
        filter: 'blur(10px)'
      })
    }

    if (titleLines.length > 0) {
      gsap.set(titleLines, { 
        opacity: 0, 
        y: 60,
        rotateX: -20,
        transformPerspective: 400,
        filter: 'blur(10px)'
      })
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    })

    if (badge) {
      tl.to(badge, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }, 0.1)
    }

    if (titleLines.length > 0) {
      tl.to(titleLines, { 
        opacity: 1, 
        y: 0, 
        rotateX: 0, 
        filter: 'blur(0px)', 
        duration: 1.2, 
        stagger: 0.15 
      }, 0.2)
    }

    if (subtitle) {
      tl.to(subtitle, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }, 0.6)
    }

    if (ctas.length > 0) {
      tl.to(ctas, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.1 }, 0.8)
    }

    if (search) {
      tl.to(search, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }, 1)
    }

    if (stats.length > 0) {
      tl.to(stats, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.05 }, 1.2)
    }

    return () => tl.kill()
  }, { scope: containerRef })

  return containerRef
}
