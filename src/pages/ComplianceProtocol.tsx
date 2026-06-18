import { CymaticLayout } from '../components/CymaticLayout';

export const ComplianceProtocol = () => (
  <CymaticLayout>
    <main className="w-full py-16 px-4 md:px-0">
      <article className="max-w-4xl mx-auto space-y-16 p-8 md:p-16 border border-[var(--color-border)] bg-[var(--color-bg-primary)] rounded-2xl shadow-2xl transition-all duration-300">
        <div className="border-b-2 border-[var(--color-border)] pb-8">
          <h1 className="text-4xl font-black uppercase text-[var(--color-text-primary)]">// INSTITUTIONAL_TRUST_PROTOCOL</h1>
        </div>

        <section className="glass-card space-y-6">
          <h3 className="font-mono text-sm font-bold text-[var(--color-accent)]">// DATA_SOVEREIGNTY</h3>
          <p className="text-[var(--color-text-secondary)] font-sans text-justify">Cymatic Evolution is designed with a privacy-first, local-storage primary architecture. User data remains contained within the architectural client boundary. We treat data sovereignty as a fundamental feature, not a legal obligation.</p>
        </section>

        <section className="glass-card space-y-6">
          <h3 className="font-mono text-sm font-bold text-[var(--color-accent)]">// SYSTEM_INTEGRITY</h3>
          <p className="text-[var(--color-text-secondary)] font-sans text-justify">The integrity of this ecosystem is maintained through strict modularity and a minimalist dependency graph. Every system component is audited for performance and security risks at the architectural level.</p>
        </section>
      </article>
    </main>
  </CymaticLayout>
);
