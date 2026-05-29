import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from '@/stores/authStore'
import { signupSchema } from '../validators/signupSchema'
import { useSignup } from '../hooks/useSignup'

export function SignupForm() {
  const { t } = useTranslation('auth')
  const { signup, isLoading } = useSignup()
  const signInWithGoogle = useAuthStore((s) => s.signInWithGoogle)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [signupSuccess, setSignupSuccess] = useState(false)
  const [isGoogleLoading, setGoogleLoading] = useState(false)

  const handleGoogleLogin = async () => {
    setGoogleLoading(true)
    try {
      await signInWithGoogle()
    } catch (error) {
      console.error(error)
      setGoogleLoading(false)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (data) => {
    const result = await signup(data)
    if (result.success) {
      setSignupSuccess(true)
    }
  }

  // Success state
  if (signupSuccess) {
    return (
      <div className="text-center py-4">
        <div className="text-5xl mb-4">✉️</div>
        <h2 className="text-xl font-semibold text-white mb-2">{t('signup.successTitle')}</h2>
        <p className="text-sm text-white/50 mb-6 leading-relaxed">{t('signup.successMessage')}</p>
        <Link
          to="/login"
          className="accent-button inline-block text-sm px-8"
        >
          {t('login.submitButton')}
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Title */}
      <div>
        <h2 className="text-xl font-semibold text-white">{t('signup.title')}</h2>
        <p className="text-sm text-white/40 mt-1">{t('signup.subtitle')}</p>
      </div>

      {/* Full Name */}
      <div className="space-y-2">
        <label htmlFor="signup-name" className="block text-sm font-medium text-white/70">
          {t('signup.nameLabel')}
        </label>
        <input
          id="signup-name"
          type="text"
          autoComplete="name"
          placeholder={t('signup.namePlaceholder')}
          className={`w-full rounded-glass-sm border bg-glass-100 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:ring-2 focus:ring-accent-500/40 ${
            errors.full_name
              ? 'border-red-500/50'
              : 'border-glass-border focus:border-accent-500/40'
          }`}
          {...register('full_name')}
        />
        {errors.full_name && (
          <p className="text-xs text-red-400">{errors.full_name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="signup-email" className="block text-sm font-medium text-white/70">
          {t('signup.emailLabel')}
        </label>
        <input
          id="signup-email"
          type="email"
          autoComplete="email"
          placeholder={t('signup.emailPlaceholder')}
          className={`w-full rounded-glass-sm border bg-glass-100 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:ring-2 focus:ring-accent-500/40 ${
            errors.email
              ? 'border-red-500/50'
              : 'border-glass-border focus:border-accent-500/40'
          }`}
          {...register('email')}
        />
        {errors.email && (
          <p className="text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>



      {/* Password */}
      <div className="space-y-2">
        <label htmlFor="signup-password" className="block text-sm font-medium text-white/70">
          {t('signup.passwordLabel')}
        </label>
        <div className="relative">
          <input
            id="signup-password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            placeholder={t('signup.passwordPlaceholder')}
            className={`w-full rounded-glass-sm border bg-glass-100 px-4 py-3 pr-11 text-sm text-white placeholder-white/25 outline-none transition-all focus:ring-2 focus:ring-accent-500/40 ${
              errors.password
                ? 'border-red-500/50'
                : 'border-glass-border focus:border-accent-500/40'
            }`}
            {...register('password')}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password ? (
          <p className="text-xs text-red-400">{errors.password.message}</p>
        ) : (
          <p className="text-xs text-white/25">{t('signup.passwordRequirements')}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <label htmlFor="signup-confirm" className="block text-sm font-medium text-white/70">
          {t('signup.confirmPasswordLabel')}
        </label>
        <div className="relative">
          <input
            id="signup-confirm"
            type={showConfirm ? 'text' : 'password'}
            autoComplete="new-password"
            placeholder={t('signup.confirmPasswordPlaceholder')}
            className={`w-full rounded-glass-sm border bg-glass-100 px-4 py-3 pr-11 text-sm text-white placeholder-white/25 outline-none transition-all focus:ring-2 focus:ring-accent-500/40 ${
              errors.confirmPassword
                ? 'border-red-500/50'
                : 'border-glass-border focus:border-accent-500/40'
            }`}
            {...register('confirmPassword')}
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            tabIndex={-1}
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-xs text-red-400">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full accent-button flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t('signup.signingUp')}
          </>
        ) : (
          t('signup.submitButton')
        )}
      </button>

      {/* OR separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-glass-border"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-glass-100 px-2 text-white/40 rounded-pill">{t('login.orContinueWith')}</span>
        </div>
      </div>

      {/* Google Login */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={isLoading || isGoogleLoading}
        className="w-full glass-button flex items-center justify-center gap-3 text-sm"
      >
        {isGoogleLoading ? (
          <Loader2 size={16} className="animate-spin text-white/60" />
        ) : (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        )}
        {t('login.googleButton')}
      </button>

      {/* Login link */}
      <p className="text-center text-sm text-white/40">
        {t('signup.hasAccount')}{' '}
        <Link
          to="/login"
          className="text-accent-400 hover:text-accent-300 font-medium transition-colors"
        >
          {t('signup.loginLink')}
        </Link>
      </p>
    </form>
  )
}