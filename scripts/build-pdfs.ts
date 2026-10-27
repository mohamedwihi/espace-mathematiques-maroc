/**
 * Génère un PDF par cours et par langue (cours + exercices + corrigés) dans public/pdf/<niveau>/,
 * puis la liste src/data/lessonPdfs.generated.ts utilisée par le site.
 *
 * Usage : npx vite-node scripts/build-pdfs.ts [--only <lessonId>] [--level <levelId>]
 * Nécessite Microsoft Edge ou Google Chrome (chemin modifiable avec la variable PDF_BROWSER).
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import katex from 'katex';
import { lessons } from '@/data/lessons';
import { getLevel } from '@/data/levels';
import { activeSocialLinks } from '@/data/social';
import { exercisesForLesson, lessonSemester, unitTitle } from '@/services/content';
import type { Exercise, Lesson, LessonBlock, Localized } from '@/types';

type Lang = 'ar' | 'fr';

const AUTHOR = 'Prof Wihi Mohamed';
const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'public', 'pdf');
const TMP_DIR = path.join(os.tmpdir(), 'emm-pdf-build');
const KATEX_CSS = pathToFileURL(path.join(ROOT, 'node_modules', 'katex', 'dist', 'katex.min.css')).href;

const BROWSERS = [
  process.env.PDF_BROWSER,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter((p): p is string => !!p && fs.existsSync(p));

const T = {
  ar: {
    site: 'فضاء الرياضيات بالمغرب',
    by: 'إعداد',
    semester: 'الدورة',
    objectives: 'أهداف الدرس',
    recap: 'ملخص للمراجعة',
    exercises: 'تمارين تطبيقية',
    corrections: 'تصحيح التمارين',
    exercise: 'تمرين',
    answer: 'الجواب',
    example: 'مثال',
    follow: 'تابعوني على',
    kinds: { definition: 'تعريف', theorem: 'مبرهنة', property: 'خاصية', rule: 'قاعدة', remark: 'ملاحظة', method: 'طريقة' },
  },
  fr: {
    site: 'Espace Mathématiques Maroc',
    by: 'Rédigé par',
    semester: 'Semestre',
    objectives: 'Objectifs du cours',
    recap: 'L’essentiel à retenir',
    exercises: 'Exercices d’application',
    corrections: 'Corrigés des exercices',
    exercise: 'Exercice',
    answer: 'Réponse',
    example: 'Exemple',
    follow: 'Suivez-moi sur',
    kinds: { definition: 'Définition', theorem: 'Théorème', property: 'Propriété', rule: 'Règle', remark: 'Remarque', method: 'Méthode' },
  },
} as const;

const COLORS = { brand: '#0f7a5a', ink: '#2f5d9e', saffron: '#d97706', red: '#dc2626' } as const;

/* ---------------- Texte et formules ---------------- */

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const tex = (src: string, display = false) =>
  katex.renderToString(src, { displayMode: display, throwOnError: false, strict: 'ignore', output: 'html' });

/** Même syntaxe que le site : $...$, $$...$$ et **gras**. */
const TOKEN = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|\*\*[^*\n]+\*\*)/g;

function inline(text: string): string {
  return text
    .split(TOKEN)
    .map((part) => {
      if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) return tex(part.slice(2, -2), true);
      if (part.startsWith('$') && part.endsWith('$') && part.length > 2) return tex(part.slice(1, -1));
      if (part.startsWith('**') && part.endsWith('**') && part.length > 4) return `<strong>${esc(part.slice(2, -2))}</strong>`;
      return esc(part);
    })
    .join('');
}

const block = (text: string) =>
  text
    .split(/\n{2,}/)
    // Les retours à la ligne sont traités avant KaTeX : son SVG (racines) contient des sauts de ligne.
    .map((p) => `<p>${p.split('\n').map(inline).join('<br>')}</p>`)
    .join('');

/* ---------------- Figures (SVG) ---------------- */

type GraphBlock = Extract<LessonBlock, { kind: 'graph' }>;
type GeometryBlock = Extract<LessonBlock, { kind: 'geometry' }>;

