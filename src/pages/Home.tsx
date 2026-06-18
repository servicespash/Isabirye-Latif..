import { motion } from 'framer-motion';
import { CymaticLayout } from '../components/CymaticLayout';
import { GatewayCard } from '../components/GatewayCard';
import { SystemHeartbeat } from '../components/SystemHeartbeat';

export default function Home() {
  return (
    <CymaticLayout>
      <div className="space-y-12">
        
        {/* HERO: COMMAND CENTER */}
        <section className="text-center py-10 space-y-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-[var(--color-accent)] text-[8px] tracking-[0.2em] uppercase">
            // STATUS: ARCHITECTURAL_GENESIS_ACTIVE
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl font-bold tracking-tighter text-[var(--color-text-primary)] leading-[1.1]"
          >
            Cymatic Evolution<br/>
            <span className="text-[var(--color-text-secondary)] italic">Command Center.</span>
          </motion.h1>
          <p className="font-sans text-xs text-[var(--color-text-secondary)] max-w-lg mx-auto leading-relaxed">
            I am Isabirye Latif. I build systems where education meets execution. This is the command center for the architecture of resilience.
          </p>
        </section>

        {/* GATEWAY GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <GatewayCard 
            title="Cymatic Hub"
            narrative="Student potential nexus."
            functionality="PBL tracking, AI-tutoring."
            intent="Resonant truth."
            path="/hub"
            actionText="Access Hub"
          />
          <GatewayCard 
            title="Resonance"
            narrative="Institutional heartbeat."
            functionality="Live attendance, real-time sync."
            intent="Operational transparency."
            path="/projects"
            actionText="View Resonance"
          />
          <GatewayCard 
            title="Creatives"
            narrative="Digital output, raw."
            functionality="Sonic, media, brutalist photo."
            intent="Architectural conviction."
            path="/creatives"
            actionText="Enter Lab"
          />
        </section>

        {/* THE HEARTBEAT */}
        <section className="space-y-4 py-10">
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2">
            <h3 className="font-mono text-[9px] uppercase tracking-widest">// System_Telemetry</h3>
            <span className="text-[var(--color-accent)] text-[8px] animate-pulse">● LIVE_OPERATIONAL</span>
          </div>
          <SystemHeartbeat />
        </section>
      </div>
    </CymaticLayout>
  );
}
