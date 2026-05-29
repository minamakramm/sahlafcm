import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'
import { useSettingsStore } from '@/stores/settingsStore'
import { ProtectedRoute } from '@/components/layout/ProtectedRoute'
import { AdminRoute } from '@/components/layout/AdminRoute'
import { MonitorRoute } from '@/components/layout/MonitorRoute'
import { MainLayout } from '@/components/layout/MainLayout'
import { ScrollManager } from '@/components/layout/ScrollManager'


// ─── Lazy Load Retry ──────────────────────────────────────────
const lazyRetry = (componentImport) => {
  return new Promise((resolve, reject) => {
    // Check if we have already tried to reload the page
    const hasRetried = window.sessionStorage.getItem('lazy-retry-done');
    
    componentImport()
      .then((component) => {
        window.sessionStorage.removeItem('lazy-retry-done');
        resolve(component);
      })
      .catch((error) => {
        if (!hasRetried) {
          window.sessionStorage.setItem('lazy-retry-done', 'true');
          window.location.reload();
        } else {
          reject(error);
        }
      });
  });
};

// ─── Lazy-loaded pages ──────────────────────────────────────────
// Public
const HomePage = lazy(() => lazyRetry(() => import('@/features/home/HomePage')))
const DepartmentPage = lazy(() => lazyRetry(() => import('@/features/subjects/DepartmentPage')))
const SubjectPage = lazy(() => lazyRetry(() => import('@/features/subjects/SubjectPage')))
const CheatsheetPage = lazy(() => lazyRetry(() => import('@/features/subjects/CheatsheetPage')))
const LecturePage = lazy(() => lazyRetry(() => import('@/features/lectures/LecturePage')))
const ExamPage = lazy(() => lazyRetry(() => import('@/features/exams/ExamPage'))) 
const LoginPage = lazy(() => lazyRetry(() => import('@/features/auth/LoginPage')))
const SignupPage = lazy(() => lazyRetry(() => import('@/features/auth/SignupPage')))
const ForgotPasswordPage = lazy(() => lazyRetry(() => import('@/features/auth/ForgotPasswordPage')))
const ResetPasswordPage = lazy(() => lazyRetry(() => import('@/features/auth/ResetPasswordPage')))
const MaintenancePage = lazy(() => lazyRetry(() => import('@/features/home/MaintenancePage')))
const AboutPage = lazy(() => lazyRetry(() => import('@/features/marketing/AboutPage')))
const PrivacyPage = lazy(() => lazyRetry(() => import('@/features/marketing/PrivacyPage')))
const TermsPage = lazy(() => lazyRetry(() => import('@/features/marketing/TermsPage')))
const CollaboratePage = lazy(() => lazyRetry(() => import('@/features/collaboration/CollaboratePage')))
const WhatsNewPage = lazy(() => lazyRetry(() => import('@/features/marketing/WhatsNewPage')))
const SmartSchedulerPage = lazy(() => lazyRetry(() => import('@/features/smart-scheduler/SmartSchedulerPage')))
const LeaderboardPage = lazy(() => lazyRetry(() => import('@/features/leaderboard/LeaderboardPage')))

// Protected
const BookmarksPage = lazy(() => lazyRetry(() => import('@/features/bookmarks/BookmarksPage')))
const ProgressPage = lazy(() => lazyRetry(() => import('@/features/progress/ProgressPage')))
const FeatureRequestsPage = lazy(() => lazyRetry(() => import('@/features/feature-requests/FeatureRequestsPage')))
const ProfilePage = lazy(() => lazyRetry(() => import('@/features/auth/ProfilePage')))
const NotificationsPage = lazy(() => lazyRetry(() => import('@/features/notifications/NotificationsPage')))
const DeadlinesPage = lazy(() => lazyRetry(() => import('@/features/deadlines/DeadlinesPage')))
const MonitorDeadlinesPage = lazy(() => lazyRetry(() => import('@/features/deadlines/MonitorDeadlinesPage')))

// Admin
const AdminLayout = lazy(() => lazyRetry(() => import('@/features/admin/AdminLayout')))
const AdminDashboard = lazy(() => lazyRetry(() => import('@/features/admin/AdminDashboardPage')))
const AdminFeedback = lazy(() => lazyRetry(() => import('@/features/admin/feedback/AdminFeedbackPage')))
const AdminUsers = lazy(() => lazyRetry(() => import('@/features/admin/users/AdminUsersPage')))
const AdminFeatureRequests = lazy(() => lazyRetry(() => import('@/features/admin/feature-requests/AdminFeatureRequestsPage')))
const AdminAnalytics = lazy(() => lazyRetry(() => import('@/features/admin/analytics/AdminAnalyticsPage')))
const AdminErrorLogs = lazy(() => lazyRetry(() => import('@/features/admin/errors/AdminErrorLogsPage')))
const AdminContent = lazy(() => lazyRetry(() => import('@/features/admin/content/AdminContentGuidePage')))
const AdminSettings = lazy(() => lazyRetry(() => import('@/features/admin/settings/AdminSettingsPage')))
const AdminNotifications = lazy(() => lazyRetry(() => import('@/features/admin/notifications/AdminNotificationsPage')))
const AdminUserDetails = lazy(() => lazyRetry(() => import('@/features/admin/users/details/AdminUserDetailsPage')))
const AdminMonitors = lazy(() => lazyRetry(() => import('@/features/admin/monitors/AdminMonitorsPage')))
const AdminCollaborators = lazy(() => lazyRetry(() => import('@/features/admin/collaborators/AdminCollaboratorsPage')))

