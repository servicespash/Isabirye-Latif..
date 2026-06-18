import React, { useState } from 'react';
import { CymaticLayout } from '../components/CymaticLayout';

// Data-Driven Engine
const trackRegistry = [
  {
    id: 'track-1',
    title: 'Ghetto Anthem Matrix',
    matrixCode: 'ARM.001.REV',
    story: 'The frequency of survival. Compressing economic pressure into raw digital infrastructure.',
    lyrics: ["From the dark alleys of the concrete zone,", "Coding the future on an iron throne."]
  }
];

export const CreativeMatrix: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState(trackRegistry[0].id);

  return (
    <CymaticLayout>
      <main className="max-w-6xl mx-auto px-6 py-20 min-h-screen">
        {/* Editorial Header */}
        <header className="border-l-4 border-[var(--color-accent)] pl-8 mb-20">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[var(--color-text-primary)] font-mono">
            // CREATIVE_MATRIX
          </h1>
          <p className="mt-6 text-xl text-[var(--color-text-secondary)] font-light max-w-2xl leading-relaxed">
            Stitched between power surges. Sonic telemetry blueprints for institutional integrity.
          </p>
        </header>

        {/* The Matrix: Wide & Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Registry Flank */}
          <section className="lg:col-span-4 space-y-6">
            <h2 className="text-xs font-mono tracking-[0.3em] uppercase text-[var(--color-text-secondary)]">// SYSTEM_REGISTERS</h2>
            {trackRegistry.map((track) => (
              <button 
                key={track.id} 
                onClick={() => setActiveTrack(track.id)}
                className={`w-full p-8 border rounded-2xl transition-all ${activeTrack === track.id ? 'border-[var(--color-accent)] bg-[var(--color-surface)]' : 'border-[var(--color-border)] hover:border-white/20'}`}
              >
                <p className="text-[10px] font-mono text-[var(--color-accent)]">{track.matrixCode}</p>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-2">{track.title}</h3>
              </button>
            ))}
          </section>

          {/* Narrative Flank */}
          <section className="lg:col-span-8 p-10 border border-[var(--color-border)] rounded-3xl bg-[var(--color-surface)]">
            <div className="space-y-10">
              <div className="border-l-2 border-[var(--color-accent)] pl-6">
                <span className="text-[10px] font-mono uppercase text-[var(--color-text-secondary)]">Architect's Chronicle</span>
                <p className="text-xl italic text-[var(--color-text-primary)] font-mono mt-2">"{trackRegistry.find(t => t.id === activeTrack)?.story}"</p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">Lyrical Output Stream</span>
                <div className="text-2xl leading-loose font-serif text-[var(--color-text-primary)]">
                  {trackRegistry[0].lyrics.map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </CymaticLayout>
  );
};

export default CreativeMatrix;

