import React from 'react';
import { motion } from 'motion/react';

export const CymaticLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="w-16 h-16 border-4 border-[var(--color-accent)] border-t-transparent rounded-full"
      />
    </div>
  );
};
