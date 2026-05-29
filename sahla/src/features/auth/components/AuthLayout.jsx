import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

/**
 * Glass Tier 3 auth layout — centered card with gradient logo.
 * Used by Login, Signup pages.
 */
export function AuthLayout({ children }) {
  const { t } = useTranslation('auth')

  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      style={{
        /* dvh accounts for mobile browser chrome (URL bar etc.) */
        minHeight: 'calc(100dvh - 8rem)',
        padding: 'clamp(0.75rem, 3vw, 1.5rem)',
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
        style={{ maxWidth: 'min(420px, 100%)' }}
      >
        {/* Logo header */}
        <div className="text-center mb-6 sm:mb-8">
          <Link to="/" className="inline-block group">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-transform group-hover:scale-105">
              {t('layout.logo')}
            </h1>
          </Link>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>{t('layout.tagline')}</p>
        </div>

        {/* Glass card */}
        <div
          className="relative rounded-glass overflow-hidden"
          style={{
            background: 'var(--glass-tier-3-bg)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid var(--glass-tier-3-border)',
            boxShadow: 'var(--shadow-xl)',
            padding: 'clamp(1.25rem, 4vw, 2.5rem)',
          }}
        >
          {/* Subtle accent glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)',
            }}
          />
          <div className="relative z-10">{children}</div>
        </div>
      </motion.div>
    </div>
  )
}
