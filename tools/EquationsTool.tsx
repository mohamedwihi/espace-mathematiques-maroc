import { useState } from 'react';
import { solveEquation, type EquationResult } from '@/services/math/algebra';
import { formatNumber } from '@/services/math/engine';
import { Tex } from '@/components/math/Tex';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, Examples, ResultBox, StepsList, SyntaxHint, TextField, ToolForm } from './ToolUI';
import type { ToolProps } from './types';

export default function EquationsTool({ meta }: ToolProps) {
  const { t } = useI18n();
  const [eq, setEq] = useState('x^2 - 5x + 6 = 0');
  const { result, error, run } = useCompute<EquationResult>();
  const submit = (v = eq) => run(() => solveEquation(v));

  return (
    <div className="space-y-5">
      <ToolForm onSubmit={() => submit()}>
        <TextField label={t.tools.ui.equation} value={eq} onChange={setEq} placeholder="2x^2 - 3x - 2 = 0" invalid={!!error} />
      </ToolForm>
      <SyntaxHint />
      <Examples items={meta.examples} onPick={(v) => { setEq(v); submit(v); }} />
      <ErrorBox error={error} />
      {result && (
        <>
          <ResultBox label={t.tools.ui.solutions}>
            {result.kind === 'all' && <Tex tex="S=\mathbb{R}" display className="text-xl" />}
            {result.kind === 'none' && <Tex tex="S=\varnothing" display className="text-xl" />}
            {result.kind === 'roots' &&
              (result.roots.length === 0 ? (
                <Tex tex="S=\varnothing\ \text{(dans }\mathbb{R})" display className="text-xl" />
              ) : (
                <div className="space-y-1">
                  <Tex tex={`S=\\left\\{${result.roots.map((r) => r.tex).join(';\\ ')}\\right\\}`} display className="text-xl" />
                  <p className="text-center text-sm text-ink-500" dir="ltr">
                    ≈ {result.roots.map((r) => formatNumber(r.value, 8)).join(' ; ')}
                  </p>
                </div>
              ))}
          </ResultBox>
          <StepsList steps={result.steps} />
        </>
      )}
    </div>
  );
}
