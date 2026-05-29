import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { 
  BookOpen, 
  Target, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Users, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { ScrollReveal, StaggerGrid, TextReveal } from '@/components/animation';

export default function AboutPage() {
  const { t, i18n } = useTranslation('common');
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';

  const features = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Clean Content",
      desc: "Lecture materials broken down into digestible sections with code examples and diagrams that make sense."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Self-Testing",
      desc: "Quizzes designed to test your knowledge and build confidence before the real exams."
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Progress Tracking",
      desc: "Smart tracking so you never lose your place and always know where you left off."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Built for Speed",
      desc: "Designed to make studying clearer, faster, and significantly less stressful for university students."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Sahla — Built for Students</title>
        <meta name="description" content="Sahla is a free educational platform built for university students to make studying clearer, faster, and less stressful." />
      </Helmet>

      <div className={`flex-1 w-full max-w-5xl mx-auto px-4 py-12 md:py-20 ${fontFamily}`}>
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <ScrollReveal variant="fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              <span>The Platform</span>
            </div>
          </ScrollReveal>
          <TextReveal as="h1" mode="words" staggerAmount={0.04} className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            About Sahla
          </TextReveal>
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Sahla is a free educational platform built for university students — designed to make studying clearer, faster, and less stressful. 
              <span className="block mt-4 text-accent-400 font-bold">No paywalls. No ads. Just content that actually helps.</span>
            </p>
          </ScrollReveal>
        </div>

        {/* Why Sahla exists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <ScrollReveal variant="fadeUp">
            <div className="glass-tier-2 p-8 md:p-10 h-full">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 uppercase tracking-tighter">
                <ShieldCheck className="w-6 h-6 text-accent-500" />
                Why Sahla exists
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                <p>
                  University materials are often scattered — across chat groups, random PDFs, and outdated slides. Sahla was built to fix that.
                </p>
                <p>
                  One place, organized by department and semester, where you can find your lectures, study the material, and test yourself — all without the chaos.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerAmount={0.08}>
            {features.map((f, i) => (
              <div key={i} data-stagger className="glass-tier-1 p-6 hover:bg-white/[0.05] transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 mb-4 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>

        {/* Transitional Section - What's Next */}
        <ScrollReveal variant="fadeUp">
          <div className="relative mb-24 py-12 text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
              <span className="text-[200px] font-black leading-none uppercase tracking-tighter">Future</span>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tighter">What's next</h2>
              <p className="text-xl md:text-2xl font-light text-white/60 italic leading-relaxed">
                "Sahla is continuously growing — with more departments, more semesters, and more features on the way, all built around what students actually need."
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Author / Community */}
        <ScrollReveal variant="scaleUp">
          <div className="glass-tier-3 overflow-hidden border-t border-white/5">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
              <div className="relative shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-accent-500/30 p-1 relative z-10 overflow-hidden shadow-glow">
                  <img 
                    src="/mina.jpeg" 
                    alt="Mina Makram" 
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="absolute -inset-4 bg-accent-500/15 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-accent-500 to-accent-700 rounded-full opacity-40 blur-[2px]" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-3 uppercase tracking-tighter">
                  <Users className="w-6 h-6 text-accent-500" />
                  Built by a student, for students
                </h2>
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  Sahla was designed and developed by <strong className="text-white">Mina Makram</strong>, a student who got tired of the same problems everyone else was dealing with — and decided to actually do something about it. 
                  <span className="block mt-4 italic">This isn't a company project or a requirement. It's a genuine attempt to make the university experience a little less painful for everyone who comes after.</span>
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 text-white/50 text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
                    <MessageSquare className="w-3 h-3" />
                    <span>Student Driven</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
                    <Sparkles className="w-3 h-3" />
                    <span>Always Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
