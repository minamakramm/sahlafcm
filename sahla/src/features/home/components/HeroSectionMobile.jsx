import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Search, Sparkles, Users, Zap } from 'lucide-react'
import { SearchModal } from '@/components/layout/SearchModal'
import { useThemeStore } from '@/stores/themeStore'
import { useHeroEntrance } from '@/hooks/useHeroEntrance'

// ─── Stat component ───────────────────────────────────────────────────────────
const Stat = ({ value, label }) => {
  const resolvedTheme = useThemeStore((s) => s.resolvedTheme)
  const isDark = resolvedTheme === 'dark'

  return (
    <div className="
      relative flex aspect-square flex-col items-center justify-center gap-1 rounded-[16px] 
      border border-[var(--glass-tier-1-border)] 
      px-2 py-2 backdrop-blur-xl overflow-hidden group hero-stat
      transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/30
    "
    style={{
      background: isDark ? 'rgba(26, 25, 40, 0.4)' : 'rgba(255, 255, 255, 0.6)'
    }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className={`font-display text-[22px] font-black leading-none tracking-tight relative z-10 transition-transform duration-300 group-hover:scale-110 
        ${isDark ? 'text-white drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]' : 'text-gray-900'}`}>
        {value}
      </span>
      <span className={`text-center text-[10px] font-black leading-tight uppercase tracking-[0.1em] relative z-10
        ${isDark ? 'text-accent-400/70' : 'text-accent-600'}`}>
        {label}
      </span>
    </div>
  )
}

// ─── Component ─────────────────────────────────────────────────────────────────
const HeroSectionMobileInner = () => {
  const { t, i18n } = useTranslation('common')
  const navigate = useNavigate()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const isAr = i18n.language === 'ar'

  const resolvedTheme = useThemeStore((s) => s.resolvedTheme)
  const isDark = resolvedTheme === 'dark'

  const scrollToSubjects = () => {
    const el = document.getElementById('subject-grid')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/')
    }
  }

  const containerRef = useHeroEntrance()

  return (
    <section
      ref={containerRef}
      className="
        relative flex w-full flex-col items-center
        px-7 pb-8 pt-0
        sm:hidden
      "
      dir={isAr ? 'rtl' : 'ltr'}
    >
      {/* Drift animations are defined in index.css — GPU-composited */}

      {/* ── Status bar spacer ── */}
      <div className="h-[env(safe-area-inset-top,16px)]" />

      {/* ── Content with GSAP animation ── */}
      <div
        className="
          relative z-10 flex w-full max-w-sm flex-col
          items-center pt-4 text-center
        "
      >
        {/* Recruitment Announcement Banner (Mobile Holographic) */}
        <div className="mb-8 flex justify-center w-full hero-badge">
          <button
            onClick={() => navigate('/collaborate')}
            className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-full w-full max-w-[320px]
              backdrop-blur-3xl border transition-all duration-300 shadow-xl active:scale-[0.96]
              ${isDark ? 'bg-[#0a0a0f]/60 border-white/10' : 'bg-white/70 border-black/5 shadow-md'}`}
          >
            {/* Glass Orbs (Compact) */}
            <div className="flex items-center -space-x-1.5 flex-shrink-0">
              {[
                { icon: <Users size={9} />, color: 'from-indigo-500 to-blue-500' },
                { icon: <Sparkles size={9} />, color: 'from-blue-400 to-cyan-400' },
                { icon: <Zap size={9} />, color: 'from-fuchsia-500 to-pink-500' },
              ].map(({ icon, color }, i) => (
                <div 
                  key={i}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-white
                    bg-gradient-to-br ${color} relative shadow-md border-[1.5px] ${isDark ? 'border-[#0f0e1a]' : 'border-white'}`}
                >
                  {icon}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-0 min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1 w-1 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1 w-1 bg-indigo-500"></span>
                </span>
                <span className={`text-[8px] font-black uppercase tracking-[0.15em] truncate ${isAr ? 'font-arabic' : 'font-sans'}
                  ${isDark ? 'text-indigo-400/80' : 'text-indigo-600'}`}>
                  {isAr ? 'فرصة انضمام' : 'Recruitment Open'}
                </span>
              </div>
              <span className={`text-[11.5px] font-bold tracking-tight leading-tight text-left ${isAr ? 'font-arabic text-right' : 'font-sans'}
                ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                {t('hero.recruitmentBanner')}
              </span>
            </div>

            <ArrowRight size={12} className={`flex-shrink-0 ${isDark ? 'text-white/30' : 'text-gray-400'} ${isAr ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <h1
          className="
            mb-2 w-full font-display text-[56px]
            font-black leading-[1.05] tracking-tight
          "
        >
          <span className="block text-[var(--text-primary)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] hero-title-line">
            {t('hero.line1', 'Master Hard')}
          </span>
          <span className={`
            relative block bg-clip-text text-transparent pb-1 drop-shadow-sm
            ${isDark ? 'bg-gradient-to-r from-accent-400 via-accent-200 to-secondary-400' : 'bg-gradient-to-r from-accent-600 via-accent-500 to-secondary-600'}
            hero-title-line
          `}>
            {t('hero.line2', 'University Subjects')}
            {/* Subtle glow behind the gradient text */}
            <span className={`absolute inset-0 block blur-2xl opacity-20 select-none pointer-events-none ${isDark ? 'bg-gradient-to-r from-accent-400 to-secondary-400' : 'bg-gradient-to-r from-accent-600 to-secondary-600'}`} />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="
            mx-auto mb-8 max-w-[280px] text-[14.5px]
            font-medium leading-relaxed text-[var(--text-secondary)]
            hero-subtitle
          "
        >
          {t(
            'hero.subtitle',
            'AI & CS Lecture Notes, Quizzes & Exams for University'
          )}
        </p>

        {/* Primary CTA */}
        <button
          onClick={scrollToSubjects}
          className="
            group relative mb-3.5 flex w-full max-w-[280px] items-center justify-center
            gap-2 rounded-full bg-accent-500 py-4 text-[15px] font-bold text-white
            shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)] transition-all
            hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.7)]
            active:scale-95 hero-cta
          "
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/25" />
          <span className="relative z-10 flex items-center gap-2">
            {t('nav.subjects', 'Browse Subjects')}
            <ArrowRight
              size={16}
              strokeWidth={3}
              className={`flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`}
            />
          </span>
        </button>

        {/* Secondary CTA */}
        <button
          onClick={() => navigate('/about')}
          className="
            mb-8 text-[13.5px] font-medium text-[var(--text-tertiary)]
            transition-colors duration-200 hover:text-[var(--text-primary)]
            hero-cta
          "
        >
          {t('actions.learnMore', 'Learn More')}
        </button>

        {/* Search bar */}
        <div 
          onClick={() => setIsSearchOpen(true)}
          className="mb-6 w-full max-w-[295px] relative group cursor-pointer hero-search" 
        >
          {/* External glow matching desktop search bar */}
          <div className="
            absolute -inset-1.5
            bg-gradient-to-r from-accent-500/25 to-secondary-500/25
            blur-2xl opacity-0 group-hover:opacity-100 group-active:opacity-100
            transition duration-500 pointer-events-none rounded-2xl
          " />
          
          <div className="
            relative z-10 group flex items-center gap-2.5 rounded-2xl
            border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-3.5
            backdrop-blur-xl transition-all hover:bg-[var(--bg-elevated)] hover:border-[var(--border-default)]
          ">
            <Search size={15} strokeWidth={2.5} className="flex-shrink-0 text-[var(--text-tertiary)] transition-colors group-hover:text-accent-500" />
            <span className="flex-1 text-[13.5px] font-medium text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]">
              {t('search.searchPlaceholder', 'Search a subject...')}
            </span>
            <kbd className="
              rounded-[6px] border border-[var(--border-subtle)]
              bg-[var(--bg-subtle)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--text-tertiary)]
              transition-colors group-hover:text-[var(--text-secondary)] group-hover:bg-[var(--bg-elevated)] group-hover:border-[var(--border-default)]
            ">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid w-full max-w-[295px] grid-cols-4 gap-2"
        >
          <div className="hero-stat"><Stat value="6" label={t('stats.subjects', 'Subjects')} /></div>
          <div className="hero-stat"><Stat value="50+" label={t('stats.lectures', 'Lectures')} /></div>
          <div className="hero-stat"><Stat value="600+" label={t('stats.mcqs', 'MCQ')} /></div>
          <div className="hero-stat"><Stat value="6" label={t('stats.exams', 'Midterm')} /></div>
        </div>

        {/* Home-indicator pill */}
        <div className="mt-7 h-1 w-12 rounded-full bg-[var(--text-disabled)] opacity-50" />

      </div>
      
      {isSearchOpen && <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
    </section>
  )
}

export const HeroSectionMobile = memo(HeroSectionMobileInner)

export default HeroSectionMobile
