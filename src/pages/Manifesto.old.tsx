import { motion, useScroll, useTransform } from 'motion/react';

export const Manifesto = () => {
  const { scrollYProgress } = useScroll();
  const signatureOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const signatureScale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

  return (
    <div className="max-w-2xl mx-auto py-20 font-sans">
      <article className="prose prose-invert prose-lg prose-cyan">
        <h1 className="text-5xl font-serif text-[var(--text-primary)] mb-10 tracking-tighter">The Origin of Resonance</h1>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Manifestation is not an act of creation, but one of alignment. 
          When we design systems, we are not merely building structures; we are 
          establishing frequencies.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
          Every line of code is an intention. Every pixel is a vibration. 
          The Cymatic architecture is born from the understanding that human 
          experience is shaped by the subtle resonance of our digital environments.
        </p>
      </article>

      <motion.div 
        style={{ opacity: signatureOpacity, scale: signatureScale }}
        className="mt-20 pt-10 border-t border-[var(--border-color)] text-center"
      >
        <h2 className="text-2xl font-serif text-[var(--text-primary)] mb-2 tracking-tighter">Isabirye Latif</h2>
        <p className="text-sm font-mono text-[var(--accent-gold)] uppercase tracking-[0.2em]">Architect of Innovation</p>
      </motion.div>
    </div>
  );
};
