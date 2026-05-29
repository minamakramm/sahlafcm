import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { AuthLayout } from './components/AuthLayout'
import { SignupForm } from './components/SignupForm'

export default function SignupPage() {
  const { t } = useTranslation('auth')

  return (
    <>
      <Helmet>
        <title>{t('signup.title')} — Sahla</title>
        <meta name="description" content={t('signup.subtitle')} />
      </Helmet>
      <AuthLayout>
        <SignupForm />
      </AuthLayout>
    </>
  )
}
