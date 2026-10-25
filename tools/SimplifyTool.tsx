import { useState } from 'react';
import { simplifyExpression, type SimplifyResult } from '@/services/math/algebra';
import { Tex } from '@/components/math/Tex';
import { useCompute } from '@/hooks/useCompute';
import { useI18n } from '@/hooks/useI18n';
import { ErrorBox, Examples, ResultBox, SyntaxHint, TextField, ToolForm } from './ToolUI';
import type { ToolProps } from './types';

export default function SimplifyTool({ meta }: ToolProps) {
  const { t } = useI18n();
  const [expr, setExpr] = useState('(x+2)^2 - (x-1)(x+1)');
  const { result, error, run } = useCompute<SimplifyResult>();
  const submit = (v = expr) => run(() => simplifyExpression(v));

  return (
    <div className="space-y-5">
      <ToolForm onSubmit={() => submit()}>
        <TextField label={t.tools.ui.expression} value={expr} onChange={setExpr} invalid={!!error} />
      </ToolForm>
      <SyntaxHint />
      <Examples items={meta.examples} onPick={(v) => { setExpr(v); submit(v); }} />
      <ErrorBox error={error} />
      {result && (
        <ResultBox>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs font-semibold text-ink-500">{t.tools.ui.expression}</dt>
              <dd><Tex tex={result.inputTex} display /></dd>
            </div>
            {result.expandedTex && (
              <div>
                <dt className="text-xs font-semibold text-ink-500">{t.tools.ui.expanded}</dt>
                <dd><Tex tex={result.expandedTex} display className="text-lg" /></dd>
              </div>
            )}
            <div>
              <dt className="text-xs font-semibold text-ink-500">{t.tools.ui.simplified}</dt>
              <dd><Tex tex={result.simplifiedTex} display className="text-lg" /></dd>
            </div>
          </dl>
        </ResultBox>
      )}
    </div>
  );
}
