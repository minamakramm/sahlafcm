import React, { useEffect, useState, Suspense } from 'react';
import { analyticsService } from '../../../services/analyticsService';
import { SkeletonLoader, ChartSkeletonLoader } from './SkeletonLoader';
import { DatabaseUsageCard } from './DatabaseUsageCard';
import { StorageUsageCard } from './StorageUsageCard';
import { TopUsersStorageTable } from './TopUsersStorageTable';
import { GrowthForecastCard } from './GrowthForecastCard';
import { BarChart } from './charts/BarChart';
import { LineChart } from './charts/LineChart';
import { AreaChart } from './charts/AreaChart';
import { PieChart } from './charts/PieChart';
import { SaaSInsightsPanel } from './SaaSInsightsPanel';
import { RefreshCw, Info, X, Database, HardDrive, Shield, BarChart3, Users, Activity, TrendingUp, Lightbulb, PieChart as PieIcon } from 'lucide-react';

// ── Dashboard Manual Modal ─────────────────────────────────
const DashboardManual = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
    <div
      className="relative bg-zinc-900 border border-white/10 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
        <X className="w-4 h-4 text-gray-400" />
      </button>

      <h2 className="text-lg font-black text-white mb-1">📊 Dashboard Manual</h2>
      <p className="text-xs text-gray-500 mb-6">Reference guide for all analytics components</p>

      {/* Section 1 */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center">1</span>
          Executive Cards
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <Database className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Database Usage</p>
              <p className="text-xs text-gray-500">Tracks PostgreSQL size vs 500 MB free tier. Shows avg per user + estimated max capacity.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <HardDrive className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Storage Capacity</p>
              <p className="text-xs text-gray-500">Tracks Supabase Storage vs 1 GB free tier. Shows file count, avg file size, top user %.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <Shield className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Growth Forecast</p>
              <p className="text-xs text-gray-500">Predicts days until DB/Storage limits. Needs daily snapshots from Edge Function.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center">2</span>
          Live Analytics
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <BarChart3 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Database Entity Sizes</p>
              <p className="text-xs text-gray-500">Top 8 tables ranked by physical size. Identifies fastest growing datasets.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <PieIcon className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">User Retention</p>
              <p className="text-xs text-gray-500">Active (7d) vs Inactive users pie chart. Measures platform engagement health.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Platform Intelligence</p>
              <p className="text-xs text-gray-500">Auto-generated insights: largest table, engagement rate, capacity alerts, growth velocity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center">3</span>
          Deep Dive
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <Users className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Most Active Users</p>
              <p className="text-xs text-gray-500">Top 10 users by platform activity (events, page views). Ranked by real engagement data.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div>
        <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] font-black flex items-center justify-center">4</span>
          Growth Trends
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <TrendingUp className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Platform Trajectory</p>
              <p className="text-xs text-gray-500">Dual-line chart (DB + Storage growth over 7 days). Requires daily snapshot Edge Function.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <Activity className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-white">Active Sessions</p>
              <p className="text-xs text-gray-500">Daily active user count line chart. Requires daily snapshot Edge Function.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-white/5 text-center">
        <p className="text-[10px] text-gray-600">Auto-refreshes every 60s • Single RPC call • 60s cache</p>
      </div>
    </div>
  </div>
);

