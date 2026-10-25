import { Fragment, memo, type ReactNode } from 'react';
import { Tex } from './Tex';

/**
 * Affiche un texte contenant des formules : $...$ (en ligne), $$...$$ (bloc) et **gras**.
 * Le texte ordinaire est rendu comme du texte React (échappé) : aucun HTML n'est interprété.
 */
const TOKEN = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|\*\*[^*\n]+\*\*)/g;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) {
      return <Tex key={key} tex={part.slice(2, -2)} display />;
    }
    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      return <Tex key={key} tex={part.slice(1, -1)} />;
    }
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={key} className="font-semibold text-ink-950">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={key}>{part}</Fragment>;
  });
}

interface MathTextProps {
  text: string;
  /** block : découpe en paragraphes sur les lignes vides. */
  block?: boolean;
  className?: string;
}

export const MathText = memo(function MathText({ text, block = false, className = '' }: MathTextProps) {
  if (!block) return <span className={className}>{renderInline(text, 'i')}</span>;
  const paragraphs = text.split(/\n{2,}/);
  return (
    <div className={`space-y-3 ${className}`}>
      {paragraphs.map((p, i) =>
        // Un paragraphe contenant une formule en bloc ne peut pas être un <p> (HTML invalide).
        p.includes('$$') ? <div key={i}>{renderInline(p, `p${i}`)}</div> : <p key={i}>{renderInline(p, `p${i}`)}</p>,
      )}
    </div>
  );
});
