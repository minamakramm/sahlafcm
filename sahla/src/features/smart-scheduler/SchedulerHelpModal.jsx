import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, CalendarClock, Plus, Zap, Maximize2, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function SchedulerHelpModal({ isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-12 animate-fade-in" style={{ backgroundColor: 'rgba(12, 19, 23, 0.85)', backdropFilter: 'blur(16px)' }}>
      <div 
        className="relative w-full max-w-3xl max-h-full overflow-y-auto rounded-[2rem] border bg-white/[0.03] border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] p-6 md:p-10 animate-scale-in"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-accent-500/15 border border-accent-500/20 flex items-center justify-center shrink-0" style={{ boxShadow: '0 0 30px rgba(56, 189, 248, 0.2)' }}>
            <CalendarClock className="w-7 h-7 text-accent-400" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">Smart Scheduler Manual</h2>
            <p className="text-sm font-medium text-white/50 mt-1">Master your study flow and eliminate procrastination.</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="relative p-6 rounded-[1.5rem] border bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 blur-[50px] opacity-[0.05] pointer-events-none group-hover:opacity-[0.1] transition-opacity" style={{ background: '#38bdf8' }} />
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-8 h-8 rounded-xl bg-accent-500/10 text-accent-400 flex items-center justify-center border border-accent-500/20">
                  <Plus className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm">1. Add Your Tasks</h3>
              </div>
              <p className="text-xs text-white/50 leading-relaxed relative z-10">
                Start by adding your subjects to the <strong>Study Tasks</strong> panel. Assign a deadline, estimate how many hours you need, and flag it if an exam is coming up soon.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-[1.5rem] border bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 blur-[50px] opacity-[0.05] pointer-events-none group-hover:opacity-[0.1] transition-opacity" style={{ background: '#f59e0b' }} />
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm">2. Generate AI Schedule</h3>
              </div>
              <p className="text-xs text-white/50 leading-relaxed relative z-10">
                Select your peak energy period (Morning, Afternoon, or Evening) at the top, then hit <strong>Generate Flow</strong>. The AI heuristic will automatically distribute tasks into optimal time blocks.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-[1.5rem] border bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 blur-[50px] opacity-[0.05] pointer-events-none group-hover:opacity-[0.1] transition-opacity" style={{ background: '#10b981' }} />
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-8 h-8 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center border border-green-500/20">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm">3. Log Your Progress</h3>
              </div>
              <p className="text-xs text-white/50 leading-relaxed relative z-10">
                Click on any task card in the left sidebar to expand it and use the slider to log the hours you've studied. Mark tasks as "Done" when you complete them!
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative p-6 rounded-[1.5rem] border bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 blur-[50px] opacity-[0.05] pointer-events-none group-hover:opacity-[0.1] transition-opacity" style={{ background: '#8b5cf6' }} />
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-sm">4. Deep Focus Mode</h3>
              </div>
              <p className="text-xs text-white/50 leading-relaxed relative z-10">
                Ready to study? Click the <strong>Focus</strong> button at the top to enter a distraction-free, full-screen environment showing exactly what you need to study right now.
              </p>
            </div>
          </div>

          <div className="mt-8 p-5 rounded-[1.5rem] bg-red-500/5 border border-red-500/10 flex items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[13px] font-bold text-red-100 mb-1">Pay attention to Critical Alerts</h4>
              <p className="text-[11px] font-medium text-red-200/60 leading-relaxed">
                The right sidebar monitors your tasks. If a deadline is approaching and you haven't logged enough hours, or if an exam is near, a critical alert will automatically appear. Ensure you clear these alerts to stay on track.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
}
