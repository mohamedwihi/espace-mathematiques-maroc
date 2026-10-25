import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Clock, FileText, Heart, ShieldCheck, FlaskConical } from 'lucide-react';
import type { Difficulty, Exam, Lesson, Level } from '@/types';
import type { ToolMeta } from '@/data/tools';
import { toolIcons } from '@/components/tools/toolIcons';
import { MathText } from '@/components/math/MathText';
import { useI18n } from '@/hooks/useI18n';
import { useProgress } from '@/hooks/useProgress';
import { getLevel } from '@/data/levels';
import { lessonsForLevel, unitTitle } from '@/services/content';

export function Arrow({ className = 'h-4 w-4' }: { className?: string }) {
  const { dir } = useI18n();
  const Icon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  return <Icon className={className} aria-hidden="true" />;
}

const levelAccents: Record<string, string> = {
  '1ac': 'from-brand-500 to-brand-700',
  '2ac': 'from-brand-600 to-ink-600',
  '3ac': 'from-ink-500 to-ink-700',
  tc: 'from-saffron-500 to-saffron-700',
  '1bac': 'from-ink-600 to-ink-900',
  '2bac': 'from-brand-800 to-ink-950',
};

export function LevelCard({ level }: { level: Level }) {
  const { t, L, fmt } = useI18n();
  const count = lessonsForLevel(level.id).length;
  return (
    <Link to={`/levels/${level.id}`} className="card-hover group flex flex-col overflow-hidden">
      <div className={`relative flex h-24 items-end bg-gradient-to-br p-4 ${levelAccents[level.id]}`}>
        <div className="zellige-bg absolute inset-0" aria-hidden="true" />
        <span className="relative font-display text-3xl font-bold text-white" dir="ltr">
          {level.code}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-semibold">{L(level.name)}</h3>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-ink-500">{L(level.description)}</p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="chip bg-ink-50 text-ink-600">{fmt(t.home.lessonsCount, { n: count })}</span>
          <span className="flex items-center gap-1 font-semibold text-brand-700 transition group-hover:gap-2">
            {t.levels.seeLevel}
            <Arrow />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ReviewBadge({ reviewed }: { reviewed: boolean }) {
  const { t } = useI18n();
  return reviewed ? (
    <span className="chip bg-brand-50 text-brand-700">
      <ShieldCheck className="h-3 w-3" aria-hidden="true" />
      {t.common.reviewed}
    </span>
  ) : (
    <span className="chip bg-saffron-50 text-saffron-800" title={t.common.notReviewedLong}>
      <FlaskConical className="h-3 w-3" aria-hidden="true" />
      {t.common.notReviewed}
    </span>
  );
}

export function LessonCard({ lesson }: { lesson: Lesson }) {
  const { t, L, fmt } = useI18n();
  const { isFavorite } = useProgress();
  const level = getLevel(lesson.levelId);
  const unit = unitTitle(lesson);
  return (
    <Link to={`/lessons/${lesson.id}`} className="card-hover group flex flex-col p-5">
      <div className="flex items-center justify-between gap-2">
        <span className="chip bg-ink-900 text-white" dir="ltr">
          {level?.code}
        </span>
        {isFavorite(lesson.id) && <Heart className="h-4 w-4 fill-red-500 text-red-500" aria-label={t.lesson.removeFav} />}
      </div>
      {unit && <p className="mt-3 text-xs font-medium text-brand-700">{L(unit)}</p>}
      <h3 className="mt-1 text-lg font-semibold leading-snug">{L(lesson.title)}</h3>
      <MathText text={L(lesson.summary)} className="mt-2 line-clamp-3 flex-1 text-sm text-ink-500" />
      <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {fmt(t.lesson.duration, { n: lesson.durationMinutes })}
        </span>
        <span className="flex items-center gap-1 font-semibold text-brand-700 transition group-hover:gap-2">
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          <Arrow className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

export function DifficultyBadge({ level }: { level: Difficulty }) {
  const { t } = useI18n();
  const styles = { 1: 'bg-brand-50 text-brand-700', 2: 'bg-saffron-50 text-saffron-800', 3: 'bg-red-50 text-red-700' };
  return (
    <span className={`chip ${styles[level]}`}>
      <span className="flex gap-0.5" aria-hidden="true">
        {[1, 2, 3].map((i) => (
          <span key={i} className={`h-1.5 w-1.5 rounded-full ${i <= level ? 'bg-current' : 'bg-current opacity-25'}`} />
        ))}
      </span>
      {t.exercises.difficulty[level]}
    </span>
  );
}

export function ToolCard({ tool }: { tool: ToolMeta }) {
  const { t } = useI18n();
  const Icon = toolIcons[tool.id];
  const item = t.tools.items[tool.id];
  return (
    <Link to={`/tools/${tool.id}`} className="card-hover group flex items-start gap-4 p-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-semibold text-ink-950">{item.name}</span>
        <span className="mt-0.5 block text-sm text-ink-500">{item.desc}</span>
      </span>
    </Link>
  );
}

export function ExamCard({ exam }: { exam: Exam }) {
  const { t, L, fmt } = useI18n();
  const level = getLevel(exam.levelId);
  const streams = exam.streams?.map((s) => level?.streams.find((x) => x.id === s)?.short).filter(Boolean);
  return (
    <Link to={`/exams/${exam.id}`} className="card-hover group flex flex-col p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="chip bg-ink-900 text-white" dir="ltr">
          {level?.code}
        </span>
        <span className="chip bg-ink-50 text-ink-600">{t.exams.kinds[exam.kind]}</span>
        {exam.official ? (
          <span className="chip bg-brand-50 text-brand-700">{t.exams.official}</span>
        ) : (
          <span className="chip bg-saffron-50 text-saffron-800">{t.exams.platform}</span>
        )}
      </div>
      <h3 className="mt-3 flex-1 text-base font-semibold leading-snug">{L(exam.title)}</h3>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-400">
        <span dir="ltr">{exam.year}</span>
        {exam.semester && <span>{fmt(t.common.semesterN, { n: exam.semester })}</span>}
        {exam.session && <span>{t.exams.sessions[exam.session]}</span>}
        {streams && streams.length > 0 && <span dir="ltr">{streams.join(' · ')}</span>}
        <span className="ms-auto flex items-center gap-1 font-semibold text-brand-700">
          <FileText className="h-3.5 w-3.5" aria-hidden="true" />
          <Arrow className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
