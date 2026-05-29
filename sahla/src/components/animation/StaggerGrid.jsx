// ============================================
// Sahla — StaggerGrid Component
// Reveals children with staggered animation.
// Wrap each child with data-stagger attribute.
// ============================================

import { useStaggerReveal } from '@/hooks/useStaggerReveal'
import { useTranslation } from 'react-i18next'

export const StaggerGrid = ({
  children,
  className = '',
  staggerAmount,
  triggerStart,
  from,
}) => {
  const { i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  const defaultFrom = isRTL
    ? { x: 40, opacity: 0 }
    : { y: 40, opacity: 0 }

  const ref = useStaggerReveal({
    selector: '[data-stagger]',
    staggerAmount,
    triggerStart,
    from: from || defaultFrom,
  })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
