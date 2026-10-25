import type { LessonModule } from '@/types';
import { decimauxRelatifs } from './01-decimaux-relatifs';
import { nombresRationnels } from './02-nombres-rationnels';
import { rationnelsAddition } from './03-rationnels-addition';
import { rationnelsMultiplication } from './04-rationnels-multiplication';
import { quatreOperations } from './05-quatre-operations';
import { puissances } from './06-puissances';
import { calculLitteral } from './07-calcul-litteral';
import { equations } from './08-equations';
import { ordreOperations } from './09-ordre-operations';
import { symetrieAxiale } from './10-symetrie-axiale';
import { droitesRemarquables } from './11-droites-remarquables';
import { triangleParalleles } from './12-triangle-paralleles';
import { triangleRectangleCercle } from './13-triangle-rectangle-cercle';
import { vecteursTranslation } from './14-vecteurs-translation';

/** Cours de 2AC (un fichier = un cours + ses exercices), dans l'ordre de la progression. */
export const modules2ac: LessonModule[] = [
  decimauxRelatifs,
  nombresRationnels,
  rationnelsAddition,
  rationnelsMultiplication,
  quatreOperations,
  puissances,
  calculLitteral,
  equations,
  ordreOperations,
  symetrieAxiale,
  droitesRemarquables,
  triangleParalleles,
  triangleRectangleCercle,
  vecteursTranslation,
];
