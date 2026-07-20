import { motion } from 'motion/react';

export const AperturePlaceholder = () => (
  <motion.div 
    className="relative w-full aspect-video glass-card border border-white/5 flex items-center justify-center overflow-hidden"
  >
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-700">
      <path d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M32 8L56 48H8L32 8Z" stroke="currentColor" strokeWidth="2" />
    </svg>
    <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase text-cyan-400">// PASH_MEDIA_STUDIO</div>
  </motion.div>
);
