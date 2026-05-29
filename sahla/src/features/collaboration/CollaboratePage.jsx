import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Sparkles, Users, MessageSquare, Heart } from 'lucide-react';
import { ScrollReveal, TextReveal } from '@/components/animation';
import { CollaborationForm } from './CollaborationForm';

export default function CollaboratePage() {
  const { i18n } = useTranslation();
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';
  const isRtl = i18n.language === 'ar';

  return (
    <>
      <Helmet>
        <title>{isRtl ? 'التعاون مع سهلة' : 'Collaborate with Sahla'}</title>
        <meta name="description" content="Join our mission to make education easier for everyone. Collaborate with us on academic projects, research, or professional work." />
      </Helmet>

      <div className={`flex-1 w-full max-w-5xl mx-auto px-4 py-12 md:py-20 ${fontFamily}`}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <ScrollReveal variant="fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Users className="w-3 h-3" />
              <span>{isRtl ? 'بناء المستقبل معاً' : 'Building Together'}</span>
            </div>
          </ScrollReveal>
          
          <TextReveal 
            as="h1" 
            mode="words" 
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            {isRtl ? 'لنتعاون ونبدع' : 'Let\'s Create Something Great'}
          </TextReveal>

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {isRtl 
                ? 'سواء كنت طالباً، باحثاً، أو محترفاً، نحن نرحب بكل الأفكار التي تهدف لتطوير المحتوى التعليمي ومساعدة الطلاب.' 
                : 'Whether you\'re a student, researcher, or professional, we welcome all ideas aimed at developing educational content and helping students.'}
            </p>
          </ScrollReveal>
        </div>

        {/* Form Section */}
        <CollaborationForm />

        {/* Bottom Info */}
        <ScrollReveal variant="fadeUp" className="mt-24 text-center">
          <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="glass-tier-1 p-6 flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white uppercase text-xs tracking-widest">{isRtl ? 'تواصل سريع' : 'Quick Response'}</h3>
              <p className="text-white/40 text-sm">{isRtl ? 'نرد على جميع الطلبات خلال 48 ساعة.' : 'We respond to all requests within 48 hours.'}</p>
            </div>

            <div className="glass-tier-1 p-6 flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white uppercase text-xs tracking-widest">{isRtl ? 'أفكار مبتكرة' : 'Creative Ideas'}</h3>
              <p className="text-white/40 text-sm">{isRtl ? 'نحن نحب الأفكار خارج الصندوق.' : 'We love out-of-the-box ideas.'}</p>
            </div>

            <div className="glass-tier-1 p-6 flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white uppercase text-xs tracking-widest">{isRtl ? 'مجتمعي بالكامل' : 'Purely Community'}</h3>
              <p className="text-white/40 text-sm">{isRtl ? 'هدفنا الأول هو دائماً مصلحة الطالب.' : 'Our priority is always the student\'s benefit.'}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
