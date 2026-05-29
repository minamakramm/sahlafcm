import { useTranslation } from 'react-i18next'

export default function AdminAnalytics() {
  const { t } = useTranslation('admin')

  return (
    <div className="animate-slide-up">
      <h1 className="text-2xl font-bold text-white mb-6">{t('analytics.title')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: t('analytics.pageViews'), value: '—' },
          { label: t('analytics.uniqueVisitors'), value: '—' },
          { label: t('analytics.examCompletions'), value: '—' },
          { label: t('analytics.averageScore'), value: '—' },
        ].map(({ label, value }) => (
          <div key={label} className="glass-card p-5">
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-sm text-white/50">{label}</div>
          </div>
        ))}
      </div>
      <div className="glass-card p-6">
        <p className="text-white/40 text-sm">Analytics charts will be implemented in Phase 2.</p>
      </div>
    </div>
  )
}
