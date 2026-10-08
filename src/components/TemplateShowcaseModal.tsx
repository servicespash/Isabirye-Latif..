import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import templatesData from '../data/templates.json';
import { Link } from 'react-router-dom';

interface TemplateDef {
  id: string;
  title: string;
  category: string;
  purpose: string;
  description: string;
  path: string;
  image: string;
}

interface TemplateShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const templates: TemplateDef[] = templatesData;

export const TemplateShowcaseModal: React.FC<TemplateShowcaseModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-5xl h-[80vh] bg-[#090D1A] rounded-3xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Modal Header */}
            <header className="h-14 border-b border-gray-800 flex items-center justify-between px-6 shrink-0 bg-[#111625]">
               <h2 className="text-white font-black text-xs uppercase tracking-widest">Web Design Templates</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
            </header>

            {/* Showcase Grid */}
            <div className="flex-grow overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {templates.map((t) => (
                <div key={t.id} className="bg-[#111625] rounded-2xl p-4 border border-gray-800 flex flex-col gap-3 group">
                   <div className="h-32 bg-gray-800 rounded-xl overflow-hidden">
                     <img src={t.image} alt={t.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                   </div>
                   <div className="flex-grow">
                     <h3 className="text-white font-bold text-sm tracking-wide">{t.title}</h3>
                     <p className="text-gray-400 text-[11px] leading-relaxed mt-1">{t.description}</p>
                   </div>
                   <Link 
                     to={t.path} 
                     onClick={onClose}
                     className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mt-auto"
                   >
                     View Template <ArrowRight className="w-3 h-3" />
                   </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
