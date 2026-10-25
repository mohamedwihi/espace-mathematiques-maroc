import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, ClipboardList, PenLine, Wrench } from 'lucide-react';
import { levels } from '@/data/levels';
import { search, type SearchType } from '@/services/content';
import { Arrow } from '@/components/cards/Cards';
import { MathText } from '@/components/math/MathText';
import { FilterSelect } from '@/components/ui/FilterSelect';
import { PageHeader } from '@/components/ui/PageHeader';
import { SearchBar } from '@/components/ui/SearchBar';
import { EmptyState } from '@/components/ui/States';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';
import type { LevelId } from '@/types';

const icons = { lesson: BookOpen, exercise: PenLine, exam: ClipboardList, tool: Wrench };

export default function SearchPage() {
  const { t, L, fmt } = useI18n();
  usePageMeta(t.search.metaTitle);
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const type = (params.get('type') ?? '') as SearchType | '';
  const level = (params.get('level') ?? '') as LevelId | '';

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const results = useMemo(() => search(q, { type, levelId: level }), [q, type, level]);
  const typeLabel: Record<SearchType, string> = {
    lesson: t.search.typeLesson,
    exercise: t.search.typeExercise,
    exam: t.search.typeExam,
    tool: t.search.typeTool,
  };
  const tooShort = q.trim().length > 0 && q.trim().length < 2;

  return (
    <>
      <PageHeader title={t.search.title} crumbs={[{ label: t.nav.search }]} />
      <div className="container-page max-w-4xl py-8">
        <SearchBar initial={q} size="lg" onSearch={(v) => update('q', v)} autoFocus={!q} />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <FilterSelect
            label={t.common.type}
            value={type}
            onChange={(v) => update('type', v)}
            options={[{ value: '', label: t.common.all }, ...(Object.keys(typeLabel) as SearchType[]).map((k) => ({ value: k, label: typeLabel[k] }))]}
          />
          <FilterSelect
            label={t.common.level}
            value={level}
            onChange={(v) => update('level', v)}
            options={[{ value: '', label: t.lesson.filterAll }, ...levels.map((l) => ({ value: l.id, label: `${l.code} — ${L(l.name)}` }))]}
          />
        </div>

        <div className="mt-8" aria-live="polite">
          {!q.trim() ? (
            <p className="text-ink-500">{t.search.prompt}</p>
          ) : tooShort ? (
            <p className="text-ink-500">{t.search.minChars}</p>
          ) : results.length === 0 ? (
            <EmptyState title={t.common.noResults} text={t.common.noResultsHint} />
          ) : (
            <>
              <h2 className="mb-4 text-sm font-semibold text-ink-500">
                {fmt(t.search.resultsFor, { q })} — {fmt(t.search.resultsCount, { n: results.length })}
              </h2>
              <ul className="space-y-3">
                {results.map((r) => {
                  const Icon = icons[r.type];
                  return (
                    <li key={`${r.type}-${r.id}`}>
                      <Link to={r.to} className="card-hover flex items-start gap-4 p-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-50 text-ink-600">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="chip bg-brand-50 text-brand-700">{typeLabel[r.type]}</span>
                          <span className="mt-1 block font-semibold">{L(r.title)}</span>
                          <MathText text={L(r.subtitle)} className="mt-0.5 line-clamp-2 block text-sm text-ink-500" />
                        </span>
                        <Arrow className="mt-3 h-4 w-4 shrink-0 text-ink-300" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}
