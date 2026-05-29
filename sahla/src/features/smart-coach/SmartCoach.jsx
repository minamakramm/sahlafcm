import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { Sparkles, X, Heart, Clock, Trophy, Moon, Coffee, Bell, Zap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNotificationStore } from '@/stores/notificationStore.jsx';

/**
 * SmartCoach Component
 * Monitors student activity and provides personalized, encouraging notifications.
 * Now integrated with the notification store for unread-count awareness.
 */
export const SmartCoach = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isRtl = i18n.language === 'ar';
  const fontFamily = isRtl ? 'font-arabic' : 'font-sans';

  // State to track session activity
  const sessionStartTime = useRef(Date.now());
  const lastCoachTime = useRef(0);
  const idleTimer = useRef(null);
  const lectureCount = useRef(0);
  const pageVisits = useRef(new Set());

  const COOLDOWN = 1000 * 60 * 12; // 12 minutes between coaching messages

  const getRandomMessage = (key) => {
    const messages = t(`smartCoach.${key}`, { returnObjects: true });
    if (Array.isArray(messages)) {
      return messages[Math.floor(Math.random() * messages.length)];
    }
    return messages;
  };

  const showCoachMessage = (key, icon = <Sparkles size={18} />, options = {}) => {
    const now = Date.now();
    // Don't show if we already coached recently (unless forced)
    if (!options.force && now - lastCoachTime.current < COOLDOWN) return;

    lastCoachTime.current = now;
    const message = typeof key === 'string' && key.includes(' ') ? key : getRandomMessage(key);

    toast.custom((t_obj) => (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`${
          t_obj.visible ? 'animate-enter' : 'animate-leave'
        } max-w-sm w-full bg-[#0f0e1a]/90 backdrop-blur-2xl border border-indigo-500/20 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto p-5 flex items-start gap-4 ring-1 ring-white/5 z-[9999]`}
      >
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shadow-inner">
            {icon}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] font-black uppercase tracking-widest text-indigo-400 ${fontFamily}`}>
              {isRtl ? 'مدرب سهلة الذكي' : 'Sahla Smart Coach'}
            </span>
            <div className="h-1 w-1 rounded-full bg-indigo-500/40 animate-pulse" />
          </div>
          <p className={`text-[0.925rem] font-medium text-white/90 leading-relaxed ${fontFamily}`}>
            {message}
          </p>
        </div>

        <button
          onClick={() => toast.dismiss(t_obj.id)}
          className="shrink-0 p-1 hover:bg-white/5 rounded-lg text-white/20 hover:text-white transition-colors"
        >
          <X size={14} />
        </button>
      </motion.div>
    ), { duration: options.duration || 7000, position: 'bottom-right' });
  };

  useEffect(() => {
    // 1. Check for time-based triggers
    const checkTimeTriggers = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour <= 10) showCoachMessage('morning', <Trophy size={18} />);
      else if (hour >= 0 && hour <= 4) showCoachMessage('lateNight', <Moon size={18} />);
    };

    checkTimeTriggers();

    // 2. Track study duration for break reminders
    const breakTimer = setInterval(() => {
      const elapsed = Date.now() - sessionStartTime.current;
      if (elapsed > 1000 * 60 * 40) { 
        showCoachMessage('breakReminder', <Coffee size={18} />);
        sessionStartTime.current = Date.now();
      }
    }, 1000 * 60 * 5);

    // 3. Idle motivation
    const resetIdleTimer = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        showCoachMessage('motivation', <Heart size={18} />);
      }, 1000 * 60 * 20); // 20 minutes of inactivity
    };

    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('keydown', resetIdleTimer);
    resetIdleTimer();

    return () => {
      clearInterval(breakTimer);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('keydown', resetIdleTimer);
    };
  }, []);

  // 4. Monitor location changes for contextual coaching
  useEffect(() => {
    const path = location.pathname;

    // Track unique pages visited this session
    pageVisits.current.add(path);

    // Welcome back or Promotion
    if (path === '/') {
      const now = Date.now();
      const elapsed = now - sessionStartTime.current;
      
      // Welcome back (early in session)
      if (elapsed < 5000) {
        setTimeout(() => showCoachMessage('welcomeBack', <Heart size={18} />), 1500);
      }
      
      // Promote Collaborate page (after 8 seconds on home)
      const hasSeenPromo = localStorage.getItem('sahla-promo-collaborate');
      if (!hasSeenPromo && elapsed < 20000) {
        const timer = setTimeout(() => {
          showCoachMessage('promoteCollaborate', <Sparkles size={18} />);
          localStorage.setItem('sahla-promo-collaborate', 'true');
        }, 8000);
        return () => clearTimeout(timer);
      }
    }

    // Subject entry
    if (path.startsWith('/subjects/') && !path.includes('/lecture') && !path.includes('/exam')) {
      showCoachMessage('subjectStart', <Sparkles size={18} />);
    }

    // Exam entry
    if (path.includes('/exam')) {
      showCoachMessage('examPrep', <Trophy size={18} />);
    }

    // Studying encouragement
    if (path.includes('/lecture/')) {
      lectureCount.current += 1;
      
      // Milestone: studied 3+ lectures in one session
      if (lectureCount.current === 3) {
        setTimeout(() => showCoachMessage('studyStreak', <Zap size={18} />, { force: true }), 2000);
      }
      
      const timer = setTimeout(() => {
        showCoachMessage('studyProgress', <Clock size={18} />);
        
        // Randomly nudge to check leaderboard after some study time
        if (Math.random() > 0.7) {
          setTimeout(() => showCoachMessage('leaderboardNudge', <TrendingUp size={18} />), 1000 * 60 * 3);
        }
      }, 1000 * 60 * 4);
      return () => clearTimeout(timer);
    }

    // Notification nudge: remind about unread notifications when browsing
    if (path !== '/notifications') {
      const checkUnread = setTimeout(() => {
        const { unreadCount } = useNotificationStore.getState();
        if (unreadCount >= 3) {
          showCoachMessage('unreadReminder', <Bell size={18} />);
        }
      }, 1000 * 60 * 8); // After 8 minutes of browsing
      return () => clearTimeout(checkUnread);
    }

    // Leaderboard visits
    if (path === '/leaderboard') {
      showCoachMessage('leaderboardVisit', <Trophy size={18} />);
    }

    // Bookmarks encouragement
    if (path === '/bookmarks') {
      showCoachMessage('bookmark', <BookOpen size={18} />);
    }
  }, [location.pathname]);

  return null;
};
