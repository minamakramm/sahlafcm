// ============================================
// Sahla — TextReveal Component
// Word-by-word animated text reveal.
// ============================================

import { useTextReveal } from '@/hooks/useTextReveal'

export const TextReveal = ({
  as: Tag = 'h2',
  children,
  mode = 'words',
  className = '',
  staggerAmount,
}) => {
  const ref = useTextReveal({ mode, staggerAmount })

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
