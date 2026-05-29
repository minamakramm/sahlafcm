// ============================================
// Sahla — Analytics Events & Tracking
// ============================================

/**
 * Analytics event constants
 * Used with useAnalytics hook for consistent event naming
 */
export const ANALYTICS_EVENTS = {
  // Auth events
  AUTH_LOGIN: 'auth_login',
  AUTH_SIGNUP: 'auth_signup',
  AUTH_LOGOUT: 'auth_logout',
  AUTH_PASSWORD_RESET: 'auth_password_reset',

  // Navigation
  PAGE_VIEW: 'page_view',
  NAV_CLICK: 'nav_click',
  DEPARTMENT_VIEW: 'department_view',

  // Subject & Lecture
  SUBJECT_VIEW: 'subject_view',
  LECTURE_VIEW: 'lecture_view',
  LECTURE_COMPLETE: 'lecture_complete',
  LECTURE_TAB_SWITCH: 'lecture_tab_switch',

  // Exam
  EXAM_START: 'exam_start',
  EXAM_SUBMIT: 'exam_submit',
  EXAM_TIMEOUT: 'exam_timeout',
  EXAM_RETRY: 'exam_retry',

  // Bookmarks
  BOOKMARK_ADD: 'bookmark_add',
  BOOKMARK_REMOVE: 'bookmark_remove',

  // Progress
  PROGRESS_VIEW: 'progress_view',
  PROGRESS_RESET: 'progress_reset',

  // Feature Requests
  FEATURE_REQUEST_SUBMIT: 'feature_request_submit',
  FEATURE_REQUEST_VOTE: 'feature_request_vote',

  // Feedback
  FEEDBACK_SUBMIT: 'feedback_submit',

  // UI
  THEME_TOGGLE: 'theme_toggle',
  LANGUAGE_SWITCH: 'language_switch',
  SEARCH_QUERY: 'search_query',

  // Deadlines
  DEADLINE_VIEWED: 'deadline_viewed',
  DEADLINE_ACKNOWLEDGED: 'deadline_acknowledged',
  DEADLINE_FLAGGED: 'deadline_flagged',
  MONITOR_DEADLINE_CREATED: 'monitor_deadline_created',
  MONITOR_DEADLINE_UPDATED: 'monitor_deadline_updated',
  MONITOR_DEADLINE_DELETED: 'monitor_deadline_deleted',

  // Errors
  ERROR_BOUNDARY: 'error_boundary',
  API_ERROR: 'api_error',
}

/**
 * Track an analytics event (base function)
 * In development, logs to console. In production, sends to Supabase analytics table.
 */
export function trackEvent(eventName, properties = {}) {
  const isDev = import.meta.env.VITE_APP_ENV === 'development'

  const event = {
    event: eventName,
    properties: {
      ...properties,
      timestamp: new Date().toISOString(),
      url: window.location.pathname,
      referrer: document.referrer || null,
    },
  }

  if (isDev) {
    console.debug('[Analytics]', event.event, event.properties)
    return
  }

  // Production: fire-and-forget to Supabase
  // Implemented in useAnalytics hook with Supabase client
  return event
}
