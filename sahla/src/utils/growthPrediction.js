/**
 * Utility to extract auto-generated textual insights from raw analytics payload.
 * Used by SaaSInsightsPanel.jsx to generate AI-like dashboard statements.
 */
export function extractTextualInsights(data) {
  if (!data) return [];

  const insights = [];

  // Insight 1: Engagement Health
  if (data.charts && data.charts.healthMap) {
    const active = data.charts.healthMap.active_users || 0;
    const inactive = data.charts.healthMap.inactive_users || 0;
    const total = active + inactive;
    
    if (total > 0) {
      const activePct = Math.round((active / total) * 100);
      insights.push({
        icon: 'activity',
        alert: activePct < 15, // Alert if retention drops below 15%
        label: 'Retention Health',
        value: `${activePct}% of accounts were active in the last 7 days.`
      });
    }
  }

  // Insight 2: Database Top Consumer
  if (data.topTables && data.topTables.length > 0) {
    const topTable = data.topTables[0];
    const sizeMb = (topTable.size_bytes / (1024 * 1024)).toFixed(1);
    insights.push({
      icon: 'database',
      alert: false,
      label: 'Database Velocity',
      value: `The '${topTable.name}' table is the largest entity at ${sizeMb} MB.`
    });
  }

  // Insight 3: Activity Concentration
  if (data.topAccounts && data.topAccounts.length > 0) {
    const topUser = data.topAccounts[0];
    const topPct = topUser.pct_usage || 0;
    if (topPct > 25) {
      insights.push({
        icon: 'users',
        alert: true,
        label: 'Engagement Skew',
        value: `${topUser.name} is responsible for ${topPct.toFixed(1)}% of all platform activity.`
      });
    } else {
      insights.push({
        icon: 'users',
        alert: false,
        label: 'User Activity',
        value: `Engagement is healthy, with the top user contributing ${topPct.toFixed(1)}% of activity.`
      });
    }
  }

  // Insight 4: Capacity Limits Check
  if (data.database && data.database.limit_bytes && data.database.size_bytes) {
    const pctUsed = (data.database.size_bytes / data.database.limit_bytes) * 100;
    if (pctUsed > 80) {
      insights.push({
        icon: 'warning',
        alert: true,
        label: 'Capacity Warning',
        value: `Database is at ${pctUsed.toFixed(1)}% of free tier. Plan upgrade recommended soon.`
      });
    }
  }

  if (data.storage && data.storage.limit_bytes && data.storage.size_bytes) {
    const pctUsedPath = (data.storage.size_bytes / data.storage.limit_bytes) * 100;
    if (pctUsedPath > 80 && insights.filter(i => i.label === 'Capacity Warning').length === 0) {
       insights.push({
        icon: 'warning',
        alert: true,
        label: 'Capacity Warning',
        value: `Storage is at ${pctUsedPath.toFixed(1)}% of free tier threshold.`
      });
    }
  }

  // Insight 5: Growth Trend
  if (data.charts && data.charts.forecast && data.charts.forecast.length >= 2) {
    const forecast = data.charts.forecast;
    const firstDay = forecast[0].active_users || 0;
    const lastDay = forecast[forecast.length - 1].active_users || 0;
    
    if (lastDay > firstDay) {
        const growth = Math.round(((lastDay - firstDay) / Math.max(1, firstDay)) * 100);
        insights.push({
            icon: 'growth',
            alert: false,
            label: 'Growth Momentum',
            value: `Active sessions grew by ${growth}% over the last 7 days.`
        });
    }
  }

  return insights;
}

/**
 * Calculates current growth velocity (average daily increase)
 * @param {Array} history
 */
export function calculateGrowthVectors(history) {
  if (!history || history.length < 2) {
    return { dbVelocity: 0, storageVelocity: 0, userVelocity: 0 };
  }

  const n = history.length;
  const first = history[0];
  const last = history[n - 1];

  return {
    dbVelocity: (last.db - first.db) / n,
    storageVelocity: (last.storage - first.storage) / n,
    userVelocity: (last.active_users - first.active_users) / n
  };
}

/**
 * Predicts days remaining until a limit is hit
 * @param {number} current
 * @param {number} limit
 * @param {number} velocity
 */
export function predictDaysToLimit(current, limit, velocity) {
  if (current >= limit) return { days: 0, zone: 'red', label: 'Exceeded' };
  if (velocity <= 0) return { days: Infinity, zone: 'green', label: 'Stable' };

  const days = Math.floor((limit - current) / velocity);
  const zone = days < 30 ? 'red' : days < 90 ? 'yellow' : 'green';

  return {
    days,
    zone,
    label: zone === 'red' ? 'Critical' : zone === 'yellow' ? 'Monitor' : 'Healthy'
  };
}

