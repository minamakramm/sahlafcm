// ============================================
// Sahla — useReducedMotion Hook
// Detects OS-level prefers-reduced-motion
// and reacts to live changes.
// ============================================

import { useEffect, useState } from 'react'

export const useReducedMotion = () => {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}
