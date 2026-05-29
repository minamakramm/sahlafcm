/**
 * Formats seconds into a human-readable duration (e.g. 1h 23m or 45m).
 */
export function formatDuration(totalSeconds) {
  if (!totalSeconds || totalSeconds < 0) return '0m'
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${minutes}m`
}

/**
 * Formats a date string into a localized short date (e.g. Oct 14, 2023).
 */
export function formatDate(dateString, locale = 'en-US') {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' })
}

/**
 * Truncates text to a specified length and adds an ellipsis.
 */
export function truncateText(text, maxLength) {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Formats a score fraction to a clean percentage string.
 */
export function formatScore(score, total) {
  if (!total || total <= 0) return '0%'
  const percentage = Math.round((score / total) * 100)
  return `${percentage}%`
}
