import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { ResonanceToggle } from './ResonanceToggle';
import { SpatialCommandSurface } from '../navigation/SpatialCommandSurface';
import { Search } from 'lucide-react';
import { PrintButton } from './PrintButton';
import { useAppContext } from '../hooks/useAppContext';

export const Navbar = () => {
  const { branding } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="flex flex-col items-center gap-2 w-full px-2 md:px-8 pointer-events-none mt-4 print-hidden">

        {/* MASTER COMMAND RAIL */}
        <nav className="kinetic-rail-thick w-full max-w-7xl backdrop-blur-3xl bg-[var(--color-bg-primary)]/60 px-4 py-3 flex justify-between items-center transition-all duration-500 pointer-events-auto rounded-full shadow-2xl">

          {/* BRANDING LOGIC */}
          <Link to="/" className="flex items-center gap-2 shrink-0 max-w-[40%] md:max-w-[65%] overflow-hidden relative group">
            <div className="shrink-0 scale-90">
              <BrandLogo />
            </div>

            <div className="hidden md:flex flex-1 overflow-x-auto whitespace-nowrap no-scrollbar items-center">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-text-primary)] group-hover:text-[#00f2fe] transition-colors duration-300">
                Architect_Node // {branding.name}
              </span>
            </div>
          </Link>

          {/* CONTROLS */}
          <div className="flex gap-2 md:gap-8 items-center shrink-0">
            <ResonanceToggle />
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--color-text-primary)] hover:text-[#00f2fe] transition-all duration-300 shrink-0"
            >
              //_EXPLORE
            </button>
          </div>
        </nav>


        {/* CYLINDRICAL KINETIC BUTTONS: ACTIONS */}
        <div className="flex gap-2 items-center">
            {/* SEARCH TRIGGER */}
            <button 
              onClick={() => window.dispatchEvent(new Event('toggle-command-palette'))}
              className="kinetic-rail-thick p-3 rounded-full bg-[var(--color-bg-secondary)]/90 backdrop-blur-md text-[var(--color-text-primary)] hover:text-[#00f2fe] transition-all duration-500 pointer-events-auto shrink-0 shadow-xl"
              title="Search Portfolio (Cmd+K)"
            >
                <Search className="w-5 h-5 md:hidden" />
                <span className="hidden md:inline px-4 text-[10px] font-bold uppercase tracking-[0.35em]">//_SEARCH</span>
            </button>

            {/* READ MANIFESTO */}
            <Link 
              to="/manifesto" 
              className="kinetic-rail-thick px-8 py-2.5 rounded-full bg-[var(--color-bg-secondary)]/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--color-text-primary)] hover:text-[#00f2fe] transition-all duration-500 pointer-events-auto shrink-0 shadow-xl"
            >
              // READ_MANIFESTO
            </Link>
            <PrintButton />
        </div>

        <SpatialCommandSurface isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};
