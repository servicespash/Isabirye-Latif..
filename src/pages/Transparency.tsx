import { CymaticLayout } from '../components/CymaticLayout';
import { SystemHeartbeat } from '../components/SystemHeartbeat';

export const Transparency = () => (
  <CymaticLayout>
    <main className="w-full py-16 px-4 md:px-0">
      <article className="max-w-4xl mx-auto space-y-16 p-8 md:p-16 border border-[var(--color-border)] bg-[var(--color-bg-primary)] rounded-2xl shadow-2xl transition-all duration-300">
        <div className="border-b-2 border-[var(--color-border)] pb-8">
          <h1 className="text-4xl font-black uppercase text-[var(--color-text-primary)]">// SYSTEM_TRANSPARENCY_PORTAL</h1>
          <p className="mt-4 text-[var(--color-text-secondary)]">Real-time operational telemetry for the Cymatic Evolution ecosystem.</p>
        </div>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <SystemHeartbeat />
            <div className="glass-card">
                <h3 className="font-mono text-xs text-[var(--color-accent)] mb-4">// NODE_STATUS</h3>
                <div className="space-y-4">
                    {['Hub_Core', 'Resonance_Engine', 'Sync_Layer'].map(node => (
                        <div key={node} className="flex justify-between items-center text-sm">
                            <span className="font-mono">{node}</span>
                            <span className="text-[var(--color-accent)] font-bold">ONLINE</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          <div className="glass-card space-y-6">
            <h3 className="font-mono text-xs text-[var(--color-accent)] mb-4">// OPERATIONAL_LOGIC</h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Transparency is our core architectural philosophy. We expose raw telemetry metrics directly to ensure institutional partners can verify system coherence, sync-pulse integrity, and node performance in real-time.
            </p>
          </div>
        </section>
      </article>
    </main>
  </CymaticLayout>
);
