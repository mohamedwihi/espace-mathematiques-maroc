import { describe, expect, it } from 'vitest';
import { evaluateInput, parseExpression, evaluateNode, toDegreeMode, compileFunction } from './engine';
import { solveEquation, factorPolynomial, simplifySqrt } from './algebra';
import { solveSystem, parseCoefficient } from './systems';
import { fractionSteps, gcdLcm, powersCompute, percentCompute } from './arithmetic';
import { derivativeOf, integralOf, simpson, valueTable } from './calculus';
import { describe as stats, combinations, arrangements, binomial } from './statistics';
import { computeShape, shapes } from './geometry';
import { R, Rational } from './rational';
import { parseNumericAnswer } from '@/utils/answers';
import { exercises } from '@/data/exercises';
import { lessons } from '@/data/lessons';
import { levels } from '@/data/levels';
import { exams } from '@/data/exams';

describe('moteur sûr', () => {
  it('évalue des expressions usuelles', () => {
    expect(evaluateInput('2^10 - 3*7')).toBe(1003);
    expect(evaluateInput('sqrt(2)*sqrt(8)')).toBeCloseTo(4);
    expect(evaluateInput('ln(e^3)')).toBeCloseTo(3);
    expect(evaluateInput('log(1000)')).toBeCloseTo(3);
    expect(evaluateInput('5!/(2!*3!)')).toBe(10);
    expect(evaluateInput('2π')).toBeCloseTo(2 * Math.PI);
  });

  it('gère le mode degrés', () => {
    const node = toDegreeMode(parseExpression('sin(30)+cos(60)'));
    expect(evaluateNode(node)).toBeCloseTo(1);
  });

  it('refuse le code et les constructions dangereuses', () => {
    for (const bad of ['import({})', 'a = 2', 'f(x) = x', 'x.constructor', '"abc"', '[1,2]', 'evaluate("1")', 'createUnit("x")', '{a: 1}']) {
      expect(() => parseExpression(bad, ['x'])).toThrow();
    }
  });

  it('refuse les variables inconnues', () => {
    expect(() => parseExpression('y + 1', ['x'])).toThrow();
    expect(() => compileFunction('x + t')).toThrow();
  });
});

describe('équations', () => {
  it('premier degré', () => {
    const r = solveEquation('2x + 3 = 7');
    expect(r.kind).toBe('roots');
    if (r.kind === 'roots') expect(r.roots[0].value).toBe(2);
    const r2 = solveEquation('3(x-1) = x + 5');
    if (r2.kind === 'roots') expect(r2.roots[0].value).toBe(4);
  });
  it('second degré : deux racines', () => {
    const r = solveEquation('2x^2 - 3x - 2 = 0');
    expect(r.kind === 'roots' && r.roots.map((x) => x.value)).toEqual([-0.5, 2]);
  });
  it('second degré : racine double et Δ<0', () => {
    const r = solveEquation('x^2 - 4x + 4 = 0');
    expect(r.kind === 'roots' && r.roots.map((x) => x.value)).toEqual([2]);
    const r2 = solveEquation('x^2 + x + 1 = 0');
    expect(r2.kind === 'roots' && r2.roots.length).toBe(0);
  });
  it('racines irrationnelles exactes', () => {
    const r = solveEquation('x^2 - 2 = 0');
    expect(r.kind).toBe('roots');
    if (r.kind === 'roots') {
      expect(r.roots[0].value).toBeCloseTo(-Math.SQRT2);
      expect(r.roots[1].tex).toContain('\\sqrt{2}');
    }
  });
  it('identité et équation impossible', () => {
    expect(solveEquation('2x + 1 = 2x + 1').kind).toBe('all');
    expect(solveEquation('x + 1 = x + 2').kind).toBe('none');
  });
  it('simplifie les radicaux', () => {
    expect(simplifySqrt(72)).toEqual({ k: 6, m: 2 });
    expect(simplifySqrt(49)).toEqual({ k: 7, m: 1 });
  });
});

