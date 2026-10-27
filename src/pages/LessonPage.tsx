import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, Clock, FileDown, Heart, NotebookPen, Printer, Target } from 'lucide-react';
import { getLevel } from '@/data/levels';
import { exercisesForLesson, getLesson, lessonPdfUrl, lessonSemester, unitTitle } from '@/services/content';
import { LessonBlockView } from '@/components/lesson/LessonBlocks';
import { ReviewBadge, DifficultyBadge, Arrow } from '@/components/cards/Cards';
import { MathText } from '@/components/math/MathText';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState, Notice } from '@/components/ui/States';
import { useI18n } from '@/hooks/useI18n';
import { useProgress } from '@/hooks/useProgress';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function LessonPage() {
  const { lessonId } = useParams();
  const { t, L, fmt, lang } = useI18n();
  const { isFavorite, toggleFavorite } = useProgress();
  const lesson = getLesson(lessonId);
  usePageMeta(lesson ? L(lesson.title) : t.lesson.notFound, lesson ? L(lesson.summary).replace(/\$[^$]*\$/g, '') : undefined);

  if (!lesson) {
    return (
      <div className="container-page py-16">
        <EmptyState
          title={t.lesson.notFound}
          text={t.lesson.notFoundText}
          action={<Link to="/lessons" className="btn-primary">{t.nav.lessons}</Link>}
        />
      </div>
    );
  }

  const level = getLevel(lesson.levelId)!;
  const unit = unitTitle(lesson);
  const semester = lessonSemester(lesson);
  const related = exercisesForLesson(lesson.id);
  const fav = isFavorite(lesson.id);
  const streams = lesson.streams?.map((s) => level.streams.find((x) => x.id === s)?.short).filter(Boolean);
  const hasQuiz = related.some((e) => e.question.type !== 'open');
  const pdf = lessonPdfUrl(lesson, lang);

  return (
    <article>
      <PageHeader
        title={L(lesson.title)}
        crumbs={[
          { label: t.nav.levels, to: '/levels' },
          { label: level.code, to: `/levels/${level.id}` },
          { label: L(lesson.title) },
        ]}
        eyebrow={
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip bg-ink-900 text-white" dir="ltr">{level.code}</span>
            {unit && <span className="chip bg-brand-50 text-brand-800">{L(unit)}</span>}
            {semester && <span className="chip bg-ink-50 text-ink-600">{fmt(t.common.semesterN, { n: semester })}</span>}
            {streams && streams.length > 0 && <span className="chip bg-ink-50 text-ink-600" dir="ltr">{streams.join(' · ')}</span>}
            <span className="chip bg-ink-50 text-ink-600">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {fmt(t.lesson.duration, { n: lesson.durationMinutes })}
            </span>
            <ReviewBadge reviewed={lesson.reviewed} />
          </div>
        }
        actions={
          <>
            {pdf && (
              <a href={pdf} download className="btn-primary">
                <FileDown className="h-4 w-4" aria-hidden="true" />
                {t.lesson.downloadPdf}
              </a>
            )}
            <button type="button" className={fav ? 'btn-secondary border-red-200 text-red-600' : 'btn-secondary'} onClick={() => toggleFavorite(lesson.id)} aria-pressed={fav}>
              <Heart className={`h-4 w-4 ${fav ? 'fill-red-500 text-red-500' : ''}`} aria-hidden="true" />
              {fav ? t.lesson.removeFav : t.lesson.addFav}
            </button>
            <button type="button" className="btn-secondary" onClick={() => window.print()}>
              <Printer className="h-4 w-4" aria-hidden="true" />
              {t.lesson.print}
            </button>
          </>
        }
      />

      <div className="container-page grid gap-8 py-8 lg:grid-cols-[1fr_280px]">
        <div className="min-w-0 space-y-8">
          <MathText text={L(lesson.summary)} block className="text-lg text-ink-600" />
          {lesson.source && (
            <Notice tone="info">
              <strong>{t.exams.source} : </strong>
              {L(lesson.source)}
            </Notice>
          )}
          {!lesson.reviewed && <Notice tone="warning">{t.common.notReviewedLong}</Notice>}

          <section className="card p-5 sm:p-6" aria-labelledby="objectives">
            <h2 id="objectives" className="mb-4 flex items-center gap-2 text-lg font-bold">
              <Target className="h-5 w-5 text-brand-600" aria-hidden="true" />
              {t.lesson.objectives}
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {lesson.objectives.map((o, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  <MathText text={L(o)} />
                </li>
              ))}
            </ul>
          </section>

          {lesson.sections.map((section, i) => (
            <section key={section.id} id={section.id} className="scroll-mt-24" aria-labelledby={`h-${section.id}`}>
              <h2 id={`h-${section.id}`} className="mb-4 flex items-baseline gap-3 text-2xl font-bold">
                <span className="font-display text-brand-600" dir="ltr">{i + 1}.</span>
                {L(section.title)}
              </h2>
              <div className="space-y-4">
                {section.blocks.map((block, j) => (
                  <LessonBlockView key={j} block={block} />
                ))}
              </div>
            </section>
          ))}

          <section id="recap" className="card scroll-mt-24 border-brand-200 bg-brand-50/50 p-5 sm:p-6" aria-labelledby="h-recap">
            <h2 id="h-recap" className="mb-4 flex items-center gap-2 text-xl font-bold">
              <NotebookPen className="h-5 w-5 text-brand-700" aria-hidden="true" />
              {t.lesson.recap}
            </h2>
            <ul className="space-y-2.5">
              {lesson.recap.map((r, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                  <MathText text={L(r)} className="leading-8" />
                </li>
              ))}
            </ul>
          </section>

          <section id="exercises" className="no-print scroll-mt-24" aria-labelledby="h-related">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h2 id="h-related" className="text-xl font-bold">{t.lesson.related}</h2>
              {hasQuiz && (
                <Link to={`/exercises/quiz/${lesson.id}`} className="btn-accent btn-sm">
                  {t.lesson.startQuiz}
                </Link>
              )}
            </div>
            {related.length === 0 ? (
              <p className="text-sm text-ink-500">{t.lesson.noRelated}</p>
            ) : (
              <ul className="grid gap-3 sm:grid-cols-2">
                {related.map((e) => (
                  <li key={e.id}>
                    <Link to={`/exercises?lesson=${lesson.id}#${e.id}`} className="card-hover flex items-center justify-between gap-3 p-4">
                      <span>
                        <span className="block font-semibold">{L(e.title)}</span>
                        <span className="mt-1 flex gap-2">
                          <DifficultyBadge level={e.difficulty} />
                          <span className="chip bg-ink-50 text-ink-600">{t.exercises.types[e.question.type]}</span>
                        </span>
                      </span>
                      <Arrow />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <aside className="no-print">
          <nav aria-label={t.lesson.contents} className="card sticky top-24 p-4">
            <p className="mb-3 text-sm font-bold text-ink-600">{t.lesson.contents}</p>
            <ol className="space-y-1 text-sm">
              {lesson.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex gap-2 rounded-lg px-2 py-1.5 text-ink-600 hover:bg-ink-50 hover:text-ink-900">
                    <span className="text-ink-300" dir="ltr">{i + 1}.</span>
                    {L(s.title)}
                  </a>
                </li>
              ))}
              <li>
                <a href="#recap" className="block rounded-lg px-2 py-1.5 text-ink-600 hover:bg-ink-50">{t.lesson.recap}</a>
              </li>
              <li>
                <a href="#exercises" className="block rounded-lg px-2 py-1.5 text-ink-600 hover:bg-ink-50">{t.lesson.related}</a>
              </li>
            </ol>
          </nav>
        </aside>
      </div>
    </article>
  );
}
