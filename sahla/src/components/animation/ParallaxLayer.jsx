// ============================================
// Sahla — ParallaxLayer Component
// Wraps content with a subtle parallax effect.
// ============================================

import { useParallax } from '@/hooks/useParallax'

export const ParallaxLayer = ({
  children,
  speed = 0.3,
  direction = 'up',
  className = '',
}) => {
  const ref = useParallax({ speed, direction })

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}