describe('factorisation', () => {
  it('trouve les racines rationnelles', () => {
    const r = factorPolynomial('x^3 - 6x^2 + 11x - 6');
    expect(r.roots.map((x) => x.value)).toEqual([1, 2, 3]);
    expect(r.complete).toBe(true);
  });
  it('gère x^4 - 1 (facteur irréductible)', () => {
    const r = factorPolynomial('x^4 - 1');
    expect(r.roots.map((x) => x.value)).toEqual([-1, 1]);
    expect(r.factoredTex).toContain('x^{2} + 1');
  });
  it('gère x^3 - 2x (racines irrationnelles)', () => {
    const r = factorPolynomial('x^3 - 2x');
    expect(r.roots.map((x) => +x.value.toFixed(6))).toEqual([-1.414214, 0, 1.414214]);
  });
});

describe('systèmes', () => {
  it('2x2 par déterminants', () => {
    const r = solveSystem([[R(3), R(2)], [R(1), R(-2)]], [R(7), R(5)]);
    expect(r.kind).toBe('unique');
    if (r.kind === 'unique') expect(r.solution.map(Number)).toEqual([3, -1]);
  });
  it('2x2 sans solution', () => {
    expect(solveSystem([[R(3), R(-2)], [R(-6), R(4)]], [R(4), R(1)]).kind).toBe('none');
  });
  it('3x3 par Gauss', () => {
    const r = solveSystem(
      [[R(1), R(1), R(1)], [R(2), R(-1), R(1)], [R(1), R(2), R(-1)]],
      [R(6), R(3), R(2)],
    );
    expect(r.kind === 'unique' && r.solution.map(Number)).toEqual([1, 2, 3]);
  });
  it('coefficients fractionnaires', () => {
    expect(parseCoefficient('3/4').equals(R(3, 4))).toBe(true);
    expect(parseCoefficient('-0.5').equals(R(-1, 2))).toBe(true);
  });
});

describe('arithmétique', () => {
  it('fractions', () => {
    expect(fractionSteps({ num: 3, den: 4 }, { num: 5, den: 6 }, '+').result.equals(R(19, 12))).toBe(true);
    expect(fractionSteps({ num: 2, den: 3 }, { num: 4, den: 9 }, '÷').result.equals(R(3, 2))).toBe(true);
    expect(() => fractionSteps({ num: 1, den: 2 }, { num: 0, den: 3 }, '÷')).toThrow();
  });
  it('PGCD et PPCM', () => {
    expect(gcdLcm([84, 120])).toMatchObject({ pgcd: 12, ppcm: 840 });
    expect(gcdLcm([12, 18, 30])).toMatchObject({ pgcd: 6, ppcm: 180 });
  });
  it('puissances, racines, logarithmes', () => {
    expect(powersCompute('power', -2, 5).value).toBe(-32);
    expect(powersCompute('root', 27, 3).value).toBeCloseTo(3);
    expect(() => powersCompute('root', -4, 2)).toThrow();
    expect(powersCompute('log', 1000, 10).value).toBeCloseTo(3);
    expect(() => powersCompute('ln', 0, 0)).toThrow();
  });
  it('pourcentages', () => {
    expect(percentCompute('percentOf', 15, 240).value).toBe(36);
    expect(percentCompute('evolution', 80, 92).value).toBeCloseTo(15);
    expect(percentCompute('fourth', 4, 10, 6).value).toBe(15);
  });
  it('rationnels', () => {
    expect(Rational.fromNumber(0.1 + 0.2).equals(R(3, 10))).toBe(true);
    expect(() => R(1, 0)).toThrow();
  });
});

