import React from 'react';
import { motion } from 'framer-motion';

interface MediaPlaceholderProps {
  title: string;
  type: 'photo' | 'audio';
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({ title, type }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="relative rounded-3xl glass-card p-4 overflow-hidden border border-white/5"
  >
    <div className={`w-full ${type === 'photo' ? 'aspect-video' : 'aspect-square'} bg-white/5 rounded-2xl flex items-center justify-center`}>
      <span className="font-mono text-[10px] tracking-widest uppercase text-slate-500">
        {type === 'photo' ? 'Image Content' : 'Audio Track'}
      </span>
    </div>
    <div className="p-4 font-mono text-xs uppercase tracking-widest text-hub-accent mt-2">
      {title}
    </div>
  </motion.div>
);
