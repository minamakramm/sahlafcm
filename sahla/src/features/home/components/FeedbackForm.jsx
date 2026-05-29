import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { Send, Shield, Bug, Lightbulb, MessageSquare, Heart, CheckCircle2, Loader2 } from 'lucide-react'
import { Button, Input, Textarea, Select } from '@/components/ui'
import { supabase } from '@/lib/supabase'
import { getSubjectIndex, getActiveDepartments } from '../utils/staticData'
import { ScrollReveal } from '@/components/animation'

export const FeedbackForm = () => {
  const { t, i18n } = useTranslation('common')
  const isAr = i18n.language === 'ar'
  const fontFamily = isAr ? 'font-arabic' : 'font-sans'
  
  const [subjects, setSubjects] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      message: '',
      type: 'suggestion',
      subject: '',
    },
  })

  const currentType = watch('type')

  useEffect(() => {
    const loadSubjects = async () => {
      try {
        const activeDepts = getActiveDepartments()
        const allSubjects = []
        for (const dept of activeDepts) {
          const index = await getSubjectIndex(dept.slug)
          if (!index.comingSoon) {
            allSubjects.push(...index.subjects)
          }
        }
        setSubjects(allSubjects)
      } catch (e) {
        console.warn('[FeedbackForm] Failed to load subjects', e)
      }
    }
    loadSubjects()
  }, [])

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const { error } = await supabase.from('feedback').insert([
        {
          name: data.name || null,
          message: data.message,
          type: data.type,
          subject_slug: data.subject || null,
        },
      ])
      if (error) throw error
      setIsSuccess(true)
      toast.success(t('feedback.submitSuccess'))
      setTimeout(() => {
        setIsSuccess(false)
        reset()
      }, 5000)
    } catch (err) {
      console.error('[FeedbackForm]', err)
      toast.error(t('feedback.submitError'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const feedbackTypes = [
    { id: 'suggestion', label: t('feedback.feedbackTypes.suggestion', 'Suggestion'), icon: <Lightbulb size={14} /> },
    { id: 'bug', label: t('feedback.feedbackTypes.bug', 'Bug Report'), icon: <Bug size={14} /> },
    { id: 'compliment', label: t('feedback.feedbackTypes.compliment', 'Praise'), icon: <Heart size={14} /> },
    { id: 'other', label: t('feedback.feedbackTypes.other', 'Other'), icon: <MessageSquare size={14} /> },
  ]

  return (
    <section id="anon-msg-section" className="py-8 px-4 w-full flex justify-center">
      <ScrollReveal variant="fadeUp">
        <div
          className="w-full max-w-[800px] mx-auto glass-tier-3 py-4 md:py-8 px-5 md:px-10 rounded-[32px] md:rounded-[40px] border border-white/10 relative overflow-hidden text-center"
        >
        {/* Design Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
        
        <div className="w-12 h-12 md:w-16 md:h-16 bg-accent-500/10 border border-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4 text-accent-400">
           <Shield size={28} className="md:size-[32px]" />
        </div>

        <h2 className={`text-xl md:text-3xl font-black text-white tracking-tighter mb-1 md:mb-2 ${fontFamily}`}>
          {t('feedback.anonTitle', 'Send an Anonymous Message')}
        </h2>
        <p className={`text-white/40 text-[14px] md:text-lg mb-4 md:mb-6 max-w-lg mx-auto leading-relaxed ${fontFamily}`}>
          {t('feedback.anonSubtitle', "Got feedback? A question? Or just want to say something? Mesh han3raf enta meen, don't worry. 😉")}
        </p>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)} 
              className="flex flex-col gap-6"
            >
              {/* Type Selector Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {feedbackTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setValue('type', type.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border ${
                      currentType === type.id 
                        ? 'bg-accent-500/20 border-accent-500/50 text-accent-300 shadow-lg shadow-accent-500/10' 
                        : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white/60'
                    }`}
                  >
                    {type.icon}
                    {type.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <Input
                  {...register('name')}
                  placeholder={t('feedback.namePlaceholder', 'Your name (optional)')}
                  className="h-[52px] bg-white/5 border-white/10 focus:border-accent-500/50 text-white placeholder:text-white/20"
                />
                <Select
                  value={watch('subject')}
                  onChange={(e) => setValue('subject', e.target.value)}
                  placeholder={t('feedback.subjectPlaceholder', 'General / Select subject')}
                >
                  <option value="">{t('feedback.subjectPlaceholder', 'General / Select subject')}</option>
                  {subjects.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {isAr && s.nameAr ? s.nameAr : s.name}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="relative">
                <Textarea
                  {...register('message', { required: true })}
                  placeholder={t('feedback.placeholder', 'Type your message here...')}
                  className="w-full min-h-[120px] bg-white/5 border-white/10 focus:border-accent-500/50 text-white placeholder:text-white/20 p-4 rounded-3xl"
                  error={errors.message ? t('feedback.messageRequired') : undefined}
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                isLoading={isSubmitting} 
                className="w-full h-14 rounded-2xl text-lg font-black tracking-tight flex items-center justify-center gap-3 shadow-xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center gap-3">
                  {t('actions.send', 'Send Message')}
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 border border-emerald-500/20 mb-2">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {t('feedback.successTitle', 'Sent Successfully!')}
              </h3>
              <p className="text-white/40 max-w-sm mx-auto">
                {t('feedback.successDesc', "Your message has been sent anonymously! Keep up the hard work.")}
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-4 text-accent-400 hover:text-accent-300 font-bold transition-colors"
              >
                {t('feedback.sendAnother', 'Send another message')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-center gap-6">
          <div className="flex flex-col items-center">
             <span className="text-[10px] text-white/20 font-black uppercase tracking-widest leading-none mb-2">{t('feedback.isItSahla', 'Is it Sahla?') || 'Is it Sahla?'}</span>
             <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-accent-500/20" />)}
             </div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
