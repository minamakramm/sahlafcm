import React from 'react'
import { useTranslation } from 'react-i18next'
import { ExamWrittenQuestion } from './ExamWrittenQuestion'

export const ExamPartB = ({ questions, answers, onAnswer, isReadonly }) => {
  const { t, i18n } = useTranslation('exam')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  if (!questions || questions.length === 0) return null

  return (
    <div className="flex flex-col gap-6 w-full mt-8">
      <div className="mb-1">
        <h3 className={`text-lg sm:text-xl font-bold text-white ${fontFamily}`}>
          {t('partB.title', 'Part B — Written Questions')}
        </h3>
        <div className="h-px w-full bg-white/10 mt-2" />
      </div>

      <div className="flex flex-col gap-4 sm:gap-8">
        {questions.map((q, i) => {
          const answerValue = (answers || []).find(a => a.questionId === q.id)?.answer || ''
          return (
            <ExamWrittenQuestion 
              key={q.id}
              question={q}
              index={i}
              value={answerValue}
              onChange={(val) => onAnswer(q.id, val)}
              isReadonly={isReadonly}
            />
          )
        })}
      </div>
    </div>
  )
}
