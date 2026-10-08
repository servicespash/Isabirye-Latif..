import React from 'react';
import { Activity, Cpu, HeartPulse, ShieldAlert } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { useInfrastructureMetrics } from '../hooks/useInfrastructureMetrics';

export const CymaticInfrastructureMonitor: React.FC<{ subdomain: string }> = ({ subdomain }) => {
  const { metrics, loading } = useInfrastructureMetrics(subdomain);

  const getStatusColor = (value: number, type: 'latency' | 'efficiency' | 'pulse') => {
    if (type === 'latency') return value < 100 ? 'text-green-500' : value < 200 ? 'text-yellow-500' : 'text-red-500';
    if (type === 'efficiency') return value > 90 ? 'text-green-500' : value > 80 ? 'text-yellow-500' : 'text-red-500';
    return value > 60 && value < 100 ? 'text-green-500' : 'text-yellow-500';
  };

  if (loading) return <div className="p-4 text-xs font-mono text-gray-500">// Loading_Infrastructure_Telemetry...</div>;
  if (!metrics) return <div className="p-4 text-xs font-mono text-red-500">// [ERROR_TELEMETRY_UNREACHABLE]</div>;

  const chartData = metrics.latency.map((val, idx) => ({ name: idx, value: val }));

  return (
    <div className="p-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 backdrop-blur-md space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
          // Infrastructure_Monitor: {subdomain}
        </h3>
        {metrics.latency[metrics.latency.length - 1] > 200 && <ShieldAlert className="w-5 h-5 text-red-500" />}
      </div>
      
      <div className="h-24 -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
            <Activity className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest">Latency</span>
          </div>
          <span className={`text-lg font-mono font-bold ${getStatusColor(metrics.latency[metrics.latency.length - 1], 'latency')}`}>{metrics.latency[metrics.latency.length - 1]}ms</span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
            <Cpu className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest">Efficiency</span>
          </div>
          <span className={`text-lg font-mono font-bold ${getStatusColor(metrics.efficiency, 'efficiency')}`}>{metrics.efficiency}%</span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
            <HeartPulse className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest">Pulse</span>
          </div>
          <span className={`text-lg font-mono font-bold ${getStatusColor(metrics.pulse, 'pulse')}`}>{metrics.pulse}bpm</span>
        </div>
      </div>
    </div>
  );
};
