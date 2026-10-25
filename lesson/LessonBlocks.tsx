import { lazy, Suspense, useState } from 'react';
import { BookMarked, ChevronDown, Info, Lightbulb, ListChecks, Ruler, Sigma, Wrench } from 'lucide-react';
import type { CalloutKind, LessonBlock } from '@/types';
import { MathText } from '@/components/math/MathText';
import { Tex } from '@/components/math/Tex';
import { useI18n } from '@/hooks/useI18n';

// Les graphiques (Mafs) sont chargés à la demande pour alléger la page.
const FunctionGraph = lazy(() => import('@/components/math/Graphs').then((m) => ({ default: m.FunctionGraph })));
const GeometryFigure = lazy(() => import('@/components/math/Graphs').then((m) => ({ default: m.GeometryFigure })));

const calloutStyle: Record<CalloutKind, { box: string; label: string; Icon: typeof Info }> = {
  definition: { box: 'border-ink-500 bg-ink-50/70', label: 'text-ink-700', Icon: BookMarked },
  theorem: { box: 'border-brand-600 bg-brand-50/70', label: 'text-brand-800', Icon: Sigma },
  property: { box: 'border-brand-500 bg-brand-50/50', label: 'text-brand-700', Icon: ListChecks },
  rule: { box: 'border-brand-500 bg-brand-50/50', label: 'text-brand-700', Icon: Ruler },
  remark: { box: 'border-saffron-400 bg-saffron-50/70', label: 'text-saffron-800', Icon: Info },
  method: { box: 'border-ink-400 bg-white', label: 'text-ink-700', Icon: Wrench },
};

function GraphFallback() {
  return <div className="h-[280px] animate-pulse rounded-xl bg-ink-50" aria-hidden="true" />;
}

function Example({ block }: { block: Extract<LessonBlock, { kind: 'example' }> }) {
  const { t, L, fmt } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <div className="print-expand rounded-2xl border border-ink-100 bg-white p-4 sm:p-5">
      <p className="mb-2 flex items-center gap-2 text-sm font-bold text-saffron-700">
        <Lightbulb className="h-4 w-4" aria-hidden="true" />
        {block.title ? L(block.title) : t.lesson.blocks.example}
      </p>
      <MathText text={L(block.statement)} block className="text-ink-900" />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="no-print mt-3 inline-flex items-center gap-1.5 rounded-lg text-sm font-semibold text-brand-700 hover:text-brand-900"
      >
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        {open ? t.lesson.hideSteps : t.lesson.showSteps}
      </button>
      <ol className="mt-3 space-y-2 border-s-2 border-brand-200 ps-4" hidden={!open}>
        {block.steps.map((s, i) => (
          <li key={i}>
            <span className="text-xs font-bold text-brand-700">{fmt(t.lesson.step, { n: i + 1 })}</span>
            <MathText text={L(s)} block className="leading-8" />
          </li>
        ))}
      </ol>
    </div>
  );
}

export function LessonBlockView({ block }: { block: LessonBlock }) {
  const { t, L } = useI18n();
  switch (block.kind) {
    case 'text':
      return <MathText text={L(block.content)} block className="leading-8 text-ink-800" />;
    case 'list':
      return (
        <ul className="list-disc space-y-1 ps-6 text-ink-800">
          {block.items.map((it, i) => (
            <li key={i}>
              <MathText text={L(it)} />
            </li>
          ))}
        </ul>
      );
    case 'formula':
      return (
        <figure className="rounded-2xl border border-ink-100 bg-white px-4 py-3">
          <Tex tex={block.tex} display className="text-lg" />
          {block.caption && <figcaption className="mt-1 text-center text-xs text-ink-500">{L(block.caption)}</figcaption>}
        </figure>
      );
    case 'example':
      return <Example block={block} />;
    case 'graph':
      return (
        <div>
          <Suspense fallback={<GraphFallback />}>
            <FunctionGraph block={block} />
          </Suspense>
          {block.caption && <MathText text={L(block.caption)} block className="mt-2 text-sm text-ink-500" />}
        </div>
      );
    case 'geometry':
      return (
        <div>
          <Suspense fallback={<GraphFallback />}>
            <GeometryFigure block={block} />
          </Suspense>
          {block.caption && <MathText text={L(block.caption)} block className="mt-2 text-sm text-ink-500" />}
        </div>
      );
    default: {
      const style = calloutStyle[block.kind];
      const Icon = style.Icon;
      return (
        <div className={`rounded-e-2xl border-s-4 p-4 sm:p-5 ${style.box}`}>
          <p className={`mb-2 flex items-center gap-2 text-sm font-bold ${style.label}`}>
            <Icon className="h-4 w-4" aria-hidden="true" />
            {t.lesson.blocks[block.kind]}
            {block.title && <span className="font-semibold text-ink-700">— {L(block.title)}</span>}
          </p>
          <MathText text={L(block.content)} block className="leading-8 text-ink-900" />
        </div>
      );
    }
  }
}
