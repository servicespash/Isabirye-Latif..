import React from 'react';
import { CymaticLayout } from '../components/CymaticLayout';
import { ProjectSettingsPanel } from '../components/ProjectSettingsPanel';
import { BrandingSettings } from '../components/BrandingSettings';
import { Sliders, ShieldCheck } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <CymaticLayout>
      <div className="py-8 space-y-12">
        {/* Header */}
        <div className="border-b-2 border-[var(--color-border)] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-[var(--color-accent)] rounded-full" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--color-accent)] font-bold">
                System_Configuration
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--color-text-primary)] uppercase">
              Project Settings
            </h1>
            <p className="text-[var(--color-text-secondary)] font-mono text-xs max-w-xl uppercase tracking-wider leading-relaxed">
              Global orchestration parameters for luminosity, aspect ratios, and architectural deployment protocols.
            </p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span className="text-[9px] font-mono text-green-500 uppercase tracking-widest font-bold">
              System_Integrity_Verified
            </span>
          </div>
        </div>

        {/* Settings Panels */}
        <div className="max-w-4xl space-y-8">
          <BrandingSettings />
          <ProjectSettingsPanel />
        </div>

        {/* Footer Info */}
        <div className="pt-12 border-t border-[var(--color-border)]/30">
          <div className="flex items-center gap-3 text-neutral-500 font-mono text-[9px] uppercase tracking-widest">
            <Sliders className="w-3.5 h-3.5" />
            <span>Changes are persisted in the local browser state node.</span>
          </div>
        </div>
      </div>
    </CymaticLayout>
  );
};

export default Settings;
