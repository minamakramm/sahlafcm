import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ExamIntro } from './components/ExamIntro'
import { ExamResult } from './components/ExamResult'
import { ExamPartA } from './components/ExamPartA'
import { ExamPartB } from './components/ExamPartB'
import { ExamContainer } from './components/ExamContainer'
import { useExamData, useExamState } from './hooks/useExam'
import { ExamSkeleton } from '@/components/feedback/ExamSkeleton'
import { SubjectSidebar } from '@/features/subjects/components/SubjectSidebar'
import { Menu, ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FloatingMenuFab } from '@/components/ui'

export default function ExamPage() {
  const { subjectSlug } = useParams()
  const { t } = useTranslation('exam')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  const { exam, subject, isLoading, bestAttempt } = useExamData(subjectSlug)
  const { 
    examState, 
    startExam, 
    retryExam,
    recordMCQAnswer, 
    recordWrittenAnswer, 
    submitExam, 
    isSubmitting 
  } = useExamState(subjectSlug, exam)

  if (isLoading) {
    return (
      <div className="min-h-screen max-w-4xl mx-auto px-4 py-8 pt-24">
        <ExamSkeleton />
      </div>
    )
  }

  if (!exam) {
    return <Navigate to={`/subjects/${subjectSlug}`} replace />
  }

  return (
    <>
      <Helmet>
        <title>{exam.title} — Sahla</title>
      </Helmet>

      <div className="min-h-screen max-w-[90rem] mx-auto px-2 sm:px-4 py-4 sm:py-8 pt-20 sm:pt-24 flex flex-col lg:flex-row gap-4 lg:gap-8 items-start relative">
        <SubjectSidebar
          subject={subject}
          activeItem="exam"
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <FloatingMenuFab 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          isOpen={isSidebarOpen} 
        />

        <div className="flex-1 w-full min-w-0 max-w-4xl mx-auto flex flex-col gap-4 sm:gap-6">
          {examState.state === 'idle' && (
            <ExamIntro 
              exam={exam} 
              subjectSlug={subjectSlug} 
              bestAttempt={bestAttempt} 
              onStart={startExam} 
            />
          )}
          
          {examState.state === 'started' && (
            <ExamContainer 
              exam={exam}
              subjectSlug={subjectSlug}
              setIsSidebarOpen={setIsSidebarOpen}
              state={examState}
              onMCQAnswer={recordMCQAnswer}
              onWrittenAnswer={recordWrittenAnswer}
              onSubmit={submitExam}
              isSubmitting={isSubmitting}
            />
          )}
          
          {examState.state === 'results' && (
            <div className="flex flex-col gap-8 sm:gap-12 pb-32">
              <ExamResult 
                scoreInfo={examState.scoreInfo}
                timeSpentMinutes={examState.timeSpentMinutes}
                subjectSlug={subjectSlug}
                onRetry={retryExam}
              />
              
              <div className="max-w-3xl mx-auto w-full">
                <div className="mb-6 flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <div className="w-1.5 h-6 rounded-full bg-accent-500" />
                  <h3 className="font-bold text-white tracking-tight">{t('result.reviewAnswers', 'Review Your Answers')}</h3>
                </div>
                
                <ExamPartA 
                  questions={exam.mcq} 
                  answers={examState.mcqAnswers} 
                  onAnswer={() => {}} 
                  isReadonly={true}
                />
                
                {exam.written && exam.written.length > 0 && (
                  <ExamPartB 
                    questions={exam.written} 
                    answers={examState.writtenAnswers} 
                    onAnswer={() => {}} 
                    isReadonly={true}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
