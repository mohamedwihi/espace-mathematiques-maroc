import type { Lesson } from '@/types';
import { modules1ac } from './1ac';
import { lesson2acPowers } from './2ac-powers';
import { lesson2acPythagoras } from './2ac-pythagoras';
import { lesson3acSystems } from './3ac-systems';
import { lessonTcSecondDegree } from './tc-second-degree';
import { lesson1bacDerivation } from './1bac-derivation';
import { lesson2bacLogarithm } from './2bac-logarithm';
import { lesson2bacIntegrals } from './2bac-integrals';

/**
 * Pour ajouter un cours : créez un fichier dans ce dossier (même structure que les exemples),
 * puis ajoutez-le à cette liste. Laissez `reviewed: false` tant qu'un enseignant ne l'a pas relu.
 */
export const lessons: Lesson[] = [
  ...modules1ac.map((m) => m.lesson),
  lesson2acPowers,
  lesson2acPythagoras,
  lesson3acSystems,
  lessonTcSecondDegree,
  lesson1bacDerivation,
  lesson2bacLogarithm,
  lesson2bacIntegrals,
];
