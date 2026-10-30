/**
 * Cours complets en PDF (français), rédigés dans content/cours/<niveau>/*.md.
 * Chaque fichier est vérifié (formules KaTeX) puis imprimé en PDF dans public/cours/<niveau>/<id>.pdf ;
 * la liste des cours disponibles est écrite dans src/data/coursePdfs.generated.ts.
 *
 * Usage : npm run cours [-- --only <id>] [-- --level <niveau>] [-- --check]
 * Nécessite Microsoft Edge ou Google Chrome (chemin modifiable avec la variable PDF_BROWSER).
 *
 * Format des fichiers .md :
 *   en-tête « --- » (id, titre, niveau, semestre, duree), puis
 *   « ## Objectifs » / « ## Prérequis » (listes), « # Partie », « ## Sous-partie »,
 *   « :::type Titre facultatif » … « ::: » (definition, propriete, theoreme, regle, remarque,
 *   methode, exemple, demonstration, vocabulaire, exercice, corrige), listes « - » et « 1. »,
 *   tableaux « | a | b | », formules « $...$ » et « $$...$$ », figures « ```figure » (JSON),
 *   « @@saut » pour un saut de page.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import katex from 'katex';
import { getLevel } from '@/data/levels';
import { activeSocialLinks } from '@/data/social';

const AUTHOR = 'Prof Wihi Mohamed';
const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'content', 'cours');
const OUT_DIR = path.join(ROOT, 'public', 'cours');
const TMP_DIR = path.join(os.tmpdir(), 'emm-cours-build');
const KATEX_CSS = pathToFileURL(path.join(ROOT, 'node_modules', 'katex', 'dist', 'katex.min.css')).href;
const COLORS: Record<string, string> = { brand: '#0f7a5a', ink: '#2f5d9e', saffron: '#d97706', red: '#dc2626' };

const BOX_LABELS: Record<string, string> = {
  definition: 'Définition',
  propriete: 'Propriété',
  theoreme: 'Théorème',
  regle: 'Règle',
  remarque: 'Remarque',
  methode: 'Méthode',
  exemple: 'Exemple',
  demonstration: 'Démonstration',
  vocabulaire: 'Vocabulaire',
  exercice: 'Exercice',
  corrige: 'Corrigé de l’exercice',
};

/* ---------------- Vérification et rendu des formules ---------------- */

let currentFile = '';
const problems: string[] = [];

