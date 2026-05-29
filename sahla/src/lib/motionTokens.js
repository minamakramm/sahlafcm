// ============================================
// Sahla — Motion Design Tokens
// Shared constants for duration, easing,
// stagger, trigger zones, and offsets.
// ============================================

export const duration = {
  instant:   0.15,
  fast:      0.3,
  normal:    0.5,
  slow:      0.7,
  cinematic: 0.9,
  hero:      1.2,
}

export const ease = {
  // CSS cubic-bezier (for CSS fallbacks)
  out:     'cubic-bezier(0.16, 1, 0.3, 1)',
  in:      'cubic-bezier(0.7, 0, 0.84, 0)',
  inOut:   'cubic-bezier(0.83, 0, 0.17, 1)',
  elastic: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  // GSAP named equivalents
  gsapOut:   'power4.out',
  gsapIn:    'power4.in',
  gsapInOut: 'power3.inOut',
  gsapBack:  'back.out(1.4)',
}

export const stagger = {
  tight:  0.05,
  normal: 0.08,
  loose:  0.12,
  slow:   0.18,
}

export const trigger = {
  default: 'top 85%',
  early:   'top 90%',
  late:    'top 70%',
  center:  'center center',
  pin:     'top top',
}

export const offset = {
  fadeUp:    { y: 40, opacity: 0 },
  fadeDown:  { y: -40, opacity: 0 },
  fadeLeft:  { x: -40, opacity: 0 },
  fadeRight: { x: 40, opacity: 0 },
  fadeIn:    { opacity: 0 },
  scaleUp:   { scale: 0.92, opacity: 0 },
  scaleDown: { scale: 1.08, opacity: 0 },
}
