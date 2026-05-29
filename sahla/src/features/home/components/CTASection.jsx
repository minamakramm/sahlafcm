import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { ScrollReveal, AnimatedText, MagneticElement } from '@/components/animation'

export const CTASection = () => {
  const { t } = useTranslation('common')
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  if (isAuthenticated) return null

  return (
    <section className="w-full py-16 px-4 max-w-6xl mx-auto">
      <ScrollReveal variant="scaleUp">
        <div className="glass-tier-3 p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden border border-accent-500/20 text-center">
          {/* Background Decorations */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent opacity-50" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <AnimatedText as="h2" text={t('cta.title', 'Ready to start studying?')} staggerDelay={0.05} className="text-3xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.1] flex justify-center" />
            <p className="text-white/40 text-base md:text-xl mb-12 leading-relaxed font-medium">
              {t('cta.subtitle', 'Create a free account to track your progress, save bookmarks, and sit timed final exams.')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
              <MagneticElement strength={0.3} className="w-full sm:w-auto">
                <Button 
                  as={Link} 
                  to="/signup" 
                  size="lg" 
                  variant="accent" 
                  className="w-full px-8 flex items-center justify-center gap-2 group h-14"
                >
                  {t('cta.buttonPrimary', 'Create free account')}
                  <ArrowRight size={18} className="translate-y-[1px] group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticElement>
              <MagneticElement strength={0.2} className="w-full sm:w-auto">
                <Button 
                  as={Link} 
                  to="/login" 
                  size="lg" 
                  variant="ghost" 
                  className="w-full px-8 h-14 flex items-center justify-center"
                >
                  {t('cta.buttonSecondary', 'Browse without signing up')}
                </Button>
              </MagneticElement>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
