import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { LectureCard } from './LectureCard'
import { ExamCard } from './ExamCard'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

export const LectureList = ({ lectures, subjectSlug, departmentSlug, subjectColor, hasExam, examData, progressMap = {}, midtermRange, midtermSectionsRange }) => {
  const { t, i18n } = useTranslation('subjects')
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'

  if (!lectures || lectures.length === 0) {
    return (
      <div className="glass-tier-1 p-8 text-center rounded-[20px]">
        <p className={`text-white/50 ${fontFamily}`}>
          {t('detail.noLectures', 'No lectures available yet.')}
        </p>
      </div>
    )
  }

  const theoryLectures = lectures.filter(l => 
    l.type === 'lecture' || 
    (!l.type && !l.title.toLowerCase().includes('section') && !l.title.toLowerCase().includes('quiz') && !l.title.toLowerCase().includes('lab'))
  )
  const practicalSections = lectures.filter(l => 
    l.type === 'lab' || 
    (!l.type && (l.title.toLowerCase().includes('section') || l.title.toLowerCase().includes('lab')) && !l.title.toLowerCase().includes('quiz'))
  )
  const quizzes = lectures.filter(l => 
    l.type === 'quiz' || 
    (!l.type && l.title.toLowerCase().includes('quiz'))
  )

  return (
    <div className="flex flex-col gap-10" id="lecture-list-start">
      {/* Theory Sections */}
      {theoryLectures.length > 0 && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 px-2">
            <h2 className={`text-xl font-bold text-white flex items-center gap-3 ${fontFamily}`}>
              <BookOpen className="text-accent-400" size={24} />
              {i18n.language === 'ar' ? 'المحاضرات النظرية' : 'Theoretic Lectures'}
            </h2>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {theoryLectures.map((lecture, index) => {
              const isMidtermIncluded = midtermRange && 
                lecture.type === 'lecture' && 
                Number(lecture.number) >= midtermRange.start && 
                Number(lecture.number) <= midtermRange.end;

              return (
                <LectureCard
                  key={lecture.number}
                  lecture={lecture}
                  departmentSlug={departmentSlug}
                  subjectSlug={subjectSlug}
                  subjectColor={subjectColor}
                  index={index}
                  customLabel={lecture.indexLabel || (i18n.language === 'ar' ? 'المحاضرة' : 'Lecture')}
                  customNumber={lecture.displayNumber || index + 1}
                  progress={progressMap[lecture.number]}
                  isMidtermIncluded={isMidtermIncluded}
                />
              );
            })}
          </motion.div>
        </div>
      )}

      {/* Practical Sections */}
      {practicalSections.length > 0 && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 px-2">
            <h2 className={`text-xl font-bold text-white flex items-center gap-3 ${fontFamily}`}>
              <BookOpen className="text-secondary-400" size={24} />
              {i18n.language === 'ar' ? 'الأقسام العملية (Section)' : 'Practical Sections'}
            </h2>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {practicalSections.map((lecture, index) => {
              const visualNumber = index + 1;
              const isMidtermIncluded = midtermSectionsRange && 
                visualNumber >= midtermSectionsRange.start && 
                visualNumber <= midtermSectionsRange.end;

              return (
                <LectureCard
                  key={lecture.number}
                  lecture={lecture}
                  departmentSlug={departmentSlug}
                  subjectSlug={subjectSlug}
                  subjectColor={subjectColor}
                  index={index + theoryLectures.length}
                  customLabel={lecture.indexLabel || (lecture.type === 'lab' ? (i18n.language === 'ar' ? 'المختبر' : 'Lab') : (i18n.language === 'ar' ? 'القسم' : 'Section'))}
                  customNumber={lecture.displayNumber || index + 1}
                  progress={progressMap[lecture.number]}
                  isMidtermIncluded={isMidtermIncluded}
                />
              );
            })}
          </motion.div>
        </div>
      )}
      {/* Quizzes Section */}
      {quizzes.length > 0 && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 px-2">
            <h2 className={`text-xl font-bold text-white flex items-center gap-3 ${fontFamily}`}>
              <BookOpen className="text-amber-400" size={24} />
              {i18n.language === 'ar' ? 'الاختبارات القصيرة' : 'Quizzes'}
            </h2>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {quizzes.map((lecture, index) => (
              <LectureCard
                key={lecture.number}
                lecture={lecture}
                departmentSlug={departmentSlug}
                subjectSlug={subjectSlug}
                subjectColor={subjectColor}
                index={index + theoryLectures.length + practicalSections.length}
                customLabel={i18n.language === 'ar' ? 'اختبار' : 'Quiz'}
                customNumber={String(lecture.number).toLowerCase().replace('quiz', '') || index + 1}
                progress={progressMap[lecture.number]}
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* Exam Section */}
      {hasExam && (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 px-2">
            <h2 className={`text-xl font-bold text-white flex items-center gap-3 ${fontFamily}`}>
              <BookOpen className="text-rose-400" size={24} />
              {i18n.language === 'ar' ? 'التقييم النهائي' : 'Final Assessment'}
            </h2>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <ExamCard subjectSlug={subjectSlug} examData={examData} />
        </div>
      )}
    </div>
  )
}
