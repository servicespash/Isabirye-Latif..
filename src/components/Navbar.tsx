import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';
import { SpatialCommandSurface } from '../navigation/SpatialCommandSurface';

export const Navbar = () => {
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

      {/* CONTAINER: Managed by parent */}
      <div className="flex flex-col items-center gap-4 w-full px-4 md:px-8 pointer-events-none">
        
        {/* MASTER COMMAND RAIL */}
        <nav className="kinetic-rail-thick w-full max-w-7xl backdrop-blur-3xl bg-[var(--color-bg-primary)]/60 px-6 py-4 flex justify-between items-center transition-all duration-500 pointer-events-auto rounded-full shadow-2xl mt-6">
          
          {/* BRANDING LOGIC */}
          <Link to="/" className="flex items-center gap-3 shrink-0 max-w-[55%] md:max-w-[65%] overflow-hidden relative group">
            <div className="shrink-0 scale-95 md:scale-105">
              <BrandLogo />
            </div>
            
            <div className="flex-1 overflow-x-auto whitespace-nowrap no-scrollbar flex items-center">
              <span className="text-[10px] md:text-[12px] font-bold tracking-[0.25em] uppercase text-[var(--color-text-primary)] group-hover:text-[#00f2fe] transition-colors duration-300">
                Architect_Node // Cymatic_Hub // Cymatic_Resonance
              </span>
            </div>
          </Link>

          {/* CONTROLS */}
          <div className="flex gap-4 md:gap-8 items-center shrink-0">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.25em] text-[var(--color-text-primary)] hover:text-[#00f2fe] transition-all duration-300 shrink-0"
            >
              {isOpen ? '//_CLOSE_EXPLORE' : '//_EXPLORE'}
            </button>
          </div>
        </nav>

        {/* CYLINDRICAL KINETIC BUTTON: READ MANIFESTO */}
        <Link 
          to="/manifesto" 
          className="kinetic-rail-thick px-8 py-2.5 rounded-full bg-[var(--color-bg-secondary)]/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--color-text-primary)] hover:text-[#00f2fe] transition-all duration-500 pointer-events-auto shrink-0 shadow-xl"
        >
          // READ_MANIFESTO
        </Link>

        <SpatialCommandSurface isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};
