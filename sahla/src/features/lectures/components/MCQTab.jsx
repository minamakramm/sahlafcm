import React, { useState, useCallback, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { RotateCcw, CheckSquare } from 'lucide-react'
import { MCQQuestion } from './MCQQuestion'
import { MCQResult } from './MCQResult'
import { Button } from '@/components/ui'
import { useUpdateProgress } from '../hooks/useLectureProgress'
import { useAuth } from '@/hooks/useAuth'

export const MCQTab = ({ lecture, progress }) => {
  const { t, i18n } = useTranslation('lectures')
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'
  const { isAuthenticated } = useAuth()
  const { updateProgress } = useUpdateProgress(lecture.subjectId, lecture.number)

  const questions = lecture.mcq || []
  const storageKey = `sahla-mcq-${lecture.subjectId}-${lecture.number}`

  // Initialize from localStorage first, then override with progress if available
  const [answers, setAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  // Sync with Supabase progress once loaded
  useEffect(() => {
    if (progress?.mcq_answers && Object.keys(progress.mcq_answers).length > 0) {
      setAnswers(prev => {
        const merged = { ...prev, ...progress.mcq_answers }
        localStorage.setItem(storageKey, JSON.stringify(merged))
        return merged
      })
    }
  }, [progress?.mcq_answers, storageKey])

  const handleSelect = useCallback((qIndex, answerId) => {
    const newAnswers = { ...answers, [qIndex]: answerId }
    setAnswers(newAnswers)
    
    // Save to localStorage immediately
    localStorage.setItem(storageKey, JSON.stringify(newAnswers))

    // Save to Supabase instantly for 'perfect' progress
    if (isAuthenticated) {
      const isAll = Object.keys(newAnswers).length === questions.length
      
      // Calculate score for saving
      const currentScore = questions.reduce((acc, q, i) => {
        if (newAnswers[i] === undefined) return acc
        const correct = q.answers.find(a => a.isCorrect)
        return acc + (newAnswers[i] === correct?.id ? 1 : 0)
      }, 0)

      updateProgress({ 
        mcq_answers: newAnswers,
        mcq_score: currentScore,
        mcq_total: questions.length,
        is_completed: isAll, // Consider lecture 'completed' if MCQ is finished
        last_visited_tab: 'mcq' 
      })
    }
  }, [answers, questions, isAuthenticated, updateProgress])

  // Calculate score for UI
  const totalAnswered = Object.keys(answers).length
  const allAnswered = totalAnswered === questions.length
  const score = useMemo(() => {
    return questions.reduce((acc, q, i) => {
      if (answers[i] === undefined) return acc
      const correct = q.answers.find(a => a.isCorrect)
      return acc + (answers[i] === correct?.id ? 1 : 0)
    }, 0)
  }, [answers, questions])

  const handleReset = useCallback(() => {
    setAnswers({})
    localStorage.removeItem(storageKey)
    if (isAuthenticated) {
      updateProgress({ mcq_answers: {}, mcq_score: 0 })
    }
  }, [isAuthenticated, updateProgress, storageKey])

  if (questions.length === 0) {
    return (
      <div className="glass-tier-1 p-8 text-center text-[var(--text-tertiary)]">
        {t('quiz.noQuiz', 'No quiz available for this lecture.')}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5" id="mcq-tab-content">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[var(--text-secondary)]">
          <CheckSquare size={18} className="text-[var(--text-accent)]" />
          <span className={`text-sm font-medium ${fontFamily}`}>
            {t('quiz.title', 'Quick Quiz')} ({questions.length} {t('mcq.questions', 'questions')})
          </span>
        </div>

        {totalAnswered > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReset}
            className="text-xs"
            id="mcq-reset-button"
          >
            <RotateCcw size={14} className="mr-1.5" />
            {t('actions.tryAgain', 'Try Again')}
          </Button>
        )}
      </div>

      {/* Questions */}
      {questions.map((q, i) => (
        <MCQQuestion
          key={`${q.id}-${Object.keys(answers).length === 0 ? 'reset' : 'active'}`}
          question={q}
          questionIndex={i}
          selectedAnswer={answers[i]}
          onSelect={handleSelect}
          isAnswered={answers[i] !== undefined}
        />
      ))}

      {/* Result */}
      {allAnswered && (
        <MCQResult score={score} total={questions.length} />
      )}
    </div>
  )
}
