import React from 'react';
import { motion } from 'motion/react';
import { CymaticSEO } from './CymaticSEO';
import { useCymaticTheme } from '../context/ThemeContext';
import { Navbar } from './Navbar';
import { CymaticFooter } from './CymaticFooter';
import { RepoRail } from './RepoRail';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { ResonanceAtmosphere } from './ResonanceAtmosphere';
import { CymaticSensoryLayer } from './CymaticSensoryLayer';

import { Breadcrumbs } from './Breadcrumbs';

const UIFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useCymaticTheme();

  return (
    <div className={`relative h-screen w-full flex flex-col overflow-x-hidden ${theme}`}>
      
      {/* ATMOSPHERIC BACKGROUND SYSTEM */}
      <div className="fixed inset-0 z-0 pointer-events-none print-hidden">
        <ResonanceAtmosphere />
        <CymaticSensoryLayer />
      </div>

      {/* STICKY NAVIGATION */}
      <div className="sticky top-0 w-full z-[100] pb-4 bg-[var(--color-bg-primary)]/5 backdrop-blur-sm print-hidden">
        <Navbar />
      </div>
      
      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* SIDEBAR */}
        <aside className="hidden md:block w-20 shrink-0 border-r border-[var(--color-border)]/50 overflow-y-auto">
          <RepoRail />
        </aside>

        {/* FLUID EDITORIAL CONTAINER */}
        <main className="flex-1 w-full pt-4 pb-20 px-2 sm:px-4 md:px-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full bg-[var(--color-bg-secondary)]/10 backdrop-blur-xl border border-[var(--color-border)] rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
            <div className="w-full tracking-normal antialiased">
              <Breadcrumbs />
              {children}
              
              <div className="print-footer">
                <div className="print-footer-info">
                  <p><strong>Isabirye Latif (Latty Adams)</strong></p>
                  <p>Solo Architect & Resonance Engineer</p>
                  <p>https://cymatichub.xyz | Kampala, Uganda</p>
                </div>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://cymatichub.xyz" alt="QR Code to Cymatic Study" className="print-qr-code" />
              </div>

              <CymaticFooter />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};


export const CymaticLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useDocumentMetadata();

  return (
    <>
      <CymaticSEO />
      <UIFrame>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </UIFrame>
    </>
  );
};
