import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export const AnimatedSectionHeader = ({ 
  badge, 
  title, 
  subtitle, 
  className = '', 
  align = 'center' 
}) => {
  const containerRef = useRef(null)
  const reduced = useReducedMotion()

  const alignmentClasses = {
    center: 'items-center text-center',
    left: 'items-start text-left',
    right: 'items-end text-right'
  }

  useGSAP(() => {
    if (!containerRef.current) return

    if (reduced) {
      gsap.set(containerRef.current.querySelectorAll('.anim-target'), {
        opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', rotateX: 0
      })
      gsap.set(containerRef.current.querySelectorAll('.anim-line'), { scaleX: 1 })
      return
    }

    const badgeEl = containerRef.current.querySelector('.anim-badge')
    const lines = containerRef.current.querySelectorAll('.anim-line')
    const titleEl = containerRef.current.querySelector('.anim-title')
    const subtitleEl = containerRef.current.querySelector('.anim-subtitle')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      defaults: { ease: 'power3.out' }
    })

    if (badgeEl) {
      gsap.set(badgeEl, { opacity: 0, y: 20 })
      tl.to(badgeEl, { opacity: 1, y: 0, duration: 0.6 })
    }

    if (lines.length > 0) {
      gsap.set(lines, { scaleX: 0, transformOrigin: align === 'center' ? 'center' : align === 'left' ? 'left' : 'right' })
      tl.to(lines, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, '<0.2')
    }

    if (titleEl) {
      gsap.set(titleEl, { opacity: 0, y: 40, rotateX: -20, transformPerspective: 400, filter: 'blur(8px)' })
      tl.to(titleEl, { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)', duration: 1 }, '<0.1')
    }

    if (subtitleEl) {
      gsap.set(subtitleEl, { opacity: 0, y: 20, filter: 'blur(5px)' })
      tl.to(subtitleEl, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }, '<0.3')
    }

    return () => tl.kill()
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={`flex flex-col ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <div className="flex items-center justify-center gap-4 mb-4 anim-badge anim-target">
          {align === 'center' && <div className="w-12 h-px bg-accent-500/50 anim-line" />}
          <span className="text-xs font-bold text-[var(--text-accent)] uppercase tracking-widest leading-none translate-y-[1px]">
            {badge}
          </span>
          {(align === 'center' || align === 'left') && <div className="w-12 h-px bg-accent-500/50 anim-line" />}
        </div>
      )}
      
      {title && (
        <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] tracking-tighter mb-4 anim-title anim-target">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed anim-subtitle anim-target">
          {subtitle}
        </p>
      )}
    </div>
  )
}
