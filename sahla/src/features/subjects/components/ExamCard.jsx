import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const ExamCard = ({ subjectSlug, examData }) => {
  const { t, i18n } = useTranslation('subjects')
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'
  const isRtl = i18n.language === 'ar'
  const navigate = useNavigate()

  const handleStart = () => {
    navigate(`/subjects/${subjectSlug}/exam`)
  }

  const durationStr = examData?.duration ? `${examData.duration} min` : '100 Marks'
  
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleStart}
      className="glass-tier-2 glass-highlight relative overflow-hidden cursor-pointer group flex flex-col h-full rounded-[24px] p-8 transition-all"
    >
      {/* Top subtle highlight (warm for exams) */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity" 
        style={{ background: 'linear-gradient(135deg, #f59e0b, #f43f5e)' }} 
      />

      <div 
        className="flex items-center justify-center shrink-0 mb-6 transition-transform origin-left group-hover:scale-105 glass-tier-1"
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '20px',
          fontSize: '1.8rem',
        }}
      >
        🎓
      </div>

      <h3 className={`text-[1.2rem] font-bold text-white mb-[6px] ${fontFamily}`}>
        {t('detail.examSection', 'Practice Exam')}
      </h3>

      <p className={`text-[0.9rem] text-[#a0a0b8] mb-4 flex-grow ${fontFamily}`}>
        {t('detail.examSubtitle', 'Core MCQs + Written Questions')}
      </p>

      {/* Topics / Tags Mock matching exam card */}
      <div className="flex flex-wrap gap-[6px] mb-4">
        <span className="px-[10px] py-[3px] rounded-full text-[0.72rem] font-medium" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.15)', color: '#a78bfa' }}>
           {isRtl ? 'كل المحاضرات' : 'All Lectures'}
        </span>
        <span className="px-[10px] py-[3px] rounded-full text-[0.72rem] font-medium" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.15)', color: '#a78bfa' }}>
           {durationStr}
        </span>
      </div>

      {/* Progress Bar Area matching 'card-progress' from index */}
      <div className="w-full flex items-center justify-between gap-[10px] mt-auto">
        <div className="flex-1 h-[4px] rounded-[4px] relative bg-[#1a1a28] overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-0 rounded-[4px]" style={{ background: 'linear-gradient(135deg, #f59e0b, #f43f5e)' }} />
        </div>
        <span className="text-[0.8rem] text-[#6b6b80]">
          {t('status.notStarted', 'Not started')}
        </span>
      </div>

    </motion.div>
  )
}
