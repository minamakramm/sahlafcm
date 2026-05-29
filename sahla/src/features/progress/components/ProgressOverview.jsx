import React from 'react'
import { BookOpen, Target, Clock, Award } from 'lucide-react'

export const ProgressOverview = ({ lectureProgress = [], examAttempts = [] }) => {
  // Calculations
  const completedLectures = lectureProgress.filter(p => p.is_completed).length
  
  const mcqScores = lectureProgress.filter(p => p.mcq_score !== null && p.mcq_total !== null && p.mcq_total > 0)
  const avgMcqPercentage = mcqScores.length > 0 
    ? Math.round(mcqScores.reduce((acc, curr) => acc + (curr.mcq_score / curr.mcq_total), 0) / mcqScores.length * 100)
    : 0

  const totalTimeSeconds = lectureProgress.reduce((acc, curr) => acc + (curr.time_spent_seconds || 0), 0)
  const totalTimeHours = Math.round(totalTimeSeconds / 3600 * 10) / 10

  const totalExams = examAttempts.length

  const stats = [
    {
      label: 'Lectures Completed',
      value: completedLectures,
      icon: BookOpen,
      color: '#a5b4fc',
      bgClass: 'bg-[rgba(99,102,241,0.1)]',
    },
    {
      label: 'Average MCQ Score',
      value: `${avgMcqPercentage}%`,
      icon: Target,
      color: '#6ee7b7',
      bgClass: 'bg-[rgba(16,185,129,0.1)]',
    },
    {
      label: 'Time Spent',
      value: `${totalTimeHours}h`,
      icon: Clock,
      color: '#fcd34d',
      bgClass: 'bg-[rgba(245,158,11,0.1)]',
    },
    {
      label: 'Exams Attempted',
      value: totalExams,
      icon: Award,
      color: '#c084fc',
      bgClass: 'bg-[rgba(192,132,252,0.1)]',
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => {
        const Icon = stat.icon
        return (
          <div key={i} className="glass-tier-1 p-5 rounded-2xl flex flex-col gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${stat.bgClass}`}>
              <Icon size={20} style={{ color: stat.color }} />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/50 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
