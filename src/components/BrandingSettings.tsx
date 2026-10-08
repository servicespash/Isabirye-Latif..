import React, { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { Type, Image, Palette, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BrandingSettings: React.FC = () => {
  const { branding, updateBranding } = useAppContext();
  const [localName, setLocalName] = useState(branding.name);
  const [localLogo, setLocalLogo] = useState(branding.logo);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    updateBranding({
      name: localName,
      logo: localLogo
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="bg-[var(--color-bg-secondary)]/50 backdrop-blur-md border border-[var(--color-border)] rounded-2xl p-6 space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Palette className="w-5 h-5 text-[var(--color-accent)]" />
        <h2 className="text-xl font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
          Branding Configuration
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Brand Name */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-secondary)]">
            <Type className="w-3 h-3" />
            Brand Name
          </label>
          <input
            type="text"
            value={localName}
            onChange={(e) => setLocalName(e.target.value)}
            className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm font-mono text-[var(--color-text-primary)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-all"
            placeholder="e.g. CYMATIC EVOLUTION"
          />
        </div>

        {/* Brand Logo Text */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-secondary)]">
            <Image className="w-3 h-3" />
            Logo Shortcode
          </label>
          <input
            type="text"
            value={localLogo}
            onChange={(e) => setLocalLogo(e.target.value)}
            className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm font-mono text-[var(--color-text-primary)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-all"
            placeholder="e.g. CYMATIC"
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]/30">
        <div className="flex items-center gap-2">
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center gap-1.5 text-green-500 text-[10px] font-mono uppercase tracking-widest"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Configuration_Propagated</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/80 text-white rounded-lg text-xs font-bold uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg shadow-[var(--color-accent)]/20"
        >
          Commit Changes
        </button>
      </div>
    </div>
  );
};
