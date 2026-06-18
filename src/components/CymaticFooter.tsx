import React from 'react';
import { Link } from 'react-router-dom';

export const CymaticFooter: React.FC = () => (
  <footer className="w-full border-t border-[var(--color-border)] mt-20 pt-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
      
      {/* BRANDING */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-sm font-black uppercase text-[var(--color-text-primary)]">CYMATIC EVOLUTION</span>
        <span className="font-mono text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
          © 2026 ISABIRYE LATIF | ALL RIGHTS RESERVED
        </span>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-wrap justify-center md:justify-end gap-6 font-mono text-[11px] uppercase tracking-widest text-[var(--color-text-secondary)]">
        <Link to="/legal" className="hover:text-[var(--color-accent)] transition-colors">Compliance</Link>
        <Link to="/stack" className="hover:text-[var(--color-accent)] transition-colors">Stack</Link>
        <Link to="/transparency" className="hover:text-[var(--color-accent)] transition-colors">Transparency</Link>
        <a href="mailto:support@cymatichub.xyz" className="hover:text-[var(--color-accent)] transition-colors">Contact</a>
      </nav>
    </div>
  </footer>
);
