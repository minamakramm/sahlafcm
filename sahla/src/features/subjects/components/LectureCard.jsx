import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { getIconForEmoji } from '../../../utils/iconMap'
import { getLectureData } from '@/features/home/utils/staticData'

const BOOK_ICONS = ['📘', '📗', '📙', '📕', '📓', '📔']

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const LectureCard = ({ 
  lecture, 
  subjectSlug, 
  departmentSlug, // <-- ADDED this
  subjectColor = '#6366f1', 
  index = 0,
  customLabel,
  customNumber,
  progress,
  isMidtermIncluded
}) => {
  const { i18n } = useTranslation()
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'
  const isRtl = i18n.language === 'ar'
  const navigate = useNavigate()

  const [dynamicTotalMCQs, setDynamicTotalMCQs] = React.useState(
    lecture.mcqCount || lecture.mcq?.length || lecture.mcqs?.length || 0
  )

  React.useEffect(() => {
    let mounted = true
    if (dynamicTotalMCQs === 0 && departmentSlug && subjectSlug && lecture.number) {
      getLectureData(departmentSlug, subjectSlug, lecture.number)
        .then(lectureData => {
          if (mounted && lectureData) {
            const count = lectureData.mcq?.length || lectureData.mcqs?.length || 0;
            if (count > 0) setDynamicTotalMCQs(count);
          }
        })
        .catch(err => {
          // ignore if missing
        })
    }
    return () => { mounted = false }
  }, [dynamicTotalMCQs, departmentSlug, subjectSlug, lecture.number])

  const bookEmoji = BOOK_ICONS[index % BOOK_ICONS.length]

  // Convert emoji to premium icon
  const icon = getIconForEmoji(bookEmoji)

  // Use custom labels if provided, fallback to type-based detection, fallback to 'Lecture'
  const displayLabel = customLabel || (lecture.type === 'lab' ? (isRtl ? 'المختبر' : 'Lab') : lecture.type === 'quiz' ? (isRtl ? 'اختبار' : 'Quiz') : (isRtl ? 'المحاضرة' : 'Lecture'))
  const displayNumber = customNumber || lecture.number

  // Calculate real progress
  const answeredCount = progress?.mcq_answers ? Object.keys(progress.mcq_answers).length : 0
  const progressPercent = dynamicTotalMCQs > 0 ? Math.min(100, (answeredCount / dynamicTotalMCQs) * 100) : 0
  
  const timeMinutes = Math.floor((progress?.time_spent_seconds || 0) / 60)

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/subjects/${subjectSlug}/lecture/${lecture.number}`)}
      className="glass-tier-2 glass-highlight relative overflow-hidden cursor-pointer group flex flex-col h-full rounded-[24px] p-8 transition-all"
    >
      {/* Top subtle highlight */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity" 
        style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }} 
      />

      <div className="flex items-start justify-between mb-6">
        <div 
          className="flex items-center justify-center shrink-0 transition-transform origin-left group-hover:scale-105 glass-tier-1"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            fontSize: '1.8rem',
            color: subjectColor || '#8b5cf6'
          }}
        >
          {icon}
        </div>
        
        {timeMinutes > 0 && (
          <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black text-accent-400 flex items-center gap-1.5 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
            {timeMinutes}m {isRtl ? 'دراسة' : 'Read'}
          </div>
        )}
      </div>

      <h3 className={`text-[1.2rem] font-bold text-white mb-[6px] ${fontFamily}`}>
         {displayLabel} {displayNumber}
      </h3>

      <div className={`text-[0.9rem] text-[#a0a0b8] mb-4 flex-grow ${fontFamily}`}>
        {isRtl && lecture.titleAr ? lecture.titleAr : lecture.title}
      </div>

      {/* Topics / Tags Mock */}
      <div className="flex flex-wrap gap-[6px] mb-4">
        <span className="px-[10px] py-[3px] rounded-full text-[0.72rem] font-bold flex items-center gap-1.5" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff' }}>
           <FileText size={12} style={{ color: subjectColor }} />
           {isRtl ? 'المصادر' : 'Resources'}
        </span>
        <span className={`px-[10px] py-[3px] rounded-full text-[0.72rem] font-medium transition-colors ${timeMinutes > 0 ? 'bg-accent-500/20 text-accent-300 border border-accent-500/30' : 'bg-white/5 text-white/30 border border-transparent'}`}>
           {isRtl ? 'شرح' : 'Explanation'}
        </span>
        <span className="px-[10px] py-[3px] rounded-full text-[0.72rem] font-medium bg-white/5 text-white/30">
           {isRtl ? 'ملخص' : 'Summary'}
        </span>
        {isMidtermIncluded && (
          <span className="px-[10px] py-[3px] rounded-full text-[0.72rem] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/20 flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            {isRtl ? 'ميدترم' : 'Midterm'}
          </span>
        )}
      </div>

      {/* Progress Bar Area matching 'card-progress' from index */}
      {dynamicTotalMCQs > 0 && (
        <div className="w-full flex items-center justify-between gap-[10px] mt-auto">
          <div className="flex-1 h-[4px] rounded-[4px] relative bg-white/5 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute top-0 left-0 h-full rounded-[4px]" 
              style={{ background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }} 
            />
          </div>
          <span className="text-[0.8rem] text-[#6b6b80] font-medium min-w-[60px] text-right">
            {answeredCount}/{dynamicTotalMCQs} {isRtl ? 'أسئلة' : 'MCQs'}
          </span>
        </div>
      )}

    </motion.div>
  )
}
