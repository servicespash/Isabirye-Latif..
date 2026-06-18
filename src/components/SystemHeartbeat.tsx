import React from 'react';
import { useSystemTelemetry } from '../hooks/useSystemTelemetry';

const Metric: React.FC<{ label: string; value: string | number; unit?: string }> = ({ label, value, unit }) => (
  <div className="flex flex-col border-b border-[var(--border-color)] pb-2 mb-2">
    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">{label}</span>
    <div className="font-mono text-xl font-black text-[var(--text-primary)]">
      {value}<span className="text-xs font-normal ml-1 text-[var(--accent-primary)]">{unit}</span>
    </div>
  </div>
);

export const SystemHeartbeat: React.FC = () => {
  const { latency, nodeEfficiency, syncPulse, uptime } = useSystemTelemetry();

  return (
    <div className="glass-card w-full max-w-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent-primary)]">// SYSTEM_HEARTBEAT</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-[9px] uppercase text-[var(--text-secondary)]">Operational</span>
        </div>
      </div>
      <Metric label="Latency" value={latency} unit="ms" />
      <Metric label="Node Efficiency" value={nodeEfficiency} unit="%" />
      <Metric label="Sync Pulse" value={syncPulse} unit="Hz" />
      <Metric label="Uptime" value={uptime} />
    </div>
  );
};
