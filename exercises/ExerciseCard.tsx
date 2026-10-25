import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Eye, EyeOff, Lightbulb, RotateCcw, XCircle } from 'lucide-react';
import type { Exercise } from '@/types';
import { MathText } from '@/components/math/MathText';
import { DifficultyBadge } from '@/components/cards/Cards';
import { useI18n } from '@/hooks/useI18n';
import { useProgress } from '@/hooks/useProgress';
import { formatAnswer, isNumericCorrect, parseNumericAnswer } from '@/utils/answers';
import { getLesson } from '@/services/content';

type Status = 'idle' | 'correct' | 'incorrect';

export function SolutionSteps({ steps }: { steps: { ar: string; fr: string }[] }) {
  const { L } = useI18n();
  return (
    <ol className="space-y-3">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">{i + 1}</span>
          <MathText text={L(s)} className="min-w-0 flex-1 leading-8" />
        </li>
      ))}
    </ol>
  );
}

export function ExerciseCard({ exercise, showLesson = false }: { exercise: Exercise; showLesson?: boolean }) {
  const { t, L, fmt } = useI18n();
  const { exercises: records, recordExercise } = useProgress();
  const record = records[exercise.id];
  const [selected, setSelected] = useState<number | null>(null);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string | null>(null);
  const [hints, setHints] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [selfDone, setSelfDone] = useState(false);
  const inputId = useId();
  const q = exercise.question;
  const lesson = showLesson ? getLesson(exercise.lessonId) : undefined;

  const check = () => {
    setMessage(null);
    if (q.type === 'mcq') {
      if (selected === null) return setMessage(t.exercises.chooseOption);
      const ok = selected === q.correct;
      setStatus(ok ? 'correct' : 'incorrect');
      recordExercise(exercise.id, ok ? 'correct' : 'incorrect');
    } else if (q.type === 'numeric') {
      const v = parseNumericAnswer(input);
      if (v === null) return setMessage(t.exercises.invalidNumber);
      const ok = isNumericCorrect(q, v);
      setStatus(ok ? 'correct' : 'incorrect');
      recordExercise(exercise.id, ok ? 'correct' : 'incorrect');
    }
  };

  const retry = () => {
    setStatus('idle');
    setSelected(null);
    setInput('');
    setMessage(null);
    setShowSolution(false);
    setSelfDone(false);
  };

  const correctAnswerText =
    q.type === 'mcq' ? L(q.options[q.correct]) : q.type === 'numeric' ? `${formatAnswer(q.answer)}${q.unit ? ` ${q.unit}` : ''}` : '';

  const recordOk = record?.status === 'correct' || record?.status === 'self-correct';
  const statusBadge = record && (
    <span className={`chip ${recordOk ? 'bg-brand-50 text-brand-700' : 'bg-red-50 text-red-700'}`}>
      {recordOk ? t.exercises.statusCorrect : t.exercises.statusIncorrect}
    </span>
  );

  return (
    <article id={exercise.id} className="card scroll-mt-24 p-5 sm:p-6">
      <header className="flex flex-wrap items-center gap-2">
        <DifficultyBadge level={exercise.difficulty} />
        <span className="chip bg-ink-50 text-ink-600">{t.exercises.types[q.type]}</span>
        <span className="chip bg-ink-50 text-ink-600">{t.exercises.topics[exercise.topic]}</span>
        {statusBadge}
      </header>
      <h3 className="mt-3 text-lg font-semibold">{L(exercise.title)}</h3>
      {lesson && (
        <Link to={`/lessons/${lesson.id}`} className="mt-0.5 inline-block text-sm text-brand-700 hover:underline">
          {t.exercises.openLesson}: {L(lesson.title)}
        </Link>
      )}
      <MathText text={L(exercise.statement)} block className="mt-3 text-ink-800" />

      {/* Zone de réponse */}
      <div className="mt-4">
        {q.type === 'mcq' && (
          <fieldset>
            <legend className="sr-only">{t.exercises.answerLabel}</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {q.options.map((opt, i) => {
                const isSel = selected === i;
                const reveal = status !== 'idle';
                const tone =
                  reveal && i === q.correct
                    ? 'border-brand-500 bg-brand-50'
                    : reveal && isSel
                      ? 'border-red-400 bg-red-50'
                      : isSel
                        ? 'border-brand-500 bg-brand-50/50'
                        : 'border-ink-200 hover:border-ink-300';
                return (
                  <label key={i} className={`flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 transition ${tone}`}>
                    <input
                      type="radio"
                      name={`${exercise.id}-opt`}
                      className="h-4 w-4 accent-brand-700"
                      checked={isSel}
                      disabled={status !== 'idle'}
                      onChange={() => setSelected(i)}
                    />
                    <MathText text={L(opt)} />
                  </label>
                );
              })}
            </div>
          </fieldset>
        )}
        {q.type === 'numeric' && (
          <div className="max-w-xs">
            <label htmlFor={inputId} className="field-label">
              {t.exercises.answerLabel} {q.unit && <span className="text-ink-400">({q.unit})</span>}
            </label>
            <input
              id={inputId}
              className="field-mono"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && status === 'idle' && check()}
              placeholder={t.exercises.answerPlaceholder}
              disabled={status !== 'idle'}
              inputMode="decimal"
              autoComplete="off"
            />
          </div>
        )}
      </div>

      {message && (
        <p role="alert" className="mt-3 text-sm text-red-700">
          {message}
        </p>
      )}

      {status !== 'idle' && (
        <div
          role="status"
          className={`mt-4 flex items-start gap-2 rounded-xl px-4 py-3 text-sm animate-fade-up ${
            status === 'correct' ? 'bg-brand-50 text-brand-900' : 'bg-red-50 text-red-900'
          }`}
        >
          {status === 'correct' ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" /> : <XCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />}
          <div>
            <p className="font-semibold">{status === 'correct' ? t.exercises.correct : t.exercises.incorrect}</p>
            {status === 'incorrect' && (
              <p className="mt-0.5">
                <MathText text={fmt(t.exercises.correctWas, { a: correctAnswerText })} />
              </p>
            )}
          </div>
        </div>
      )}

      {/* Indices */}
      {hints > 0 && (
        <ul className="mt-4 space-y-2">
          {exercise.hints.slice(0, hints).map((h, i) => (
            <li key={i} className="flex gap-2 rounded-xl bg-saffron-50 px-4 py-2.5 text-sm text-saffron-900 animate-fade-up">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <MathText text={L(h)} />
            </li>
          ))}
        </ul>
      )}

      {/* Actions */}
      <div className="mt-5 flex flex-wrap gap-2">
        {q.type !== 'open' && status === 'idle' && (
          <button type="button" className="btn-primary" onClick={check}>
            {t.exercises.check}
          </button>
        )}
        {status !== 'idle' && (
          <button type="button" className="btn-secondary" onClick={retry}>
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {t.exercises.retry}
          </button>
        )}
        {exercise.hints.length > 0 && (
          <button type="button" className="btn-ghost" onClick={() => setHints((h) => h + 1)} disabled={hints >= exercise.hints.length}>
            <Lightbulb className="h-4 w-4" aria-hidden="true" />
            {hints === 0 ? t.exercises.showHint : hints >= exercise.hints.length ? t.exercises.noMoreHints : t.exercises.nextHint}
          </button>
        )}
        <button type="button" className="btn-ghost" onClick={() => setShowSolution((s) => !s)} aria-expanded={showSolution} aria-controls={`${exercise.id}-sol`}>
          {showSolution ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
          {showSolution ? t.exercises.hideSolution : t.exercises.showSolution}
        </button>
      </div>

      <div id={`${exercise.id}-sol`} hidden={!showSolution}>
        {showSolution && (
          <section className="mt-4 rounded-xl border border-brand-100 bg-brand-50/40 p-4 animate-fade-up">
            <h4 className="mb-3 text-sm font-bold text-brand-800">{t.exercises.solution}</h4>
            <SolutionSteps steps={exercise.solution} />
            {q.type === 'open' && !selfDone && (
              <div className="mt-4 border-t border-brand-100 pt-4">
                <p className="mb-2 text-sm font-medium">{t.exercises.selfPrompt}</p>
                <div className="flex flex-wrap gap-2">
                  <button type="button" className="btn-primary btn-sm" onClick={() => { recordExercise(exercise.id, 'self-correct'); setSelfDone(true); }}>
                    {t.exercises.selfYes}
                  </button>
                  <button type="button" className="btn-secondary btn-sm" onClick={() => { recordExercise(exercise.id, 'self-incorrect'); setSelfDone(true); }}>
                    {t.exercises.selfNo}
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
      {record && (
        <p className="mt-3 text-xs text-ink-400">{fmt(t.exercises.attempts, { n: record.attempts })}</p>
      )}
    </article>
  );
}
