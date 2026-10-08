import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Search, MessageSquare, Mail, Sparkles } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Templates' | 'Services' | 'Architecture';
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is Cymatic Engines Evolution and who is behind it?',
    answer: 'Cymatic Engines Evolution is the sovereign digital architecture initiative developed by Isabirye Latif (Latty Adams). It focuses on engineering zero-latency, highly resilient digital infrastructure and institutional web portals that balance high aesthetic precision with performance.'
  },
  {
    id: 'faq-2',
    category: 'Services',
    question: 'What web engineering services are offered?',
    answer: 'Services include full-stack web application development, custom institutional web portals, high-performance website template customization, database synchronization, SEO architecture, and technical systems audits.'
  },
  {
    id: 'faq-3',
    category: 'Templates',
    question: 'How do I preview and request a website template?',
    answer: 'You can explore all interactive templates on the Showcase page or test live device simulations in the Template Browser. Once selected, click "// Request_Deployment" or initiate a Sovereign Inquiry to begin your custom setup.'
  },
  {
    id: 'faq-4',
    category: 'Templates',
    question: 'Can the showcase templates be customized to my brand identity?',
    answer: 'Yes, every template is built modularly with design token variables, enabling seamless customization of colors, typography, layout structures, content routing, and domain deployment.'
  },
  {
    id: 'faq-5',
    category: 'Architecture',
    question: 'What technology stack powers these digital environments?',
    answer: 'The core stack utilizes React, TypeScript, Tailwind CSS, Vite, cloud-hosted microservices, Firestore persistence layers, and edge delivery networks optimized for maximum speed and uptime.'
  },
  {
    id: 'faq-6',
    category: 'Services',
    question: 'Are ongoing support and infrastructure maintenance available?',
    answer: 'Yes, institutional maintenance retainers and performance SLAs are available to ensure continuous security updates, search engine visibility, and operational compliance.'
  },
  {
    id: 'faq-7',
    category: 'General',
    question: 'How can I initiate a project inquiry or consultation?',
    answer: 'You can contact Isabirye Latif directly via WhatsApp, email, or by opening the Sovereign Inquiry modal anywhere across the application platform.'
  }
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = React.useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const categories = ['All', 'General', 'Templates', 'Services', 'Architecture'];

  const filteredFaqs = FAQ_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full my-12 space-y-8 font-sans">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] font-mono text-[10px] font-bold uppercase tracking-widest">
          <HelpCircle className="w-3.5 h-3.5" />
          // KNOWLEDGE_BASE & SUPPORT
        </div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[var(--color-text-primary)]">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
          Find instant answers regarding web architecture, template deployments, system specifications, and direct collaboration.
        </p>
      </div>

      {/* Controls: Search & Categories */}
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-secondary)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or keywords..."
            className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[var(--color-accent)] text-black shadow-md shadow-[var(--color-accent)]/20'
                  : 'bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-2xl p-6 space-y-3">
            <Sparkles className="w-8 h-8 text-[var(--color-accent)] mx-auto opacity-50" />
            <p className="text-xs font-mono text-[var(--color-text-secondary)] uppercase tracking-wider">
              No matching questions found for "{searchQuery}"
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]/30"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-accent)] shrink-0 uppercase tracking-widest">
                      {faq.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[var(--color-text-primary)] tracking-wide">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--color-accent)] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-border)]/40 font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>

      {/* Support Contact Prompt */}
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
            Have a custom operational inquiry?
          </h4>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Connect directly with Isabirye Latif for tailored system specifications or technical collaboration.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/256781254323"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp
          </a>
          <a
            href="mailto:contact@cymatichub.xyz"
            className="px-4 py-2.5 bg-[var(--color-accent)] text-black font-bold text-[10px] uppercase tracking-widest rounded-xl hover:opacity-90 transition-all flex items-center gap-2 shadow-lg"
          >
            <Mail className="w-3.5 h-3.5" />
            Email Uplink
          </a>
        </div>
      </div>
    </section>
  );
};
