/**
 * Utility to format byte values and calculate usage zones for dashboard metrics.
 */

/**
 * Converts bytes to human readable format (KB, MB, GB, TB)
 * @param {number} bytes 
 * @param {number} decimals 
 * @returns {string}
 */
export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  if (!bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Returns a safety zone (green, yellow, red) based on percentage usage
 * @param {number} percentage 
 * @returns {'green' | 'yellow' | 'red'}
 */
export function getStatusZone(percentage) {
  if (percentage >= 80) return 'red';
  if (percentage >= 50) return 'yellow';
  return 'green';
}

/**
 * Calculates days remaining based on current growth velocity
 * @param {number} limit 
 * @param {number} current 
 * @param {number} dailyGrowth 
 * @returns {number}
 */
export function calculateDaysRemaining(limit, current, dailyGrowth) {
  if (!dailyGrowth || dailyGrowth <= 0) return 999;
  const remaining = limit - current;
  return Math.max(0, Math.floor(remaining / dailyGrowth));
}
