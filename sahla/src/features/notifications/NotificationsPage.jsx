import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BellOff, Info, CheckCircle2, Star, Calendar, Megaphone, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNotificationStore } from '@/stores/notificationStore.jsx';
import { NotificationIcon } from '@/components/ui';
import { formatDistanceToNow } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';

const FILTER_TABS = [
  { key: 'all', label: 'All', labelAr: 'الكل' },
  { key: 'update', label: 'Updates', labelAr: 'تحديثات' },
  { key: 'info', label: 'Info', labelAr: 'معلومات' },
  { key: 'event', label: 'Events', labelAr: 'أحداث' },
];

export default function NotificationsPage() {
  const { t, i18n } = useTranslation('common');
  const navigate = useNavigate();
  const { 
    notifications, isLoading, fetchNotifications, subscribeToBroadcasts,
    unreadCount, markAllAsRead, markAsRead, isRead,
    activeFilter, setActiveFilter, getFilteredNotifications
  } = useNotificationStore();
  
  const isAr = i18n.language === 'ar';
  const fontFamily = isAr ? 'font-arabic' : 'font-sans';
  const dateLocale = isAr ? ar : enUS;

  useEffect(() => {
    fetchNotifications();
    const cleanup = subscribeToBroadcasts();
    return () => cleanup && cleanup();
  }, []);

  // Auto-mark as read when user visits this page
  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => markAllAsRead(), 2000);
      return () => clearTimeout(timer);
    }
  }, [notifications.length]);

  const getIcon = (type) => {
    switch (type) {
      case 'update': return <Star size={20} className="text-accent-400" />;
      case 'system': return <CheckCircle2 size={20} className="text-secondary-400" />;
      case 'info': return <Info size={20} className="text-secondary-300" />;
      case 'event': return <Calendar size={20} className="text-accent-500" />;
      case 'promo': return <Megaphone size={20} className="text-pink-400" />;
      default: return <NotificationIcon size={20} active={false} animated={false} />;
    }
  };

  const filtered = getFilteredNotifications();

  return (
    <>
      <Helmet>
        <title>{t('nav.notifications', 'Notifications')} — Sahla</title>
      </Helmet>

      <div className={`min-h-screen pt-4 pb-20 px-4 max-w-2xl mx-auto w-full ${fontFamily}`} dir={isAr ? 'rtl' : 'ltr'}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4 mt-6 md:mt-12">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white transition-all active:scale-95"
            >
              <ArrowLeft size={20} className={isAr ? 'rotate-180' : ''} />
            </button>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tighter">
                {t('nav.notifications', 'Notifications')}
              </h1>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">
                {t('notifications.updates', 'Platform Broadcasts')}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Mark all as read button */}
            {unreadCount > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={markAllAsRead}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-[10px] font-bold uppercase tracking-widest hover:bg-accent-500/20 transition-all active:scale-95"
              >
                <Eye size={12} />
                {isAr ? 'قراءة الكل' : 'Read All'}
              </motion.button>
            )}
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-12 h-12 rounded-2xl bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center text-secondary-400">
                 <NotificationIcon size={26} active={unreadCount > 0} animated={true} />
              </div>
            </div>

          </div>
        </div>

        {/* Categories Tabs — Now functional */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
           {FILTER_TABS.map((tab) => {
             const isActive = activeFilter === tab.key;
             const count = tab.key === 'all' ? notifications.length : notifications.filter(n => n.type === tab.key).length;
             return (
               <button 
                 key={tab.key}
                 onClick={() => setActiveFilter(tab.key)}
                 className={`px-5 py-2 rounded-full border text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap flex items-center gap-2 ${
                   isActive 
                     ? 'bg-secondary-500/10 border-secondary-500/20 text-secondary-400' 
                     : 'bg-white/5 border-white/5 text-white/30 hover:border-white/10'
                 }`}
               >
                 {isAr ? tab.labelAr : tab.label}
                 {count > 0 && (
                   <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${isActive ? 'bg-secondary-500/20 text-secondary-300' : 'bg-white/5 text-white/20'}`}>
                     {count}
                   </span>
                 )}
               </button>
             );
           })}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
           {isLoading ? (
             <div className="space-y-4">
               {[1,2,3].map(i => (
                 <div key={i} className="h-24 w-full bg-white/5 animate-pulse rounded-[1.5rem]" />
               ))}
             </div>
           ) : filtered.length > 0 ? (
             <AnimatePresence mode="popLayout">
               {filtered.map((note, index) => {
                 const noteIsRead = isRead(note.id);
                 return (
                   <motion.div
                     key={note.id}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ delay: index * 0.05 }}
                     onClick={() => markAsRead(note.id)}
                     className={`p-[clamp(1rem,3vw,2rem)] rounded-[1.5rem] border transition-all cursor-pointer ${
                       noteIsRead 
                         ? 'glass-tier-2 border-white/5 bg-white/[0.01]' 
                         : 'glass-tier-2 border-secondary-500/20 bg-secondary-500/[0.03]'
                     } hover:border-white/20`}
                   >
                     <div className="flex gap-4 relative z-10">
                        {/* Unread indicator dot */}
                        {!noteIsRead && (
                          <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-accent-500 rounded-full" style={{ boxShadow: '0 0 8px rgba(56,189,248,0.6)' }} />
                        )}
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center border bg-white/5 border-white/10 shrink-0">
                           {getIcon(note.type)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                           <div className="flex items-center justify-between gap-2 mb-1">
                              <h3 className={`font-black tracking-tight truncate ${noteIsRead ? 'text-white/70' : 'text-white'}`}>
                                {note.title}
                              </h3>
                              <span className="text-[10px] font-bold text-white/20 uppercase whitespace-nowrap">
                                {formatDistanceToNow(new Date(note.created_at), { addSuffix: true, locale: dateLocale })}
                              </span>
                           </div>
                           <p className={`text-sm leading-relaxed font-medium break-words ${noteIsRead ? 'text-white/30' : 'text-white/40'}`}>
                             {note.message}
                           </p>
                           
                           {note.type === 'update' && (
                             <button
                               onClick={async (e) => {
                                 e.stopPropagation();
                                 if ('caches' in window) {
                                   try {
                                     const names = await caches.keys();
                                     await Promise.all(names.map(name => caches.delete(name)));
                                   } catch (e) {}
                                 }
                                 window.location.reload(true);
                               }}
                               className="mt-4 px-4 py-2 bg-accent-500/10 text-accent-400 border border-accent-500/20 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-accent-500/20 transition-all active:scale-95 flex items-center gap-2 w-max"
                             >
                               <CheckCircle2 size={16} />
                               {t('notifications.hardRefresh', 'Apply Update')}
                             </button>
                           )}
                        </div>
                     </div>
                   </motion.div>
                 );
               })}
             </AnimatePresence>
           ) : (
             <div className="text-center py-20 bg-white/[0.02] rounded-[2rem] border border-dashed border-white/10">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-white/10">
                   <BellOff size={32} />
                </div>
                <h3 className="text-white font-bold">{t('notifications.emptyTitle', 'All caught up!')}</h3>
                <p className="text-xs text-white/20 mt-1 uppercase tracking-widest font-black">
                   {activeFilter !== 'all' 
                     ? (isAr ? 'لا توجد إشعارات في هذه الفئة' : `No ${activeFilter} notifications right now`)
                     : t('notifications.emptyDesc', 'No new alerts for you right now')
                   }
                </p>
             </div>
           )}
        </div>
        
        {/* Footer info */}
        <div className="mt-12 p-[clamp(1rem,3vw,2rem)] rounded-[2rem] bg-accent-500/5 border border-accent-500/10 flex items-start gap-4">
           <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 shrink-0">
              <Info size={20} />
           </div>
           <p className="text-xs text-accent-200/60 leading-relaxed font-medium">
             {t('notifications.policy', 'We only notify you about major content additions, platform updates, and scheduled maintenance. No spam, just excellence.')}
           </p>
        </div>
      </div>
    </>
  );
}
