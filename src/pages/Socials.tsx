import { CymaticLayout } from '../components/CymaticLayout';

export const Socials = () => {
  return (
    <CymaticLayout>
      <main className="w-full py-12 px-6">
        <div className="max-w-4xl mx-auto border border-[var(--color-border)] rounded-3xl bg-black/[0.01] dark:bg-white/[0.01] backdrop-blur-md p-12">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[var(--color-accent)] block mb-2">// COORD_SOCIAL_ACTIVE</span>
          <h1 className="text-4xl font-mono font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-4">Uplink Gateway</h1>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
            Direct operational command pipelines to the architect's secure communication links.
          </p>
          <div className="flex flex-col gap-2 max-w-xs text-xs font-mono">
            <a href="https://wa.me/#" target="_blank" rel="noreferrer" className="p-3 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] transition-all">// SECURE_WHATSAPP</a>
            <a href="https://youtube.com/#" target="_blank" rel="noreferrer" className="p-3 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] transition-all">// PRODUCTION_YOUTUBE</a>
            <a href="https://tiktok.com/#" target="_blank" rel="noreferrer" className="p-3 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] transition-all">// STREAM_TIKTOK</a>
          </div>
        </div>
      </main>
    </CymaticLayout>
  );
};

export default Socials;
