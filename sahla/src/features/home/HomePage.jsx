import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { HeroSection } from './components/HeroSection'
import { HeroSectionMobile } from './components/HeroSectionMobile'
import { StatsRow } from './components/StatsRow'
import { DepartmentFilter } from './components/DepartmentFilter'
import { SubjectGrid } from './components/SubjectGrid'
import { HowItWorks } from './components/HowItWorks'
import { FeaturesSection } from './components/FeaturesSection'
import { FeedbackForm } from './components/FeedbackForm'
import { CTASection } from './components/CTASection'
import { FAQSection } from './components/FAQSection'
import { ScrollReveal, SectionDivider, AnimatedSectionHeader } from '@/components/animation'

export default function HomePage() {
  const { t } = useTranslation('common')
  const [searchParams, setSearchParams] = useSearchParams()

  const [activeDept, setActiveDept] = useState(
    searchParams.get('dept') || 'intelligent-systems'
  )

  const handleDeptChange = (slug) => {
    setActiveDept(slug)
    setSearchParams({ dept: slug })
  }

  return (
    <>
      <Helmet>
        <title>{t('app.name')} — {t('app.tagline')}</title>
        <meta name="description" content={t('app.description')} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <HeroSectionMobile />
        <HeroSection className="hidden sm:flex" />
        
        <StatsRow className="hidden sm:block" />

        {/* Subjects Section */}
        <section id="subject-grid" className="w-full py-16 px-4 max-w-6xl mx-auto">
          <AnimatedSectionHeader
            badge={t('departments.label', 'Departments')}
            title={t('departments.titleMain', 'Choose your department')}
            subtitle={t('departments.subtitleMain', 'Select your department to browse subjects. More departments coming soon.')}
            className="mb-12"
          />

          <ScrollReveal variant="fadeUp">
            <div className="mb-12 flex justify-center">
              <DepartmentFilter
                activeDepartmentSlug={activeDept}
                onSelect={handleDeptChange}
              />
            </div>
          </ScrollReveal>

          <SubjectGrid departmentSlug={activeDept} />
        </section>

        <SectionDivider />
        <HowItWorks />
        <SectionDivider />

        <FeaturesSection />

        <SectionDivider />

        <FeedbackForm />

        <SectionDivider />

        <FAQSection />

        <CTASection />
      </div>
    </>
  )
}
