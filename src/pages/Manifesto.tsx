import React, { useState, useEffect } from 'react';
import { CymaticLayout } from '../components/CymaticLayout';
import { calculateReadingTime } from '../lib/readingTime';

interface CTAState {
  sponsor: boolean;
  partner: boolean;
}

export const Manifesto = () => {
  const [activeCTA, setActiveCTA] = useState<CTAState>({ sponsor: false, partner: false });
  const [readingTime, setReadingTime] = useState(0);
  
  useEffect(() => {
    // Calculate reading time after initial render to ensure DOM is ready
    const timer = setTimeout(() => {
      const text = document.querySelector('article')?.innerText || "";
      setReadingTime(calculateReadingTime(text));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleCTA = (type: keyof CTAState) => {
    setActiveCTA(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'The Architecture of Resilience',
          text: 'Read the monumental manifesto of Isabirye Latif, the Solo Architect of Cymatic Evolution.',
          url: window.location.href,
        });
      } catch {
        console.log('Share operation aborted');
      }
    } else {
      alert('Copy the URL from your browser to share the manifesto.');
    }
  };

  const executeLink = (platform: 'whatsapp' | 'email', context: 'sponsor' | 'partner') => {
    const targetPhone = "256768715065";
    const personalEmail = "Latifisabirye123@gmail.com";
    const evolutionEmail = "cymatichubevolution@gmail.com";
    
    const targetEmail = context === 'sponsor' ? evolutionEmail : personalEmail;
    
    const messages = {
      sponsor: {
        wa: "Hello Isabirye Latif, I want to sponsor the Cymatic Evolution after reading your monumental manifesto.",
        mail: "Subject: Sponsoring Cymatic Genesis\n\nHello Isabirye Latif,\n\nI have read your complete manifesto. I am deeply moved by the story and the technical vision of Cymatic Study and Cymatic Resonance. I want to sponsor this growth."
      },
      partner: {
        wa: "Hello Isabirye Latif, I am interested in a strategic partnership with Cymatic Evolution.",
        mail: "Subject: Strategic Partnership Opportunity\n\nHello Isabirye Latif,\n\nI am contacting you directly regarding a partnership with Cymatic Evolution. Let us discuss the execution of this infrastructure."
      }
    };

    if (platform === 'whatsapp') {
      const text = encodeURIComponent(messages[context].wa);
      window.open(`https://wa.me/${targetPhone}?text=${text}`, '_blank');
    } else {
      const subject = encodeURIComponent(context === 'sponsor' ? "Sponsoring Cymatic Genesis" : "Strategic Partnership Opportunity");
      const body = encodeURIComponent(messages[context].mail);
      window.open(`mailto:${targetEmail}?subject=${subject}&body=${body}`, '_blank');
    }
  };

  return (
    <CymaticLayout>
      <article className="w-full max-w-[90rem] mx-auto space-y-12 sm:space-y-32 py-10 sm:py-24 px-4 sm:px-12 md:px-20 font-sans text-[var(--color-text-primary)] antialiased selection:bg-[var(--color-accent)] selection:text-zinc-950 overflow-hidden">
        
        <header className="text-center space-y-6 sm:space-y-16 border-b border-zinc-800/80 pb-12 sm:pb-24 w-full">
          <div className="flex items-center justify-center gap-4">
            <p className="text-[10px] sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[var(--color-accent)] font-mono font-black break-words">
              The Sovereign Blueprint
            </p>
            <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-[8px] sm:text-[10px] font-mono text-zinc-400">
              {readingTime} MIN READ
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-7xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[1] break-words">
            The Architecture <br />
            <span className="text-[var(--color-accent)]">of Resilience</span>
          </h1>
          
          <div className="h-[3px] sm:h-[4px] w-16 sm:w-32 bg-[var(--color-accent)] mx-auto my-4 sm:my-8 shadow-[0_0_15px_var(--color-accent)]"></div>
          
          <p className="text-xl sm:text-4xl md:text-5xl font-light tracking-wide text-[var(--color-text-secondary)]">
            Isabirye Latif — <span className="font-mono text-[var(--color-accent)] font-bold text-lg sm:text-4xl break-words">Solo Architect</span>
          </p>

          <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 pt-6 sm:pt-8">
            <p className="text-lg sm:text-3xl md:text-4xl italic font-serif text-white font-medium leading-relaxed tracking-wide text-center break-words">
              "My degree was never meant to define me. My output defines my existence. I am Isabirye Latif, the Solo Architect."
            </p>
          </div>

          <div className="w-full max-w-2xl mx-auto pt-8 sm:pt-16 px-2">
            <div className="relative rounded-xl sm:rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl bg-zinc-900/60 ring-1 ring-white/10">
              <img 
                src="/media/photo3.png" 
                alt="Isabirye Latif - Architectural State" 
                className="w-full h-auto object-cover block filter contrast-115"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('/media/')) {
                    target.src = 'photo3.png';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90"></div>
            </div>
          </div>
        </header>

        <section className="space-y-16 sm:space-y-32 text-base sm:text-2xl md:text-3xl leading-relaxed sm:leading-[1.8] font-normal text-[var(--color-text-secondary)] w-full max-w-6xl mx-auto">
          
          <div className="space-y-6 sm:space-y-12 w-full" id="forge">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase text-[var(--color-accent)] tracking-wider font-mono break-words">
              // THE_FORGE: FROM BUTTON PHONES TO GLOBAL INFRASTRUCTURE
            </h2>
            <p className="tracking-wide text-left break-words">
              I do not come from the halls of privilege. I do not speak the soft language of inherited security. My architecture was born on the harsh factory floor—where the scent of raw petroleum is absolute, where acid burns flesh, and brutal physical labor is bartered just for a daily meal. I was ghetto-raised. But within that reality, my childhood fantasies were loud. I used to look at a basic button phone and dream: <em>I wish I could develop a calculator app for this.</em> 
            </p>
            <p className="tracking-wide text-left break-words">
              When I saw the first chat application, my mind ignited. I wanted to build one, but I didn't know how. I didn't know what a domain was. I was completely uneducated in the ways of the digital world—just a fool staring at screens, aiming for globality. But underneath the smoke of the ghetto, underneath the heavy ganja clouds that outsiders judge, a terrifying fire was burning. We are coming out of that smoke to shine, and that is an unalterable truth.
            </p>
            
            <div className="bg-zinc-900/90 p-6 sm:p-16 border-l-4 sm:border-l-8 border-[var(--color-accent)] rounded-r-xl sm:rounded-r-3xl italic shadow-2xl space-y-6 relative overflow-hidden w-full">
              <p className="relative z-10 text-lg sm:text-3xl md:text-4xl font-medium text-white leading-relaxed tracking-wide break-words">
                "I watched my mother—a fiercely dedicated single mom—wash heavy clothes by hand until her fingers literally split open to pay my school fees. The hidden tears broke me everyday🥺. I looked at her bleeding hands, and I codified an immortal system resolution: I will terminate this cycle with unmitigated technical dominance. Not for ego. But for her. She is the absolute undoubted reason for my smile and strength. I break and stand again and again but her roots raise me back ground again and again.. MASH'ALLAH"
              </p>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-12 bg-zinc-900/40 p-5 sm:p-12 rounded-2xl sm:rounded-3xl border border-zinc-800/50 w-full" id="isolation">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase text-[var(--color-accent)] tracking-wider font-mono break-words">
              // THE_ISOLATION: S.3 DROPOUT & THE MADMAN'S FORGE
            </h2>
            <p className="tracking-wide text-left break-words">
              I am a self-taught, self-hosted personnel who dropped at Senior 3 (S.3). I didn't have an institution to join for web development or design lessons. I had no notes to revise. I had absolutely no one to call for help. When traditional doors slammed shut, I retreated onto the cold concrete floor of a dark room with a single Samsung smartphone. 
            </p>
            <p className="tracking-wide text-left break-words">
              When the COVID-19 pandemic hit, I tried to search for  institutions i could join to start polishing and learning the  implementation of my dreams in line, but the costs were astronomical. I had nothing. I couldn't afford AI tools to write my code or speed up my workflow. I did not dare think of giving up " that's not me", I had to hard-think. I had to use my own raw core, my own brain. I had to sit in the dark and ask myself: <em>How do I build a study app? How do I engineer a real-time registry synchronization? How do I build my own website from scratch?</em> I did the manual work. Brick by excruciating brick. Grabbed my Samsung and switched my dedication to self study, patience and discipline. To self teach, find route ank knowledge besides the limitations in resources. Ghetto roots don't just give up.
            </p>
            <p className="font-bold text-white bg-zinc-950 p-5 sm:p-12 rounded-xl sm:rounded-2xl border border-zinc-800 sm:border-2 shadow-2xl tracking-wide text-base sm:text-3xl leading-relaxed mt-6 sm:mt-8 break-words">
              "The obsession consumed me. I reached a point where some friends thought I was running mad. They looked at my relentless focus and left me. I was abandoned on socials. So, I gave up on them entirely. I shut out the noise to focus exclusively on the dream entity."
            </p>
          </div>

          <div className="space-y-6 sm:space-y-12 w-full" id="proclamation">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase text-[var(--color-accent)] tracking-wider font-mono break-words">
              // THE_PROCLAMATION: GRADES DO NOT BUILD MONUMENTS
            </h2>
            <p className="tracking-wide text-left break-words">
              I want to completely eradicate the lie that being ghetto-raised means you are destined for nothing. I am proving that being termed an 'illiterate' or lacking formal academic papers is not a compromise—it is actually the ultimate unchained advantage. 
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16 pt-4 sm:pt-8 w-full">
            <div className="bg-zinc-900/80 border border-zinc-800 sm:border-2 p-6 sm:p-14 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-full">
              <div className="text-[10px] sm:text-sm uppercase tracking-widest font-mono text-[var(--color-accent)] font-black break-words">// SYSTEM_ALPHA: THE_CRUCIBLE</div>
              <h3 className="text-2xl sm:text-5xl font-black uppercase tracking-tight text-white break-words">Cymatic Study</h3>
              <p className="text-[var(--color-text-secondary)] text-base sm:text-2xl font-normal leading-relaxed break-words">
                <strong>Cymatic Study</strong> is a monumental study application for institutions, teachers, and students to synchronize in absolute work harmony. 
              </p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 sm:border-2 p-6 sm:p-14 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-full">
              <div className="text-[10px] sm:text-sm uppercase tracking-widest font-mono text-[var(--color-accent)] font-black break-words">// SYSTEM_OMEGA: THE_LEDGER</div>
              <h3 className="text-2xl sm:text-5xl font-black uppercase tracking-tight text-white break-words">Cymatic Resonance</h3>
              <p className="text-[var(--color-text-secondary)] text-base sm:text-2xl font-normal leading-relaxed break-words">
                <strong>Cymatic Resonance</strong> operates as an unalterable institutional register and live attendance monitor. 
              </p>
            </div>
          </div>

          <div className="pt-10 sm:pt-24 text-center w-full max-w-5xl mx-auto space-y-8 sm:space-y-12" id="pledge">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-widest font-mono border-b border-zinc-800 pb-4 sm:pb-8 break-words">
              // THE_GLOBAL_PLEDGE
            </h2>
            <p className="font-medium text-lg sm:text-3xl md:text-4xl tracking-wide text-[var(--color-accent)] italic leading-relaxed break-words">
              "If I am handed a project, I am sure to bleed for it. If I am entrusted with sponsorship, I will honor that trust and return absolute positivity."
            </p>
            
            <div className="py-8">
              <button 
                onClick={handleShare}
                className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold uppercase tracking-widest rounded-full transition-all border border-zinc-700 active:scale-95 shadow-lg"
              >
                <span>🔗 SHARE_THIS_MANIFESTO</span>
              </button>
            </div>
            
            <p className="text-base sm:text-2xl text-[var(--color-text-secondary)] leading-relaxed text-left sm:text-center break-words">
              If this manifesto found you at your breaking point, I pray it retrieves your lost heart and mind. Prioritize wisely and let the will of ALLAH be the ground you rest on. It takes time. Invest patience and keep pushing.
            </p>
            <p className="text-lg sm:text-3xl font-black text-[var(--color-accent)] tracking-widest">
              PRAYER . DISCIPLINE . CONSISTENCY . SELF-ESTEEM. 
            </p>

            <div className="pt-12 sm:pt-24 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <a href="/study" className="group p-8 border border-zinc-800 rounded-3xl bg-zinc-950/50 hover:border-[var(--color-accent)] transition-all">
                <span className="text-[10px] font-mono text-[var(--color-accent)] block mb-4">// NEXT_PHASE_01</span>
                <h4 className="text-2xl font-bold mb-2">Explore the Study Nexus ↗</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">The educational synchronization engine built on these principles.</p>
              </a>
              <a href="/resonance" className="group p-8 border border-zinc-800 rounded-3xl bg-zinc-950/50 hover:border-[var(--color-accent)] transition-all">
                <span className="text-[10px] font-mono text-[var(--color-accent)] block mb-4">// NEXT_PHASE_02</span>
                <h4 className="text-2xl font-bold mb-2">Monitor the Resonance ↗</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Live attendance and institutional pulse monitoring in real-time.</p>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900/80 border border-zinc-800 sm:border-2 rounded-2xl sm:rounded-3xl p-6 sm:p-20 text-center space-y-8 sm:space-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] w-full max-w-5xl mx-auto mt-16 sm:mt-24">
          <h2 className="text-xl sm:text-4xl font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] font-mono text-white break-words">// THE_UPLINK_ACTION</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-10 pt-4 sm:pt-8 w-full">
            <div className="flex flex-col items-center space-y-3 sm:space-y-4 w-full md:max-w-[400px]">
              <button onClick={() => toggleCTA('sponsor')} className="w-full px-6 py-4 sm:px-8 sm:py-6 bg-[var(--color-accent)] text-zinc-950 font-black uppercase rounded-xl sm:rounded-2xl transition-all tracking-widest text-xs sm:text-lg shadow-xl active:scale-95">
                {activeCTA.sponsor ? "✕ Close Channels" : "Sponsor Growth"}
              </button>
              {activeCTA.sponsor && (
                <div className="flex items-center justify-center gap-2 sm:gap-4 w-full p-2 sm:p-3 bg-zinc-950 border border-zinc-800 sm:border-2 rounded-xl sm:rounded-2xl animate-fade-in">
                  <button onClick={() => executeLink('whatsapp', 'sponsor')} className="flex-1 py-3 sm:py-4 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-lg sm:rounded-xl font-mono text-[10px] sm:text-sm uppercase font-black hover:bg-emerald-600/30 transition-colors">💬 WhatsApp</button>
                  <button onClick={() => executeLink('email', 'sponsor')} className="flex-1 py-3 sm:py-4 bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-lg sm:rounded-xl font-mono text-[10px] sm:text-sm uppercase font-black hover:bg-zinc-800 transition-colors">✉️ Email</button>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center space-y-3 sm:space-y-4 w-full md:max-w-[400px]">
              <button onClick={() => toggleCTA('partner')} className="w-full px-6 py-4 sm:px-8 sm:py-6 border border-[var(--color-accent)] sm:border-2 text-[var(--color-accent)] bg-zinc-950/40 font-black uppercase rounded-xl sm:rounded-2xl transition-all tracking-widest text-xs sm:text-lg shadow-xl active:scale-95 hover:bg-[var(--color-accent)] hover:text-zinc-950">
                {activeCTA.partner ? "✕ Close Channels" : "Partner With Us"}
              </button>
              {activeCTA.partner && (
                <div className="flex items-center justify-center gap-2 sm:gap-4 w-full p-2 sm:p-3 bg-zinc-950 border border-zinc-800 sm:border-2 rounded-xl sm:rounded-2xl animate-fade-in">
                  <button onClick={() => executeLink('whatsapp', 'partner')} className="flex-1 py-3 sm:py-4 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-lg sm:rounded-xl font-mono text-[10px] sm:text-sm uppercase font-black hover:bg-emerald-600/30 transition-colors">💬 WhatsApp</button>
                  <button onClick={() => executeLink('email', 'partner')} className="flex-1 py-3 sm:py-4 bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-lg sm:rounded-xl font-mono text-[10px] sm:text-sm uppercase font-black hover:bg-zinc-800 transition-colors">✉️ Email</button>
                </div>
              )}
            </div>
          </div>
        </section>
      </article>
    </CymaticLayout>
  );
};

export default Manifesto;