function tex(src: string, display = false): string {
  try {
    katex.renderToString(src, { displayMode: display, throwOnError: true, strict: (c: string) => (c === 'unknownSymbol' ? 'ignore' : 'error') });
  } catch (e) {
    problems.push(`${currentFile} : ${(e as Error).message.split('\n')[0]} — « ${src} »`);
  }
  if (/\d,\d/.test(src.replace(/_\{[^}]*\}/g, ''))) problems.push(`${currentFile} : virgule non protégée (écrire {,}) — « ${src} »`);
  // Les SVG de KaTeX (racines…) contiennent des sauts de ligne : on les retire pour ne rien casser.
  return katex
    .renderToString(src, { displayMode: display, throwOnError: false, strict: 'ignore', output: 'html' })
    .replace(/\n/g, ' ');
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const TOKEN = /(\$\$[\s\S]+?\$\$|\$[^$]+?\$|\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g;

function inline(text: string): string {
  return text
    .split(TOKEN)
    .map((p) => {
      if (p.startsWith('$$') && p.endsWith('$$') && p.length > 4) return tex(p.slice(2, -2), true);
      if (p.startsWith('$') && p.endsWith('$') && p.length > 2) return tex(p.slice(1, -1));
      if (p.startsWith('**') && p.endsWith('**') && p.length > 4) return `<strong>${inline(p.slice(2, -2))}</strong>`;
      if (p.startsWith('*') && p.endsWith('*') && p.length > 2) return `<em>${esc(p.slice(1, -1))}</em>`;
      return esc(p);
    })
    .join('');
}

/* ---------------- Figures ---------------- */

interface Fig {
  type: 'graph' | 'geometry';
  x: [number, number];
  y: [number, number];
  functions?: { fn: string; label?: string; color?: string; domain?: [number, number] }[];
  points?: { x: number; y: number; label?: string }[];
  segments?: { from: [number, number]; to: [number, number]; dashed?: boolean; color?: string }[];
  polygons?: { points: [number, number][]; color?: string; fill?: boolean }[];
  circles?: { c: [number, number]; r: number; color?: string }[];
  rightAngles?: { at: [number, number]; u: [number, number]; v: [number, number] }[];
  shade?: { index: number; from: number; to: number };
  caption?: string;
  width?: number;
  /** Graphique avec la même unité sur les deux axes (angles droits visibles). */
  orthonormal?: boolean;
}

function compile(expr: string): (x: number) => number {
  // Contenu rédigé par nous-mêmes : expressions mathématiques simples en JavaScript.
  return new Function('x', `const {sqrt,abs,sin,cos,tan,exp,log,PI,pow,floor}=Math; return (${expr});`) as (x: number) => number;
}

function figure(f: Fig): string {
  const W = f.width ?? 480;
  const ratio = (f.y[1] - f.y[0]) / (f.x[1] - f.x[0]);
  const uniform = f.type === 'geometry' || !!f.orthonormal;
  let w = W;
  let H = uniform ? W * ratio : Math.max(200, Math.min(330, W * ratio));
  if (uniform && H > 380) {
    H = 380;
    w = H / ratio;
  }
  const px = (v: number) => ((v - f.x[0]) / (f.x[1] - f.x[0])) * w;
  const py = (v: number) => H - ((v - f.y[0]) / (f.y[1] - f.y[0])) * H;
  const out: string[] = [];
  if (f.type === 'graph') {
    const span = Math.max(f.x[1] - f.x[0], f.y[1] - f.y[0]);
    const step = span > 30 ? 5 : span > 14 ? 2 : 1;
    for (let v = Math.ceil(f.x[0] / step) * step; v <= f.x[1]; v += step) out.push(`<line x1="${px(v)}" y1="0" x2="${px(v)}" y2="${H}" class="grid"/>`);
    for (let v = Math.ceil(f.y[0] / step) * step; v <= f.y[1]; v += step) out.push(`<line x1="0" y1="${py(v)}" x2="${w}" y2="${py(v)}" class="grid"/>`);
    if (f.y[0] <= 0 && f.y[1] >= 0) out.push(`<line x1="0" y1="${py(0)}" x2="${w}" y2="${py(0)}" class="axis"/>`);
    if (f.x[0] <= 0 && f.x[1] >= 0) out.push(`<line x1="${px(0)}" y1="0" x2="${px(0)}" y2="${H}" class="axis"/>`);
    const ay = Math.min(Math.max(py(0), 10), H - 4);
    const ax = Math.min(Math.max(px(0), 4), w - 14);
    for (let v = Math.ceil(f.x[0] / step) * step; v <= f.x[1]; v += step) if (v) out.push(`<text x="${px(v)}" y="${ay + 13}" class="tick" text-anchor="middle">${v}</text>`);
    for (let v = Math.ceil(f.y[0] / step) * step; v <= f.y[1]; v += step) if (v) out.push(`<text x="${ax - 4}" y="${py(v) + 4}" class="tick" text-anchor="end">${v}</text>`);
  }
  if (f.shade && f.functions?.[f.shade.index]) {
    const fn = compile(f.functions[f.shade.index].fn);
    const pts = [`${px(f.shade.from)},${py(0)}`];
    for (let i = 0; i <= 80; i++) {
      const xv = f.shade.from + ((f.shade.to - f.shade.from) * i) / 80;
      pts.push(`${px(xv)},${py(fn(xv))}`);
    }
    pts.push(`${px(f.shade.to)},${py(0)}`);
    out.push(`<polygon points="${pts.join(' ')}" fill="${COLORS.brand}" fill-opacity="0.18"/>`);
  }
  for (const p of f.polygons ?? []) {
    const c = COLORS[p.color ?? 'brand'];
    out.push(`<polygon points="${p.points.map(([a, b]) => `${px(a)},${py(b)}`).join(' ')}" fill="${c}" fill-opacity="${p.fill === false ? 0 : 0.1}" stroke="${c}" stroke-width="2"/>`);
  }
  for (const c of f.circles ?? []) {
    const r = (c.r / (f.x[1] - f.x[0])) * w;
    out.push(`<circle cx="${px(c.c[0])}" cy="${py(c.c[1])}" r="${r}" fill="none" stroke="${COLORS[c.color ?? 'saffron']}" stroke-width="2"/>`);
  }
  for (const s of f.segments ?? [])
    out.push(`<line x1="${px(s.from[0])}" y1="${py(s.from[1])}" x2="${px(s.to[0])}" y2="${py(s.to[1])}" stroke="${s.color ? COLORS[s.color] : '#1f2937'}" stroke-width="1.7"${s.dashed ? ' stroke-dasharray="5 4"' : ''}/>`);
  for (const r of f.rightAngles ?? []) {
    const k = (f.x[1] - f.x[0]) / 28;
    const a = [r.at[0] + r.u[0] * k, r.at[1] + r.u[1] * k];
    const m = [a[0] + r.v[0] * k, a[1] + r.v[1] * k];
    const c = [r.at[0] + r.v[0] * k, r.at[1] + r.v[1] * k];
    out.push(`<polyline points="${[a, m, c].map(([x, y]) => `${px(x)},${py(y)}`).join(' ')}" fill="none" stroke="#1f2937" stroke-width="1.3"/>`);
  }
  for (const fn of f.functions ?? []) {
    const g = compile(fn.fn);
    const [a, c] = fn.domain ? [Math.max(fn.domain[0], f.x[0]), Math.min(fn.domain[1], f.x[1])] : f.x;
    const margin = (f.y[1] - f.y[0]) * 2;
    let d = '';
    let pen = false;
    for (let i = 0; i <= 600; i++) {
      const xv = a + ((c - a) * i) / 600;
      const yv = g(xv);
      if (!Number.isFinite(yv) || yv < f.y[0] - margin || yv > f.y[1] + margin) {
        pen = false;
        continue;
      }
      d += `${pen ? 'L' : 'M'}${px(xv).toFixed(2)},${py(yv).toFixed(2)}`;
      pen = true;
    }
    out.push(`<path d="${d}" fill="none" stroke="${COLORS[fn.color ?? 'brand']}" stroke-width="2.3"/>`);
  }
  for (const p of f.points ?? []) {
    out.push(`<circle cx="${px(p.x)}" cy="${py(p.y)}" r="3.4" fill="#1f2937"/>`);
    if (p.label) out.push(`<text x="${px(p.x) + 6}" y="${py(p.y) - 6}" class="plabel">${esc(p.label)}</text>`);
  }
  const legend = (f.functions ?? [])
    .filter((fn) => fn.label)
    .map((fn) => `<span class="leg"><i style="background:${COLORS[fn.color ?? 'brand']}"></i>${tex(fn.label!)}</span>`)
    .join('');
  return `<figure class="fig"><svg viewBox="-12 -12 ${w + 24} ${H + 24}" width="${w + 24}" height="${H + 24}" xmlns="http://www.w3.org/2000/svg" overflow="visible">${out.join('')}</svg>${legend ? `<div class="legend">${legend}</div>` : ''}${f.caption ? `<figcaption>${inline(f.caption)}</figcaption>` : ''}</figure>`;
}

/* ---------------- Analyse du texte ---------------- */

interface Meta {
  id: string;
  titre: string;
  niveau: string;
  semestre?: string;
  duree?: string;
}

/** Convertit une suite de lignes (hors boîtes) en HTML : paragraphes, listes, tableaux, formules, figures. */
function blocks(lines: string[]): string {
  const html: string[] = [];
  let para: string[] = [];
  const flush = () => {
    if (para.length) html.push(`<p>${inline(para.join(' '))}</p>`);
    para = [];
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      flush();
      continue;
    }
    if (line.startsWith('```figure')) {
      flush();
      const body: string[] = [];
      while (++i < lines.length && !lines[i].trim().startsWith('```')) body.push(lines[i]);
      html.push(figure(JSON.parse(body.join('\n')) as Fig));
      continue;
    }
    if (line.startsWith('$$')) {
      flush();
      const body = [line.slice(2)];
      while (!body.join(' ').trimEnd().endsWith('$$') && ++i < lines.length) body.push(lines[i].trim());
      html.push(`<div class="dmath">${tex(body.join(' ').trim().replace(/\$\$$/, ''), true)}</div>`);
      continue;
    }
    if (/^(- |\d+\. )/.test(line)) {
      flush();
      const ordered = /^\d+\. /.test(line);
      const items: string[] = [];
      for (; i < lines.length && /^\s*(- |\d+\. )/.test(lines[i]); i++) items.push(lines[i].trim().replace(/^(- |\d+\. )/, ''));
      i--;
      html.push(`<${ordered ? 'ol' : 'ul'}>${items.map((it) => `<li>${inline(it)}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`);
      continue;
    }
    if (line.startsWith('|')) {
      flush();
      const rows: string[][] = [];
      for (; i < lines.length && lines[i].trim().startsWith('|'); i++) {
        const cells = lines[i].trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
        if (!cells.every((c) => /^:?-+:?$/.test(c))) rows.push(cells);
      }
      i--;
      const [head, ...body] = rows;
      html.push(
        `<table class="tab"><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${body
          .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`)
          .join('')}</tbody></table>`,
      );
      continue;
    }
    para.push(line);
  }
  flush();
  return html.join('');
}

function parse(file: string): { meta: Meta; objectifs: string[]; prerequis: string[]; body: string; exercices: number } {
  currentFile = path.relative(ROOT, file);
  const text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) throw new Error(`${currentFile} : en-tête manquant`);
  const meta = Object.fromEntries(fm[1].split('\n').map((l) => [l.slice(0, l.indexOf(':')).trim(), l.slice(l.indexOf(':') + 1).trim()])) as unknown as Meta;
  const lines = text.slice(fm[0].length).split('\n');

  const objectifs: string[] = [];
  const prerequis: string[] = [];
  const html: string[] = [];
  let buffer: string[] = [];
  let exo = 0;
  let corr = 0;
  let sec = 0;
  const flush = () => {
    html.push(blocks(buffer));
    buffer = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();
    if (/^## (Objectifs|Prérequis)/.test(t)) {
      flush();
      const target = t.includes('Objectifs') ? objectifs : prerequis;
      while (i + 1 < lines.length && (lines[i + 1].trim().startsWith('- ') || !lines[i + 1].trim())) {
        i++;
        if (lines[i].trim()) target.push(lines[i].trim().slice(2));
        if (!lines[i].trim() && i + 1 < lines.length && !lines[i + 1].trim().startsWith('- ')) break;
      }
      continue;
    }
    if (t === '@@saut') {
      flush();
      html.push('<div class="pb"></div>');
      continue;
    }
    if (t.startsWith('# ')) {
      flush();
      sec++;
      const title = t.slice(2);
      const band = /^(Exercices|Corrigés)/.test(title);
      html.push(band ? `<h2 class="band${title.startsWith('Exercices') ? ' pbefore' : ''}">${inline(title)}</h2>` : `<h2>${inline(title)}</h2>`);
      continue;
    }
    if (t.startsWith('## ')) {
      flush();
      html.push(`<h3>${inline(t.slice(3))}</h3>`);
      continue;
    }
    if (t.startsWith(':::') && t !== ':::') {
      flush();
      const [, type, title = ''] = t.match(/^:::(\w+)\s*(.*)$/) ?? [];
      if (!BOX_LABELS[type]) throw new Error(`${currentFile} : type de boîte inconnu « ${type} »`);
      const body: string[] = [];
      while (++i < lines.length && lines[i].trim() !== ':::') body.push(lines[i]);
      let label = BOX_LABELS[type];
      if (type === 'exercice') label += ` ${++exo}`;
      if (type === 'corrige') label += ` ${++corr}`;
      html.push(`<div class="box ${type}"><p class="box-title">${label}${title ? ` — ${inline(title)}` : ''}</p>${blocks(body)}</div>`);
      continue;
    }
    buffer.push(line);
  }
  flush();
  if (exo !== corr) problems.push(`${currentFile} : ${exo} exercice(s) mais ${corr} corrigé(s)`);
  if (!sec) problems.push(`${currentFile} : aucune partie`);
  return { meta, objectifs, prerequis, body: html.join('\n'), exercices: exo };
}

