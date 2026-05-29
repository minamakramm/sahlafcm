// ============================================
// Sahla — FloatingElement Component
// CSS-only floating animation for decorative
// elements (blobs, shapes, etc.)
// No GSAP — pure CSS for zero overhead.
// ============================================

export const FloatingElement = ({
  children,
  amplitude = 'sm',
  duration = 6,
  className = '',
}) => {
  const yMap = { sm: 8, md: 16, lg: 28 }
  const y = yMap[amplitude] ?? 8

  return (
    <div
      className={`animate-float ${className}`}
      style={{
        '--float-y': `${y}px`,
        '--float-duration': `${duration}s`,
      }}
    >
      {children}
    </div>
  )
}
