import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { BookOpen, FlaskConical, GraduationCap, X, ChevronRight, Layers, Sparkles } from 'lucide-react'

export const SubjectSidebar = ({ subject, activeItem, isOpen, onClose }) => {
  const { t, i18n } = useTranslation('lectures')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'
  const [isHovered, setIsHovered] = useState(false)
  const sidebarRef = useRef(null)
  const activeRef = useRef(null)

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  // Scroll active item into view within sidebar
  useEffect(() => {
    if (activeRef.current && sidebarRef.current) {
      const timer = setTimeout(() => {
        activeRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [activeItem])

  // Categorize lectures into theory and practical
  const { theoryLectures, practicalSections } = useMemo(() => {
    if (!subject?.lectures) return { theoryLectures: [], practicalSections: [] }
    const theory = subject.lectures.filter(l =>
      l.type === 'lecture' ||
      (!l.type && !l.title.toLowerCase().includes('section') && !l.title.toLowerCase().includes('lab') && !l.title.toLowerCase().includes('quiz'))
    )
    const practical = subject.lectures.filter(l =>
      l.type === 'lab' ||
      (!l.type && (l.title.toLowerCase().includes('section') || l.title.toLowerCase().includes('lab')) && !l.title.toLowerCase().includes('quiz'))
    )
    return { theoryLectures: theory, practicalSections: practical }
  }, [subject?.lectures])

  if (!subject) return null

  const isExamPage = activeItem === 'exam'

  // Extract a clean short title (remove "Lecture X:" or "Section X:" prefix)
  const getShortTitle = (lecture) => {
    const title = isAr && lecture.titleAr ? lecture.titleAr : lecture.title
    return title
      .replace(/^(Lecture|Section|Lab|القسم|المحاضرة|قسم)\s*\d+\s*[:：\-–]\s*/i, '')
      .trim()
  }

  // Get display number within its category
  const getDisplayNumber = (lecture, list) => {
    const idx = list.findIndex(l => String(l.number) === String(lecture.number))
    return idx + 1
  }

  const renderLectureItem = (lecture, list, isExpanded) => {
    const isActive = String(activeItem) === String(lecture.number)
    const isLab = lecture.type === 'lab' || lecture.title?.toLowerCase().includes('section') || lecture.title?.toLowerCase().includes('lab')
    const displayNum = getDisplayNumber(lecture, list)
    const shortTitle = getShortTitle(lecture)

    return (
      <Link
        key={lecture.number}
        to={`/subjects/${subject.slug}/lecture/${lecture.number}`}
        onClick={onClose}
        ref={isActive ? activeRef : null}
        className="group relative block"
      >
        <motion.div
          whileHover={{ x: isAr ? -3 : 3 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className={`flex items-center gap-3 p-2 rounded-xl transition-all duration-300 relative ${
            isActive
              ? 'bg-accent-500/15'
              : 'hover:bg-white/[0.04]'
          }`}
        >
          {/* Active indicator bar */}
          {isActive && (
            <motion.div
              layoutId="sidebar-active-bar"
              className={`absolute ${isAr ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full'} top-1/2 -translate-y-1/2 w-[3px] h-6`}
              style={{ background: isLab ? 'linear-gradient(180deg, #67e8f9, #06b6d4)' : 'linear-gradient(180deg, #a78bfa, #7c3aed)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}

          {/* Number badge */}
          <div
            className={`relative flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg text-xs font-bold transition-all duration-300 ${
              isActive
                ? isLab
                  ? 'bg-cyan-500 text-white shadow-[0_0_14px_rgba(6,182,212,0.5)]'
                  : 'bg-accent-500 text-white shadow-[0_0_14px_rgba(139,92,246,0.5)]'
                : 'bg-white/[0.06] text-white/35 group-hover:bg-white/[0.1] group-hover:text-white/60'
            }`}
          >
            {displayNum}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.25), transparent)' }}
                animate={{ opacity: [0.6, 0.2, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
          </div>

          {/* Text content */}
          <div className={`flex flex-col min-w-0 transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden absolute'}`}>
            <span className={`text-[10px] font-semibold uppercase tracking-widest transition-colors ${
              isActive
                ? isLab ? 'text-cyan-400' : 'text-accent-400'
                : 'text-white/20 group-hover:text-white/35'
            }`}>
              {isLab
                ? t('sidebar.lab', 'Section')
                : t('sidebar.lecture', 'Lecture')
              }
            </span>
            <span className={`text-[13px] font-medium truncate max-w-[160px] transition-colors leading-tight ${
              isActive ? 'text-white' : 'text-white/55 group-hover:text-white/85'
            }`}>
              {shortTitle}
            </span>
          </div>

          {/* Active dot */}
          {isActive && isExpanded && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`${isAr ? 'mr-auto' : 'ml-auto'} flex-shrink-0`}
            >
              <div className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px_rgba(167,139,250,0.8)] ${isLab ? 'bg-cyan-400' : 'bg-accent-400'}`} />
            </motion.div>
          )}
        </motion.div>
      </Link>
    )
  }

  const renderNavLinks = (isExpanded = true) => (
    <div className={`flex flex-col ${isExpanded ? 'p-3.5' : 'p-2 pt-3'}`}>
      {/* Course Title (Mobile Only Header) */}
      <div className="lg:hidden flex items-center justify-between mb-5 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${subject.color || '#7c3aed'}, ${subject.color || '#7c3aed'}cc)` }}>
            <Layers size={18} className="text-white" />
          </div>
          <div>
            <h2 className={`text-base font-bold text-white leading-tight ${fontFamily}`}>
              {subject.nameAr && isAr ? subject.nameAr : subject.name}
            </h2>
            <span className="text-[11px] text-white/40 font-medium">
              {subject.lectures?.length || 0} {t('sidebar.items', 'items')}
            </span>
          </div>
        </div>
        <button onClick={onClose} className="p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all">
          <X size={18} />
        </button>
      </div>

      {/* Desktop mini header (collapsed) */}
      {!isExpanded && (
        <div className="flex justify-center mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: `linear-gradient(135deg, ${subject.color || '#7c3aed'}, ${subject.color || '#7c3aed'}cc)` }}>
            <Layers size={18} className="text-white" />
          </div>
        </div>
      )}

      {/* Desktop expanded header */}
      {isExpanded && (
        <div className="hidden lg:flex items-center gap-3 mb-4 px-0.5">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: `linear-gradient(135deg, ${subject.color || '#7c3aed'}, ${subject.color || '#7c3aed'}cc)` }}>
            <Layers size={15} className="text-white" />
          </div>
          <div className="min-w-0">
            <h3 className={`text-[13px] font-bold text-white truncate leading-tight ${fontFamily}`}>
              {subject.nameAr && isAr ? subject.nameAr : subject.name}
            </h3>
            <span className="text-[10px] text-white/25 font-medium">
              {subject.code || ''}
            </span>
          </div>
        </div>
      )}

      {/* ─── THEORY LECTURES ─── */}
      {theoryLectures.length > 0 && (
        <>
          <div className={`flex items-center gap-2 mb-1.5 px-1 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
            <BookOpen size={11} className="text-white/25" />
            <span className="text-[10px] font-bold text-white/25 uppercase tracking-[0.15em]">
              {t('sidebar.lectures', 'Lectures')}
            </span>
            <span className="text-[10px] font-medium text-white/15 ml-auto tabular-nums">
              {theoryLectures.length}
            </span>
          </div>
          {!isExpanded && (
            <div className="flex justify-center mb-1.5">
              <BookOpen size={13} className="text-white/25" />
            </div>
          )}
          <div className="flex flex-col gap-px mb-3">
            {theoryLectures.map((lecture) => renderLectureItem(lecture, theoryLectures, isExpanded))}
          </div>
        </>
      )}

      {/* ─── PRACTICAL SECTIONS ─── */}
      {practicalSections.length > 0 && (
        <>
          <div className={`flex items-center gap-2 mb-1.5 px-1 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
            <FlaskConical size={11} className="text-white/25" />
            <span className="text-[10px] font-bold text-white/25 uppercase tracking-[0.15em]">
              {t('sidebar.sections', 'Sections')}
            </span>
            <span className="text-[10px] font-medium text-white/15 ml-auto tabular-nums">
              {practicalSections.length}
            </span>
          </div>
          {!isExpanded && (
            <div className="flex justify-center mb-1.5 mt-1.5">
              <FlaskConical size={13} className="text-white/25" />
            </div>
          )}
          <div className="flex flex-col gap-px mb-3">
            {practicalSections.map((lecture) => renderLectureItem(lecture, practicalSections, isExpanded))}
          </div>
        </>
      )}

      {/* ─── DIVIDER ─── */}
      <div className={`mx-1 mb-2 border-t border-white/[0.06] transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-50'}`} />

      {/* ─── ASSESSMENTS ─── */}
      {subject.hasExam && (
        <>
          <div className={`flex items-center gap-2 mb-1.5 px-1 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
            <Sparkles size={11} className="text-white/25" />
            <span className="text-[10px] font-bold text-white/25 uppercase tracking-[0.15em]">
              {t('sidebar.assessments', 'Assessments')}
            </span>
          </div>

          <Link
            to={`/subjects/${subject.slug}/exam`}
            onClick={onClose}
            ref={isExamPage ? activeRef : null}
            className="group relative block"
          >
            <motion.div
              whileHover={{ x: isAr ? -3 : 3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className={`flex items-center ${isExpanded ? 'gap-3' : 'justify-center'} p-2 rounded-xl transition-all duration-300 relative ${
                isExamPage
                  ? 'bg-emerald-500/15'
                  : 'hover:bg-white/[0.04]'
              }`}
            >
              {/* Active indicator bar */}
              {isExamPage && (
                <motion.div
                  layoutId="sidebar-active-bar"
                  className={`absolute ${isAr ? 'right-0 rounded-l-full' : 'left-0 rounded-r-full'} top-1/2 -translate-y-1/2 w-[3px] h-6`}
                  style={{ background: 'linear-gradient(180deg, #6ee7b7, #10b981)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              <div className={`relative flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg transition-all duration-300 ${
                isExamPage
                  ? 'bg-emerald-500 text-white shadow-[0_0_14px_rgba(16,185,129,0.5)]'
                  : 'bg-white/[0.06] text-white/35 group-hover:bg-white/[0.1] group-hover:text-emerald-400'
              }`}>
                <GraduationCap size={16} />
                {isExamPage && (
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.25), transparent)' }}
                    animate={{ opacity: [0.6, 0.2, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </div>

              <div className={`flex flex-col min-w-0 transition-all duration-300 ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden absolute'}`}>
                <span className={`text-[13px] font-semibold transition-colors ${
                  isExamPage ? 'text-emerald-300' : 'text-white/55 group-hover:text-white/85'
                }`}>
                  {t('sidebar.finalExam', 'Practice Exam')}
                </span>
                <span className={`text-[10px] transition-colors ${
                  isExamPage ? 'text-emerald-400/50' : 'text-white/20'
                }`}>
                  50 MCQ
                </span>
              </div>

              {isExpanded && (
                <ChevronRight
                  size={13}
                  className={`${isAr ? 'mr-auto rotate-180' : 'ml-auto'} flex-shrink-0 transition-all duration-300 ${
                    isExamPage
                      ? 'text-emerald-400'
                      : 'text-white/15 group-hover:text-white/35 group-hover:translate-x-0.5'
                  }`}
                />
              )}
            </motion.div>
          </Link>
        </>
      )}
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar — Sticky + Collapsible on Hover */}
      <motion.aside
        ref={sidebarRef}
        initial={false}
        animate={{
          width: isHovered ? 272 : 72,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 250 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden lg:flex flex-col flex-shrink-0 sticky top-20 self-start h-[calc(100vh-7rem)] rounded-2xl border border-white/[0.08] shadow-2xl mt-4 z-40 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
        }}
      >
        {/* Scrollable content with fade masks */}
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide w-full h-full pb-8"
        >
          {renderNavLinks(isHovered)}
        </div>
      </motion.aside>

      {/* Mobile Drawer (Overlay + Slide-in) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-[240] bg-black/70 backdrop-blur-md lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: isAr ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isAr ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className={`fixed top-20 bottom-[115px] ${isAr ? 'right-3' : 'left-3'} z-[250] w-[calc(100vw-1.5rem)] max-w-[300px] rounded-[2rem] border border-white/[0.1] overflow-y-auto hide-scrollbar lg:hidden`}
              style={{
                background: 'linear-gradient(180deg, rgba(18,18,32,0.98) 0%, rgba(10,10,22,0.99) 100%)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                boxShadow: '0 25px 60px -12px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              <div className="min-h-full py-3 relative">
                {/* Decorative glow */}
                <div className={`absolute top-0 ${isAr ? 'left-0' : 'right-0'} w-36 h-36 rounded-full pointer-events-none`} style={{ background: `radial-gradient(circle, ${subject.color || '#7c3aed'}15 0%, transparent 70%)` }} />
                <div className="relative z-10">
                  {renderNavLinks(true)}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
