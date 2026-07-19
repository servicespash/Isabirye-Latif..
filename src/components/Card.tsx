import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useMotionPulse } from '../context/MotionContext';
import { useFluidGridManager } from '../engine/FluidGridManager';

interface CardProps {
  title: string;
  category: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title, category, description }) => {
  const { globalFrequency } = useMotionPulse();
  const { resonance } = useFluidGridManager();

  const pulseVariants: Variants = {
    animate: {
      scale: [1, 1.008, 1],
      transition: {
        duration: Math.max(1.5, 3 / (globalFrequency || 1)), 
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      variants={pulseVariants}
      animate="animate"
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative overflow-hidden p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-glass)] backdrop-blur-xl transition-all duration-500"
      style={{
        // Elite Dynamic Shadow: Tinted by the border variable
        boxShadow: '0 12px 40px -12px var(--color-border)',
        aspectRatio: resonance === 1 ? '16/10' : '4/3' 
      }}
    >
      {/* Theme-Aware Accent Flash */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="font-mono text-[9px] text-[var(--color-accent)] mb-3 tracking-[0.25em] uppercase font-semibold">
            // {category}
          </div>
          <h3 className="font-serif text-2xl text-[var(--color-text-primary)] mb-2 tracking-tighter font-bold transition-colors duration-500">
            {title}
          </h3>
        </div>
        <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed tracking-tight transition-colors duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
