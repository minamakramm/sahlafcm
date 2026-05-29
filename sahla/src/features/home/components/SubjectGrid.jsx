import React, { useState, useEffect, useRef, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AlertTriangle, RefreshCcw } from 'lucide-react'
import { getSubjectIndex } from '../utils/staticData'
import { SubjectCard } from './SubjectCard'
import { SubjectCardSkeleton } from '@/components/feedback'
import { StaggerGrid } from '@/components/animation'

/**
 * SubjectGrid — loads subjects with skeleton only during actual data fetch.
 * 
 * Key fixes:
 * - Skeleton shows ONLY during the initial fetch, not during scrolling.
 * - Fixed dimensions on the grid container prevent CLS (layout shift).
 * - Uses a ref to track mount state and avoid React state updates on unmounted component.
 * - Staggered animations use GSAP StaggerGrid for scroll-triggered reveals.
 * - Error state with retry button if data fetch fails.
 */
const SubjectGridInner = ({ departmentSlug }) => {
  const { t, i18n } = useTranslation('subjects')
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'
  const [subjects, setSubjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [comingSoon, setComingSoon] = useState(false)
  const mountedRef = useRef(true)
  const prevSlugRef = useRef(departmentSlug)

  const fetchSubjects = () => {
    // Only show skeletons on initial load or department switch
    const isDeptChange = prevSlugRef.current !== departmentSlug
    if (isDeptChange || subjects.length === 0) {
      setIsLoading(true)
    }
    setError(null)
    prevSlugRef.current = departmentSlug

    getSubjectIndex(departmentSlug)
      .then((index) => {
        if (!mountedRef.current) return
        if (index.comingSoon) {
          setComingSoon(true)
          setSubjects([])
        } else {
          setComingSoon(false)
          setSubjects(index.subjects || [])
        }
      })
      .catch((err) => {
        if (mountedRef.current) {
          console.error('[SubjectGrid] Failed to load subjects:', err)
          setError(err)
          setSubjects([])
        }
      })
      .finally(() => {
        if (mountedRef.current) setIsLoading(false)
      })
  }

  useEffect(() => {
    mountedRef.current = true
    fetchSubjects()
    return () => { mountedRef.current = false }
  }, [departmentSlug])

  if (isLoading) {
    return (
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        style={{ minHeight: '400px' }} /* Reserve space to prevent CLS */
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <SubjectCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative p-10 text-center rounded-[2rem] border bg-white/[0.03] border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.01)] flex flex-col items-center gap-4 group overflow-hidden" style={{ minHeight: '120px' }}>
        {/* Error Glow */}
        <div className="absolute -top-10 -right-10 w-48 h-48 blur-[60px] opacity-[0.1] bg-red-500 pointer-events-none group-hover:opacity-[0.2] transition-opacity duration-500" />
        
        {/* Top Edge Shine */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)] group-hover:scale-110 transition-transform duration-300">
          <AlertTriangle size={28} />
        </div>
        <p className={`relative z-10 text-lg text-white/80 font-bold ${fontFamily}`}>
          Failed to load subjects
        </p>
        <p className={`relative z-10 text-sm text-white/40 max-w-[280px] leading-relaxed ${fontFamily}`}>
          Please check your connection and try again.
        </p>
        <button
          onClick={fetchSubjects}
          className="relative z-10 flex items-center gap-2 px-8 py-3.5 bg-red-500/20 border border-red-500/30 text-red-300 rounded-full font-black text-xs uppercase tracking-widest hover:bg-red-500/30 transition-all active:scale-95 shadow-lg"
        >
          <RefreshCcw size={16} />
          Try Again
        </button>
      </div>
    )
  }

  if (comingSoon) {
    return (
      <div className="relative p-10 text-center rounded-[2rem] border bg-white/[0.03] border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.01)] group overflow-hidden" style={{ minHeight: '120px' }}>
        {/* Accent Glow */}
        <div className="absolute -top-10 -right-10 w-48 h-48 blur-[60px] opacity-[0.08] bg-accent-500 pointer-events-none group-hover:opacity-[0.15] transition-opacity duration-500" />
        
        {/* Top Edge Shine */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <p className={`relative z-10 text-lg text-white/80 font-bold ${fontFamily}`}>
          {t('detail.noLectures', 'No lectures available yet.')}
        </p>
        <p className={`relative z-10 text-sm text-white/40 mt-2 uppercase tracking-widest font-black ${fontFamily}`}>
          {t('status.comingSoon', 'Coming Soon')}
        </p>
      </div>
    )
  }

  if (subjects.length === 0) {
    return (
      <div className="relative p-10 text-center rounded-[2rem] border bg-white/[0.03] border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.01)] group overflow-hidden" style={{ minHeight: '120px' }}>
        {/* Subtle Glow */}
        <div className="absolute -top-10 -right-10 w-48 h-48 blur-[60px] opacity-[0.05] bg-white pointer-events-none group-hover:opacity-[0.1] transition-opacity duration-500" />
        
        {/* Top Edge Shine */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <p className={`relative z-10 text-lg text-white/80 font-bold ${fontFamily}`}>
          {t('detail.noLectures', 'No subjects available yet.')}
        </p>
      </div>
    )
  }

  return (
    <StaggerGrid
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      staggerAmount={0.08}
    >
      {subjects.map((subject) => (
        <div data-stagger key={subject.id}>
          <SubjectCard subject={subject} departmentSlug={departmentSlug} />
        </div>
      ))}
    </StaggerGrid>
  )
}

export const SubjectGrid = memo(SubjectGridInner)
