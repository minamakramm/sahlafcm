import { differenceInHours, differenceInDays, addDays, format, startOfDay, setHours } from 'date-fns';

// Priority weights
const PRIORITY_WEIGHT = { critical: 10, important: 5, optional: 2 };
const DIFFICULTY_MAP = { hard: 3, medium: 2, easy: 1 };

// Peak hour ranges
const PEAK_RANGES = {
  morning: [8, 12],
  afternoon: [13, 17],
  evening: [18, 22],
};

/**
 * Score a task for scheduling priority.
 * Formula: (priorityWeight × deadlineUrgency) / difficultySpread
 */
export function scoreTask(task, now = new Date()) {
  const hoursLeft = Math.max(1, differenceInHours(new Date(task.deadline), now));
  const urgency = Math.min(100, 1000 / hoursLeft);
  const pw = PRIORITY_WEIGHT[task.priority] || 2;
  const diff = DIFFICULTY_MAP[task.difficulty] || 2;
  const examBoost = task.examSoon ? 2.5 : 1;
  const remainingRatio = Math.max(0.1, (task.estimatedHours - (task.loggedHours || 0)) / task.estimatedHours);
  return ((pw * urgency * examBoost) / diff) * remainingRatio;
}

/**
 * Generate a smart schedule from tasks.
 */
export function generateSchedule(tasks, peakPeriod = 'morning', days = 7) {
  const now = new Date();
  const schedule = [];

  // Filter incomplete tasks & score them
  const activeTasks = tasks
    .filter(t => t.status !== 'done')
    .map(t => ({ ...t, score: scoreTask(t, now), remainingHours: Math.max(0, t.estimatedHours - (t.loggedHours || 0)) }))
    .filter(t => t.remainingHours > 0)
    .sort((a, b) => b.score - a.score);

  if (activeTasks.length === 0) return schedule;

  const [peakStart, peakEnd] = PEAK_RANGES[peakPeriod] || PEAK_RANGES.morning;
  const offPeakStart = peakEnd + 1;
  const offPeakEnd = offPeakStart + 3;

  for (let d = 0; d < days; d++) {
    const dayDate = addDays(startOfDay(now), d);
    const dayLabel = d === 0 ? 'Today' : d === 1 ? 'Tomorrow' : format(dayDate, 'EEEE, MMM d');
    const dayBlocks = [];
    let currentHour = peakStart;
    let usedSubjects = new Set();
    let peakFilled = false;

    // Hard/critical tasks in peak hours
    for (const task of activeTasks) {
      if (task.remainingHours <= 0 || currentHour >= peakEnd) { peakFilled = true; break; }
      if (usedSubjects.has(task.subject) && activeTasks.length > 2) continue;
      const isHardOrCritical = task.difficulty === 'hard' || task.priority === 'critical';
      if (!isHardOrCritical) continue;

      const duration = Math.min(task.remainingHours, 2, peakEnd - currentHour);
      if (duration <= 0) continue;

      dayBlocks.push({
        ...task,
        startHour: currentHour,
        endHour: currentHour + duration,
        duration,
        dayLabel,
        dayDate: dayDate.toISOString(),
      });
      task.remainingHours -= duration;
      usedSubjects.add(task.subject);
      currentHour += duration;
    }

    // Fill remaining peak + off-peak with other tasks
    if (currentHour < peakEnd) {
      for (const task of activeTasks) {
        if (task.remainingHours <= 0 || currentHour >= peakEnd) break;
        if (usedSubjects.has(task.subject) && activeTasks.length > 2) continue;
        const duration = Math.min(task.remainingHours, 1.5, peakEnd - currentHour);
        if (duration <= 0) continue;
        dayBlocks.push({
          ...task, startHour: currentHour, endHour: currentHour + duration,
          duration, dayLabel, dayDate: dayDate.toISOString(),
        });
        task.remainingHours -= duration;
        usedSubjects.add(task.subject);
        currentHour += duration;
      }
    }

    // Off-peak: easy/review tasks
    currentHour = offPeakStart;
    for (const task of activeTasks) {
      if (task.remainingHours <= 0 || currentHour >= offPeakEnd) break;
      const isLight = task.difficulty === 'easy' || task.priority === 'optional';
      if (!isLight && activeTasks.some(t => t.remainingHours > 0 && (t.difficulty === 'easy' || t.priority === 'optional'))) continue;
      const duration = Math.min(task.remainingHours, 1.5, offPeakEnd - currentHour);
      if (duration <= 0) continue;
      dayBlocks.push({
        ...task, startHour: currentHour, endHour: currentHour + duration,
        duration, dayLabel, dayDate: dayDate.toISOString(),
      });
      task.remainingHours -= duration;
      currentHour += duration;
    }

    if (dayBlocks.length > 0) {
      schedule.push({ dayLabel, dayDate: dayDate.toISOString(), blocks: dayBlocks.sort((a, b) => a.startHour - b.startHour) });
    }
  }

  return schedule;
}

