import type { LessonModule } from '@/types';
import { arithmetique } from './01-arithmetique';
import { calculVectoriel } from './02-calcul-vectoriel';
import { projection } from './03-projection';
import { ensemblesNombres } from './04-ensembles-nombres';
import { ordre } from './05-ordre';
import { droite } from './06-droite';
import { polynomes } from './07-polynomes';
import { equationsSystemes } from './08-equations-systemes';
import { trigonometrie1 } from './09-trigonometrie-1';
import { trigonometrie2 } from './10-trigonometrie-2';
import { generalitesFonctions } from './11-fonctions';
import { transformations } from './12-transformations';
import { produitScalaire } from './13-produit-scalaire';
import { statistiques } from './14-statistiques';
import { geometrieEspace } from './15-geometrie-espace';

/** Cours du tronc commun scientifique (un fichier = un cours + ses exercices), dans l'ordre de la progression. */
export const modulesTc: LessonModule[] = [
  arithmetique,
  calculVectoriel,
  projection,
  ensemblesNombres,
  ordre,
  droite,
  polynomes,
  equationsSystemes,
  trigonometrie1,
  trigonometrie2,
  generalitesFonctions,
  transformations,
  produitScalaire,
  statistiques,
  geometrieEspace,
];
