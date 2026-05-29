import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { renderMath } from '@/utils/mathRenderer'

export const MCQQuestion = ({ question, questionIndex, selectedAnswer, onSelect, isAnswered }) => {
  const { i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  const correctAnswer = question.answers.find(a => a.isCorrect)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: questionIndex * 0.06 }}
      className="glass-tier-1 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4"
      id={`mcq-question-${questionIndex}`}
    >
      {/* Question text */}
      <div className="flex gap-2.5 sm:gap-3">
        <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center text-[10px] sm:text-xs text-[var(--text-brand)] font-bold">
          {questionIndex + 1}
        </span>
        <div className="flex flex-col gap-1.5 flex-1">
          <p 
            className="text-[var(--text-primary)] font-medium text-[14px] sm:text-[15px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: renderMath(question.question) }}
          />
          {isAr && question.questionAr && (
            <p 
              className="text-[var(--text-tertiary)] text-[13px] sm:text-sm font-arabic leading-relaxed" 
              dir="rtl"
              dangerouslySetInnerHTML={{ __html: renderMath(question.questionAr) }}
            />
          )}
          {question.visual?.type === 'svg' && (
            <div className="my-4 sm:my-5 w-full flex justify-center bg-black/20 border border-white/5 rounded-[20px] sm:rounded-[24px] p-2 sm:p-5 shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div 
                className="w-full max-w-[680px] relative z-10 transition-transform duration-500 group-hover:scale-[1.01]"
                dangerouslySetInnerHTML={{ __html: question.visual.svg }} 
              />
            </div>
          )}
        </div>
      </div>

      {/* Difficulty & Midterm Badges */}
      <div className="flex gap-2">
        {question.difficulty && (
          <span className={`
            text-[11px] px-2 py-0.5 rounded-full uppercase tracking-wider font-medium
            ${question.difficulty === 'easy' ? 'bg-[rgba(16,185,129,0.15)] text-[#6ee7b7] border border-[rgba(16,185,129,0.25)]' :
              question.difficulty === 'medium' ? 'bg-[rgba(245,158,11,0.15)] text-[#fcd34d] border border-[rgba(245,158,11,0.25)]' :
                'bg-[rgba(239,68,68,0.15)] text-[#fca5a5] border border-[rgba(239,68,68,0.25)]'}
          `}>
            {question.difficulty}
          </span>
        )}
        {question.isMidterm && (
          <span className="bg-[rgba(59,130,246,0.15)] text-[#93c5fd] border border-[rgba(59,130,246,0.25)] text-[11px] px-2 py-0.5 rounded-full uppercase tracking-wider font-medium flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-[#3b82f6] animate-pulse" />
            Midterm
          </span>
        )}
      </div>

      {/* Answer options */}
      <div className="flex flex-col gap-2">
        {question.answers.map((answer) => {
          const isSelected = selectedAnswer === answer.id
          const isCorrect = answer.isCorrect
          const showCorrectHighlight = isAnswered && isCorrect
          const showIncorrectHighlight = isAnswered && isSelected && !isCorrect

          let answerStyle = 'bg-[var(--active-overlay)] border border-[var(--border-default)] hover:border-[var(--border-strong)] hover:bg-[var(--hover-overlay)]'

          if (showCorrectHighlight) {
            answerStyle = 'bg-emerald-500/10 border border-emerald-500/30'
          } else if (showIncorrectHighlight) {
            answerStyle = 'bg-rose-500/10 border border-rose-500/30'
          } else if (isSelected && !isAnswered) {
            answerStyle = 'bg-accent-500/10 border border-accent-500/30'
          }

          return (
            <button
              key={answer.id}
              onClick={() => !isAnswered && onSelect(questionIndex, answer.id)}
              disabled={isAnswered}
              className={`
                relative flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-[12px] sm:rounded-[14px] text-left transition-all duration-200
                ${answerStyle}
                ${isAnswered ? 'cursor-default' : 'cursor-pointer'}
                ${fontFamily}
              `}
              id={`mcq-answer-${questionIndex}-${answer.id}`}
            >
              {/* Letter */}
              <span className={`
                flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold
                ${showCorrectHighlight ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' :
                  showIncorrectHighlight ? 'bg-rose-500/20 text-rose-600 dark:text-rose-400' :
                    'bg-[var(--border-default)] text-[var(--text-tertiary)]'}
              `}>
                {answer.id.toUpperCase()}
              </span>

              {/* Answer text */}
              <span 
                className={`
                  text-[13px] sm:text-sm flex-1
                  ${showCorrectHighlight ? 'text-emerald-600 dark:text-emerald-400 font-medium' :
                    showIncorrectHighlight ? 'text-rose-600 dark:text-rose-400 font-medium' :
                      'text-[var(--text-secondary)]'}
                `}
                dangerouslySetInnerHTML={{ __html: renderMath(answer.text) }}
              />

              {/* Result icon */}
              {isAnswered && isSelected && (
                isCorrect ? (
                  <CheckCircle size={18} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                ) : (
                  <XCircle size={18} className="text-rose-500 dark:text-rose-400 flex-shrink-0" />
                )
              )}
              {isAnswered && !isSelected && isCorrect && (
                <CheckCircle size={18} className="text-emerald-500/60 dark:text-emerald-400/60 flex-shrink-0" />
              )}
            </button>
          )
        })}
      </div>
    </motion.div>
  )
}
