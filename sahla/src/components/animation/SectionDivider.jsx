import React from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export const SectionDivider = ({ className = '' }) => {
  const ref = useScrollReveal({
    from: { scaleX: 0, opacity: 0 },
    to: { scaleX: 1, opacity: 1 },
    dur: 1.2,
    triggerStart: 'top 95%',
  })

  return (
    <div className={`w-full max-w-6xl mx-auto px-4 ${className}`}>
      <div 
        ref={ref}
        className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent origin-center"
      />
    </div>
  )
}