function frame(x: [number, number], y: [number, number], uniform: boolean) {
  const W = 520;
  const ratio = (y[1] - y[0]) / (x[1] - x[0]);
  const H = uniform ? Math.min(420, W * ratio) : Math.max(200, Math.min(340, W * ratio));
  const w = uniform && W * ratio > 420 ? 420 / ratio : W;
  const px = (v: number) => ((v - x[0]) / (x[1] - x[0])) * w;
  const py = (v: number) => H - ((v - y[0]) / (y[1] - y[0])) * H;
  return { w, H, px, py };
}

function axes(x: [number, number], y: [number, number], f: ReturnType<typeof frame>) {
  const span = Math.max(x[1] - x[0], y[1] - y[0]);
  const step = span > 30 ? 5 : span > 14 ? 2 : 1;
  const out: string[] = [];
  for (let v = Math.ceil(x[0] / step) * step; v <= x[1]; v += step)
    out.push(`<line x1="${f.px(v)}" y1="0" x2="${f.px(v)}" y2="${f.H}" class="grid"/>`);
  for (let v = Math.ceil(y[0] / step) * step; v <= y[1]; v += step)
    out.push(`<line x1="0" y1="${f.py(v)}" x2="${f.w}" y2="${f.py(v)}" class="grid"/>`);
  if (y[0] <= 0 && y[1] >= 0) out.push(`<line x1="0" y1="${f.py(0)}" x2="${f.w}" y2="${f.py(0)}" class="axis"/>`);
  if (x[0] <= 0 && x[1] >= 0) out.push(`<line x1="${f.px(0)}" y1="0" x2="${f.px(0)}" y2="${f.H}" class="axis"/>`);
  const y0 = Math.min(Math.max(f.py(0), 10), f.H - 4);
  const x0 = Math.min(Math.max(f.px(0), 4), f.w - 14);
  for (let v = Math.ceil(x[0] / step) * step; v <= x[1]; v += step)
    if (v !== 0) out.push(`<text x="${f.px(v)}" y="${y0 + 13}" class="tick" text-anchor="middle">${v}</text>`);
  for (let v = Math.ceil(y[0] / step) * step; v <= y[1]; v += step)
    if (v !== 0) out.push(`<text x="${x0 - 4}" y="${f.py(v) + 4}" class="tick" text-anchor="end">${v}</text>`);
  return out.join('');
}

function pointsSvg(pts: { x: number; y: number; label?: string }[] | undefined, f: ReturnType<typeof frame>) {
  return (pts ?? [])
    .map(
      (p) =>
        `<circle cx="${f.px(p.x)}" cy="${f.py(p.y)}" r="3.6" fill="#1f2937"/>` +
        (p.label ? `<text x="${f.px(p.x) + 6}" y="${f.py(p.y) + 15}" class="plabel">${esc(p.label)}</text>` : ''),
    )
    .join('');
}

function graphSvg(b: GraphBlock): string {
  const f = frame(b.x, b.y, false);
  const parts: string[] = [axes(b.x, b.y, f)];
  if (b.shade) {
    const fn = b.functions[b.shade.index]?.fn;
    if (fn) {
      const pts: string[] = [`${f.px(b.shade.from)},${f.py(0)}`];
      for (let i = 0; i <= 80; i++) {
        const xv = b.shade.from + ((b.shade.to - b.shade.from) * i) / 80;
        pts.push(`${f.px(xv)},${f.py(fn(xv))}`);
      }
      pts.push(`${f.px(b.shade.to)},${f.py(0)}`);
      parts.push(`<polygon points="${pts.join(' ')}" fill="${COLORS.brand}" fill-opacity="0.18"/>`);
    }
  }
  for (const l of b.lines ?? [])
    parts.push(`<line x1="${f.px(l.from[0])}" y1="${f.py(l.from[1])}" x2="${f.px(l.to[0])}" y2="${f.py(l.to[1])}" class="seg${l.dashed ? ' dashed' : ''}"/>`);
  for (const fn of b.functions) {
    const [a, c] = fn.domain ? [Math.max(fn.domain[0], b.x[0]), Math.min(fn.domain[1], b.x[1])] : b.x;
    const margin = (b.y[1] - b.y[0]) * 2;
    let d = '';
    let pen = false;
    for (let i = 0; i <= 600; i++) {
      const xv = a + ((c - a) * i) / 600;
      const yv = fn.fn(xv);
      if (!Number.isFinite(yv) || yv < b.y[0] - margin || yv > b.y[1] + margin) {
        pen = false;
        continue;
      }
      d += `${pen ? 'L' : 'M'}${f.px(xv).toFixed(2)},${f.py(yv).toFixed(2)}`;
      pen = true;
    }
    parts.push(`<path d="${d}" fill="none" stroke="${COLORS[fn.color ?? 'brand']}" stroke-width="2.4"/>`);
  }
  parts.push(pointsSvg(b.points, f));
  const legend = b.functions
    .filter((fn) => fn.label)
    .map((fn) => `<span class="leg"><i style="background:${COLORS[fn.color ?? 'brand']}"></i>${tex(fn.label)}</span>`)
    .join('');
  return figure(f, parts.join(''), legend);
}

