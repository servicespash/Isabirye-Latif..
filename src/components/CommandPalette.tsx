import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SITE_INDEX = [
  { category: '🛠️ // THE_BUILDER', items: [{ name: 'Cymatic Hub', path: '/' }, { name: 'PDF Engine', path: '/projects' }, { name: 'Sci-Matic Platform', path: '/projects' }] },
  { category: '🎨 // THE_CREATIVE', items: [{ name: 'Pash Media Studio', path: '/creative' }, { name: 'Latty Adams Sonic Lab', path: '/creative' }] },
  { category: '📚 // THE_LEARNER', items: [{ name: 'Academic Progression', path: '/learning' }, { name: 'Certifications', path: '/learning' }, { name: 'Skill Matrix', path: '/learning' }] },
  { category: '💬 // COMMS', items: [{ name: 'Email Support', path: 'mailto:support@cymatichub.xyz' }, { name: 'Discord Terminal', path: '#' }, { name: 'Telegram Access', path: '#' }] },
];

export const CommandPalette = ({ onClose }: { onClose?: () => void }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    if (path.startsWith('mailto:')) {
      window.location.href = path;
    } else if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else if (path !== '#') {
      navigate(path);
    }
    setIsOpen(false);
    onClose?.();
  };

  const filteredIndex = useMemo(() => {
    if (!query) return SITE_INDEX;
    return SITE_INDEX.map(cat => ({
      ...cat,
      items: cat.items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    })).filter(cat => cat.items.length > 0);
  }, [query]);

  return (
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search projects..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
        // Remove setTimeout onBlur if it causes issues; or ensure click happens before blur
        className="w-full bg-transparent border-b border-white/20 text-white outline-none pb-2 placeholder-white/30 focus:border-cyan-400 transition-colors"
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 w-full mt-4 glass-card p-4 z-50 border border-white/10"
          >
            {filteredIndex.length > 0 ? (
              <div className="space-y-4">
                {filteredIndex.map(cat => (
                  <div key={cat.category}>
                    <h3 className="text-[10px] text-cyan-400 uppercase tracking-widest mb-2">{cat.category}</h3>
                    {cat.items.map(item => (
                      <button 
                        key={item.name}
                        onClick={() => handleNavigate(item.path)}
                        className="block w-full text-left py-2 px-4 text-white hover:bg-white/5 rounded-lg transition-colors font-mono text-sm"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-slate-400 font-mono text-sm">
                <p>No results found.</p>
                <button onClick={() => handleNavigate('mailto:support@cymatichub.xyz')} className="text-cyan-400 hover:underline">Get in Touch with Latty</button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
