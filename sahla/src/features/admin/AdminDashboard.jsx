import { useTranslation } from 'react-i18next'

export default function AdminDashboard() {
  const { t } = useTranslation('admin')

  const stats = [
    { label: t('dashboard.totalUsers'), value: '—', icon: '👥' },
    { label: t('dashboard.activeToday'), value: '—', icon: '🟢' },
    { label: t('dashboard.totalFeedback'), value: '—', icon: '💬' },
    { label: t('dashboard.totalExams'), value: '—', icon: '📝' },
  ]

  return (
    <div className="animate-slide-up">
      <h1 className="text-2xl font-bold text-white mb-6">{t('dashboard.title')}</h1>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, icon }) => (
          <div key={label} className="glass-card p-5">
            <div className="text-2xl mb-2">{icon}</div>
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-sm text-white/50">{label}</div>
          </div>
        ))}
      </div>

      {/* Recent activity placeholder */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold text-white mb-4">{t('dashboard.recentActivity')}</h2>
        <p className="text-white/40 text-sm">Dashboard data will be populated from Supabase in Phase 2.</p>
      </div>
    </div>
  )
}
