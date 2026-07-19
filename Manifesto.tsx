import { CymaticLayout } from '../components/CymaticLayout';
import React, { useState } from 'react';

export const Manifesto = () => {
  const [hasPulsed, setHasPulsed] = useState(false);

  return (
    <CymaticLayout>
      <main className="max-w-6xl mx-auto p-4 md:p-12 min-h-screen flex flex-col w-full">
        <article className="border border-white/10 bg-white/5 dark:bg-black/40 backdrop-blur-xl rounded-3xl space-y-12 p-8 md:p-16 leading-relaxed font-sans shadow-2xl transition-all duration-300 w-full">

          <header className="border-b-2 border-[var(--border-color)] pb-8">
            <span className="text-cyan-500 font-mono text-xs tracking-widest block mb-2">// 00_MANIFESTO</span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-[var(--text-primary)]">
              Architecting Innovation
            </h1>
          </header>

          <section className="text-left text-sm md:text-lg text-[var(--text-primary)] font-medium space-y-6">
            <p>I am <strong className="text-[var(--accent-primary)]">Isabirye Latif</strong>. I do not merely execute syntax; I engineer unyielding, institutional-grade infrastructure. I founded Cymatic Evolution to forge a baseline where raw human empathy, industrial survival, and intricate digital complexity sit in absolute synchronization.</p>
            
            <h2 className="text-xl font-bold text-[var(--accent-primary)] font-mono uppercase">// I_THE_FORGE</h2>
            <p>I emerge from the factory floor—where the scent of petroleum is absolute, where acid burns skin, and labor is heavy enough to break an ordinary spirit. I codified a resolution: I would terminate this cycle. By any means engineered.</p>
            
            <p>When the traditional path was slammed shut in Senior 3, I took a Samsung S21 and converted it into my primary laboratory. I embraced silence. I exited the hollow noise of social media, disregarded toxic skepticism, and retreated into the midnight hours to rebuild, retrack, and reverse-engineer the logic of the machine from zero.</p>
          </section>

          <section className="bg-slate-900/40 p-8 border-l-4 border-cyan-500 rounded-r-2xl space-y-4">
            <h2 className="text-xl font-bold text-cyan-500 font-mono uppercase">// II_THE_SYSTEMS</h2>
            <p>Cymatic Hub is an ecosystem facilitating AI-driven tutoring and complex institutional management. Cymatic Resonance serves as the real-time operational dashboard, enforcing synchronization via live sync-pulse analytics.</p>
          </section>

          <button onClick={() => setHasPulsed(!hasPulsed)} className="px-6 py-3 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded-xl font-mono text-xs">
            {hasPulsed ? '⚡ SYSTEM_PULSED' : '🛰️ SEND_SYNC_PULSE'}
          </button>
        </article>
      </main>
    </CymaticLayout>
  );
};

