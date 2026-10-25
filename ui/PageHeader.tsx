import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const { t, dir } = useI18n();
  const Sep = dir === 'rtl' ? ChevronLeft : ChevronRight;
  const all: Crumb[] = [{ label: t.nav.home, to: '/' }, ...items];
  return (
    <nav aria-label="breadcrumb" className="no-print">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-400">
        {all.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <Sep className="h-3.5 w-3.5" aria-hidden="true" />}
            {c.to && i < all.length - 1 ? (
              <Link to={c.to} className="rounded hover:text-brand-700">
                {c.label}
              </Link>
            ) : (
              <span aria-current={i === all.length - 1 ? 'page' : undefined} className="text-ink-600">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  title,
  text,
  crumbs = [],
  actions,
  eyebrow,
}: {
  title: string;
  text?: string;
  crumbs?: Crumb[];
  actions?: ReactNode;
  eyebrow?: ReactNode;
}) {
  return (
    <div className="border-b border-ink-100 bg-white">
      <div className="container-page py-8 sm:py-10">
        <Breadcrumbs items={crumbs} />
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {eyebrow && <div className="mb-2">{eyebrow}</div>}
            <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
            {text && <p className="mt-3 text-base text-ink-500 sm:text-lg">{text}</p>}
          </div>
          {actions && <div className="no-print flex flex-wrap gap-2">{actions}</div>}
        </div>
      </div>
    </div>
  );
}
