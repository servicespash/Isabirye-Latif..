import React from 'react';

export const RepoRail: React.FC = () => (
  <nav className="h-full w-20 flex flex-col items-center py-8 gap-8 border-r border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 backdrop-blur-md">
    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center font-bold text-black">// H</div>
    <div className="w-10 h-10 rounded-full bg-[var(--color-text-secondary)] flex items-center justify-center font-bold text-white">// R</div>
    <div className="w-10 h-10 rounded-full border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] text-xs font-mono">// C</div>
  </nav>
);