// Error
const NotFoundPage = lazy(() => lazyRetry(() => import('@/features/home/NotFoundPage')))

// ─── Shared guards ─────────────────────────────────────────────

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-glass-400 border-t-accent-500" />
    </div>
  )
}

function GuestRoute({ children }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const isLoading = useAuthStore((s) => s.isLoading)

  if (isLoading) return <PageLoader />
  if (isAuthenticated) return <Navigate to="/" replace />
  return children
}

function MaintenanceGuard({ children }) {
  const maintenanceMode = useSettingsStore((s) => s.maintenanceMode)
  const isAdmin = useAuthStore((s) => s.isAdmin)

  if (maintenanceMode && !isAdmin()) {
    return <Navigate to="/maintenance" replace />
  }
  return children
}

// ─── Router ──────────────────────────────────────────────────

export function Router() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Layout for student-facing pages */}
          <Route element={<MainLayout />}>
            {/* Maintenance page — always accessible */}
            <Route path="/maintenance" element={<MaintenancePage />} />

            {/* Public routes */}
            <Route
              path="/"
              element={
                <MaintenanceGuard>
                  <HomePage />
                </MaintenanceGuard>
              }
            />
            <Route
              path="/departments/:departmentSlug"
              element={
                <MaintenanceGuard>
                  <DepartmentPage />
                </MaintenanceGuard>
              }
            />
            <Route
              path="/subjects/:subjectSlug"
              element={
                <MaintenanceGuard>
                  <SubjectPage />
                </MaintenanceGuard>
              }
            />
            <Route
              path="/subjects/:subjectSlug/lecture/:lectureNumber"
              element={
                <MaintenanceGuard>
                  <LecturePage />
                </MaintenanceGuard>
              }
            />
            <Route
              path="/subjects/:subjectSlug/cheatsheet"
              element={
                <MaintenanceGuard>
                  <CheatsheetPage />
                </MaintenanceGuard>
              }
            />
            <Route
              path="/subjects/:subjectSlug/exam"
              element={
                <ProtectedRoute>
                  <MaintenanceGuard>
                    <ExamPage />
                  </MaintenanceGuard>
                </ProtectedRoute>
              }
            />

            {/* Marketing/Legal routes */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/collaborate" element={<CollaboratePage />} />
            <Route path="/whats-new" element={<WhatsNewPage />} />
            <Route path="/scheduler" element={
              <ProtectedRoute>
                <MaintenanceGuard>
                  <SmartSchedulerPage />
                </MaintenanceGuard>
              </ProtectedRoute>
            } />
            <Route path="/leaderboard" element={
              <ProtectedRoute>
                <MaintenanceGuard>
                  <LeaderboardPage />
                </MaintenanceGuard>
              </ProtectedRoute>
            } />

            {/* Auth routes — guest only */}
            <Route
              path="/login"
              element={
                <GuestRoute>
                  <LoginPage />
                </GuestRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <GuestRoute>
                  <SignupPage />
                </GuestRoute>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <GuestRoute>
                  <ForgotPasswordPage />
                </GuestRoute>
              }
            />
            <Route
              path="/reset-password"
              element={
                <ResetPasswordPage />
              }
            />

            {/* Protected routes */}
            <Route
              path="/bookmarks"
              element={
                <ProtectedRoute>
                  <BookmarksPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/progress"
              element={
                <ProtectedRoute>
                  <ProgressPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/feature-requests"
              element={
                <ProtectedRoute>
                  <FeatureRequestsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <NotificationsPage />
                </ProtectedRoute>
              }
            />

            {/* Deadline routes */}
            <Route
              path="/deadlines"
              element={
                <ProtectedRoute>
                  <MaintenanceGuard>
                    <DeadlinesPage />
                  </MaintenanceGuard>
                </ProtectedRoute>
              }
            />
            <Route
              path="/monitor/deadlines"
              element={
                <MonitorRoute>
                  <MaintenanceGuard>
                    <MonitorDeadlinesPage />
                  </MaintenanceGuard>
                </MonitorRoute>
              }
            />

            {/* 404 catch-all inside MainLayout */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="feedback" element={<AdminFeedback />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="users/:userId" element={<AdminUserDetails />} />
            <Route path="feature-requests" element={<AdminFeatureRequests />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="collaborators" element={<AdminCollaborators />} />
            <Route path="monitors" element={<AdminMonitors />} />
            <Route path="error-logs" element={<AdminErrorLogs />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="notifications" element={<AdminNotifications />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
