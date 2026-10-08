import { useState, useEffect } from 'react';
import { fetchInfrastructureMetrics, InfrastructureMetrics } from '../services/monitorService';

export const useInfrastructureMetrics = (subdomain: string) => {
  const [metrics, setMetrics] = useState<InfrastructureMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateMetrics = async () => {
      try {
        const data = await fetchInfrastructureMetrics(subdomain);
        setMetrics(data);
      } catch (error) {
        console.error('Failed to update metrics', error);
      } finally {
        setLoading(false);
      }
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 10000); // Poll every 10s
    return () => clearInterval(interval);
  }, [subdomain]);

  return { metrics, loading };
};
