import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, CalendarClock } from 'lucide-react';
import { Button, Avatar, NotificationIcon } from '../ui';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useAuthStore } from '@/stores/authStore';
import { useMonitorAccess } from '@/features/deadlines/hooks/useMonitorAccess';
import { SearchModal } from './SearchModal';
import { useNotificationStore } from '@/stores/notificationStore.jsx';

const NavbarInner = () => {
  const { t, i18n } = useTranslation('common');
  const profile = useAuthStore((s) => s.profile);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const { isMonitor, isAdmin } = useMonitorAccess();
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans';
  const isRtl = i18n.language === 'ar';
  
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    let lastKnownScrollY = 0;
    let ticking = false;

    const updateScrollState = () => {
      setScrolled(lastKnownScrollY > 50);
      ticking = false;
    };

    const handleScroll = () => {
      lastKnownScrollY = window.scrollY;
      if (!ticking) {
        rafRef.current = requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const openSearch = useCallback(() => setIsSearchOpen(true), []);
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);

  const navLinks = [
    { to: '/', label: 'nav.subjects', default: 'Subjects' },
    { to: '/leaderboard', label: 'nav.leaderboard', default: 'Leaderboard' },
    { to: '/scheduler', label: 'nav.scheduler', default: 'Scheduler' },
    { to: '/progress', label: 'nav.progress', default: 'Progress' },
    { to: '/bookmarks', label: 'nav.bookmarks', default: 'Bookmarks' },
    { to: '/deadlines', label: 'nav.deadlines', default: 'Deadlines' },
  ];

  const navBgClass = scrolled 
    ? 'w-full max-w-7xl px-3 sm:px-6 py-2.5 sm:py-3 rounded-full' 
    : 'w-full max-w-7xl px-2 sm:px-4 py-3 sm:py-4 border-transparent bg-transparent';

  const scrolledStyle = scrolled ? {
    background: 'var(--glass-bg)',
    backdropFilter: 'blur(48px) saturate(180%)',
    WebkitBackdropFilter: 'blur(48px) saturate(180%)',
    border: '1px solid var(--border-strong)',
    boxShadow: 'var(--shadow-lg)',
  } : {};

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[200] p-2 md:p-6 pointer-events-none"
      dir={isRtl ? 'rtl' : 'ltr'}
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >
      <div 
        className={`mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 ease-out ${navBgClass}`}
        style={scrolledStyle}
      >
        {/* Left Side: Logo */}
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          <div className="cursor-pointer group shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 overflow-hidden relative ${scrolled ? 'scale-90' : 'scale-100'}`}>
                <img src="/favicon.svg" alt="Sahla Logo" className="w-full h-full object-contain" width="32" height="32" onError={(e) => { e.target.style.display = 'none' }} />
              </div>
              <div className="flex flex-col -space-y-0.5 text-start hidden sm:flex">
                <span className={`text-lg font-black tracking-tighter transition-all duration-500 ${fontFamily}`} style={{ color: 'var(--text-primary)' }}>
                  {t('app.name', 'Sahla')}
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-1 justify-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `text-sm font-bold transition-all px-4 py-2 rounded-full ${
                  isActive 
                    ? 'bg-secondary-500/10 border border-secondary-500/20' 
                    : 'border border-transparent hover:bg-[var(--hover-overlay)]'
                } ${fontFamily}`
              }
              style={({ isActive }) => ({
                color: isActive ? 'var(--text-accent)' : 'var(--text-tertiary)',
              })}
            >
              {t(link.label, link.default)}
            </NavLink>
          ))}
        </div>

        {/* Right Side: Tools & Profile */}
        <div className="flex items-center gap-1 sm:gap-3 flex-1 justify-end">
          <button 
            onClick={openSearch}
            className="p-2 rounded-full transition-colors"
            style={{ color: 'var(--text-tertiary)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-tertiary)'}
          >
            <Search size={18} />
          </button>

          {/* Theme Toggle */}
          <ThemeToggle variant="icon" />

          {isAuthenticated && (
            <NavbarBell />
          )}
          
          <div className="w-px h-4 hidden sm:block" style={{ background: 'var(--border-default)' }} />

          {/* Admin Dashboard */}
          {(profile?.role === 'admin' || profile?.role === 'super_admin') && (
            <Link 
              to="/admin" 
              className="hidden lg:flex p-2 text-secondary-400 hover:bg-secondary-500/10 rounded-full transition-colors"
              title="Admin Dashboard"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
            </Link>
          )}

          {/* Monitor Dashboard */}
          {(isMonitor || isAdmin) && (
            <Link 
              to="/monitor/deadlines" 
              className="hidden lg:flex p-2 text-accent-400 hover:bg-accent-500/10 rounded-full transition-colors"
              title="Monitor Dashboard"
            >
              <CalendarClock size={20} />
            </Link>
          )}

          <div className="w-px h-4 hidden sm:block" style={{ background: 'var(--border-default)' }} />

          {isAuthenticated ? (
            <Link to="/profile" className="flex items-center gap-2 group transition-all">
              <Avatar 
                size="sm" 
                src={profile?.avatar_url}
                name={profile?.full_name || 'User'} 
                className={`border transition-all duration-300 ${scrolled ? 'border-[var(--border-strong)]' : 'border-[var(--border-default)]'} group-hover:border-secondary-400/50 shadow-lg`} 
              />
            </Link>
          ) : (
             <Button variant="primary" size="sm" as={Link} to="/login" className="px-5">
                {t('actions.signIn', 'Sign In')}
             </Button>
          )}
        </div>
      </div>
      
      {isSearchOpen && <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />}
    </nav>
  );
};

// ── Navbar Bell with live unread badge ────────────────────────────
const NavbarBell = () => {
  const unreadCount = useNotificationStore(s => s.unreadCount);
  
  
  return (
    <Link
      to="/notifications"
      className="relative p-1 rounded-full transition-colors group flex items-center justify-center"
      style={{ color: 'var(--text-tertiary)' }}
    >
      <NotificationIcon size={22} active={unreadCount > 0} />
      {unreadCount > 0 && (
        <div 
          className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] bg-accent-500 rounded-full flex items-center justify-center animate-bounce-in pointer-events-none"
          style={{ border: '1.5px solid var(--bg-base)', boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)' }}
        >
          <span className="text-[8px] font-black text-white leading-none px-0.5">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        </div>
      )}
    </Link>
  );
};


export const Navbar = memo(NavbarInner);
