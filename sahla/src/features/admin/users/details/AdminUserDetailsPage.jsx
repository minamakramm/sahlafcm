import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, User, Mail, Calendar, Shield, GraduationCap, 
  MapPin, Clock, BookOpen, CheckCircle2, AlertCircle 
} from 'lucide-react';
import { Button, Badge, Avatar } from '@/components/ui';
import { format } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

export default function AdminUserDetailsPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation('admin');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isActing, setIsActing] = useState(false);
  const [stats, setStats] = useState({
    completion: 0,
    examsCount: 0,
    avgScore: 0,
    bookmarksCount: 0,
    lastActive: null,
    device: 'N/A'
  });
  const isAr = i18n.language === 'ar';
  const locale = isAr ? ar : enUS;

  const fetchFullUser = async () => {
    setLoading(true);
    try {
      // 1. Fetch Profile
      const { data: profile, error: profileErr } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      if (profileErr) throw profileErr;
      setUser(profile);

      // 2. Fetch Progress Stats
      const [progress, exams, bookmarks, activities] = await Promise.all([
        supabase.from('lecture_progress').select('is_completed').eq('user_id', userId),
        supabase.from('exam_attempts').select('percentage').eq('user_id', userId).eq('status', 'submitted'),
        supabase.from('bookmarks').select('id', { count: 'exact' }).eq('user_id', userId),
        supabase.from('analytics_events').select('created_at, metadata').eq('user_id', userId).order('created_at', { ascending: false }).limit(1)
      ]);

      // Calculate Completion (Approx total lectures)
      const completedCount = (progress.data || []).filter(p => p.is_completed).length;
      const totalLectures = 48; // Estimate
      
      // Calculate Exam Stats
      const examScores = (exams.data || []).map(e => e.percentage);
      const avg = examScores.length ? Math.round(examScores.reduce((a, b) => Number(a) + Number(b), 0) / examScores.length) : 0;

      // Extract metadata
      const lastSession = activities.data?.[0];
      const device = lastSession?.metadata?.device_model || lastSession?.metadata?.platform || 'Web Browser';

      setStats({
        completion: Math.min(100, Math.round((completedCount / totalLectures) * 100)),
        examsCount: examScores.length,
        avgScore: avg,
        bookmarksCount: bookmarks.count || 0,
        lastActive: lastSession?.created_at || profile.created_at,
        device
      });
    } catch (err) {
      console.error('Error fetching user details:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFullUser();
  }, [userId]);

  const handleDeactivate = async () => {
    const confirmMsg = user.is_active 
      ? 'Are you sure you want to deactivate this student? They won\'t be able to log in.' 
      : 'Reactivate this student account?';
    
    if (!window.confirm(confirmMsg)) return;

    setIsActing(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ is_active: !user.is_active })
        .eq('id', user.id);

      if (error) {
        // Handle missing column error (PostgREST code 42703)
        if (error.code === '42703') {
           throw new Error('The "is_active" column is missing in your database. Please run the provided SQL migration.');
        }
        throw error;
      }
      
      toast.success(user.is_active ? 'Student deactivated' : 'Student reactivated');
      fetchFullUser();
    } catch (err) {
      toast.error('Operation Failed: ' + err.message);
      console.error('[Admin] Deactivation error:', err);
    } finally {
      setIsActing(false);
    }
  };

  const handleResetProgress = async () => {
    if (!window.confirm('CRITICAL: This will permanently wipe all subject progress, bookmarks, and exam attempts for this student. Proceed?')) return;

    setIsActing(true);
    const loadingToast = toast.loading('Wiping student data...');
    try {
      // 1. Try the optimized RPC first
      const { error: rpcError } = await supabase.rpc('admin_reset_user_progress', { target_user_id: user.id });
      
      if (rpcError) {
        console.warn('RPC reset failed, falling back to manual deletion...', rpcError);
        
        // 2. Fallback: Manual sequential deletion (permitted if RLS allows and user is admin)
        const [progErr, examErr, bookErr] = await Promise.all([
          supabase.from('lecture_progress').delete().eq('user_id', user.id),
          supabase.from('exam_attempts').delete().eq('user_id', user.id),
          supabase.from('bookmarks').delete().eq('user_id', user.id)
        ]);

        if (progErr.error || examErr.error || bookErr.error) {
          throw new Error('Manual wipe failed. Check RLS policies or database permissions.');
        }
      }

      toast.success('Student progress wiped successfully', { id: loadingToast });
      fetchFullUser();
    } catch (err) {
      toast.error('Reset Failed: ' + err.message, { id: loadingToast });
      console.error('[Admin] Reset error:', err);
    } finally {
      setIsActing(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-secondary-500/20 border-t-secondary-500" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
        <AlertCircle size={48} className="mx-auto mb-4 text-white/20" />
        <h2 className="text-xl font-bold text-white">User Not Found</h2>
        <Button variant="ghost" className="mt-4" onClick={() => navigate('/admin/users')}>
          Go Back
        </Button>
      </div>
    );
  }

  const detailGroup = (icon, label, value) => (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 shrink-0">
          {icon}
       </div>
       <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-white/20">{label}</p>
          <p className="text-sm font-bold text-white/80">{value || 'N/A'}</p>
       </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/admin/users')} className="rounded-full w-10 h-10 p-0">
             <ArrowLeft size={20} className={isAr ? 'rotate-180' : ''} />
          </Button>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tighter">User Profile</h1>
            <p className="text-xs text-white/40 font-bold uppercase tracking-widest mt-1">Management Console</p>
          </div>
        </div>
        
        <div className="flex gap-2">
           <Button 
              variant="ghost" 
              size="sm" 
              className={user.is_active ? "text-white/40" : "text-secondary-400"}
              onClick={handleDeactivate}
              disabled={isActing}
           >
              {user.is_active ? 'Deactivate' : 'Reactivate'}
           </Button>
           <Button 
              variant="danger" 
              size="sm" 
              onClick={handleResetProgress}
              disabled={isActing}
           >
              Reset Progress
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="glass-tier-2 p-8 text-center border-white/10 relative overflow-hidden"
           >
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-secondary-500/10 to-transparent" />
              <div className="relative z-10 flex flex-col items-center">
                 <div className="relative group mb-6">
                    <div className="absolute -inset-4 bg-secondary-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Avatar 
                      src={user.avatar_url} 
                      name={user.full_name} 
                      size="xl" 
                      className="w-24 h-24 border-4 border-white/10 shadow-2xl relative z-10" 
                    />
                 </div>
                 <h2 className="text-xl font-black text-white tracking-tight mb-1">{user.full_name}</h2>
                 <p 
                    className="text-[10px] font-mono text-white/30 mb-4 cursor-pointer hover:text-secondary-400 transition-colors"
                    onClick={() => {
                       navigator.clipboard.writeText(user.id);
                       toast.success('UID copied to clipboard');
                    }}
                    title="Click to copy UID"
                 >
                    ID: {user.id}
                 </p>
                 <Badge variant={user.role === 'admin' ? 'purple' : 'default'} className="mb-4">
                    {user.role}
                 </Badge>
                 
                 <div className="pt-6 border-t border-white/5 w-full grid grid-cols-2 gap-4">
                    <div className="text-center">
                       <p className="text-[10px] font-black uppercase text-white/20 mb-1">XP Points</p>
                       <p className="text-lg font-black text-secondary-400">{user.xp?.toLocaleString() || 0}</p>
                    </div>
                    <div className="text-center border-l border-white/5">
                       <p className="text-[10px] font-black uppercase text-white/20 mb-1">Rank</p>
                       <p className="text-lg font-black text-accent-400">Level {user.level || 1}</p>
                    </div>
                 </div>
              </div>
           </motion.div>

            <div className="glass-tier-2 p-6 border-white/10">
               <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                  <Clock size={14} className="text-secondary-400" />
                  Account Activity
               </h3>
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                     <span className="text-white/30">Joined</span>
                     <span className="text-white/60 font-bold">
                       {(() => {
                         try {
                           return user.created_at ? format(new Date(user.created_at), 'PPP', { locale }) : 'N/A';
                         } catch (e) {
                           return 'Invalid Date';
                         }
                       })()}
                     </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                     <span className="text-white/30">Last Active</span>
                     <span className="text-white/60 font-bold">
                       {(() => {
                         try {
                           return stats.lastActive ? format(new Date(stats.lastActive), 'Pp', { locale }) : 'Never';
                         } catch (e) {
                           return 'Invalid Date';
                         }
                       })()}
                     </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                     <span className="text-white/30">Device</span>
                     <span className="text-white/60 font-bold">{stats.device}</span>
                  </div>
               </div>
            </div>
        </div>

        {/* Detailed Info */}
        <div className="lg:col-span-2 space-y-8">
           <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/30 px-2">Account Metadata</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {detailGroup(<Mail size={18} />, "Primary Email", user.email)}
                 {detailGroup(<Shield size={18} />, "User Role", user.role)}
              </div>
           </div>

           <div className="space-y-4 pt-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/30 px-2">Platform Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="p-6 rounded-3xl bg-secondary-500/[0.03] border border-secondary-500/10">
                    <p className="text-[10px] font-black uppercase text-secondary-500/60 mb-2">Completion</p>
                    <div className="flex items-end gap-2">
                       <span className="text-3xl font-black text-white">{stats.completion}%</span>
                       <span className="text-xs font-bold text-secondary-400 mb-1.5">COURSE</span>
                    </div>
                 </div>
                 <div className="p-6 rounded-3xl bg-accent-500/[0.03] border border-accent-500/10">
                    <p className="text-[10px] font-black uppercase text-accent-500/60 mb-2">Exams Taken</p>
                    <div className="flex items-end gap-2">
                       <span className="text-3xl font-black text-white">{stats.examsCount}</span>
                       <span className="text-xs font-bold text-accent-400 mb-1.5">Avg: {stats.avgScore}%</span>
                    </div>
                 </div>
                 <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                    <p className="text-[10px] font-black uppercase text-white/20 mb-2">Bookmarks</p>
                    <div className="flex items-end gap-2">
                       <span className="text-3xl font-black text-white">{stats.bookmarksCount}</span>
                       <span className="text-xs font-bold text-white/20 mb-1.5">Lectures</span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="p-6 rounded-[2rem] bg-white/[0.01] border border-white/5 border-dashed flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-secondary-500/10 flex items-center justify-center text-secondary-400">
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                    <h4 className="text-sm font-bold text-white">Identity Verified</h4>
                    <p className="text-xs text-white/20 font-medium">Student authenticated via university portal</p>
                 </div>
              </div>
              <Button variant="ghost" size="sm">Audit Log</Button>
           </div>
        </div>
      </div>
    </div>
  );
}
