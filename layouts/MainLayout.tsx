import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { ErrorState, LoadingState } from '@/components/ui/States';
import { useI18n } from '@/hooks/useI18n';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

export function MainLayout() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lift"
      >
        {t.common.skipToContent}
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1" tabIndex={-1}>
        <ErrorBoundary
          resetKey={pathname}
          fallback={(reset) => (
            <div className="container-page py-16">
              <ErrorState onRetry={reset} />
            </div>
          )}
        >
          <Suspense fallback={<LoadingState />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
