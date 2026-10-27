import { Link, useParams, useSearchParams } from 'react-router-dom';
import { BookOpen, ClipboardList, FileDown, PenLine } from 'lucide-react';
import { getLevel } from '@/data/levels';
import { appliesToStream, examsForLevel, lessonPdfUrl, lessonsForLevel } from '@/services/content';
import { exercises } from '@/data/exercises';
import { Arrow } from '@/components/cards/Cards';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState, Notice } from '@/components/ui/States';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function LevelPage() {
  const { levelId } = useParams();
  const { t, L, fmt, lang } = useI18n();
  const level = getLevel(levelId);
  const [params, setParams] = useSearchParams();
  const streamParam = params.get('stream') ?? '';
  const stream = level?.streams.some((s) => s.id === streamParam) ? streamParam : '';

  usePageMeta(level ? `${level.code} — ${L(level.name)}` : t.levels.notFound, level ? L(level.description) : undefined);

  if (!level) {
    return (
      <div className="container-page py-16">
        <EmptyState
          title={t.levels.notFound}
          action={
            <Link to="/levels" className="btn-primary">
              {t.nav.levels}
            </Link>
          }
        />
      </div>
    );
  }

  const lessons = lessonsForLevel(level.id, stream);
  const units = level.units.filter((u) => appliesToStream(u.streams, stream));
  const exCount = exercises.filter((e) => e.levelId === level.id && lessons.some((l) => l.id === e.lessonId)).length;
  const examCount = examsForLevel(level.id, stream).length;

  return (
    <>
      <PageHeader
        title={`${L(level.name)}`}
        text={L(level.description)}
        crumbs={[{ label: t.nav.levels, to: '/levels' }, { label: level.code }]}
        eyebrow={<span className="chip bg-ink-900 px-3 py-1 text-sm text-white" dir="ltr">{level.code}</span>}
      />

      <div className="container-page space-y-8 py-10">
        {level.streams.length > 0 && (
          <section aria-labelledby="stream-title" className="card p-5">
            <h2 id="stream-title" className="mb-3 text-sm font-semibold text-ink-600">
              {t.levels.chooseStream}
            </h2>
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-labelledby="stream-title">
              {[{ id: '', short: '', name: { ar: t.levels.allStreams, fr: t.levels.allStreams } }, ...level.streams].map((s) => {
                const active = s.id === stream;
                return (
                  <button
                    key={s.id || 'all'}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setParams(s.id ? { stream: s.id } : {}, { replace: true })}
                    className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition ${
                      active ? 'border-brand-600 bg-brand-700 text-white' : 'border-ink-200 bg-white text-ink-700 hover:border-brand-300'
                    }`}
                  >
                    {L(s.name)}
                    {s.short && <span className={`ms-1.5 text-xs ${active ? 'text-brand-100' : 'text-ink-400'}`}>({s.short})</span>}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        <div className="grid gap-4 sm:grid-cols-3">
          <Link to={`/lessons?level=${level.id}`} className="card-hover flex items-center gap-3 p-4">
            <BookOpen className="h-5 w-5 text-brand-600" aria-hidden="true" />
            <span className="flex-1 font-semibold">{t.nav.lessons}</span>
            <span className="chip bg-ink-50 text-ink-600">{lessons.length}</span>
          </Link>
          <Link to={`/exercises?level=${level.id}`} className="card-hover flex items-center gap-3 p-4">
            <PenLine className="h-5 w-5 text-brand-600" aria-hidden="true" />
            <span className="flex-1 font-semibold">{t.levels.exercisesForLevel}</span>
            <span className="chip bg-ink-50 text-ink-600">{exCount}</span>
          </Link>
          <Link to={`/exams?level=${level.id}`} className="card-hover flex items-center gap-3 p-4">
            <ClipboardList className="h-5 w-5 text-brand-600" aria-hidden="true" />
            <span className="flex-1 font-semibold">{t.levels.examsForLevel}</span>
            <span className="chip bg-ink-50 text-ink-600">{examCount}</span>
          </Link>
        </div>

        <section aria-labelledby="units-title">
          <h2 id="units-title" className="section-title">{t.levels.units}</h2>
          <Notice tone="info" className="mt-3">{t.levels.programNotice}</Notice>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {([1, 2] as const).map((sem) => (
              <div key={sem}>
                <h3 className="mb-3 text-base font-semibold text-ink-600">{fmt(t.common.semesterN, { n: sem })}</h3>
                <ol className="space-y-2.5">
                  {units
                    .filter((u) => u.semester === sem)
                    .map((u, i) => {
                      const unitLessons = lessons.filter((l) => l.unitId === u.id);
                      return (
                        <li key={u.id} className="card p-4">
                          <div className="flex items-start gap-3">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-ink-50 text-xs font-bold text-ink-500">{i + 1}</span>
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold">{L(u.title)}</p>
                              {unitLessons.length === 0 ? (
                                <p className="mt-0.5 text-xs text-ink-400">{t.levels.noLessonsYet}</p>
                              ) : (
                                <ul className="mt-2 space-y-1">
                                  {unitLessons.map((l) => {
                                    const pdf = lessonPdfUrl(l, lang);
                                    return (
                                      <li key={l.id} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                        <Link to={`/lessons/${l.id}`} className="group inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-900">
                                          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                                          {L(l.title)}
                                          <Arrow className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                                        </Link>
                                        {pdf && (
                                          <a href={pdf} download className="inline-flex items-center gap-1 rounded-md bg-ink-50 px-2 py-0.5 text-xs font-semibold text-ink-600 hover:bg-ink-100 hover:text-ink-900" aria-label={`${t.lesson.downloadPdf} — ${L(l.title)}`}>
                                            <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
                                            PDF
                                          </a>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ol>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
