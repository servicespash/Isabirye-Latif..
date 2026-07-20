import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const CymaticPulseBanner: React.FC = () => {
  return (
    <motion.div 
      className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] py-2 text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Link to="/manifesto" className="font-mono text-[10px] tracking-[0.2em] uppercase hover:text-[var(--accent-primary)] transition-colors">
        // CYMATIC EVOLUTION: FOUNDED BY ISABIRYE LATIF — READ THE MANIFESTO
      </Link>
    </motion.div>
  );
};
