import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { AppWrapper } from './components/AppWrapper';
import { CymaticSensoryLayer } from './components/CymaticSensoryLayer';
import { HelmetProvider } from 'react-helmet-async';
import { Skeleton } from './components/ui/Skeleton';
import { MotionProvider } from './context/MotionContext';
import { ThemeProvider } from './context/ThemeContext';
import { useFluidGridManager } from './engine/FluidGridManager';
import { useRouteTracking } from './hooks/useRouteTracking';
import { useRoutePrefetch } from './hooks/useRoutePrefetch';

// Sovereign Additions
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CymaticCursor } from './components/CymaticCursor';
import { KeyboardNavigation } from './components/KeyboardNavigation';
import { SovereignInquiryModal } from './components/SovereignInquiryModal';
import { CommandPalette } from './components/CommandPalette';
import { DevSeoChecklist } from './components/DevSeoChecklist';
import { CymaticSEO } from './components/CymaticSEO';
import { OfflineStatusBanner } from './components/OfflineStatusBanner';

// Real Page Components
import Home from './pages/Home';
import { Manifesto } from './pages/Manifesto';
import { Projects } from './pages/Projects';
import { Resonance } from './pages/Resonance';
import Creative from './pages/Creative';
import { Creatives } from './pages/Creatives';
import { Study } from './pages/Study';
import { Learning } from './pages/Learning';
import { ForSchools } from './pages/ForSchools';
import { ForTeams } from './pages/ForTeams';
import { HowItWorks } from './pages/HowItWorks';
import { ComplianceProtocol } from './pages/ComplianceProtocol';
import { Transparency } from './pages/Transparency';
import Socials from './pages/Socials';
import { StackAudit } from './pages/StackAudit';
import { TwinEngines } from './pages/TwinEngines';
import { Showcase } from './pages/Showcase';
import { Settings } from './pages/Settings';

// ============================================================================
// METAMORPHIC CORE ARCHITECTURE // ISABIRYE LATIF CORE ENTRY
// ============================================================================

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
};

const AnimatedRoutes = () => {
  const location = useLocation();
  useRouteTracking();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Home /></motion.div>} />
        <Route path="/manifesto" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Manifesto /></motion.div>} />
        <Route path="/projects" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Projects /></motion.div>} />
        <Route path="/showcase" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Showcase /></motion.div>} />
        <Route path="/resonance" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Resonance /></motion.div>} />
        <Route path="/creative" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Creative /></motion.div>} />
        <Route path="/creatives" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Creatives /></motion.div>} />
        <Route path="/study" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Study /></motion.div>} />
        <Route path="/for-schools" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ForSchools /></motion.div>} />
        <Route path="/for-teams" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ForTeams /></motion.div>} />
        <Route path="/how-it-works" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><HowItWorks /></motion.div>} />
        <Route path="/learning" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Learning /></motion.div>} />
        <Route path="/legal" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><ComplianceProtocol /></motion.div>} />
        <Route path="/transparency" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Transparency /></motion.div>} />
        <Route path="/stack" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><StackAudit /></motion.div>} />
        <Route path="/socials" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Socials /></motion.div>} />
        <Route path="/twin-engines" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><TwinEngines /></motion.div>} />
        <Route path="/settings" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Settings /></motion.div>} />
        
        <Route path="*" element={
          <div className="py-12 text-center font-mono">
            <span className="text-xs text-red-500 block mb-2">[ERROR_404 // ROUTE_MISALIGNED]</span>
            <span className="text-[10px] text-[var(--color-text-secondary)]">TARGET SPACE DEVIATED FROM BLUEPRINT RECOGNITION</span>
          </div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const { resonance } = useFluidGridManager();
  
  // Prefetch critical routes for instantaneous navigation
  useRoutePrefetch(['/study', '/stack', '/resonance', '/manifesto', '/legal']);
  
  return (
    <HelmetProvider>
      <Router>
        <MotionProvider>
          <ThemeProvider resonance={resonance}>
            <AppWrapper>
              <OfflineStatusBanner />
              <ScrollProgressBar />
              <CymaticCursor />
              <KeyboardNavigation />
              <SovereignInquiryModal />
              <CommandPalette />
              <DevSeoChecklist />
              <CymaticSEO />
              <CymaticSensoryLayer />
              <Suspense fallback={
                <div className="w-full max-w-[90rem] mx-auto py-10 sm:py-24 px-4 sm:px-12 md:px-20 space-y-8">
                  <Skeleton className="h-12 w-1/3" />
                  <Skeleton className="h-64 w-full" />
                  <Skeleton className="h-8 w-2/3" />
                </div>
              }>
                <AnimatedRoutes />
              </Suspense>
            </AppWrapper>
          </ThemeProvider>
        </MotionProvider>
      </Router>
    </HelmetProvider>
  );
};

export default App;
