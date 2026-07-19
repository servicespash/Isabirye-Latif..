import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoAuditor } from './SeoAuditor';
import { ChevronDown, ChevronUp, Cpu } from 'lucide-react';

export const CymaticFooter: React.FC = () => {
  const [isAuditorOpen, setIsAuditorOpen] = useState(false);

  return (
    <footer className="w-full border-t border-[var(--color-border)] mt-20 pt-10 pb-6 print-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
        
        {/* BRANDING */}
        <div className="flex flex-col gap-1">
          <span className="font-mono text-sm font-black uppercase text-[var(--color-text-primary)]">CYMATIC EVOLUTION</span>
          <span className="font-mono text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
            © 2026 ISABIRYE LATIF | ALL RIGHTS RESERVED
          </span>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-6 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-secondary)] items-center">
          <Link to="/legal" className="hover:text-[var(--color-accent)] transition-colors">Compliance</Link>
          <Link to="/stack" className="hover:text-[var(--color-accent)] transition-colors">Stack</Link>
          <Link to="/transparency" className="hover:text-[var(--color-accent)] transition-colors">Transparency</Link>
          <a href="mailto:support@cymatichub.xyz" className="hover:text-[var(--color-accent)] transition-colors">Contact</a>
          
          <button 
            onClick={() => setIsAuditorOpen(!isAuditorOpen)}
            className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-[var(--color-border)]/50 rounded-full text-[9px] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-all duration-300"
          >
            <Cpu className="w-3 h-3 text-[var(--color-accent)] animate-pulse" />
            <span>SEO AUDIT</span>
            {isAuditorOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
          </button>
        </nav>
      </div>

      {/* COLLAPSIBLE SEO AUDITOR */}
      {isAuditorOpen && (
        <div className="mt-8 animate-fade-in w-full max-w-4xl mx-auto text-left">
          <SeoAuditor />
        </div>
      )}
    </footer>
  );
};
