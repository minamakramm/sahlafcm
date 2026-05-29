import React, { useMemo } from 'react';
import { formatHour } from './schedulerUtils';
import {
  Clock, Flame, BookOpen, Brain, Coffee, Zap,
  Timer, GraduationCap, Sparkles, Calendar
} from 'lucide-react';

const DIFFICULTY_ICON = {
  hard: <Brain className="w-3.5 h-3.5" />,
  medium: <BookOpen className="w-3.5 h-3.5" />,
  easy: <Coffee className="w-3.5 h-3.5" />,
};

const PRIORITY_COLOR = {
  critical: { bg: 'rgba(239,68,68,0.08)', border: '#ef4444', dot: '#ef4444', text: '#fca5a5', glow: 'rgba(239,68,68,0.15)' },
  important: { bg: 'rgba(245,158,11,0.08)', border: '#f59e0b', dot: '#f59e0b', text: '#fcd34d', glow: 'rgba(245,158,11,0.12)' },
  optional: { bg: 'rgba(34,197,94,0.08)', border: '#22c55e', dot: '#22c55e', text: '#86efac', glow: 'rgba(34,197,94,0.12)' },
  review: { bg: 'rgba(59,130,246,0.08)', border: '#3b82f6', dot: '#3b82f6', text: '#93c5fd', glow: 'rgba(59,130,246,0.12)' },
};

/* ─── Visual Hour Bar ─── */
function HourBar({ startHour, endHour, duration, color }) {
  const dayStart = 7;
  const dayEnd = 23;
  const totalSpan = dayEnd - dayStart;
  const left = ((startHour - dayStart) / totalSpan) * 100;
  const width = (duration / totalSpan) * 100;

  return (
    <div className="hour-bar-track">
      {/* Hour markers */}
      {Array.from({ length: totalSpan + 1 }, (_, i) => {
        const hr = dayStart + i;
        const isMain = hr % 3 === 0;
        return (
          <div key={hr} className="hour-bar-tick" style={{ left: `${(i / totalSpan) * 100}%` }}>
            <div className={`hour-bar-tick-line ${isMain ? 'h-2' : 'h-1'}`} />
            {isMain && <span className="hour-bar-tick-label">{hr > 12 ? hr - 12 : hr}{hr >= 12 ? 'p' : 'a'}</span>}
          </div>
        );
      })}
      {/* Active fill */}
      <div
        className="hour-bar-fill"
        style={{
          left: `${Math.max(0, left)}%`,
          width: `${Math.min(100 - left, width)}%`,
          background: `linear-gradient(90deg, ${color}dd, ${color}88)`,
          boxShadow: `0 0 12px ${color}33`,
        }}
      />
    </div>
  );
}

/* ─── Break Indicator ─── */
function BreakGap({ gapHours }) {
  if (gapHours < 0.5) return null;
  return (
    <div className="break-gap">
      <div className="break-gap-line" />
      <span className="break-gap-label">
        <Coffee className="w-2.5 h-2.5" />
        {gapHours >= 1 ? `${gapHours}h break` : `${Math.round(gapHours * 60)}min break`}
      </span>
      <div className="break-gap-line" />
    </div>
  );
}

