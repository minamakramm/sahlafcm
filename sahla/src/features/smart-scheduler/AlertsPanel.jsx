import React from 'react';
import { AlertTriangle, Clock, TrendingDown, Flame, CalendarX } from 'lucide-react';

export default function AlertsPanel({ alerts }) {
  if (!alerts || alerts.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/15 flex items-center justify-center mx-auto mb-3">
          <span className="text-lg">✅</span>
        </div>
        <p className="text-[11px] font-semibold text-white/40">All clear — no critical alerts</p>
        <p className="text-[10px] text-white/25 mt-1">You're on track!</p>
      </div>
    );
  }

  const iconMap = {
    deadline: <Clock className="w-3.5 h-3.5" />,
    overdue: <CalendarX className="w-3.5 h-3.5" />,
    underprepared: <TrendingDown className="w-3.5 h-3.5" />,
  };

  const typeLabel = {
    deadline: 'Deadline',
    overdue: 'Overdue',
    underprepared: 'Low Prep',
  };

  return (
    <div className="space-y-3">
      {alerts.slice(0, 10).map((alert, idx) => {
        const isCritical = alert.severity === 'critical';
        const configColor = isCritical ? '#ef4444' : '#f59e0b'; // Red or Amber

        return (
          <div
            key={idx}
            className={`relative p-4 rounded-[1.25rem] border transition-all duration-300 group overflow-hidden animate-fade-in ${
              isCritical
                ? 'bg-red-500/[0.04] border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.05)] hover:border-red-500/30'
                : 'bg-amber-500/[0.03] border-amber-500/15 shadow-[0_0_20px_rgba(245,158,11,0.03)] hover:border-amber-500/25'
            }`}
            style={{ animationDelay: `${idx * 0.06}s` }}
            id={`alert-${idx}`}
          >
            {/* Background Accent Glow */}
            <div 
              className="absolute -top-10 -right-10 w-32 h-32 blur-[50px] opacity-[0.12] pointer-events-none group-hover:opacity-[0.25] transition-opacity duration-500"
              style={{ background: configColor }}
            />

            <div className="flex items-start gap-3 relative z-10">
              {/* Left Icon Area */}
              <div className="flex flex-col items-center gap-2 mt-0.5">
                <div 
                  className="w-10 h-10 rounded-[0.8rem] flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 shrink-0"
                  style={{ 
                    background: `${configColor}10`, 
                    borderColor: `${configColor}20`,
                    color: configColor,
                    boxShadow: `0 0 15px ${configColor}15`
                  }}
                >
                  {iconMap[alert.type]}
                </div>
                {isCritical && (
                  <span className="w-1.5 h-1.5 rounded-full mt-0.5 animate-pulse" style={{ background: configColor, boxShadow: `0 0 8px ${configColor}` }} />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <p className={`text-[12px] font-bold truncate ${isCritical ? 'text-red-50' : 'text-amber-50'}`}>
                    {alert.task.subject}
                  </p>
                  <span className={`text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-md border shrink-0 ${
                    isCritical
                      ? 'bg-red-500/10 text-red-400 border-red-500/20'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {typeLabel[alert.type]}
                  </span>
                </div>
                <p className={`text-[11px] font-medium leading-relaxed ${
                  isCritical ? 'text-red-200/60' : 'text-amber-200/60'
                }`}>
                  {alert.message}
                </p>
                {alert.task.examSoon && (
                  <div className="flex items-center gap-1.5 mt-2.5">
                    <Flame className="w-3 h-3 text-red-400" />
                    <span className="text-[9px] font-black text-red-400 uppercase tracking-widest">Exam approaching</span>
                  </div>
                )}
              </div>
            </div>

            {/* Subtle border shine effect */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        );
      })}
    </div>
  );
}
