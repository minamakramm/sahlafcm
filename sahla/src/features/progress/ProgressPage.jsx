import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useProgress } from './hooks/useProgress'
import { ProgressOverview } from './components/ProgressOverview'
import { SubjectProgressCard } from './components/SubjectProgressCard'
import { ExamHistoryCard } from './components/ExamHistoryCard'
import { EmptyState } from '@/components/feedback/EmptyState'
import { LineChart } from 'lucide-react'
import { getActiveDepartments } from '@/features/home/utils/staticData'
import { useAuth } from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'

export default function ProgressPage() {
  const { isAuthenticated } = useAuth()
  const { lectureProgress, examAttempts, isLoading } = useProgress()

  const allSubjectsMap = useMemo(() => {
    const map = new Map()
    const depts = getActiveDepartments()
    for (const d of depts) {
      if (d.subjects) {
         for (const s of d.subjects) {
            map.set(s.slug, s)
         }
      }
    }
    return map
  }, [])

  // Group progress by subject
  const progressBySubject = useMemo(() => {
    const grouped = {}
    for (const p of lectureProgress) {
      if (!grouped[p.subject_id]) grouped[p.subject_id] = []
      grouped[p.subject_id].push(p)
    }
    return grouped
  }, [lectureProgress])

  if (!isAuthenticated) return <Navigate to="/login" replace />

  return (
    <>
      <Helmet>
        <title>My Progress — Sahla</title>
      </Helmet>

      <div className="min-h-screen p-4 pt-4 md:p-6 md:pt-24 max-w-5xl mx-auto flex flex-col gap-6 md:gap-10">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white">My Progress</h1>
          <p className="text-white/50">Track your learning journey across all subjects.</p>
        </div>

        {isLoading ? (
          <div className="glass-tier-1 p-8 text-center text-white/40 rounded-3xl">Loading progress...</div>
        ) : lectureProgress.length === 0 && examAttempts.length === 0 ? (
          <EmptyState 
            icon={LineChart} 
            title="No progress yet" 
            description="Start watching lectures or taking exams to see your stats here." 
          />
        ) : (
          <>
            {/* Overview Stats */}
            <ProgressOverview lectureProgress={lectureProgress} examAttempts={examAttempts} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Subjects */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <h2 className="text-xl font-bold text-white mb-2">Subject Progress</h2>
                {Object.keys(progressBySubject).length > 0 ? (
                  Object.keys(progressBySubject).map(subjectId => (
                    <SubjectProgressCard 
                      key={subjectId} 
                      subject={allSubjectsMap.get(subjectId)} 
                      progressList={progressBySubject[subjectId]} 
                    />
                  ))
                ) : (
                  <div className="glass-tier-1 p-6 text-center text-white/40 rounded-3xl">No lecture progress recorded yet.</div>
                )}
              </div>

              {/* Right Column: Exams */}
              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold text-white mb-2">Recent Exams</h2>
                {examAttempts.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {examAttempts.map(attempt => (
                      <ExamHistoryCard 
                        key={attempt.id} 
                        attempt={attempt} 
                        subject={allSubjectsMap.get(attempt.subject_id)} 
                      />
                    ))}
                  </div>
                ) : (
                   <div className="glass-tier-1 p-6 text-center text-white/40 rounded-3xl">No exams taken yet.</div>
                )}
              </div>
              
            </div>
          </>
        )}
      </div>
    </>
  )
}
