import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowLeft, BookOpen, Brain, Ruler, Search, 
  MessageSquare, HelpCircle, Network, Lightbulb, 
  Database, Activity, Code 
} from 'lucide-react'
import { 
  getCheatsheetData, 
  getSubjectBySlug, 
  getActiveDepartments 
} from '@/features/home/utils/staticData'
import { Button } from '@/components/ui'
import { LecturePageSkeleton } from '@/components/feedback'
import { renderMath } from '@/utils/mathRenderer'

const iconMap = {
  Brain: Brain,
  Ruler: Ruler,
  Search: Search,
  MessageSquare: MessageSquare,
  Network: Network,
  Lightbulb: Lightbulb,
  Database: Database,
  Activity: Activity,
  Code: Code,
}

export default function CheatsheetPage() {
  const { subjectSlug } = useParams()
  const { t, i18n } = useTranslation('subjects')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  const [cheatsheet, setCheatsheet] = useState(null)
  const [subject, setSubject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setIsLoading(true)

    const load = async () => {
      try {
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
          setIsLoading(false)
          return
        }

        setSubject(foundSubject)

        const data = await getCheatsheetData(foundDeptSlug, subjectSlug)
        if (!cancelled) setCheatsheet(data)
      } catch (err) {
        console.error('[CheatsheetPage] Load error:', err)
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [subjectSlug])

  if (isLoading) {
    return (
      <div className="min-h-screen max-w-4xl mx-auto px-4 py-8">
        <LecturePageSkeleton />
      </div>
    )
  }

  if (!cheatsheet || !subject) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-tier-2 p-8 text-center max-w-md">
          <h2 className={`text-xl font-bold text-white mb-2 ${fontFamily}`}>
            {t('cheatsheet.notFound', 'Cheatsheet Not Found')}
          </h2>
          <p className={`text-white/50 ${fontFamily}`}>
            {t('cheatsheet.notFoundDesc', 'No quick reference available for this subject yet.')}
          </p>
          <Link to={`/subjects/${subjectSlug}`} className="mt-6 block">
            <Button variant="outline">{t('navigation.backToSubject', 'Back to Subject')}</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{subject.name} — Cheat Sheet | Sahla</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen max-w-5xl mx-auto px-4 py-8 flex flex-col gap-8"
      >
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <Link
            to={`/subjects/${subjectSlug}`}
            className={`inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors w-fit ${fontFamily}`}
          >
            <ArrowLeft size={16} className={isAr ? 'rotate-180' : ''} />
            {t('navigation.backToSubject', 'Back to Subject')}
          </Link>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-accent-500 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#a5b4fc]">
                Quick Reference
              </span>
            </div>
            <h1 className={`text-3xl md:text-4xl font-black text-white ${fontFamily}`}>
              {isAr ? 'ملخص القواعد والمفاهيم' : 'Cheat Sheet'}
            </h1>
            <p className="text-white/40 max-w-2xl text-sm md:text-base">
              {subject.name} — Essential formulas, keys, and concepts for quick revision.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          {Array.isArray(cheatsheet) && cheatsheet.map((section, idx) => {
            const Icon = iconMap[section.icon] || HelpCircle
            return (
              <motion.div
                key={section.id || idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-tier-2 overflow-hidden flex flex-col group hover:border-white/20 transition-all duration-300"
              >
                {/* Section Header */}
                <div className="p-5 border-b border-white/5 bg-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-accent-500/10 text-accent-400">
                      <Icon size={20} />
                    </div>
                    <h2 className={`font-bold text-lg text-white ${fontFamily}`}>
                      {isAr && section.categoryAr ? section.categoryAr : section.category}
                    </h2>
                  </div>
                </div>

                {/* Items List */}
                <div className="p-6 flex flex-col gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col gap-1.5 border-l-2 border-white/5 pl-4 hover:border-accent-500/30 transition-colors">
                      <span className={`text-xs font-bold text-accent-300/80 uppercase tracking-wide ${fontFamily}`}>
                        {isAr && item.labelAr ? item.labelAr : item.label}
                      </span>
                      <p 
                        className={`text-sm md:text-base text-white/80 leading-relaxed font-medium ${fontFamily}`}
                        dangerouslySetInnerHTML={{ __html: renderMath(item.content) }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </>
  )
}
