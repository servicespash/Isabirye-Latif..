import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { ResonanceToggle } from './ResonanceToggle';
import { SpatialCommandSurface } from '../navigation/SpatialCommandSurface';
import { PrintButton } from './PrintButton';
import { TemplateShowcaseModal } from './TemplateShowcaseModal';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* INDUSTRIAL-STRENGTH KINETIC CORE */}
      <style>{`
        .kinetic-rail-thick {
          position: relative;
        }
        .kinetic-rail-thick::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 9999px;
          padding: 3px; /* Thickened for heavy industrial presence */
          background: linear-gradient(90deg, #00f2fe, #4facfe, #7f00ff, #00f2fe);
          background-size: 300% 100%;
          animation: rail-flow 3s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        @keyframes rail-flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 300% 0%; }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* CONTAINER: Flowing naturally within the flex layout */}
      <div className="flex flex-col items-center gap-3 w-full px-2 md:px-8 pointer-events-none mt-4 print-hidden">

        {/* MASTER COMMAND RAIL (PRIMARY) */}
        <nav className="kinetic-rail-thick w-full max-w-7xl backdrop-blur-3xl bg-[var(--color-bg-primary)]/60 px-2.5 sm:px-4 py-1.5 sm:py-2 flex justify-between items-center transition-all duration-500 pointer-events-auto rounded-full shadow-2xl relative z-50">

          {/* LEFT: BRANDING */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="shrink-0 scale-[0.7] sm:scale-90 origin-left">
                <BrandLogo />
              </div>
            </Link>
          </div>

          {/* CENTER: CORE SYSTEM CONTROLS (Toggles) */}
          <div className="flex items-center gap-1 sm:gap-4 bg-black/20 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full border border-white/5 mx-1 sm:mx-2">
            <ResonanceToggle />
            <div className="w-[1px] h-4 bg-white/10 hidden sm:block"></div>
            <ThemeToggle />
          </div>

          {/* RIGHT: EXPLORE TRIGGER */}
          <div className="flex items-center shrink-0">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[var(--color-accent)] text-black rounded-full text-[8.5px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:opacity-90 transition-all duration-300 shrink-0 whitespace-nowrap shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.3)]"
            >
              EXPLORE
            </button>
          </div>
        </nav>

        {/* SECONDARY UTILITY RAIL (Below Navbar) */}
        <div className="flex flex-nowrap min-w-0 items-center justify-between w-full max-w-5xl gap-1.5 sm:gap-2 pointer-events-auto">
          
          {/* LEFT: PRINT ACTION */}
          <div className="shrink-0">
            <PrintButton />
          </div>

          {/* CENTER: READ MANIFESTO AND PREVIEW */}
          <div className="flex flex-col gap-1 flex-1 max-w-[200px] sm:max-w-[240px]">
            <Link 
              to="/manifesto" 
              className="kinetic-rail-thick px-3 sm:px-6 py-1.5 sm:py-2 rounded-full bg-[var(--color-bg-secondary)]/90 backdrop-blur-md text-[8.5px] sm:text-[9px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-all text-center shadow-xl whitespace-nowrap overflow-hidden truncate"
            >
              // READ_MANIFESTO
            </Link>
            <button
              onClick={() => navigate('/showcase')}
              className="text-[7px] font-bold uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-all text-center"
            >
              // WEBSITE DESIGN TEMPLATES SHOWCASE
            </button>
          </div>

          {/* RIGHT: SEARCH TRIGGER */}
          <button 
            onClick={() => window.dispatchEvent(new Event('toggle-command-palette'))}
            className="kinetic-rail-thick p-3 shrink-0 flex items-center justify-center rounded-full bg-[var(--color-bg-secondary)]/90 backdrop-blur-md text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-all shadow-xl group"
            title="Search (Cmd+K)"
          >
            <div className="text-[10px] font-bold group-hover:scale-110 transition-transform">🔍</div>
          </button>
        </div>

        <SpatialCommandSurface isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <TemplateShowcaseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  );
};
