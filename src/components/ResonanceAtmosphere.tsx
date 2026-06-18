import React, { useMemo } from 'react';
import { useCymaticTheme } from '../context/ThemeContext';
import { useMotionPulse } from '../context/MotionContext';

export const ResonanceAtmosphere: React.FC = () => {
  const { resonance, theme } = useCymaticTheme();
  const { globalFrequency } = useMotionPulse();

  const atmosphereStyle = useMemo(() => ({
    opacity: theme === 'dark' ? 0.6 : 0.4,
    filter: `hue-rotate(${globalFrequency % 360}deg) saturate(1.2)`,
  }), [theme, globalFrequency]);

  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none" 
      style={atmosphereStyle}
    >
      {/* BASE LAYER: Transparent to allow page background/canvas to shine through */}
      <div className="absolute inset-0 bg-transparent" />

      {/* CORE HARMONIC LAYER: Subdued accent flow, not a floodlight */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 70% 30%, var(--color-accent) 0%, transparent 60%),
            radial-gradient(circle at 20% 80%, var(--color-accent) 0%, transparent 60%)
          `,
          opacity: 0.4 + (resonance * 0.05),
          mixBlendMode: 'screen'
        }}
      />

      {/* GRAIN/TEXTURE LAYER: Eliminates the "stiff" look by adding micro-depth */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` 
      }} />
    </div>
  );
};
