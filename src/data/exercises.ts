import type { Exercise } from '@/types';
import { modules1ac } from './lessons/1ac';
import { modules2ac } from './lessons/2ac';
import { modules3ac } from './lessons/3ac';
import { modulesTc } from './lessons/tc';
import { modules1bac } from './lessons/1bac';
import { modules2bac } from './lessons/2bac';

/**
 * Exercices corrigés. Chaque exercice est rattaché à un cours (lessonId).
 * Types : 'mcq' (QCM, index de la bonne réponse), 'numeric' (réponse numérique avec tolérance), 'open' (auto-évaluation).
 */
export const exercises: Exercise[] = [
  // 1AC : les exercices sont définis avec chaque cours (src/data/lessons/1ac/)
  ...modules1ac.flatMap((m) => m.exercises),

  // 2AC : les exercices sont définis avec chaque cours (src/data/lessons/2ac/)
  ...modules2ac.flatMap((m) => m.exercises),

  // 3AC : les exercices sont définis avec chaque cours (src/data/lessons/3ac/)
  ...modules3ac.flatMap((m) => m.exercises),

  // TC : les exercices sont définis avec chaque cours (src/data/lessons/tc/)
  ...modulesTc.flatMap((m) => m.exercises),

  // 1BAC : les exercices sont définis avec chaque cours (src/data/lessons/1bac/)
  ...modules1bac.flatMap((m) => m.exercises),

  // 2BAC : les exercices sont définis avec chaque cours (src/data/lessons/2bac/)
  ...modules2bac.flatMap((m) => m.exercises),
];
