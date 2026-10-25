import { CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function AboutPage() {
  const { t } = useI18n();
  usePageMeta(t.about.metaTitle, t.about.p1);
  return (
    <>
      <PageHeader title={t.about.title} crumbs={[{ label: t.nav.about }]} />
      <div className="container-page max-w-3xl space-y-8 py-10 text-ink-700">
        <p className="text-lg leading-relaxed">{t.about.p1}</p>
        <p className="leading-relaxed">{t.about.p2}</p>
        <section className="card p-6">
          <h2 className="mb-4 text-xl font-bold">{t.about.contentTitle}</h2>
          <ul className="space-y-3">
            {[t.about.c1, t.about.c2, t.about.c3].map((c) => (
              <li key={c} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </section>
        <section className="card p-6">
          <h2 className="mb-2 text-xl font-bold">{t.about.teachersTitle}</h2>
          <p className="leading-relaxed">{t.about.teachersText}</p>
        </section>
      </div>
    </>
  );
}
