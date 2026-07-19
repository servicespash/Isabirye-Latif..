import { CymaticLayout } from '../components/CymaticLayout';
import { ShieldCheck, Mail, Lock, Eye, CheckCircle, FileText, Globe } from 'lucide-react';

export const ComplianceProtocol = () => (
  <CymaticLayout>
    <div className="space-y-16 py-8">
      {/* Header */}
      <div className="border-b-2 border-[var(--color-border)] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold">// COMPLIANCE_STATUS: VERIFIED</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-[var(--color-text-primary)] tracking-tighter">
            Legal Protocol
          </h1>
          <p className="text-[var(--color-text-secondary)] font-mono text-xs tracking-wider max-w-xl uppercase leading-relaxed">
            Institutional framework governing data sovereignty, ethical engineering, and architectural transparency.
          </p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full">
          <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
          <span className="text-[9px] font-mono text-[var(--color-accent)] uppercase tracking-widest font-bold">Audit_Compliant_2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Data Sovereignty */}
          <section className="glass-card p-8 space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lock className="w-24 h-24" />
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-[var(--color-accent)]" />
              <h3 className="font-mono text-sm font-black text-[var(--color-text-primary)] uppercase tracking-[0.2em]">01. Data Sovereignty</h3>
            </div>
            <div className="space-y-4 text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
              <p>
                Cymatic Evolution is engineered on the principle of **Client-Side Primary Architecture**. Unlike centralized cloud systems that prioritize harvester-first data models, our infrastructure ensures that the student is the ultimate sovereign of their educational telemetry.
              </p>
              <ul className="space-y-2 list-none font-mono text-[10px] uppercase tracking-wide">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5" />
                  Local-first storage by default (SQLite/IndexedDB nodes).
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5" />
                  Zero-tracking on student PBL (Project Based Learning) datasets.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5" />
                  AES-GCM encryption for all cross-node synchronization events.
                </li>
              </ul>
            </div>
          </section>

          {/* Ethical AI & Engineering */}
          <section className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-[var(--color-accent)]" />
              <h3 className="font-mono text-sm font-black text-[var(--color-text-primary)] uppercase tracking-[0.2em]">02. Ethical Engineering</h3>
            </div>
            <p className="text-[var(--color-text-secondary)] font-sans text-sm leading-relaxed">
              Our codebases are audited for **Algorithmic Bias** and **Dark Patterns**. The Cymatic Study and Resonance engines are built to amplify human curiosity, not to exploit attention spans. We comply with the spirit of the GDPR and the specific educational directives of the Uganda Ministry of Education and Sports (MOES).
            </p>
          </section>

          {/* Contact & Transparency */}
          <section className="glass-card p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[var(--color-accent)]" />
              <h3 className="font-mono text-sm font-black text-[var(--color-text-primary)] uppercase tracking-[0.2em]">03. Institutional Contact</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[var(--color-text-secondary)] font-sans text-xs">
                  For legal inquiries, data protection audits, or institutional partnerships within the East African education sector.
                </p>
                <div className="space-y-2">
                  <a href="mailto:support@cymatichub.xyz" className="flex items-center gap-2 text-[var(--color-accent)] font-mono text-[11px] uppercase tracking-widest hover:underline">
                    <Mail className="w-3 h-3" /> legal@cymatichub.xyz
                  </a>
                  <a href="tel:+256768715065" className="flex items-center gap-2 text-[var(--color-text-secondary)] font-mono text-[11px] uppercase tracking-widest hover:text-[var(--color-accent)]">
                    <Globe className="w-3 h-3" /> +256 768 715065
                  </a>
                </div>
              </div>
              <div className="bg-black/20 p-4 rounded-xl border border-[var(--color-border)]/30 space-y-3">
                <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Office_Of_The_Architect</div>
                <div className="text-[11px] font-mono text-[var(--color-text-primary)]">
                  Kampala, Uganda<br />
                  Cymatic Hub Headquarters<br />
                  East Africa Regional Node
                </div>
              </div>
            </div>
          </section>

          {/* Core Staff & Engineering Team */}
          <section className="glass-card p-8 space-y-8">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[var(--color-accent)]" />
              <h3 className="font-mono text-sm font-black text-[var(--color-text-primary)] uppercase tracking-[0.2em]">04. Project Core Staff</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/40 flex items-center justify-center font-mono font-bold text-[var(--color-accent)]">IL</div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wider">Isabirye Latif</div>
                  <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Principal Architect / Solo Engineer</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 opacity-50 grayscale">
                <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-mono font-bold text-neutral-500">?</div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wider">Open Node</div>
                  <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Awaiting Verification</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Audits */}
        <div className="lg:col-span-4 space-y-8">
          <div className="p-6 border border-[var(--color-border)] rounded-2xl space-y-4">
            <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-[var(--color-text-primary)] flex items-center gap-2">
              <FileText className="w-3 h-3 text-[var(--color-accent)]" /> Quick_Docs
            </h4>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[var(--color-accent)]/50 transition-all text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-secondary)]">
                Terms of Protocol
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[var(--color-accent)]/50 transition-all text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-secondary)]">
                Privacy Manifest
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[var(--color-accent)]/50 transition-all text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-secondary)]">
                Cookie Sovereignty
              </button>
            </div>
          </div>

          <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-2xl space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-emerald-500">Audit_Logs</h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[9px] font-mono border-b border-emerald-500/10 pb-2">
                <span className="text-emerald-500/70">NCDC_ALIGNMENT</span>
                <span className="text-emerald-500">100%</span>
              </div>
              <div className="flex justify-between items-center text-[9px] font-mono border-b border-emerald-500/10 pb-2">
                <span className="text-emerald-500/70">DATA_ENCRYPTION</span>
                <span className="text-emerald-500">AES-256</span>
              </div>
              <div className="flex justify-between items-center text-[9px] font-mono border-b border-emerald-500/10 pb-2">
                <span className="text-emerald-500/70">GDPR_COMPLIANCE</span>
                <span className="text-emerald-500">VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CymaticLayout>
);
