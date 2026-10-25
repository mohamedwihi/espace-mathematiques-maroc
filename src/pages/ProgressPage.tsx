import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, Trophy } from 'lucide-react';
import { exercises } from '@/data/exercises';
import { levels } from '@/data/levels';
import { getLesson } from '@/services/content';
import { isStorageAvailable } from '@/services/storage';
import { LessonCard } from '@/components/cards/Cards';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState, Notice } from '@/components/ui/States';
import { useI18n } from '@/hooks/useI18n';
import { useProgress } from '@/hooks/useProgress';
import { usePageMeta } from '@/hooks/usePageMeta';
import type { Lesson } from '@/types';

export default function ProgressPage() {
  const { t, L, fmt, lang } = useI18n();
  usePageMeta(t.progress.metaTitle, t.progress.text);
  const progress = useProgress();
  const [confirming, setConfirming] = useState(false);
  const [cleared, setCleared] = useState(false);
  const storageOk = isStorageAvailable();

  // Seuls les identifiants qui existent encore dans le contenu sont comptés.
  const records = Object.entries(progress.exercises).filter(([id]) => exercises.some((e) => e.id === id));
  const done = records.length;
  const good = records.filter(([, r]) => r.status === 'correct' || r.status === 'self-correct').length;
  const rate = done ? Math.round((good / done) * 100) : null;
  const quizzes = Object.entries(progress.quizzes).filter(([id]) => getLesson(id));
  const favorites = progress.favorites.map((id) => getLesson(id)).filter((l): l is Lesson => !!l);
  const recent = [...records].sort((a, b) => b[1].lastAt - a[1].lastAt).slice(0, 8);
  const dateFmt = new Intl.DateTimeFormat(lang === 'ar' ? 'ar-MA-u-nu-latn' : 'fr-MA', { dateStyle: 'medium', timeStyle: 'short' });

  const stats = [
    { label: t.progress.exercisesDone, value: fmt(t.progress.ofTotal, { a: done, n: exercises.length }) },
    { label: t.progress.correctRate, value: rate === null ? t.progress.noData : `${rate}%` },
    { label: t.progress.quizzesTaken, value: String(quizzes.length) },
    { label: t.progress.favorites, value: String(favorites.length) },
  ];

  return (
    <>
      <PageHeader title={t.progress.title} text={t.progress.text} crumbs={[{ label: t.nav.progress }]} />
      <div className="container-page space-y-10 py-8">
        {!storageOk && <Notice tone="warning">{t.progress.storageUnavailable}</Notice>}
        {cleared && (
          <Notice tone="success">
            {t.progress.cleared} {t.progress.keepLang}
          </Notice>
        )}

        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card p-4">
              <dt className="text-xs text-ink-500">{s.label}</dt>
              <dd className="mt-1 font-display text-2xl font-bold" dir="ltr">{s.value}</dd>
            </div>
          ))}
        </dl>

        <section aria-labelledby="by-level">
          <h2 id="by-level" className="mb-4 text-xl font-bold">{t.progress.byLevel}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((lv) => {
              const total = exercises.filter((e) => e.levelId === lv.id).length;
              const solved = records.filter(([id]) => exercises.find((e) => e.id === id)?.levelId === lv.id).length;
              const pct = total ? Math.round((solved / total) * 100) : 0;
              return (
                <div key={lv.id} className="card p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{lv.code} — {L(lv.name)}</span>
                    <span className="text-ink-500" dir="ltr">{solved}/{total}</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink-100" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={lv.code}>
                    <div className="h-full rounded-full bg-brand-600 transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section aria-labelledby="recent">
          <h2 id="recent" className="mb-4 text-xl font-bold">{t.progress.recent}</h2>
          {recent.length === 0 ? (
            <EmptyState title={t.progress.noActivity} action={<Link to="/exercises" className="btn-primary">{t.nav.exercises}</Link>} />
          ) : (
            <ul className="card divide-y divide-ink-50">
              {recent.map(([id, r]) => {
                const ex = exercises.find((e) => e.id === id)!;
                const ok = r.status === 'correct' || r.status === 'self-correct';
                return (
                  <li key={id}>
                    <Link to={`/exercises?lesson=${ex.lessonId}#${ex.id}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-ink-50">
                      <span className="min-w-0">
                        <span className="block truncate font-medium">{L(ex.title)}</span>
                        <span className="text-xs text-ink-400">{dateFmt.format(r.lastAt)} · {fmt(t.exercises.attempts, { n: r.attempts })}</span>
                      </span>
                      <span className={`chip shrink-0 ${ok ? 'bg-brand-50 text-brand-700' : 'bg-red-50 text-red-700'}`}>{ok ? t.exercises.statusCorrect : t.exercises.statusIncorrect}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {quizzes.length > 0 && (
          <section aria-labelledby="quizzes">
            <h2 id="quizzes" className="mb-4 flex items-center gap-2 text-xl font-bold">
              <Trophy className="h-5 w-5 text-saffron-500" aria-hidden="true" />
              {t.exercises.quizzes}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {quizzes.map(([id, q]) => (
                <li key={id}>
                  <Link to={`/exercises/quiz/${id}`} className="card-hover flex items-center justify-between gap-3 p-4">
                    <span className="font-medium">{L(getLesson(id)!.title)}</span>
                    <span className="chip bg-brand-50 text-brand-700" dir="ltr">{t.progress.quizBest}: {q.best}/{q.total}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="favs">
          <h2 id="favs" className="mb-4 flex items-center gap-2 text-xl font-bold">
            <Heart className="h-5 w-5 text-red-500" aria-hidden="true" />
            {t.progress.favorites}
          </h2>
          {favorites.length === 0 ? (
            <EmptyState title={t.progress.noFavorites} action={<Link to="/lessons" className="btn-secondary">{t.nav.lessons}</Link>} />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {favorites.map((l) => (
                <LessonCard key={l.id} lesson={l} />
              ))}
            </div>
          )}
        </section>

        <section aria-labelledby="clear" className="card border-red-100 p-5">
          <h2 id="clear" className="flex items-center gap-2 text-lg font-bold text-red-800">
            <Trash2 className="h-5 w-5" aria-hidden="true" />
            {t.progress.clearTitle}
          </h2>
          <p className="mt-2 text-sm text-ink-600">{t.progress.clearText}</p>
          {!confirming ? (
            <button type="button" className="btn mt-4 border border-red-200 bg-white text-red-700 hover:bg-red-50" onClick={() => { setConfirming(true); setCleared(false); }}>
              {t.progress.clearButton}
            </button>
          ) : (
            <div className="mt-4 flex flex-wrap gap-2" role="alertdialog" aria-labelledby="clear">
              <button
                type="button"
                className="btn bg-red-600 text-white hover:bg-red-700"
                onClick={() => {
                  progress.clear();
                  setConfirming(false);
                  setCleared(true);
                }}
              >
                {t.progress.clearConfirm}
              </button>
              <button type="button" className="btn-secondary" onClick={() => setConfirming(false)}>
                {t.common.cancel}
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
