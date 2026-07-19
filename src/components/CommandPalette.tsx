import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  CornerDownLeft, 
  X, 
  FileText, 
  Briefcase, 
  Cpu, 
  BookOpen, 
  Activity, 
  TrendingUp, 
  Heart, 
  HelpCircle,
  Hash,
  Sparkles,
  Command
} from 'lucide-react';

interface SearchItem {
  name: string;
  description: string;
  path: string;
  category: 'NAVIGATION' | 'PROJECTS' | 'MANIFESTO' | 'ACTIONS';
  keywords: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const SEARCH_INDEX: SearchItem[] = [
  // NAVIGATION ORBITS
  { 
    name: 'Home Node', 
    description: 'Main interface dashboard with real-time analytics telemetry.', 
    path: '/', 
    category: 'NAVIGATION',
    keywords: ['home', 'root', 'main', 'start', 'dashboard', 'telemetry'],
    icon: Activity
  },
  { 
    name: 'Architectural Stack Audit', 
    description: 'Radar chart analysis of engineering skill proficiency and depth. Languages, libraries, frameworks, database systems, and devops proficiencies.', 
    path: '/stack', 
    category: 'NAVIGATION',
    keywords: ['stack', 'audit', 'radar', 'chart', 'skills', 'proficiency', 'tech', 'd3', 'recharts', 'languages'],
    icon: Cpu
  },
  { 
    name: 'Projects Catalogue', 
    description: 'The Builder repository featuring interactive category filtering for infrastructure, tooling, STEM, creative, art, and media modules.', 
    path: '/projects', 
    category: 'NAVIGATION',
    keywords: ['projects', 'builder', 'code', 'portfolio', 'filter', 'infrastructure', 'tooling', 'stem', 'creative', 'art', 'media'],
    icon: Briefcase
  },
  { 
    name: 'Origin Manifesto', 
    description: 'Isabirye Latif core developmental philosophy, ghetto roots story, single mother struggles, S.3 dropout, and design guidelines.', 
    path: '/manifesto', 
    category: 'NAVIGATION',
    keywords: ['manifesto', 'origin', 'philosophy', 'design', 'ideas', 'core', 'latif', 'ghetto', 'struggle', 'mother'],
    icon: BookOpen
  },
  { 
    name: 'Cymatic Study Nexus', 
    description: 'Synchronized teacher and student cohort monitoring. View courses, classes, cohort progress, and grades in real-time.', 
    path: '/study', 
    category: 'NAVIGATION',
    keywords: ['study', 'nexus', 'grades', 'classes', 'students', 'teachers', 'school', 'sync'],
    icon: TrendingUp
  },
  { 
    name: 'Learning Modules', 
    description: 'Certifications, academic modules, and learning tracks highlighting academic milestones and continuous education.', 
    path: '/learning', 
    category: 'NAVIGATION',
    keywords: ['learning', 'education', 'certifications', 'skills', 'university', 'modules'],
    icon: HelpCircle
  },
  { 
    name: 'Resonance Atmosphere', 
    description: 'Interactive background wave physics, physical modeling synthesizer, and custom visual waveform configurations.', 
    path: '/resonance', 
    category: 'NAVIGATION',
    keywords: ['resonance', 'sound', 'synthesizer', 'wave', 'physics', 'audio', 'mute', 'play', 'frequency'],
    icon: Sparkles
  },
  { 
    name: 'Transparency Ledger', 
    description: 'Public stats, view telemetry, database schema designs, firestore rules, and analytical indicators.', 
    path: '/transparency', 
    category: 'NAVIGATION',
    keywords: ['transparency', 'ledger', 'stats', 'views', 'visitors', 'database', 'rules'],
    icon: FileText
  },
  { 
    name: 'Social Terminals', 
    description: 'Direct communication coordinates and developer social links including GitHub, LinkedIn, Telegram, and Email.', 
    path: '/socials', 
    category: 'NAVIGATION',
    keywords: ['socials', 'github', 'linkedin', 'discord', 'telegram', 'email', 'contact'],
    icon: Hash
  },
  { 
    name: 'Template Showcase', 
    description: 'Explore our crafted web application templates designed for scalability, performance, and aesthetic precision.', 
    path: '/showcase', 
    category: 'NAVIGATION',
    keywords: ['showcase', 'templates', 'design', 'themes', 'portfolio', 'ui', 'ux', 'device', 'simulator'],
    icon: Sparkles
  },
  { 
    name: 'Legal Protocol Compliance', 
    description: 'Compliance policies, terms of service, cookies policies, and zero-trust security guidelines.', 
    path: '/legal', 
    category: 'NAVIGATION',
    keywords: ['legal', 'privacy', 'policy', 'terms', 'cookies', 'security'],
    icon: FileText
  },
  { 
    name: 'System Settings', 
    description: 'Configure global visual orchestration, aspect ratios, and architectural deployment protocols.', 
    path: '/settings', 
    category: 'NAVIGATION',
    keywords: ['settings', 'config', 'theme', 'aspect', 'ratio', 'contrast', 'github', 'cloudflare', 'deploy'],
    icon: Command
  },

  // SPECIFIC PROJECT MODULES (FULL-TEXT ENHANCED)
  { 
    name: 'Project: Cymatic Study Node', 
    description: 'High-performance real-time telemetry server and socket orchestration nodes powering low-latency user synchronization. Leverages WebSockets, Cloud SQL, Node.js, and Firebase.', 
    path: '/projects#cymatic-study', 
    category: 'PROJECTS',
    keywords: ['infrastructure', 'socket', 'websocket', 'server', 'node', 'projects', 'cymatic', 'study', 'telemetry', 'real-time', 'sync'],
    icon: Briefcase
  },
  { 
    name: 'Project: PDF Syllabus Compiler', 
    description: 'Automated high-fidelity document compiler designed for massive scalable academic syllabus and resume exports. Compiles and generates complex layout documents utilizing React, TypeScript, PDFKit, and Esbuild.', 
    path: '/projects#pdf-engine', 
    category: 'PROJECTS',
    keywords: ['pdf', 'compiler', 'tooling', 'document', 'generation', 'projects', 'syllabus', 'resume', 'scalable', 'export'],
    icon: Briefcase
  },
  { 
    name: 'Project: Sci-Matic STEM System', 
    description: 'Interactive STEM instruction system integrating physical formulas with custom-rendered audio/visual graphics. Integrates Formula layouts, D3.js plots, and Katex renders with Vite.', 
    path: '/projects#sci-matic', 
    category: 'PROJECTS',
    keywords: ['projects', 'sci-matic', 'stem', 'instruction', 'formulas', 'graphics', 'd3', 'katex', 'physics', 'rendering'],
    icon: Briefcase
  },
  { 
    name: 'Project: Sonic Lab Synthesizer', 
    description: 'Microtonal polyphonic synthesizer playing physical-modeling guitar arrays and resonance feedback waveforms in real-time. Created using Web Audio API, Tailwind, and Framer Motion.', 
    path: '/projects#sonic-lab', 
    category: 'PROJECTS',
    keywords: ['sonic', 'lab', 'synthesizer', 'audio', 'music', 'creative', 'projects', 'polyphonic', 'microtonal', 'waveform', 'frequency'],
    icon: Sparkles
  },
  { 
    name: 'Project: Sensory Grid Simulator', 
    description: 'Fluid simulation canvas mapping complex mathematical coordinates into interactive, high-frame-rate pixel aesthetics. Uses HTML Canvas APIs, custom physics calculations, and CSS variables.', 
    path: '/projects#sensory-grid', 
    category: 'PROJECTS',
    keywords: ['projects', 'sensory', 'grid', 'canvas', 'coordinates', 'physics', 'fluid', 'simulation', 'render', 'aesthetics'],
    icon: Briefcase
  },
  { 
    name: 'Project: Pash Media Studio Node', 
    description: 'Responsive, highly scalable asset-delivery pipeline for modern multimedia and graphic layout representations. Optimized using modern Vite, PostCSS, and adaptive asset compression.', 
    path: '/projects#pash-media', 
    category: 'PROJECTS',
    keywords: ['projects', 'pash', 'media', 'studio', 'assets', 'pipeline', 'compression', 'multimedia', 'layout', 'responsive'],
    icon: Briefcase
  },

  // ORIGIN MANIFESTO SECTIONS (FULL-TEXT ENHANCED)
  {
    name: 'Manifesto: The Forge',
    description: 'From button phones to global infrastructure. Focuses on being ghetto-raised, having childhood fantasies of developing calculators, single mother washes clothes until her fingers bleed to pay tuition, and setting an immortal system resolution to achieve technical dominance.',
    path: '/manifesto#forge',
    category: 'MANIFESTO',
    keywords: ['manifesto', 'forge', 'ghetto', 'button', 'phone', 'mother', 'struggle', 'school', 'infrastructure', 'bleeding', 'hands', 'tuition'],
    icon: BookOpen
  },
  {
    name: 'Manifesto: The Isolation',
    description: 'S.3 Dropout and the Madman\'s Forge. Self-taught, self-hosted developer personnel. Sitting on cold concrete with a single Samsung phone, working during pandemic with astronomical tutoring costs, manual brick-by-brick development, and abandoned on socials.',
    path: '/manifesto#isolation',
    category: 'MANIFESTO',
    keywords: ['manifesto', 'isolation', 'dropout', 'lessons', 'covid', 'pandemic', 'self-study', 'relentless', 'madman', 'samsung', 'phone'],
    icon: BookOpen
  },
  {
    name: 'Manifesto: The Proclamation',
    description: 'Grades Do Not Build Monuments. Eradicating the lie that being ghetto-raised or termed an illiterate limits success. Demonstrates that lacking formal academic papers is an unchained advantage. Output defines existence.',
    path: '/manifesto#proclamation',
    category: 'MANIFESTO',
    keywords: ['manifesto', 'proclamation', 'grades', 'monuments', 'papers', 'existence', 'output', 'illiterate', 'ghetto-raised'],
    icon: BookOpen
  },
  {
    name: 'Manifesto: The Global Pledge',
    description: 'Strategic partnerships, sponsorships, and direct communication links. Latif\'s solemn vow: Bleed for any project, honor sponsorship trust, and return absolute positivity with reliance on ALLAH, patience, discipline, and consistency.',
    path: '/manifesto#pledge',
    category: 'MANIFESTO',
    keywords: ['manifesto', 'pledge', 'sponsor', 'strategic', 'partnership', 'allah', 'whatsapp', 'email', 'bleed', 'positivity'],
    icon: BookOpen
  },

  // QUICK SYSTEM ACTIONS
  { 
    name: 'Open Inquiry Terminal', 
    description: 'Launch the secure sovereign form to send messages and communication requests.', 
    path: 'action:inquiry', 
    category: 'ACTIONS',
    keywords: ['inquiry', 'message', 'contact', 'mail', 'support', 'ask', 'secure', 'write'],
    icon: Heart
  },
  { 
    name: 'Trigger System Resonance Toggle', 
    description: 'Mute or activate the background physical-modeling synthesizer and microtonal audio loops.', 
    path: 'action:resonance', 
    category: 'ACTIONS',
    keywords: ['synth', 'mute', 'unmute', 'audio', 'toggle', 'sound'],
    icon: Sparkles
  }
];

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [history, setHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('cymatic_search_history');
    if (saved && saved !== 'undefined') {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.warn('Failed to parse search history', e);
      }
    }
    return [];
  });
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Save query to history helper
  const saveQueryToHistory = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed || trimmed.length < 2) return;
    setHistory(prev => {
      const filtered = prev.filter(item => item.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, 5); // Keep last 5 unique queries
      localStorage.setItem('cymatic_search_history', JSON.stringify(updated));
      return updated;
    });
  };

  // Clear search history helper
  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('cymatic_search_history');
  };

  // Global listeners for toggles & shortcuts
  useEffect(() => {
    const handleToggle = () => {
      setIsOpen(prev => {
        const next = !prev;
        if (next) {
          setQuery('');
          setSelectedIndex(0);
        }
        return next;
      });
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // CMD+K or CTRL+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(prev => {
          const next = !prev;
          if (next) {
            setQuery('');
            setSelectedIndex(0);
          }
          return next;
        });
      }
      
      // forward slash "/" opens palette if we are not inside an input
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsOpen(true);
        setQuery('');
        setSelectedIndex(0);
      }

      // Escape key closes palette
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('toggle-command-palette', handleToggle);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('toggle-command-palette', handleToggle);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Autofocus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle matching items
  const filteredItems = useMemo(() => {
    if (!query.trim()) return SEARCH_INDEX;
    const cleanQuery = query.toLowerCase().trim();
    return SEARCH_INDEX.filter(item => 
      item.name.toLowerCase().includes(cleanQuery) ||
      item.description.toLowerCase().includes(cleanQuery) ||
      item.keywords.some(kw => kw.includes(cleanQuery))
    );
  }, [query]);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    setSelectedIndex(0);
  };

  const handleSelect = (item: SearchItem) => {
    setIsOpen(false);
    if (query.trim()) {
      saveQueryToHistory(query);
    }
    if (item.path.startsWith('action:')) {
      const action = item.path.split(':')[1];
      if (action === 'inquiry') {
        window.dispatchEvent(new Event('open-sovereign-inquiry'));
      } else if (action === 'resonance') {
        window.dispatchEvent(new Event('toggle-audio-synth'));
      }
    } else {
      navigate(item.path);
    }
  };

  // Keyboard navigation through results
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[10vh] px-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Search Card Dialog */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.97, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl relative z-10"
            style={{
              boxShadow: '0 0 50px rgba(0, 242, 254, 0.08)'
            }}
          >
            {/* Header / Input Block */}
            <div className="relative border-b border-neutral-800 p-4 flex items-center gap-3">
              <Search className="w-5 h-5 text-neutral-500 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search routes, audits, actions or projects... (e.g., radar, filter, inquiry)"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className="w-full bg-transparent text-white font-mono text-sm placeholder-neutral-500 outline-none pr-12"
              />
              <div className="flex items-center gap-1.5 absolute right-4">
                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-0.5 rounded border border-neutral-800 bg-neutral-900 px-1.5 font-mono text-[9px] font-bold text-neutral-400">
                  ESC
                </kbd>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Results Listing */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-2 select-none no-scrollbar">
              {/* Persistent Search History Tag Deck */}
              {!query.trim() && history.length > 0 && (
                <div className="mb-3 px-2 py-1.5 rounded-xl border border-neutral-900 bg-neutral-950/40">
                  <div className="flex items-center justify-between px-1.5 pb-1.5 text-[8px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
                    <span>// RECENT QUERIES_</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        clearHistory();
                      }}
                      className="hover:text-red-400 transition-colors cursor-pointer text-[8px]"
                    >
                      [CLEAR_ALL]
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5 px-1.5">
                    {history.map((h, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuery(h);
                          setSelectedIndex(0);
                          inputRef.current?.focus();
                        }}
                        className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-900 border border-neutral-800 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5 text-[9px] font-mono text-neutral-400 hover:text-white transition-all cursor-pointer"
                      >
                        <Search className="w-2.5 h-2.5 text-neutral-600" />
                        <span>{h}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredItems.length > 0 ? (
                (() => {
                  let overallIndex = 0;
                  const categories = Array.from(new Set(filteredItems.map(item => item.category)));
                  
                  // Sort categories to always follow a logical hierarchy: Pages, Projects, Manifesto, Settings
                  const categoryOrder = ['NAVIGATION', 'PROJECTS', 'MANIFESTO', 'ACTIONS'];
                  categories.sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));

                  const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
                    NAVIGATION: 'PAGES',
                    PROJECTS: 'PROJECTS',
                    MANIFESTO: 'MANIFESTO SECTIONS',
                    ACTIONS: 'SETTINGS / ACTIONS'
                  };
                  
                  return categories.map((cat) => {
                    const catItems = filteredItems.filter(item => item.category === cat);
                    const displayName = CATEGORY_DISPLAY_NAMES[cat] || cat;
                    return (
                      <div key={cat} className="space-y-1">
                        {/* Section Header */}
                        <div className="text-[9px] font-mono font-bold tracking-widest text-[var(--color-accent)]/80 px-3 pt-3 pb-1 uppercase">
                          // {displayName}
                        </div>

                        {/* List items */}
                        {catItems.map((item) => {
                          const itemIndex = overallIndex++;
                          const isSelected = itemIndex === selectedIndex;
                          const Icon = item.icon;

                          return (
                            <div
                              key={item.name}
                              onClick={() => handleSelect(item)}
                              onMouseEnter={() => setSelectedIndex(itemIndex)}
                              className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                                isSelected 
                                  ? 'bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/40 text-white' 
                                  : 'border border-transparent hover:bg-neutral-900/50 text-neutral-400 hover:text-neutral-200'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${
                                  isSelected ? 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]' : 'bg-neutral-900 text-neutral-500'
                                }`}>
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs font-black uppercase tracking-tight font-sans">
                                    {item.name}
                                  </div>
                                  <div className="text-[10px] text-neutral-500 font-sans mt-0.5">
                                    {item.description}
                                  </div>
                                </div>
                              </div>

                              {/* Helper enter badge on selected item */}
                              {isSelected && (
                                <span className="flex items-center gap-1 font-mono text-[9px] text-[var(--color-accent)] uppercase tracking-wider bg-[var(--color-accent)]/5 px-2 py-0.5 rounded border border-[var(--color-accent)]/10 animate-fade-in">
                                  <span>SELECT</span>
                                  <CornerDownLeft className="w-2.5 h-2.5" />
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  });
                })()
              ) : (
                <div className="text-center py-12 space-y-2">
                  <div className="text-xs font-mono text-red-500">[ERROR_MATCH_MISSING]</div>
                  <div className="text-[10px] font-sans text-neutral-500">NO ARCHITECT MODULE MATCHED YOUR QUERY "{query}"</div>
                </div>
              )}
            </div>

            {/* Command Palette Keyboard Controls Footer */}
            <div className="border-t border-neutral-900 bg-neutral-950/60 p-3 flex justify-between items-center text-[9px] font-mono text-neutral-600 uppercase tracking-widest">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <kbd className="rounded bg-neutral-900 border border-neutral-800 px-1 py-0.5 text-[8px]">↑↓</kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="rounded bg-neutral-900 border border-neutral-800 px-1 py-0.5 text-[8px]">↵ enter</kbd>
                  select
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="rounded bg-neutral-900 border border-neutral-800 px-1 py-0.5 text-[8px]">esc</kbd>
                  close
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Command className="w-3 h-3" />
                <span>CMD+K / / KEY</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
