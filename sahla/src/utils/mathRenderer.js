import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Finds LaTeX expressions ($...$ or $$...$$) in a string and replaces
 * them with rendered KaTeX HTML.
 */
export function renderMath(content) {
  if (!content || typeof content !== 'string') return content;

  // 1. Handle display math: $$ ... $$
  let processed = content.replace(/\$\$(.*?)\$\$/gs, (match, tex) => {
    try {
      return katex.renderToString(tex, { displayMode: true, throwOnError: false });
    } catch (err) {
      console.error('KaTeX error (display):', err);
      return match;
    }
  });

  // 2. Handle inline math: $ ... $
  // We use a regex that avoids matching escaped dollars or dollars inside code tags if possible
  // but for simple HTML strings from our data, this should work.
  processed = processed.replace(/\$(.*?)\$/g, (match, tex) => {
    try {
      return katex.renderToString(tex, { displayMode: false, throwOnError: false });
    } catch (err) {
      console.error('KaTeX error (inline):', err);
      return match;
    }
  });

  return processed;
}
