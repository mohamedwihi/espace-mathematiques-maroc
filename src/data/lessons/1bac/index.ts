import type { LessonModule } from '@/types';
import { logique } from './01-logique';
import { generalitesFonctions } from './02-generalites-fonctions';
import { barycentre } from './03-barycentre';
import { produitScalaire } from './04-produit-scalaire';
import { suites } from './05-suites';
import { trigonometrie } from './06-trigonometrie';
import { limites } from './07-limites';
import { rotation } from './08-rotation';
import { derivabilite } from './09-derivabilite';
import { vecteursEspace } from './10-vecteurs-espace';
import { etudeFonctions } from './11-etude-fonctions';
import { geometrieAnalytiqueEspace } from './12-geometrie-analytique-espace';

/** Cours de 1re année bac sciences expérimentales (un fichier = un cours + ses exercices), dans l'ordre de la progression. */
export const modules1bac: LessonModule[] = [
  logique,
  generalitesFonctions,
  barycentre,
  produitScalaire,
  suites,
  trigonometrie,
  limites,
  rotation,
  derivabilite,
  vecteursEspace,
  etudeFonctions,
  geometrieAnalytiqueEspace,
];
