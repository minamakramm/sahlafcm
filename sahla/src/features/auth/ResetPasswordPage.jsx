import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Lock, Loader2, ShieldCheck } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { toast } from 'react-hot-toast'

export default function ResetPasswordPage() {
  const { t, i18n } = useTranslation('auth')
  const updatePassword = useAuthStore((s) => s.updatePassword)
  const navigate = useNavigate()
  
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      toast.error(t('resetPassword.mismatch', 'Passwords do not match'))
      return
    }
    
    if (password.length < 6) {
      toast.error(t('resetPassword.tooShort', 'Password must be at least 6 characters'))
      return
    }
    
    setIsLoading(true)
    try {
      await updatePassword(password)
      toast.success(t('resetPassword.success', 'Password updated successfully!'))
      // Redirect to login or home
      setTimeout(() => navigate('/login'), 2000)
    } catch (error) {
      toast.error(error.message || t('resetPassword.error', 'Failed to update password'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`flex flex-col items-center justify-center p-4 sm:p-6 py-8 sm:py-12 w-full ${fontFamily}`} dir={isAr ? 'rtl' : 'ltr'}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        <div className="glass-tier-3 p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Background Highlight */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-3xl rounded-full" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
              <ShieldCheck size={32} />
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">
              {t('resetPassword.title', 'Reset Password')}
            </h1>
            <p className="text-white/40 text-sm mb-8 leading-relaxed">
              {t('resetPassword.subtitle', 'Enter your new security credentials below.')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/60">
                   {t('resetPassword.newPasswordLabel', 'New Password')}
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-indigo-500/50 outline-none transition-all placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/60">
                   {t('resetPassword.confirmPasswordLabel', 'Confirm New Password')}
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-indigo-500/50 outline-none transition-all placeholder:text-white/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !password || !confirmPassword}
                className="w-full h-12 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 disabled:hover:bg-indigo-500 !text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 mt-4"
              >
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  t('resetPassword.submitButton', 'Update Password')
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