/**
 * Get critical alerts from tasks.
 */
export function getCriticalAlerts(tasks) {
  const now = new Date();
  const alerts = [];

  for (const task of tasks) {
    if (task.status === 'done') continue;
    const hoursUntilDeadline = differenceInHours(new Date(task.deadline), now);
    const daysUntil = differenceInDays(new Date(task.deadline), now);

    if (hoursUntilDeadline <= 48 && hoursUntilDeadline > 0) {
      alerts.push({ type: 'deadline', task, message: `Due in ${hoursUntilDeadline < 24 ? `${hoursUntilDeadline}h` : `${daysUntil}d`}`, severity: hoursUntilDeadline <= 24 ? 'critical' : 'warning' });
    }
    if (hoursUntilDeadline <= 0) {
      alerts.push({ type: 'overdue', task, message: 'Overdue!', severity: 'critical' });
    }
    const progress = (task.loggedHours || 0) / task.estimatedHours;
    if (progress < 0.3 && hoursUntilDeadline < 72) {
      alerts.push({ type: 'underprepared', task, message: `Only ${Math.round(progress * 100)}% prepared`, severity: 'warning' });
    }
  }

  return alerts.sort((a, b) => (a.severity === 'critical' ? -1 : 1));
}

/**
 * Format hour to time string.
 */
export function formatHour(h) {
  const hour = Math.floor(h);
  const min = Math.round((h - hour) * 60);
  const period = hour >= 12 ? 'PM' : 'AM';
  const display = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${display}:${min.toString().padStart(2, '0')} ${period}`;
}

/**
 * Sample pre-loaded tasks.
 */
export const SAMPLE_TASKS = [
  { id: '1', subject: 'Data Structures', deadline: addDays(new Date(), 2).toISOString(), difficulty: 'hard', estimatedHours: 8, loggedHours: 2, priority: 'critical', examSoon: true, status: 'in-progress' },
  { id: '2', subject: 'Linear Algebra', deadline: addDays(new Date(), 4).toISOString(), difficulty: 'medium', estimatedHours: 5, loggedHours: 1, priority: 'important', examSoon: false, status: 'in-progress' },
  { id: '3', subject: 'Web Development', deadline: addDays(new Date(), 6).toISOString(), difficulty: 'easy', estimatedHours: 3, loggedHours: 0, priority: 'optional', examSoon: false, status: 'not-started' },
  { id: '4', subject: 'Operating Systems', deadline: addDays(new Date(), 1).toISOString(), difficulty: 'hard', estimatedHours: 6, loggedHours: 3, priority: 'critical', examSoon: true, status: 'in-progress' },
  { id: '5', subject: 'Database Systems', deadline: addDays(new Date(), 5).toISOString(), difficulty: 'medium', estimatedHours: 4, loggedHours: 0, priority: 'important', examSoon: false, status: 'not-started' },
  { id: '6', subject: 'Discrete Math', deadline: addDays(new Date(), 3).toISOString(), difficulty: 'medium', estimatedHours: 4, loggedHours: 2, priority: 'important', examSoon: true, status: 'in-progress' },
];
