import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Loader2, Wand2, Mail, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from '@/stores/authStore'
import { loginSchema } from '../validators/loginSchema'
import { useLogin } from '../hooks/useLogin'
import { toast } from 'react-hot-toast'

import { motion } from 'framer-motion'

export function LoginForm() {
  const { t } = useTranslation('auth')
  const { login, isLoading: isLoggingIn } = useLogin()
  const signInWithGoogle = useAuthStore((s) => s.signInWithGoogle)
  const signInWithMagicLink = useAuthStore((s) => s.signInWithMagicLink)
  
  const [loginMode, setLoginMode] = useState('password') // 'password' | 'magiclink'
  const [showPassword, setShowPassword] = useState(false)
  const [isGoogleLoading, setGoogleLoading] = useState(false)
  const [isMagicLinkLoading, setMagicLinkLoading] = useState(false)

  const handleGoogleLogin = async () => {
    setGoogleLoading(true)
    try {
      await signInWithGoogle()
    } catch (error) {
      console.error(error)
      setGoogleLoading(false)
    }
  }

  const handleMagicLinkLogin = async (email) => {
    if (!email) {
      toast.error(t('login.errorNoEmail', 'Please enter your email'))
      return
    }
    
    setMagicLinkLoading(true)
    try {
      await signInWithMagicLink(email)
      toast.success(t('login.magicLinkSent', 'Check your email for the magic link!'), {
        duration: 6000,
        icon: '✉️'
      })
    } catch (error) {
      toast.error(error.message || t('login.magicLinkError', 'Failed to send magic link'))
    } finally {
      setMagicLinkLoading(false)
    }
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (data) => {
    if (loginMode === 'password') {
      if (!data.password) {
        toast.error(t('validation.passwordRequired', 'Password is required.'))
        return
      }
      await login(data)
    } else {
      await handleMagicLinkLogin(data.email)
    }
  }

  const isLoading = isLoggingIn || isMagicLinkLoading

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Login Mode Toggle */}
      <div className="relative flex bg-white/[0.03] p-1.5 rounded-2xl w-full border border-white/10 shadow-inner group">
        <button
          type="button"
          onClick={() => setLoginMode('password')}
          className={`relative flex-1 py-2.5 text-[0.85rem] font-bold rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 ${
            loginMode === 'password' ? 'text-white' : 'text-white/40 hover:text-white/60'
          }`}
        >
          {loginMode === 'password' && (
             <motion.div
               layoutId="activeTab"
               className="absolute inset-0 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.3)]"
               transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
             >
               <div 
                 className="absolute inset-[-100%]" 
                 style={{ 
                   background: 'conic-gradient(from 0deg, transparent 70%, rgba(255, 255, 255, 0.8) 100%)',
                   animation: 'spin 2.5s linear infinite' 
                 }} 
               />
               <div className="absolute inset-[1px] rounded-[11px] bg-gradient-to-r from-indigo-600 to-indigo-500" />
             </motion.div>
          )}
          <div className="relative z-10 flex items-center gap-2">
            <Lock size={14} className={loginMode === 'password' ? 'opacity-100' : 'opacity-50'} />
            {t('login.modePassword', 'Password')}
          </div>
        </button>

        <button
          type="button"
          onClick={() => setLoginMode('magiclink')}
          className={`relative flex-1 py-2.5 text-[0.85rem] font-bold rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 ${
            loginMode === 'magiclink' ? 'text-white' : 'text-white/40 hover:text-white/60'
          }`}
        >
          {loginMode === 'magiclink' && (
             <motion.div
               layoutId="activeTab"
               className="absolute inset-0 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.3)]"
               transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
             >
               <div 
                 className="absolute inset-[-100%]" 
                 style={{ 
                   background: 'conic-gradient(from 0deg, transparent 70%, rgba(255, 255, 255, 0.8) 100%)',
                   animation: 'spin 2.5s linear infinite' 
                 }} 
               />
               <div className="absolute inset-[1px] rounded-[11px] bg-gradient-to-r from-indigo-600 to-indigo-500" />
             </motion.div>
          )}
          <div className="relative z-10 flex items-center gap-2">
            <Wand2 size={14} className={loginMode === 'magiclink' ? 'opacity-100 font-bold' : 'opacity-50'} />
            {t('login.modeMagic', 'Magic Link')}
          </div>
          
          {/* Enhanced Badge */}
          <div className="absolute top-1.5 right-2 flex h-1.5 w-1.5 z-10">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 ${loginMode === 'magiclink' ? 'hidden' : 'block'}`}></span>
            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-400 ${loginMode === 'magiclink' ? 'bg-indigo-200 shadow-sm' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Title */}
      <div className="text-center pt-2">
        <h2 className="text-xl font-bold text-white tracking-tight">
          {loginMode === 'password' ? t('login.title') : t('login.magicLinkTitle', 'Magic Link Login')}
        </h2>
        <p className="text-xs text-white/40 mt-1.5 leading-relaxed max-w-[260px] mx-auto">
          {loginMode === 'password' ? t('login.subtitle') : t('login.magicLinkSubtitle', 'Sign in instantly with a secure link sent to your inbox.')}
        </p>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="login-email" className="block text-xs font-semibold text-white/50 uppercase tracking-wider">
          {t('login.emailLabel')}
        </label>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          placeholder={t('login.emailPlaceholder')}
          className={`w-full rounded-glass-sm border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/10 outline-none transition-all focus:border-indigo-500/50 ${
            errors.email
              ? 'border-red-500/50 focus:border-red-500/50'
              : 'border-white/10'
          }`}
          {...register('email')}
        />
        {errors.email && (
          <p className="text-xs text-red-400/80 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password - Only in password mode */}
      {loginMode === 'password' && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="login-password" className="block text-xs font-semibold text-white/50 uppercase tracking-wider">
              {t('login.passwordLabel')}
            </label>
            <Link
              to="/forgot-password"
              className="text-[11px] text-indigo-400 hover:text-indigo-300 font-bold transition-colors"
            >
              {t('login.forgotPassword')}
            </Link>
          </div>
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              placeholder={t('login.passwordPlaceholder')}
              className={`w-full rounded-glass-sm border bg-white/[0.03] px-4 py-3 pr-11 text-sm text-white placeholder-white/10 outline-none transition-all focus:border-indigo-500/50 ${
                errors.password
                  ? 'border-red-500/50 focus:border-red-500/50'
                  : 'border-white/10'
              }`}
              {...register('password')}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/50 transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-400/80 mt-1">{errors.password.message}</p>
          )}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full h-[52px] accent-button flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {loginMode === 'password' ? t('login.loggingIn') : t('login.sendingMagicLink', 'Sending Link...')}
          </>
        ) : (
          loginMode === 'password' ? t('login.submitButton') : t('login.sendMagicLink', 'Send Magic Link')
        )}
      </button>

      {/* OR separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-glass-border"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-glass-100 px-3 py-1 text-white/40 rounded-full border border-glass-border">{t('login.orContinueWith')}</span>
        </div>
      </div>

      {/* Google Login */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={isLoading || isGoogleLoading}
        className="w-full glass-button flex items-center justify-center gap-3 text-sm h-[52px]"
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

      {/* Sign up link */}
      <p className="text-center text-sm text-white/40">
        {t('login.noAccount')}{' '}
        <Link
          to="/signup"
          className="text-accent-400 hover:text-accent-300 font-medium transition-colors"
        >
          {t('login.signupLink')}
        </Link>
      </p>
    </form>
  )
}
