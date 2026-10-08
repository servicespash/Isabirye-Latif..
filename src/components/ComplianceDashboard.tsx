import React, { useEffect, useState } from 'react';
import { ShieldCheck, Eye, Accessibility, Activity, RefreshCw } from 'lucide-react';
import { fetchComplianceStatus, ComplianceMetrics } from '../services/complianceService';

interface MetricItemProps {
  icon: React.ElementType;
  label: string;
  value: number;
  color: string;
}

const MetricItem = ({ icon: Icon, label, value, color }: MetricItemProps) => (
  <div className="flex flex-col gap-1 min-w-[80px]">
    <div className="flex items-center gap-2">
      <Icon className={`w-3 h-3 ${color}`} />
      <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">{label}</span>
    </div>
    <div className="flex items-end gap-1">
      <span className="text-sm font-black text-[var(--color-text-primary)]">{value}%</span>
      <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden mb-1.5">
        <div 
          className={`h-full ${color.replace('text-', 'bg-')} transition-all duration-1000`} 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  </div>
);

export const ComplianceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<ComplianceMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    let mounted = true;
    const initAudit = async () => {
      const data = await fetchComplianceStatus();
      if (mounted) {
        setMetrics(data);
        setLoading(false);
      }
    };
    initAudit();

    const handleStatusChange = () => setIsOffline(!navigator.onLine);
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);
    return () => {
      mounted = false;
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);

  const refreshAudit = async () => {
    setLoading(true);
    const data = await fetchComplianceStatus();
    setMetrics(data);
    setLoading(false);
  };

  if (!metrics && loading) {
    return (
      <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 animate-pulse">
        <Activity className="w-3 h-3" />
        INITIALIZING_AUDIT_PROTOCOL...
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20`}>
          <ShieldCheck className="w-5 h-5 text-emerald-500" />
        </div>
        <div>
          <h4 className="text-[10px] font-black text-white uppercase tracking-tighter">System Compliance</h4>
          <p className={`text-[8px] font-mono uppercase ${isOffline ? 'text-amber-500' : 'text-emerald-500/70'}`}>
            Status: {isOffline ? 'Offline_Mode' : 'Fully_Operational'}
          </p>
        </div>
      </div>

      <div className="h-px w-full sm:h-8 sm:w-px bg-white/10" />

      <div className="grid grid-cols-3 gap-6 flex-1">
        <MetricItem icon={Accessibility} label="Accessibility" value={metrics?.accessibility || 0} color="text-blue-400" />
        <MetricItem icon={ShieldCheck} label="Security" value={metrics?.security || 0} color="text-emerald-400" />
        <MetricItem icon={Eye} label="Transparency" value={metrics?.transparency || 0} color="text-purple-400" />
      </div>

      <button 
        onClick={refreshAudit}
        disabled={loading}
        className={`p-2 rounded-full hover:bg-white/10 transition-colors ${loading ? 'animate-spin' : ''}`}
        title="Refresh Audit"
      >
        <RefreshCw className="w-3 h-3 text-neutral-500" />
      </button>
    </div>
  );
};
