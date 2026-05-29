import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { AuthLayout } from './components/AuthLayout'
import { LoginForm } from './components/LoginForm'

export default function LoginPage() {
  const { t } = useTranslation('auth')

  return (
    <>
      <Helmet>
        <title>{t('login.title')} — Sahla</title>
        <meta name="description" content={t('login.subtitle')} />
      </Helmet>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  )
}
