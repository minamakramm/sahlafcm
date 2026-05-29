import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Clock, FileText, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button, Badge } from '@/components/ui'

export const ExamIntro = ({ exam, subjectSlug, bestAttempt, onStart }) => {
  const { t, i18n } = useTranslation('exam')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  const title = isAr && exam.titleAr ? exam.titleAr : exam.title
  const instructions = isAr && exam.instructionsAr ? exam.instructionsAr : exam.instructions

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-tier-3 max-w-2xl mx-auto p-5 sm:p-10 flex flex-col gap-6 sm:gap-10 text-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-accent-500/20 blur-[60px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col gap-2.5 sm:gap-4 relative z-10">
        <h1 className={`text-2xl sm:text-4xl font-black text-white leading-[1.1] tracking-tight ${fontFamily}`}>
          {title}
        </h1>
        <div className={`text-white/60 leading-relaxed max-w-lg mx-auto text-sm sm:text-base ${fontFamily}`}>
          <p className="line-clamp-3 sm:line-clamp-none">{exam.instructions}</p>
          {isAr && exam.instructionsAr && (
            <p className="font-arabic mt-2 text-xs sm:text-sm" dir="rtl">{exam.instructionsAr}</p>
          )}
        </div>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-md mx-auto w-full relative z-10">
        <div className="glass-tier-1 p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl flex flex-col items-center gap-1.5 sm:gap-3 border border-white/5">
          <Clock size={20} className="text-accent-300 sm:w-7 sm:h-7" />
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-black text-white leading-none">{exam.timeLimitMinutes}</div>
            <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-1">{t('intro.minutes', 'Minutes')}</div>
          </div>
        </div>
        
        <div className="glass-tier-1 p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl flex flex-col items-center gap-1.5 sm:gap-3 border border-white/5">
          <FileText size={20} className="text-accent-300 sm:w-7 sm:h-7" />
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-black text-white leading-none">{exam.mcq.length + exam.written.length}</div>
            <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-1">{t('intro.questions', 'Questions')}</div>
          </div>
        </div>
      </div>

      {/* Best Attempt */}
      {bestAttempt && (
        <div className="flex justify-center relative z-10">
          <Badge variant={bestAttempt.passed ? 'success' : 'warning'} className="px-4 py-1.5 text-xs sm:text-sm gap-2 rounded-full font-bold">
            <CheckCircle size={14} sm:size={16} />
            {t('intro.bestScore', 'Best Score')}: {bestAttempt.percentage}%
          </Badge>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-2 sm:mt-4 relative z-10">
        <Button onClick={onStart} size="lg" className="w-full sm:w-auto px-10 h-12 sm:h-14 text-base sm:text-lg font-bold rounded-2xl shadow-[0_8px_30px_rgba(139,92,246,0.3)]">
          {t('intro.startExam', 'Start Exam')}
        </Button>
        <Link to={`/subjects/${subjectSlug}`} className="w-full sm:w-auto">
          <Button variant="ghost" size="lg" className="w-full h-12 sm:h-14 font-semibold text-white/60 hover:text-white">
            <ArrowLeft size={16} className={`mr-2 ${isAr ? 'rotate-180' : ''}`} />
            {t('intro.backToSubject', 'Back to Subject')}
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
