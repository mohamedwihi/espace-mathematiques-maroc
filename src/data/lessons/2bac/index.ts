import type { LessonModule } from '@/types';
import { limitesContinuite } from './01-limites-continuite';
import { derivabiliteEtude } from './02-derivabilite-etude';
import { suites } from './03-suites';
import { primitives } from './04-primitives';
import { logarithmes } from './05-logarithmes';
import { complexes } from './06-complexes';
import { exponentielles } from './07-exponentielles';
import { calculIntegral } from './08-calcul-integral';
import { equationsDifferentielles } from './09-equations-differentielles';
import { geometrieEspace } from './10-geometrie-espace';
import { probabilites } from './11-probabilites';

/** Cours de 2e année bac PC/SVT (un fichier = un cours + ses exercices), dans l'ordre de la progression. */
export const modules2bac: LessonModule[] = [
  limitesContinuite,
  derivabiliteEtude,
  suites,
  primitives,
  logarithmes,
  complexes,
  exponentielles,
  calculIntegral,
  equationsDifferentielles,
  geometrieEspace,
  probabilites,
];
