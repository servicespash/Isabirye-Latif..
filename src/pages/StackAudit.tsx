import React, { useState } from 'react';
import { CymaticLayout } from '../components/CymaticLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Tooltip
} from 'recharts';
import { 
  Cpu, 
  Layers, 
  Database, 
  Terminal, 
  Activity, 
  ShieldCheck, 
  Sparkles,
  Zap,
  BookOpen
} from 'lucide-react';
import { CymaticInfrastructureMonitor } from '../components/CymaticInfrastructureMonitor';

// ... Keep existing AUDIT_DATA or modify as needed ...
interface AuditNode {
  category: string;
  proficiency: number;
  depth: number;
  description: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  icon: React.ComponentType<{ className?: string }>;
}

const AUDIT_DATA: AuditNode[] = [
  {
    category: 'Core Frontend',
    proficiency: 95,
    depth: 90,
    description: 'React 19 (Concurrent Renderer) & Vite 8 engine compilation. Optimized routing systems and modular asset delivery systems.',
    tools: ['React 19', 'TypeScript', 'Vite 8', 'Tailwind CSS v4'],
    metrics: [
      { label: 'HMR Overhead', value: '< 150ms' },
      { label: 'Hydration Speed', value: 'Instantaneous' },
      { label: 'Asset Footprint', value: 'Highly Optimized' }
    ],
    icon: Cpu,
  },
  {
    category: 'Motion & UX',
    proficiency: 88,
    depth: 85,
    description: 'Framer Motion spring-physics orchestrations, responsive layout transitions, tactile responsive components, and custom hardware-accelerated fluid grids.',
    tools: ['Framer Motion', 'Web Canvas API', 'Kinetic Spring Curves'],
    metrics: [
      { label: 'Frame Rate', value: 'Stable 60/120fps' },
      { label: 'Animation Engine', value: 'Hardware Accelerated' },
      { label: 'Cursor Precision', value: 'Sub-pixel fine' }
    ],
    icon: Activity,
  },
  {
    category: 'Cloud Firestore',
    proficiency: 90,
    depth: 88,
    description: 'Granular Firestore schema structure combined with custom Zero-Trust Firestore Security Rules verifying content lengths, formats, ID compliance, and rate safety.',
    tools: ['Firebase Firestore', 'Firestore Rules', 'Firebase Auth'],
    metrics: [
      { label: 'Data Latency', value: '< 80ms sync' },
      { label: 'Write Security', value: 'Strict Type Checked' },
      { label: 'Telemetry Bounds', value: 'Schema Enforced' }
    ],
    icon: Database,
  },
  {
    category: 'DevOps & Builds',
    proficiency: 85,
    depth: 80,
    description: 'Custom server-side TS compiling via Esbuild bundles. Dynamic CJS pipeline generation with Express runtime and robust ESLint syntax checking.',
    tools: ['Esbuild CJS', 'Express v5', 'Node Engine', 'ESLint 10'],
    metrics: [
      { label: 'Bundle Output', value: 'Single CJS package' },
      { label: 'Compilation Speed', value: '< 1.2s' },
      { label: 'Linter Health', value: 'Zero warnings' }
    ],
    icon: Terminal,
  },
  {
    category: 'Math Cymatics',
    proficiency: 82,
    depth: 75,
    description: 'Calculations for signal resonance frequency grids, web physics integration, audio node math representation, and dynamic structural telemetry grids.',
    tools: ['Web Audio API', 'Physics Springs', 'Frequency Math Models'],
    metrics: [
      { label: 'Math Accuracy', value: 'High Floating Point' },
      { label: 'Resonance Delta', value: 'Adaptive Grid' },
      { label: 'Visual Refreshes', value: 'RequestAnimationFrame' }
    ],
    icon: Sparkles,
  },
];

