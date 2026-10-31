import type { Exam, Semester } from '@/types';

/** Devoirs surveillés de 2BAC en PDF (sources : content/devoirs/2bac/, corrigé inclus à la fin du fichier). */
const make = (n: 1 | 2, semester: Semester, themes: { ar: string; fr: string }): Exam => ({
  id: `devoir-2bac-ds${n}-s${semester}`,
  levelId: '2bac',
  streams: ['pc', 'svt', 'sa'],
  kind: 'continuous',
  year: 2026,
  semester,
  title: {
    ar: `الفرض المحروس رقم ${n} — الدورة ${semester === 1 ? 'الأولى' : 'الثانية'} (PDF مع التصحيح)`,
    fr: `Devoir surveillé n°${n} — semestre ${semester} (PDF avec corrigé)`,
  },
  durationMinutes: 120,
  source: {
    ar: `فرض نموذجي من إعداد الأستاذ Wihi Mohamed، مع سلم التنقيط والتصحيح المفصل في آخر الملف. المحاور: ${themes.ar}.`,
    fr: `Devoir type rédigé par Prof Wihi Mohamed, avec barème et corrigé détaillé en fin de fichier. Thèmes : ${themes.fr}.`,
  },
  official: false,
  pdfUrl: `/exams/2bac/devoir-2bac-ds${n}-s${semester}.pdf`,
});

export const devoirs2bacPdf: Exam[] = [
  make(1, 1, { ar: 'النهايات والاتصال، الاشتقاق ودراسة الدوال', fr: 'limites et continuité, dérivation et étude de fonctions' }),
  make(2, 1, { ar: 'المتتاليات، الدوال الأصلية، دالة اللوغاريتم', fr: 'suites, primitives, logarithme népérien' }),
  make(1, 2, { ar: 'الأعداد العقدية، الدالة الأسية', fr: 'nombres complexes, fonction exponentielle' }),
  make(2, 2, { ar: 'الحساب التكاملي، المعادلات التفاضلية، الهندسة الفضائية، الاحتمالات', fr: 'calcul intégral, équations différentielles, géométrie dans l’espace, probabilités' }),
];
