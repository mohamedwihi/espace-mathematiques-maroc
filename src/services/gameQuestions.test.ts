import { describe, expect, it } from 'vitest';
import katex from 'katex';
import { GAME_LEVELS, makeQuestion, seeded } from './gameQuestions';

const formulas = (s: string) => [...s.matchAll(/\$([^$]+)\$/g)].map((m) => m[1]);

describe('jeu Défi Maths : générateur de questions', () => {
  for (const level of GAME_LEVELS) {
    it(`produit des questions valides pour ${level}`, () => {
      const r = seeded(level.length * 7919 + 17);
      for (let i = 0; i < 400; i++) {
        const q = makeQuestion(level, 1 + (i % 3), r);
        expect(q.choices).toHaveLength(4);
        expect(new Set(q.choices).size).toBe(4);
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(4);
        for (const tex of [q.prompt, q.explain, ...q.choices].flatMap(formulas)) {
          expect(() => katex.renderToString(tex, { throwOnError: true, strict: 'ignore' }), tex).not.toThrow();
        }
      }
    });
  }
});
