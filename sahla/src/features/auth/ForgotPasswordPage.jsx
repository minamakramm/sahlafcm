import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Mail, CheckCircle2, Loader2 } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { toast } from 'react-hot-toast'

export default function ForgotPasswordPage() {
  const { t, i18n } = useTranslation('auth')
  const resetPassword = useAuthStore((s) => s.resetPassword)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    try {
      await resetPassword(email)
      setIsSent(true)
      toast.success(t('forgotPassword.success'))
    } catch (error) {
      toast.error(error.message || t('forgotPassword.error'))
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
        <div className="flex justify-start mb-6 -ml-2">
          <Link 
            to="/login" 
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
            <span className="text-sm font-medium">{t('forgotPassword.backToLogin')}</span>
          </Link>
        </div>

        <div className="glass-tier-3 p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Background Highlight */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-3xl rounded-full" />
          
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative z-10"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                  <Mail size={32} />
                </div>

                <h1 className="text-2xl font-bold text-white mb-2">
                  {t('forgotPassword.title')}
                </h1>
                <p className="text-white/40 text-sm mb-8 leading-relaxed">
                  {t('forgotPassword.subtitle')}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white/60">
                      {t('forgotPassword.emailLabel')}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t('forgotPassword.emailPlaceholder')}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-indigo-500/50 outline-none transition-all placeholder:text-white/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    className="w-full h-12 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 disabled:hover:bg-indigo-500 !text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      t('forgotPassword.submitButton')
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4 relative z-10"
              >
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 size={40} />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3">
                  {t('forgotPassword.successTitle')}
                </h2>
                <div className="text-white/40 text-sm mb-8 leading-relaxed">
                  {t('forgotPassword.successDesc', { email })}
                </div>
                
                <div className="pt-4 flex flex-col gap-3">
                   <p className="text-xs text-white/20">
                     {t('forgotPassword.noEmail')}
                   </p>
                   <button 
                     onClick={() => setIsSent(false)} 
                     className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors"
                   >
                     {t('forgotPassword.tryAgain')}
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
