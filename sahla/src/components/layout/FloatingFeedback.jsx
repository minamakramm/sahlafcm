import React, { useState, memo, useCallback } from 'react'
import { Send, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const FloatingFeedbackInner = () => {
  const { t, i18n } = useTranslation('common')
  const [isHovered, setIsHovered] = useState(false)
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  const scrollToFeedback = useCallback(() => {
    const el = document.getElementById('anon-msg-section')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-50 pointer-events-none">
      <div className="flex flex-col items-end gap-3 pointer-events-auto">
        {isHovered && (
          <div
            className={`p-3 px-5 glass-tier-3 border border-secondary-500/20 rounded-2xl relative overflow-hidden animate-fade-in ${fontFamily}`}
            style={{ boxShadow: 'var(--shadow-xl)' }}
          >
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-secondary-400" />
              <span className="text-sm font-bold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                 {t('footer.feedback_tooltip', 'Is it Sahla? Tell us! ✨')}
              </span>
            </div>
          </div>
        )}

        <button
          onClick={scrollToFeedback}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`h-14 flex items-center gap-3 px-6 glass-tier-3 border border-secondary-500/30 rounded-full transition-all group overflow-hidden hover:scale-105 active:scale-95 ${fontFamily}`}
          style={{ boxShadow: 'var(--shadow-xl)' }}
        >
          <div className="absolute inset-0 bg-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-secondary-500/10 flex items-center justify-center text-secondary-400 border border-secondary-500/20 group-hover:bg-secondary-500 group-hover:text-white transition-all duration-300">
               <Send size={16} className={isAr ? 'rotate-180' : ''} />
             </div>
             <span className="text-sm font-black tracking-tight uppercase" style={{ color: 'var(--text-primary)' }}>
                {t('footer.send_feedback', 'Send Feedback')}
             </span>
          </div>
        </button>
      </div>
    </div>
  )
}

export const FloatingFeedback = memo(FloatingFeedbackInner)
