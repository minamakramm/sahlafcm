import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Lock, UserPlus, LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui'

export function LockedLectureContent() {
  const { t, i18n } = useTranslation('lectures')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'

  return (
    <div className="relative min-h-[400px] w-full mt-8">
      {/* Blurred background mockup of content */}
      <div className="absolute inset-x-0 top-0 bottom-0 opacity-20 pointer-events-none select-none blur-xl space-y-8 px-4 py-8">
        <div className="h-4 w-3/4 bg-white/20 rounded-full" />
        <div className="h-4 w-full bg-white/20 rounded-full" />
        <div className="h-4 w-5/6 bg-white/20 rounded-full" />
        <div className="h-40 w-full bg-white/10 rounded-3xl" />
        <div className="h-4 w-2/3 bg-white/20 rounded-full" />
        <div className="h-4 w-full bg-white/20 rounded-full" />
      </div>

      {/* Lock Card */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-12 px-6 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-tier-3 p-8 rounded-[2.5rem] max-w-md border-accent-500/30 flex flex-col items-center gap-6 shadow-[0_0_50px_rgba(139,92,246,0.15)]"
        >
          <div className="w-20 h-20 rounded-full bg-accent-500/20 flex items-center justify-center border border-accent-500/30 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
            <Lock size={32} className="text-accent-400" />
          </div>

          <div className="space-y-2">
            <h3 className={`text-2xl font-black text-white italic uppercase tracking-tighter ${fontFamily}`}>
               {isAr ? 'محتوى مقفل' : 'Locked Content'}
            </h3>
            <p className={`text-white/60 text-sm leading-relaxed ${fontFamily}`}>
              {isAr 
                ? 'يرجى تسجيل الدخول أو إنشاء حساب للوصول إلى كامل محتوى المحاضرة، الملخصات، والاختبارات.' 
                : 'Please sign in or create an account to access the full lecture content, summaries, and MCQs.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-4">
            <Link to="/login" className="w-full">
              <Button className="w-full gap-2 font-bold uppercase tracking-tight italic" size="lg">
                <LogIn size={18} />
                {isAr ? 'دخول' : 'Sign In'}
              </Button>
            </Link>
            <Link to="/signup" className="w-full">
              <Button variant="ghost" className="w-full gap-2 font-bold uppercase border border-white/10 hover:bg-white/5 active:scale-95 transition-all text-white/80" size="lg">
                <UserPlus size={18} />
                {isAr ? 'حساب جديد' : 'Sign Up'}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
