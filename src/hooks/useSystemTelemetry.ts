import { useState, useEffect } from 'react';

export const useSystemTelemetry = () => {
  const [metrics, setMetrics] = useState({
    latency: 12,
    nodeEfficiency: 99.8,
    syncPulse: 60,
    uptime: '99.999%'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        latency: Math.floor(Math.random() * (15 - 10 + 1) + 10),
        nodeEfficiency: parseFloat((prev.nodeEfficiency + (Math.random() - 0.5) * 0.1).toFixed(2)),
        syncPulse: Math.floor(Math.random() * (65 - 55 + 1) + 55),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return metrics;
};
