import { motion } from 'framer-motion';
import { useMotionPulse } from '../context/MotionContext';
import { useFluidGridManager } from '../engine/FluidGridManager';
import { getHeroPortrait } from '../engine/PortraitRegistry';

export const PortraitCard = () => {
  const { globalFrequency } = useMotionPulse();
  const { resonance } = useFluidGridManager();

  const isHighResonance = globalFrequency > 1.5;
  const heroAsset = getHeroPortrait();
//...
  return (
    <motion.div
      animate={{
        scale: [1, 1.004, 1],
      }}
      transition={{
        duration: Math.max(2, 4 / (globalFrequency || 1)),
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{
        scale: 1.015,
      }}
      className="relative w-full rounded-3xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-glass)] bg-opacity-20 backdrop-blur-xl transition-all duration-500 shadow-xl group"
      style={{
        aspectRatio: resonance === 1 ? '1/1' : '4/5'
      }}
    >
      {/* 1. Core Visual Media Layer (Renders photo1.png flawlessly) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[var(--color-bg-primary)] transition-colors duration-500">
        {heroAsset?.source ? (
          <img 
            src={heroAsset.source} 
            alt={heroAsset.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03] brightness-[0.98] dark:brightness-[0.88]"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-[var(--color-accent)]/10 to-transparent" />
        )}
        <div className="w-full h-full bg-gradient-to-tr from-[var(--color-accent)]/10 via-transparent to-transparent mix-blend-overlay absolute inset-0 z-10 pointer-events-none" />
      </div>
      
      {/* 2. Frequency Wave Overlay */}
      <motion.div
        className="absolute inset-x-0 bottom-0 top-auto h-1/3 flex items-end justify-center pb-6 z-20 pointer-events-none transition-opacity duration-500"
        animate={{ opacity: isHighResonance ? 0.8 : 0.3 }}
      >
        <svg width="100%" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 text-[var(--color-accent)] opacity-50">
          <motion.path
            d="M0 20 C 50 0, 50 40, 100 20 C 150 0, 150 40, 200 20"
            stroke="currentColor"
            strokeWidth="1.5"
            animate={isHighResonance ? { 
                d: [
                  "M0 20 C 50 5, 50 35, 100 20 C 150 5, 150 35, 200 20", 
                  "M0 20 C 50 35, 50 5, 100 20 C 150 35, 150 5, 200 20", 
                  "M0 20 C 50 5, 50 35, 100 20 C 150 5, 150 35, 200 20"
                ],
            } : { d: "M0 20 C 50 5, 50 35, 100 20 C 150 5, 150 35, 200 20" }}
            transition={{ duration: 4 / (globalFrequency || 1), repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* 3. Glass Refraction Perimeter Framing */}
      <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none z-30" />
    </motion.div>
  );
};
