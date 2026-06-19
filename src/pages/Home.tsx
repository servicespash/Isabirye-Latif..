import { motion } from 'framer-motion';
import { CymaticLayout } from '../components/CymaticLayout';
import { SystemHeartbeat } from '../components/SystemHeartbeat';

export default function Home() {
  return (
    <CymaticLayout>
      <div className="max-w-6xl mx-auto px-6 space-y-24 py-12">
        
        {/* HERO: THE ARCHITECT'S MANIFESTO */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-[var(--color-accent)] text-[10px] tracking-[0.4em] uppercase">
              // SOLO_ARCHITECT_IDENTITY_VERIFIED
            </motion.div>
            <h1 className="font-serif text-6xl font-bold tracking-tighter leading-[0.9]">
              Isabirye Latif<br/>
              <span className="italic text-[var(--color-text-secondary)]">Architect of Resonance.</span>
            </h1>
            <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed border-l border-[var(--color-accent)] pl-6">
              I do not just build systems; I orchestrate the future. Through Cymatic Hub and Resonance, I provide the rigid structure needed to bind institutional effort into a unified, resonant frequency. My work is not just code—it is the digital embodiment of a synchronized, intentional society. It's just the beginning. "MY MANIFESTO"
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="border border-[var(--color-border)] p-2 shadow-2xl"
          >
            <img src="/media/photo1.png" alt="Isabirye Latif - Solo Architect" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
        </section>

        {/* INSTITUTIONAL NODES */}
        <section className="space-y-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 border border-[var(--color-border)]">
                <img src="/cymatic-hub-preview.png" alt="Cymatic Hub Interface" className="w-full h-auto" />
             </div>
             <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-4xl font-serif font-bold tracking-tight">Cymatic Hub</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  The institutional register and synchronization engine. Students and teachers align here through PBL tracking, AI-tutored study guides, and real-time educational charts.
                </p>
                <a href="/hub" className="inline-block px-6 py-3 border border-[var(--color-accent)] text-[10px] font-mono uppercase hover:bg-[var(--color-accent)] hover:text-black transition-all">// Access Hub Nexus</a>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
                <h3 className="text-4xl font-serif font-bold tracking-tight">Cymatic Resonance</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  The institutional heartbeat. Precision-engineered for elite teams. Live attendance, total clarity, and meeting orchestration for executions that demand perfection.
                </p>
                <a href="/projects" className="inline-block px-6 py-3 border border-[var(--color-accent)] text-[10px] font-mono uppercase hover:bg-[var(--color-accent)] hover:text-black transition-all">// View Resonance Pulse</a>
             </div>
             <div className="border border-[var(--color-border)]">
                <img src="/cymatic-resonance-preview.png" alt="Cymatic Resonance System" className="w-full h-auto" />
             </div>
          </div>
        </section>

        <section className="border-t border-[var(--color-border)] pt-20">
          <SystemHeartbeat />
        </section>
      </div>
    </CymaticLayout>
  );
}
