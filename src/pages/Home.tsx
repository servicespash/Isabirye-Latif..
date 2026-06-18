import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PortraitCard } from '../components/PortraitCard';
import { SystemHeartbeat } from '../components/SystemHeartbeat';
import { CymaticLayout } from '../components/CymaticLayout';

export default function Home() {
  return (
    <CymaticLayout>
      <div className="space-y-32">
        
        {/* HERO: THE ARCHITECT'S PROMISE */}
        <section className="flex flex-col justify-center items-center text-center gap-12 py-20">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-[var(--color-accent)] text-[10px] tracking-[0.4em] uppercase">
              // STATUS: ARCHITECTURAL_GENESIS_ACTIVE
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="font-serif text-5xl md:text-7xl font-bold tracking-tighter text-[var(--color-text-primary)] leading-[0.9]"
            >
              Architecting<br/>
              <span className="text-[var(--color-text-secondary)] italic">Human Potential.</span>
            </motion.h1>
          </div>
          <div className="font-sans text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            I am Isabirye Latif. I build systems where education meets execution. We are not just digitizing schools; we are harmonizing the chaotic frequency of the academic experience into a singular, resonant truth.
          </div>
        </section>
        {/* THE OPERATIONAL GRID: GATEWAYS TO THE ENGINE */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <PortraitCard />
          </div>
          
          <div className="md:col-span-7 space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl font-bold text-[var(--color-text-primary)]">The Cymatic Ecosystem</h2>
              <p className="font-mono text-[var(--color-accent)] text-sm tracking-widest uppercase">// Institutional Sovereign Infrastructure</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { to: '/hub', title: 'Cymatic Hub', desc: 'Institutional management & PBL synchronization.' },
                { to: '/resonance', title: 'Resonance', desc: 'Live execution, calls, & meeting protocols.' },
                { to: '/lab', title: 'Resonance Lab', desc: 'AI-monitored tutoring & progress analytics.' },
                { to: '/manifesto', title: 'The Architect', desc: 'Read the philosophy behind the build.' }
              ].map((item, i) => (
                <Link to={item.to} key={item.title}>
                  <motion.div 
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="p-6 border border-[var(--color-border)] rounded-2xl transition-colors duration-300"
                  >
                    <h4 className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest mb-2">// 0{i + 1}_ENTRY</h4>
                    <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* THE HEARTBEAT: REAL-TIME ANALYTICS */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
            <h3 className="font-mono text-sm uppercase tracking-widest">// System_Telemetry</h3>
            <span className="text-[var(--color-accent)] text-xs animate-pulse">● LIVE_OPERATIONAL</span>
          </div>
          <SystemHeartbeat />
        </section>
        
        {/* SIGNATURE FOOTER */}
        <footer className="pt-20 border-t border-[var(--color-border)] text-center space-y-4">
          <p className="font-serif italic text-xl text-[var(--color-text-secondary)]">"Built with rhythm, code, and conviction."</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)]">Isabirye Latif // Solo Architect // 2026</p>
        </footer>
      </div>
    </CymaticLayout>
  );
}
