import type { Exam } from '@/types';

/**
 * Sujets du bac dont le corrigé a été rédigé par le professeur
 * (sources dans content/corriges/bac/, PDF générés avec : npm run cours -- --src content/corriges --out public/exams).
 */
const CORRECTED = new Set(
  [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013].flatMap((y) => [`bac-sx-${y}-normale`, `bac-sx-${y}-rattrapage`]),
);

/** Ajoute le lien du corrigé PDF et précise la source pour les sujets corrigés. */
export function withCorrections(list: Exam[]): Exam[] {
  return list.map((e) =>
    CORRECTED.has(e.id)
      ? {
          ...e,
          correctionPdfUrl: `/exams/bac/${e.id}-corrige.pdf`,
          source: {
            ar: e.source.ar.replace('التصحيح غير منشور.', 'التصحيح من إعداد الأستاذ Wihi Mohamed.'),
            fr: e.source.fr.replace('Corrigé non publié.', 'Corrigé rédigé par Prof Wihi Mohamed.'),
          },
        }
      : e,
  );
}
