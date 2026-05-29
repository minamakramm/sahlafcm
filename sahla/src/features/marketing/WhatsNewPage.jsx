import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { 
  Sparkles, 
  Rocket, 
  Wrench, 
  Palette, 
  FileText,
  MonitorPlay,
  Trophy
} from 'lucide-react';
import { ScrollReveal, StaggerGrid, TextReveal } from '@/components/animation';

export default function WhatsNewPage() {
  const { t, i18n } = useTranslation('common');
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';

  const updates = [
    {
      date: 'May 11, 2026',
      version: 'v2.7.0',
      title: 'Real-Time Leaderboard & Smart Notifications',
      icon: <Trophy className="w-5 h-5" />,
      changes: [
        'Overhauled the Student Leaderboard to calculate XP with 100% precision based on lecture completion, MCQ scores, exam performance, study time, and engagement events.',
        'Implemented a real-time server-side synchronization engine — ranks update instantly as soon as you earn XP.',
        'Added a personalized Smart Notification banner to the Leaderboard that dynamically motivates you based on your current rank.',
        'Upgraded the Admin Dashboard to track and display real-time XP, Level, and Last Active metrics for all users.'
      ],
      type: 'feature'
    },
    {
      date: 'May 10, 2026',
      version: 'v2.6.0',
      title: 'Ensemble Learning & Premium SVG Analytics',
      icon: <MonitorPlay className="w-5 h-5" />,
      changes: [
        'Added Lecture 10: Ensemble Methods, comprehensively covering Bagging, Boosting, and Random Forests.',
        'Launched Quiz 3 for Machine Learning featuring a rich, interactive Explanation Review Guide for Ensemble concepts.',
        'Upgraded all lecture and quiz SVGs to a premium dark-mode aesthetic with custom glassmorphic wrappers.',
        'Enhanced MCQ presentation with highly polished UI cards that beautifully encapsulate complex diagrams.',
        'Resolved underlying MathJax rendering issues within quiz modules to ensure flawless mathematical notation.'
      ],
      type: 'feature'
    },
    {
      date: 'May 9, 2026',
      version: 'v2.5.0',
      title: 'Smart Scheduler & Premium UI Overhaul',
      icon: <Rocket className="w-5 h-5" />,
      changes: [
        'Launched the Smart Scheduler — an intelligent workflow tool for students to generate, manage, and track personalized study sessions.',
        'Implemented a platform-wide Premium Glassmorphic Design System featuring high-fidelity card shines, dynamic radial glows, and interactive squircles.',
        'Introduced the Smart Coach and a comprehensive student onboarding manual for real-time guidance and navigation support.',
        'Added a new interactive Quiz 1 for Smart Systems covering Python fundamentals and NumPy essentials.',
        'Unified the visual language of home page subject cards and sidebar panels for a cohesive, state-of-the-art aesthetic.'
      ],
      type: 'launch'
    },
    {
      date: 'Early May 2026',
      version: 'v2.1.0',
      title: 'Intelligent Programming & PDF Upgrades',
      icon: <FileText className="w-5 h-5" />,
      changes: [
        'Launched comprehensive lecture modules and new interactive quizzes for Intelligent Programming.',
        'Engineered a high-fidelity PDF generator featuring a dedicated high-contrast light mode for flawless code readability.',
        'Resolved complex rendering bugs across subject modules to ensure a seamless study experience.'
      ],
      type: 'feature'
    },
    {
      date: 'Late April 2026',
      version: 'v2.0.0',
      title: 'Cinematic Home Page & UI Revamp',
      icon: <Palette className="w-5 h-5" />,
      changes: [
        'Overhauled the Sahla home page with a high-performance, scroll-driven animation architecture using Three.js and GSAP.',
        'Introduced immersive parallax visuals, scroll-synchronized counters, and fluid path-morphing SVG animations.',
        'Modernized academic tables with a premium, glassmorphic dark-theme aesthetic and interactive row hover effects.'
      ],
      type: 'launch'
    },
    {
      date: 'Mid April 2026',
      version: 'v1.9.5',
      title: 'Collaborator Platform & AI Department',
      icon: <Sparkles className="w-5 h-5" />,
      changes: [
        'Announced the official launch of the AI and Data Science department, expanding our curriculum.',
        'Introduced the "Holographic Glass" recruitment banner for the Sahla contributor program.',
        'Stabilized the collaborator submission form with real-time database synchronization and robust error handling.'
      ],
      type: 'improvement'
    },
    {
      date: 'Early April 2026',
      version: 'v1.9.0',
      title: 'Core Stability & Performance Fixes',
      icon: <Wrench className="w-5 h-5" />,
      changes: [
        'Fixed critical infinite-loading deadlocks that occasionally affected first-time visitors.',
        'Enhanced core application state management for faster authentication and routing.',
        'Optimized layout responsiveness and typography scaling across all mobile devices.'
      ],
      type: 'fix'
    }
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'feature': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'improvement': return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'launch': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'fix': return 'text-orange-400 bg-orange-500/10 border-orange-500/20';
      default: return 'text-accent-400 bg-accent-500/10 border-accent-500/20';
    }
  };

  return (
    <>
      <Helmet>
        <title>What's New — Sahla Updates</title>
        <meta name="description" content="Check out the latest updates, new features, and improvements on the Sahla educational platform." />
      </Helmet>

      <div className={`flex-1 w-full max-w-4xl mx-auto px-4 py-12 md:py-20 ${fontFamily}`}>
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <ScrollReveal variant="fadeIn">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              <span>Changelog</span>
            </div>
          </ScrollReveal>
          <TextReveal as="h1" mode="words" staggerAmount={0.04} className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            What's New
          </TextReveal>
          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              We're constantly improving Sahla to give you the best studying experience. 
              Here is a look at our latest features and updates.
            </p>
          </ScrollReveal>
        </div>

        {/* Updates Timeline */}
        <div className="relative pl-6 md:pl-10">
          {/* Glowing vertical line */}
          <div className="absolute left-[11px] md:left-[19px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-accent-500/50 via-white/10 to-transparent"></div>

          <div className="space-y-16">
            {updates.map((update, idx) => (
              <ScrollReveal key={idx} variant="fadeUp" delay={idx * 0.1}>
                <div className="relative group">
                  
                  {/* Timeline Node / Icon */}
                  <div className="absolute -left-6 md:-left-10 mt-1.5 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-accent-500/30 bg-dark-900 shadow-[0_0_15px_rgba(var(--accent-500-rgb),0.3)] z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-accent-500 group-hover:shadow-[0_0_25px_rgba(var(--accent-500-rgb),0.6)]">
                    <div className="text-accent-400 group-hover:text-accent-300 transition-colors">
                      {React.cloneElement(update.icon, { className: 'w-4 h-4 md:w-5 md:h-5' })}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="glass-tier-2 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 ml-6 md:ml-10 relative overflow-hidden group-hover:-translate-y-1">
                    {/* Subtle glow inside card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex flex-wrap items-center gap-3 mb-5 relative z-10">
                      <span className="text-white/50 text-sm font-medium">{update.date}</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/5 text-white/70 border border-white/10">
                        {update.version}
                      </span>
                      <span className={`text-[10px] uppercase tracking-widest font-black px-2 py-0.5 rounded-full border ${getTypeColor(update.type)} shadow-sm`}>
                        {update.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight relative z-10 group-hover:text-accent-100 transition-colors">
                      {update.title}
                    </h3>
                    
                    <ul className="space-y-4 relative z-10">
                      {update.changes.map((change, changeIdx) => (
                        <li key={changeIdx} className="flex items-start gap-4 text-white/70 text-[15px] leading-relaxed group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-500/40 mt-2 shrink-0 group-hover/item:bg-accent-400 group-hover/item:shadow-[0_0_8px_rgba(var(--accent-400-rgb),0.8)] transition-all" />
                          <span className="group-hover/item:text-white/90 transition-colors">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
