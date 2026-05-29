import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Medal, Crown, TrendingUp, Users, Zap, Flame, BookOpen, Star, Target, Share2, Copy, Eye, EyeOff } from 'lucide-react'
import toast from 'react-hot-toast'
import { useLeaderboard } from './hooks/useLeaderboard'
import { useAuthStore } from '@/stores/authStore'
import { supabase } from '@/lib/supabase'
import { Avatar } from '@/components/ui/Avatar'
import './LeaderboardPage.css'

// ─── Animated Counter ────────────────────────────────────
function AnimatedCounter({ value, duration = 1500 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const num = typeof value === 'number' ? value : parseInt(String(value).replace(/\D/g, ''), 10) || 0
    if (!num) { setCount(0); return }
    let start = 0
    const step = Math.ceil(num / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [value, duration])
  return <span className="counter-value">{count.toLocaleString()}</span>
}

// ─── Time Ago Helper ────────────────────────────────────
function timeAgo(date) {
  if (!date) return '—'
  const seconds = Math.floor((new Date() - new Date(date)) / 1000)
  if (seconds < 0) return 'Just now'
  if (seconds < 60) return 'Just now'
  
  let interval = seconds / 31536000
  if (interval >= 1) return Math.floor(interval) + 'y ago'
  interval = seconds / 2592000
  if (interval >= 1) return Math.floor(interval) + 'mo ago'
  interval = seconds / 86400
  if (interval >= 1) return Math.floor(interval) + 'd ago'
  interval = seconds / 3600
  if (interval >= 1) return Math.floor(interval) + 'h ago'
  interval = seconds / 60
  if (interval >= 1) return Math.floor(interval) + 'm ago'
  
  return 'Just now'
}

// ─── Achievement Badges ──────────────────────────────────
const BADGES = [
  { key: 'streak', min: 5, label: 'On Fire', icon: '🔥', bg: 'bg-orange-500/15 text-orange-400 border border-orange-500/20' },
  { key: 'streak', min: 10, label: 'Unstoppable', icon: '⚡', bg: 'bg-amber-500/15 text-amber-400 border border-amber-500/20' },
  { key: 'completed_lectures', min: 20, label: 'Scholar', icon: '📚', bg: 'bg-blue-500/15 text-blue-400 border border-blue-500/20' },
  { key: 'completed_lectures', min: 40, label: 'Mastermind', icon: '🧠', bg: 'bg-purple-500/15 text-purple-400 border border-purple-500/20' },
]
function getUserBadges(user) {
  return BADGES.filter(b => (user[b.key] || 0) >= b.min)
}

// ─── Smart Notification Banner ───────────────────────────
function SmartNotification({ rank, name, xp, nextUserXP }) {
  const firstName = name?.split(' ')[0] || 'Student'
  const xpGap = nextUserXP > xp ? nextUserXP - xp : 0

  let emoji, title, message, borderColor, bgColor, iconColor

  if (rank === 1) {
    emoji = '👑'
    title = `Legendary, ${firstName}!`
    message = "You're the #1 student on Sahla! The entire campus is chasing your shadow. Keep dominating!"
    borderColor = 'border-amber-400/30'
    bgColor = 'bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent'
    iconColor = 'text-amber-400'
  } else if (rank === 2) {
    emoji = '🥈'
    title = `So Close, ${firstName}!`
    message = `You're just ${xpGap > 0 ? xpGap.toLocaleString() + ' XP' : 'a few points'} away from the throne! One more lecture could change everything.`
    borderColor = 'border-slate-400/25'
    bgColor = 'bg-gradient-to-r from-slate-400/10 via-slate-400/5 to-transparent'
    iconColor = 'text-slate-300'
  } else if (rank === 3) {
    emoji = '🥉'
    title = `On the Podium, ${firstName}!`
    message = `You're in the Top 3! ${xpGap > 0 ? `Only ${xpGap.toLocaleString()} XP to climb to #2.` : 'Keep pushing!'} The spotlight is on you.`
    borderColor = 'border-orange-400/25'
    bgColor = 'bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-transparent'
    iconColor = 'text-orange-400'
  } else if (rank <= 5) {
    emoji = '🔥'
    title = `Almost There, ${firstName}!`
    message = `You're #${rank} — just ${xpGap > 0 ? xpGap.toLocaleString() + ' XP' : 'a push'} from the podium. Complete a lecture or ace a quiz to break through!`
    borderColor = 'border-red-400/20'
    bgColor = 'bg-gradient-to-r from-red-500/8 via-red-400/3 to-transparent'
    iconColor = 'text-red-400'
  } else if (rank <= 10) {
    emoji = '⚡'
    title = `Keep Climbing, ${firstName}!`
    message = `You're #${rank} — ${xpGap > 0 ? `${xpGap.toLocaleString()} XP behind #${rank - 1}` : 'neck and neck'}. Finish lectures, ace MCQs, and review exams to surge ahead!`
    borderColor = 'border-blue-400/20'
    bgColor = 'bg-gradient-to-r from-blue-500/8 via-blue-400/3 to-transparent'
    iconColor = 'text-blue-400'
  } else {
    emoji = '🚀'
    title = `Your Journey Begins, ${firstName}!`
    message = `You're #${rank} right now. Every lecture completed, every quiz aced, every minute spent studying pushes you up. The Top 10 is waiting!`
    borderColor = 'border-purple-400/20'
    bgColor = 'bg-gradient-to-r from-purple-500/8 via-purple-400/3 to-transparent'
    iconColor = 'text-purple-400'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.25, type: 'spring', damping: 22 }}
      className={`relative overflow-hidden rounded-2xl border ${borderColor} ${bgColor} p-4 md:p-5`}
    >
      <div className="flex items-start gap-3.5">
        <div className={`text-2xl md:text-3xl shrink-0 mt-0.5`}>{emoji}</div>
        <div className="min-w-0">
          <h3 className={`text-sm md:text-base font-black ${iconColor} tracking-tight`}>{title}</h3>
          <p className="text-xs md:text-sm text-white/45 mt-1 leading-relaxed">{message}</p>
          {rank > 3 && xpGap > 0 && (
            <div className="flex items-center gap-2 mt-3">
              <div className="flex-1 max-w-[200px]">
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(Math.max((xp / (xp + xpGap)) * 100, 5), 95)}%` }}
                    transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                    className={`h-full rounded-full`}
                    style={{ background: `linear-gradient(90deg, ${rank <= 5 ? '#f87171' : rank <= 10 ? '#60a5fa' : '#a78bfa'}, ${rank <= 5 ? '#fbbf24' : rank <= 10 ? '#38bdf8' : '#818cf8'})` }}
                  />
                </div>
              </div>
              <span className="text-[9px] font-black text-white/25 uppercase tracking-widest whitespace-nowrap">
                {xpGap.toLocaleString()} XP to go
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main Page ───────────────────────────────────────────
export default function LeaderboardPage() {
  const { data, isLoading, error } = useLeaderboard()
  const currentUserProfile = useAuthStore(s => s.profile)
  const [period, setPeriod] = useState('all')

  const topThree = data.slice(0, 3)
  const remaining = data.slice(3, 10)
  const currentUserInList = data.find(u => u.id === currentUserProfile?.id)

  const handleShare = () => {
    if (!currentUserInList) return;
    const text = `🏆 I'm ranked #${currentUserInList.rank} on Sahla Student Leaderboard with ${currentUserInList.xp?.toLocaleString()} XP! Can you beat me? 🚀 #Sahla #Education`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Sahla Rank',
        text: text,
        url: window.location.origin
      }).catch(() => {
        navigator.clipboard.writeText(text);
        toast.success('Rank copied to clipboard!');
      });
    } else {
      navigator.clipboard.writeText(text);
      toast.success('Rank copied to clipboard!');
    }
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/leaderboard`; // Or profile link if exists
    navigator.clipboard.writeText(url);
    toast.success('Leaderboard link copied!');
  };

  const handleToggleAvatar = async () => {
    if (!currentUserInList) return;
    const newStatus = !currentUserInList.show_avatar;
    const { error } = await supabase.from('profiles').update({ show_avatar: newStatus }).eq('id', currentUserProfile.id);
    if (error) {
      toast.error('Failed to update avatar visibility');
    } else {
      toast.success(newStatus ? 'Photo is now visible to others' : 'Photo is now hidden from others');
    }
  };

  const totalXP = data.reduce((a, u) => a + (u.xp || 0), 0)
  const avgStreak = data.length ? Math.round(data.reduce((a, u) => a + (u.streak || 0), 0) / data.length) : 0

  return (
    <>
      <Helmet><title>Leaderboard — Sahla</title></Helmet>

      <div className="min-h-screen p-4 pt-4 md:p-6 md:pt-24 max-w-5xl mx-auto flex flex-col gap-6 md:gap-10">
        
        {/* ═══ Header ═══ */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-[10px] font-black uppercase tracking-[0.2em]">
              <Trophy size={12} /> Hall of Fame
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-[0.95]">
              Student <span className="bg-gradient-to-r from-accent-400 via-accent-200 to-secondary-400 bg-clip-text text-transparent">Rankings</span>
            </h1>
            <p className="text-white/40 text-sm max-w-md">
              The most dedicated students. Keep learning to climb the ranks!
            </p>
          </div>
          {/* Period Tabs */}
          <div className="tab-selector">
            {[
              { key: 'week', label: 'This Week' },
              { key: 'month', label: 'This Month' },
              { key: 'all', label: 'All Time' },
            ].map(t => (
              <button key={t.key} className={`tab-pill ${period === t.key ? 'active' : ''}`} onClick={() => setPeriod(t.key)}>
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ═══ Stats Row ═══ */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <StatCard icon={Zap} label="Total XP Earned" value={totalXP} color="#fcd34d" bgClass="bg-amber-500/10" />
          <StatCard icon={Flame} label="Avg Streak" value={`${avgStreak}d`} color="#fb923c" bgClass="bg-orange-500/10" suffix="" />
          <StatCard icon={Target} label="Top XP" value={topThree[0]?.xp || 0} color="#6ee7b7" bgClass="bg-emerald-500/10" />
        </motion.div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-14 h-14 border-4 border-white/10 border-t-accent-500 rounded-full animate-spin" />
            <p className="text-white/25 font-black uppercase tracking-[0.2em] text-[10px]">Syncing Rankings...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 glass-tier-1 rounded-[2rem] p-8">
            <p className="text-red-400 font-bold text-sm">Failed to load rankings</p>
            <p className="text-white/30 text-xs max-w-sm text-center">{error?.message || 'An unknown error occurred. Please refresh.'}</p>
            <button onClick={() => window.location.reload()} className="mt-2 px-4 py-2 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-bold hover:bg-accent-500/20 transition-all">
              Retry
            </button>
          </div>
        ) : data.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 glass-tier-1 rounded-[2rem] p-8">
            <Trophy size={40} className="text-white/10" />
            <p className="text-white/30 font-bold text-sm">No rankings yet</p>
            <p className="text-white/15 text-xs">Start studying to appear on the leaderboard!</p>
          </div>
        ) : (
          <>
            {/* ═══ Podium ═══ */}
            <div className="podium-grid">
              {/* Desktop: Silver(2nd) | Gold(1st) | Bronze(3rd). Mobile: Gold, Silver, Bronze */}
              <div className="order-2 md:order-1">{topThree[1] && <PodiumCard user={topThree[1]} rank={2} tier="silver" />}</div>
              <div className="order-1 md:order-2">{topThree[0] && <PodiumCard user={topThree[0]} rank={1} tier="gold" />}</div>
              <div className="order-3">{topThree[2] && <PodiumCard user={topThree[2]} rank={3} tier="bronze" />}</div>
            </div>

            {/* ═══ Smart Notification Banner ═══ */}
            {currentUserInList && (
              <SmartNotification rank={currentUserInList.rank} name={currentUserProfile?.full_name} xp={currentUserInList.xp} nextUserXP={
                currentUserInList.rank > 1 ? (data.find(u => u.rank === currentUserInList.rank - 1)?.xp || 0) : 0
              } />
            )}

            {/* ═══ Leaderboard List ═══ */}
            {remaining.length > 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="glass-tier-1 rounded-[2rem] overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-12 px-5 py-4 border-b border-white/5 text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-6 md:col-span-5">Student</div>
                  <div className="col-span-3 md:col-span-4 hidden md:block">Badges</div>
                  <div className="col-span-5 md:col-span-2 text-right">XP</div>
                </div>
                {/* Rows */}
                <div className="divide-y divide-white/[0.03]">
                  {remaining.map((user, i) => (
                    <LeaderboardRow key={user.id} user={user} isCurrentUser={user.id === currentUserProfile?.id} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ═══ Your Rank Banner ═══ */}
            {currentUserProfile && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="your-rank-banner glass-tier-3 p-5 md:p-6 rounded-[2rem] border border-accent-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 font-black text-lg italic shrink-0">
                    {currentUserInList ? `#${currentUserInList.rank}` : '—'}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{currentUserProfile.full_name || 'You'}</p>
                    <p className="text-[10px] text-white/35 uppercase tracking-widest font-bold mt-0.5">
                      {currentUserInList ? `${currentUserInList.xp?.toLocaleString()} XP earned` : 'Complete lectures & quizzes to earn XP'}
                    </p>
                    {currentUserInList && (
                      <div className="mt-2 w-40">
                        <XPBar current={currentUserInList.xp % 1000} max={1000} color="#38bdf8" />
                        <p className="text-[8px] text-white/20 mt-1 font-bold uppercase tracking-widest">
                          {1000 - (currentUserInList.xp % 1000)} XP to next level
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {currentUserInList && (
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleToggleAvatar}
                      className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 overflow-hidden ${
                        currentUserInList.show_avatar 
                          ? 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white/70' 
                          : 'bg-gradient-to-r from-secondary-500/20 to-accent-500/20 border-secondary-500/40 text-white hover:border-accent-500/60 shadow-[0_0_15px_rgba(139,92,246,0.2)] group'
                      }`}
                    >
                      {/* Animated background glow for the "Show Photo" state */}
                      {!currentUserInList.show_avatar && (
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/0 via-white/10 to-accent-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      )}
                      
                      {currentUserInList.show_avatar ? <EyeOff size={16} /> : <Eye size={16} className="text-accent-300" />}
                      <span className={`text-[10px] font-black uppercase tracking-widest hidden sm:inline relative z-10 ${
                        !currentUserInList.show_avatar ? 'text-accent-100' : ''
                      }`}>
                        {currentUserInList.show_avatar ? 'Hide Photo' : 'Show My Photo'}
                      </span>
                    </motion.button>
                  )}
                  {currentUserInList && (
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 hover:bg-accent-500/20 hover:border-accent-500/30 transition-all group"
                    >
                      <Share2 size={16} className="group-hover:rotate-12 transition-transform" />
                      <span className="text-[10px] font-black uppercase tracking-widest hidden md:inline">Share Rank</span>
                    </motion.button>
                  )}
                  {currentUserInList && (
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCopyLink}
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all"
                      title="Copy link"
                    >
                      <Copy size={16} />
                    </motion.button>
                  )}
                  {currentUserInList && getUserBadges(currentUserInList).map((b, i) => (
                    <span key={i} className={`achievement-badge ${b.bg}`}>{b.icon} {b.label}</span>
                  ))}
                  <div className="text-right">
                    <p className="text-2xl font-black text-accent-500 italic leading-none">
                      {currentUserInList ? `#${currentUserInList.rank}` : '—'}
                    </p>
                    <p className="text-[8px] text-white/25 uppercase tracking-[0.2em] font-black mt-1">Your Rank</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ═══ How to Earn XP Section ═══ */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-white/[0.05]" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 whitespace-nowrap">How to climb the ranks</h2>
                <div className="h-px flex-1 bg-white/[0.05]" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <XPGuideCard 
                  icon={BookOpen} 
                  title="Finish Lectures" 
                  desc="+100 XP" 
                  color="text-blue-400"
                  bg="bg-blue-400/5"
                />
                <XPGuideCard 
                  icon={Target} 
                  title="Ace Exams" 
                  desc="Up to +200 XP" 
                  color="text-emerald-400"
                  bg="bg-emerald-400/5"
                />
                <XPGuideCard 
                  icon={Flame} 
                  title="Daily Streaks" 
                  desc="Multiplier Active" 
                  color="text-orange-400"
                  bg="bg-orange-400/5"
                />
                <XPGuideCard 
                  icon={Zap} 
                  title="Active Learning" 
                  desc="+XP for engagement" 
                  color="text-amber-400"
                  bg="bg-amber-400/5"
                />
              </div>
            </motion.div>
          </>
        )}
      </div>
    </>
  )
}

