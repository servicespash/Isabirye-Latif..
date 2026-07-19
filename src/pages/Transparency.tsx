import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CymaticLayout } from '../components/CymaticLayout';
import { SystemHeartbeat } from '../components/SystemHeartbeat';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Activity, 
  Cpu, 
  Database, 
  Zap, 
  RefreshCw, 
  TrendingUp, 
  Sliders, 
  Clock, 
  ShieldCheck,
  CheckCircle,
  Download,
  Check
} from 'lucide-react';

interface TelemetryPoint {
  time: string;
  throughput: number;
  growth: number;
  syncRate: number;
}

const CHRONO_PRESETS: Record<string, TelemetryPoint[]> = {
  '24h_pulse': [
    { time: '08:00', throughput: 120, growth: 105, syncRate: 98.2 },
    { time: '10:00', throughput: 340, growth: 154, syncRate: 97.8 },
    { time: '12:00', throughput: 450, growth: 210, syncRate: 99.4 },
    { time: '14:00', throughput: 520, growth: 298, syncRate: 98.9 },
    { time: '16:00', throughput: 580, growth: 385, syncRate: 99.2 },
    { time: '18:00', throughput: 720, growth: 420, syncRate: 99.8 },
    { time: '20:00', throughput: 640, growth: 442, syncRate: 99.5 },
    { time: '22:00', throughput: 480, growth: 450, syncRate: 98.7 },
  ],
  '30d_evolution': [
    { time: 'Day 01', throughput: 1100, growth: 450, syncRate: 97.5 },
    { time: 'Day 05', throughput: 2300, growth: 680, syncRate: 98.0 },
    { time: 'Day 10', throughput: 4800, growth: 950, syncRate: 98.4 },
    { time: 'Day 15', throughput: 6200, growth: 1240, syncRate: 99.1 },
    { time: 'Day 20', throughput: 8900, growth: 1800, syncRate: 99.3 },
    { time: 'Day 25', throughput: 11200, growth: 2450, syncRate: 99.6 },
    { time: 'Day 30', throughput: 14500, growth: 3120, syncRate: 99.8 },
  ],
  '1y_sovereign': [
    { time: 'Jan', throughput: 15000, growth: 1200, syncRate: 96.8 },
    { time: 'Mar', throughput: 32000, growth: 2800, syncRate: 97.4 },
    { time: 'May', throughput: 58000, growth: 5400, syncRate: 98.1 },
    { time: 'Jul', throughput: 94000, growth: 8900, strokeColor: 'var(--color-accent)' }, // Fix typo from build/metadata if needed, but keep the interface
    { time: 'Jul', throughput: 94000, growth: 8900, syncRate: 98.9 },
    { time: 'Sep', throughput: 145000, growth: 14200, syncRate: 99.3 },
    { time: 'Nov', throughput: 210000, growth: 21500, syncRate: 99.7 },
    { time: 'Dec', throughput: 280000, growth: 31200, syncRate: 99.9 },
  ]
};

// Clean up duplicate Jan/Jul keys if needed
CHRONO_PRESETS['1y_sovereign'] = [
  { time: 'Jan', throughput: 15000, growth: 1200, syncRate: 96.8 },
  { time: 'Mar', throughput: 32000, growth: 2800, syncRate: 97.4 },
  { time: 'May', throughput: 58000, growth: 5400, syncRate: 98.1 },
  { time: 'Jul', throughput: 94000, growth: 8900, syncRate: 98.9 },
  { time: 'Sep', throughput: 145000, growth: 14200, syncRate: 99.3 },
  { time: 'Nov', throughput: 210000, growth: 21500, syncRate: 99.7 },
  { time: 'Dec', throughput: 280000, growth: 31200, syncRate: 99.9 },
];

const LOG_MESSAGES = [
  'Node terminal #04-West requested telemetry broadcast',
  'Synchronized math equations PBL vector dataset',
  'Uganda MOES curriculum parser verified 100% compliance',
  'Sovereign state verified by cryptographic key exchange',
  'Resonance oscillator shifted to 432Hz for deep alignment',
  'Syllabus tracking module flushed temporary cached assets',
  'Active educator latif_01 initialized remote-cohort session',
  'Mirroring peer-to-peer data clusters to sub-nodes',
  'Handshake established between Study_Core and Resonance_Engine',
  'Integrity audit executed on local SQLite caches'
];

