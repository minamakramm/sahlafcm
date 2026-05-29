import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const LectureNavigation = ({ subjectSlug, prev, next }) => {
  const { t, i18n } = useTranslation('lectures')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  if (!prev && !next) return null

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex items-center justify-between gap-3 sm:gap-5 mt-2 mb-2 w-full"
      aria-label="Lecture navigation"
      id="lecture-navigation"
    >
      {prev ? (
        <Link
          to={`/subjects/${subjectSlug}/lecture/${prev.number}`}
          className={`glass-tier-1 hover:glass-tier-2 flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 rounded-[16px] sm:rounded-2xl transition-all duration-300 group flex-1 max-w-[48%] relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg ${fontFamily}`}
          id="lecture-nav-prev"
        >
          {/* Hover highlight line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/10 group-hover:border-accent-500/20 transition-all duration-300 group-hover:-translate-x-1">
            <ChevronLeft
              size={18}
              className={`text-white/50 group-hover:text-accent-300 transition-colors sm:w-5 sm:h-5 ${isAr ? 'rotate-180' : ''}`}
            />
          </div>
          <div className="flex flex-col min-w-0 z-10 justify-center">
            <span className="text-[9px] sm:text-[11px] text-white/40 group-hover:text-accent-400 uppercase tracking-widest font-bold transition-colors">
              {t(prev.type === 'lab' ? 'navigation.previousLab' : 'navigation.previousLecture', 'Previous')}
            </span>
            <span className="text-xs sm:text-sm text-white/80 group-hover:text-white truncate font-medium transition-colors mt-0.5 leading-snug">
              {isAr && prev.titleAr ? prev.titleAr : prev.title}
            </span>
          </div>
        </Link>
      ) : (
        <div className="flex-1 opacity-0 pointer-events-none" />
      )}

      {next ? (
        <Link
          to={`/subjects/${subjectSlug}/lecture/${next.number}`}
          className={`glass-tier-1 hover:glass-tier-2 flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 rounded-[16px] sm:rounded-2xl transition-all duration-300 group flex-1 max-w-[48%] text-right relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg ${isAr ? 'flex-row-reverse text-left' : ''} ${fontFamily}`}
          id="lecture-nav-next"
        >
          {/* Hover highlight line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex flex-col min-w-0 flex-1 z-10 justify-center">
            <span className="text-[9px] sm:text-[11px] text-white/40 group-hover:text-accent-400 uppercase tracking-widest font-bold transition-colors">
              {t(next.type === 'lab' ? 'navigation.nextLab' : 'navigation.nextLecture', 'Next')}
            </span>
            <span className="text-xs sm:text-sm text-white/80 group-hover:text-white truncate font-medium transition-colors mt-0.5 leading-snug">
              {isAr && next.titleAr ? next.titleAr : next.title}
            </span>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500/10 group-hover:border-accent-500/20 transition-all duration-300 group-hover:translate-x-1">
            <ChevronRight
              size={18}
              className={`text-white/50 group-hover:text-accent-300 transition-colors sm:w-5 sm:h-5 ${isAr ? 'rotate-180' : ''}`}
            />
          </div>
        </Link>
      ) : (
        <div className="flex-1 opacity-0 pointer-events-none" />
      )}
    </motion.nav>
  )
}
