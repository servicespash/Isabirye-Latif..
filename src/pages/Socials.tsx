import { CymaticLayout } from '../components/CymaticLayout';

export const Socials = () => {
  return (
    <CymaticLayout>
      <div className="space-y-12">
        <div className="border-b border-[var(--color-border)] pb-8">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] block mb-2">// COORD_SOCIAL_ACTIVE</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[var(--color-text-primary)]">Uplink Gateway</h1>
          <p className="mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            Direct operational command pipelines to the architect's secure communication links. Use these tunnels for verified coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs max-w-4xl">
          <a 
            href="https://wa.me/256768715065" 
            target="_blank" 
            rel="noreferrer" 
            className="p-6 border border-[var(--color-border)] rounded-2xl bg-black/5 dark:bg-white/5 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-300 flex flex-col justify-between h-36"
          >
            <span className="text-[9px] text-[var(--color-text-secondary)]">// WHATSAPP_TUNNEL</span>
            <span className="text-sm font-bold text-[var(--color-text-primary)] mt-auto">// CONNECT_SECURE_WA ↗</span>
          </a>

          <a 
            href="https://youtube.com/@laty_adams" 
            target="_blank" 
            rel="noreferrer" 
            className="p-6 border border-[var(--color-border)] rounded-2xl bg-black/5 dark:bg-white/5 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-300 flex flex-col justify-between h-36"
          >
            <span className="text-[9px] text-[var(--color-text-secondary)]">// YOUTUBE_STREAM</span>
            <span className="text-sm font-bold text-[var(--color-text-primary)] mt-auto">// VIEW_BROADCASTS ↗</span>
          </a>

          <a 
            href="https://tiktok.com/@laty_adams" 
            target="_blank" 
            rel="noreferrer" 
            className="p-6 border border-[var(--color-border)] rounded-2xl bg-black/5 dark:bg-white/5 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-300 flex flex-col justify-between h-36"
          >
            <span className="text-[9px] text-[var(--color-text-secondary)]">// TIKTOK_FEED</span>
            <span className="text-sm font-bold text-[var(--color-text-primary)] mt-auto">// TRACK_FEED ↗</span>
          </a>
        </div>
      </div>
    </CymaticLayout>
  );
};

export default Socials;
