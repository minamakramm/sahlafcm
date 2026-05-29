import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Home, Bookmark, User, GraduationCap, Bell, LayoutDashboard, CalendarClock, Zap, Trophy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { useMonitorAccess } from '@/features/deadlines/hooks/useMonitorAccess';
import { useNotificationStore } from '@/stores/notificationStore.jsx';

const BottomNavInner = () => {
  const { t, i18n } = useTranslation('common');
  const location = useLocation();
  const profile = useAuthStore((s) => s.profile);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';
  const isRtl = i18n.language === 'ar';
  const { isMonitor, isAdmin } = useMonitorAccess();
  const unreadCount = useNotificationStore(s => s.unreadCount);

  const items = useMemo(() => [
    { id: 'home', icon: Home, labelKey: 'nav.home', default: 'Home', path: '/' },
    ...(isAuthenticated ? [
      { id: 'notifications', icon: Bell, labelKey: 'nav.notifications', default: 'Alerts', path: '/notifications' },
      { id: 'leaderboard', icon: Trophy, labelKey: 'nav.leaderboard', default: 'Rank', path: '/leaderboard' },
      { id: 'deadlines', icon: CalendarClock, labelKey: 'nav.deadlines', default: 'Deadlines', path: '/deadlines' },
      { id: 'scheduler', icon: Zap, labelKey: 'nav.scheduler', default: 'Scheduler', path: '/scheduler' },
      ...(isMonitor || isAdmin ? [{ id: 'monitor', icon: LayoutDashboard, labelKey: 'nav.monitor', default: 'Manage', path: '/monitor/deadlines' }] : []),
      ...(isAdmin ? [{ id: 'admin', icon: LayoutDashboard, labelKey: 'nav.admin', default: 'Admin', path: '/admin' }] : []),
      { id: 'progress', icon: GraduationCap, labelKey: 'nav.progress', default: 'Progress', path: '/progress' },
      { id: 'bookmarks', icon: Bookmark, labelKey: 'nav.bookmarks', default: 'Saved', path: '/bookmarks' },
    ] : []),
    { id: 'profile', icon: User, labelKey: 'nav.profile', default: 'Profile', path: '/profile' }
  ], [isAuthenticated, isAdmin, isMonitor]);

  return (
    <div className="md:hidden fixed bottom-6 left-0 right-0 z-[100] px-4 pointer-events-none">
      <nav
        className="mx-auto max-w-lg pointer-events-auto relative overflow-hidden rounded-[2.5rem]"
        style={{
          background: 'var(--glass-tier-2-bg)',
          backdropFilter: 'blur(48px) saturate(180%)',
          WebkitBackdropFilter: 'blur(48px) saturate(180%)',
          border: '1px solid var(--border-strong)',
          boxShadow: 'var(--shadow-xl)',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      >
        {/* Glossy top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(to right, transparent, var(--glass-highlight), transparent)` }} />
        
        <div className={`flex justify-around items-center h-20 px-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.id}
                to={item.path}
                className="relative flex flex-col items-center justify-center flex-1 h-full transition-transform duration-150 active:scale-95 group outline-none"
              >
                {isActive && (
                  <div className="absolute inset-x-1 inset-y-3 rounded-2xl bg-secondary-500/10 border border-secondary-500/20 z-0" style={{ boxShadow: 'var(--shadow-sm)' }} />
                )}

                <div className="relative z-10 flex flex-col items-center gap-1">
                  <Icon 
                    size={22} 
                    strokeWidth={isActive ? 2.5 : 2}
                    className="transition-all duration-300"
                    style={{ 
                      color: isActive ? 'var(--color-brand-accent)' : 'rgba(165, 180, 252, 0.5)',
                      filter: isActive ? 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.6))' : 'none'
                    }}
                  />
                  
                  <span
                    className={`text-[10px] font-bold transition-colors duration-300 whitespace-nowrap ${fontFamily}`}
                    style={{ color: isActive ? 'var(--color-brand-accent)' : 'rgba(165, 180, 252, 0.4)' }}
                  >
                    {t(item.labelKey, item.default)}
                  </span>
                  
                  {isActive && (
                    <div className="absolute -bottom-2 w-1.5 h-1 rounded-full bg-accent-400" style={{ boxShadow: '0 0 12px rgba(56, 189, 248, 0.9)' }} />
                  )}
                  {/* Unread notification badge */}
                  {item.id === 'notifications' && unreadCount > 0 && (
                    <div 
                      className="absolute -top-1 -right-1 min-w-[16px] h-[16px] bg-accent-500 rounded-full flex items-center justify-center"
                      style={{ border: '2px solid var(--bg-base)', boxShadow: '0 0 8px rgba(56,189,248,0.5)' }}
                    >
                      <span className="text-[8px] font-black text-white leading-none">{unreadCount > 9 ? '9+' : unreadCount}</span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export const BottomNav = memo(BottomNavInner);