function geometrySvg(b: GeometryBlock): string {
  const f = frame(b.x, b.y, true);
  const fills = { brand: COLORS.brand, ink: COLORS.ink, saffron: COLORS.saffron };
  const parts: string[] = [];
  for (const p of b.polygons ?? []) {
    const c = fills[p.color ?? 'brand'];
    parts.push(`<polygon points="${p.points.map(([x, y]) => `${f.px(x)},${f.py(y)}`).join(' ')}" fill="${c}" fill-opacity="0.12" stroke="${c}" stroke-width="2"/>`);
  }
  for (const s of b.segments ?? [])
    parts.push(`<line x1="${f.px(s.from[0])}" y1="${f.py(s.from[1])}" x2="${f.px(s.to[0])}" y2="${f.py(s.to[1])}" class="seg${s.dashed ? ' dashed' : ''}"/>`);
  for (const r of b.rightAngles ?? []) {
    const k = 0.35;
    const a = [r.at[0] + r.u[0] * k, r.at[1] + r.u[1] * k];
    const m = [a[0] + r.v[0] * k, a[1] + r.v[1] * k];
    const c = [r.at[0] + r.v[0] * k, r.at[1] + r.v[1] * k];
    parts.push(`<polyline points="${[a, m, c].map(([x, y]) => `${f.px(x)},${f.py(y)}`).join(' ')}" fill="none" stroke="#1f2937" stroke-width="1.4"/>`);
  }
  parts.push(pointsSvg(b.points, f));
  return figure(f, parts.join(''), '');
}

function figure(f: ReturnType<typeof frame>, inner: string, legend: string) {
  return `<div class="fig"><svg viewBox="-2 -2 ${f.w + 4} ${f.H + 4}" width="${f.w}" height="${f.H}" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="${f.w}" height="${f.H}" fill="#fff"/>${inner}</svg>${legend ? `<div class="legend">${legend}</div>` : ''}</div>`;
}

/* ---------------- Cours ---------------- */

function renderBlock(b: LessonBlock, lang: Lang): string {
  const L = (x: Localized) => x[lang];
  const caption = (c?: Localized) => (c ? `<p class="caption">${inline(L(c))}</p>` : '');
  switch (b.kind) {
    case 'text':
      return `<div class="text">${block(L(b.content))}</div>`;
    case 'list':
      return `<ul class="list">${b.items.map((i) => `<li>${inline(L(i))}</li>`).join('')}</ul>`;
    case 'formula':
      return `<div class="formula">${tex(b.tex, true)}${caption(b.caption)}</div>`;
    case 'example':
      return `<div class="box example"><p class="box-title">${esc(T[lang].example)}${b.title ? ` — ${inline(L(b.title))}` : ''}</p>${block(L(b.statement))}<ol class="steps">${b.steps.map((s) => `<li>${inline(L(s))}</li>`).join('')}</ol></div>`;
    case 'graph':
      return `${graphSvg(b)}${caption(b.caption)}`;
    case 'geometry':
      return `${geometrySvg(b)}${caption(b.caption)}`;
    default:
      return `<div class="box ${b.kind}"><p class="box-title">${esc(T[lang].kinds[b.kind])}${b.title ? ` — ${inline(L(b.title))}` : ''}</p>${block(L(b.content))}</div>`;
  }
}

const letters = { ar: ['أ', 'ب', 'ج', 'د', 'هـ'], fr: ['a', 'b', 'c', 'd', 'e'] };

function formatNumber(n: number, lang: Lang) {
  const s = Number.isInteger(n) ? String(n) : String(Math.round(n * 1000) / 1000);
  return lang === 'fr' ? s.replace('.', ',') : s.replace('.', '{,}');
}

