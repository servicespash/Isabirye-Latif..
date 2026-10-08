import React, { useState } from 'react';
import { Copy, Check, AlertTriangle } from 'lucide-react';

interface CodeCopyButtonProps {
  codeString: string;
  language?: string;
}

export const CodeCopyButton: React.FC<CodeCopyButtonProps> = ({ codeString, language = 'typescript' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code snippet:', err);
    }
  };

  return (
    <div className="relative group my-4 rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-primary)] font-mono text-xs shadow-xl">
      {/* Header bar with language, Use with Caution warning, and Copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse"></span>
          <span className="text-[10px] uppercase font-bold text-[var(--color-text-secondary)] tracking-wider">
            {language} // SNIPPET
          </span>
          <div className="hidden sm:flex items-center gap-1 text-[9px] text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
            <AlertTriangle className="w-3 h-3 shrink-0" />
            <span>Use with caution</span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[var(--color-accent)]/10 hover:bg-[var(--color-accent)]/20 text-[var(--color-accent)] border border-[var(--color-accent)]/30 text-[10px] font-bold uppercase tracking-wider transition-all shadow-sm"
          title="Copy snippet to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="p-4 overflow-x-auto text-[11px] leading-relaxed text-[var(--color-text-primary)]">
        <pre className="m-0 p-0 font-mono bg-transparent text-[var(--color-text-primary)]">
          <code>{codeString}</code>
        </pre>
      </div>
    </div>
  );
};
