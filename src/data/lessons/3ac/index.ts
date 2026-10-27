import type { LessonModule } from '@/types';
import { racinesCarrees } from './01-racines-carrees';
import { identitesPuissances } from './02-identites-puissances';
import { thales } from './03-thales';
import { ordreOperations } from './04-ordre-operations';
import { pythagore } from './05-pythagore';
import { trigonometrie } from './06-trigonometrie';
import { anglesInscrits } from './07-angles-inscrits';
import { trianglesSemblables } from './08-triangles-semblables';
import { equationsInequations } from './09-equations-inequations';
import { vecteursTranslation } from './10-vecteurs-translation';
import { repere } from './11-repere';
import { equationDroite } from './12-equation-droite';
import { systemes } from './13-systemes';
import { fonctions } from './14-fonctions';
import { statistique } from './15-statistique';
import { geometrieEspace } from './16-geometrie-espace';

/** Cours de 3AC (un fichier = un cours + ses exercices), dans l'ordre de la progression. */
export const modules3ac: LessonModule[] = [
  racinesCarrees,
  identitesPuissances,
  thales,
  ordreOperations,
  pythagore,
  trigonometrie,
  anglesInscrits,
  trianglesSemblables,
  equationsInequations,
  vecteursTranslation,
  repere,
  equationDroite,
  systemes,
  fonctions,
  statistique,
  geometrieEspace,
];
