// ============================================
// Sahla — PinSection Component
// Wrapper for sticky scroll storytelling.
// ============================================

import { usePinSection } from '@/hooks/usePinSection'

export const PinSection = ({
  children,
  panelSelector = '[data-panel]',
  scrub = 1,
  className = '',
}) => {
  const ref = usePinSection({ panelSelector, scrub })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
