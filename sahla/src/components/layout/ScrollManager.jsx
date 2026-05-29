// ============================================
// Sahla — ScrollManager
// Handles scroll cleanup on route changes:
//   - Scrolls to top
//   - Refreshes GSAP ScrollTrigger state
// Place inside <BrowserRouter>.
// ============================================

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from '@/lib/gsap'
import { getLenis } from '@/lib/lenis'

export const ScrollManager = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top immediately
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }

    // Don't kill triggers here — each component's useGSAP hook
    // handles its own cleanup on unmount. Killing globally
    // destroys freshly-created triggers on the incoming page
    // (useGSAP runs at layout-effect timing, before this useEffect).

    // Refresh after a brief delay to let new DOM settle
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [pathname])

  return null
}