/* ---------------- Page ---------------- */

function socialHtml() {
  const handle = (url: string) => url.replace(/^https?:\/\/(www\.)?[^/]+\//, '').replace(/\/$/, '');
  return activeSocialLinks.map((s) => `<a href="${s.url}"><b>${s.label}</b> ${handle(s.url)}</a>`).join('<span class="sep">·</span>');
}

function page(c: ReturnType<typeof parse>): string {
  const level = getLevel(c.meta.niveau);
  const meta = [level ? `${level.code} — ${level.name.fr}` : c.meta.niveau, c.meta.semestre ? `Semestre ${c.meta.semestre}` : '', c.meta.duree ? `Durée : ${c.meta.duree}` : '']
    .filter(Boolean)
    .join('<span class="sep">|</span>');
  const list = (items: string[]) => `<ul>${items.map((i) => `<li>${inline(i)}</li>`).join('')}</ul>`;
  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><title>${esc(c.meta.titre)} — ${AUTHOR}</title>
<link rel="stylesheet" href="${KATEX_CSS}">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Readex+Pro:wght@600;700&display=swap">
<style>
  @page { size: A4; margin: 13mm 14mm 10mm; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Inter, 'Segoe UI', Arial, sans-serif; font-size: 10.8pt; line-height: 1.6; color: #1f2937; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .katex { font-size: 1.07em; white-space: nowrap; }
  .dmath { margin: 6px 0; overflow: hidden; }
  table.layout { width: 100%; border-collapse: collapse; } table.layout > tbody > tr > td, table.layout > tfoot > tr > td { padding: 0; }
  .footer-space { height: 14mm; }
  .footer { position: fixed; bottom: 0; left: 0; right: 0; height: 9mm; border-top: 1.5px solid #0f7a5a; padding-top: 2mm; font-size: 8.3pt; color: #4b5563; display: flex; justify-content: space-between; gap: 10px; white-space: nowrap; }
  .footer .author { font-weight: 700; color: #0f7a5a; }
  a { color: inherit; text-decoration: none; }
  .sep { color: #9ca3af; margin: 0 6px; }
  .banner { background: linear-gradient(135deg, #0b5d45, #0f7a5a 60%, #129a71); color: #fff; border-radius: 14px; padding: 15px 20px 16px; margin-bottom: 12px; }
  .banner .top { display: flex; justify-content: space-between; align-items: center; font-size: 9.5pt; }
  .banner .author { font-family: 'Readex Pro', Inter, sans-serif; font-weight: 700; font-size: 12pt; background: rgba(255,255,255,.16); padding: 2px 12px; border-radius: 999px; }
  .banner h1 { font-family: 'Readex Pro', Inter, sans-serif; margin: 8px 0 2px; font-size: 23pt; line-height: 1.25; }
  .banner .meta { font-size: 10pt; opacity: .95; } .banner .meta .sep { color: #a7f3d0; }
  .banner .social { margin-top: 7px; font-size: 9pt; color: #ecfdf5; } .banner .social .sep { color: #a7f3d0; }
  .intro { display: grid; grid-template-columns: 1.4fr 1fr; gap: 10px; margin-bottom: 6px; }
  .intro > div { border-radius: 10px; padding: 7px 13px; }
  .intro .obj { border: 1.5px solid #a7f3d0; background: #ecfdf5; } .intro .pre { border: 1.5px solid #e5e7eb; background: #f9fafb; }
  .intro h4 { margin: 0 0 3px; font-size: 10.5pt; color: #065f46; } .intro ul { margin: 0; padding-left: 18px; } .intro li { margin: 2px 0; }
  h2 { font-family: 'Readex Pro', Inter, sans-serif; font-size: 15pt; color: #0b5d45; margin: 16px 0 6px; border-bottom: 2px solid #d1fae5; padding-bottom: 2px; break-after: avoid; }
  h2.band { background: #0f7a5a; color: #fff; border: 0; padding: 4px 14px; border-radius: 8px; font-size: 14pt; }
  .pbefore { break-before: page; } .pb { break-after: page; }
  h3 { font-size: 12pt; color: #b45309; margin: 12px 0 4px; break-after: avoid; }
  p { margin: 0 0 6px; }
  ul, ol { margin: 4px 0 8px; padding-left: 22px; } li { margin: 3px 0; }
  .box { border-left: 4px solid #2f5d9e; background: #f3f6fb; border-radius: 8px; padding: 7px 13px; margin: 8px 0; break-inside: avoid; }
  .box > *:last-child { margin-bottom: 0; }
  .box.propriete, .box.theoreme, .box.regle { border-color: #0f7a5a; background: #effaf5; }
  .box.remarque, .box.vocabulaire { border-color: #d97706; background: #fff8eb; }
  .box.methode { border-color: #7c3aed; background: #f6f3ff; }
  .box.exemple { border: 1px dashed #f0b45b; border-left: 4px solid #d97706; background: #fffdf8; }
  .box.demonstration { border-color: #6b7280; background: #fafafa; }
  .box.exercice { border: 1px solid #e5e7eb; border-left: 4px solid #0f7a5a; background: #fff; }
  .box.corrige { border: 1px solid #e5e7eb; border-left: 4px solid #6b7280; background: #f9fafb; break-inside: auto; }
  .box-title { font-weight: 700; color: #111827; margin-bottom: 3px; }
  .fig { margin: 8px auto 6px; text-align: center; break-inside: avoid; }
  .fig > svg { border: 1px solid #e5e7eb; border-radius: 8px; background: #fff; }
  .fig figcaption { font-size: 9.5pt; color: #4b5563; margin-top: 2px; }
  .grid { stroke: #eef0f3; stroke-width: 1; } .axis { stroke: #6b7280; stroke-width: 1.3; }
  .tick { font: 10px Inter, Arial, sans-serif; fill: #6b7280; } .plabel { font: 600 13px Inter, Arial, sans-serif; fill: #111827; }
  .legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px 18px; margin-top: 2px; font-size: 10pt; }
  .leg i { display: inline-block; width: 18px; height: 3px; border-radius: 2px; vertical-align: middle; margin-right: 6px; }
  table.tab { border-collapse: collapse; margin: 6px auto 8px; break-inside: avoid; }
  table.tab th, table.tab td { border: 1px solid #cbd5e1; padding: 3px 10px; text-align: center; }
  table.tab th { background: #ecfdf5; }
</style></head>
<body>
<div class="footer"><span class="author">${AUTHOR}</span><span>${socialHtml()}</span><span>${esc(level?.code ?? '')}</span></div>
<table class="layout"><tbody><tr><td>
<header class="banner">
  <div class="top"><span>Espace Mathématiques Maroc</span><span class="author">${AUTHOR}</span></div>
  <h1>${inline(c.meta.titre)}</h1>
  <div class="meta">${meta}</div>
  <div class="social">Suivez-moi : ${socialHtml()}</div>
</header>
<div class="intro"><div class="obj"><h4>Objectifs</h4>${list(c.objectifs)}</div><div class="pre"><h4>Prérequis</h4>${list(c.prerequis)}</div></div>
${c.body}
</td></tr></tbody><tfoot><tr><td><div class="footer-space"></div></td></tr></tfoot></table>
</body></html>`;
}

/* ---------------- Programme principal ---------------- */

function arg(name: string) {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : undefined;
}

function main() {
  const only = arg('--only');
  const levelFilter = arg('--level');
  const checkOnly = process.argv.includes('--check');
  const files = fs.existsSync(SRC_DIR)
    ? fs
        .readdirSync(SRC_DIR)
        .filter((d) => !levelFilter || d === levelFilter)
        .flatMap((d) => fs.readdirSync(path.join(SRC_DIR, d)).filter((f) => f.endsWith('.md')).map((f) => path.join(SRC_DIR, d, f)))
    : [];
  const courses = files.map(parse).filter((c) => !only || c.meta.id === only);

  if (problems.length) {
    console.error(`\n${problems.length} problème(s) :\n- ${problems.join('\n- ')}`);
    process.exit(1);
  }
  console.log(`${courses.length} cours vérifié(s), aucune erreur.`);
  if (checkOnly) return;

  const browser = [
    process.env.PDF_BROWSER,
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].find((p) => p && fs.existsSync(p));
  if (!browser) throw new Error('Microsoft Edge ou Google Chrome introuvable (définir PDF_BROWSER).');
  fs.mkdirSync(TMP_DIR, { recursive: true });

  for (const c of courses) {
    const html = path.join(TMP_DIR, `${c.meta.id}.html`);
    const outDir = path.join(OUT_DIR, c.meta.niveau);
    const out = path.join(outDir, `${c.meta.id}.pdf`);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(html, page(c), 'utf8');
    execFileSync(browser, ['--headless=new', '--disable-gpu', '--no-first-run', `--user-data-dir=${path.join(TMP_DIR, 'profile')}`, '--no-pdf-header-footer', '--virtual-time-budget=8000', `--print-to-pdf=${out}`, pathToFileURL(html).href], {
      stdio: 'ignore',
      timeout: 120_000,
    });
    console.log(`✓ ${path.relative(ROOT, out)} (${Math.round(fs.statSync(out).size / 1024)} Ko, ${c.exercices} exercices)`);
  }
  writeManifest();
}

/** Liste des cours dont le PDF existe (lue par le site). */
function writeManifest() {
  const ids: string[] = [];
  if (fs.existsSync(OUT_DIR))
    for (const d of fs.readdirSync(OUT_DIR)) for (const f of fs.readdirSync(path.join(OUT_DIR, d))) if (f.endsWith('.pdf')) ids.push(`${d}/${f.slice(0, -4)}`);
  ids.sort();
  const body = `// Fichier généré par scripts/build-courses.ts — ne pas modifier à la main.\n/** Cours complets disponibles en PDF, sous la forme « niveau/identifiant ». */\nexport const coursePdfs: readonly string[] = [\n${ids.map((id) => `  '${id}',`).join('\n')}\n];\n`;
  fs.writeFileSync(path.join(ROOT, 'src', 'data', 'coursePdfs.generated.ts'), body, 'utf8');
}

main();
