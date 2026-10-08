import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  RefreshCw, 
  Search, 
  Sparkles
} from 'lucide-react';

interface AuditItem {
  id: string;
  name: string;
  description: string;
  status: 'passed' | 'warning' | 'failed';
  scoreImpact: number;
  currentValue?: string;
  recommendation?: string;
}

export const SeoAuditor: React.FC = () => {
  const location = useLocation();
  const [isAuditing, setIsAuditing] = useState(false);
  const [score, setScore] = useState(0);
  const [audits, setAudits] = useState<AuditItem[]>([]);
  const [pageTitle, setPageTitle] = useState('');
  const [pageUrl, setPageUrl] = useState('');

  const runAudit = useCallback(() => {
    setIsAuditing(true);
    
    // Simulate slight processing latency for "haptic" sovereign telemetry feel
    setTimeout(() => {
      if (typeof window === 'undefined') return;

      const title = document.title || '';
      setPageTitle(title);
      setPageUrl(window.location.pathname);

      const descriptionMeta = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const keywordsMeta = document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';
      const ogTitleMeta = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
      const ogDescMeta = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
      const ogImageMeta = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
      
      // Check for h1 elements in the active document body
      const h1Count = document.querySelectorAll('h1').length;

      const checklist: AuditItem[] = [
        // 1. Title Check
        {
          id: 'title-length',
          name: 'Title Length Integrity',
          description: 'Checks if page title exists and is of optimal search index length (30-60 characters).',
          status: title.length === 0 
            ? 'failed' 
            : (title.length >= 30 && title.length <= 65) 
              ? 'passed' 
              : 'warning',
          scoreImpact: 25,
          currentValue: title ? `"${title}" (${title.length} chars)` : 'Empty / Missing',
          recommendation: title.length === 0 
            ? 'Add a unique, informative page title.' 
            : title.length < 30 
              ? 'Expand title to at least 30 characters for keyword presence.' 
              : 'Shorten title to below 65 characters to avoid SERP clipping.'
        },
        // 2. Meta Description Check
        {
          id: 'description-length',
          name: 'Meta Description Optimization',
          description: 'Verifies the presence and length of the SEO meta description snippet (120-160 characters).',
          status: descriptionMeta.length === 0 
            ? 'failed' 
            : (descriptionMeta.length >= 100 && descriptionMeta.length <= 165) 
              ? 'passed' 
              : 'warning',
          scoreImpact: 25,
          currentValue: descriptionMeta ? `"${descriptionMeta.substring(0, 50)}..." (${descriptionMeta.length} chars)` : 'None detected',
          recommendation: descriptionMeta.length === 0 
            ? 'Write a meta description to capture searcher click-throughs.' 
            : descriptionMeta.length < 100 
              ? 'Add details to achieve at least 100 characters for descriptive density.' 
              : 'Shorten to 160 characters to prevent truncation in search result lists.'
        },
        // 3. Keywords Presence Check
        {
          id: 'keywords-presence',
          name: 'Sovereign Keywords Index',
          description: 'Checks for explicit page keyword taxonomies.',
          status: keywordsMeta.length > 0 ? 'passed' : 'warning',
          scoreImpact: 15,
          currentValue: keywordsMeta ? keywordsMeta : 'No keywords defined',
          recommendation: keywordsMeta.length === 0 
            ? 'Populate key technologies, topics, and names to assist indexing.' 
            : undefined
        },
        // 4. Open Graph Consistency
        {
          id: 'og-graph-tags',
          name: 'Social Graph Sync (OG)',
          description: 'Validates presence of Open Graph tags (og:title, og:description, og:image) for elegant chat & social sharing.',
          status: (ogTitleMeta && ogDescMeta && ogImageMeta) 
            ? 'passed' 
            : (ogTitleMeta || ogDescMeta || ogImageMeta) 
              ? 'warning' 
              : 'failed',
          scoreImpact: 20,
          currentValue: `OG_Title: ${ogTitleMeta ? '✓' : '✗'} | OG_Desc: ${ogDescMeta ? '✓' : '✗'} | OG_Img: ${ogImageMeta ? '✓' : '✗'}`,
          recommendation: !(ogTitleMeta && ogDescMeta && ogImageMeta) 
            ? 'Provide complete social meta tags for structured card formatting.' 
            : undefined
        },
        // 5. Semantic H1 Validator
        {
          id: 'h1-presence',
          name: 'Structural Hierarchy (H1)',
          description: 'Ensures exactly one H1 tag is present on the page for correct header indexing.',
          status: h1Count === 1 
            ? 'passed' 
            : h1Count > 1 
              ? 'warning' 
              : 'failed',
          scoreImpact: 15,
          currentValue: `Detected: ${h1Count} tag(s)`,
          recommendation: h1Count === 0 
            ? 'Include exactly one main H1 title tag on this page view.' 
            : 'Consolidate headings; a single page should have exactly one primary H1 block.'
        }
      ];

      // Calculate final score
      let calculatedScore = 0;
      checklist.forEach(audit => {
        if (audit.status === 'passed') {
          calculatedScore += audit.scoreImpact;
        } else if (audit.status === 'warning') {
          calculatedScore += Math.floor(audit.scoreImpact * 0.5);
        }
      });

      setAudits(checklist);
      setScore(calculatedScore);
      setIsAuditing(false);
    }, 600);
  }, []);

  // Run audit automatically when navigating
  useEffect(() => {
    const timer = setTimeout(() => {
      runAudit();
    }, 100);
    return () => clearTimeout(timer);
  }, [runAudit, location.pathname]);

  return (
    <div className="rounded-2xl border border-[var(--color-border)]/50 bg-black/40 backdrop-blur-xl p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)]/20 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-xl border border-[var(--color-accent)]/20">
            <Search className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <span className="text-[9px] font-mono tracking-[0.2em] text-[var(--color-accent)] uppercase block">// SOVEREIGN_SEO_COGNITION</span>
            <h3 className="text-sm font-extrabold uppercase text-white font-sans tracking-tight">Active Page SEO Auditor</h3>
          </div>
        </div>

        <button
          onClick={runAudit}
          disabled={isAuditing}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 text-[9px] font-mono font-bold uppercase text-[var(--color-text-secondary)] hover:text-white transition-all disabled:opacity-50"
        >
          <RefreshCw className={`w-3 h-3 text-[var(--color-accent)] ${isAuditing ? 'animate-spin' : ''}`} />
          <span>{isAuditing ? 'AUDITING...' : 'RE-AUDIT'}</span>
        </button>
      </div>

      {/* Score Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-neutral-950/40 p-4 rounded-xl border border-neutral-900">
        <div className="flex flex-col items-center text-center space-y-1.5">
          <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest">// HEALTH_SCORE</span>
          
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* SVG circle meter */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-neutral-900"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <motion.path
                initial={{ strokeDasharray: "0, 100" }}
                animate={{ strokeDasharray: `${score}, 100` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={score >= 80 ? "text-emerald-400" : score >= 50 ? "text-amber-400" : "text-red-500"}
                strokeWidth="2.5"
                strokeDasharray={`${score}, 100`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-black font-mono tracking-tighter text-white">{score}</span>
              <span className="text-[6px] font-mono text-neutral-500 uppercase">/ 100</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-2">
          <div className="flex justify-between text-[9px] font-mono text-neutral-400">
            <span>TARGET_PATH:</span>
            <span className="text-[var(--color-accent)] font-bold">{pageUrl}</span>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-neutral-400">
            <span>ACTIVE_NODE:</span>
            <span className="text-white font-bold max-w-[140px] truncate">{pageTitle || 'N/A'}</span>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-neutral-400">
            <span>READINESS_LEVEL:</span>
            <span className={`font-bold ${score >= 80 ? 'text-emerald-400' : score >= 50 ? 'text-amber-400' : 'text-red-500'}`}>
              {score >= 85 ? 'HIGH_INDEX_READY' : score >= 60 ? 'WARNING_MARGINS' : 'RE-OPTIMIZATION_NEEDED'}
            </span>
          </div>
          <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden mt-1">
            <div 
              className={`h-full transition-all duration-1000 ${score >= 80 ? 'bg-emerald-400' : score >= 50 ? 'bg-amber-400' : 'bg-red-500'}`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
      </div>

      {/* Audits Listing */}
      <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1 no-scrollbar">
        {audits.map((audit) => (
          <div 
            key={audit.id} 
            className="p-3 rounded-lg border border-neutral-900/60 bg-neutral-950/20 hover:bg-neutral-950/40 transition-all font-mono text-[10px] space-y-2"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-white font-bold block uppercase tracking-wider">{audit.name}</span>
                <span className="text-[8px] text-neutral-500 block leading-normal">{audit.description}</span>
              </div>
              
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[8px] text-neutral-500">[{audit.scoreImpact}pts]</span>
                {audit.status === 'passed' && (
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>PASS</span>
                  </span>
                )}
                {audit.status === 'warning' && (
                  <span className="flex items-center gap-1 text-amber-400 font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>WARN</span>
                  </span>
                )}
                {audit.status === 'failed' && (
                  <span className="flex items-center gap-1 text-red-500 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 rotate-180" />
                    <span>FAIL</span>
                  </span>
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-950/80 flex flex-col gap-1 text-[8px] text-neutral-400">
              <div>
                <span className="text-neutral-500">CURRENT:</span> <span className="text-neutral-300 italic">{audit.currentValue}</span>
              </div>
              {audit.recommendation && (
                <div className="flex items-start gap-1 text-amber-500/90 font-sans">
                  <span className="font-mono text-[8px] text-amber-500 shrink-0">RECOM:</span>
                  <span>{audit.recommendation}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer advice */}
      <div className="border-t border-dashed border-neutral-900/80 pt-3 text-[8px] font-mono text-neutral-500 leading-normal uppercase">
        <Sparkles className="w-3 h-3 text-[var(--color-accent)] inline mr-1" />
        Sovereign index matrices calibrated dynamically. Ensures maximum crawling capability across search spiders.
      </div>
    </div>
  );
};
