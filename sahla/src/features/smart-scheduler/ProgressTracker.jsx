import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

export default function ProgressTracker({ tasks }) {
  const total = tasks.length;
  if (total === 0) return null;

  const done = tasks.filter(t => t.status === 'done').length;
  const inProgress = tasks.filter(t => t.status === 'in-progress').length;
  const notStarted = tasks.filter(t => t.status === 'not-started').length;
  const totalLogged = tasks.reduce((s, t) => s + (t.loggedHours || 0), 0);
  const totalEstimated = tasks.reduce((s, t) => s + t.estimatedHours, 0);
  const overallPct = Math.round((totalLogged / totalEstimated) * 100);

  return (
    <div className="space-y-4">
      {/* Overall completion bar */}
      <div className="relative p-5 rounded-[1.25rem] border bg-white/[0.03] border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.01)] overflow-hidden group hover:border-white/20 transition-all duration-300">
        {/* Background Accent Glow */}
        <div 
          className="absolute -top-10 -right-10 w-32 h-32 blur-[50px] opacity-[0.1] pointer-events-none group-hover:opacity-[0.2] transition-opacity duration-500"
          style={{ background: '#38bdf8' }}
        />
        
        {/* Subtle border shine effect */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Overall Progress</span>
            <span className="text-lg font-black text-accent-400 font-mono tracking-tighter" style={{ textShadow: '0 0 15px rgba(56, 189, 248, 0.4)' }}>{overallPct}%</span>
          </div>
          
          <div className="h-2.5 rounded-full bg-white/5 overflow-hidden border border-white/5 shadow-inner mb-3">
            <div className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${overallPct}%`,
                background: 'linear-gradient(90deg, #38bdf8, #10b981)',
                boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)'
              }} />
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-white/40 font-mono tracking-wider"><strong className="text-white/90">{totalLogged.toFixed(1)}h</strong> logged</span>
            <span className="text-[10px] text-white/40 font-mono tracking-wider"><strong className="text-white/90">{totalEstimated}h</strong> total</span>
          </div>
        </div>
      </div>

      {/* Status breakdown mini-bar */}
      <div className="flex items-center gap-1 h-1.5 rounded-full overflow-hidden bg-white/5">
        {done > 0 && <div className="h-full bg-green-500 rounded-full transition-all duration-700" style={{ width: `${(done/total)*100}%` }} />}
        {inProgress > 0 && <div className="h-full bg-blue-500 rounded-full transition-all duration-700" style={{ width: `${(inProgress/total)*100}%` }} />}
        {notStarted > 0 && <div className="h-full bg-zinc-500/40 rounded-full transition-all duration-700" style={{ width: `${(notStarted/total)*100}%` }} />}
      </div>
      <div className="flex items-center gap-3 text-[9px] font-semibold text-white/30">
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> {done} Done</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {inProgress} Active</span>
        <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-zinc-500/40" /> {notStarted} Pending</span>
      </div>

      {/* Per-subject progress rings */}
      <div className="space-y-2">
        {tasks.map((task, idx) => {
          const pct = Math.min(100, Math.round(((task.loggedHours || 0) / task.estimatedHours) * 100));
          const r = 16;
          const circumference = 2 * Math.PI * r;
          const offset = circumference - (pct / 100) * circumference;
          
          let configColor = '#38bdf8'; // Blue
          if (task.status === 'done') configColor = '#10b981'; // Green
          else if (task.priority === 'critical') configColor = '#ef4444'; // Red
          else if (task.priority === 'important') configColor = '#f59e0b'; // Amber

          return (
            <div key={task.id}
              className={`relative p-3 rounded-2xl border transition-all duration-300 group overflow-hidden animate-fade-in ${
                task.status === 'done'
                  ? 'bg-white/[0.01] border-white/5 hover:border-white/10'
                  : 'bg-white/[0.02] border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.01)] hover:border-white/20'
              }`}
              style={{ animationDelay: `${idx * 0.05}s` }}
              id={`progress-${task.id}`}>
              
              {/* Background Accent Glow */}
              {task.status !== 'done' && (
                <div 
                  className="absolute -top-6 -right-6 w-24 h-24 blur-[40px] opacity-[0.08] pointer-events-none group-hover:opacity-[0.2] transition-opacity duration-500"
                  style={{ background: configColor }}
                />
              )}

              <div className="flex items-center gap-3 relative z-10">
                {/* Ring container (Squircle-ish) */}
                <div className="relative shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                  style={{ 
                    background: `${configColor}10`, 
                    borderColor: `${configColor}20`,
                    boxShadow: task.status !== 'done' ? `0 0 10px ${configColor}10` : 'none'
                  }}>
                  <svg width="36" height="36" viewBox="0 0 42 42">
                    <circle cx="21" cy="21" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" />
                    <circle cx="21" cy="21" r={r} fill="none" stroke={configColor} strokeWidth="2.5"
                      strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
                      className="progress-ring-circle"
                      style={{ '--circumference': circumference, '--target-offset': offset, transform: 'rotate(-90deg)', transformOrigin: 'center' }} />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black" style={{ color: configColor }}>{pct}%</span>
                </div>

                {/* Label */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className={`text-[12px] font-bold truncate ${task.status === 'done' ? 'text-white/50' : 'text-white/90'}`}>
                      {task.subject}
                    </p>
                    {task.status === 'done' && <CheckCircle2 className="w-3 h-3 text-green-400 shrink-0" />}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-2.5 h-2.5 text-white/20" />
                    <p className="text-[9px] text-white/40 font-mono tracking-wider">{task.loggedHours || 0} / {task.estimatedHours}h</p>
                  </div>
                </div>
              </div>
              
              {/* Subtle border shine effect */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
