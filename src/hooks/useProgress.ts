import { useSyncExternalStore } from 'react';
import { progressStore } from '@/services/progressStore';

export function useProgress() {
  const state = useSyncExternalStore(progressStore.subscribe, progressStore.getSnapshot, progressStore.getSnapshot);
  return {
    ...state,
    isFavorite: (lessonId: string) => state.favorites.includes(lessonId),
    toggleFavorite: progressStore.toggleFavorite,
    recordExercise: progressStore.recordExercise,
    recordQuiz: progressStore.recordQuiz,
    clear: progressStore.clear,
  };
}
