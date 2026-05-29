import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Target, Percent } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const MCQResult = ({ score, total }) => {
  const { t, i18n } = useTranslation('lectures')
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0

  const getGrade = () => {
    if (percentage >= 90) return { label: 'Excellent!', textClass: 'text-emerald-600 dark:text-emerald-400', bgClass: 'bg-emerald-500/15 border-emerald-500/30' }
    if (percentage >= 70) return { label: 'Good', textClass: 'text-amber-600 dark:text-amber-400', bgClass: 'bg-amber-500/15 border-amber-500/30' }
    if (percentage >= 50) return { label: 'Needs Improvement', textClass: 'text-rose-600 dark:text-rose-400', bgClass: 'bg-rose-500/15 border-rose-500/30' }
    return { label: 'Try Again', textClass: 'text-rose-600 dark:text-rose-400', bgClass: 'bg-rose-500/20 border-rose-500/35' }
  }

  const grade = getGrade()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, type: 'spring' }}
      className="glass-tier-2 glass-highlight p-6 flex flex-col items-center gap-4"
      id="mcq-result"
    >
      {/* Trophy icon */}
      <div className={`w-14 h-14 rounded-full flex items-center justify-center border ${grade.bgClass}`}>
        <Trophy size={28} className={grade.textClass} />
      </div>

      {/* Score */}
      <div className={`text-center ${fontFamily}`}>
        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
          {t('mcq.result', 'Score')}: {score}/{total}
        </h3>
        <p className={`text-2xl font-bold ${grade.textClass}`}>
          {percentage}%
        </p>
        <p className="text-sm text-[var(--text-tertiary)] mt-1">{grade.label}</p>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
        <div className="flex items-center gap-1.5">
          <Target size={14} className="text-emerald-500 dark:text-emerald-400" />
          <span>{t('mcq.correct', 'Correct')}: {score}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Percent size={14} className="text-[var(--text-brand)]" />
          <span>{percentage}%</span>
        </div>
      </div>
    </motion.div>
  )
}
