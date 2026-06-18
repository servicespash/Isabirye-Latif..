import { CymaticLayout } from '../components/CymaticLayout';

export const Creatives = () => {
  return (
    <CymaticLayout>
      <div className="grid grid-cols-12 gap-8">
        
        {/* Header Section */}
        <header className="col-span-12 border-b border-[var(--color-border)]/60 pb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--color-text-primary)] font-mono uppercase">
            // 02_CREATIVE_LAB
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[var(--color-text-secondary)] font-sans">
            Where sonic energy meets digital infrastructure. Raw output, no excuses.
          </p>
        </header>

        {/* 1. PRIMARY FEATURE PHOTO */}
        <section className="col-span-12 lg:col-span-8 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] font-mono">// VISUAL_EVIDENCE_01</h2>
          <div className="w-full overflow-hidden rounded-2xl border border-[var(--color-border)]/60 shadow-xl aspect-video">
            <img 
              src="/media/photo1.png" 
              alt="Architect Primary Context" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 2. THE VIDEO CONTAINER */}
        <section className="col-span-12 lg:col-span-4 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] font-mono">// SONIC_LAB_EXECUTION</h2>
          <div className="w-full aspect-square rounded-2xl border-2 border-[var(--color-accent)]/80 bg-black/80 overflow-hidden shadow-2xl flex items-center justify-center">
            <video 
              src="/media/video1.mp4" 
              controls 
              className="w-full h-full object-contain"
              poster="/media/photo2.png"
            />
          </div>
        </section>
        
      </div>
    </CymaticLayout>
  );
};

export default Creatives;
