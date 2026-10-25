import { useId, type FormEvent, type ReactNode } from 'react';
import { AlertCircle, ListOrdered } from 'lucide-react';
import type { Localized } from '@/types';
import type { Step } from '@/services/math/engine';
import { MathText } from '@/components/math/MathText';
import { Tex } from '@/components/math/Tex';
import { useI18n } from '@/hooks/useI18n';

export function ToolForm({ onSubmit, children, submitLabel }: { onSubmit: () => void; children: ReactNode; submitLabel?: string }) {
  const { t } = useI18n();
  const handle = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handle} className="space-y-4" noValidate>
      {children}
      <button type="submit" className="btn-primary w-full sm:w-auto">
        {submitLabel ?? t.tools.calculate}
      </button>
    </form>
  );
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  mono = true,
  invalid = false,
  hint,
  inputMode,
  className = '',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  mono?: boolean;
  invalid?: boolean;
  hint?: string;
  inputMode?: 'text' | 'decimal' | 'numeric';
  className?: string;
}) {
  const id = useId();
  const hintId = `${id}-hint`;
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        id={id}
        className={`${mono ? 'field-mono' : 'field'} ${invalid ? 'field-error' : ''}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        inputMode={inputMode}
        aria-invalid={invalid || undefined}
        aria-describedby={hint ? hintId : undefined}
        dir="ltr"
      />
      {hint && (
        <p id={hintId} className="mt-1.5 text-xs text-ink-400">
          {hint}
        </p>
      )}
    </div>
  );
}

export function ErrorBox({ error }: { error: Localized | null }) {
  const { L } = useI18n();
  if (!error) return null;
  return (
    <div role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 animate-fade-up">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <MathText text={L(error)} />
    </div>
  );
}

export function ResultBox({ label, children }: { label?: string; children: ReactNode }) {
  const { t } = useI18n();
  return (
    <section aria-live="polite" className="rounded-2xl border border-brand-200 bg-brand-50/60 p-4 sm:p-5 animate-fade-up">
      <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-700">{label ?? t.tools.result}</h3>
      <div className="text-ink-900">{children}</div>
    </section>
  );
}

export function StepsList({ steps, title }: { steps: Step[]; title?: string }) {
  const { t, L } = useI18n();
  if (!steps.length) return null;
  return (
    <section className="card p-4 sm:p-5 animate-fade-up">
      <h3 className="mb-4 flex items-center gap-2 text-base font-semibold">
        <ListOrdered className="h-4 w-4 text-brand-600" aria-hidden="true" />
        {title ?? t.tools.steps}
      </h3>
      <ol className="space-y-4">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-600">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <MathText text={L(s.text)} className="text-sm text-ink-700" />
              {s.tex && <Tex tex={s.tex} display className="mt-1 text-ink-950" />}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Examples({ items, onPick }: { items?: string[]; onPick: (v: string) => void }) {
  const { t } = useI18n();
  if (!items?.length) return null;
  return (
    <div>
      <p className="mb-2 text-xs font-semibold text-ink-500">{t.tools.examples}</p>
      <div className="flex flex-wrap gap-2" dir="ltr">
        {items.map((ex) => (
          <button
            key={ex}
            type="button"
            onClick={() => onPick(ex)}
            className="rounded-lg border border-ink-200 bg-white px-2.5 py-1 font-mono text-xs text-ink-700 transition hover:border-brand-300 hover:bg-brand-50"
          >
            {ex}
          </button>
        ))}
      </div>
    </div>
  );
}

export function SyntaxHint() {
  const { t } = useI18n();
  return <p className="text-xs leading-relaxed text-ink-400">{t.tools.syntax}</p>;
}