function renderExercise(e: Exercise, i: number, lang: Lang): string {
  const L = (x: Localized) => x[lang];
  const options =
    e.question.type === 'mcq'
      ? `<ol class="mcq">${e.question.options.map((o, k) => `<li><b>${letters[lang][k]})</b> ${inline(L(o))}</li>`).join('')}</ol>`
      : '';
  return `<div class="exo"><p class="exo-title">${esc(T[lang].exercise)} ${i + 1} : ${inline(L(e.title))}</p>${block(L(e.statement))}${options}</div>`;
}

function renderCorrection(e: Exercise, i: number, lang: Lang): string {
  const L = (x: Localized) => x[lang];
  const q = e.question;
  const answer =
    q.type === 'mcq'
      ? `<b>${letters[lang][q.correct]})</b> ${inline(L(q.options[q.correct]))}`
      : q.type === 'numeric'
        ? tex(`${formatNumber(q.answer, lang)}${q.unit === '°' ? '^\\circ' : q.unit ? `\\ \\text{${q.unit}}` : ''}`)
        : '';
  return `<div class="exo corr"><p class="exo-title">${esc(T[lang].exercise)} ${i + 1} : ${inline(L(e.title))}</p><ol class="steps">${e.solution.map((s) => `<li>${inline(L(s))}</li>`).join('')}</ol>${answer ? `<p class="answer">${esc(T[lang].answer)} : ${answer}</p>` : ''}</div>`;
}

