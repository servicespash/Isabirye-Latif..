import React, { useMemo, ReactNode } from 'react';

export function useReadingTime(textOrNode: ReactNode): { minutes: number; wordCount: number } {
  return useMemo(() => {
    // Extract text representation
    const extractText = (node: ReactNode): string => {
      try {
        if (node === null || node === undefined) return '';
        if (typeof node === 'string' || typeof node === 'number') return String(node);
        if (typeof node === 'function') return ''; // Ignore functions
        if (Array.isArray(node)) return node.map(extractText).join(' ');
        if (React.isValidElement(node)) {
          const props = node.props as { children?: ReactNode };
          return props.children ? extractText(props.children) : '';
        }
      } catch {
        return '';
      }
      return '';
    };

    const text = extractText(textOrNode);
    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const wpm = 200; // Average reading speed
    const minutes = Math.max(1, Math.ceil(wordCount / wpm));

    return { minutes, wordCount: Math.max(wordCount, 150) }; // default baseline for rich UI
  }, [textOrNode]);
}
