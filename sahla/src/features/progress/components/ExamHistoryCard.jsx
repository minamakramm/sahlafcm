import React from 'react'
import { motion } from 'framer-motion'
import { Award, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const ExamHistoryCard = ({ attempt, subject }) => {
  const isPassed = attempt.passed
  const gradeColor = isPassed ? '#6ee7b7' : '#fca5a5'
  const gradeBg = isPassed ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'
  const gradeBorder = isPassed ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'

  const date = new Date(attempt.created_at).toLocaleDateString()

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-tier-1 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      style={{ borderLeft: `4px solid ${gradeColor}` }}
    >
      <div className="flex flex-col gap-1 min-w-0">
        <h4 className="text-white font-medium text-lg leading-tight truncate">
          {subject?.name || attempt.subject_id} Final Exam
        </h4>
        <div className="flex items-center gap-3 text-xs text-white/50">
          <span>{date}</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {attempt.time_taken_minutes} min</span>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0 justify-between sm:justify-end">
        <div 
          className="px-3 py-1.5 rounded-xl flex items-center gap-2"
          style={{ backgroundColor: gradeBg, border: `1px solid ${gradeBorder}` }}
        >
          <Award size={16} style={{ color: gradeColor }} />
          <span className="font-bold" style={{ color: gradeColor }}>{attempt.percentage}%</span>
        </div>
        
        <Link 
          to={`/subjects/${attempt.subject_id}/exam`}
          className="w-10 h-10 rounded-full glass-tier-2 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
        >
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  )
}
