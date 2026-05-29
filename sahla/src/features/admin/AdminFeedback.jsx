import { useTranslation } from 'react-i18next'

export default function AdminFeedback() {
  const { t } = useTranslation('admin')

  return (
    <div className="animate-slide-up">
      <h1 className="text-2xl font-bold text-white mb-6">{t('feedback.title')}</h1>
      <div className="glass-card p-6 text-center">
        <p className="text-white/40">{t('feedback.noFeedback')}</p>
      </div>
    </div>
  )
}
