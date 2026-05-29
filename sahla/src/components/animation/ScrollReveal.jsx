// ============================================
// Sahla — ScrollReveal Component
// Wrapper that reveals its children on scroll.
// ============================================

import { useScrollReveal } from '@/hooks/useScrollReveal'

export const ScrollReveal = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration,
  triggerStart,
  once = true,
  className = '',
}) => {
  const variants = {
    fadeUp:    { from: { y: 40, opacity: 0 }, to: { y: 0, opacity: 1 } },
    fadeDown:  { from: { y: -40, opacity: 0 }, to: { y: 0, opacity: 1 } },
    fadeLeft:  { from: { x: -40, opacity: 0 }, to: { x: 0, opacity: 1 } },
    fadeRight: { from: { x: 40, opacity: 0 }, to: { x: 0, opacity: 1 } },
    fadeIn:    { from: { opacity: 0 }, to: { opacity: 1 } },
    scaleUp:   { from: { scale: 0.92, opacity: 0 }, to: { scale: 1, opacity: 1 } },
  }

  const config = variants[variant] ?? variants.fadeUp
  const ref = useScrollReveal({
    ...config,
    delay,
    dur: duration,
    triggerStart,
    once,
  })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
