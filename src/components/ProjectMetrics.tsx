import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Activity } from 'lucide-react';

interface ProjectMetricsProps {
  projectId: string;
}

interface Metrics {
  linesOfCode: number;
  timeInvestedHours: number;
}

export const ProjectMetrics: React.FC<ProjectMetricsProps> = ({ projectId }) => {
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const docRef = doc(db, 'projectMetrics', projectId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMetrics(docSnap.data() as Metrics);
        }
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    };
    fetchMetrics();
  }, [projectId]);

  if (!metrics) return null;

  return (
    <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 bg-black/20 px-3 py-1.5 rounded-full border border-white/5">
      <div className="flex items-center gap-1.5">
        <Activity className="w-3 h-3 text-emerald-400" />
        <span>{metrics.linesOfCode.toLocaleString()} LOC</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span>{metrics.timeInvestedHours}h Invested</span>
      </div>
    </div>
  );
};
