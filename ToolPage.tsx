import { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { getTool, tools } from '@/data/tools';
import { toolComponents } from '@/components/tools/registry';
import { toolIcons } from '@/components/tools/toolIcons';
import { MathText } from '@/components/math/MathText';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState, ErrorState, LoadingState } from '@/components/ui/States';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ToolPage() {
  const { toolId } = useParams();
  const { t, L } = useI18n();
  const meta = getTool(toolId);
  const item = meta ? t.tools.items[meta.id] : undefined;
  usePageMeta(item?.name ?? t.tools.notFound, item?.desc);

  if (!meta || !item) {
    return (
      <div className="container-page py-16">
        <EmptyState title={t.tools.notFound} action={<Link to="/tools" className="btn-primary">{t.tools.allTools}</Link>} />
      </div>
    );
  }

  const Tool = toolComponents[meta.id];
  const Icon = toolIcons[meta.id];
  const siblings = tools.filter((x) => x.category === meta.category && x.id !== meta.id);

  return (
    <>
      <PageHeader
        title={item.name}
        text={item.desc}
        crumbs={[{ label: t.nav.tools, to: '/tools' }, { label: item.name }]}
        eyebrow={
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700 text-white">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        }
      />
      <div className="container-page grid gap-8 py-8 lg:grid-cols-[1fr_300px]">
        <div className="card min-w-0 p-5 sm:p-6">
          <ErrorBoundary resetKey={meta.id} fallback={(reset) => <ErrorState onRetry={reset} />}>
            <Suspense fallback={<LoadingState />}>
              <Tool meta={meta} />
            </Suspense>
          </ErrorBoundary>
        </div>
        <aside className="space-y-4">
          <section className="card border-saffron-200 bg-saffron-50/50 p-4" aria-labelledby="limits">
            <h2 id="limits" className="mb-2 flex items-center gap-2 text-sm font-bold text-saffron-900">
              <ShieldAlert className="h-4 w-4" aria-hidden="true" />
              {t.tools.limitations}
            </h2>
            <MathText text={L(meta.limits)} block className="text-sm leading-relaxed text-ink-700" />
          </section>
          {siblings.length > 0 && (
            <nav className="card p-4" aria-label={t.tools.categories[meta.category]}>
              <p className="mb-2 text-sm font-bold text-ink-600">{t.tools.categories[meta.category]}</p>
              <ul className="space-y-1">
                {siblings.map((s) => (
                  <li key={s.id}>
                    <Link to={`/tools/${s.id}`} className="block rounded-lg px-2 py-1.5 text-sm text-ink-700 hover:bg-ink-50">
                      {t.tools.items[s.id].name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/tools" className="mt-2 block px-2 text-sm font-semibold text-brand-700 hover:underline">{t.tools.allTools}</Link>
            </nav>
          )}
        </aside>
      </div>
    </>
  );
}