/* ─── Day Summary Bar ─── */
function DaySummaryBar({ blocks }) {
  const difficulties = { hard: 0, medium: 0, easy: 0 };
  blocks.forEach(b => { difficulties[b.difficulty] = (difficulties[b.difficulty] || 0) + b.duration; });
  const total = blocks.reduce((s, b) => s + b.duration, 0);

  return (
    <div className="day-summary-bar">
      {Object.entries(difficulties).map(([diff, hours]) => {
        if (hours === 0) return null;
        const colors = { hard: '#ef4444', medium: '#f59e0b', easy: '#22c55e' };
        return (
          <div key={diff} className="day-summary-segment" style={{
            width: `${(hours / total) * 100}%`,
            background: `${colors[diff]}44`,
            borderBottom: `2px solid ${colors[diff]}`,
          }}>
            <span className="day-summary-segment-label" style={{ color: colors[diff] }}>
              {diff[0].toUpperCase()} · {hours}h
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Single Schedule Block ─── */
function ScheduleBlock({ block, dayIdx, blockIdx, isFirst, isLast }) {
  const colors = PRIORITY_COLOR[block.priority] || PRIORITY_COLOR.review;

  return (
    <div
      className="sched-block"
      style={{ animationDelay: `${(dayIdx * 0.1) + (blockIdx * 0.065)}s`, '--block-accent': colors.border }}
      id={`schedule-block-${dayIdx}-${blockIdx}`}
    >
      {/* Left time gutter */}
      <div className="sched-block-gutter">
        <span className="sched-block-time-start">{formatHour(block.startHour)}</span>
        <div className="sched-block-time-line">
          <div className="sched-block-node" style={{ background: colors.dot, boxShadow: `0 0 8px ${colors.glow}` }}>
            {isFirst && <div className="sched-block-node-ring" style={{ borderColor: colors.dot }} />}
          </div>
          {!isLast && <div className="sched-block-connector" style={{ background: `linear-gradient(to bottom, ${colors.dot}66, transparent)` }} />}
        </div>
        <span className="sched-block-time-end">{formatHour(block.endHour)}</span>
      </div>

      {/* Main card */}
      <div className="sched-block-card group" style={{ borderLeftColor: colors.border }}>
        {/* Top-left active glow */}
        <div className="sched-block-glow" style={{ background: `radial-gradient(ellipse at 0% 0%, ${colors.glow}, transparent 70%)` }} />
        
        {/* Bottom-right ambient blur (Premium Notification Card style) */}
        <div 
          className="absolute -bottom-10 -right-10 w-40 h-40 blur-[50px] opacity-[0.08] pointer-events-none group-hover:opacity-[0.18] transition-opacity duration-500"
          style={{ background: colors.glow }}
        />

        {/* Subtle border shine effect */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Content */}
        <div className="sched-block-content relative z-10">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-[0.8rem] flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 shrink-0" 
                style={{ 
                  background: `${colors.dot}15`, 
                  borderColor: `${colors.dot}25`,
                  color: colors.text,
                  boxShadow: `0 0 15px ${colors.glow}40`
                }}>
                {DIFFICULTY_ICON[block.difficulty]}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-[13px] font-bold text-white truncate">{block.subject}</h4>
                  {block.examSoon && <Flame className="w-3 h-3 text-red-400 critical-glow shrink-0" />}
                </div>
                <p className="text-[10px] text-white/60 font-medium mt-0.5 capitalize">{block.priority} priority</p>
              </div>
            </div>

            {/* Duration pill */}
            <div className="sched-block-duration flex shrink-0">
              <Timer className="w-3 h-3 opacity-60" />
              <span>{block.duration}h</span>
            </div>
          </div>

          {/* Visual Hour bar */}
          <HourBar startHour={block.startHour} endHour={block.endHour} duration={block.duration} color={colors.border} />

          {/* Bottom metadata row */}
          <div className="flex items-center justify-between mt-2.5">
            <div className="flex items-center gap-2">
              <span className={`sched-block-diff difficulty-${block.difficulty}`}>
                {block.difficulty}
              </span>
              {block.examSoon && (
                <span className="exam-soon-badge text-[7px] px-1.5 py-0.5 rounded-full font-bold flex items-center gap-0.5">
                  <Flame className="w-2 h-2" /> EXAM
                </span>
              )}
            </div>
            <span className="sched-block-timerange">
              <Clock className="w-2.5 h-2.5" />
              {formatHour(block.startHour)} – {formatHour(block.endHour)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function ScheduleTimeline({ schedule }) {
  if (!schedule || schedule.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="empty-state-icon mb-6 relative">
          <div className="w-24 h-24 rounded-3xl bg-accent-500/8 border border-accent-500/12 flex items-center justify-center mx-auto relative overflow-hidden">
            <Zap className="w-9 h-9 text-accent-400 opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-accent-300 opacity-40" />
          </div>
        </div>
        <h3 className="text-base font-bold text-white/60 mb-2">No Schedule Yet</h3>
        <p className="text-[13px] text-white/30 max-w-[280px] leading-relaxed">
          Add tasks and tap <span className="font-bold text-accent-400/80">"Generate My Schedule"</span> to create your optimized study flow.
        </p>
      </div>
    );
  }

  // Current hour for "now" indicator
  const nowHour = new Date().getHours() + new Date().getMinutes() / 60;

  return (
    <div className="sched-timeline">
      {schedule.map((day, dayIdx) => {
        const totalHours = day.blocks.reduce((s, b) => s + b.duration, 0);
        const sessionCount = day.blocks.length;
        const isHeavy = totalHours > 5;
        const isToday = dayIdx === 0;

        return (
          <div key={dayIdx} className="sched-day" style={{ animationDelay: `${dayIdx * 0.1}s` }}>
            {/* ── Day Header ── */}
            <div className={`sched-day-header ${isToday ? 'sched-day-header-today' : ''}`}>
              <div className="flex items-center gap-2.5">
                {isToday ? (
                  <div className="sched-today-dot"><div className="sched-today-dot-inner" /></div>
                ) : (
                  <Calendar className="w-3.5 h-3.5 text-white/20" />
                )}
                <div>
                  <h3 className="sched-day-title">{day.dayLabel}</h3>
                  {isToday && <span className="sched-day-subtitle">Current day</span>}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {isHeavy && (
                  <span className="sched-heavy-badge">
                    ⚡ Heavy
                  </span>
                )}
                <span className="sched-day-meta">
                  {totalHours.toFixed(1)}h · {sessionCount} session{sessionCount !== 1 ? 's' : ''}
                </span>
              </div>
            </div>

            {/* ── Difficulty distribution bar ── */}
            <DaySummaryBar blocks={day.blocks} />

            {/* ── Session Blocks ── */}
            <div className="sched-blocks">
              {day.blocks.map((block, blockIdx) => {
                // Check for break between blocks
                const prevBlock = blockIdx > 0 ? day.blocks[blockIdx - 1] : null;
                const gapHours = prevBlock ? block.startHour - prevBlock.endHour : 0;

                return (
                  <React.Fragment key={`${dayIdx}-${blockIdx}`}>
                    {gapHours >= 0.5 && <BreakGap gapHours={gapHours} />}
                    <ScheduleBlock
                      block={block}
                      dayIdx={dayIdx}
                      blockIdx={blockIdx}
                      isFirst={blockIdx === 0}
                      isLast={blockIdx === day.blocks.length - 1}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
