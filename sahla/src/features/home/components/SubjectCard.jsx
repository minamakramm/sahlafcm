import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from '@/stores/authStore'
import { SubjectVisual } from './SubjectVisual'
import {
  Brain, TrendingUp, Network, Eye, MessageSquare, Lightbulb,
  BookOpen, Hash, ArrowRight
} from 'lucide-react'

const ICON_MAP = {
  Brain, TrendingUp, Network, Eye, MessageSquare, Lightbulb,
}

const SubjectCardInner = ({ subject, departmentSlug }) => {
  const { i18n } = useTranslation()
  const { t } = useTranslation('subjects')
  const navigate = useNavigate()
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  const Icon = ICON_MAP[subject.icon] || Brain

  const handleClick = () => {
    navigate(`/subjects/${subject.slug}`)
  }

  return (
    <article
      onClick={handleClick}
      className="relative overflow-hidden cursor-pointer flex flex-col p-6 md:p-8 rounded-[1.5rem] h-full group bg-white/[0.03] border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
      style={{ willChange: 'transform' }}
    >
      {/* Dynamic Background Glow based on subject color */}
      <div 
        className="absolute -top-10 -right-10 w-48 h-48 blur-[60px] opacity-[0.1] pointer-events-none group-hover:opacity-[0.25] transition-opacity duration-500"
        style={{ background: subject.color }}
      />
      
      {/* Top Edge Shine */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top Section */}
        <div className="flex items-start justify-between mb-4 md:mb-6">
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-[1.1rem] flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 shrink-0"
            style={{ 
              background: `${subject.color}15`, 
              borderColor: `${subject.color}25`,
              color: subject.color,
              boxShadow: `0 0 15px ${subject.color}30`
            }}
          >
            <Icon size={24} className="md:size-[26px]" />
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                <span className="text-[9px] md:text-xs font-bold text-secondary-300 uppercase tracking-widest leading-none translate-y-[1px]">
                  {subject.lectureCount + ' Modules'}
                </span>
            </div>
            {subject.midtermRange && (
              <div className="px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center backdrop-blur-md gap-1">
                <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-[8px] md:text-[10px] font-bold text-amber-300 uppercase tracking-wider leading-none translate-y-[0.5px]">
                  {subject.midtermSectionsRange ? (
                    t('detail.midtermShortWithSections', 'Lecs {{start}}-{{end}} & Secs {{secStart}}-{{secEnd}} Midterm', {
                      start: subject.midtermRange.start,
                      end: subject.midtermRange.end,
                      secStart: subject.midtermSectionsRange.start,
                      secEnd: subject.midtermSectionsRange.end
                    })
                  ) : (
                    t('detail.midtermShort', 'Lecs {{start}}-{{end}} Midterm', {
                      start: subject.midtermRange.start,
                      end: subject.midtermRange.end
                    })
                  )}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Title & Desc */}
        <h3 className={`text-[19px] md:text-[22px] font-bold text-white mb-2 tracking-tight ${fontFamily}`}>
          {isAr && subject.nameAr ? subject.nameAr : subject.name}
        </h3>
        <p className={`text-[14px] md:text-[15px] text-white/50 leading-relaxed mb-4 md:mb-6 flex-grow ${fontFamily}`}>
          {isAr && subject.descriptionAr ? subject.descriptionAr : subject.description}
        </p>

        {/* Visual SVG Block */}
        <div className="w-full flex justify-center items-center my-4 md:my-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] relative overflow-hidden min-h-[120px] md:min-h-[140px] shadow-inner">
          <div className="relative z-10 w-full flex items-center justify-center transform scale-[0.8] md:scale-90 group-hover:scale-100 transition-transform duration-500">
             <SubjectVisual slug={subject.slug} color={subject.color} />
          </div>
        </div>

      {/* Footer Meta Data */}
      <div className="mt-2 pt-4 border-t border-white/10 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] md:text-[12px] font-semibold text-white/30 uppercase tracking-wider">
           <span className="flex items-center gap-1.5 hover:text-white/60 transition-colors">
             <BookOpen size={13} className="opacity-50" /> 
             {subject.lectureCount} Modules
           </span>
            <span className="flex items-center gap-1.5 hover:text-white/60 transition-colors">
             <Hash size={13} className="opacity-50" /> 
             {subject.mcqCount || 25}+ MCQs
           </span>
        </div>

        <button className="w-full py-3 md:py-3.5 rounded-full bg-accent-500 text-white font-black text-[12px] md:text-[13px] uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-accent-400 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_20px_rgba(56,189,248,0.2)] hover:shadow-[0_15px_30px_rgba(56,189,248,0.3)]">
          Start Learning <ArrowRight size={16} className="md:size-[18px] transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
    </article>
  )
}

export const SubjectCard = memo(SubjectCardInner)
