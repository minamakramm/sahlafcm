import React, { memo, useMemo, lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { BottomNav } from './BottomNav';
import { BackgroundOrbs } from './BackgroundOrbs';
import { PageWrapper } from './PageWrapper';
import { useAuthStore } from '@/stores/authStore';

// Lazy-load non-critical layout components (below fold / conditional)
const Footer = lazy(() => import('./Footer').then(m => ({ default: m.Footer })));
const OfflineBanner = lazy(() => import('./OfflineBanner').then(m => ({ default: m.OfflineBanner })));
const FloatingFeedback = lazy(() => import('./FloatingFeedback').then(m => ({ default: m.FloatingFeedback })));
import { useAnalytics } from '@/hooks/useAnalytics';
import { SmartCoach } from '@/features/smart-coach/SmartCoach';

/**
 * AnalyticsTracker — Simple component that fires a page_view event on route changes.
 */
const AnalyticsTracker = () => {
  const location = useLocation();
  const { track, EVENTS } = useAnalytics();
  
  useEffect(() => {
    track(EVENTS.PAGE_VIEW, {
      title: document.title,
      search: location.search
    });
  }, [location.pathname, track, EVENTS.PAGE_VIEW]);
  
  return null;
};

const MainLayoutInner = () => {
  const location = useLocation();
  const isLoading = useAuthStore((s) => s.isLoading);
  const [loadingTimedOut, setLoadingTimedOut] = useState(false);
  
  // Safety net: never block the UI for more than 3 seconds
  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setLoadingTimedOut(true);
      // Force-unblock the auth store if it's still stuck
      useAuthStore.getState().setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  const isExamPage = location.pathname.includes('/exam');
  const isMaintenancePage = location.pathname === '/maintenance';
  const isAuthPage = useMemo(() =>
    ['/login', '/signup', '/forgot-password'].includes(location.pathname),
    [location.pathname]
  );
  
  // Show a minimal loading state while auth is resolving — max 3s
  if (isLoading && !loadingTimedOut) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-[9999]" style={{ background: 'var(--bg-base)' }}>
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-t-accent-500" style={{ borderColor: 'var(--border-default)', borderTopColor: '#8b5cf6' }} />
          <p className="text-sm font-medium tracking-wide" style={{ color: 'var(--text-tertiary)' }}>Initializing Sahla...</p>
        </div>
      </div>
    );
  }

  // Maintenance page gets full viewport — no navbar, no footer, no padding
  if (isMaintenancePage) {
    return (
      <div className="relative min-h-screen flex flex-col">
        <main className="relative z-10 flex-grow w-full">
          <PageWrapper key={location.pathname}>
            <Outlet />
          </PageWrapper>
        </main>
      </div>
    );
  }

  // pb-36 on mobile ensures content is never hidden behind the floating BottomNav (h-20 + bottom-6 + extra)
  const mainPadding = isExamPage 
    ? 'pt-4 pb-4' 
    : isAuthPage 
      ? 'pt-20 pb-28 md:pt-20 md:pb-12' 
      : 'pt-14 pb-36 md:pt-24 md:pb-12';

  return (
    <div className="relative min-h-screen flex flex-col">
      <AnalyticsTracker />
      <BackgroundOrbs />
      {!isExamPage && <Navbar />}

      <Suspense fallback={null}>
        <OfflineBanner />
      </Suspense>
      
      <main className={`relative z-10 flex-grow w-full ${mainPadding}`}>
        <PageWrapper key={location.pathname}>
          <Outlet />
        </PageWrapper>
      </main>
      
      {!isExamPage && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
      {!isExamPage && <BottomNav />}
      {!isExamPage && <SmartCoach />}
      {location.pathname === '/' && (
        <Suspense fallback={null}>
          <FloatingFeedback />
        </Suspense>
      )}
    </div>
  );
};

export const MainLayout = memo(MainLayoutInner);
