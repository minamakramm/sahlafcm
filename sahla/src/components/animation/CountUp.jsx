// ============================================
// Sahla — CountUp Component
// Animated number counter on scroll.
// ============================================

import { useCountUp } from '@/hooks/useCountUp'

export const CountUp = ({
  end,
  start = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) => {
  const ref = useCountUp({ end, start, duration, prefix, suffix, decimals })

  return (
    <span ref={ref} className={className}>
      {prefix}{start}{suffix}
    </span>
  )
}
