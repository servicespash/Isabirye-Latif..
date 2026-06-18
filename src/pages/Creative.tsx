import React, { useState } from 'react';

interface Track {
  id: string;
  title: string;
  genre: string;
  matrixCode: string;
  story: string;
  lyrics: string[];
}

export const Creative: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<string | null>('track-1');

  // Complete Creative Matrix Archive
  const trackRegistry: Track[] = [
    {
      id: 'track-1',
      title: 'Ghetto Anthem Matrix',
      genre: 'Afro-Soul // Reggae',
      matrixCode: 'ARM.001.REV',
      story: 'Engineered from a single room on the floor under flickering grids. This is the frequency of survival. It represents the compression of economic pressure into raw digital infrastructure.',
      lyrics: [
        "From the dark alleys of the concrete zone,",
        "Coding the future on an iron throne.",
        "Unstable grids cannot dim the light,",
        "The solo architect takes flight.",
        "Mama, dry your tears, no more sleepless nights,",
        "We building towers to reach the heights."
      ]
    },
    {
      id: 'track-2',
      title: 'Cymatic Resonance Echo',
      genre: 'Dancehall // Cyber-Reggae',
      matrixCode: 'CYM.RES.002',
      story: 'The auditory manifestation of institutional tracking. This track syncs the heartbeat of the streets with the operational pulse of the Cymatic Resonance attendance ledger.',
      lyrics: [
        "System check, register lock,",
        "We track the movement round the clock.",
        "Resonance blazing through the dynamic core,",
        "Ghetto child knocking down the corporate door.",
        "Hawa, watch the frequency start to rise,",
        "The blueprint reflected inside your eyes."
      ]
    }
  ];

  return (
    <div className="w-full space-y-12">
      
      {/* EDITORIAL BROADCAST HEADER */}
      <div className="border-b border-white/10 pb-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[var(--color-accent)] block mb-2">
          // DECODING THE ARCHITECTURAL SOUL
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white dark:text-slate-100 uppercase">
          Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-cyan-400">Resonance</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/60 max-w-4xl font-light leading-relaxed">
          Stitched together between power surges and dropped connections. These are not simple tracks—they are sonic telemetry blueprints. This is how a solo architect maps the pain of the streets into systems that protect institutional integrity.
        </p>
      </div>

      {/* ULTRA-WIDE INTERACTION GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT FLANK: THE ARCHIVE SELECTOR (4 Columns) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 px-2">
            System Audio Registers
          </div>
          <div className="space-y-3">
            {trackRegistry.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 block relative overflow-hidden group ${
                  activeTrack === track.id
                    ? 'bg-white/10 border-[var(--color-accent)]/60 shadow-[0_0_25px_rgba(6,182,212,0.15)]'
                    : 'bg-transparent border-white/5 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-[9px] tracking-widest text-[var(--color-accent)] uppercase">
                    {track.matrixCode}
                  </span>
                  <span className="font-mono text-[9px] text-white/40 uppercase">
                    {track.genre}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {track.title}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT FLANK: THE LYRICAL & NARRATIVE INFRASTRUCTURE (8 Columns) */}
        <div className="lg:col-span-8">
          {trackRegistry.map((track) => {
            if (track.id !== activeTrack) return null;
            return (
              <div 
                key={track.id}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-10 space-y-8 animate-fadeIn"
              >
                {/* METADATA SECTION */}
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {track.title}
                  </h2>
                  <p className="text-xs font-mono text-[var(--color-accent)] tracking-widest uppercase">
                    Operational Context File // {track.genre}
                  </p>
                </div>

                {/* THE RAW NARRATIVE */}
                <div className="bg-black/20 border-l-2 border-[var(--color-accent)] p-5 rounded-r-xl">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 block mb-1">
                    Architects Chronicle:
                  </span>
                  <p className="text-sm text-white/80 font-mono leading-relaxed">
                    "{track.story}"
                  </p>
                </div>

                {/* LYRIC ENGINE - WIDE DISPERSION CONTAINER */}
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 block border-b border-white/5 pb-2">
                    Lyrical Output Stream
                  </span>
                  <div className="space-y-2 font-serif italic text-lg sm:text-2xl text-white/90 tracking-wide leading-loose pt-2">
                    {track.lyrics.map((line, idx) => (
                      <p key={idx} className="hover:text-[var(--color-accent)] transition-colors duration-300">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* FOOTER MANIFESTO CROSS-REFERENCE */}
      <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent border-t border-b border-white/5 py-6 text-center">
        <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
          Cymatic Hub & Resonance // Latty Ranks Solo Execution Engine 2026
        </p>
      </div>

    </div>
  );
};

export default Creative;
