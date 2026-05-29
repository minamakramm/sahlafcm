import { useTranslation } from 'react-i18next'

export default function AdminFeatureRequests() {
  const { t } = useTranslation('admin')

  return (
    <div className="animate-slide-up">
      <h1 className="text-2xl font-bold text-white mb-6">{t('featureRequests.title')}</h1>
      <div className="glass-card p-6 text-center">
        <p className="text-white/40">{t('featureRequests.noRequests')}</p>
      </div>
    </div>
  )
}
