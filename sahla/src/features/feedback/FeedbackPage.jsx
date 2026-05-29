import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export default function FeedbackPage() {
  const { t } = useTranslation('common')

  return (
    <>
      <Helmet>
        <title>{t('feedback.title')} — Sahla</title>
      </Helmet>
      <div className="min-h-screen p-6">
        <div className="max-w-2xl mx-auto animate-slide-up">
          <h1 className="text-3xl font-bold text-white mb-2">{t('feedback.title')}</h1>
          <p className="text-white/50 mb-8">{t('feedback.subtitle')}</p>
          {/* Feedback form — Phase 2 */}
        </div>
      </div>
    </>
  )
}
