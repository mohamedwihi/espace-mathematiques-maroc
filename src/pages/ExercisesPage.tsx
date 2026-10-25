import { useEffect, useMemo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import { exercises } from '@/data/exercises';
import { lessons } from '@/data/lessons';
import { levels } from '@/data/levels';
import { ExerciseCard } from '@/components/exercises/ExerciseCard';
import { FilterSelect } from '@/components/ui/FilterSelect';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState } from '@/components/ui/States';
import { useI18n } from '@/hooks/useI18n';
import { useProgress } from '@/hooks/useProgress';
import { usePageMeta } from '@/hooks/usePageMeta';
import type { Topic } from '@/types';

const TOPICS: Topic[] = ['arithmetic', 'algebra', 'geometry', 'analysis', 'statistics'];

export default function ExercisesPage() {
  const { t, L, fmt } = useI18n();
  usePageMeta(t.exercises.metaTitle, t.exercises.text);
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const { quizzes } = useProgress();
  const level = params.get('level') ?? '';
  const lesson = params.get('lesson') ?? '';
  const difficulty = params.get('difficulty') ?? '';
  const type = params.get('type') ?? '';
  const topic = params.get('topic') ?? '';

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    if (key === 'level') next.delete('lesson');
    setParams(next, { replace: true });
  };

  const lessonOptions = lessons.filter((l) => !level || l.levelId === level);
  const filtered = useMemo(
    () =>
      exercises.filter(
        (e) =>
          (!level || e.levelId === level) &&
          (!lesson || e.lessonId === lesson) &&
          (!difficulty || String(e.difficulty) === difficulty) &&
          (!type || e.question.type === type) &&
          (!topic || e.topic === topic),
      ),
    [level, lesson, difficulty, type, topic],
  );

  // Défilement vers l'exercice ciblé (#id) après le rendu
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }, [location.hash]);

  const quizLessons = lessons.filter(
    (l) => (!level || l.levelId === level) && exercises.some((e) => e.lessonId === l.id && e.question.type !== 'open'),
  );

  return (
    <>
      <PageHeader title={t.exercises.title} text={t.exercises.text} crumbs={[{ label: t.nav.exercises }]} />
      <div className="container-page grid gap-8 py-8 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0">
          <div className="card grid gap-4 p-4 sm:grid-cols-2 xl:grid-cols-3">
            <FilterSelect
              label={t.common.level}
              value={level}
              onChange={(v) => update('level', v)}
              options={[{ value: '', label: t.lesson.filterAll }, ...levels.map((l) => ({ value: l.id, label: `${l.code} — ${L(l.name)}` }))]}
            />
            <FilterSelect
              label={t.common.lesson}
              value={lesson}
              onChange={(v) => update('lesson', v)}
              options={[{ value: '', label: t.exercises.allLessons }, ...lessonOptions.map((l) => ({ value: l.id, label: L(l.title) }))]}
            />
            <FilterSelect
              label={t.common.difficulty}
              value={difficulty}
              onChange={(v) => update('difficulty', v)}
              options={[{ value: '', label: t.common.all }, ...([1, 2, 3] as const).map((d) => ({ value: String(d), label: t.exercises.difficulty[d] }))]}
            />
            <FilterSelect
              label={t.common.type}
              value={type}
              onChange={(v) => update('type', v)}
              options={[{ value: '', label: t.common.all }, ...(['mcq', 'numeric', 'open'] as const).map((k) => ({ value: k, label: t.exercises.types[k] }))]}
            />
            <FilterSelect
              label={t.exercises.topic}
              value={topic}
              onChange={(v) => update('topic', v)}
              options={[{ value: '', label: t.common.all }, ...TOPICS.map((k) => ({ value: k, label: t.exercises.topics[k] }))]}
            />
            <div className="flex items-end">
              <button type="button" className="btn-ghost w-full" onClick={() => setParams({}, { replace: true })}>
                {t.common.reset}
              </button>
            </div>
          </div>

          <p className="mt-6 text-sm text-ink-500" aria-live="polite">{fmt(t.exercises.count, { n: filtered.length })}</p>
          {filtered.length === 0 ? (
            <div className="mt-4">
              <EmptyState title={t.common.noResults} text={t.common.noResultsHint} />
            </div>
          ) : (
            <div className="mt-4 space-y-5">
              {filtered.map((e) => (
                <ExerciseCard key={e.id} exercise={e} showLesson={!lesson} />
              ))}
            </div>
          )}
        </div>

        <aside>
          <div className="card sticky top-24 p-4">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-ink-700">
              <Trophy className="h-4 w-4 text-saffron-500" aria-hidden="true" />
              {t.exercises.quizzes}
            </h2>
            <ul className="space-y-1.5">
              {quizLessons.map((l) => {
                const rec = quizzes[l.id];
                return (
                  <li key={l.id}>
                    <Link to={`/exercises/quiz/${l.id}`} className="flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm hover:bg-ink-50">
                      <span className="text-ink-700">{L(l.title)}</span>
                      {rec && (
                        <span className="chip shrink-0 bg-brand-50 text-brand-700" dir="ltr">
                          {rec.best}/{rec.total}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
