import { useState, useEffect } from 'react';
import { getStats, incrementStat, SiteStats } from '../services/StatsService';

export function useStats() {
  const [stats, setStats] = useState<SiteStats>({ visitors: 0, views: 0, downloads: 0 });

  useEffect(() => {
    async function fetchStats() {
      const data = await getStats();
      setStats(data);
    }
    fetchStats();
    incrementStat('views'); // Increment views on page load (or better: once per session)
  }, []);

  const trackDownload = async () => {
      await incrementStat('downloads');
      setStats(prev => ({ ...prev, downloads: prev.downloads + 1 }));
  };

  return { stats, trackDownload };
}