describe('analyse', () => {
  it('dérivées', () => {
    const d = derivativeOf('x^3 - 3x + 1', 2);
    expect(d.valueAt?.value).toBe(9);
    expect(derivativeOf('x*ln(x)', 1).valueAt?.value).toBeCloseTo(1);
    expect(derivativeOf('(2x+1)/(x-1)', 2).valueAt?.value).toBeCloseTo(-3);
  });
  it('primitives et intégrales', () => {
    expect(integralOf('3x^2 + 2x', { a: 0, b: 1 }).definite?.exact).toBeCloseTo(2);
    expect(integralOf('1/x', { a: 1, b: Math.E }).definite?.exact).toBeCloseTo(1);
    expect(integralOf('cos(x)', { a: 0, b: Math.PI / 2 }).definite?.exact).toBeCloseTo(1);
    expect(integralOf('exp(2x)', { a: 0, b: 1 }).definite?.exact).toBeCloseTo((Math.exp(2) - 1) / 2);
    expect(integralOf('(2x+1)^3', { a: 0, b: 1 }).definite?.exact).toBeCloseTo(10);
    // Pas de primitive usuelle : valeur numérique seulement
    const r = integralOf('x*exp(x)', { a: 0, b: 1 });
    expect(r.definite?.numeric).toBeCloseTo(1, 6);
    expect(() => integralOf('1/x', { a: -1, b: 1 })).toThrow();
  });
  it('Simpson', () => {
    expect(simpson((x) => x * x, 0, 3)).toBeCloseTo(9, 9);
  });
  it('tableau de valeurs', () => {
    const rows = valueTable('1/x', -1, 1, 0.5);
    expect(rows).toHaveLength(5);
    expect(Number.isNaN(rows[2].y)).toBe(true);
    expect(() => valueTable('x', 0, 1000, 0.1)).toThrow();
  });
});

describe('statistiques et géométrie', () => {
  it('série statistique', () => {
    const s = stats('8 10 12 12 14 15 15 15 17 20', '');
    expect(s.N).toBe(10);
    expect(s.mean).toBeCloseTo(13.8);
    expect(s.median).toBe(14.5);
    expect(s.modes).toEqual([15]);
    expect(s.q1).toBe(12);
    expect(s.q3).toBe(15);
  });
  it('dénombrement', () => {
    expect(combinations(10, 3)).toBe(120n);
    expect(arrangements(10, 3)).toBe(720n);
    expect(binomial(4, 2, 0.5).prob).toBeCloseTo(0.375);
  });
  it('figures', () => {
    const tri = shapes.find((s) => s.id === 'triangle-sides')!;
    expect(computeShape(tri, { a: '3', b: '4', c: '5' }).find((r) => r.measure === 'area')?.value).toBeCloseTo(6);
    expect(() => computeShape(tri, { a: '1', b: '2', c: '5' })).toThrow();
    const cyl = shapes.find((s) => s.id === 'cylinder')!;
    expect(computeShape(cyl, { r: '2', h: '5' })[0].value).toBeCloseTo(20 * Math.PI);
  });
});

describe('réponses des élèves', () => {
  it('lit les nombres et fractions', () => {
    expect(parseNumericAnswer('2,5')).toBe(2.5);
    expect(parseNumericAnswer('-3/4')).toBe(-0.75);
    expect(parseNumericAnswer(' 12 ')).toBe(12);
    expect(parseNumericAnswer('abc')).toBeNull();
    expect(parseNumericAnswer('1/0')).toBeNull();
  });
});

describe('intégrité du contenu', () => {
  it('chaque exercice pointe vers un cours existant du même niveau', () => {
    for (const e of exercises) {
      const lesson = lessons.find((l) => l.id === e.lessonId);
      expect(lesson, e.id).toBeDefined();
      expect(lesson?.levelId, e.id).toBe(e.levelId);
      if (e.question.type === 'mcq') expect(e.question.correct).toBeLessThan(e.question.options.length);
    }
  });
  it('identifiants uniques', () => {
    const ids = exercises.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it('chaque cours appartient à une unité de son niveau', () => {
    for (const l of lessons) {
      const level = levels.find((x) => x.id === l.levelId);
      expect(level?.units.some((u) => u.id === l.unitId), l.id).toBe(true);
      l.streams?.forEach((s) => expect(level?.streams.some((x) => x.id === s), `${l.id}:${s}`).toBe(true));
    }
  });
  it('aucun examen officiel sans PDF ni lien fictif', () => {
    for (const x of exams) {
      if (x.official) expect(x.pdfUrl).toBeTruthy();
      if (x.pdfUrl) expect(x.pdfUrl.startsWith('/exams/')).toBe(true);
    }
  });
});
