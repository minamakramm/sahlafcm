import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { BookOpen, FileText, CheckCircle2, Timer, ChevronRight } from 'lucide-react'
import { StaggerGrid, AnimatedSectionHeader, TextReveal, MagneticElement, AnimatedText } from '@/components/animation'

const HowItWorksInner = () => {
  const { t } = useTranslation('common')
  
  const steps = [
    { 
      icon: <BookOpen className="text-secondary-400" />, 
      title: t('steps.explain.title', 'Read explanation'),
      desc: t('steps.explain.desc', 'Clear, structured content with code examples, diagrams, and visuals.')
    },
    { 
      icon: <FileText className="text-accent-400" />, 
      title: t('steps.summary.title', 'Review summary'),
      desc: t('steps.summary.desc', 'Bullet-point key takeaways. Perfect for quick revision before exams.')
    },
    { 
      icon: <CheckCircle2 className="text-emerald-400" />, 
      title: t('steps.mcq.title', 'Practice MCQs'),
      desc: t('steps.mcq.desc', 'Instant feedback on each answer. Retry as many times as you need.')
    },
    { 
      icon: <Timer className="text-accent-400" />, 
      title: t('steps.exam.title', 'Sit the final exam'),
      desc: t('steps.exam.desc', 'Full timed exam per subject. MCQs + written questions. Real exam feel.')
    }
  ]

  return (
    <section className="w-full py-16 px-4 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <AnimatedText as="h2" text={t('howItWorks.title', 'Your study flow, perfected')} staggerDelay={0.05} className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 justify-center" />
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
          {t('howItWorks.subtitle', 'Four modes for every learning style and every stage of exam prep.')}
        </p>
      </div>

      <StaggerGrid
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        staggerAmount={0.08}
      >
        {steps.map((step, i) => (
          <MagneticElement key={i} strength={0.1} className="w-full">
            <div 
              data-stagger
              className="glass-tier-2 p-8 rounded-[1.5rem] border border-white/5 relative group hover:bg-white/[0.08] transition-all w-full h-full"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:ring-accent-500/50 transition-all font-bold text-xl text-white/20">
                 {i + 1}
              </div>
              
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
              
              {i < steps.length - 1 && (
                 <ChevronRight size={20} className="hidden lg:block absolute top-[60%] -right-4 text-white/10 group-hover:text-secondary-400/20 transition-all" />
              )}
            </div>
          </MagneticElement>
        ))}
      </StaggerGrid>
    </section>
  )
}

export const HowItWorks = memo(HowItWorksInner)
