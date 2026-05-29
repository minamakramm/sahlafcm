import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Home, FileText, ChevronRight, BookOpen, Brain } from 'lucide-react'

export const SubjectHeader = ({ subject, department }) => {
  const { t, i18n } = useTranslation('subjects')
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'
  const isRtl = i18n.language === 'ar'

  const deptName = department
    ? (isRtl && department.nameAr ? department.nameAr : department.name)
    : ''

  return (
    <div className="glass-tier-2 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col items-center text-center relative w-full overflow-hidden shadow-2xl border border-white/5 mx-auto">
      
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] blur-[120px] rounded-full pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle, ${subject.color} 0%, transparent 70%)`
        }}
      />

      {/* Breadcrumb */}
      <nav className={`relative z-10 flex flex-wrap items-center justify-center gap-2 text-[12px] md:text-[14px] text-white/40 mb-8 ${fontFamily}`}>
        <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors p-1">
          <Home size={14} />
          <span>{t('breadcrumb.home', 'Home')}</span>
        </Link>

        <ChevronRight size={14} className={`opacity-50 ${isRtl ? 'rotate-180' : ''}`} />

        {department && (
          <>
            <span 
              className="hover:text-white transition-colors cursor-default"
              style={{ color: `${subject.color}cc` }}
            >
              {deptName}
            </span>
            <ChevronRight size={14} className={`opacity-40 flex-shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
          </>
        )}

        <span 
          className="px-2.5 py-0.5 rounded-full font-black text-[10px] md:text-[11px] tracking-widest border shadow-sm backdrop-blur-md"
          style={{ 
            borderColor: `${subject.color}40`, 
            color: subject.color,
            backgroundColor: `${subject.color}10`
          }}
        >
          {subject.code}
        </span>
      </nav>

      {/* Badges Container */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-8">
        <div className="bg-white/5 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/10 shadow-lg">
          <BookOpen size={14} style={{ color: subject.color }} />
          <span
            className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-none translate-y-[1px]"
            style={{ color: subject.color }}
          >
            {t('detail.lectureCount', '{{count}} Lectures', { count: subject.lectureCount })}
          </span>
        </div>

        {subject.midtermRange && (
          <div className="bg-amber-500/10 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center gap-2 border border-amber-500/20 shadow-lg transition-transform hover:scale-105 duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider leading-none text-amber-300 translate-y-[1px]">
              {subject.midtermSectionsRange ? (
                t('detail.midtermIncludedWithSections', 'Lectures {{start}} to {{end}} & Sections {{secStart}} to {{secEnd}} included in midterm', {
                  start: subject.midtermRange.start,
                  end: subject.midtermRange.end,
                  secStart: subject.midtermSectionsRange.start,
                  secEnd: subject.midtermSectionsRange.end
                })
              ) : (
                t('detail.midtermIncluded', 'Lectures {{start}} to {{end}} included in midterm', {
                  start: subject.midtermRange.start,
                  end: subject.midtermRange.end
                })
              )}
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      <h1 className={`relative z-10 text-[40px] md:text-[64px] font-black tracking-tighter leading-[1.05] mb-6 flex flex-col items-center ${fontFamily}`}>
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, ${subject.color}, white)`
          }}
        >
          {isRtl && subject.nameAr ? subject.nameAr : subject.name}
        </span>
      </h1>

      {/* Subtitle */}
      <p className={`relative z-10 text-[16px] md:text-[20px] text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 font-medium ${fontFamily}`}>
        {isRtl && subject.descriptionAr ? subject.descriptionAr : subject.description}
      </p>

      {/* Actions */}
      <div className="relative z-10 flex flex-wrap gap-4 justify-center w-full mt-4 pb-4 px-4 overflow-x-auto">
        
        {/* Primary Button — Home/Lectures */}
        <a
          href="#lecture-list-start"
          className="h-12 px-6 rounded-full text-white font-bold flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg min-w-max"
          style={{ backgroundColor: subject.color }}
        >
          <BookOpen size={16} />
          {t('detail.startLearning', 'Start Learning')}
        </a>

        {/* Cheat Sheet Button (Conditional) */}
        {subject.hasCheatsheet && (
          <Link
            to={`/subjects/${subject.slug}/cheatsheet`}
            className="h-12 px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 min-w-max"
          >
            <Brain size={16} className="text-accent-400" />
            {t('detail.cheatsheet', 'Cheat Sheet')}
          </Link>
        )}

      </div>

    </div>
  )
}