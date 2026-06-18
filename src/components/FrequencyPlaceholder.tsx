import { motion } from 'framer-motion';

export const FrequencyPlaceholder = () => (
  <motion.div 
    className="relative w-full aspect-video glass-card border border-white/5 flex items-center justify-center overflow-hidden"
  >
    <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-500">
      <motion.path 
        d="M0 30 C 50 0, 50 60, 100 30 C 150 0, 150 60, 200 30" 
        stroke="currentColor" 
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
    <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase text-indigo-400">// SONIC_LAB_RESONANCE</div>
  </motion.div>
);
