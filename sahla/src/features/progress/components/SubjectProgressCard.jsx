import React from 'react'
import { motion } from 'framer-motion'
import { getSubjectIcon } from '@/utils/subjectIcons'
import { ProgressBar } from '@/components/ui'
import { LectureProgressRow } from './LectureProgressRow'

export const SubjectProgressCard = ({ subject, progressList = [] }) => {
  const SubjectIcon = getSubjectIcon(subject?.icon)
  const completed = progressList.filter(p => p.is_completed).length
  const total = subject?.lectureCount || subject?.lectures?.length || Math.max(progressList.length, 1) // rough estimate if no static count
  const percentage = Math.min(Math.round((completed / total) * 100), 100)

  // Sort progress by lecture number
  const sortedProgress = [...progressList].sort((a, b) => a.lecture_number - b.lecture_number)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-tier-2 p-6 rounded-3xl flex flex-col gap-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: `${subject?.color || '#a5b4fc'}25`, color: subject?.color || '#a5b4fc' }}
          >
            <SubjectIcon size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{subject?.name || progressList[0]?.subject_id}</h3>
            {subject?.nameAr && (
              <p className="text-white/50 text-sm font-arabic mt-0.5">{subject.nameAr}</p>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white leading-none">{percentage}%</div>
          <div className="text-xs text-white/50 mt-1">{completed} of {total} completed</div>
        </div>
      </div>

      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: subject?.color || '#a5b4fc' }}
        />
      </div>

      <div className="flex flex-col gap-2 mt-2">
        {sortedProgress.map(prog => (
          <LectureProgressRow key={prog.id} progress={prog} subjectSlug={progressList[0]?.subject_id} />
        ))}
      </div>
    </motion.div>
  )
}
