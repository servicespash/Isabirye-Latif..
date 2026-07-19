import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      id="scroll-progress-bar"
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent)] via-indigo-500 to-amber-500 z-[99999] origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
};
