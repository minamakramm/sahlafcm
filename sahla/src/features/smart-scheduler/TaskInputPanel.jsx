import React, { useState } from 'react';
import { Plus, Flame, Trash2, BookOpen, Clock, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { addDays, format, differenceInDays } from 'date-fns';

const defaultForm = {
  subject: '',
  deadline: format(addDays(new Date(), 3), 'yyyy-MM-dd'),
  difficulty: 'medium',
  estimatedHours: 3,
  priority: 'important',
  examSoon: false,
};

export default function TaskInputPanel({ tasks, onAddTask, onDeleteTask, onUpdateTask }) {
  const [form, setForm] = useState(defaultForm);
  const [showForm, setShowForm] = useState(false);
  const [expandedTask, setExpandedTask] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.subject.trim()) return;
    onAddTask({
      ...form,
      id: Date.now().toString(),
      deadline: new Date(form.deadline).toISOString(),
      estimatedHours: Number(form.estimatedHours),
      loggedHours: 0,
      status: 'not-started',
    });
    setForm(defaultForm);
    setShowForm(false);
  };

  const statusCycle = { 'not-started': 'in-progress', 'in-progress': 'done', 'done': 'not-started' };
  const statusLabel = { 'not-started': 'Not Started', 'in-progress': 'In Progress', 'done': 'Done' };
  const priorityEmoji = { critical: '🔴', important: '🟡', optional: '🟢' };

  const handleLogHours = (taskId, hours) => {
    onUpdateTask(taskId, { loggedHours: Number(hours) });
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <GraduationCap className="w-4.5 h-4.5 text-accent-400" />
          Study Tasks
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/15">
            {tasks.length}
          </span>
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="w-7 h-7 rounded-lg flex items-center justify-center bg-accent-500/15 text-accent-400 hover:bg-accent-500/25 transition-all duration-200 hover:scale-110 active:scale-95"
          id="toggle-add-task-form"
        >
          <Plus className="w-3.5 h-3.5" style={{ transform: showForm ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)' }} />
        </button>
      </div>

      {/* Quick stats */}
      <div className="flex items-center gap-2 text-[10px] font-semibold text-white/30">
        <span>{tasks.filter(t => t.status === 'done').length} done</span>
        <span>·</span>
        <span>{tasks.filter(t => t.status === 'in-progress').length} active</span>
        <span>·</span>
        <span>{tasks.filter(t => t.examSoon).length} exams</span>
      </div>

      {/* Add Task Form */}
      {showForm && (
        <form 
          onSubmit={handleSubmit} 
          className="relative p-4 space-y-3 animate-scale-in rounded-[1.25rem] border bg-white/[0.04] border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)] overflow-hidden" 
          id="add-task-form"
        >
          {/* Background Accent Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 blur-[50px] opacity-[0.1] pointer-events-none transition-opacity duration-500" style={{ background: '#38bdf8' }} />
          
          {/* Subtle border shine effect */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
          
          <div className="relative z-10 space-y-3">
            <input
              type="text"
              placeholder="Subject name…"
              value={form.subject}
              onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
              className="scheduler-input"
              autoFocus
              id="task-subject-input"
            />
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[9px] uppercase tracking-widest font-bold text-white/35 mb-1 block">Deadline</label>
                <input type="date" value={form.deadline} onChange={e => setForm(f => ({ ...f, deadline: e.target.value }))}
                  className="scheduler-input text-xs" id="task-deadline-input" />
              </div>
              <div>
                <label className="text-[9px] uppercase tracking-widest font-bold text-white/35 mb-1 block">Hours Needed</label>
                <input type="number" min={1} max={50} value={form.estimatedHours}
                  onChange={e => setForm(f => ({ ...f, estimatedHours: e.target.value }))}
                  className="scheduler-input" id="task-hours-input" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[9px] uppercase tracking-widest font-bold text-white/35 mb-1 block">Difficulty</label>
                <select value={form.difficulty} onChange={e => setForm(f => ({ ...f, difficulty: e.target.value }))}
                  className="scheduler-select" id="task-difficulty-select">
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div>
                <label className="text-[9px] uppercase tracking-widest font-bold text-white/35 mb-1 block">Priority</label>
                <select value={form.priority} onChange={e => setForm(f => ({ ...f, priority: e.target.value }))}
                  className="scheduler-select" id="task-priority-select">
                  <option value="critical">🔴 Critical</option>
                  <option value="important">🟡 Important</option>
                  <option value="optional">🟢 Optional</option>
                </select>
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer group py-1" id="task-exam-toggle">
              <input type="checkbox" checked={form.examSoon} onChange={e => setForm(f => ({ ...f, examSoon: e.target.checked }))} className="hidden" />
              <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${form.examSoon ? 'bg-red-500/20 border-red-500 scale-110' : 'border-white/15 hover:border-white/30'}`}>
                {form.examSoon && <Flame className="w-3 h-3 text-red-400" />}
              </div>
              <span className="text-[11px] font-semibold text-white/50 group-hover:text-white/70 transition-colors">Exam Soon</span>
            </label>
            <button type="submit" className="generate-btn w-full text-sm h-10" id="add-task-submit">
              <Plus className="w-4 h-4 inline mr-1" /> Add Task
            </button>
          </div>
        </form>
      )}

      {/* Task List */}
      <div className="space-y-3 mt-2">
        {tasks.map((task, idx) => {
          const daysLeft = differenceInDays(new Date(task.deadline), new Date());
          const pct = Math.min(100, Math.round(((task.loggedHours || 0) / task.estimatedHours) * 100));
          const isExpanded = expandedTask === task.id;
          
          // Determine the glow and accent color based on task status
          let configColor = '#38bdf8'; // Default Blue
          let iconContent = <BookOpen size={18} />;
          if (task.examSoon) {
            configColor = '#ef4444'; // Red
            iconContent = <Flame size={18} />;
          } else if (task.priority === 'critical') {
            configColor = '#f43f5e'; // Rose
          } else if (task.priority === 'important') {
            configColor = '#f59e0b'; // Amber
          } else if (task.status === 'done') {
            configColor = '#10b981'; // Green
            iconContent = <CheckCircle2 size={18} />;
          }

          return (
            <div
              key={task.id}
              className={`relative p-4 rounded-[1.25rem] border transition-all duration-300 cursor-pointer group overflow-hidden animate-fade-in ${
                task.status === 'done'
                  ? 'bg-white/[0.01] border-white/5 hover:border-white/10'
                  : 'bg-white/[0.04] border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)] hover:border-white/20'
              }`}
              style={{ animationDelay: `${idx * 0.04}s` }}
              id={`task-card-${task.id}`}
              onClick={(e) => {
                // Don't expand if clicking status or delete buttons
                if (e.target.closest('button')) return;
                setExpandedTask(isExpanded ? null : task.id);
              }}
            >
              {/* Background Accent Glow */}
              {task.status !== 'done' && (
                <div 
                  className="absolute -top-10 -right-10 w-32 h-32 blur-[50px] opacity-[0.08] pointer-events-none group-hover:opacity-[0.15] transition-opacity duration-500"
                  style={{ background: configColor }}
                />
              )}

              <div className="flex gap-3 relative z-10">
                {/* Left Icon Area */}
                <div className="flex flex-col items-center gap-2 mt-1">
                  <div 
                    className="w-10 h-10 rounded-[0.8rem] flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 shrink-0"
                    style={{ 
                      background: `${configColor}10`, 
                      borderColor: `${configColor}20`,
                      color: configColor,
                      boxShadow: task.status !== 'done' ? `0 0 15px ${configColor}15` : 'none'
                    }}
                  >
                    {iconContent}
                  </div>
                  {task.status === 'in-progress' && (
                     <span className="w-1.5 h-1.5 rounded-full mt-1 animate-pulse" style={{ background: configColor, boxShadow: `0 0 8px ${configColor}` }} />
                  )}
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                      <h3 className={`font-bold text-[13px] tracking-tight truncate ${task.status === 'done' ? 'text-white/50 line-through' : 'text-white/90'}`}>
                        {task.subject}
                      </h3>
                      {task.examSoon && (
                        <span className="px-1.5 py-0.5 rounded-md bg-red-500/10 text-red-400 text-[8px] font-black uppercase tracking-tighter border border-red-500/20 flex items-center gap-0.5 shrink-0">
                          <Flame className="w-2 h-2" /> EXAM
                        </span>
                      )}
                    </div>
                    <span className="text-[9px] font-bold text-white/30 uppercase whitespace-nowrap flex items-center gap-1 shrink-0 pt-0.5">
                      <Clock size={10} />
                      {daysLeft <= 0 ? 'Overdue' : daysLeft === 1 ? 'Tomorrow' : `${daysLeft}d`}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase border bg-white/5 ${
                      task.difficulty === 'hard' ? 'text-red-300 border-red-500/10' :
                      task.difficulty === 'medium' ? 'text-amber-300 border-amber-500/10' :
                      'text-green-300 border-green-500/10'
                    }`}>
                      {task.difficulty}
                    </span>
                    <span className={`text-[8px] font-bold uppercase tracking-widest ${
                      task.priority === 'critical' ? 'text-red-400' :
                      task.priority === 'important' ? 'text-amber-400' : 'text-white/40'
                    }`}>
                      {task.priority}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Progress bar miniature */}
                    <div className="flex-1 max-w-[120px]">
                      <div className="flex justify-between text-[8px] text-white/30 font-mono mb-1">
                        <span>{task.loggedHours || 0}h</span>
                        <span>{task.estimatedHours}h</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${pct}%`,
                            background: task.status === 'done' ? '#10b981' : `linear-gradient(90deg, ${configColor}, #10b981)`,
                          }} />
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button onClick={(e) => { e.stopPropagation(); onUpdateTask(task.id, { status: statusCycle[task.status] }); }}
                        className={`text-[9px] font-bold uppercase px-2 py-1 rounded-lg transition-colors ${
                          task.status === 'done' ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20' :
                          task.status === 'in-progress' ? 'bg-amber-500/10 text-amber-400 hover:bg-amber-500/20' :
                          'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60'
                        }`} id={`task-status-${task.id}`}>
                        {statusLabel[task.status]}
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); onDeleteTask(task.id); }}
                        className="opacity-0 group-hover:opacity-100 text-red-400/40 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all p-1.5"
                        id={`task-delete-${task.id}`}>
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable: Log Hours */}
              {isExpanded && (
                <div className="mt-4 pt-3 border-t border-white/5 relative z-10 animate-fade-in">
                  <label className="text-[9px] uppercase tracking-widest font-bold text-white/30 mb-2 block">
                    Log Study Hours: <span style={{ color: configColor }}>{task.loggedHours || 0}h</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={task.estimatedHours}
                    step={0.5}
                    value={task.loggedHours || 0}
                    onChange={e => handleLogHours(task.id, e.target.value)}
                    className="hours-slider w-full"
                    id={`task-log-${task.id}`}
                    style={{ '--slider-color': configColor }}
                  />
                </div>
              )}
              
              {/* Subtle border shine effect */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
