import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExamMCQQuestion } from './ExamMCQQuestion'

export const ExamPartA = ({ questions, answers, onAnswer, isReadonly }) => {
  const { t, i18n } = useTranslation('exam')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  if (!questions || questions.length === 0) return null

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="mb-1">
        <h3 className={`text-lg sm:text-xl font-bold text-white ${fontFamily}`}>
          {t('partA.title', 'Part A — Multiple Choice Questions')}
        </h3>
        <div className="h-px w-full bg-white/10 mt-2" />
      </div>

      <div className="flex flex-col gap-4 sm:gap-8">
        {questions.map((q, i) => {
          const selectedAnswer = answers.find(a => a.questionId === q.id)?.answerId
          return (
            <ExamMCQQuestion 
              key={q.id}
              question={q}
              index={i}
              selectedAnswer={selectedAnswer}
              onSelect={(answerId) => onAnswer(q.id, answerId)}
              isReadonly={isReadonly}
            />
          )
        })}
      </div>
    </div>
  )
}