// ─── XP Guide Card ───────────────────────────────────────
function XPGuideCard({ icon: Icon, title, desc, color, bg }) {
  return (
    <div className={`glass-tier-1 p-5 rounded-3xl border border-white/5 flex flex-col items-center text-center gap-3 group hover:border-white/10 transition-all`}>
      <div className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
        <Icon size={22} />
      </div>
      <div>
        <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
        <p className="text-[10px] font-medium text-white/30 uppercase tracking-wider">{desc}</p>
      </div>
    </div>
  )
}

// ─── Stat Card ───────────────────────────────────────────
function StatCard({ icon: Icon, label, value, color, bgClass, suffix }) {
  return (
    <div className="stat-card glass-tier-1 p-4 rounded-2xl flex flex-col gap-3">
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${bgClass}`}>
        <Icon size={18} style={{ color }} />
      </div>
      <div>
        <div className="text-xl font-black text-white italic">
          {typeof value === 'number' ? <AnimatedCounter value={value} /> : value}
          {suffix !== undefined ? suffix : ''}
        </div>
        <div className="text-[9px] text-white/30 uppercase tracking-[0.15em] font-bold mt-0.5">{label}</div>
      </div>
    </div>
  )
}

// ─── XP Progress Bar ─────────────────────────────────────
function XPBar({ current, max, color }) {
  const pct = Math.min((current / max) * 100, 100)
  return (
    <div className="xp-bar-track">
      <div className="xp-bar-fill" style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}88, ${color})` }} />
    </div>
  )
}

