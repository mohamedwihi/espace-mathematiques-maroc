import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Loader2, SearchX } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export function LoadingState({ label }: { label?: string }) {
  const { t } = useI18n();
  return (
    <div role="status" aria-live="polite" className="flex min-h-[40vh] flex-col items-center justify-center gap-3 text-ink-500">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" aria-hidden="true" />
      <span className="text-sm font-medium">{label ?? t.common.loading}</span>
    </div>
  );
}

export function SkeletonCards({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card h-40 animate-pulse bg-ink-50" />
      ))}
    </div>
  );
}

export function EmptyState({
  title,
  text,
  action,
  icon,
}: {
  title: string;
  text?: string;
  action?: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <div className="card flex flex-col items-center gap-3 px-6 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-50 text-ink-400">
        {icon ?? <SearchX className="h-7 w-7" aria-hidden="true" />}
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      {text && <p className="max-w-md text-sm text-ink-500">{text}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}

export function ErrorState({ title, text, onRetry }: { title?: string; text?: string; onRetry?: () => void }) {
  const { t } = useI18n();
  return (
    <div role="alert" className="card flex flex-col items-center gap-3 border-red-100 px-6 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500">
        <AlertTriangle className="h-7 w-7" aria-hidden="true" />
      </div>
      <h2 className="text-lg font-semibold">{title ?? t.common.errorTitle}</h2>
      <p className="max-w-md text-sm text-ink-500">{text ?? t.common.errorText}</p>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {onRetry && (
          <button type="button" className="btn-primary" onClick={onRetry}>
            {t.common.retry}
          </button>
        )}
        <Link to="/" className="btn-secondary">
          {t.common.backHome}
        </Link>
      </div>
    </div>
  );
}

export function Notice({
  children,
  tone = 'info',
  className = '',
}: {
  children: ReactNode;
  tone?: 'info' | 'warning' | 'success';
  className?: string;
}) {
  const tones = {
    info: 'border-ink-100 bg-ink-50 text-ink-700',
    warning: 'border-saffron-200 bg-saffron-50 text-saffron-900',
    success: 'border-brand-200 bg-brand-50 text-brand-900',
  };
  return <div className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${tones[tone]} ${className}`}>{children}</div>;
}
