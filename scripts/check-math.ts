/**
 * Vérifie la notation mathématique de tout le contenu (cours, exercices, devoirs).
 * Usage : npx vite-node scripts/check-math.ts
 */
import katex from 'katex';
import { lessons } from '@/data/lessons';
import { exercises } from '@/data/exercises';
import { exams } from '@/data/exams';

interface Issue {
  where: string;
  kind: string;
  detail: string;
}

const issues: Issue[] = [];
const MATH = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;

function checkTex(where: string, tex: string) {
  try {
    // Les lettres arabes dans \text{} sont acceptées (KaTeX les affiche avec la police du texte).
    katex.renderToString(tex, { throwOnError: true, strict: (code: string) => (code === 'unknownSymbol' ? 'ignore' : 'error') });
  } catch (e) {
    issues.push({ where, kind: 'katex', detail: `${(e as Error).message.slice(0, 140)} :: ${tex}` });
  }
  // Virgule décimale non protégée : KaTeX ajoute une espace après la virgule (« 0, 5 »).
  if (/\d,\d/.test(tex.replace(/_\{[^}]*\}/g, ''))) issues.push({ where, kind: 'virgule', detail: tex });
}

function checkText(where: string, text: string) {
  const dollars = (text.replace(/\\\$/g, '').match(/\$/g) ?? []).length;
  if (dollars % 2) issues.push({ where, kind: 'dollar', detail: text });
  for (const m of text.matchAll(MATH)) checkTex(where, m[1] ?? m[2]);
  const plain = text.replace(MATH, ' ').replace(/\*\*/g, '');
  const bad = plain.match(/[A-Za-z0-9)]\^|\bsqrt\b|<=|>=|!=|\\[a-zA-Z]+|\b[a-z]\s*\*\s*[a-z0-9]|[a-z]_\d/);
  if (bad) issues.push({ where, kind: 'hors-math', detail: `« ${bad[0]} » dans : ${plain.trim().slice(0, 160)}` });
}

/** Parcourt récursivement un objet et vérifie chaque texte localisé. */
function walk(where: string, value: unknown) {
  if (typeof value === 'string') return;
  if (Array.isArray(value)) return value.forEach((v, i) => walk(`${where}[${i}]`, v));
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    if (typeof obj.ar === 'string' && typeof obj.fr === 'string') {
      checkText(`${where}.ar`, obj.ar);
      checkText(`${where}.fr`, obj.fr);
      return;
    }
    // Les étiquettes de points des figures sont du texte brut (pas de TeX).
    const isPoint = typeof obj.x === 'number' && typeof obj.y === 'number';
    for (const [k, v] of Object.entries(obj)) {
      if (k === 'label' && typeof v === 'string' && isPoint && /[_^\\$]/.test(v)) issues.push({ where, kind: 'etiquette', detail: v });
      else if (k === 'label' && typeof v === 'string' && v && !isPoint) checkTex(`${where}.label`, v);
      else walk(`${where}.${k}`, v);
    }
  }
}

for (const l of lessons) walk(l.id, l);
for (const e of exercises) walk(e.id, e);
for (const x of exams) walk(x.id, x);

const byKind = new Map<string, Issue[]>();
for (const i of issues) byKind.set(i.kind, [...(byKind.get(i.kind) ?? []), i]);
for (const [kind, list] of byKind) {
  console.log(`\n=== ${kind} (${list.length}) ===`);
  for (const i of list) console.log(`${i.where}\n    ${i.detail}`);
}
console.log(`\nTotal : ${issues.length} problème(s).`);
process.exitCode = issues.length ? 1 : 0;
