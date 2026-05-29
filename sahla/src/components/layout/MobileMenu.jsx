import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, GraduationCap, Bookmark, ChevronRight, UserCircle, Settings, LogOut, CalendarClock, Zap, Trophy } from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { useMonitorAccess } from '@/features/deadlines/hooks/useMonitorAccess';

export const MobileMenu = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();
  const profile = useAuthStore((s) => s.profile);
  const signOut = useAuthStore((s) => s.signOut);
  const { isMonitor, isAdmin } = useMonitorAccess();
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';
  const isRtl = i18n.language === 'ar';

  const navLinks = [
    { to: '/', icon: BookOpen, name: t('nav.subjects', 'Subjects') },
    { to: '/leaderboard', icon: Trophy, name: t('nav.leaderboard', 'Leaderboard') },
    { to: '/scheduler', icon: Zap, name: t('nav.scheduler', 'Scheduler') },
    { to: '/deadlines', icon: CalendarClock, name: t('nav.deadlines', 'Deadlines') },
    { to: '/progress', icon: GraduationCap, name: t('nav.progress', 'Progress') },
    { to: '/bookmarks', icon: Bookmark, name: t('nav.bookmarks', 'Bookmarks') },
  ];

  if (isMonitor || isAdmin) {
    navLinks.push({ to: '/monitor/deadlines', icon: Settings, name: t('nav.monitor', 'Monitor') });
  }

  const handleLogout = async () => {
    onClose();
    await signOut();
    navigate('/');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Ultra-Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] lg:hidden"
          />
          
          <motion.nav
            initial={{ x: isRtl ? '-100%' : '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isRtl ? '-100%' : '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed top-20 bottom-[115px] ${isRtl ? 'left-4' : 'right-4'} w-[calc(100vw-2rem)] max-w-[320px] glass-tier-3 rounded-[2.5rem] z-[400] lg:hidden border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] flex flex-col will-change-transform ${fontFamily}`}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            <div className="flex flex-col h-full relative overflow-hidden pt-safe">
              {/* Simplified decorative background */}
              <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} w-48 h-48 bg-accent-500/10 blur-[60px] rounded-full pointer-events-none`} />
              
              {/* Mobile Header */}
              <div className={`w-full p-5 flex items-center justify-between border-b border-white/[0.05] relative z-10 ${isRtl ? 'text-right' : 'text-left'}`}>
                 <div className="space-y-0.5">
                   <p className="text-[9px] font-black text-accent-500/80 uppercase tracking-[0.3em]">Navigation</p>
                   <h2 className="text-xl font-black text-white uppercase tracking-tighter italic leading-none">{t('app.name', 'Sahla')}</h2>
                 </div>
                 <button 
                   onClick={onClose}
                   className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.05] text-white hover:bg-white/[0.1] transition-all active:scale-90"
                 >
                   <X className="w-5 h-5" />
                 </button>
              </div>

              <div className="w-full flex-1 overflow-y-auto px-5 py-6 space-y-8 custom-scrollbar relative z-10">
                {/* Account Insight */}
                {profile && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between px-1">
                      <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Identity</p>
                    </div>
                    
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-accent-200/10 rounded-[1.25rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center gap-3 p-3 rounded-[1.25rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-lg transition-transform duration-500 group-hover:bg-white/[0.05]">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent-500 to-accent-300 p-[2px] shadow-lg shrink-0">
                          <div className="w-full h-full rounded-full bg-[#000000] flex items-center justify-center overflow-hidden uppercase font-black text-lg text-white">
                            {profile?.avatar_url ? (
                              <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                            ) : (
                              profile?.full_name ? profile.full_name[0] : <UserCircle size={24} />
                            )}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-black text-white truncate uppercase tracking-tight italic">{profile?.full_name || 'Authorized'}</p>
                          <p className="text-[9px] text-accent-500 truncate font-black tracking-widest mt-0.5 uppercase">
                            {profile?.email || 'ID://LIVE'}
                          </p>
                        </div>
                        <Link 
                          to="/profile" 
                          onClick={onClose}
                          className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 transition-all active:scale-95 hover:bg-accent-500/20"
                        >
                          <Settings className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Primary Grid */}
                <div className="space-y-3">
                  <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] px-1">{t('footer.navigation', 'Menu Links')}</p>
                  <div className="grid grid-cols-1 gap-2">
                     {navLinks.map((link) => {
                       const Icon = link.icon;
                       const isActive = location.pathname === link.to;
                       
                       return (
                         <Link
                           key={link.name}
                           to={link.to}
                           onClick={onClose}
                           className={`flex items-center gap-3 p-3.5 rounded-2xl transition-all border group ${
                             isActive 
                             ? 'bg-secondary-500/10 border-secondary-500/20 text-secondary-300 shadow-[0_10px_30px_rgba(6,182,212,0.1)]' 
                             : 'bg-white/[0.02] border-white/[0.05] text-white/60 hover:text-white hover:bg-white/[0.06] hover:border-white/20'
                           }`}
                         >
                           <div className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all group-hover:scale-110 shrink-0 ${isActive ? 'bg-secondary-500/20 text-secondary-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-white/[0.05] text-white/40'}`}>
                             <Icon className="w-4 h-4" />
                           </div>
                           <span className="text-[10px] font-black uppercase tracking-[0.2em]">{link.name}</span>
                           <ChevronRight className={`w-3 h-3 opacity-0 group-hover:opacity-60 transition-all ${isRtl ? 'mr-auto -translate-x-2 group-hover:translate-x-0 rotate-180' : 'ml-auto translate-x-2 group-hover:translate-x-0'}`} />
                         </Link>
                       );
                     })}
                  </div>
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="w-full p-5 pb-safe mt-auto border-t border-white/[0.05] bg-white/[0.01] relative z-10">
                 {profile ? (
                   <button
                     onClick={handleLogout}
                     className="w-full flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-red-500/[0.08] border border-red-500/20 text-red-400 transition-all active:scale-95 hover:bg-red-500/15 text-[10px] font-black uppercase tracking-[0.2em]"
                   >
                     <LogOut className="w-4 h-4" />
                     <span>{t('auth.logout', 'Terminate')}</span>
                   </button>
                 ) : (
                   <div className="flex flex-col gap-2.5">
                      <Link 
                        to="/login" 
                        onClick={onClose}
                        className="w-full p-4 text-center rounded-2xl bg-white/[0.05] border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/[0.1] transition-all active:scale-95"
                      >
                        {t('auth.login', 'Authenticate')}
                      </Link>
                      <Link 
                        to="/signup" 
                        onClick={onClose}
                        className="w-full p-4 text-center rounded-2xl bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(99,102,241,0.25)] hover:scale-[1.02] transition-all active:scale-95"
                      >
                        {t('auth.signup', 'Establish Access')}
                      </Link>
                   </div>
                 )}
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};
