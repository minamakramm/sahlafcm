// ============================================
// Sahla — Application Constants
// ============================================

export const APP_NAME = 'Sahla'
export const APP_VERSION = '1.0.0'
export const APP_DESCRIPTION = 'Your university study companion'

// Storage keys
export const STORAGE_KEYS = {
  AUTH: 'sahla-auth',
  LANGUAGE: 'sahla-lang',
  THEME: 'sahla-theme',
  BOOKMARKS: 'sahla-bookmarks',
  PROGRESS: 'sahla-progress',
}

// Route paths
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  MAINTENANCE: '/maintenance',
  DEPARTMENT: '/departments/:departmentSlug',
  SUBJECT: '/subjects/:subjectSlug',
  LECTURE: '/subjects/:subjectSlug/lecture/:lectureNumber',
  EXAM: '/subjects/:subjectSlug/exam',
  BOOKMARKS: '/bookmarks',
  PROGRESS: '/progress',
  FEATURE_REQUESTS: '/feature-requests',
  PROFILE: '/profile',
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_FEEDBACK: '/admin/feedback',
  ADMIN_USERS: '/admin/users',
  ADMIN_FEATURE_REQUESTS: '/admin/feature-requests',
  ADMIN_ANALYTICS: '/admin/analytics',
  ADMIN_ERROR_LOGS: '/admin/error-logs',
  ADMIN_CONTENT: '/admin/content',
  ADMIN_SETTINGS: '/admin/settings',
  DEADLINES: '/deadlines',
  MONITOR_DEADLINES: '/monitor/deadlines',
}

// API pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
}

// User roles
export const ROLES = {
  STUDENT: 'student',
  MONITOR: 'monitor',
  ADMIN: 'admin',
  SUPER_ADMIN: 'super_admin',
}

// Exam config
export const EXAM_CONFIG = {
  DEFAULT_TIME_LIMIT: 30,       // minutes
  PASSING_PERCENTAGE: 60,
  MAX_ATTEMPTS: 3,
}

// Feature request statuses
export const FEATURE_STATUS = {
  PENDING: 'pending',
  REVIEWED: 'reviewed',
  PLANNED: 'planned',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
  REJECTED: 'rejected',
}

// Realtime channels
export const REALTIME_CHANNELS = {
  SETTINGS: 'settings-updates',
  NOTIFICATIONS: 'user-notifications',
  DEADLINES: 'deadlines-realtime',
}
