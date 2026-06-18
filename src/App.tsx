import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppWrapper } from './components/AppWrapper';
import { CymaticSensoryLayer } from './components/CymaticSensoryLayer';
import { MotionProvider } from './context/MotionContext';
import { ThemeProvider } from './context/ThemeContext';
import { useFluidGridManager } from './engine/FluidGridManager';

// Real Page Components
import Home from './pages/Home';
import { Manifesto } from './pages/Manifesto';
import { Projects } from './pages/Projects';
import { Creative } from './pages/Creative';
import { Creatives } from './pages/Creatives';
import { Hub } from './pages/Hub';
import { Learning } from './pages/Learning';
import { ComplianceProtocol } from './pages/ComplianceProtocol';
import { Transparency } from './pages/Transparency';
import Socials from './pages/Socials';
import { StackAudit } from './pages/StackAudit';

// ============================================================================
// METAMORPHIC CORE ARCHITECTURE // ISABIRYE LATIF CORE ENTRY
// ============================================================================

export const App: React.FC = () => {
  const { resonance } = useFluidGridManager();
  
  return (
    <Router>
      <MotionProvider>
        <ThemeProvider resonance={resonance}>
          <AppWrapper>
            <CymaticSensoryLayer />
            <Suspense fallback={
              <div className="w-screen h-screen flex items-center justify-center bg-[#F8F9FA] dark:bg-[#020617]">
                <span className="text-[10px] font-mono tracking-[0.5em] text-[#B45309] dark:text-[#FDE047] animate-pulse">
                  // INITIALIZING_CYMATIC_GENESIS_CORE...
                </span>
              </div>
            }>
              <Routes>
                {/* Primary Navigation Orbit Routing Matrix */}
                <Route path="/" element={<Home />} />
                <Route path="/manifesto" element={<Manifesto />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/creative" element={<Creative />} />
                <Route path="/creatives" element={<Creatives />} />
                <Route path="/hub" element={<Hub />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/legal" element={<ComplianceProtocol />} />
                <Route path="/transparency" element={<Transparency />} />
                <Route path="/stack" element={<StackAudit />} />
                <Route path="/socials" element={<Socials />} />
                
                {/* System Intercept Wildcard Guard */}
                <Route path="*" element={
                  <div className="py-12 text-center font-mono">
                    <span className="text-xs text-red-500 block mb-2">[ERROR_404 // ROUTE_MISALIGNED]</span>
                    <span className="text-[10px] text-[var(--color-text-secondary)]">TARGET SPACE DEVIATED FROM BLUEPRINT RECOGNITION</span>
                  </div>
                } />
              </Routes>
            </Suspense>
          </AppWrapper>
        </ThemeProvider>
      </MotionProvider>
    </Router>
  );
};

export default App;
