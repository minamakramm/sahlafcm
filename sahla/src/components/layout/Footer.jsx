import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Users } from 'lucide-react';

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const fontFamily = isAr ? 'font-arabic' : 'font-sans';

  const guides = [
    { label: 'Intelligent Programming', to: '/subjects/intelligent-programming' },
    { label: 'Data Mining', to: '/subjects/data-mining' },
    { label: 'Smart Systems', to: '/subjects/smart-systems' },
    { label: 'Machine Learning', to: '/subjects/machine-learning' },
    { label: 'Neural Networks', to: '/subjects/neural-networks' },
  ];

  return (
    <footer className="glass-tier-1 mt-auto rounded-none" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12 pb-32 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="/favicon.svg" alt="Sahla" className="w-8 h-8" onError={(e) => { e.target.style.display = 'none' }} />
              <div className={`font-bold text-2xl text-[var(--text-primary)] ${fontFamily}`}>
                Sahla
              </div>
            </div>
            <p className={`text-sm text-[var(--text-tertiary)] leading-relaxed ${fontFamily}`}>
              {t('footer.description', 'Built for students who are serious about learning — w mesh 3ayzeen yedoo5 fi el internet.')}
            </p>
            <div className="flex flex-col gap-3 mt-1">
              <a href="https://wa.me/201029373214" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-brand)] transition-colors w-fit ${fontFamily}`}>
                <MessageCircle size={16} />
                Support: +20 102 937 3214
              </a>
              <a href="https://chat.whatsapp.com/Cqrhg1cjdotJktytDUKAnA?mode=wwt" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-brand)] transition-colors w-fit ${fontFamily}`}>
                <Users size={16} />
                Join WhatsApp Group
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className={`text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] ${fontFamily}`}>
               <div className="flex items-center gap-2">
                 {t('footer.navigation', 'Navigation')}
               </div>
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'nav.home', to: '/' },
                { label: 'nav.subjects', to: '/' },
                { label: 'nav.scheduler', to: '/scheduler', default: 'Scheduler' },
                { label: 'footer.about', to: '/about', default: 'About Sahla' },
                { label: 'footer.whatsNew', to: '/whats-new', default: 'What\'s New' },
                { label: 'footer.collaborate', to: '/collaborate', default: 'Collaborate' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to} className={`text-sm text-[var(--text-tertiary)] hover:text-accent-400 transition-colors ${fontFamily}`}>
                    {t(link.label, link.default)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className={`text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] ${fontFamily}`}>
               <div className="flex items-center gap-2">Legal</div>
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'footer.privacy', to: '/privacy', default: 'Privacy Policy' },
                { label: 'footer.terms', to: '/terms', default: 'Terms of Service' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to} className={`text-sm text-[var(--text-tertiary)] hover:text-accent-400 transition-colors ${fontFamily}`}>
                    {t(link.label, link.default)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Major Guides */}
          <div className="flex flex-col gap-4">
            <h4 className={`text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] ${fontFamily}`}>
               <div className="flex items-center gap-2">
                 {t('footer.majorGuides', 'Major Guides')}
               </div>
            </h4>
            <ul className="flex flex-col gap-2">
              {guides.map((guide, idx) => (
                <li key={idx}>
                  <Link to={guide.to} className={`text-sm text-[var(--text-tertiary)] hover:text-accent-400 transition-colors ${fontFamily}`}>
                    {guide.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <p className={`text-[11px] text-[var(--text-tertiary)] leading-relaxed max-w-md flex flex-wrap justify-center md:justify-start items-center gap-1 ${fontFamily}`}>
            <span>All content & design ©</span>
            <a href="https://mina-makram.web.app/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-brand)] font-bold transition-colors underline whitespace-nowrap">Mina Makram</a>
            <span>2026. Don't copy, create.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
