import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SubjectHeader } from './components/SubjectHeader'
import { LectureList } from './components/LectureList'
import { ExamCard } from './components/ExamCard'
import { LecturePageSkeleton } from '@/components/feedback'
import {
  getSubjectBySlug,
  getExamData,
  getDepartmentBySlug,
  getActiveDepartments,
} from '@/features/home/utils/staticData'
import { useAnalytics } from '@/hooks/useAnalytics'
import { useSubjectProgress } from '@/features/lectures/hooks/useLectureProgress'

export default function SubjectPage() {
  const { subjectSlug } = useParams()
  const { t, i18n } = useTranslation('subjects')
  const { track, EVENTS } = useAnalytics()
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'

  const [subject, setSubject] = useState(null)
  const [department, setDepartment] = useState(null)
  const [examData, setExamData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { progressMap } = useSubjectProgress(subject?.subjectId || subject?.id)

  useEffect(() => {
    let cancelled = false
    setIsLoading(true)

    const load = async () => {
      try {
        // Search for the subject across active departments
        const activeDepts = getActiveDepartments()
        let foundSubject = null
        let foundDept = null

        for (const dept of activeDepts) {
          const result = await getSubjectBySlug(dept.slug, subjectSlug)
          if (result) {
            foundSubject = result
            foundDept = getDepartmentBySlug(dept.slug)
            break
          }
        }

        if (cancelled) return

        setSubject(foundSubject)
        setDepartment(foundDept)

        // Try to load exam data
        if (foundSubject?.hasExam) {
          try {
            const exam = await getExamData(foundDept.slug, subjectSlug)
            if (!cancelled) setExamData(exam)
          } catch {
            // Exam data may not exist yet
          }
        }
      } catch (err) {
        console.error('[SubjectPage] Load error:', err)
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [subjectSlug])

  useEffect(() => {
    if (subject) {
      track(EVENTS.SUBJECT_OPEN, {
        subjectSlug,
        subjectName: subject.name,
      })
    }
  }, [subject?.slug, track, EVENTS])

  if (isLoading) {
    return (
      <div className="min-h-screen max-w-4xl mx-auto px-4 py-8">
        <LecturePageSkeleton />
      </div>
    )
  }

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-tier-2 p-8 text-center max-w-md">
          <h2 className={`text-xl font-bold text-white mb-2 ${fontFamily}`}>
            {t('detail.notFound', 'Subject not found')}
          </h2>
          <p className={`text-white/50 ${fontFamily}`}>
            {t('detail.notFoundDesc', 'The requested subject could not be found.')}
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{subject.name} Notes — Learn {subject.name} online | Sahla</title>
        <meta name="description" content={`Master ${subject.name} fundamentals with structured lectures, key-point summaries, and ${subject.hasExam ? 'practice exams' : 'MCQs'}. ${subject.description}`} />
        <link rel="canonical" href={`https://sahla-study.web.app/subjects/${subject.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": subject.name,
            "description": subject.description,
            "provider": {
              "@type": "Organization",
              "name": "Sahla",
              "sameAs": "https://sahla-study.web.app/"
            },
            "courseCode": subject.code || "",
            "numberOfCredits": 3
          })}
        </script>
      </Helmet>

      <div
        className="min-h-screen max-w-6xl mx-auto px-4 py-8 flex flex-col gap-12 animate-fade-in"
      >
        <SubjectHeader subject={subject} department={department} />

        <LectureList
          lectures={subject.lectures}
          departmentSlug={department?.slug}
          subjectSlug={subject.slug}
          subjectColor={subject.color}
          hasExam={subject.hasExam}
          examData={examData}
          progressMap={progressMap}
          midtermRange={subject.midtermRange}
          midtermSectionsRange={subject.midtermSectionsRange}
        />
      </div>
    </>
  )
}