// ─── Podium Card ─────────────────────────────────────────
const TIER_CONFIG = {
  gold: {
    gradient: 'from-amber-400/20 via-amber-500/10 to-transparent',
    border: 'border-amber-400/25',
    ringClass: 'avatar-ring-gold',
    icon: <Crown className="text-amber-400 crown-float" size={28} />,
    rankBg: 'bg-amber-400',
    badgeClass: 'rank-badge-gold',
    shadow: '0 0 60px rgba(251,191,36,0.12), 0 0 120px rgba(251,191,36,0.06)',
    height: 'md:min-h-[340px]',
    particles: true,
    xpColor: '#fbbf24',
  },
  silver: {
    gradient: 'from-slate-300/15 via-slate-400/8 to-transparent',
    border: 'border-slate-400/20',
    ringClass: 'avatar-ring-silver',
    icon: <Medal className="text-slate-400" size={24} />,
    rankBg: 'bg-slate-400',
    badgeClass: '',
    shadow: '0 0 40px rgba(148,163,184,0.08)',
    height: 'md:min-h-[300px]',
    particles: false,
    xpColor: '#94a3b8',
  },
  bronze: {
    gradient: 'from-orange-400/15 via-orange-500/8 to-transparent',
    border: 'border-orange-400/20',
    ringClass: 'avatar-ring-bronze',
    icon: <Medal className="text-orange-400" size={24} />,
    rankBg: 'bg-orange-400',
    badgeClass: '',
    shadow: '0 0 40px rgba(251,146,60,0.08)',
    height: 'md:min-h-[280px]',
    particles: false,
    xpColor: '#fb923c',
  },
}