const STATUS_OPTIONS = ['SUCCESS', 'SYNCED', 'RESONATED', 'AUDITED', 'INFO'];

interface TooltipPayloadItem {
  name: string;
  value: number;
  stroke?: string;
  color?: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
  unit?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label, unit }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0c0c0e] border border-slate-800 p-3 rounded-xl font-mono text-[10px] shadow-2xl backdrop-blur-md space-y-1 text-left">
        <p className="text-slate-500 border-b border-white/5 pb-1 mb-1 uppercase tracking-wider">{`Interval: ${label}`}</p>
        <p className="font-bold" style={{ color: payload[0].stroke || payload[0].color }}>
          {`${payload[0].name.toUpperCase()}: ${payload[0].value.toLocaleString()}${unit}`}
        </p>
      </div>
    );
  }
  return null;
};

export const Transparency: React.FC = () => {
  const [chronoPreset, setChronoPreset] = useState<'24h_pulse' | '30d_evolution' | '1y_sovereign'>('24h_pulse');
  const [activeMetric, setActiveMetric] = useState<'throughput' | 'growth' | 'syncRate'>('throughput');
  const [chartData, setChartData] = useState<TelemetryPoint[]>(() => JSON.parse(JSON.stringify(CHRONO_PRESETS['24h_pulse'])));
  
  // Simulation State
  const [isSimulating, setIsSimulating] = useState(true);
  const [syncCode, setSyncCode] = useState('#CYM-LOG-88C4');
  const [isExported, setIsExported] = useState(false);
  const [isSpiked, setIsSpiked] = useState(false);

  // Terminal Logs State
  const [logs, setLogs] = useState<Array<{ id: string; time: string; msg: string; status: string }>>([
    { id: '1', time: '10:14:02 UTC', msg: 'Core Node #88C4 executed secure handshake', status: 'SUCCESS' },
    { id: '2', time: '10:15:45 UTC', msg: 'Synchronized NCDC S3 Biology Lesson Plan index', status: 'SYNCED' },
    { id: '3', time: '10:16:11 UTC', msg: 'Resonance oscillation aligned to 528Hz', status: 'RESONATED' },
    { id: '4', time: '10:16:34 UTC', msg: 'PBL student cohort velocity audit complete', status: 'AUDITED' },
  ]);

  // Clean trigger for switching presets
  const handlePresetChange = (preset: '24h_pulse' | '30d_evolution' | '1y_sovereign') => {
    setChronoPreset(preset);
    setChartData(JSON.parse(JSON.stringify(CHRONO_PRESETS[preset])));
  };

  // Live Telemetry Stream Simulation
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      // 1. Shift chart data slightly to simulate movement
      setChartData((prev) => {
        const next = [...prev];
        const last = next[next.length - 1];
        if (!last) return prev;
        
        // Slightly fluctuate last entries
        const fluctuation = (Math.random() - 0.5) * 15;
        const currentThru = Math.max(10, Math.floor(last.throughput + fluctuation));
        const currentGrowth = last.growth + (Math.random() > 0.6 ? 2 : 0);
        const currentSync = Math.min(100, Math.max(95, Number((last.syncRate + (Math.random() - 0.5) * 0.4).toFixed(2))));

        // In 24h mode, we can append/shift time labels
        if (chronoPreset === '24h_pulse') {
          const first = next.shift();
          if (first) {
            const [hours, minutes] = first.time.split(':').map(Number);
            const nextHours = (hours + 2) % 24;
            const nextTime = `${nextHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            
            next.push({
              time: nextTime,
              throughput: currentThru,
              growth: currentGrowth,
              syncRate: currentSync,
            });
          }
        } else {
          // In other modes, fluctuate values in place
          next[next.length - 1] = {
            ...last,
            throughput: currentThru,
            growth: currentGrowth,
            syncRate: currentSync,
          };
        }
        return next;
      });

      // 2. Append simulated event log
      setLogs((prevLogs) => {
        const timeString = new Date().toLocaleTimeString('en-US', { hour12: false }) + ' UTC';
        const randomMsg = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
        const randomStatus = STATUS_OPTIONS[Math.floor(Math.random() * STATUS_OPTIONS.length)];
        
        const nextLogs = [
          ...prevLogs,
          { id: Math.random().toString(), time: timeString, msg: randomMsg, status: randomStatus }
        ];
        
        // Maintain last 7 logs
        if (nextLogs.length > 7) {
          nextLogs.shift();
        }
        return nextLogs;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isSimulating, chronoPreset]);

  // Inject a large telemetry packet spike
  const triggerSimulationSpike = () => {
    setIsSpiked(true);
    setChartData((prev) => {
      return prev.map((point, idx) => {
        if (idx === prev.length - 1 || idx === prev.length - 2) {
          return {
            ...point,
            throughput: Math.floor(point.throughput * 1.55),
            growth: Math.floor(point.growth * 1.08),
            syncRate: Math.min(100, point.syncRate + 0.1),
          };
        }
        return point;
      });
    });

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        time: new Date().toLocaleTimeString('en-US', { hour12: false }) + ' UTC',
        msg: '⚠️ EXTREME_SPIKE_INJECTED // Throughput multiplied by 1.55x. Commencing self-regulation.',
        status: 'WARNING',
      }
    ].slice(-7));

    setTimeout(() => {
      setIsSpiked(false);
    }, 2000);
  };

  // Export Telemetry Logic
  const handleExport = () => {
    setIsExported(true);
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify({ preset: chronoPreset, metric: activeMetric, records: chartData }, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `cymatic_telemetry_${chronoPreset}_${activeMetric}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setTimeout(() => {
      setIsExported(false);
    }, 3000);
  };

  // Visual Palette Selector Based on Selected Metric
  const getMetricMetadata = () => {
    switch (activeMetric) {
      case 'throughput':
        return {
          title: 'Cymatic Throughput',
          subtitle: 'Active packet node processing frequency',
          unit: ' req/s',
          strokeColor: 'var(--color-accent)', // electric blue or cyan
          fillId: 'colorThroughput',
          colorClass: 'text-[var(--color-accent)]',
          gradientColor: 'var(--color-accent)',
        };
      case 'growth':
        return {
          title: 'Active Cohort Growth',
          subtitle: 'Synchronized learner terminals & nodes',
          unit: ' nodes',
          strokeColor: '#10b981', // emerald green
          fillId: 'colorGrowth',
          colorClass: 'text-emerald-400',
          gradientColor: '#10b981',
        };
      case 'syncRate':
        return {
          title: 'Node Sync Integrity',
          subtitle: 'Packet alignment success quotient',
          unit: '%',
          strokeColor: '#a855f7', // purple
          fillId: 'colorSyncRate',
          colorClass: 'text-purple-400',
          gradientColor: '#a855f7',
        };
    }
  };

  const meta = getMetricMetadata();

  return (
    <CymaticLayout>
      <div className="space-y-16">
        
        {/* HEADER */}
        <header className="border-b border-[var(--color-border)] pb-8 text-left">
          <div className="flex items-center space-x-2 text-xs text-[var(--color-accent)] font-bold tracking-widest uppercase">
            <span className="inline-block w-2 h-2 bg-[var(--color-accent)] animate-pulse rounded-full"></span>
            <span>// PORTAL_SYSTEM_TELEMETRY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-[var(--color-text-primary)] uppercase mt-2">
            System Transparency
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-text-secondary)] font-sans max-w-4xl leading-relaxed">
            Real-time visual records and packet telemetry for the Cymatic Evolution ecosystem. Compare live node throughput with institutional growth across Uganda, and track sync stability metrics of the dual Cymatic engines.
          </p>
        </header>

        {/* TOP METRICS GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Liveliness Heartbeat Column */}
          <div className="lg:col-span-4 space-y-6">
            <SystemHeartbeat />
            
            {/* System Node Registry Block */}
            <div className="glass-card p-6 rounded-2xl border border-[var(--color-border)] space-y-4">
              <div className="flex justify-between items-center border-b border-[var(--color-border)]/20 pb-3">
                <h3 className="font-mono text-xs text-[var(--color-accent)] font-bold uppercase tracking-widest flex items-center gap-2">
                  <Cpu className="w-4 h-4 animate-spin-slow text-[var(--color-accent)]" /> // ENGINE_REGISTRY
                </h3>
                <span className="text-[9px] font-mono uppercase bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">All Secured</span>
              </div>
              <div className="space-y-3 font-mono text-[11px]">
                <div className="flex justify-between items-center bg-black/10 p-2.5 rounded-lg border border-[var(--color-border)]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-white">Cymatic Study v4.0</span>
                  </div>
                  <span className="text-cyan-400 font-bold uppercase text-[9px]">// ACTIVE_CORE</span>
                </div>
                
                <div className="flex justify-between items-center bg-black/10 p-2.5 rounded-lg border border-[var(--color-border)]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-white">Resonance v1.1</span>
                  </div>
                  <span className="text-purple-400 font-bold uppercase text-[9px]">// OSCILLATING</span>
                </div>

                <div className="flex justify-between items-center bg-black/10 p-2.5 rounded-lg border border-[var(--color-border)]/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-white">P2P Peer Sync Mat</span>
                  </div>
                  <span className="text-emerald-400 font-bold uppercase text-[9px]">// BALANCED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Context & Transparency Philosophy */}
          <div className="lg:col-span-8 h-full">
            <div className="glass-card p-8 rounded-2xl border border-[var(--color-border)] space-y-6 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] font-bold tracking-widest">
                  <ShieldCheck className="w-4 h-4" /> // TRUST_AND_COMPLIANCE
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-[var(--color-text-primary)] font-bold">
                  Data Sovereignty through Client-Side Telemetry.
                </h3>
                <p className="text-[13px] text-[var(--color-text-secondary)] font-sans leading-relaxed">
                  The Cymatic architecture is engineered with local-first parameters. Our core platforms, Cymatic Study and Cymatic Resonance, store data locally inside secure client nodes. This transparency portal reads generalized, aggregated operational signals to map broader ecosystem health without tracking raw personal records.
                </p>
                <p className="text-[13px] text-[var(--color-text-secondary)] font-sans leading-relaxed">
                  We invite institutional coordinators, Uganda MOES inspectors, and individual student operators to inspect our system latency metrics, synchronized database throughput, and code integrity audits live on this console.
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--color-border)]/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono">
                <div className="p-3 bg-white/5 rounded-xl border border-[var(--color-border)]/10">
                  <div className="text-xs text-slate-400">SYNC_SECURE</div>
                  <div className="text-[var(--color-accent)] font-bold mt-1 text-sm">AES-GCM</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-[var(--color-border)]/10">
                  <div className="text-xs text-slate-400">PBL_METRIC</div>
                  <div className="text-emerald-400 font-bold mt-1 text-sm">NCDC Compl.</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-[var(--color-border)]/10">
                  <div className="text-xs text-slate-400">VIBE_OFFSET</div>
                  <div className="text-purple-400 font-bold mt-1 text-sm">432Hz - 528Hz</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-[var(--color-border)]/10">
                  <div className="text-xs text-slate-400">PERSISTENCE</div>
                  <div className="text-amber-400 font-bold mt-1 text-sm">Firestore P2P</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRIMARY TELEMETRY DATA VISUALIZATION SECTION */}
        <section className="glass-card p-6 sm:p-8 rounded-3xl border border-[var(--color-border)] bg-black/30 backdrop-blur-xl space-y-8">
          
          {/* Chart Controls Layout */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-[var(--color-border)]/20 pb-6">
            <div className="space-y-1 text-left">
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[var(--color-accent)]">// HISTORICAL_CHRONO_GRAPH</span>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">The Twin Engines Telemetry</h3>
              <p className="text-xs text-[var(--color-text-secondary)] font-sans max-w-xl">
                Plot and overlay operational data vectors. Click a tab to change metrics and choose a timeframe window.
              </p>
            </div>

            {/* Controls panel: Metric Selector & Preset Chrono Selector */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              
              {/* Preset Selector */}
              <div className="flex bg-black/60 rounded-xl p-1 border border-[var(--color-border)]/20 font-mono text-[9px] font-bold">
                {[
                  { id: '24h_pulse', label: '24H Pulse' },
                  { id: '30d_evolution', label: '30D Evolution' },
                  { id: '1y_sovereign', label: '1Y Sovereign' },
                ].map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => handlePresetChange(preset.id as '24h_pulse' | '30d_evolution' | '1y_sovereign')}
                    className={`px-3 py-1.5 rounded-lg uppercase tracking-wider transition-all duration-200 ${
                      chronoPreset === preset.id
                        ? 'bg-[var(--color-accent)] text-black font-black'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Live Pause/Play button */}
              <button
                onClick={() => setIsSimulating(!isSimulating)}
                className={`p-2.5 rounded-xl border font-mono text-[10px] flex items-center gap-1.5 transition-all ${
                  isSimulating 
                    ? 'border-yellow-500/20 bg-yellow-500/10 text-yellow-400' 
                    : 'border-slate-800 bg-slate-900/40 text-slate-400'
                }`}
                title={isSimulating ? 'Pause live stream update' : 'Resume live stream update'}
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
                <span>{isSimulating ? 'Live Pulse: ON' : 'Live Pulse: OFF'}</span>
              </button>
            </div>
          </div>

          {/* Metric Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: 'throughput', label: 'Cymatic Throughput', icon: TrendingUp, val: chartData[chartData.length - 1]?.throughput, color: 'hover:border-[var(--color-accent)]/50', activeColor: 'border-[var(--color-accent)] bg-[var(--color-accent)]/5 text-[var(--color-accent)]', unit: ' req/s' },
              { id: 'growth', label: 'Cohort Growth', icon: Activity, val: chartData[chartData.length - 1]?.growth, color: 'hover:border-emerald-500/50', activeColor: 'border-emerald-500 bg-emerald-500/5 text-emerald-400', unit: ' nodes' },
              { id: 'syncRate', label: 'Node Sync Integrity', icon: Database, val: chartData[chartData.length - 1]?.syncRate, color: 'hover:border-purple-500/50', activeColor: 'border-purple-500 bg-purple-500/5 text-purple-400', unit: '%' },
            ].map((metric) => (
              <button
                key={metric.id}
                onClick={() => setActiveMetric(metric.id as 'throughput' | 'growth' | 'syncRate')}
                className={`p-4 rounded-xl border text-left font-mono space-y-2 transition-all ${
                  activeMetric === metric.id
                    ? metric.activeColor
                    : 'border-[var(--color-border)]/20 bg-black/10 text-slate-400 ' + metric.color
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <metric.icon className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{metric.label}</span>
                  </div>
                  {activeMetric === metric.id && <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />}
                </div>
                <div className="flex items-baseline gap-1 pt-1">
                  <span className="text-xl sm:text-2xl font-black text-white">
                    {metric.val?.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">{metric.unit}</span>
                </div>
              </button>
            ))}
          </div>

          {/* The Recharts Area Chart Container */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
            
            {/* The Area Chart Graph Block */}
            <div className="xl:col-span-9 p-4 bg-[#050507] border border-[var(--color-border)]/30 rounded-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-4 right-4 text-[8px] font-mono text-slate-500 tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Render Engine: Recharts v3.9
              </div>

              {/* Chart Plot Area */}
              <div className="w-full h-80 pt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id={meta.fillId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={meta.gradientColor} stopOpacity={0.35}/>
                        <stop offset="95%" stopColor={meta.gradientColor} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                    <XAxis 
                      dataKey="time" 
                      stroke="rgba(255,255,255,0.4)" 
                      fontSize={10} 
                      fontFamily="monospace"
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.4)" 
                      fontSize={10} 
                      fontFamily="monospace"
                      tickLine={false}
                      axisLine={false}
                      domain={activeMetric === 'syncRate' ? [90, 100] : ['auto', 'auto']}
                    />
                    <Tooltip content={<CustomTooltip unit={meta.unit} />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
                    <Area 
                      type="monotone" 
                      dataKey={activeMetric} 
                      name={meta.title}
                      stroke={meta.strokeColor} 
                      fillOpacity={1} 
                      fill={`url(#${meta.fillId})`} 
                      strokeWidth={2}
                      dot={chronoPreset !== '1y_sovereign' ? { stroke: meta.strokeColor, strokeWidth: 2, r: 3, fill: '#050507' } : false}
                      activeDot={{ stroke: meta.strokeColor, strokeWidth: 2, r: 5, fill: meta.strokeColor }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Bottom indicators */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-3 border-t border-white/5 px-2">
                <span>SYSTEM_HASH: 0x88C45D5C</span>
                <span className="uppercase">{`Viewing: ${meta.title} (${chronoPreset.replace('_', ' ')})`}</span>
              </div>
            </div>

            {/* Side Controls Knob Box */}
            <div className="xl:col-span-3 flex flex-col justify-between p-6 border border-[var(--color-border)]/30 bg-white/[0.01] rounded-2xl space-y-6">
              
              <div className="space-y-4 text-left">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-1.5 border-b border-white/5 pb-2">
                  <Sliders className="w-3.5 h-3.5 text-[var(--color-accent)]" /> 
                  Calibration Controls
                </h4>
                
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                  Perform system load simulations to test synchronization speeds and network scalability under pressure.
                </p>

                {/* Handshake Display */}
                <div className="p-3.5 bg-black/50 border border-white/5 rounded-xl space-y-2 font-mono text-[10px]">
                  <div className="flex justify-between items-center text-slate-500">
                    <span>Sync Identity:</span>
                    <span className="text-white font-bold">{syncCode}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500">
                    <span>Active Metric:</span>
                    <span className={`font-bold ${meta.colorClass}`}>{activeMetric.toUpperCase()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {/* BUTTON: TRIGGER LOAD SPIKE */}
                <button
                  onClick={triggerSimulationSpike}
                  disabled={isSpiked}
                  className={`w-full p-3.5 rounded-xl border font-mono font-bold uppercase text-[10px] tracking-wider transition-all duration-300 flex items-center justify-between hover:scale-[1.02] active:scale-[0.98] ${
                    isSpiked 
                      ? 'border-red-500/50 bg-red-500/10 text-red-400' 
                      : 'border-yellow-500 text-yellow-500 hover:bg-yellow-500/10'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Zap className={`w-3.5 h-3.5 ${isSpiked ? 'animate-bounce' : ''}`} />
                    {isSpiked ? '// LOAD_SPIKING' : '// SIMULATE_SPIKE'}
                  </span>
                  <span>1.55x</span>
                </button>

                {/* BUTTON: EXPORT TELEMETRY FILE */}
                <button
                  onClick={handleExport}
                  className={`w-full p-3.5 rounded-xl border font-mono font-bold uppercase text-[10px] tracking-wider transition-all duration-300 flex items-center justify-between hover:scale-[1.02] active:scale-[0.98] ${
                    isExported 
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' 
                      : 'border-[var(--color-border)]/30 text-white hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {isExported ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                    {isExported ? '// EXPORT_COMPLETED' : '// EXPORT_RECORDS'}
                  </span>
                  <span>JSON</span>
                </button>
              </div>

            </div>

          </div>

        </section>

        {/* INTERACTIVE MONOSPACE LOG CONSOLE */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                // SYSTEM_TRANSPARENCY_STREAM
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-[9px] text-slate-500">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
              <span>LISTENING_TO_COHORT_STREAM</span>
            </div>
          </div>

          <div className="bg-[#050507] border border-[var(--color-border)]/30 rounded-2xl p-6 font-mono text-xs text-left shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-60" />
            
            <div className="flex justify-between items-center text-[10px] text-slate-500 border-b border-white/5 pb-3 mb-4 uppercase">
              <span>Timestamp</span>
              <span>Operations Packet Payload</span>
              <span>Security Sign</span>
            </div>

            <div className="space-y-2.5 max-h-52 overflow-y-auto">
              <AnimatePresence initial={false}>
                {logs.map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-between items-center hover:bg-white/[0.02] p-2 rounded-lg border border-transparent hover:border-white/5 transition-all"
                  >
                    <div className="flex items-center space-x-4 min-w-0">
                      <span className="text-slate-500 select-none text-[10px]">{log.time}</span>
                      <span className="text-slate-300 truncate font-mono tracking-tight">{log.msg}</span>
                    </div>

                    <div className="flex items-center space-x-3 shrink-0">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded font-mono border ${
                        log.status === 'SUCCESS' || log.status === 'SYNCED'
                          ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400'
                          : log.status === 'RESONATED'
                          ? 'border-purple-500/20 bg-purple-500/10 text-purple-400'
                          : log.status === 'WARNING'
                          ? 'border-red-500/30 bg-red-500/15 text-red-400'
                          : 'border-cyan-500/20 bg-cyan-500/10 text-cyan-400'
                      }`}>
                        // {log.status}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-slate-600" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Console summary footer */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-slate-500">
              <div className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                <span>Encrypted using node handshake algorithms. Complete audit trail stored locally.</span>
              </div>
              <button 
                onClick={() => setSyncCode(`#CYM-LOG-${Math.floor(1000 + Math.random() * 9000)}`)}
                className="hover:text-white transition-colors"
              >
                // REGENERATE_KEYS
              </button>
            </div>
          </div>
        </section>

      </div>
    </CymaticLayout>
  );
};
