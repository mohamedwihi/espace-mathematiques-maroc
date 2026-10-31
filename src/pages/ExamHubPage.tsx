import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, Info } from 'lucide-react';
import { exams } from '@/data/exams';
import { ExamCard } from '@/components/cards/Cards';
import { FilterSelect } from '@/components/ui/FilterSelect';
import { PageHeader } from '@/components/ui/PageHeader';
import { Notice } from '@/components/ui/States';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';
import type { Exam } from '@/types';

/** Officiels d'abord, puis les plus récents. */
const byOfficialThenYear = (a: Exam, b: Exam) => Number(b.official) - Number(a.official) || b.year - a.year;

function ExamGrid({ list }: { list: Exam[] }) {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((e) => (
        <ExamCard key={e.id} exam={e} />
      ))}
    </div>
  );
}

/** Rubrique « Examens régionaux et locaux » de la 3e année du collège. */
export function Exams3acPage() {
  const { t } = useI18n();
  usePageMeta(t.hub.title3ac, t.hub.text3ac);
  const regional = exams.filter((e) => e.levelId === '3ac' && e.kind === 'regional').sort(byOfficialThenYear);
  const local = exams.filter((e) => e.levelId === '3ac' && e.kind === 'local').sort(byOfficialThenYear);
  return (
    <>
      <PageHeader title={t.hub.title3ac} text={t.hub.text3ac} crumbs={[{ label: t.nav.exams, to: '/exams' }, { label: t.nav.exams3ac }]} />
      <div className="container-page space-y-10 py-8">
        <p className="text-sm text-ink-500">{t.hub.officialFirst}</p>
        <section aria-labelledby="regional-title">
          <h2 id="regional-title" className="text-xl font-bold">{t.hub.regional}</h2>
          <ExamGrid list={regional} />
        </section>
        <section aria-labelledby="local-title">
          <h2 id="local-title" className="text-xl font-bold">{t.hub.local}</h2>
          <ExamGrid list={local} />
        </section>
      </div>
    </>
  );
}

/** Rubrique « Examens nationaux du baccalauréat », classés par année et session. */
export function ExamsBacPage() {
  const { t, L, fmt } = useI18n();
  usePageMeta(t.hub.titleBac, t.hub.textBac);
  const [period, setPeriod] = useState('');
  const bac = useMemo(() => exams.filter((e) => e.levelId === '2bac' && e.kind === 'national' && e.pdfUrl), []);
  const years = useMemo(() => {
    const map = new Map<number, Exam[]>();
    for (const e of bac) map.set(e.year, [...(map.get(e.year) ?? []), e]);
    return [...map.entries()]
      .filter(([y]) => !period || (period === 'old' ? y < 2000 : y >= 2000))
      .sort((a, b) => b[0] - a[0])
      .map(([y, list]) => [y, list.sort((a, b) => (a.session === b.session ? a.id.localeCompare(b.id) : a.session === 'normal' ? -1 : 1))] as const);
  }, [bac, period]);

  return (
    <>
      <PageHeader title={t.hub.titleBac} text={t.hub.textBac} crumbs={[{ label: t.nav.exams, to: '/exams' }, { label: t.nav.examsBac }]} />
      <div className="container-page py-8">
        <Notice tone="warning" className="flex gap-2">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{t.hub.bacNote}</span>
        </Notice>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <p className="text-sm text-ink-500">
            {fmt(t.hub.subjects, { n: bac.length })} · {fmt(t.hub.years, { n: new Set(bac.map((e) => e.year)).size })}
          </p>
          <div className="w-full sm:w-64">
            <FilterSelect
              label={t.hub.filterDecade}
              value={period}
              onChange={setPeriod}
              options={[
                { value: '', label: t.hub.allPeriods },
                { value: 'recent', label: t.hub.recent },
                { value: 'old', label: t.hub.oldBac },
              ]}
            />
          </div>
        </div>
        <ol className="mt-6 space-y-3">
          {years.map(([year, list]) => (
            <li key={year} className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
              <span className="w-16 shrink-0 text-2xl font-extrabold text-brand-700" dir="ltr">
                {year}
              </span>
              <div className="flex flex-1 flex-col gap-2">
                {list.map((e) => (
                  <div key={e.id} className="flex flex-wrap items-center gap-2">
                    <Link to={`/exams/${e.id}`} className="me-auto text-sm font-semibold hover:text-brand-700">
                      {L(e.title)}
                    </Link>
                    <a href={e.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary btn-sm">
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      {t.hub.open}
                    </a>
                    <a href={e.pdfUrl} download className="btn-primary btn-sm">
                      <Download className="h-4 w-4" aria-hidden="true" />
                      {t.hub.download}
                    </a>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