function PodiumCard({ user, rank, tier }) {
  const c = TIER_CONFIG[tier]
  const badges = getUserBadges(user)
  const xpInLevel = user.xp % 1000

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: rank === 1 ? 0.1 : rank === 2 ? 0.2 : 0.3, type: 'spring', damping: 20 }}
      className={`podium-card bg-gradient-to-b ${c.gradient} border ${c.border} ${c.height}`}
      style={{ boxShadow: c.shadow }}
    >
      {/* Gold particles */}
      {c.particles && (
        <div className="gold-particles">
          {Array.from({ length: 8 }).map((_, i) => <span key={i} />)}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3 w-full">
        {/* Crown / Medal */}
        <div className="mb-1">{c.icon}</div>

        {/* Avatar with spinning ring */}
        <div className="relative">
          <div className={`w-[76px] h-[76px] md:w-[88px] md:h-[88px] rounded-full p-[3px] avatar-ring ${c.ringClass}`}>
            <div className="w-full h-full rounded-full bg-[#0F0E17] overflow-hidden border-2 border-black/50">
            <Avatar 
              name={user.full_name} 
              src={user.show_avatar ? user.avatar_url : null} 
              size="2xl"
              className="w-full h-full !rounded-full border-2 border-black/50"
            />
            </div>
          </div>
          {/* Rank Badge */}
          <div className={`absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-full ${c.rankBg} ${c.badgeClass} flex items-center justify-center text-black font-black text-sm italic border-[3px] border-[#0F0E17]`}>
            {rank}
          </div>
        </div>

        {/* Info */}
        <div className="text-center mt-1">
          <h3 className="text-base md:text-lg font-black text-white uppercase tracking-tight italic leading-tight truncate max-w-[160px]">
            {user.full_name || 'Anonymous'}
          </h3>
          <p className="text-[9px] font-black text-white/25 uppercase tracking-[0.2em] mt-0.5">Level {user.level || 1}</p>
        </div>

        {/* XP + Bar */}
        <div className="w-full max-w-[140px] text-center">
          <div className="py-1.5 px-4 rounded-full bg-white/[0.04] border border-white/[0.06]">
            <span className="text-lg font-black text-white italic">{user.xp?.toLocaleString()}</span>
            <span className="ml-1 text-[9px] font-bold text-white/30 uppercase">XP</span>
          </div>
          <div className="mt-2 px-2">
            <XPBar current={xpInLevel} max={1000} color={c.xpColor} />
          </div>
        </div>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1.5 mt-1">
            {badges.map((b, i) => (
              <span key={i} className={`achievement-badge ${b.bg}`}>{b.icon} {b.label}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

// ─── Leaderboard Row ─────────────────────────────────────
function LeaderboardRow({ user, isCurrentUser, index }) {
  const badges = getUserBadges(user)
  const xpInLevel = user.xp % 1000

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.04 }}
      className={`lb-row grid grid-cols-12 px-5 py-4 items-center ${isCurrentUser ? 'is-you' : ''}`}
    >
      {/* Rank */}
      <div className="col-span-1 flex justify-center">
        <span className={`text-sm font-black italic ${user.rank <= 5 ? 'text-accent-400' : 'text-white/15'}`}>
          {user.rank}
        </span>
      </div>

      {/* Student */}
      <div className="col-span-6 md:col-span-5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-white/[0.04] overflow-hidden border border-white/[0.06] shrink-0">
          <Avatar 
            name={user.full_name} 
            src={user.show_avatar ? user.avatar_url : null} 
            size="md"
            className="w-full h-full !rounded-xl border border-white/[0.06]"
          />
        </div>
        <div className="min-w-0">
          <p className={`text-sm font-bold truncate ${isCurrentUser ? 'text-accent-400' : 'text-white'}`}>
            {user.full_name || 'Anonymous'}
            {isCurrentUser && <span className="ml-2 text-[7px] px-1.5 py-0.5 rounded bg-accent-500/15 text-accent-300 uppercase tracking-widest font-black">You</span>}
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[8px] text-white/25 font-black uppercase tracking-widest">Lvl {user.level || 1}</span>
            {user.streak > 0 && (
              <span className="flex items-center gap-0.5 text-[8px] text-orange-400/80 font-black">
                <Flame size={9} /> {user.streak}d
              </span>
            )}
            <span className="text-[7px] text-white/10 font-bold uppercase tracking-widest ml-1">
              • {timeAgo(user.last_active)}
            </span>
          </div>
          {/* XP mini bar */}
          <div className="mt-1.5 w-20">
            <XPBar current={xpInLevel} max={1000} color="#38bdf8" />
          </div>
        </div>
      </div>

      {/* Badges (desktop) */}
      <div className="col-span-4 hidden md:flex items-center gap-1.5 flex-wrap">
        {badges.map((b, i) => (
          <span key={i} className={`achievement-badge ${b.bg}`}>{b.icon} {b.label}</span>
        ))}
        {badges.length === 0 && <span className="text-[8px] text-white/10 font-bold uppercase tracking-widest">—</span>}
      </div>

      {/* XP */}
      <div className="col-span-5 md:col-span-2 text-right">
        <span className="text-sm font-black text-white italic">{user.xp?.toLocaleString()}</span>
        <span className="block text-[7px] font-black text-white/15 uppercase tracking-widest">Points</span>
      </div>
    </motion.div>
  )
}
