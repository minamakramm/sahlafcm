import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PenLine } from 'lucide-react'
import { WrittenQuestion } from './WrittenQuestion'
import { useUpdateProgress } from '../hooks/useLectureProgress'
import { useAuth } from '@/hooks/useAuth'

export const WrittenTab = ({ lecture }) => {
  const { t, i18n } = useTranslation('lectures')
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'
  const { isAuthenticated } = useAuth()
  const { updateProgress } = useUpdateProgress(lecture.subjectId, lecture.number)

  const questions = lecture.written || []

  // Mark written tab as attempted on first render
  useEffect(() => {
    if (isAuthenticated) {
      updateProgress({ written_attempted: true, last_visited_tab: 'written' })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (questions.length === 0) {
    return (
      <div className="glass-tier-1 p-8 text-center text-[var(--text-tertiary)]">
        {t('content.noContent', 'Content is being prepared. Check back soon!')}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5" id="written-tab-content">
      {/* Header */}
      <div className="flex items-center gap-2 text-[var(--text-secondary)]">
        <PenLine size={18} className="text-[var(--text-accent)]" />
        <span className={`text-sm font-medium ${fontFamily}`}>
          {t('written.title', 'Written Questions')} ({questions.length})
        </span>
      </div>

      {/* Questions */}
      {questions.map((q, i) => (
        <WrittenQuestion key={q.id || i} question={q} questionIndex={i} />
      ))}
    </div>
  )
}
