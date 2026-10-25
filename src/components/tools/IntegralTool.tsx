import { useState } from 'react';
import { integralOf, type IntegralResult } from '@/services/math/calculus';
import { evaluateInput, numberTex } from '@/services/math/engine';
import { MathError } from '@/services/math/rational';
import { Tex } from '@/components/math/Tex';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, Examples, ResultBox, StepsList, SyntaxHint, TextField, ToolForm } from './ToolUI';
import type { ToolProps } from './types';

export default function IntegralTool({ meta }: ToolProps) {
  const { t } = useI18n();
  const [fx, setFx] = useState('3x^2 + 2x');
  const [a, setA] = useState('0');
  const [b, setB] = useState('1');
  const { result, error, run } = useCompute<IntegralResult>();

  const submit = (f = fx) =>
    run(() => {
      const hasBounds = a.trim() !== '' || b.trim() !== '';
      let bounds: { a: number; b: number } | undefined;
      if (hasBounds) {
        try {
          bounds = { a: evaluateInput(a), b: evaluateInput(b) };
        } catch {
          throw new MathError('الحدان a و b يجب أن يكونا عددين (أو اتركهما فارغين).', 'Les bornes a et b doivent être des nombres (ou laissez-les vides).');
        }
      }
      return integralOf(f, bounds);
    });

  return (
    <div className="space-y-5">
      <ToolForm onSubmit={() => submit()}>
        <TextField label={t.tools.ui.function} value={fx} onChange={setFx} invalid={!!error} />
        <div className="grid grid-cols-2 gap-3">
          <TextField label={t.tools.ui.lower} value={a} onChange={setA} inputMode="decimal" />
          <TextField label={t.tools.ui.upper} value={b} onChange={setB} inputMode="decimal" hint="ex. pi/2, e, 1" />
        </div>
      </ToolForm>
      <SyntaxHint />
      <Examples items={meta.examples} onPick={(v) => { setFx(v); submit(v); }} />
      <ErrorBox error={error} />
      {result && (
        <>
          <ResultBox>
            {result.primitiveTex && (
              <div>
                <p className="text-xs font-semibold text-ink-500">{t.tools.ui.antiderivative}</p>
                <Tex tex={`F(x)=${result.primitiveTex}`} display className="text-lg" />
              </div>
            )}
            {result.definite && (
              <div className="mt-3 border-t border-brand-200 pt-3">
                <p className="text-xs font-semibold text-ink-500">{t.tools.ui.definite}</p>
                <Tex
                  tex={`\\int_{${numberTex(result.definite.a)}}^{${numberTex(result.definite.b)}}\\left(${result.fTex}\\right)dx${
                    result.definite.exactTex ? `=${result.definite.exactTex}` : ''
                  }${result.definite.exactTex && /^-?\d+$/.test(result.definite.exactTex) ? '' : `\\approx${numberTex(result.definite.exact ?? result.definite.numeric, 10)}`}`}
                  display
                  className="text-lg"
                />
                <p className="mt-1 text-xs text-ink-500" dir="ltr">
                  {t.tools.ui.numericCheck} : ≈ {numberTex(result.definite.numeric, 10)}
                </p>
              </div>
            )}
          </ResultBox>
          <StepsList steps={[...result.rules, ...(result.definite?.steps ?? [])]} />
        </>
      )}
    </div>
  );
}
