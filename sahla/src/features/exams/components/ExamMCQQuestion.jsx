import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Check, X } from 'lucide-react'

export const ExamMCQQuestion = ({ question, index, selectedAnswer, onSelect, isReadonly }) => {
  const { i18n } = useTranslation()
  const isAr = i18n.language === 'ar'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className={`glass-tier-1 p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 relative overflow-hidden border ${isReadonly ? (question.answers.find(a => a.id === selectedAnswer)?.isCorrect ? 'border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.1)]') : 'border-white/5'}`}
    >
      {/* Question text */}
      <div className="flex gap-2.5 sm:gap-3">
        <span className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold border ${isReadonly ? (question.answers.find(a => a.id === selectedAnswer)?.isCorrect ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300' : 'bg-red-500/20 border-red-500/30 text-red-300') : 'bg-accent-500/20 border-accent-500/30 text-accent-300'}`}>
          {index + 1}
        </span>
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <p className="text-white font-medium text-[14px] sm:text-[15px] leading-relaxed">{question.question}</p>
          {isAr && question.questionAr && (
            <p className="text-white/40 text-[13px] sm:text-sm font-arabic leading-relaxed" dir="rtl">
              {question.questionAr}
            </p>
          )}
        </div>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-2 mt-1 sm:mt-2">
        {question.answers.map((answer) => {
          const isSelected = selectedAnswer === answer.id
          const isCorrect = answer.isCorrect
          
          let btnClass = isSelected 
                  ? 'bg-accent-500/20 border border-accent-500/40 shadow-[0_4px_20px_rgba(139,92,246,0.15)] text-white' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white/80'
          let circleClass = isSelected ? 'border-accent-400' : 'border-white/20'
          let circleInner = isSelected && <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-accent-400" />
          
          if (isReadonly) {
            if (isCorrect) {
              btnClass = 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-100'
              circleClass = 'border-emerald-400 bg-emerald-500 text-white'
              circleInner = <Check size={12} strokeWidth={4} />
            } else if (isSelected && !isCorrect) {
              btnClass = 'bg-red-500/20 border border-red-500/40 text-red-100'
              circleClass = 'border-red-400 bg-red-500 text-white'
              circleInner = <X size={12} strokeWidth={4} />
            } else {
              btnClass = 'bg-white/5 border border-white/10 opacity-50 cursor-default text-white/40'
              circleClass = 'border-white/20'
              circleInner = null
            }
          }
          
          return (
            <button
              key={answer.id}
              onClick={() => !isReadonly && onSelect(answer.id)}
              disabled={isReadonly}
              className={`
                relative flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-3.5 rounded-[12px] sm:rounded-[16px] text-left transition-all duration-200
                ${btnClass}
              `}
            >
              <div className={`
                flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-colors
                ${circleClass}
              `}>
                {circleInner}
              </div>
              <span className={`text-[13px] sm:text-sm flex-1 font-medium`}>
                {answer.text}
              </span>
            </button>
          )
        })}
      </div>
    </motion.div>
  )
}
