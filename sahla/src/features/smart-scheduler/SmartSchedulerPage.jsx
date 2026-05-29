import React, { useState, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Helmet } from 'react-helmet-async';
import {
  Sparkles, Zap, Sun, Sunset, Moon, X, Maximize2,
  AlertTriangle, BarChart3, CalendarClock, Clock, Target,
  BookOpen, ChevronLeft, HelpCircle
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation';
import TaskInputPanel from './TaskInputPanel';
import ScheduleTimeline from './ScheduleTimeline';
import AlertsPanel from './AlertsPanel';
import ProgressTracker from './ProgressTracker';
import SchedulerHelpModal from './SchedulerHelpModal';
import { generateSchedule, getCriticalAlerts, SAMPLE_TASKS } from './schedulerUtils';
import { useSchedulerStore } from '@/stores/schedulerStore';
import { useEffect } from 'react';
import './SmartSchedulerPage.css';

export default function SmartSchedulerPage() {
  const { tasks, fetchTasks, addTask, updateTask, deleteTask, isLoading } = useSchedulerStore();
  const [schedule, setSchedule] = useState([]);
  const [peakPeriod, setPeakPeriod] = useState('morning');
  const [focusMode, setFocusMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Derived state
  const alerts = useMemo(() => getCriticalAlerts(tasks), [tasks]);
  const criticalCount = useMemo(() => alerts.filter(a => a.severity === 'critical').length, [alerts]);
  const todaySchedule = useMemo(() => schedule.length > 0 ? [schedule[0]] : [], [schedule]);
  const totalSessions = useMemo(() => schedule.reduce((a, d) => a + d.blocks.length, 0), [schedule]);
  const totalHours = useMemo(() => schedule.reduce((a, d) => a + d.blocks.reduce((s, b) => s + b.duration, 0), 0), [schedule]);
  const doneCount = useMemo(() => tasks.filter(t => t.status === 'done').length, [tasks]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = useCallback((task) => addTask(task), [addTask]);
  const handleDeleteTask = useCallback((id) => deleteTask(id), [deleteTask]);
  const handleUpdateTask = useCallback((id, updates) => updateTask(id, updates), [updateTask]);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    setTimeout(() => {
      const result = generateSchedule(tasks, peakPeriod, 7);
      setSchedule(result);
      setIsGenerating(false);
    }, 700);
  }, [tasks, peakPeriod]);

  const peakOptions = [
    { value: 'morning', icon: <Sun className="w-3.5 h-3.5" />, label: 'Morning', time: '8–12' },
    { value: 'afternoon', icon: <Sunset className="w-3.5 h-3.5" />, label: 'Afternoon', time: '1–5' },
    { value: 'evening', icon: <Moon className="w-3.5 h-3.5" />, label: 'Evening', time: '6–10' },
  ];

  // ─── Focus Mode ───
  if (focusMode) {
    return createPortal(
      <div className="focus-mode-overlay p-6 md:p-12">
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <button onClick={() => setFocusMode(false)}
                className="group relative z-50 px-4 h-10 rounded-xl glass-tier-2 flex items-center justify-center gap-2 text-white/70 hover:text-white hover:bg-white/10 transition-all border border-white/10 hover:border-white/20"
                id="exit-focus-mode">
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-wider">Exit Focus</span>
              </button>
              <div>
                <h1 className="text-2xl font-black text-white mb-0.5 tracking-tight">Focus Mode</h1>
                <p className="text-xs text-white/40">Today's study plan — distraction free</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {todaySchedule[0] && (
                <div className="stat-pill">
                  <Target className="w-3 h-3 text-accent-400" />
                  <span className="stat-value">{todaySchedule[0].blocks.length}</span>
                  <span className="text-white/30">sessions</span>
                </div>
              )}
            </div>
          </div>

          {todaySchedule.length > 0 ? (
            <ScheduleTimeline schedule={todaySchedule} />
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <CalendarClock className="w-7 h-7 text-white/20" />
              </div>
              <p className="text-white/35 text-sm">Generate a schedule first to use Focus Mode.</p>
            </div>
          )}
        </div>
      </div>,
      document.body
    );
  }

  return (
    <>
      <Helmet>
        <title>Smart Scheduler — Sahla</title>
        <meta name="description" content="Intelligently organize and prioritize your study sessions with Sahla's Smart Scheduler." />
      </Helmet>

      <div className="scheduler-layout">
        {/* ─── Header ─── */}
        <div className="scheduler-header">
          <ScrollReveal variant="fadeIn">
            <div className="glass-tier-2 p-5 md:p-6 rounded-2xl scheduler-header-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-accent-500/15 border border-accent-500/10 flex items-center justify-center">
                    <CalendarClock className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h1 className="text-xl font-black text-white tracking-tight">Smart Scheduler</h1>
                    <p className="text-[11px] text-white/40">AI-powered study flow optimization</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 flex-wrap">
                  {/* Stats pills */}
                  {schedule.length > 0 && (
                    <div className="flex items-center gap-2 mr-1">
                      <div className="stat-pill">
                        <BookOpen className="w-3 h-3 text-accent-400" />
                        <span className="stat-value">{totalSessions}</span>
                      </div>
                      <div className="stat-pill">
                        <Clock className="w-3 h-3 text-blue-400" />
                        <span className="stat-value">{totalHours.toFixed(1)}h</span>
                      </div>
                    </div>
                  )}

                  {/* Peak Hours */}
                  <div className="flex items-center p-0.5 rounded-xl bg-white/[0.03] border border-white/5">
                    {peakOptions.map(opt => (
                      <button key={opt.value} onClick={() => setPeakPeriod(opt.value)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-200 ${
                          peakPeriod === opt.value
                            ? 'bg-accent-500/20 text-accent-300 shadow-sm border border-accent-500/15'
                            : 'text-white/35 hover:text-white/55 border border-transparent'
                        }`}
                        id={`peak-${opt.value}`}>
                        {opt.icon}
                        <span className="hidden sm:inline">{opt.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Focus */}
                  <button onClick={() => setFocusMode(true)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-bold text-white/40 hover:text-white/70 bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.06]"
                    id="enter-focus-mode">
                    <Maximize2 className="w-3.5 h-3.5" /> Focus
                  </button>

                  {/* Manual */}
                  <button onClick={() => setShowHelpModal(true)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-bold text-accent-400/80 hover:text-accent-400 bg-accent-500/10 border border-accent-500/20 hover:border-accent-500/30 transition-all hover:bg-accent-500/20 active:scale-95"
                    title="How to use Smart Scheduler"
                    id="open-scheduler-manual">
                    <HelpCircle className="w-4 h-4" /> Manual
                  </button>

                  {/* Generate */}
                  <button onClick={handleGenerate} disabled={isGenerating || tasks.length === 0}
                    className="generate-btn flex items-center gap-2 text-sm disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:transform-none"
                    id="generate-schedule-btn">
                    {isGenerating ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4" />
                    )}
                    {isGenerating ? 'Generating…' : 'Generate My Schedule'}
                  </button>
                </div>
              </div>

              {/* Critical alert banner */}
              {criticalCount > 0 && (
                <div className="mt-4 p-3 rounded-xl border border-red-500/20 flex items-center gap-2.5 animate-fade-in"
                  style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.06), rgba(239,68,68,0.02))' }}>
                  <div className="w-7 h-7 rounded-lg bg-red-500/15 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400 critical-glow" />
                  </div>
                  <p className="text-[11px] font-semibold text-red-300/90">
                    <span className="font-black">{criticalCount}</span> critical alert{criticalCount !== 1 ? 's' : ''} — tasks need immediate attention
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>

        {/* ─── Left Sidebar ─── */}
        <div className="scheduler-sidebar-left">
          <div className="glass-tier-2 p-4 rounded-2xl scheduler-panel">
            <TaskInputPanel tasks={tasks} onAddTask={handleAddTask}
              onDeleteTask={handleDeleteTask} onUpdateTask={handleUpdateTask} />
          </div>
        </div>

        {/* ─── Main Timeline ─── */}
        <div className="scheduler-main">
          <div className="p-1 min-h-[400px]">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[11px] font-black uppercase tracking-[0.15em] text-white/50 flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent-400" />
                Study Flow Timeline
              </h2>
              {schedule.length > 0 && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-[9px] text-white/25">Critical</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-[9px] text-white/25">Important</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[9px] text-white/25">Optional</span>
                  </div>
                </div>
              )}
            </div>
            <ScheduleTimeline schedule={schedule} />
          </div>
        </div>

        {/* ─── Right Sidebar ─── */}
        <div className="scheduler-sidebar-right space-y-3">
          <div className="glass-tier-2 p-4 rounded-2xl scheduler-panel">
            <h2 className="text-[10px] font-black uppercase tracking-[0.15em] text-white/45 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              Critical Alerts
              {alerts.length > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-red-500/12 text-red-400 text-[8px] font-bold animate-fade-in">{alerts.length}</span>
              )}
            </h2>
            <AlertsPanel alerts={alerts} />
          </div>

          <div className="glass-tier-2 p-4 rounded-2xl scheduler-panel">
            <h2 className="text-[10px] font-black uppercase tracking-[0.15em] text-white/45 mb-3 flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-accent-400" />
              Progress
              <span className="text-[9px] font-bold text-accent-400/60 ml-auto">{doneCount}/{tasks.length}</span>
            </h2>
            <ProgressTracker tasks={tasks} />
          </div>
        </div>
      </div>

      <SchedulerHelpModal isOpen={showHelpModal} onClose={() => setShowHelpModal(false)} />
    </>
  );
}
