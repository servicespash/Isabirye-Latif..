import React from 'react';

export const CymaticDiagram: React.FC = () => (
  <svg viewBox="0 0 400 200" className="w-full h-auto text-[var(--accent-primary)]">
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
      </marker>
    </defs>
    
    {/* Nodes */}
    <rect x="20" y="70" width="100" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="70" y="105" textAnchor="middle" fill="currentColor" className="font-mono text-[10px]">CYMATIC_HUB</text>
    
    <rect x="280" y="70" width="100" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="330" y="105" textAnchor="middle" fill="currentColor" className="font-mono text-[10px]">RESONANCE</text>

    {/* Connection */}
    <line x1="120" y1="100" x2="280" y2="100" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="4 2" />
    <text x="200" y="90" textAnchor="middle" fill="currentColor" className="font-mono text-[8px]">SYNC_PULSE</text>
  </svg>
);
