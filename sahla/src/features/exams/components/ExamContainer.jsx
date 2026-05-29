import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowLeft, Menu } from 'lucide-react'
import { ExamPartA } from './ExamPartA'
import { ExamPartB } from './ExamPartB'
import { Button, ProgressBar } from '@/components/ui'
import { ExamSubmitModal } from './ExamSubmitModal'

export const ExamContainer = ({ 
  exam, 
  subjectSlug,
  setIsSidebarOpen,
  state, 
  onMCQAnswer, 
  onWrittenAnswer, 
  onSubmit, 
  isSubmitting 
}) => {
  const { t, i18n } = useTranslation('exam')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  // Resilience: handle missing or different time limit keys
  const initialMinutes = exam.timeLimitMinutes || (exam.duration / 60) || 60
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
  const [showSubmitModal, setShowSubmitModal] = useState(false)

  // Calculate progress
  const answeredMCQ = (state.mcqAnswers || []).length
  const answeredWritten = (state.writtenAnswers || []).filter(a => a.answer?.trim().length > 0).length
  const totalQuestions = (exam.mcq || []).length + (exam.written || []).length
  const totalAnswered = answeredMCQ + answeredWritten
  const progressPercent = totalQuestions > 0 ? (totalAnswered / totalQuestions) * 100 : 0
  const unansweredCount = Math.max(0, totalQuestions - totalAnswered)

  useEffect(() => {
    if (timeLeft <= 0) {
      onSubmit()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          onSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onSubmit])

  const title = isAr && exam.titleAr ? exam.titleAr : exam.title

  // Format time for Timer component
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  return (
    <div className="flex flex-col gap-4 sm:gap-8 max-w-3xl w-full mx-auto pb-32 overflow-hidden">
      {/* Premium Sticky Header — Integrated Navigation */}
      <div 
        className="sticky top-2 sm:top-4 z-40 glass-tier-3 p-2 sm:p-3 rounded-2xl sm:rounded-[2rem] flex items-center justify-between gap-2 sm:gap-4 overflow-hidden border border-white/10"
        style={{
          background: 'radial-gradient(circle at top left, rgba(255,255,255,0.05) 0%, transparent 70%)'
        }}
      >
        <div className="flex items-center gap-2">
          {/* Mobile Back Button */}
          <Link 
            to={`/subjects/${subjectSlug}`}
            className="lg:hidden p-2 text-white/50 hover:text-white bg-white/5 rounded-xl transition-colors border border-white/5"
          >
            <ArrowLeft size={16} className={isAr ? 'rotate-180' : ''} />
          </Link>
          
          <h2 className={`text-white font-bold sm:font-black text-sm sm:text-lg tracking-tight line-clamp-1 ${fontFamily}`}>
            {title}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          {/* Timer */}
          <div className={`flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shrink-0 ${timeLeft < 300 ? 'bg-red-500/20 text-red-300' : 'bg-white/5 text-white/90 border border-white/5'}`}>
            <span className="font-mono font-bold tracking-wider text-xs sm:text-base">{timeString}</span>
          </div>

          {/* Mobile Menu Button Removed per request */}
        </div>
      </div>

      {/* Parts */}
      <ExamPartA 
        questions={exam.mcq} 
        answers={state.mcqAnswers} 
        onAnswer={onMCQAnswer} 
      />
      
      <ExamPartB 
        questions={exam.written} 
        answers={state.writtenAnswers} 
        onAnswer={onWrittenAnswer} 
      />

      {/* Sticky Footer — Robust & Compact */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-surface-dark/90 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="flex justify-between text-[10px] sm:text-xs text-white/60 font-bold uppercase tracking-widest">
              <span className="truncate">{t('container.answered', 'Answered')}: {totalAnswered}/{totalQuestions}</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <ProgressBar progress={progressPercent} className="h-1 sm:h-1.5 bg-white/5" />
          </div>
          
          <Button 
            onClick={() => setShowSubmitModal(true)} 
            isLoading={isSubmitting}
            size="lg"
            className="px-4 sm:px-8 py-2 sm:py-3 h-10 sm:h-12 text-xs sm:text-base flex-shrink-0 font-black rounded-xl sm:rounded-2xl uppercase tracking-tighter"
          >
            {t('container.submit', 'Submit')}
          </Button>
        </div>
      </div>

      {/* Submit Modal */}
      <AnimatePresence>
        {showSubmitModal && (
          <ExamSubmitModal 
            unansweredCount={unansweredCount}
            onConfirm={() => {
              setShowSubmitModal(false)
              onSubmit()
            }}
            onCancel={() => setShowSubmitModal(false)}
            isSubmitting={isSubmitting}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
