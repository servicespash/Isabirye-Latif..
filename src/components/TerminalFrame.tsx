import React from 'react';

/**
 * TerminalFrame: The primary content container.
 * Upgraded to support glassmorphic layering.
 */
export const TerminalFrame: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="w-full max-w-5xl mx-auto my-8 p-1 rounded-[2rem] bg-[var(--color-glass-deep)] backdrop-blur-md border border-[var(--color-border)] shadow-2xl transition-all duration-500">
    <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
      <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] font-bold">
        {title}
      </span>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[var(--color-text-secondary)] opacity-30" />
        <div className="w-2 h-2 rounded-full bg-[var(--color-text-secondary)] opacity-30" />
      </div>
    </div>
    <div className="p-8">
      {children}
    </div>
  </div>
);
