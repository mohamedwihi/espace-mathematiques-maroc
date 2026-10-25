import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FolderOpen, Info } from 'lucide-react';
import { exams } from '@/data/exams';
import { levels, getLevel } from '@/data/levels';
import { appliesToStream, normalize } from '@/services/content';
import { ExamCard } from '@/components/cards/Cards';
import { FilterSelect } from '@/components/ui/FilterSelect';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState, Notice } from '@/components/ui/States';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';
import type { ExamKind } from '@/types';

const KINDS: ExamKind[] = ['continuous', 'local', 'regional', 'national', 'practice'];

export default function ExamsPage() {
  const { t, L, fmt } = useI18n();
  usePageMeta(t.exams.metaTitle, t.exams.text);
  const [params, setParams] = useSearchParams();
  const get = (k: string) => params.get(k) ?? '';
  const [level, stream, kind, year, session, q] = ['level', 'stream', 'kind', 'year', 'session', 'q'].map(get);
  const levelObj = getLevel(level);
  const years = [...new Set(exams.map((e) => e.year))].sort((a, b) => b - a);

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    if (key === 'level') next.delete('stream');
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const nq = normalize(q);
    return exams
      .filter(
        (e) =>
          (!level || e.levelId === level) &&
          appliesToStream(e.streams, stream) &&
          (!kind || e.kind === kind) &&
          (!year || String(e.year) === year) &&
          (!session || e.session === session) &&
          (!nq || normalize(`${e.title.ar} ${e.title.fr}`).includes(nq)),
      )
      .sort((a, b) => b.year - a.year);
  }, [level, stream, kind, year, session, q]);

  const officialCount = exams.filter((e) => e.official).length;

  return (
    <>
      <PageHeader title={t.exams.title} text={t.exams.text} crumbs={[{ label: t.nav.exams }]} />
      <div className="container-page py-8">
        <div className="card grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <FilterSelect label={t.common.level} value={level} onChange={(v) => update('level', v)} options={[{ value: '', label: t.lesson.filterAll }, ...levels.map((l) => ({ value: l.id, label: `${l.code} — ${L(l.name)}` }))]} />
          <FilterSelect label={t.common.stream} value={stream} onChange={(v) => update('stream', v)} options={[{ value: '', label: t.levels.allStreams }, ...(levelObj?.streams ?? []).map((s) => ({ value: s.id, label: L(s.name) }))]} />
          <FilterSelect label={t.exams.kind} value={kind} onChange={(v) => update('kind', v)} options={[{ value: '', label: t.common.all }, ...KINDS.map((k) => ({ value: k, label: t.exams.kinds[k] }))]} />
          <FilterSelect label={t.exams.year} value={year} onChange={(v) => update('year', v)} options={[{ value: '', label: t.exams.allYears }, ...years.map((y) => ({ value: String(y), label: String(y) }))]} />
          <FilterSelect label={t.exams.session} value={session} onChange={(v) => update('session', v)} options={[{ value: '', label: t.common.all }, { value: 'normal', label: t.exams.sessions.normal }, { value: 'catchup', label: t.exams.sessions.catchup }]} />
          <div>
            <label htmlFor="exam-q" className="field-label">{t.common.search}</label>
            <input id="exam-q" type="search" className="field" value={q} onChange={(e) => update('q', e.target.value)} maxLength={80} />
          </div>
        </div>

        {officialCount === 0 && (
          <Notice tone="warning" className="mt-4 flex gap-2">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{t.exams.emptyLibrary}</span>
          </Notice>
        )}

        <p className="mt-6 text-sm text-ink-500" aria-live="polite">{fmt(t.search.resultsCount, { n: filtered.length })}</p>
        {filtered.length === 0 ? (
          <div className="mt-4">
            <EmptyState
              icon={<FolderOpen className="h-7 w-7" aria-hidden="true" />}
              title={t.common.noResults}
              text={kind && kind !== 'practice' ? t.exams.emptyLibrary : t.common.noResultsHint}
              action={<button type="button" className="btn-secondary" onClick={() => setParams({}, { replace: true })}>{t.common.reset}</button>}
            />
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((e) => (
              <ExamCard key={e.id} exam={e} />
            ))}
          </div>
        )}

        <section className="card mt-10 p-5" aria-labelledby="how-add">
          <h2 id="how-add" className="text-base font-bold">{t.exams.howToAddTitle}</h2>
          <p className="mt-2 text-sm text-ink-600">{t.exams.howToAdd}</p>
        </section>
      </div>
    </>
  );
}
