import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Eye, EyeOff } from 'lucide-react'
import { renderMath } from '@/utils/mathRenderer'

export const WrittenQuestion = ({ question, questionIndex }) => {
  const { t, i18n } = useTranslation('lectures')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: questionIndex * 0.06 }}
      className="glass-tier-1 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4"
      id={`written-question-${questionIndex}`}
    >
      {/* Question number + text */}
      <div className="flex gap-2.5 sm:gap-3">
        <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center text-[10px] sm:text-xs text-[var(--text-brand)] font-bold">
          {questionIndex + 1}
        </span>
        <div className="flex flex-col gap-1.5 flex-1">
          {/* English question */}
          <p 
            className="text-[var(--text-primary)] font-semibold text-[14px] sm:text-[15px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: renderMath(question.question) }}
          />
          {/* Arabic question */}
          {isAr && question.questionAr && (
            <p 
              className="text-[var(--text-tertiary)] text-[13px] sm:text-sm font-arabic leading-relaxed" 
              dir="rtl"
              dangerouslySetInnerHTML={{ __html: renderMath(question.questionAr) }}
            />
          )}
        </div>
      </div>

      {/* Toggle answer button */}
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className={`
          self-start flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-[10px] sm:rounded-[12px] text-xs sm:text-sm font-medium transition-all duration-200
          ${showAnswer
            ? 'bg-secondary-500/10 border border-secondary-500/20 text-[var(--text-accent)]'
            : 'bg-[var(--active-overlay)] border border-[var(--border-default)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]'}
          ${fontFamily}
        `}
        id={`written-toggle-${questionIndex}`}
      >
        {showAnswer ? <EyeOff size={14} className="sm:w-[15px] sm:h-[15px]" /> : <Eye size={14} className="sm:w-[15px] sm:h-[15px]" />}
        {showAnswer
          ? t('written.hideAnswer', 'Hide Answer')
          : t('written.showAnswer', 'Show Answer')}
      </button>

      {/* Model answer */}
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="glass-tier-4 p-3.5 sm:p-5 flex flex-col gap-2 sm:gap-3">
              <span className="text-[10px] sm:text-xs text-[var(--text-brand)] uppercase tracking-widest font-bold">
                {t('written.modelAnswer', 'Model Answer')}
              </span>

              {/* English answer */}
              <p 
                className="text-[var(--text-secondary)] text-[13px] sm:text-sm leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: renderMath(question.modelAnswer) }}
              />

              {/* Arabic answer */}
              {isAr && question.modelAnswerAr && (
                <p 
                  className="text-[var(--text-tertiary)] text-[13px] sm:text-sm leading-relaxed font-arabic mt-0.5" 
                  dir="rtl"
                  dangerouslySetInnerHTML={{ __html: renderMath(question.modelAnswerAr) }}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
