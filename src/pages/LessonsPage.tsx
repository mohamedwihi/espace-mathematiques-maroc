import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { lessons } from '@/data/lessons';
import { levels, getLevel } from '@/data/levels';
import { appliesToStream, lessonSemester, normalize } from '@/services/content';
import { LessonCard } from '@/components/cards/Cards';
import { FilterSelect } from '@/components/ui/FilterSelect';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState, Notice } from '@/components/ui/States';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function LessonsPage() {
  const { t, L, fmt } = useI18n();
  usePageMeta(t.lesson.metaTitle, t.lesson.text);
  const [params, setParams] = useSearchParams();
  const level = params.get('level') ?? '';
  const stream = params.get('stream') ?? '';
  const semester = params.get('semester') ?? '';
  const q = params.get('q') ?? '';
  const levelObj = getLevel(level);

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    if (key === 'level') next.delete('stream');
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const nq = normalize(q);
    return lessons.filter(
      (l) =>
        (!level || l.levelId === level) &&
        appliesToStream(l.streams, stream) &&
        (!semester || String(lessonSemester(l)) === semester) &&
        (!nq || normalize(`${l.title.ar} ${l.title.fr} ${l.summary.ar} ${l.summary.fr} ${l.keywords.join(' ')}`).includes(nq)),
    );
  }, [level, stream, semester, q]);

  return (
    <>
      <PageHeader title={t.lesson.title} text={t.lesson.text} crumbs={[{ label: t.nav.lessons }]} />
      <div className="container-page py-8">
        <div className="card grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
          <FilterSelect
            label={t.common.level}
            value={level}
            onChange={(v) => update('level', v)}
            options={[{ value: '', label: t.lesson.filterAll }, ...levels.map((l) => ({ value: l.id, label: `${l.code} — ${L(l.name)}` }))]}
          />
          <FilterSelect
            label={t.common.stream}
            value={stream}
            onChange={(v) => update('stream', v)}
            options={[{ value: '', label: t.levels.allStreams }, ...(levelObj?.streams ?? []).map((s) => ({ value: s.id, label: L(s.name) }))]}
          />
          <FilterSelect
            label={t.common.semester}
            value={semester}
            onChange={(v) => update('semester', v)}
            options={[
              { value: '', label: t.common.all },
              { value: '1', label: fmt(t.common.semesterN, { n: 1 }) },
              { value: '2', label: fmt(t.common.semesterN, { n: 2 }) },
            ]}
          />
          <div>
            <label htmlFor="lesson-q" className="field-label">{t.common.search}</label>
            <input id="lesson-q" type="search" className="field" value={q} onChange={(e) => update('q', e.target.value)} placeholder="…" maxLength={80} />
          </div>
        </div>

        <Notice tone="warning" className="mt-4">{t.common.notReviewedLong}</Notice>

        <p className="mt-6 text-sm text-ink-500" aria-live="polite">{fmt(t.lesson.available, { n: filtered.length })}</p>
        {filtered.length === 0 ? (
          <div className="mt-4">
            <EmptyState
              title={t.common.noResults}
              text={t.common.noResultsHint}
              action={<button type="button" className="btn-secondary" onClick={() => setParams({}, { replace: true })}>{t.common.reset}</button>}
            />
          </div>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((l) => (
              <LessonCard key={l.id} lesson={l} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
