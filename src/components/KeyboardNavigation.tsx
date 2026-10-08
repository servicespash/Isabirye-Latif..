import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Keyboard, HelpCircle, X, ChevronRight } from 'lucide-react';

interface Shortcut {
  key: string;
  label: string;
  path: string;
  desc: string;
}

const SHORTCUTS: Shortcut[] = [
  { key: 'H', label: 'Home', path: '/', desc: 'Return to core landing' },
  { key: 'T', label: 'Transparency', path: '/transparency', desc: 'Real-time telemetry & audits' },
  { key: 'M', label: 'Manifesto', path: '/manifesto', desc: 'Philosophical blueprint' },
  { key: 'P', label: 'Projects', path: '/projects', desc: 'Active engineering builds' },
  { key: 'W', label: 'Showcase', path: '/showcase', desc: 'Template client showcases' },
  { key: 'R', label: 'Resonance', path: '/resonance', desc: 'Harmonization and math physics' },
  { key: 'U', label: 'Study', path: '/study', desc: 'Cymatic community portal' },
  { key: 'L', label: 'Learning', path: '/learning', desc: 'PBL education syllabus' },
  { key: 'S', label: 'Stack', path: '/stack', desc: 'Integrity stack architecture' },
  { key: 'O', label: 'Socials', path: '/socials', desc: 'Sovereign communication links' },
];

export const KeyboardNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCheatsheet, setShowCheatsheet] = useState(false);
  const [jumpNotification, setJumpNotification] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid firing hotkeys when user is actively entering text
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.getAttribute('contenteditable') === 'true')
      ) {
        return;
      }

      const pressedKey = e.key.toUpperCase();

      // Help triggers
      if (pressedKey === 'K' || e.key === '?') {
        e.preventDefault();
        setShowCheatsheet((prev) => !prev);
        return;
      }

      // Close cheatsheet on Escape
      if (e.key === 'Escape' && showCheatsheet) {
        setShowCheatsheet(false);
        return;
      }

      // Route lookup
      const match = SHORTCUTS.find((shortcut) => shortcut.key === pressedKey);
      if (match) {
        e.preventDefault();
        if (location.pathname === match.path) {
          setJumpNotification(`Already synchronized at ${match.label.toUpperCase()}`);
          return;
        }
        
        navigate(match.path);
        setJumpNotification(`TRANSIT_SUCCESS // ${match.label.toUpperCase()}`);
        setShowCheatsheet(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, location, showCheatsheet]);

  // Automatically clear jump toast after a short period
  useEffect(() => {
    if (jumpNotification) {
      const timer = setTimeout(() => {
        setJumpNotification(null);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [jumpNotification]);

  return (
    <>
      {/* Subtle Floating Bottom Hotkey Hint */}
      <div 
        id="hotkey-status-hint"
        className="fixed bottom-4 left-4 z-[40] pointer-events-auto"
      >
        <button
          onClick={() => setShowCheatsheet(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-black/80 backdrop-blur-md text-[9px] font-mono tracking-wider uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300 shadow-xl"
        >
          <Keyboard className="w-3.5 h-3.5 text-[var(--color-accent)] animate-pulse" />
          <span>Press <kbd className="px-1 bg-neutral-800 rounded text-white text-[8px]">K</kbd> For Hotkeys</span>
        </button>
      </div>

      {/* Jump Toast Notification */}
      <AnimatePresence>
        {jumpNotification && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="fixed bottom-4 right-4 z-[9999] pointer-events-none"
          >
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--color-accent)]/30 bg-[#07070a] text-white shadow-2xl backdrop-blur-xl max-w-sm">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-ping" />
              <div className="font-mono text-[10px] tracking-widest text-left">
                <span className="text-[var(--color-accent)] block font-bold">// SYSTEM JUMP PROTOCOL</span>
                <span className="text-neutral-400 font-medium">{jumpNotification}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sovereign Hotkeys Modal Overlays */}
      <AnimatePresence>
        {showCheatsheet && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCheatsheet(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              className="relative w-full max-w-xl p-6 rounded-2xl border border-[var(--color-border)] bg-[#0c0c0f] shadow-2xl overflow-hidden font-mono text-[11px]"
            >
              {/* Dynamic Grid Background Accent */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

              {/* Header */}
              <div className="relative flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Keyboard className="w-5 h-5 text-[var(--color-accent)]" />
                  <div className="text-left">
                    <h3 className="font-bold text-white uppercase tracking-wider text-xs">SOVEREIGN ROUTING SHORTCUTS</h3>
                    <p className="text-[9px] text-neutral-400 tracking-wider">Fast-transit hotkey routing terminal</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCheatsheet(false)}
                  className="p-1 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Shortcuts Grid */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3 my-2">
                {SHORTCUTS.map((shortcut) => {
                  const isActive = location.pathname === shortcut.path;
                  return (
                    <button
                      key={shortcut.key}
                      onClick={() => {
                        navigate(shortcut.path);
                        setShowCheatsheet(false);
                        setJumpNotification(`TRANSIT_SUCCESS // ${shortcut.label.toUpperCase()}`);
                      }}
                      className={`flex items-center justify-between p-2.5 rounded-lg border text-left transition-all group ${
                        isActive
                          ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5 text-white'
                          : 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/50 text-neutral-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded bg-neutral-800 text-white font-black border border-neutral-700 text-center shadow-inner group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-black transition-all">
                          {shortcut.key}
                        </span>
                        <div>
                          <span className="font-bold uppercase tracking-wider text-[10px] block">
                            {shortcut.label}
                          </span>
                          <span className="text-[9px] text-neutral-500 font-normal">
                            {shortcut.desc}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[var(--color-accent)] transition-colors group-hover:translate-x-0.5" />
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="relative mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between text-[9px] text-neutral-500 uppercase tracking-widest">
                <span>[ESC] TO CLOSE</span>
                <span className="flex items-center gap-1">
                  <HelpCircle className="w-3 h-3 text-[var(--color-accent)]" /> 
                  ACTIVE ROUTE: {location.pathname}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
