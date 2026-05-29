import { Helmet } from 'react-helmet-async'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LogOut, ArrowLeft, AlertCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from '@/stores/authStore'
import { ProfileForm } from './components/ProfileForm'
import { Button } from '@/components/ui'
import toast from 'react-hot-toast'

export default function ProfilePage() {
  const { t } = useTranslation('auth')
  const navigate = useNavigate()
  const location = useLocation()
  const signOut = useAuthStore((s) => s.signOut)
  const profile = useAuthStore((s) => s.profile)


  const handleLogout = async () => {
    try {
      await signOut()
      toast.success(t('profile.logoutSuccess'))
      navigate('/login', { replace: true })
    } catch (err) {
      toast.error(t('profile.logoutError'))
    }
  }

  return (
    <>
      <Helmet>
        <title>{t('profile.title')} — Sahla</title>
        <meta name="description" content={t('profile.subtitle')} />
      </Helmet>
      <div className="flex flex-col p-4 sm:p-6 w-full mb-20 md:mb-0">
        <div className="max-w-lg mx-auto w-full">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            {t('profile.back')}
          </button>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Profile card */}
            <div className="glass-tier-1 p-8 sm:p-10 rounded-[24px]">
              <h1 className="text-xl font-semibold text-[var(--text-primary)] mb-1">{t('profile.title')}</h1>
              <p className="text-sm text-[var(--text-secondary)] mb-6">{t('profile.subtitle')}</p>



              {/* Admin Access (Conditional) */}
              {(profile?.role === 'admin' || profile?.role === 'super_admin') && (
                <div className="mb-6">
                  <button
                    onClick={() => navigate('/admin')}
                    className="w-full glass-button flex items-center justify-center gap-2 text-sm text-[var(--text-brand)] hover:text-[var(--text-accent)] border border-[var(--border-default)] hover:border-[var(--border-strong)]"
                  >
                    <ArrowLeft size={16} className="rotate-180" />
                    Admin Dashboard
                  </button>
                </div>
              )}

              <ProfileForm />

              {/* Divider */}
              <div className="border-t border-glass-border mt-8 pt-6">
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  className="w-full gap-2"
                >
                  <LogOut size={16} />
                  {t('profile.logoutButton')}
                </Button>
              </div>
            </div>

            {/* Joined date */}
            {profile?.created_at && (
              <p className="text-center text-xs text-[var(--text-disabled)] mt-4">
                {t('profile.joinedAt')}: {new Date(profile.created_at).toLocaleDateString()}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </>
  )
}
