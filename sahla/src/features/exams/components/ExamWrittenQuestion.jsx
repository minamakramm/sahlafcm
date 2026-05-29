import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Badge, Textarea } from '@/components/ui'

export const ExamWrittenQuestion = ({ question, index, value, onChange, isReadonly }) => {
  const { t, i18n } = useTranslation('exam')
  const isAr = i18n.language === 'ar'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-tier-1 p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 border border-white/5"
    >
      {/* Question text */}
      <div className="flex gap-2.5 sm:gap-3">
        <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-accent-500/20 border border-accent-500/30 flex items-center justify-center text-[10px] sm:text-xs text-accent-300 font-bold">
          {index + 1}
        </span>
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <p className="text-white font-medium text-[14px] sm:text-[15px] leading-relaxed whitespace-pre-line">{question.question}</p>
          {isAr && question.questionAr && (
            <p className="text-white/40 text-[13px] sm:text-sm font-arabic leading-relaxed whitespace-pre-line" dir="rtl">
              {question.questionAr}
            </p>
          )}
          {question.marks && (
            <Badge variant="purple" className="self-start text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border border-purple-500/20 mt-1">
              {question.marks} pts
            </Badge>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="mt-1 sm:mt-2">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t('partB.placeholder', 'Write your answer here...')}
          className={`min-h-[120px] sm:min-h-[150px] resize-y text-sm sm:text-base p-3 sm:p-4 rounded-xl ${isReadonly ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={isReadonly}
        />
      </div>
    </motion.div>
  )
}
