import React from 'react'
import { motion } from 'framer-motion'
import { Bookmark } from 'lucide-react'
import { useBookmarkLecture } from '../hooks/useBookmarks'
import { useTranslation } from 'react-i18next'

export const BookmarkButton = ({ subjectId, lectureNumber, className = '' }) => {
  const { isBookmarked, isToggling, toggle } = useBookmarkLecture(subjectId, lectureNumber)
  const { t } = useTranslation('lectures')

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={toggle}
      disabled={isToggling}
      aria-label={isBookmarked ? t('bookmark.remove') : t('bookmark.add')}
      title={isBookmarked ? t('bookmark.remove') : t('bookmark.add')}
      className={`
        relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
        ${isBookmarked
          ? 'bg-[rgba(99,102,241,0.25)] border border-[rgba(99,102,241,0.40)] text-[#a5b4fc]'
          : 'glass-tier-1 text-white/50 hover:text-white/80'
        }
        ${isToggling ? 'opacity-50 pointer-events-none' : ''}
        ${className}
      `}
      id="bookmark-button"
    >
      <Bookmark
        size={18}
        fill={isBookmarked ? 'currentColor' : 'none'}
        className="transition-all duration-300"
      />
      {/* Active glow */}
      {isBookmarked && (
        <motion.span
          layoutId="bookmarkGlow"
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: '0 0 16px rgba(99,102,241,0.35)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
    </motion.button>
  )
}
