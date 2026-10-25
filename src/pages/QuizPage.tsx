import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2, RotateCcw, Trophy, XCircle } from 'lucide-react';
import { exercisesForLesson, getLesson } from '@/services/content';
import { MathText } from '@/components/math/MathText';
import { SolutionSteps } from '@/components/exercises/ExerciseCard';
import { PageHeader } from '@/components/ui/PageHeader';
import { EmptyState, Notice } from '@/components/ui/States';
import { useI18n } from '@/hooks/useI18n';
import { useProgress } from '@/hooks/useProgress';
import { usePageMeta } from '@/hooks/usePageMeta';
import { formatAnswer, isNumericCorrect, parseNumericAnswer } from '@/utils/answers';
import type { Exercise } from '@/types';

type Answer = { mcq?: number; text?: string };

function isCorrect(e: Exercise, a: Answer | undefined): boolean {
  if (!a) return false;
  if (e.question.type === 'mcq') return a.mcq === e.question.correct;
  if (e.question.type === 'numeric') {
    const v = parseNumericAnswer(a.text ?? '');
    return v !== null && isNumericCorrect(e.question, v);
  }
  return false;
}

export default function QuizPage() {
  const { lessonId } = useParams();
  const { t, L, fmt } = useI18n();
  const { quizzes, recordQuiz, recordExercise } = useProgress();
  const lesson = getLesson(lessonId);
  const questions = useMemo(() => (lesson ? exercisesForLesson(lesson.id).filter((e) => e.question.type !== 'open') : []), [lesson]);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [finished, setFinished] = useState(false);
  usePageMeta(lesson ? fmt(t.exercises.quizTitle, { t: L(lesson.title) }) : t.lesson.notFound);

  if (!lesson) {
    return (
      <div className="container-page py-16">
        <EmptyState title={t.lesson.notFound} action={<Link to="/exercises" className="btn-primary">{t.nav.exercises}</Link>} />
      </div>
    );
  }

  const answeredCount = questions.filter((q) => {
    const a = answers[q.id];
    return a && (a.mcq !== undefined || (a.text ?? '').trim() !== '');
  }).length;
  const score = questions.filter((q) => isCorrect(q, answers[q.id])).length;
  const record = quizzes[lesson.id];

  const finish = () => {
    setFinished(true);
    recordQuiz(lesson.id, score, questions.length);
    questions.forEach((q) => {
      if (answers[q.id]) recordExercise(q.id, isCorrect(q, answers[q.id]) ? 'correct' : 'incorrect');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setAnswers({});
    setFinished(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const answerText = (q: Exercise, a: Answer | undefined) => {
    if (!a) return t.exercises.noAnswer;
    if (q.question.type === 'mcq') return a.mcq !== undefined ? L(q.question.options[a.mcq]) : t.exercises.noAnswer;
    return a.text?.trim() || t.exercises.noAnswer;
  };
  const expected = (q: Exercise) =>
    q.question.type === 'mcq' ? L(q.question.options[q.question.correct]) : q.question.type === 'numeric' ? formatAnswer(q.question.answer) : '';

  return (
    <>
      <PageHeader
        title={fmt(t.exercises.quizTitle, { t: L(lesson.title) })}
        text={t.exercises.quizIntro}
        crumbs={[{ label: t.nav.exercises, to: '/exercises' }, { label: t.exercises.quizCta }]}
      />
      <div className="container-page max-w-3xl space-y-5 py-8">
        {questions.length === 0 && <EmptyState title={t.exercises.noQuiz} />}

        {finished && (
          <section className="card flex flex-col items-center gap-2 border-brand-200 bg-brand-50/60 p-6 text-center animate-fade-up" aria-live="polite">
            <Trophy className="h-10 w-10 text-saffron-500" aria-hidden="true" />
            <p className="font-display text-3xl font-bold" dir="ltr">{score} / {questions.length}</p>
            <p className="font-semibold">{fmt(t.exercises.score, { s: score, n: questions.length })}</p>
            {record && <p className="text-sm text-ink-500">{fmt(t.exercises.bestScore, { s: record.best, n: record.total })}</p>}
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <button type="button" className="btn-primary" onClick={restart}>
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                {t.exercises.quizRetry}
              </button>
              <Link to={`/lessons/${lesson.id}`} className="btn-secondary">{t.exercises.openLesson}</Link>
            </div>
          </section>
        )}

        {!finished && record && (
          <Notice tone="info">{fmt(t.exercises.bestScore, { s: record.best, n: record.total })}</Notice>
        )}

        {questions.map((q, i) => {
          const a = answers[q.id];
          const ok = finished && isCorrect(q, a);
          return (
            <article key={q.id} className={`card p-5 ${finished ? (ok ? 'border-brand-300' : 'border-red-200') : ''}`}>
              <p className="text-xs font-bold text-ink-400">{fmt(t.exercises.question, { i: i + 1, n: questions.length })}</p>
              <h2 className="mt-1 text-base font-semibold">{L(q.title)}</h2>
              <MathText text={L(q.statement)} block className="mt-2" />

              <div className="mt-4">
                {q.question.type === 'mcq' && (
                  <fieldset disabled={finished}>
                    <legend className="sr-only">{t.exercises.answerLabel}</legend>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {q.question.options.map((opt, k) => {
                        const correctOpt = q.question.type === 'mcq' && k === q.question.correct;
                        const sel = a?.mcq === k;
                        const tone = finished && correctOpt ? 'border-brand-500 bg-brand-50' : finished && sel ? 'border-red-400 bg-red-50' : sel ? 'border-brand-500 bg-brand-50/50' : 'border-ink-200 hover:border-ink-300';
                        return (
                          <label key={k} className={`flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 transition ${tone}`}>
                            <input type="radio" name={q.id} className="h-4 w-4 accent-brand-700" checked={sel} onChange={() => setAnswers({ ...answers, [q.id]: { mcq: k } })} />
                            <MathText text={L(opt)} />
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                )}
                {q.question.type === 'numeric' && (
                  <div className="max-w-xs">
                    <label className="field-label" htmlFor={`${q.id}-in`}>
                      {t.exercises.answerLabel} {q.question.unit && <span className="text-ink-400">({q.question.unit})</span>}
                    </label>
                    <input
                      id={`${q.id}-in`}
                      className="field-mono"
                      value={a?.text ?? ''}
                      onChange={(e) => setAnswers({ ...answers, [q.id]: { text: e.target.value } })}
                      placeholder={t.exercises.answerPlaceholder}
                      disabled={finished}
                      inputMode="decimal"
                      autoComplete="off"
                    />
                  </div>
                )}
              </div>

              {finished && (
                <div className="mt-4 space-y-3">
                  <p className={`flex items-start gap-2 text-sm ${ok ? 'text-brand-800' : 'text-red-800'}`}>
                    {ok ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />}
                    <span>
                      <MathText text={fmt(t.exercises.yourAnswerWas, { a: answerText(q, a) })} />
                      {!ok && (
                        <>
                          {' — '}
                          <MathText text={fmt(t.exercises.correctWas, { a: expected(q) })} />
                        </>
                      )}
                    </span>
                  </p>
                  <details className="rounded-xl bg-ink-50 p-3">
                    <summary className="cursor-pointer text-sm font-semibold text-brand-800">{t.exercises.solution}</summary>
                    <div className="mt-3">
                      <SolutionSteps steps={q.solution} />
                    </div>
                  </details>
                </div>
              )}
            </article>
          );
        })}

        {!finished && questions.length > 0 && (
          <div className="sticky bottom-4 z-10 flex items-center justify-between gap-3 rounded-2xl border border-ink-100 bg-white/95 p-3 shadow-lift backdrop-blur">
            <span className="text-sm text-ink-500" aria-live="polite">{fmt(t.exercises.answered, { a: answeredCount, n: questions.length })}</span>
            <button type="button" className="btn-primary" onClick={finish}>
              {t.exercises.finish}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
