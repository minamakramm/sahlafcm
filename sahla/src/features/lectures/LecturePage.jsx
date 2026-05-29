import React, { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TabBar } from '@/components/ui'
import { LockedLectureContent } from './components/LockedLectureContent'
import { LectureHeader } from './components/LectureHeader'
import { LectureNavigation } from './components/LectureNavigation'
import { ExplanationTab } from './components/ExplanationTab'
import { SummaryTab } from './components/SummaryTab'
import { MCQTab } from './components/MCQTab'
import { WrittenTab } from './components/WrittenTab'
import {
  getLectureData,
  getAdjacentLectures,
  getSubjectBySlug,
  getActiveDepartments,
} from '@/features/home/utils/staticData'
import { useLectureProgress, useUpdateProgress, useTimeTracker } from './hooks/useLectureProgress'
import { useAnalytics } from '@/hooks/useAnalytics'
import { useAuth } from '@/hooks/useAuth'
import { LecturePageSkeleton } from '@/components/feedback'
import { SubjectSidebar } from '@/features/subjects/components/SubjectSidebar'
import { Menu } from 'lucide-react'
import { FloatingMenuFab } from '@/components/ui'



export default function LecturePage() {
  const { subjectSlug, lectureNumber } = useParams()
  const { t, i18n } = useTranslation('lectures')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'
  const { isAuthenticated } = useAuth()
  const { track, EVENTS } = useAnalytics()

  // ─── State ──────────────────────────────────────────
  const [lecture, setLecture] = useState(null)
  const [subject, setSubject] = useState(null)
  const [adjacent, setAdjacent] = useState({ prev: null, next: null })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('explanation')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // ─── Supabase progress ──────────────────────────────
  const { progress } = useLectureProgress(
    lecture?.subjectId,
    lectureNumber
  )
  const { updateProgress } = useUpdateProgress(
    lecture?.subjectId,
    lectureNumber
  )
  useTimeTracker(lecture?.subjectId, lectureNumber)

  // ─── Load lecture data ──────────────────────────────
  useEffect(() => {
    let cancelled = false
    setIsLoading(true)
    setError(null)
    setActiveTab('explanation')

    const load = async () => {
      try {
        // 1. Find subject and department first
        const activeDepts = getActiveDepartments()
        let foundSubject = null
        let foundDeptSlug = null
        for (const dept of activeDepts) {
          const result = await getSubjectBySlug(dept.slug, subjectSlug)
          if (result) {
            foundSubject = result
            foundDeptSlug = dept.slug
            break
          }
        }

        if (cancelled) return
        if (!foundSubject) {
          setError('Subject not found')
          setIsLoading(false)
          return
        }
        setSubject(foundSubject)

        // 2. Load lecture data using the correct department
        const lectureData = await getLectureData(foundDeptSlug, subjectSlug, lectureNumber)

        if (cancelled) return
        if (!lectureData) {
          setError('Lecture not found')
          setIsLoading(false)
          return
        }
        setLecture(lectureData)

        // 3. Load adjacent lectures
        const adj = await getAdjacentLectures(
          foundDeptSlug,
          subjectSlug,
          lectureNumber
        )
        if (!cancelled) setAdjacent(adj)
      } catch (err) {
        console.error('[LecturePage] Load error:', err)
        if (!cancelled) setError('Failed to load lecture')
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [subjectSlug, lectureNumber])

  // ─── Analytics: lecture_view on mount ───────────────
  useEffect(() => {
    if (lecture) {
      track(EVENTS.LECTURE_VIEW, {
        subjectSlug,
        lectureNumber,
        lectureTitle: lecture.title,
      })
    }
  }, [lecture?.title]) // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Restore last visited tab ──────────────────────
  useEffect(() => {
    if (progress?.last_visited_tab) {
      setActiveTab(progress.last_visited_tab)
    }
  }, [progress?.last_visited_tab])

  // ─── Tab switch handler ────────────────────────────
  const handleTabChange = useCallback((tabId) => {
    setActiveTab(tabId)

    // Analytics
    track(EVENTS.LECTURE_TAB_SWITCH, {
      subjectSlug,
      lectureNumber,
      tab: tabId,
    })

    // Save tab in progress
    if (isAuthenticated) {
      updateProgress({ last_visited_tab: tabId })
    }
  }, [subjectSlug, lectureNumber, isAuthenticated, track, EVENTS, updateProgress])

  // ─── Loading state ─────────────────────────────────
  if (isLoading) {
    return (
      <div className="min-h-screen max-w-4xl mx-auto px-4 py-8">
        <LecturePageSkeleton />
      </div>
    )
  }

  // ─── Error state ───────────────────────────────────
  if (error || !lecture) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-tier-2 p-8 text-center max-w-md">
          <h2 className={`text-xl font-bold text-white mb-2 ${fontFamily}`}>
            {t('page.notFound', 'Lecture not found')}
          </h2>
          <p className={`text-white/50 ${fontFamily}`}>
            {t('page.notFoundDesc', 'The requested lecture could not be found.')}
          </p>
        </div>
      </div>
    )
  }

  // ─── Calculate Display Number ───────────────────────
  // We want the display number to match the sequential position in LectureList
  const theoryLectures = subject?.lectures?.filter(l => 
    l.type === 'lecture' || 
    (!l.type && !l.title.toLowerCase().includes('section') && !l.title.toLowerCase().includes('quiz') && !l.title.toLowerCase().includes('lab'))
  ) || []
  
  const practicalSections = subject?.lectures?.filter(l => 
    l.type === 'lab' || 
    (!l.type && (l.title.toLowerCase().includes('section') || l.title.toLowerCase().includes('lab')) && !l.title.toLowerCase().includes('quiz'))
  ) || []

  const isTheory = theoryLectures.some(l => String(l.number) === String(lectureNumber))
  const isPractical = practicalSections.some(l => String(l.number) === String(lectureNumber))
  
  let displayNumber = lectureNumber
  if (isTheory) {
    const idx = theoryLectures.findIndex(l => String(l.number) === String(lectureNumber))
    displayNumber = idx + 1
  } else if (isPractical) {
    const idx = practicalSections.findIndex(l => String(l.number) === String(lectureNumber))
    displayNumber = idx + 1
  }

  // ─── Page title ────────────────────────────────────
  const title = isAr && lecture.titleAr ? lecture.titleAr : lecture.title
  
  // Decide which translation key to use for the title
  let titleKey = 'page.title'
  const currentLectureEntry = subject?.lectures?.find(l => String(l.number) === String(lectureNumber))
  const lectureType = currentLectureEntry?.type || (isPractical ? 'lab' : 'lecture')

  if (lectureType === 'lab') titleKey = 'page.titleLab'
  else if (lectureType === 'quiz') titleKey = 'page.titleQuiz'
  
  const pageTitle = t(titleKey, {
    number: displayNumber,
    title: title,
  })

  // ─── Active tab content ────────────────────────────
  const renderTabContent = () => {
    if (!isAuthenticated) return <LockedLectureContent />

    switch (activeTab) {
      case 'explanation':
        return <ExplanationTab lecture={lecture} progress={progress} />
      case 'summary':
        return <SummaryTab lecture={lecture} progress={progress} />
      case 'mcq':
        return <MCQTab lecture={lecture} progress={progress} />
      case 'written':
        return <WrittenTab lecture={lecture} progress={progress} />
      default:
        return <ExplanationTab lecture={lecture} progress={progress} />
    }
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle} — {subject?.name || subjectSlug} | Sahla</title>
        <meta
          name="description"
          content={`Detailed notes, summary, and practice MCQs for ${title}. ${subject?.name || subjectSlug} university guide. Read, summarize, and practice exams.`}
        />
        <link rel="canonical" href={`https://sahla-study.web.app/subjects/${subjectSlug}/lecture/${lectureNumber}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Article", "LearningResource"],
            "headline": title,
            "description": `Detailed notes, summary, and practice MCQs for ${title}`,
            "educationalLevel": "University",
            "learningResourceType": "Lecture Notes",
            "provider": {
              "@type": "Organization",
              "name": "Sahla",
              "sameAs": "https://sahla-study.web.app/"
            },
            "author": {
              "@type": "Person",
              "name": "Mina Makram"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen max-w-[90rem] mx-auto px-2 sm:px-4 pt-2 pb-6 sm:py-8 flex flex-col lg:flex-row gap-4 lg:gap-8 items-start relative">
        <SubjectSidebar
          subject={subject}
          activeItem={lectureNumber}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <FloatingMenuFab 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          isOpen={isSidebarOpen} 
        />

        <div
          className="flex-1 w-full min-w-0 max-w-4xl mx-auto flex flex-col gap-3 animate-fade-in"
        >
          {/* Header */}
          <LectureHeader
            lecture={lecture}
            subject={subject}
            lectureNumber={displayNumber}
            totalLectures={isTheory ? theoryLectures.length : (isPractical ? practicalSections.length : (subject?.lectureCount || subject?.lectures?.length || 0))}
            onMenuClick={() => setIsSidebarOpen(true)}
            type={lectureType}
          />

          {/* Tab Bar */}
          <TabBar
            activeTab={activeTab}
            onChange={handleTabChange}
            className="sticky top-0 z-30"
          />

          {/* Tab Content */}
          <div key={activeTab} className="animate-fade-in">
            {renderTabContent()}
          </div>

          {/* Navigation */}
          <LectureNavigation
            subjectSlug={subjectSlug}
            prev={adjacent.prev}
            next={adjacent.next}
          />
        </div>
      </div>
    </>
  )
}
