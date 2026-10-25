import type { ExerciseStatus, ProgressState } from '@/types';
import { readJSON, removeKey, STORAGE_KEYS, writeJSON } from './storage';

/** Magasin de progression local, synchronisé entre composants et entre onglets. */

const EMPTY: ProgressState = { favorites: [], exercises: {}, quizzes: {} };

function isProgress(value: unknown): value is ProgressState {
  if (!value || typeof value !== 'object') return false;
  const v = value as Partial<ProgressState>;
  return (
    Array.isArray(v.favorites) &&
    v.favorites.every((f) => typeof f === 'string') &&
    !!v.exercises &&
    typeof v.exercises === 'object' &&
    !!v.quizzes &&
    typeof v.quizzes === 'object'
  );
}

let state: ProgressState = load();
const listeners = new Set<() => void>();

function load(): ProgressState {
  if (typeof window === 'undefined') return EMPTY;
  return readJSON<ProgressState>(STORAGE_KEYS.progress, EMPTY, isProgress);
}

function commit(next: ProgressState) {
  state = next;
  writeJSON(STORAGE_KEYS.progress, next);
  listeners.forEach((l) => l());
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key && e.key.endsWith(STORAGE_KEYS.progress)) {
      state = load();
      listeners.forEach((l) => l());
    }
  });
}

export const progressStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot(): ProgressState {
    return state;
  },
  toggleFavorite(lessonId: string) {
    const has = state.favorites.includes(lessonId);
    commit({
      ...state,
      favorites: has ? state.favorites.filter((id) => id !== lessonId) : [...state.favorites, lessonId],
    });
  },
  recordExercise(exerciseId: string, status: ExerciseStatus) {
    const prev = state.exercises[exerciseId];
    commit({
      ...state,
      exercises: {
        ...state.exercises,
        [exerciseId]: { status, attempts: (prev?.attempts ?? 0) + 1, lastAt: Date.now() },
      },
    });
  },
  recordQuiz(lessonId: string, score: number, total: number) {
    const prev = state.quizzes[lessonId];
    commit({
      ...state,
      quizzes: {
        ...state.quizzes,
        [lessonId]: {
          best: Math.max(prev?.best ?? 0, score),
          last: score,
          total,
          attempts: (prev?.attempts ?? 0) + 1,
          lastAt: Date.now(),
        },
      },
    });
  },
  clear() {
    removeKey(STORAGE_KEYS.progress);
    removeKey(STORAGE_KEYS.calcHistory);
    state = EMPTY;
    listeners.forEach((l) => l());
  },
};
