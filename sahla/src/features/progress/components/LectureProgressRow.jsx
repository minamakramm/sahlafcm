import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Circle, Clock, Target } from 'lucide-react'

export const LectureProgressRow = ({ progress, subjectSlug }) => {
  const timeMins = Math.round((progress.time_spent_seconds || 0) / 60)
  const isMcqAttempted = progress.mcq_total > 0
  const mcqPct = isMcqAttempted ? Math.round((progress.mcq_score / progress.mcq_total) * 100) : 0

  return (
    <Link 
      to={`/subjects/${subjectSlug}/lecture/${progress.lecture_number}`}
      className="glass-tier-1 p-4 rounded-2xl flex items-center gap-4 hover:bg-[rgba(255,255,255,0.08)] transition-colors group"
    >
      <div className={`flex-shrink-0 ${progress.is_completed ? 'text-[#6ee7b7]' : 'text-white/20 group-hover:text-white/40 transition-colors'}`}>
        {progress.is_completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-white truncate">Lecture {progress.lecture_number}</div>
        <div className="flex items-center gap-4 text-xs text-white/40 mt-1">
          <span className="flex items-center gap-1"><Clock size={12} /> {timeMins} min</span>
          {isMcqAttempted && (
             <span className="flex items-center gap-1"><Target size={12} /> {mcqPct}%</span>
          )}
        </div>
      </div>
    </Link>
  )
}
