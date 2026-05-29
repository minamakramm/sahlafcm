import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, FileText, CheckSquare, Award } from 'lucide-react'
import { StaggerGrid, AnimatedSectionHeader } from '@/components/animation'

const features = [
  {
    icon: BookOpen,
    titleKey: 'features.explanations.title',
    defaultTitle: 'Clear Explanations',
    descKey: 'features.explanations.desc',
    defaultDesc: 'Detailed lecture breakdowns in both English and Arabic.',
    color: '#6366f1',
  },
  {
    icon: FileText,
    titleKey: 'features.summaries.title',
    defaultTitle: 'Smart Summaries',
    descKey: 'features.summaries.desc',
    defaultDesc: 'Concise key-point summaries for quick revision.',
    color: '#8b5cf6',
  },
  {
    icon: CheckSquare,
    titleKey: 'features.mcq.title',
    defaultTitle: 'MCQ Practice',
    descKey: 'features.mcq.desc',
    defaultDesc: 'Multiple-choice questions with instant feedback.',
    color: '#ec4899',
  },
  {
    icon: Award,
    titleKey: 'features.exam.title',
    defaultTitle: 'Final Exam',
    descKey: 'features.exam.desc',
    defaultDesc: 'Timed practice exams to prepare for the real thing.',
    color: '#f59e0b',
  },
]

const FeaturesSectionInner = () => {
  const { t, i18n } = useTranslation('common')
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'

  return (
    <section className="pt-0 pb-20 px-4 max-w-6xl mx-auto w-full">
      <AnimatedSectionHeader
        badge={t('features.label', 'Platform')}
        title={t('features.title', 'Everything You Need. Seriously.')}
        className="mb-8"
      />

      <StaggerGrid
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        staggerAmount={0.08}
      >
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.titleKey}
              data-stagger
              className="glass-tier-2 glass-highlight p-8 flex flex-col items-start gap-5 rounded-[24px] group transition-all"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center glass-tier-1 group-hover:scale-110 transition-transform shadow-lg"
                style={{ color: feature.color }}
              >
                <Icon size={28} />
              </div>
              <div>
                <h3 className={`text-xl font-bold text-[var(--text-primary)] mb-2 ${fontFamily}`}>
                  {t(feature.titleKey, feature.defaultTitle)}
                </h3>
                <p className={`text-sm text-[var(--text-secondary)] leading-relaxed ${fontFamily}`}>
                  {t(feature.descKey, feature.defaultDesc)}
                </p>
              </div>
            </div>
          )
        })}
      </StaggerGrid>
    </section>
  )
}

export const FeaturesSection = memo(FeaturesSectionInner)
