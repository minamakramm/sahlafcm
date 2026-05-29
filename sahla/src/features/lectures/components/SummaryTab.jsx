import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ListChecks } from 'lucide-react'
import { useUpdateProgress } from '../hooks/useLectureProgress'
import { useAuth } from '@/hooks/useAuth'
import { renderMath } from '@/utils/mathRenderer'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
}

const pointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

export const SummaryTab = ({ lecture }) => {
  const { t, i18n } = useTranslation('lectures')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'
  const { isAuthenticated } = useAuth()
  const { updateProgress } = useUpdateProgress(lecture.subjectId, lecture.number)

  // Mark summary as viewed on first render
  useEffect(() => {
    if (isAuthenticated) {
      updateProgress({ summary_viewed: true, last_visited_tab: 'summary' })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const points = lecture.summary?.points || []
  const pointsAr = lecture.summary?.pointsAr || []

  if (points.length === 0) {
    return (
      <div className="glass-tier-1 p-8 text-center text-[var(--text-tertiary)]">
        {t('content.noKeyPoints', 'No key points for this lecture.')}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 sm:gap-4" id="summary-tab-content">
      {/* Header */}
      <div className="flex items-center gap-2 text-[var(--text-secondary)] mb-1">
        <ListChecks size={16} className="text-[var(--text-accent)] sm:w-[18px] sm:h-[18px]" />
        <span className={`text-[0.8rem] sm:text-sm font-medium ${fontFamily}`}>
          {t('content.keyPointsTitle', 'Key Points')} ({points.length})
        </span>
      </div>

      {/* Points list */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-2.5 sm:gap-3"
      >
        {points.map((point, i) => (
          <motion.li
            key={i}
            variants={pointVariants}
            className="glass-tier-1 p-3.5 sm:p-5 flex flex-col gap-2 relative overflow-hidden group"
          >
            {/* English point */}
            <div className="flex items-start gap-2.5 sm:gap-3">
              <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center text-[10px] sm:text-xs text-[var(--text-brand)] font-bold mt-0.5">
                {i + 1}
              </span>
              <p 
                className="text-[var(--text-primary)] text-[0.9rem] sm:text-base leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: renderMath(point) }}
              />
            </div>

            {/* Arabic version below (if language is Arabic and Arabic exists) */}
            {isAr && pointsAr[i] && (
              <div className="flex items-start gap-2.5 sm:gap-3 mt-1" dir="rtl">
                <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" /> {/* spacer alignment */}
                <p 
                  className="text-[var(--text-tertiary)] text-[0.9rem] sm:text-base leading-relaxed font-arabic"
                  dangerouslySetInnerHTML={{ __html: renderMath(pointsAr[i]) }}
                />
              </div>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