// ── Main Analytics Engine ───────────────────────────────────
const AnalyticsInternalEngine = ({ triggerRefresh }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    analyticsService.fetchAnalytics(triggerRefresh > 0)
      .then(res => {
        if (isMounted) {
            setData(res);
            setLoading(false);
            setLastUpdate(new Date());
            setError(null);
        }
      })
      .catch(err => {
        if (isMounted) {
            setError(err.message);
            setLoading(false);
        }
      });

    return () => { isMounted = false; };
  }, [triggerRefresh]);

  if (loading && !data) {
     return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SkeletonLoader className="h-56" />
            <SkeletonLoader className="h-56" />
            <ChartSkeletonLoader />
            <ChartSkeletonLoader />
            <SkeletonLoader className="h-48 lg:col-span-2" />
        </div>
     );
  }

  if (error) {
    return (
      <div className="w-full text-center p-12 bg-white/5 border border-white/10 rounded-2xl">
        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center mx-auto mb-4">
          <RefreshCw className="w-6 h-6 text-rose-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Platform Metrics Offline</h3>
        <p className="text-gray-500 max-w-md mx-auto mb-6 text-sm">
          We encountered an issue while communicating with the analytics engine.
          Please ensure your database migration has been successfully deployed.
        </p>
        <div className="inline-block px-4 py-2.5 bg-rose-500/10 text-rose-400 text-xs font-mono rounded-xl border border-rose-500/20 max-w-lg break-all">
            {error}
        </div>
      </div>
    );
  }

  if (!data) return null;

  // Pie Chart data
  const pieData = data.charts?.healthMap ? [
    { name: 'Active (7d)', value: parseInt(data.charts.healthMap.active_users || 0) },
    { name: 'Inactive', value: parseInt(data.charts.healthMap.inactive_users || 0) }
  ].filter(d => d.value > 0) : [];

  return (
    <div className="flex flex-col gap-6">
      {/* Live indicator */}
      {lastUpdate && (
        <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-mono">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live — Last synced {lastUpdate.toLocaleTimeString()}
        </div>
      )}

      {/* ═══ ROW 1: Executive Cards (2 columns) ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <DatabaseUsageCard dbData={data.database} />
         <StorageUsageCard storageData={data.storage} />
      </div>

      {/* ═══ ROW 2: Forecast + Area Chart ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <GrowthForecastCard
           database={data.database}
           storage={data.storage}
           forecast={data.charts?.forecast}
         />
         <div className="lg:col-span-2">
            <AreaChart
              data={data.charts?.forecast || []}
              title="Platform Growth Trajectory"
              nameKey="date"
              dataKey="db"
              secondaryKey="storage"
            />
         </div>
      </div>

      {/* ═══ ROW 3: Users Table + Insights ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2">
            <TopUsersStorageTable users={data.topAccounts} />
         </div>
         <SaaSInsightsPanel analyticsData={data} />
      </div>

      {/* ═══ ROW 4: Bar Chart + Pie + Line ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {data.topTables && (
           <BarChart data={data.topTables} title="Database Entity Sizes" dataKey="size_bytes" nameKey="name" />
         )}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PieChart data={pieData} title="User Retention" />
            <LineChart
              data={data.charts?.forecast || []}
              title="Active Sessions"
              nameKey="date"
              dataKey="active_users"
            />
         </div>
      </div>
    </div>
  );
};

// ── Exported Section ────────────────────────────────────────
export const AdminAnalyticsSection = () => {
   const [tick, setTick] = useState(0);
   const [showManual, setShowManual] = useState(false);

   useEffect(() => {
     const timer = setInterval(() => {
       setTick(prev => prev + 1);
     }, 60000);
     return () => clearInterval(timer);
   }, []);

   return (
       <div className="w-full">
           {/* Manual toggle button */}
           <div className="flex justify-end mb-4">
             <button
               onClick={() => setShowManual(true)}
               className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-gray-400 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 uppercase tracking-widest"
             >
               <Info className="w-3.5 h-3.5" />
               Dashboard Manual
             </button>
           </div>

           {showManual && <DashboardManual onClose={() => setShowManual(false)} />}

           <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <SkeletonLoader className="h-56" />
                  <SkeletonLoader className="h-56" />
                  <SkeletonLoader className="h-56" />
                  <ChartSkeletonLoader />
                  <ChartSkeletonLoader />
              </div>
           }>
               <AnalyticsInternalEngine triggerRefresh={tick} />
           </Suspense>
       </div>
   );
};
