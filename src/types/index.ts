export type Lang = 'ar' | 'fr';

/** Texte disponible dans les deux langues. Peut contenir des formules : $...$ (en ligne) ou $$...$$ (bloc). */
export interface Localized {
  ar: string;
  fr: string;
}

export type LevelId = '1ac' | '2ac' | '3ac' | 'tc' | '1bac' | '2bac';
export type Cycle = 'college' | 'lycee';
export type Semester = 1 | 2;

export interface Stream {
  id: string;
  name: Localized;
  short: string;
}

export interface Unit {
  id: string;
  semester: Semester;
  title: Localized;
  /** Filières concernées ; absent = toutes les filières du niveau. */
  streams?: string[];
}

export interface Level {
  id: LevelId;
  cycle: Cycle;
  code: string;
  name: Localized;
  description: Localized;
  streams: Stream[];
  units: Unit[];
}

/* ---------- Leçons ---------- */

export type CalloutKind = 'definition' | 'theorem' | 'property' | 'rule' | 'remark' | 'method';

export interface GraphFunction {
  fn: (x: number) => number;
  /** Étiquette LaTeX, ex. "f(x)=x^2" */
  label: string;
  color?: 'brand' | 'ink' | 'saffron' | 'red';
  /** Domaine de tracé facultatif */
  domain?: [number, number];
}

export interface GraphPoint {
  x: number;
  y: number;
  label?: string;
}

export type LessonBlock =
  | { kind: 'text'; content: Localized }
  | { kind: CalloutKind; title?: Localized; content: Localized }
  | { kind: 'formula'; tex: string; caption?: Localized }
  | { kind: 'example'; title?: Localized; statement: Localized; steps: Localized[] }
  | { kind: 'list'; items: Localized[] }
  | {
      kind: 'graph';
      functions: GraphFunction[];
      points?: GraphPoint[];
      lines?: { from: [number, number]; to: [number, number]; dashed?: boolean }[];
      /** Zone colorée entre la courbe n° `index` et l'axe des abscisses. */
      shade?: { index: number; from: number; to: number };
      x: [number, number];
      y: [number, number];
      caption?: Localized;
    }
  | {
      kind: 'geometry';
      polygons?: { points: [number, number][]; color?: 'brand' | 'ink' | 'saffron' }[];
      segments?: { from: [number, number]; to: [number, number]; dashed?: boolean }[];
      points?: GraphPoint[];
      rightAngles?: { at: [number, number]; u: [number, number]; v: [number, number] }[];
      x: [number, number];
      y: [number, number];
      caption?: Localized;
    };

export interface LessonSection {
  id: string;
  title: Localized;
  blocks: LessonBlock[];
}

export interface Lesson {
  id: string;
  levelId: LevelId;
  unitId: string;
  /** Filières concernées ; absent = toutes les filières du niveau. */
  streams?: string[];
  title: Localized;
  summary: Localized;
  objectives: Localized[];
  durationMinutes: number;
  sections: LessonSection[];
  recap: Localized[];
  /** true seulement après relecture par un enseignant et vérification de conformité au programme officiel. */
  reviewed: boolean;
  featured?: boolean;
  keywords: string[];
}

/* ---------- Exercices ---------- */

export type Difficulty = 1 | 2 | 3;
export type Topic = 'arithmetic' | 'algebra' | 'geometry' | 'analysis' | 'statistics';

export type Question =
  | { type: 'mcq'; options: Localized[]; correct: number }
  | { type: 'numeric'; answer: number; tolerance?: number; unit?: string }
  | { type: 'open' };

export interface Exercise {
  id: string;
  lessonId: string;
  levelId: LevelId;
  difficulty: Difficulty;
  topic: Topic;
  title: Localized;
  statement: Localized;
  question: Question;
  hints: Localized[];
  solution: Localized[];
}

/* ---------- Devoirs et examens ---------- */

export type ExamKind = 'continuous' | 'local' | 'regional' | 'national' | 'practice';
export type ExamSession = 'normal' | 'catchup';

export interface ExamPart {
  title: Localized;
  points: number;
  statement: Localized;
  correction: Localized[];
}

export interface Exam {
  id: string;
  levelId: LevelId;
  streams?: string[];
  kind: ExamKind;
  year: number;
  session?: ExamSession;
  semester?: Semester;
  title: Localized;
  durationMinutes?: number;
  /** Description de la source réelle du document. */
  source: Localized;
  /** true uniquement si le document provient d'une source officielle vérifiée. */
  official: boolean;
  /** Chemin d'un PDF réel placé dans public/exams/. Ne jamais mettre de lien fictif. */
  pdfUrl?: string;
  correctionPdfUrl?: string;
  /** Contenu consultable directement sur le site (sujets d'entraînement rédigés par la plateforme). */
  parts?: ExamPart[];
}

/* ---------- Progression locale ---------- */

export type ExerciseStatus = 'correct' | 'incorrect' | 'self-correct' | 'self-incorrect';

export interface ExerciseRecord {
  status: ExerciseStatus;
  attempts: number;
  lastAt: number;
}

export interface QuizRecord {
  best: number;
  last: number;
  total: number;
  attempts: number;
  lastAt: number;
}

export interface ProgressState {
  favorites: string[];
  exercises: Record<string, ExerciseRecord>;
  quizzes: Record<string, QuizRecord>;
}
