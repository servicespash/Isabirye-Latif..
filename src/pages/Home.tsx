import { motion } from 'framer-motion';
import { CymaticLayout } from '../components/CymaticLayout';
import { GatewayCard } from '../components/GatewayCard';
import { SystemHeartbeat } from '../components/SystemHeartbeat';

export default function Home() {
  return (
    <CymaticLayout>
      <div className="space-y-24">

        {/* HERO: COMMAND CENTER */}
        <section className="text-center py-20 space-y-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-[var(--color-accent)] text-[10px] tracking-[0.4em] uppercase">
            // STATUS: ARCHITECTURAL_GENESIS_ACTIVE
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-[var(--color-text-primary)] leading-[0.9]"
          >
            Cymatic Evolution<br/>
            <span className="text-[var(--color-text-secondary)] italic">Command Center.</span>
          </motion.h1>
        </section>

        {/* GATEWAY GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GatewayCard 
            title="Cymatic Hub"
            narrative="The nexus of student potential and administrative oversight."
            functionality="PBL tracking, student trajectory, AI-monitored tutoring."
            intent="To synthesize chaotic educational experiences into a resonant, data-driven truth."
            path="/hub"
            actionText="Access Hub"
          />
          <GatewayCard 
            title="Resonance"
            narrative="The heartbeat of the institution."
            functionality="Live attendance, secure chat, encrypted calling protocols."
            intent="To maintain institutional coherence through real-time operational transparency."
            path="/projects"
            actionText="View Resonance"
          />
          <GatewayCard 
            title="Creatives"
            narrative="Digital output, raw and unyielding."
            functionality="Sonic energy, media streaming, brutalist photography."
            intent="To manifest the architect's conviction through digital media."
            path="/creatives"
            actionText="Enter Lab"
          />
        </section>

        {/* THE HEARTBEAT: REAL-TIME ANALYTICS */}
        <section className="space-y-8 py-20">
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
            <h3 className="font-mono text-sm uppercase tracking-widest">// System_Telemetry</h3>
            <span className="text-[var(--color-accent)] text-xs animate-pulse">● LIVE_OPERATIONAL</span>
          </div>
          <SystemHeartbeat />
        </section>
      </div>
    </CymaticLayout>
  );
}