/** Liens sociaux (isolés en LTR pour ne pas être réordonnés dans le texte arabe). */
function socialHtml(lang: Lang, withLabel = true) {
  const handle = (url: string) => url.replace(/^https?:\/\/(www\.)?[^/]+\//, '').replace(/\/$/, '');
  const links = activeSocialLinks
    .map((s) => `<a href="${esc(s.url)}"><b>${esc(s.label)}</b> ${esc(handle(s.url))}</a>`)
    .join('<span class="sep">·</span>');
  return `${withLabel ? `<span class="follow">${esc(T[lang].follow)} :</span> ` : ''}<span dir="ltr" style="unicode-bidi:isolate">${links}</span>`;
}

function renderLesson(lesson: Lesson, lang: Lang): string {
  const L = (x: Localized) => x[lang];
  const t = T[lang];
  const level = getLevel(lesson.levelId)!;
  const unit = unitTitle(lesson);
  const semester = lessonSemester(lesson);
  const exos = exercisesForLesson(lesson.id);
  const meta = [`<span dir="ltr">${esc(level.code)}</span> — ${esc(L(level.name))}`, unit ? esc(L(unit)) : '', semester ? `${t.semester} ${semester}` : '']
    .filter(Boolean)
    .join('<span class="sep">|</span>');

  const sections = lesson.sections
    .map((s, i) => `<section><h2><span class="num">${i + 1}.</span> ${inline(L(s.title))}</h2>${s.blocks.map((b) => renderBlock(b, lang)).join('')}</section>`)
    .join('');

  const exercisesHtml = exos.length
    ? `<section class="page-break"><h2 class="band">${esc(t.exercises)}</h2>${exos.map((e, i) => renderExercise(e, i, lang)).join('')}</section>
       <section class="corrections"><h2 class="band">${esc(t.corrections)}</h2>${exos.map((e, i) => renderCorrection(e, i, lang)).join('')}</section>`
    : '';

  const fonts =
    lang === 'ar'
      ? "'IBM Plex Sans Arabic', 'Segoe UI', Tahoma, sans-serif"
      : "Inter, 'Segoe UI', Arial, sans-serif";

  return `<!doctype html>
<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
<head>
<meta charset="utf-8">
<title>${esc(L(lesson.title))} — ${AUTHOR}</title>
<link rel="stylesheet" href="${KATEX_CSS}">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;600;700&family=Inter:wght@400;600;700&family=Readex+Pro:wght@600;700&display=swap">
<style>
  @page { size: A4; margin: 14mm 14mm 10mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: ${fonts}; font-size: 11.5pt; line-height: 1.75; color: #1f2937; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .katex { font-size: 1.08em; direction: ltr; unicode-bidi: isolate; white-space: nowrap; }
  .katex-display { margin: .4em 0; }
  table.layout { width: 100%; border-collapse: collapse; }
  table.layout td { padding: 0; }
  .footer-space { height: 16mm; }
  .footer { position: fixed; bottom: 0; left: 0; right: 0; height: 11mm; border-top: 1.5px solid #0f7a5a; padding-top: 2mm; font-size: 8.5pt; color: #374151; display: flex; justify-content: space-between; align-items: center; gap: 8px; }
  .footer .author { font-weight: 700; color: #0f7a5a; white-space: nowrap; }
  .footer a { color: #374151; text-decoration: none; }
  .sep { color: #9ca3af; margin: 0 6px; }
  .follow { color: #6b7280; }
  .banner { background: linear-gradient(135deg, #0b5d45, #0f7a5a 60%, #129a71); color: #fff; border-radius: 14px; padding: 16px 20px 18px; margin-bottom: 14px; }
  .banner .top { display: flex; justify-content: space-between; align-items: center; font-size: 9.5pt; opacity: .95; }
  .banner .author { font-family: 'Readex Pro', ${fonts}; font-weight: 700; font-size: 12pt; background: rgba(255,255,255,.16); padding: 2px 12px; border-radius: 999px; }
  .banner h1 { font-family: 'Readex Pro', ${fonts}; margin: 8px 0 2px; font-size: 22pt; line-height: 1.3; }
  .banner .meta { font-size: 10pt; opacity: .95; }
  .banner .social { margin-top: 8px; font-size: 9pt; }
  .banner .social a { color: #fff; text-decoration: none; }
  .banner .social .follow, .banner .sep { color: #d1fae5; }
  .summary { font-size: 11.5pt; color: #374151; }
  .objectives { border: 1.5px solid #a7f3d0; background: #ecfdf5; border-radius: 10px; padding: 8px 14px; margin: 10px 0 14px; }
  .objectives h3, .recap h3 { margin: 0 0 4px; font-size: 12pt; color: #065f46; }
  .objectives ul, .recap ul { margin: 0; padding-inline-start: 20px; }
  h2 { font-family: 'Readex Pro', ${fonts}; font-size: 15pt; color: #0b5d45; margin: 18px 0 8px; break-after: avoid; }
  h2 .num { color: #d97706; }
  h2.band { background: #0f7a5a; color: #fff; padding: 4px 14px; border-radius: 8px; font-size: 14pt; }
  p { margin: 0 0 6px; }
  .box { border-inline-start: 4px solid #2f5d9e; background: #f3f6fb; border-radius: 8px; padding: 8px 14px; margin: 8px 0; break-inside: avoid; }
  .box.theorem, .box.property, .box.rule { border-color: #0f7a5a; background: #effaf5; }
  .box.remark { border-color: #d97706; background: #fff8eb; }
  .box.method { border-color: #6b7280; background: #fafafa; }
  .box.example { border-color: #d97706; background: #fffdf7; border: 1px dashed #f0b45b; border-inline-start: 4px solid #d97706; }
  .box-title { font-weight: 700; color: #111827; margin-bottom: 4px; }
  .list { margin: 6px 0; padding-inline-start: 22px; }
  .list li { margin-bottom: 4px; }
  .steps { margin: 4px 0; padding-inline-start: 22px; }
  .steps li, .objectives li, .recap li { margin: 5px 0; }
  .fig { margin: 10px auto 4px; text-align: center; break-inside: avoid; }
  .fig > svg { border: 1px solid #e5e7eb; border-radius: 8px; max-width: 100%; height: auto; }
  .grid { stroke: #eef0f3; stroke-width: 1; }
  .axis { stroke: #6b7280; stroke-width: 1.3; }
  .tick { font: 10px Inter, Arial, sans-serif; fill: #6b7280; }
  .plabel { font: 600 12.5px Inter, Arial, sans-serif; fill: #111827; }
  .seg { stroke: #1f2937; stroke-width: 1.6; }
  .dashed { stroke-dasharray: 5 4; }
  .legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px 18px; margin-top: 4px; font-size: 10pt; direction: ltr; }
  .leg i { display: inline-block; width: 18px; height: 3px; border-radius: 2px; vertical-align: middle; margin-inline-end: 6px; }
  .caption { text-align: center; font-size: 10pt; color: #4b5563; margin: 2px 0 10px; }
  .recap { border: 1.5px solid #fcd34d; background: #fffbeb; border-radius: 10px; padding: 8px 14px; margin-top: 16px; break-inside: avoid; }
  .page-break { break-before: page; }
  .exo { border: 1px solid #e5e7eb; border-radius: 10px; padding: 8px 14px; margin: 8px 0; break-inside: avoid; }
  .exo-title { font-weight: 700; color: #0b5d45; }
  .corr { background: #f9fafb; }
  .mcq { list-style: none; padding: 0; margin: 4px 0 0; display: flex; flex-wrap: wrap; gap: 4px 22px; }
  .answer { font-weight: 600; color: #065f46; margin-top: 4px; }
  .corrections { margin-top: 16px; }
</style>
</head>
<body>
<div class="footer"><span class="author" dir="ltr">${AUTHOR}</span><span>${socialHtml(lang, false)}</span><span dir="ltr">${esc(level.code)}</span></div>
<table class="layout"><tbody><tr><td>
  <header class="banner">
    <div class="top"><span>${esc(t.site)}</span><span class="author">${esc(t.by)} : <span dir="ltr">${AUTHOR}</span></span></div>
    <h1>${inline(L(lesson.title))}</h1>
    <div class="meta">${meta}</div>
    <div class="social">${socialHtml(lang)}</div>
  </header>
  <div class="summary">${block(L(lesson.summary))}</div>
  <div class="objectives"><h3>${esc(t.objectives)}</h3><ul>${lesson.objectives.map((o) => `<li>${inline(L(o))}</li>`).join('')}</ul></div>
  ${sections}
  <div class="recap"><h3>${esc(t.recap)}</h3><ul>${lesson.recap.map((r) => `<li>${inline(L(r))}</li>`).join('')}</ul></div>
  ${exercisesHtml}
</td></tr></tbody><tfoot><tr><td><div class="footer-space"></div></td></tr></tfoot></table>
</body>
</html>`;
}

/* ---------------- Impression ---------------- */

function arg(name: string) {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : undefined;
}

function main() {
  if (!BROWSERS.length) throw new Error('Microsoft Edge ou Google Chrome introuvable (définir PDF_BROWSER).');
  const browser = BROWSERS[0];
  const only = arg('--only');
  const levelFilter = arg('--level');
  const selected = lessons.filter((l) => (!only || l.id === only) && (!levelFilter || l.levelId === levelFilter));
  fs.mkdirSync(TMP_DIR, { recursive: true });
  const profile = path.join(TMP_DIR, 'profile');

  let done = 0;
  for (const lesson of selected) {
    for (const lang of ['ar', 'fr'] as const) {
      const html = path.join(TMP_DIR, `${lesson.id}-${lang}.html`);
      const outDir = path.join(OUT_DIR, lesson.levelId);
      const out = path.join(outDir, `${lesson.id}-${lang}.pdf`);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(html, renderLesson(lesson, lang), 'utf8');
      execFileSync(
        browser,
        [
          '--headless=new',
          '--disable-gpu',
          '--no-first-run',
          `--user-data-dir=${profile}`,
          '--no-pdf-header-footer',
          '--virtual-time-budget=8000',
          `--print-to-pdf=${out}`,
          pathToFileURL(html).href,
        ],
        { stdio: 'ignore', timeout: 120_000 },
      );
      if (!fs.existsSync(out)) throw new Error(`PDF non généré : ${out}`);
      done++;
      console.log(`✓ ${path.relative(ROOT, out)} (${Math.round(fs.statSync(out).size / 1024)} Ko)`);
    }
  }
  writeManifest();
  console.log(`\n${done} PDF générés.`);
}

/** Liste des cours disposant d'un PDF dans les deux langues (lue par le site). */
function writeManifest() {
  const ids = lessons
    .filter((l) => (['ar', 'fr'] as const).every((lang) => fs.existsSync(path.join(OUT_DIR, l.levelId, `${l.id}-${lang}.pdf`))))
    .map((l) => l.id);
  const body = `// Fichier généré par scripts/build-pdfs.ts — ne pas modifier à la main.\nexport const lessonPdfIds: ReadonlySet<string> = new Set([\n${ids.map((id) => `  '${id}',`).join('\n')}\n]);\n`;
  fs.writeFileSync(path.join(ROOT, 'src', 'data', 'lessonPdfs.generated.ts'), body, 'utf8');
}

main();
