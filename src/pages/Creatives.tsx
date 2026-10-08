import { useState } from 'react';
import { CymaticLayout } from '../components/CymaticLayout';

interface CreativeNode {
  id: string;
  systemCode: string;
  title: string;
  metricLabel: string;
  metricValue: number;
  narrative: string;
  specifications: string[];
}

export const Creatives = () => {
  const [focusedNode, setFocusedNode] = useState<string | null>('NODE_SONIC_01');

  const technicalMatrix: CreativeNode[] = [
    {
      id: 'NODE_SONIC_01',
      systemCode: 'CYMATIC_RESONANCE_01',
      title: 'Lyrical Architecture & Sonic Frequencies',
      metricLabel: 'Rhythmic Logic Integrity',
      metricValue: 98,
      narrative: 'Forging deep industrial-tier lyrical frameworks for original Afro-soul and reggae frequencies. "Ghetto Anthem," "Celestial Fantasy," and "Freedom Song" serve as architectural documentations of raw defiance, engineered to test system limits under zero-compromise conditions.',
      specifications: ['GHETTO_ANTHEM', 'CELESTIAL_FANTASY', 'FREEDOM_SONG', 'AUDIO_REVERSE_ENGINEERING']
    },
    {
      id: 'NODE_VISUAL_01',
      systemCode: 'CYMATIC_HUB_VISUAL_02',
      title: 'Nocturnal Imagery & Zero-Light Extraction',
      metricLabel: 'Luminance Capture Efficiency',
      metricValue: 95,
      narrative: 'Mastering extreme low-light environments, long exposures, and manual focal fields in deep natural isolation settings. Translating raw visual structures from ambient absence into high-contrast digital layouts.',
      specifications: ['ISO_6400_RAW_NATIVE', 'MANUAL_FOCUS_LOCK', 'AMBIENT_LUX_ISOLATION', 'BRUTALIST_COMPOSITION']
    },
    {
      id: 'NODE_KINETIC_01',
      systemCode: 'BIOMETRIC_RECALIBRATION_03',
      title: 'Tactical Spatial Biometrics & Discourse',
      metricLabel: 'Kinetic Processing Reflex',
      metricValue: 89,
      narrative: 'Utilizing tactical ball games (football and netball) to continuously calibrate real-time spatial processing speeds and situational awareness. Paired with targeted execution of English linguistic styles for elite technical presentation and defense of the architecture.',
      specifications: ['FOOTBALL_STRATEGY', 'NETBALL_REFLEX', 'ENGLISH_LINGUISTIC_FLOW', 'SYSTEM_CALIBRATION']
    }
  ];

  return (
    <CymaticLayout>
      <div className="space-y-8">
        
        {/* Responsive Header Frame */}
        <header className="border-b border-[var(--color-border)] pb-8 mb-8 text-left">
          <div className="flex items-center space-x-2 text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase">
            <span className="inline-block w-2 h-2 bg-[var(--color-accent)] animate-pulse rounded-full"></span>
            <span>// SYSTEM_CREATIVE_LAB_V3</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-[var(--color-text-primary)] uppercase mt-2 break-words">
            CREATIVE_EXECUTION
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-text-secondary)] font-sans max-w-4xl leading-relaxed">
            Where sonic energy scales into digital infrastructure. Raw outputs are forged at the intersection of grit, 
            low-light visual exploration, and clean code—acting as the testing ground for the user-experience models 
            powering <strong className="text-[var(--color-text-primary)]">Cymatic Study</strong> and <strong className="text-[var(--color-text-primary)]">Cymatic Resonance</strong>.
          </p>
        </header>

        {/* Layout Matrix: Stacked on Mobile, Dual Column on Desktop */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* PRIMARY MEDIA FLOW & NARRATIVE */}
          <div className="xl:col-span-7 space-y-8">
            
            {/* Native Video Feed Framework */}
            <section className="border border-[var(--color-border)] bg-black/40 p-4 rounded-2xl overflow-hidden">
              <div className="flex flex-wrap items-center justify-between border-b border-[var(--color-border)] pb-2 mb-4 gap-2">
                <span className="text-[10px] font-bold text-[var(--color-accent)] tracking-wider">// SONIC_EXECUTION_01 // LIVE_STREAM</span>
              </div>
              <div className="w-full aspect-video bg-black relative overflow-hidden rounded-xl">
                <video
                  src="/media/video1.mp4"
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                  poster="/media/photo2.png"
                />
              </div>
            </section>

            {/* Narrative Frame */}
            <section className="w-full border border-[var(--color-border)] bg-white/[0.01] p-5 sm:p-8 overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[var(--color-text-primary)] mb-4">
                // THE_GHETTO_ANTHEM_NARRATIVE
              </h3>
              <div className="text-sm sm:text-base leading-relaxed text-[var(--color-text-secondary)] font-sans space-y-4">
                <p className="text-[var(--color-text-primary)] font-semibold italic border-l-2 border-[#FDE047] pl-3 sm:pl-4">
                  "The Ghetto Anthem is an architectural documentation of survival. In the raw environment of Kampala, where traditional systems fail to deploy, we construct our own digital and sonic infrastructure."
                </p>
                <p className="break-words">
                  This blueprint was built during the absolute dead hours of the night, reverse-engineering raw, 
                  complex audio signals on resource-constrained deployment terminals. When the processing stacks crashed, 
                  the architecture was refactored.
                </p>
                <p className="break-words">
                  Every beat, frame, and sequence serves as structural verification of a single solo architect tracking 
                  progress across extreme operating barriers.
                </p>
              </div>
            </section>
          </div>

          {/* DIAGNOSTICS & SYSTEM METRICS */}
          <div className="w-full xl:w-5/12 space-y-6">
            <div className="border border-[var(--color-border)] bg-black/20 p-4 sm:p-6 overflow-hidden">
              <span className="text-xs font-bold text-slate-400 tracking-widest block mb-4 uppercase">// TECHNICAL_METRICS_SYSTEM</span>
              <div className="space-y-4">
                {technicalMatrix.map((node) => (
                  <div 
                    key={node.id} 
                    onClick={() => setFocusedNode(node.id)}
                    className={`p-4 border transition-all duration-300 cursor-pointer ${focusedNode === node.id ? 'border-[#FDE047] bg-[#FDE047]/5' : 'border-[var(--color-border)] bg-transparent hover:border-slate-600'}`}
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <div className="min-w-0">
                        <span className="text-[9px] text-[var(--color-text-secondary)]/70 block uppercase tracking-tight truncate">{node.systemCode}</span>
                        <h4 className="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] uppercase tracking-wide truncate">{node.title}</h4>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#FDE047] bg-[#FDE047]/10 px-2 py-0.5 shrink-0">{node.metricValue}%</span>
                    </div>

                    <div className="w-full h-1 bg-slate-900 overflow-hidden mt-2">
                      <div 
                        className="h-full bg-[#FDE047] transition-all duration-500" 
                        style={{ width: focusedNode === node.id ? `${node.metricValue}%` : '0%' }}
                      />
                    </div>

                    {focusedNode === node.id && (
                      <div className="mt-4 pt-4 border-t border-dashed border-[var(--color-border)] animate-fadeIn">
                        <p className="text-xs text-[var(--color-text-secondary)] font-sans leading-relaxed mb-4 break-words">{node.narrative}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {node.specifications.map((spec, i) => (
                            <span key={i} className="text-[8px] bg-black/60 border border-[var(--color-border)] text-[var(--color-text-secondary)] px-2 py-0.5 uppercase">
                              #{spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Cache Frame */}
            <div className="border border-[var(--color-border)] bg-black/20 p-4 sm:p-6 overflow-hidden">
              <span className="text-xs font-bold text-slate-400 tracking-widest block mb-4 uppercase">// VISUAL_ARCHIVE_CACHE</span>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {['/media/photo1.png', '/media/photo2.png', '/media/photo3.png'].map((img, idx) => (
                  <div key={idx} className="border border-[var(--color-border)] aspect-video bg-[#020617] relative overflow-hidden group">
                    <img 
                      src={img} 
                      alt={`Cached Node Asset ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80" 
                    />
                    <div className="absolute bottom-1 left-1 bg-black/80 px-1.5 py-0.5 text-[8px] text-slate-500 border border-[var(--color-border)]">
                      NODE_0{idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </CymaticLayout>
  );
};

export default Creatives;
