import React, { useState } from 'react';
import { CymaticLayout } from '../components/CymaticLayout';
import { SubdomainSeoAuditor } from '../components/SubdomainSeoAuditor';
import { calculateReadingTime } from '../lib/readingTime';
import { 
  Layers, 
  ExternalLink, 
  Cpu, 
  CheckSquare, 
  Activity, 
  TrendingUp,
  Award,
  Shield
} from 'lucide-react';

export const TwinEngines: React.FC = () => {
  const [activeAuditor, setActiveAuditor] = useState<'hub' | 'resonance' | null>(null);

  const textContent = `
    The dual powerhouse driving our entire digital presence. This dedicated hub enables you to inspect, 
    launch, and live-audit both core operations platforms: Cymatic Study (education compliance) 
    and Cymatic Resonance (operational telemetry).
    As a professional systems architect, I design digital structures that resonate with operational excellence. 
    Our brand ecosystem is powered by two distinct, self-contained but tightly aligned platforms engineered to optimize both 
    educational delivery (Cymatic Study) and organizational telemetry (Cymatic Resonance).
    A secure, high-resilience study ecosystem for Ugandan NCDC and MOES syllabus compliance. 
    Empowers students, educators, and administrators to orchestrate study materials, track PBL (Project-Based Learning), 
    and coordinate educational milestones.
    An advanced team execution dashboard. Handles real-time attendance registration, frequency waveform simulation, 
    and operational team velocity telemetry for remote-first teams and rigorous institutions.
  `;
  const readingTime = calculateReadingTime(textContent);

  return (
    <CymaticLayout>
      <div className="space-y-16">
        
        {/* HERO TITLE HEADER */}
        <header className="border-b border-[var(--color-border)]/30 pb-8 text-left space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase font-mono">
              <span className="inline-block w-2 h-2 bg-[var(--color-accent)] animate-pulse rounded-full" />
              <span>// SYSTEM_TWIN_ENGINES_PROTOCOL_V4</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">// {readingTime} MIN READ</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase break-words">
            The Twin Engines
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-sans max-w-4xl leading-relaxed">
            The dual powerhouse driving our entire digital presence. This dedicated hub enables you to inspect, 
            launch, and live-audit both core operations platforms: <strong>Cymatic Study</strong> (education compliance) 
            and <strong>Cymatic Resonance</strong> (operational telemetry).
          </p>
        </header>

        {/* 1. THE HERO PITCH BANNER */}
        <div className="relative p-8 rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-black/60 to-[var(--color-bg-secondary)]/30 backdrop-blur-xl overflow-hidden space-y-6 text-left">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-10 bottom-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)]/20 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-2xl border border-[var(--color-accent)]/25">
                <Layers className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] uppercase">// INTEGRATED_SYSTEMS_MATRIX</span>
                <h2 className="text-xl font-bold font-serif uppercase text-white tracking-tight">The Twin Engines of Cymatic Evolution</h2>
              </div>
            </div>
            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-wider text-slate-400">
              Architect: Isabirye Latif
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl font-sans">
            As a professional systems architect, I design digital structures that resonate with operational excellence. 
            Our brand ecosystem is powered by two distinct, self-contained but tightly aligned platforms engineered to optimize both 
            educational delivery (Cymatic Study) and organizational telemetry (Cymatic Resonance).
          </p>

          {/* DUAL MARKET LAUNCH CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* CARD A: CYMATIC HUB */}
            <div className="p-6 rounded-2xl border border-cyan-500/25 bg-cyan-950/10 backdrop-blur-md relative group hover:border-cyan-400/50 transition-all duration-300 space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-mono px-2.5 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded uppercase font-bold tracking-wider">
                  // PLATFORM_01 // THE_HEARTBEAT
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <h3 className="text-lg font-black tracking-tight text-white uppercase font-sans">Cymatic Study</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                A secure, high-resilience study ecosystem for Ugandan NCDC and MOES syllabus compliance. 
                Empowers students, educators, and administrators to orchestrate study materials, track PBL (Project-Based Learning), 
                and coordinate educational milestones.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="https://study.cymatichub.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  referrerPolicy="no-referrer"
                  className="px-4 py-2.5 bg-cyan-500 text-black font-mono text-[10px] font-bold rounded-xl uppercase tracking-wider hover:bg-cyan-400 text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveAuditor(activeAuditor === 'hub' ? null : 'hub')}
                  className={`px-4 py-2.5 border font-mono text-[10px] font-bold rounded-xl uppercase tracking-wider transition-all ${
                    activeAuditor === 'hub' 
                      ? 'bg-cyan-400/20 text-cyan-400 border-cyan-400/40'
                      : 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/5'
                  }`}
                >
                  {activeAuditor === 'hub' ? 'Hide Audit' : 'Track Site Performance'}
                </button>
              </div>
              <div className="text-[10px] font-mono text-cyan-400/50">// study.cymatichub.xyz</div>
            </div>

            {/* CARD B: CYMATIC RESONANCE */}
            <div className="p-6 rounded-2xl border border-purple-500/25 bg-purple-950/10 backdrop-blur-md relative group hover:border-purple-400/50 transition-all duration-300 space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-mono px-2.5 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded uppercase font-bold tracking-wider">
                  // PLATFORM_02 // THE_ANALYTICAL_ENGINE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
              </div>
              <h3 className="text-lg font-black tracking-tight text-white uppercase font-sans">Cymatic Resonance</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                An advanced team execution dashboard. Handles real-time attendance registration, frequency waveform simulation, 
                and operational team velocity telemetry for remote-first teams and rigorous institutions.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="https://resonance.cymatichub.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  referrerPolicy="no-referrer"
                  className="px-4 py-2.5 bg-purple-600 text-white font-mono text-[10px] font-bold rounded-xl uppercase tracking-wider hover:bg-purple-500 text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>Access Registry</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveAuditor(activeAuditor === 'resonance' ? null : 'resonance')}
                  className={`px-4 py-2.5 border font-mono text-[10px] font-bold rounded-xl uppercase tracking-wider transition-all ${
                    activeAuditor === 'resonance' 
                      ? 'bg-purple-400/20 text-purple-400 border-purple-400/40'
                      : 'border-purple-500/30 text-purple-400 hover:bg-purple-500/5'
                  }`}
                >
                  {activeAuditor === 'resonance' ? 'Hide Audit' : 'Track Site Performance'}
                </button>
              </div>
              <div className="text-[10px] font-mono text-purple-400/50">// resonance.cymatichub.xyz</div>
            </div>
          </div>
        </div>

        {/* 2. DYNAMIC CRAWLER AUDIT ENGINE INTEGRATION */}
        {activeAuditor && (
          <div className="space-y-4 text-left">
            <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-[var(--color-accent)]">
              // ACTIVE_CRAWL_AUDIT_STATION
            </h3>
            <SubdomainSeoAuditor subdomain={activeAuditor === 'hub' ? 'study.cymatichub.xyz' : 'resonance.cymatichub.xyz'} />
          </div>
        )}

        {/* 3. DYNAMIC COMPARISON BLUEPRINT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl border border-[var(--color-border)]/50 bg-black/30 backdrop-blur-md space-y-6">
              <div className="flex justify-between items-center border-b border-[var(--color-border)]/20 pb-4 font-mono">
                <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-[var(--color-accent)]">
                  <Cpu className="w-4 h-4" />
                  SYSTEM_BLUEPRINT_AND_SPECIFICATIONS
                </h3>
                <span className="text-[9px] uppercase text-slate-500">SPEC_SHEET // V1.2</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* HUB FUNCTIONAL MODULES */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold font-mono text-cyan-400 flex items-center gap-2 border-b border-cyan-500/20 pb-2">
                    <CheckSquare className="w-3.5 h-3.5" /> CYMATIC HUB BLUEPRINT
                  </h4>
                  <ul className="space-y-3 font-mono text-[10px] text-slate-300">
                    <li className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-transparent hover:border-cyan-500/20">
                      <span className="text-cyan-400 block font-bold uppercase mb-1">// Syllabus Node Router</span>
                      Interactive mappings for S3 biology, chemistry, and mathematics aligned fully with Uganda MOES structures.
                    </li>
                    <li className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-transparent hover:border-cyan-500/20">
                      <span className="text-cyan-400 block font-bold uppercase mb-1">// PBL Tracking Interface</span>
                      Unified project metric dashboard calculating cohort task velocity, completion streams, and study engagement indexes.
                    </li>
                    <li className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-transparent hover:border-cyan-500/20">
                      <span className="text-cyan-400 block font-bold uppercase mb-1">// Dynamic Document Engine</span>
                      Built-in automated PDF compiler that generates structured study guides and lesson plan compliance sheets dynamically.
                    </li>
                  </ul>
                </div>

                {/* RESONANCE FUNCTIONAL MODULES */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold font-mono text-purple-400 flex items-center gap-2 border-b border-purple-500/20 pb-2">
                    <Activity className="w-3.5 h-3.5" /> CYMATIC RESONANCE BLUEPRINT
                  </h4>
                  <ul className="space-y-3 font-mono text-[10px] text-slate-300">
                    <li className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-transparent hover:border-purple-500/20">
                      <span className="text-purple-400 block font-bold uppercase mb-1">// Team Telemetry Waves</span>
                      An interactive oscilloscope visualizing alignment frequencies (432Hz - 528Hz) to map and regulate team productivity.
                    </li>
                    <li className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-transparent hover:border-purple-500/20">
                      <span className="text-purple-400 block font-bold uppercase mb-1">// High-Clarity Registry Matrix</span>
                      Instantaneous attendee presence monitoring with local-first secure cryptographic state handshakes.
                    </li>
                    <li className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-transparent hover:border-purple-500/20">
                      <span className="text-purple-400 block font-bold uppercase mb-1">// Admin Broadcast Rail</span>
                      Secure instructor/manager pipeline to push coordination directives and sync states directly to sub-nodes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MARKETING ENGINE & STRATEGY PANEL */}
            <div className="p-6 rounded-2xl border border-[var(--color-border)]/50 bg-black/30 backdrop-blur-md space-y-6">
              <div className="flex justify-between items-center border-b border-[var(--color-border)]/20 pb-4 font-mono">
                <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-[var(--color-accent)]">
                  <TrendingUp className="w-4 h-4" />
                  BRAND_MARKETING_MATRIX_&_STRATEGY
                </h3>
                <span className="text-[9px] text-emerald-400 font-bold uppercase">// COMMERCIAL_LAUNCH</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-[10px] text-slate-300">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <span className="p-1 px-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-[8px] font-bold block w-max uppercase">// THE VALUE PROP</span>
                  <h5 className="font-bold text-white uppercase text-xs">Sovereign Integrity</h5>
                  <p className="text-slate-400 font-sans leading-relaxed text-[11px]">
                    We solve educational compliance. By digitizing MOES standard curriculums and providing secure offline capabilities, schools maintain total data sovereignty.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <span className="p-1 px-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded text-[8px] font-bold block w-max uppercase">// GO-TO-MARKET</span>
                  <h5 className="font-bold text-white uppercase text-xs">Direct School Audits</h5>
                  <p className="text-slate-400 font-sans leading-relaxed text-[11px]">
                    Deploying local administrative councils and showing direct time-savings in S3 curriculum compliance checks and registrar audits.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <span className="p-1 px-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-[8px] font-bold block w-max uppercase">// SCALE PARADIGM</span>
                  <h5 className="font-bold text-white uppercase text-xs">The Wave Network</h5>
                  <p className="text-slate-400 font-sans leading-relaxed text-[11px]">
                    As student terminals multiply, Cymatic Study mirrors data peer-to-peer, drastically reducing hosting costs while securing local school servers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* ARCHITECT'S TECHNICAL AUDIT CARD */}
            <div className="p-6 rounded-2xl border border-[var(--color-border)]/50 bg-black/40 backdrop-blur-xl space-y-4">
              <h4 className="text-xs font-bold font-mono uppercase tracking-widest border-b border-[var(--color-border)]/20 pb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-accent)] animate-pulse" />
                Architectural_Audit
              </h4>

              <div className="space-y-4 text-[10px] font-mono">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Codebase Audit Status:</span>
                    <span className="text-emerald-400 font-bold uppercase">Passed</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[100%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Thematic Contrast Rate:</span>
                    <span className="text-[var(--color-accent)] font-bold">WebAIM WCAG 2.1 AA</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[var(--color-accent)] h-full w-[96%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Local State Persistence:</span>
                    <span className="text-cyan-400 font-bold">100% Offline Robust</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full w-[100%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Uganda MOES Syllabus Align:</span>
                    <span className="text-yellow-400 font-bold">Fully Certified</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-yellow-400 h-full w-[100%]" />
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 text-[9px] font-mono text-slate-500 leading-relaxed uppercase">
                System audited globally against modern web safety protocols and high-fidelity fluid grid layouts.
              </div>
            </div>

            {/* BLUEPRINT CERTIFICATE OF INTENT */}
            <div className="p-6 rounded-2xl border border-dashed border-[var(--color-border)]/30 bg-black/40 text-center font-mono space-y-3">
              <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto border border-yellow-500/20">
                <Award className="w-4 h-4 text-yellow-500" />
              </div>
              <p className="text-[9px] text-white/50 uppercase tracking-widest leading-normal">
                "My output defines my existence."<br/>
                <span className="text-slate-400 font-bold block mt-1">— ISABIRYE LATIF</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </CymaticLayout>
  );
};

export default TwinEngines;
