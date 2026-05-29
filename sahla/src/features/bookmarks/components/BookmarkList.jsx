import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getSubjectIcon } from '@/utils/subjectIcons'

export const BookmarkList = ({ bookmarks = [], onRemove }) => {
  const { i18n } = useTranslation('common')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  if (!bookmarks?.length) return null

  return (
    <motion.div className="flex flex-col gap-4">
      <AnimatePresence>
        {bookmarks.map((bookmark) => {
          const subject = bookmark.subject
          const SubjectIcon = getSubjectIcon(subject?.icon)
          
          const subjectName = isAr && subject?.nameAr ? subject.nameAr : subject?.name || bookmark.subject_id
          const lectureTitle = bookmark.lecture_title || `Lecture ${bookmark.lecture_number}`

          return (
            <motion.div
              key={bookmark.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              className={`glass-tier-1 p-5 rounded-2xl flex items-center justify-between gap-4 group ${fontFamily}`}
            >
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${subject?.color || '#a5b4fc'}20`, color: subject?.color || '#a5b4fc' }}
                >
                  <SubjectIcon size={20} />
                </div>
                
                <div className="flex flex-col gap-1 min-w-0">
                  <Link 
                    to={`/subjects/${bookmark.subject_id}/lecture/${bookmark.lecture_number}`}
                    className="text-white font-medium hover:text-[#a5b4fc] transition-colors truncate"
                  >
                    {subjectName} — {lectureTitle}
                  </Link>
                  <span className="text-sm text-white/50 truncate">
                    Lecture {bookmark.lecture_number}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onRemove(bookmark)}
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                aria-label="Remove bookmark"
              >
                <Trash2 size={18} />
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </motion.div>
  )
}
