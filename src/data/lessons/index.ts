import type { Lesson } from '@/types';
import { modules1ac } from './1ac';
import { modules2ac } from './2ac';
import { modules3ac } from './3ac';
import { modulesTc } from './tc';
import { lesson1bacDerivation } from './1bac-derivation';
import { lesson2bacLogarithm } from './2bac-logarithm';
import { lesson2bacIntegrals } from './2bac-integrals';

/**
 * Pour ajouter un cours : créez un fichier dans ce dossier (même structure que les exemples),
 * puis ajoutez-le à cette liste. Laissez `reviewed: false` tant qu'un enseignant ne l'a pas relu.
 */
export const lessons: Lesson[] = [
  ...modules1ac.map((m) => m.lesson),
  ...modules2ac.map((m) => m.lesson),
  ...modules3ac.map((m) => m.lesson),
  ...modulesTc.map((m) => m.lesson),
  lesson1bacDerivation,
  lesson2bacLogarithm,
  lesson2bacIntegrals,
];
