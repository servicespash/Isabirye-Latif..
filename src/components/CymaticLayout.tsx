import React from 'react';
import { CymaticSEO } from './CymaticSEO';
import { useCymaticTheme } from '../context/ThemeContext';
import { Navbar } from './Navbar';
import { CymaticFooter } from './CymaticFooter';
import { RepoRail } from './RepoRail';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { ResonanceAtmosphere } from './ResonanceAtmosphere';
import { CymaticSensoryLayer } from './CymaticSensoryLayer';

const UIFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useCymaticTheme();

  return (
    <div className={`relative min-h-screen w-full flex overflow-x-hidden ${theme}`}>
      
      {/* ATMOSPHERIC BACKGROUND SYSTEM */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ResonanceAtmosphere />
        <CymaticSensoryLayer />
      </div>

      {/* SIDEBAR */}
      <aside className="hidden md:block w-20 shrink-0 z-[100] border-r border-[var(--color-border)]/50">
        <RepoRail />
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col relative z-10">
        
        {/* FIXED NAVIGATION */}
        <div className="fixed top-0 left-0 w-full z-[100]">
          <Navbar />
        </div>

        {/* FLUID EDITORIAL CONTAINER */}
        <main className="w-full pt-24 pb-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto w-full bg-[var(--color-bg-secondary)]/10 backdrop-blur-xl border border-[var(--color-border)] rounded-2xl p-6 md:p-8 shadow-2xl">
            <div className="w-full tracking-normal antialiased">
              {children}
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
        <UIFrame>{children}</UIFrame>
        </>
  );
};
