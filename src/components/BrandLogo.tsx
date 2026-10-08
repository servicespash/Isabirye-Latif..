import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppContext } from '../hooks/useAppContext';

export const BrandLogo = () => {
  const { branding } = useAppContext();
  // Sequence: 0=IL, 1=Isabirye Latif, 2=Latty Adams (LA)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getContent = () => {
    switch (index) {
      case 0: return { content: branding.logo, label: "Cymatic Architect" };
      case 1: return { content: "Isabirye Latif", label: "Solo Architect" };
      case 2: return { content: "LA", label: "Latty Adams" };
      default: return { content: branding.logo, label: "Cymatic Architect" };
    }
  };

  const { content, label } = getContent();

  return (
    <div className="flex flex-col items-start cursor-pointer group h-12 overflow-hidden justify-center w-36 sm:w-40">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -5 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col"
        >
          <div className="text-lg md:text-xl text-[#0f0f0f] dark:text-white tracking-tighter whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>
            {content}
          </div>
          <span className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] text-hub-gold font-mono whitespace-nowrap">
            {label}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
