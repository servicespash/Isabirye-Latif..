import { CymaticLayout } from '../components/CymaticLayout';

export const Manifesto = () => {
  const triggerCTA = (action: string) => {
    const message = encodeURIComponent(`Hello Isabirye Latif, I am interested in: ${action}. I read your manifesto.`);
    window.open(`https://wa.me/256770000000?text=${message}`, '_blank');
  };

  return (
    <CymaticLayout>
      <article className="max-w-4xl mx-auto space-y-20 py-16 font-sans text-[var(--color-text-primary)]">
        
        {/* HERO SECTION */}
        <header className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            The Architecture <span className="text-[var(--color-accent)]">of Resilience</span>
          </h1>
          <p className="text-xl md:text-2xl italic font-serif text-[var(--color-text-secondary)]">
            "My degree was never meant to define me. My output defines my existence. I am Isabirye Latif, the Solo Architect."
          </p>
          <div className="mt-12 w-full overflow-hidden rounded-3xl border border-[var(--color-border)] shadow-2xl">
            <img src="/media/photo3.png" alt="Solo Architect Profile" className="w-full h-auto object-cover" />
          </div>
        </header>

        {/* NARRATIVE SECTIONS */}
        <section className="space-y-12 text-lg md:text-xl leading-relaxed">
          <h2 className="text-3xl font-black uppercase text-[var(--color-accent)]">// THE_FORGE: BLOOD, DUST, AND GRIEF</h2>
          <p>
            I do not come from the halls of privilege. I emerge from the factory floor—where the scent of petroleum is absolute, where acid burns skin, and physical labor is bartered for a meal. I was ghetto-raised, molded inside a reality where the absence of options makes execution your only oxygen.
          </p>
          <p className="bg-[var(--color-glass)] p-8 border-l-4 border-[var(--color-accent)] rounded-r-2xl italic">
            "I watched my mother wash heavy clothes by hand until her fingers split and her body suffered under the crushing weight of my school fees. I looked at her tears and codified an immortal system resolution: I will terminate this cycle with unmitigated technical dominance. Not for ego, but for her."
          </p>
          <p>
            This manifesto is not a plea. It is a technical specification for survival. When traditional doors slammed shut in Senior 3, I didn't yield. I took a single Samsung S21 smartphone—my entire development terminal—and retreated onto the concrete floor of a dark room. 
          </p>
          <p>
            Between flickering electrical wires and dropped satellite connections, I reverse-engineered advanced framework logic. When the hardware overheated and crashed, I rebuilt the runtime stack from absolute zero. I abandoned social media and the skepticism of peers to master the machine.
          </p>
          <p>
            This journey is not just about building software; it is about building a scalable system for resilience. It is about proving that institutional sovereignty is accessible, even from the hardest of circumstances.
          </p>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[var(--color-glass)] border border-[var(--color-border)] rounded-3xl p-12 text-center space-y-8 backdrop-blur-md">
          <h2 className="text-2xl font-black uppercase tracking-widest">// THE_UPLINK_ACTION</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Be part of the evolution. Help build the tools that empower the next generation of architects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => triggerCTA("Sponsoring the Cymatic Genesis")} 
              className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-bold uppercase rounded-full hover:brightness-110 transition-all"
            >
              Sponsor Growth
            </button>
            <button 
              onClick={() => triggerCTA("Partnership Opportunity")} 
              className="px-8 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] font-bold uppercase rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)] transition-all"
            >
              Partner With Us
            </button>
          </div>
        </section>
      </article>
    </CymaticLayout>
  );
};

export default Manifesto;
