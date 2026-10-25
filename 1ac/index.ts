import type { LessonModule } from '@/types';
import { operationsDecimaux } from './01-entiers-decimaux';
import { ecritureFractionnaire } from './02-ecriture-fractionnaire';
import { operationsFractions } from './03-operations-fractions';
import { nombresRelatifs } from './04-relatifs';
import { relatifsAddition } from './05-relatifs-addition';
import { relatifsMultiplication } from './06-relatifs-multiplication';
import { puissances } from './07-puissances';
import { developpementFactorisation } from './08-developpement-factorisation';
import { equations } from './09-equations';
import { droitesPlan } from './10-droites';
import { angles } from './11-angles';
import { parallelesSecante } from './12-paralleles-secante';
import { triangles } from './13-triangles';
import { symetrieCentrale } from './14-symetrie-centrale';
import { parallelogramme } from './15-parallelogramme';
import { quadrilateres } from './16-quadrilateres';
import { cercle } from './17-cercle';
import { airesPerimetres } from './18-aires-perimetres';
import { prismeCylindre } from './19-prisme-cylindre';

/** Cours de 1AC (un fichier = un cours + ses exercices), dans l'ordre de la progression. */
export const modules1ac: LessonModule[] = [
  operationsDecimaux,
  ecritureFractionnaire,
  operationsFractions,
  nombresRelatifs,
  relatifsAddition,
  relatifsMultiplication,
  puissances,
  developpementFactorisation,
  equations,
  droitesPlan,
  angles,
  parallelesSecante,
  triangles,
  symetrieCentrale,
  parallelogramme,
  quadrilateres,
  cercle,
  airesPerimetres,
  prismeCylindre,
];
