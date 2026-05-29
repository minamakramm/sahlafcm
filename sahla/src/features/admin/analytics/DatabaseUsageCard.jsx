import React, { useState, useEffect } from 'react';
import { Database, TrendingUp, ArrowUpRight } from 'lucide-react';
import { formatBytes, getStatusZone } from '../../../utils/capacityCalculator';

export const DatabaseUsageCard = ({ dbData }) => {
  if (!dbData) return null;

  const { sizeBytes, usagePct, avgUserMB, estMaxUsers } = dbData;
  const zone = getStatusZone(usagePct);
  const [animatedPct, setAnimatedPct] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedPct(Math.min(usagePct, 100)), 100);
    return () => clearTimeout(timer);
  }, [usagePct]);

  const barGradients = {
    green: 'from-emerald-400 to-teal-500',
    yellow: 'from-amber-400 to-orange-500',
    red: 'from-rose-400 to-red-500'
  };

  const textColors = {
    green: 'text-emerald-400',
    yellow: 'text-amber-400',
    red: 'text-rose-400'
  };

  const badgeStyles = {
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    yellow: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    red: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  };

  const badgeLabels = { green: 'Healthy', yellow: 'Monitor', red: 'Critical' };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest">Database Usage</h3>
              <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full border ${badgeStyles[zone]}`}>
                {badgeLabels[zone]}
              </span>
            </div>
            <div className="text-3xl font-black text-white flex items-baseline gap-2">
               {formatBytes(sizeBytes)}
               <span className="text-sm font-medium text-gray-500 font-mono">/ 500 MB</span>
            </div>
          </div>
          <div className={`p-3 rounded-xl bg-white/5 ${textColors[zone]}`}>
             <Database className="w-6 h-6" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-5">
           <div className="flex justify-between text-xs font-semibold mb-2">
               <span className="text-gray-400">Utilization</span>
               <span className={`font-mono ${textColors[zone]}`}>{usagePct.toFixed(1)}%</span>
           </div>
           <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
               <div
                 className={`bg-gradient-to-r ${barGradients[zone]} h-2 rounded-full transition-all duration-1000 ease-out`}
                 style={{ width: `${animatedPct}%` }}
               />
           </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
           <div>
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Avg. Per User</p>
              <p className="text-white font-mono text-sm font-bold">{avgUserMB.toFixed(2)} MB</p>
           </div>
           <div>
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Est. Max Users</p>
              <p className="text-white font-mono text-sm font-bold flex items-center gap-1">
                {estMaxUsers.toLocaleString()}
                <ArrowUpRight className="w-3 h-3 text-emerald-400" />
              </p>
           </div>
        </div>

        {/* Insight */}
        <div className="mt-4 pt-3 border-t border-white/5">
          <p className="text-[11px] text-gray-500 flex items-center gap-1.5">
            <TrendingUp className="w-3 h-3" />
            Capacity ~{estMaxUsers.toLocaleString()} students before upgrade needed
          </p>
        </div>
      </div>
    </div>
  );
};