export const StackAudit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Core Frontend');

  const selectedNode = AUDIT_DATA.find(node => node.category === activeCategory) || AUDIT_DATA[0];

  const radarColorProficiency = 'var(--color-accent)';
  const radarColorDepth = '#f59e0b'; // Amber-500

  const chartData = AUDIT_DATA.map(node => ({
    subject: node.category,
    Proficiency: node.proficiency,
    'Stack Depth': node.depth,
  }));

  const handleAngleAxisClick = (data: { value?: string } | null | undefined) => {
    if (data && data.value) {
      setActiveCategory(data.value);
    }
  };

  return (
    <CymaticLayout>
      <div className="space-y-12 pb-16">
        <div className="border-b-2 border-[var(--color-border)] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-500">// STACK_INTEGRITY_STABLE</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase text-[var(--color-text-primary)] tracking-tight">
              // ARCHITECTURAL_STACK_AUDIT
            </h1>
            <p className="text-[var(--color-text-secondary)] font-mono text-xs tracking-wider max-w-2xl">
              Real-time visualization of engineering proficiency and tech stack structural depth across the sovereign portfolio.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 font-mono text-[10px] text-[var(--color-text-secondary)]">
            <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
            <span>ZERO-TRUST RULES COMPLIANT</span>
          </div>
        </div>

        {/* Live Infrastructure Metrics */}
        <section className="grid md:grid-cols-2 gap-8">
            <CymaticInfrastructureMonitor subdomain="study.cymatichub.xyz" />
            <CymaticInfrastructureMonitor subdomain="resonance.cymatichub.xyz" />
        </section>

        {/* Dynamic Interactive Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 glass-card p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[420px]">
            <div className="absolute top-4 left-4 font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
              [VISUAL_RADAR_AUDIT_ENGINE]
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-40" />
            
            <div className="absolute top-4 right-4 flex gap-4 text-[9px] font-mono uppercase tracking-widest text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-[var(--color-accent)] border border-cyan-400/20" />
                Proficiency
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-amber-500 border border-amber-400/20" />
                Stack Depth
              </span>
            </div>

            <div className="w-full h-[320px] md:h-[350px] mt-6 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                  <PolarGrid stroke="var(--color-border)" strokeWidth={0.5} />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: 'var(--color-text-secondary)', fontSize: 10, fontFamily: 'JetBrains Mono', fontWeight: 'bold' }}
                    onClick={(data) => handleAngleAxisClick(data)}
                    style={{ cursor: 'pointer' }}
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 100]} 
                    tick={{ fill: 'var(--color-text-secondary)', fontSize: 8 }}
                    axisLine={false}
                  />
                  <Radar
                    name="Proficiency"
                    dataKey="Proficiency"
                    stroke={radarColorProficiency}
                    fill={radarColorProficiency}
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Stack Depth"
                    dataKey="Stack Depth"
                    stroke={radarColorDepth}
                    fill={radarColorDepth}
                    fillOpacity={0.1}
                    strokeWidth={1.5}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(5, 5, 5, 0.95)',
                      borderColor: 'var(--color-border)',
                      borderRadius: '8px',
                      fontFamily: 'JetBrains Mono',
                      fontSize: '10px',
                      color: '#ffffff',
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="text-center font-mono text-[9px] text-neutral-500 mt-2">
              PRO TIP: CLICK CATEGORY LABELS ON THE RADAR RADIAL TO INSPECT EACH AUDIT SUITE
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex flex-wrap gap-2">
              {AUDIT_DATA.map((node) => {
                const isSelected = node.category === activeCategory;
                const Icon = node.icon;
                return (
                  <button
                    key={node.category}
                    onClick={() => setActiveCategory(node.category)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-[10px] font-mono uppercase tracking-wider transition-all ${
                      isSelected
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-white shadow-lg shadow-cyan-500/5'
                        : 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/10 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span>{node.category}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="glass-card p-6 space-y-6 border border-neutral-800"
              >
                <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-cyan-500/20">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-white text-xs font-black uppercase tracking-widest">{selectedNode.category}</h3>
                      <p className="text-[9px] text-neutral-500 font-mono">SPECIFIED MODULE TELEMETRY</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-black text-white font-mono">{selectedNode.proficiency}%</div>
                    <div className="text-[8px] text-[var(--color-accent)] font-mono">STABILITY RANK</div>
                  </div>
                </div>

                <p className="text-neutral-300 font-sans text-xs leading-relaxed">
                  {selectedNode.description}
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {selectedNode.metrics.map((metric) => (
                    <div key={metric.label} className="p-3 rounded-lg border border-neutral-900 bg-black/40 text-center font-mono">
                      <div className="text-neutral-500 text-[8px] uppercase tracking-wider mb-1">{metric.label}</div>
                      <div className="text-white text-[9px] font-bold">{metric.value}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">DEPLOYED COMPILER SUITE:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.tools.map((tool) => (
                      <span key={tool} className="flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-800 text-[9px] font-mono">
                        <Zap className="w-2.5 h-2.5 text-amber-500" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950 text-neutral-500 text-[9px] font-mono uppercase tracking-widest leading-loose flex gap-3">
              <BookOpen className="w-4 h-4 text-neutral-600 flex-shrink-0 mt-0.5" />
              <span>
                INTEGRITY STANDARDS PLEDGE: ALL PORTFOLIO APPLICATIONS DEPLOYED ON THE CYMATIC ORBIT MATRIX RUN FULLY OPTIMIZED COMPILED MODULES WITH ZERO SIMULATED LOGS OR ARTIFICIAL ARCHITECTURES.
              </span>
            </div>

          </div>
        </div>
      </div>
    </CymaticLayout>
  );
};

