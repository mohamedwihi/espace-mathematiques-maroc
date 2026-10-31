import { useCallback, useEffect, useRef, useState } from 'react';
import { CheckCircle2, Flame, Heart, RotateCcw, Timer, Trophy, XCircle } from 'lucide-react';
import { levels } from '@/data/levels';
import { MathText } from '@/components/math/MathText';
import { PageHeader } from '@/components/ui/PageHeader';
import { useI18n } from '@/hooks/useI18n';
import { usePageMeta } from '@/hooks/usePageMeta';
import { GAME_LEVELS, makeQuestion, type GameQuestion } from '@/services/gameQuestions';
import { readJSON, STORAGE_KEYS, writeJSON } from '@/services/storage';
import type { LevelId } from '@/types';

type Mode = 'sprint' | 'survival' | 'practice';
type Phase = 'setup' | 'play' | 'over';
type Bests = Partial<Record<`${LevelId}-${Mode}`, number>>;

const MODES: Mode[] = ['sprint', 'survival', 'practice'];
const SPRINT_SECONDS = 60;
const isBests = (v: unknown): v is Bests => !!v && typeof v === 'object' && Object.values(v).every((x) => typeof x === 'number');

export default function GamePage() {
  const { t, L, fmt } = useI18n();
  usePageMeta(t.game.metaTitle, t.game.text);

  const [level, setLevel] = useState<LevelId>('3ac');
  const [mode, setMode] = useState<Mode>('sprint');
  const [phase, setPhase] = useState<Phase>('setup');
  const [q, setQ] = useState<GameQuestion | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [asked, setAsked] = useState(0);
  const [right, setRight] = useState(0);
  const [timeLeft, setTimeLeft] = useState(SPRINT_SECONDS);
  const [lastBonus, setLastBonus] = useState(0);
  const [bests, setBests] = useState<Bests>(() => readJSON(STORAGE_KEYS.gameBests, {}, isBests));
  const [newBest, setNewBest] = useState(false);
  const nextTimer = useRef<number>();

  const key = `${level}-${mode}` as const;
  const difficulty = 1 + Math.min(2, Math.floor(right / 5));

  const nextQuestion = useCallback(() => {
    setPicked(null);
    setQ(makeQuestion(level, mode === 'practice' ? 2 : difficulty));
    setAsked((n) => n + 1);
  }, [level, mode, difficulty]);

  const start = () => {
    setScore(0); setStreak(0); setBestStreak(0); setLives(3); setAsked(0); setRight(0);
    setTimeLeft(SPRINT_SECONDS); setNewBest(false); setLastBonus(0);
    setPicked(null);
    setQ(makeQuestion(level, 1));
    setAsked(1);
    setPhase('play');
  };

  const finish = useCallback(() => {
    window.clearTimeout(nextTimer.current);
    setPhase('over');
  }, []);

  // Enregistre le record à la fin de la partie.
  useEffect(() => {
    if (phase !== 'over' || mode === 'practice') return;
    if (score > (bests[key] ?? 0)) {
      const next = { ...bests, [key]: score };
      setBests(next);
      writeJSON(STORAGE_KEYS.gameBests, next);
      setNewBest(true);
    }
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  // Chronomètre du mode sprint.
  useEffect(() => {
    if (phase !== 'play' || mode !== 'sprint') return;
    if (timeLeft <= 0) { finish(); return; }
    const id = window.setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => window.clearTimeout(id);
  }, [phase, mode, timeLeft, finish]);

  useEffect(() => () => window.clearTimeout(nextTimer.current), []);

  const answer = (i: number) => {
    if (!q || picked !== null || phase !== 'play') return;
    setPicked(i);
    const ok = i === q.answer;
    if (ok) {
      const s = streak + 1;
      const bonus = s % 3 === 0 ? 5 * (s / 3) : 0;
      setStreak(s);
      setBestStreak((b) => Math.max(b, s));
      setRight((n) => n + 1);
      setScore((x) => x + 10 + bonus);
      setLastBonus(bonus);
    } else {
      setStreak(0);
      setLastBonus(0);
      if (mode === 'survival') {
        const l = lives - 1;
        setLives(l);
        if (l <= 0) { nextTimer.current = window.setTimeout(finish, 1200); return; }
      }
    }
    if (mode !== 'practice') nextTimer.current = window.setTimeout(nextQuestion, ok ? 700 : 1400);
  };

  // Raccourcis clavier 1 à 4.
  useEffect(() => {
    if (phase !== 'play') return;
    const onKey = (e: KeyboardEvent) => {
      const k = Number(e.key);
      if (k >= 1 && k <= 4) answer(k - 1);
      if (e.key === 'Enter' && mode === 'practice' && picked !== null) nextQuestion();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const accuracy = asked ? Math.round((right / Math.max(1, picked === null ? asked - 1 : asked)) * 100) : 0;
  const rank = score >= 400 ? 'master' : score >= 250 ? 'great' : score >= 120 ? 'good' : 'starter';
  const levelName = (id: LevelId) => levels.find((l) => l.id === id);

  return (
    <>
      <PageHeader title={t.game.title} text={t.game.text} crumbs={[{ label: t.nav.game }]} />
      <div className="container-page max-w-3xl py-8">
        {phase === 'setup' && (
          <div className="space-y-6">
            <section className="card p-5" aria-labelledby="lvl-title">
              <h2 id="lvl-title" className="font-bold">{t.game.chooseLevel}</h2>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {GAME_LEVELS.map((id) => {
                  const lv = levelName(id);
                  return (
                    <button
                      key={id}
                      type="button"
                      aria-pressed={level === id}
                      onClick={() => setLevel(id)}
                      className={`rounded-xl border p-3 text-start transition ${level === id ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-200' : 'border-ink-100 hover:border-brand-300'}`}
                    >
                      <span className="block text-lg font-extrabold" dir="ltr">{lv?.code}</span>
                      <span className="block text-xs text-ink-500">{lv && L(lv.name)}</span>
                    </button>
                  );
                })}
              </div>
            </section>
            <section className="card p-5" aria-labelledby="mode-title">
              <h2 id="mode-title" className="font-bold">{t.game.chooseMode}</h2>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {MODES.map((m) => (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={mode === m}
                    onClick={() => setMode(m)}
                    className={`rounded-xl border p-3 text-start transition ${mode === m ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-200' : 'border-ink-100 hover:border-brand-300'}`}
                  >
                    <span className="block font-bold">{t.game.modes[m]}</span>
                    <span className="mt-1 block text-xs text-ink-500">{t.game.modesHint[m]}</span>
                    {m !== 'practice' && (
                      <span className="mt-2 flex items-center gap-1 text-xs font-semibold text-saffron-800">
                        <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
                        {t.game.best} : {bests[`${level}-${m}`] ?? 0}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </section>
            <div className="flex flex-wrap items-center gap-4">
              <button type="button" className="btn-primary" onClick={start}>{t.game.start}</button>
              <details className="text-sm text-ink-600">
                <summary className="cursor-pointer font-semibold">{t.game.howTo}</summary>
                <p className="mt-2 max-w-prose">{t.game.howToText}</p>
              </details>
            </div>
          </div>
        )}

        {phase === 'play' && q && (
          <div className="space-y-4">
            <div className="card flex flex-wrap items-center gap-x-6 gap-y-2 p-4 text-sm">
              <span className="font-bold text-brand-700">{t.game.score} : <span dir="ltr">{score}</span></span>
              <span className="flex items-center gap-1"><Flame className="h-4 w-4 text-saffron-600" aria-hidden="true" />{t.game.streak} : {streak}</span>
              {mode === 'sprint' && (
                <span className={`flex items-center gap-1 font-semibold ${timeLeft <= 10 ? 'text-red-600' : ''}`} role="timer" aria-live="off">
                  <Timer className="h-4 w-4" aria-hidden="true" />{t.game.time} : <span dir="ltr">{timeLeft}s</span>
                </span>
              )}
              {mode === 'survival' && (
                <span className="flex items-center gap-1" aria-label={`${t.game.lives} : ${lives}`}>
                  {[0, 1, 2].map((i) => <Heart key={i} className={`h-4 w-4 ${i < lives ? 'fill-red-500 text-red-500' : 'text-ink-200'}`} aria-hidden="true" />)}
                </span>
              )}
              <button type="button" className="btn-ghost btn-sm ms-auto" onClick={finish}>{t.game.quit}</button>
            </div>
            {mode === 'sprint' && (
              <div className="h-2 overflow-hidden rounded-full bg-ink-100" aria-hidden="true">
                <div className="h-full bg-brand-500 transition-[width] duration-1000 ease-linear" style={{ width: `${(timeLeft / SPRINT_SECONDS) * 100}%` }} />
              </div>
            )}
            <section className="card p-6" aria-live="polite">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">{fmt(t.game.question, { n: asked })}</p>
              <div className="mt-3 text-xl leading-10" dir="ltr">
                <MathText text={q.prompt} block />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {q.choices.map((c, i) => {
                  const state = picked === null ? '' : i === q.answer ? 'border-green-500 bg-green-50' : i === picked ? 'border-red-500 bg-red-50' : 'opacity-60';
                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={picked !== null}
                      onClick={() => answer(i)}
                      className={`flex min-h-14 items-center gap-3 rounded-xl border-2 border-ink-100 p-3 text-start text-lg transition hover:border-brand-400 disabled:cursor-default ${state}`}
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-50 text-xs font-bold text-ink-500">{i + 1}</span>
                      <span dir="ltr"><MathText text={c} /></span>
                    </button>
                  );
                })}
              </div>
              {picked !== null && (
                <div className={`mt-4 flex flex-wrap items-center gap-2 text-sm font-semibold ${picked === q.answer ? 'text-green-700' : 'text-red-700'}`}>
                  {picked === q.answer ? <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> : <XCircle className="h-5 w-5" aria-hidden="true" />}
                  {picked === q.answer ? t.game.correct : t.game.wrong}
                  {picked === q.answer && lastBonus > 0 && <span className="chip bg-saffron-50 text-saffron-800">{fmt(t.game.bonus, { n: lastBonus })}</span>}
                </div>
              )}
              {picked !== null && mode === 'practice' && (
                <div className="mt-3 rounded-xl border border-brand-100 bg-brand-50/40 p-3 text-sm" dir="ltr">
                  <MathText text={q.explain} />
                </div>
              )}
              {picked !== null && mode === 'practice' && (
                <button type="button" className="btn-primary mt-4" onClick={nextQuestion}>{t.game.next}</button>
              )}
            </section>
          </div>
        )}

        {phase === 'over' && (
          <section className="card p-6 text-center" aria-labelledby="over-title">
            <Trophy className="mx-auto h-12 w-12 text-saffron-500" aria-hidden="true" />
            <h2 id="over-title" className="mt-3 text-2xl font-extrabold">{t.game.over}</h2>
            <p className="mt-2 text-lg font-bold text-brand-700">{fmt(t.game.finalScore, { n: score })}</p>
            <p className="mt-1 text-sm text-ink-600">{t.game.rank[rank]} · {fmt(t.game.accuracy, { n: accuracy })} · {t.game.streak} {bestStreak}</p>
            {newBest && <p className="mt-3 inline-block rounded-full bg-saffron-50 px-3 py-1 text-sm font-bold text-saffron-800">{t.game.newBest}</p>}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button type="button" className="btn-primary" onClick={start}>
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                {t.game.playAgain}
              </button>
              <button type="button" className="btn-secondary" onClick={() => setPhase('setup')}>{t.game.changeLevel}</button>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
