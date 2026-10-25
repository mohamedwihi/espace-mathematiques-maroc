import { useState } from 'react';
import { factorPolynomial, type FactorResult } from '@/services/math/algebra';
import { formatNumber } from '@/services/math/engine';
import { Tex } from '@/components/math/Tex';
import { Notice } from '@/components/ui/States';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { MathText } from '@/components/math/MathText';
import { ErrorBox, Examples, ResultBox, StepsList, SyntaxHint, TextField, ToolForm } from './ToolUI';
import type { ToolProps } from './types';

export default function FactorTool({ meta }: ToolProps) {
  const { t, L } = useI18n();
  const [expr, setExpr] = useState('x^3 - 6x^2 + 11x - 6');
  const { result, error, run } = useCompute<FactorResult>();
  const submit = (v = expr) => run(() => factorPolynomial(v));

  return (
    <div className="space-y-5">
      <ToolForm onSubmit={() => submit()}>
        <TextField label={t.tools.ui.polynomial} value={expr} onChange={setExpr} invalid={!!error} />
      </ToolForm>
      <SyntaxHint />
      <Examples items={meta.examples} onPick={(v) => { setExpr(v); submit(v); }} />
      <ErrorBox error={error} />
      {result && (
        <>
          <ResultBox label={t.tools.ui.factored}>
            <Tex tex={result.factoredTex} display className="text-xl" />
            {result.roots.length > 0 && (
              <div className="mt-3 border-t border-brand-200 pt-3 text-sm">
                <span className="font-semibold text-ink-600">{t.tools.ui.roots} : </span>
                <Tex tex={result.roots.map((r) => (r.multiplicity > 1 ? `${r.tex}\\ (\\times${r.multiplicity})` : r.tex)).join(';\\quad ')} />
                <span className="ms-2 text-ink-400" dir="ltr">(≈ {result.roots.map((r) => formatNumber(r.value, 6)).join(' ; ')})</span>
              </div>
            )}
          </ResultBox>
          {!result.complete && (
            <Notice tone="warning">
              <MathText text={L(meta.limits)} />
            </Notice>
          )}
          <StepsList steps={result.steps} />
        </>
      )}
    </div>
  );
}
