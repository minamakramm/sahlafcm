import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollReveal, CountUp } from '@/components/animation'

const StatsRowInner = ({ className = '' }) => {
  const { t } = useTranslation('common')
  
  const stats = [
    { value: 6, label: t('stats.subjects', 'Subjects'), suffix: '' },
    { value: 50, label: t('stats.lectures', 'Lectures'), suffix: '+' },
    { value: 600, label: t('stats.mcqs', 'MCQ Questions'), suffix: '+' },
    { value: 6, label: t('stats.exams', 'Final Exams'), suffix: '' }
  ]

  return (
    <div className={`grid grid-cols-2 lg:flex lg:items-center lg:justify-center gap-y-8 gap-x-4 lg:gap-16 py-8 px-4 border-y border-white/5 bg-white/[0.01] mt-9 ${className}`}>
      {stats.map((stat, i) => (
        <React.Fragment key={i}>
          <ScrollReveal variant="fadeUp" delay={i * 0.1}>
            <div className="flex flex-col items-center flex-1 min-w-[140px]">
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                duration={1.8}
                className="text-[32px] md:text-[40px] font-black tracking-tighter text-[var(--text-primary)]"
              />
              <span className="text-[10px] md:text-[12px] font-bold text-[var(--text-tertiary)] uppercase tracking-[2px] mt-1 italic text-center">
                {stat.label}
              </span>
            </div>
          </ScrollReveal>
          {i < stats.length - 1 && (
            <div className="hidden lg:block w-px h-10 bg-white/10" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export const StatsRow = memo(StatsRowInner)
