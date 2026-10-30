import type { Exam, Exercise, Lang, Lesson, Level, LevelId, Localized } from '@/types';
import { levels, getLevel } from '@/data/levels';
import { lessons } from '@/data/lessons';
import { exercises } from '@/data/exercises';
import { exams } from '@/data/exams';
import { tools } from '@/data/tools';
import { dictionaries } from '@/i18n';
import { coursePdfs } from '@/data/coursePdfs.generated';

/** Cours complet en PDF (rédigé dans content/cours/), affiché à la place du cours abrégé s'il existe. */
export function coursePdfUrl(lesson: Lesson): string | undefined {
  return coursePdfs.includes(`${lesson.levelId}/${lesson.id}`) ? `/cours/${lesson.levelId}/${lesson.id}.pdf` : undefined;
}

/* ---------- Requêtes ---------- */

export const getLesson = (id: string | undefined) => lessons.find((l) => l.id === id);
export const getExam = (id: string | undefined) => exams.find((e) => e.id === id);

export const appliesToStream = (streams: string[] | undefined, stream: string) => !stream || !streams || streams.includes(stream);

export function lessonsForLevel(levelId: LevelId, stream = ''): Lesson[] {
  return lessons.filter((l) => l.levelId === levelId && appliesToStream(l.streams, stream));
}

export function exercisesForLesson(lessonId: string): Exercise[] {
  return exercises.filter((e) => e.lessonId === lessonId);
}

export function examsForLevel(levelId: LevelId, stream = ''): Exam[] {
  return exams.filter((e) => e.levelId === levelId && appliesToStream(e.streams, stream));
}

export function unitTitle(lesson: Lesson): Localized | undefined {
  return getLevel(lesson.levelId)?.units.find((u) => u.id === lesson.unitId)?.title;
}

export function lessonSemester(lesson: Lesson): 1 | 2 | undefined {
  return getLevel(lesson.levelId)?.units.find((u) => u.id === lesson.unitId)?.semester;
}

export function levelOf(id: LevelId): Level {
  return getLevel(id) as Level;
}

export const contentStats = {
  lessons: lessons.length,
  exercises: exercises.length,
  tools: tools.length,
  levels: levels.length,
};

/* ---------- Recherche ---------- */

export type SearchType = 'lesson' | 'exercise' | 'exam' | 'tool';

export interface SearchItem {
  type: SearchType;
  id: string;
  levelId?: LevelId;
  title: Localized;
  subtitle: Localized;
  to: string;
  haystack: string;
}

/** Normalisation : minuscules, sans accents, sans diacritiques arabes, sans LaTeX. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[إأآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/\\[a-z]+/g, ' ')
    .replace(/[${}^_\\]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const both = (l: Localized) => `${l.ar} ${l.fr}`;

let index: SearchItem[] | null = null;

function buildIndex(): SearchItem[] {
  const out: SearchItem[] = [];
  for (const l of lessons) {
    const level = getLevel(l.levelId)!;
    out.push({
      type: 'lesson',
      id: l.id,
      levelId: l.levelId,
      title: l.title,
      subtitle: { ar: `${level.code} — ${l.summary.ar}`, fr: `${level.code} — ${l.summary.fr}` },
      to: `/lessons/${l.id}`,
      haystack: normalize([both(l.title), both(l.summary), l.keywords.join(' '), level.code, ...l.sections.map((s) => both(s.title))].join(' ')),
    });
  }
  for (const e of exercises) {
    const lesson = getLesson(e.lessonId);
    const level = getLevel(e.levelId)!;
    out.push({
      type: 'exercise',
      id: e.id,
      levelId: e.levelId,
      title: e.title,
      subtitle: { ar: `${level.code} — ${lesson?.title.ar ?? ''}`, fr: `${level.code} — ${lesson?.title.fr ?? ''}` },
      to: `/exercises?lesson=${e.lessonId}#${e.id}`,
      haystack: normalize([both(e.title), both(e.statement), lesson ? both(lesson.title) : '', lesson?.keywords.join(' ') ?? '', level.code].join(' ')),
    });
  }
  for (const x of exams) {
    const level = getLevel(x.levelId)!;
    out.push({
      type: 'exam',
      id: x.id,
      levelId: x.levelId,
      title: x.title,
      subtitle: { ar: `${level.code} — ${x.year}`, fr: `${level.code} — ${x.year}` },
      to: `/exams/${x.id}`,
      haystack: normalize([both(x.title), level.code, String(x.year), ...(x.parts ?? []).map((p) => both(p.statement))].join(' ')),
    });
  }
  for (const tool of tools) {
    const names = (['ar', 'fr'] as Lang[]).map((lang) => dictionaries[lang].tools.items[tool.id]);
    out.push({
      type: 'tool',
      id: tool.id,
      title: { ar: names[0].name, fr: names[1].name },
      subtitle: { ar: names[0].desc, fr: names[1].desc },
      to: `/tools/${tool.id}`,
      haystack: normalize([names[0].name, names[1].name, names[0].desc, names[1].desc, tool.keywords.join(' ')].join(' ')),
    });
  }
  return out;
}

export function search(query: string, filters: { type?: SearchType | ''; levelId?: LevelId | '' } = {}): SearchItem[] {
  index ??= buildIndex();
  const terms = normalize(query).split(' ').filter((w) => w.length >= 2);
  if (!terms.length) return [];
  return index
    .filter((item) => (!filters.type || item.type === filters.type) && (!filters.levelId || item.levelId === filters.levelId))
    .map((item) => {
      const title = normalize(both(item.title));
      let score = 0;
      for (const term of terms) {
        if (!item.haystack.includes(term)) return { item, score: -1 };
        score += title.includes(term) ? 3 : 1;
      }
      return { item, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.item);
}
