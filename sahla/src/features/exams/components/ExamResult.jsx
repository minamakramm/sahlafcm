import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Award, Target, Clock, ArrowLeft, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui'

export const ExamResult = ({ scoreInfo, timeSpentMinutes, subjectSlug, onRetry }) => {
  const { t, i18n } = useTranslation('exam')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'
  const controls = useAnimation()
  
  useEffect(() => {
    controls.start({
      scale: [0.8, 1.1, 1],
      opacity: [0, 1, 1],
      transition: { duration: 0.6, ease: "easeOut" }
    })
  }, [controls])

  if (!scoreInfo) return null

  const isPassed = scoreInfo.passed
  const gradeColor = isPassed ? '#6ee7b7' : '#fca5a5'
  const gradeBg = isPassed ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'
  const gradeBorder = isPassed ? 'rgba(16,185,129,0.30)' : 'rgba(239,68,68,0.30)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-tier-3 max-w-2xl mx-auto p-5 sm:p-10 flex flex-col items-center gap-6 sm:gap-10 text-center relative overflow-hidden"
    >
      <h2 className={`text-xl sm:text-3xl font-bold text-white z-10 leading-tight ${fontFamily}`}>
        {isPassed ? t('result.passed', 'Congratulations! You passed.') : t('result.failed', 'You didn\'t pass this time.')}
      </h2>

      {/* Score circle */}
      <motion.div 
        animate={controls}
        className="relative flex items-center justify-center w-28 h-28 sm:w-40 sm:h-40 rounded-full z-10 border-2"
        style={{ backgroundColor: gradeBg, borderColor: gradeBorder }}
      >
        <div className="flex flex-col items-center">
          <span className="text-3xl sm:text-5xl font-black" style={{ color: gradeColor }}>
            {scoreInfo.percentage}%
          </span>
          <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-1 font-bold">{t('result.score', 'Score')}</span>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full z-10">
        <div className="glass-tier-1 p-3.5 sm:p-5 rounded-2xl flex flex-col items-center gap-1.5 sm:gap-3 border border-white/5">
          <Target size={18} className="text-accent-300 sm:w-6 sm:h-6" />
          <div className="text-center">
            <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-bold mb-0.5 sm:mb-1">{t('result.partA', 'Part A')}</div>
            <div className="text-base sm:text-xl font-bold text-white">{scoreInfo.mcqScore} / {scoreInfo.mcqPossible}</div>
          </div>
        </div>
        
        <div className="glass-tier-1 p-3.5 sm:p-5 rounded-2xl flex flex-col items-center gap-1.5 sm:gap-3 border border-white/5">
          <Award size={18} className="text-[#fcd34d] sm:w-6 sm:h-6" />
          <div className="text-center">
            <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-bold mb-0.5 sm:mb-1">{t('result.partB', 'Part B')}</div>
            <div className="text-base sm:text-xl font-bold text-white">0 / {scoreInfo.writtenPossible}</div>
            <div className="text-[9px] sm:text-[10px] font-medium text-white/30 uppercase mt-0.5">{t('result.pendingReview', 'Pending')}</div>
          </div>
        </div>
        
        <div className="glass-tier-1 p-3.5 sm:p-5 rounded-2xl flex flex-col items-center gap-1.5 sm:gap-3 col-span-2 md:col-span-1 border border-white/5">
          <Clock size={18} className="text-emerald-400 sm:w-6 sm:h-6" />
          <div className="text-center">
            <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest font-bold mb-0.5 sm:mb-1">{t('result.timeTaken', 'Time Taken')}</div>
            <div className="text-base sm:text-xl font-bold text-white">{timeSpentMinutes} {t('result.minutes', 'min')}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full justify-center z-10">
        <Button onClick={onRetry} size="lg" className="h-12 sm:h-14 w-full sm:w-auto min-w-[160px] text-base font-bold rounded-xl sm:rounded-2xl">
          <RefreshCw size={18} className="mr-2" />
          {t('result.retry', 'Retry Exam')}
        </Button>
        <Link to={`/subjects/${subjectSlug}`} className="w-full sm:w-auto">
          <Button variant="ghost" size="lg" className="h-12 sm:h-14 w-full min-w-[160px] text-white/60 hover:text-white font-semibold">
            <ArrowLeft size={18} className="mr-2" />
            {t('result.backHome', 'Back to Subject')}
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
