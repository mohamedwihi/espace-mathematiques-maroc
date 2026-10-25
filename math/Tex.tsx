import { memo, useMemo } from 'react';
import katex from 'katex';

interface TexProps {
  tex: string;
  display?: boolean;
  className?: string;
}

/**
 * Rendu KaTeX. `trust: false` interdit les commandes pouvant produire des liens ou du HTML arbitraire ;
 * KaTeX échappe lui-même tout le texte de la formule, son HTML de sortie est donc sûr.
 */
export function renderTex(tex: string, display = false): string {
  return katex.renderToString(tex, {
    displayMode: display,
    throwOnError: false,
    trust: false,
    strict: 'ignore',
    output: 'htmlAndMathml',
  });
}

export const Tex = memo(function Tex({ tex, display = false, className = '' }: TexProps) {
  const html = useMemo(() => renderTex(tex, display), [tex, display]);
  const Tag = display ? 'div' : 'span';
  return (
    <Tag
      className={`${display ? 'math-display' : 'math-inline'} ${className}`}
      // Sortie KaTeX (texte échappé par KaTeX, trust désactivé)
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
});
