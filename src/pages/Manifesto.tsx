import React, { useState } from 'react';
import { CymaticLayout } from '../components/CymaticLayout';

interface CTAState {
  sponsor: boolean;
  partner: boolean;
}

export const Manifesto = () => {
  const [activeCTA, setActiveCTA] = useState<CTAState>({ sponsor: false, partner: false });

  const toggleCTA = (type: keyof CTAState) => {
    setActiveCTA(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const executeLink = (platform: 'whatsapp' | 'email', context: 'sponsor' | 'partner') => {
    const targetPhone = "256768715065";
    const personalEmail = "Latifisabirye123@gmail.com";
    const evolutionEmail = "cymatichubevolution@gmail.com";
    
    const targetEmail = context === 'sponsor' ? evolutionEmail : personalEmail;
    
    const messages = {
      sponsor: {
        wa: "Hello Isabirye Latif, I want to sponsor the Cymatic Evolution after reading your monumental manifesto.",
        mail: "Subject: Sponsoring Cymatic Genesis\n\nHello Isabirye Latif,\n\nI have read your complete manifesto. I am deeply moved by the story and the technical vision of Cymatic Hub and Cymatic Resonance. I want to sponsor this growth."
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
      {/* 
        UPSCALED VISIBILITY BUT CAPPED FOR MOBILE BOUNDARIES
        overflow-hidden ensures no rogue wide element stretches the body
      */}
      <article className="w-full max-w-[90rem] mx-auto space-y-12 sm:space-y-32 py-10 sm:py-24 px-4 sm:px-12 md:px-20 font-sans text-zinc-100 antialiased selection:bg-[var(--color-accent)] selection:text-zinc-950 overflow-hidden">
        
        {/* HERO HEADER CONTAINER */}
        <header className="text-center space-y-6 sm:space-y-16 border-b border-zinc-800/80 pb-12 sm:pb-24 w-full">
          <p className="text-[10px] sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[var(--color-accent)] font-mono font-black break-words">
            The Sovereign Blueprint
          </p>
          
          <h1 className="text-4xl sm:text-7xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[1] break-words">
            The Architecture <br />
            <span className="text-[var(--color-accent)]">of Resilience</span>
          </h1>
          
          <div className="h-[3px] sm:h-[4px] w-16 sm:w-32 bg-[var(--color-accent)] mx-auto my-4 sm:my-8 shadow-[0_0_15px_var(--color-accent)]"></div>
          
          <p className="text-xl sm:text-4xl md:text-5xl font-light tracking-wide text-zinc-300">
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

        {/* NARRATIVE SECTIONS */}
        <section className="space-y-16 sm:space-y-32 text-base sm:text-2xl md:text-3xl leading-relaxed sm:leading-[1.8] font-normal text-zinc-300 w-full max-w-6xl mx-auto">
          
          {/* THE FORGE & FANTASY */}
          <div className="space-y-6 sm:space-y-12 w-full">
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

          {/* THE S.3 ISOLATION & MADNESS */}
          <div className="space-y-6 sm:space-y-12 bg-zinc-900/40 p-5 sm:p-12 rounded-2xl sm:rounded-3xl border border-zinc-800/50 w-full">
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

          {/* ACADEMIC PHILOSOPHY */}
          <div className="space-y-6 sm:space-y-12 w-full">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-black uppercase text-[var(--color-accent)] tracking-wider font-mono break-words">
              // THE_PROCLAMATION: GRADES DO NOT BUILD MONUMENTS
            </h2>
            <p className="tracking-wide text-left break-words">
              I want to completely eradicate the lie that being ghetto-raised means you are destined for nothing. I am proving that being termed an 'illiterate' or lacking formal academic papers is not a compromise—it is actually the ultimate unchained advantage. 
            </p>
            <p className="tracking-wide text-left break-words">
              Sustenance comes from the mind. Great architecture and digital monuments are not honored by institutional grades. The world does not rotate on the chemistry, physics, and English stated on a piece of paper. Academic backgrounds may shine, but true creation happens in the forge. This is the clear forge and merit in my mind. Between that COVID session and today, I poured years of perseverance into actualizing my three core projects: My architectural portfolio, Cymatic Hub, and Cymatic Resonance.
            </p>
          </div>

          {/* THE TRINITY OF ARCHITECTURE */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16 pt-4 sm:pt-8 w-full">
            The childhood fantasy was to build a calculator app, own it, use it to calculate my own savings (do these fantasies make sense). Reality  "dreams don't  work unless you do"
            <div className="bg-zinc-900/80 border border-zinc-800 sm:border-2 p-6 sm:p-14 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-full">
              <div className="text-[10px] sm:text-sm uppercase tracking-widest font-mono text-[var(--color-accent)] font-black break-words">// SYSTEM_ALPHA: THE_CRUCIBLE</div>
              <h3 className="text-2xl sm:text-5xl font-black uppercase tracking-tight text-white break-words">
                Cymatic Hub
              </h3>
              <p className="text-zinc-300 text-base sm:text-2xl font-normal leading-relaxed break-words">
                <strong>Cymatic Hub</strong> is a monumental study application for institutions, teachers, and students to synchronize in absolute work harmony. It enforces Project-Based Learning (PBL) and integrated project trackers. 
              </p>
              <p className="text-zinc-300 text-base sm:text-2xl font-normal leading-relaxed break-words">
                It houses dedicated student charts heavily monitored by teachers and AI tutors to ensure they are strictly committed to educational charts only. The ecosystem provides robust study guides, offline study guides, and dynamic quizzes, permanently replacing educational chaos with structural law.
              </p>
            </div>

            <div className="bg-zinc-900/80 border border-zinc-800 sm:border-2 p-6 sm:p-14 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-full">
              <div className="text-[10px] sm:text-sm uppercase tracking-widest font-mono text-[var(--color-accent)] font-black break-words">// SYSTEM_OMEGA: THE_LEDGER</div>
              <h3 className="text-2xl sm:text-5xl font-black uppercase tracking-tight text-white break-words">
                Cymatic Resonance
              </h3>
              <p className="text-zinc-300 text-base sm:text-2xl font-normal leading-relaxed break-words">
                <strong>Cymatic Resonance</strong> operates as an unalterable institutional register and live attendance monitor. It is the definitive answer to operational negligence.
              </p>
              <p className="text-zinc-300 text-base sm:text-2xl font-normal leading-relaxed break-words">
                Beyond its immutable ledger, it is a high-stakes command center. It can host live chats, dedicated calls, and secure live meetings for instant executions. Whether for corporate setups or government institutions, it forces transparent, real-time accountability across all global sanctuaries.
              </p>
            </div>

          </div>

          {/* THE GLOBAL PLEDGE */}
          <div className="pt-10 sm:pt-24 text-center w-full max-w-5xl mx-auto space-y-8 sm:space-y-12">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-widest font-mono border-b border-zinc-800 pb-4 sm:pb-8 break-words">
              // THE_GLOBAL_PLEDGE
            </h2>
            <p className="font-medium text-lg sm:text-3xl md:text-4xl tracking-wide text-[var(--color-accent)] italic leading-relaxed break-words">
              "If I am handed a project, I am sure to bleed for it. If I am entrusted with sponsorship, I will honor that trust and return absolute positivity."
            </p>
            <p className="text-base sm:text-2xl text-zinc-300 leading-relaxed text-left sm:text-center break-words">
              I am aiming for globality. I want to continue learning. If there is an open opportunity globally, I am ready. I have a profound love for adventure; I just lack the capital to execute it. I want to see Paris. I want to experience France. I want to be in London for a day, or study there for a week. I want to walk the streets of New Zealand, Zurich, Munich, and Norwich. I want to witness the infrastructure in China, Hong Kong, Taiwan, and Thailand. Exposure sharpens minds and that positive feeling is one of what i grind for. 
            </p>
            <p className="text-base sm:text-2xl text-zinc-400 leading-relaxed text-left sm:text-center break-words">
              Let us make this dream an untold reality. If someone reads this manifesto and it moves them to tears, if it makes them cry out for treatment, let them cry. I will solicit the means to help them. This is coded survival.
            </p>
          </div>

        </section>

        {/* CTA ACTION SYSTEM */}
        <section className="bg-zinc-900/80 border border-zinc-800 sm:border-2 rounded-2xl sm:rounded-3xl p-6 sm:p-20 text-center space-y-8 sm:space-y-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] w-full max-w-5xl mx-auto mt-16 sm:mt-24">
          <h2 className="text-xl sm:text-4xl font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] font-mono text-white break-words">// THE_UPLINK_ACTION</h2>
          <p className="text-sm sm:text-2xl text-zinc-300 w-full max-w-4xl mx-auto leading-relaxed break-words">
            Systems are the definitive bridge between raw potential and absolute achievement. Tap either mandate below to unfold your secure communication tunnels.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-10 pt-4 sm:pt-8 w-full">
            
            <div className="flex flex-col items-center space-y-3 sm:space-y-4 w-full md:max-w-[400px]">
              <button
                onClick={() => toggleCTA('sponsor')}
                className="w-full px-6 py-4 sm:px-8 sm:py-6 bg-[var(--color-accent)] text-zinc-950 font-black uppercase rounded-xl sm:rounded-2xl transition-all tracking-widest text-xs sm:text-lg shadow-xl active:scale-95"
              >
                {activeCTA.sponsor ? "✕ Close Channels" : "Sponsor Growth"}
              </button>
              {activeCTA.sponsor && (
                <div className="flex items-center justify-center gap-2 sm:gap-4 w-full p-2 sm:p-3 bg-zinc-950 border border-zinc-800 sm:border-2 rounded-xl sm:rounded-2xl animate-fade-in">
                  <button 
                    onClick={() => executeLink('whatsapp', 'sponsor')}
                    className="flex-1 py-3 sm:py-4 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-lg sm:rounded-xl font-mono text-[10px] sm:text-sm uppercase font-black hover:bg-emerald-600/30 transition-colors"
                  >
                    💬 WhatsApp
                  </button>
                  <button 
                    onClick={() => executeLink('email', 'sponsor')}
                    className="flex-1 py-3 sm:py-4 bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-lg sm:rounded-xl font-mono text-[10px] sm:text-sm uppercase font-black hover:bg-zinc-800 transition-colors"
                  >
                    ✉️ Email
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center space-y-3 sm:space-y-4 w-full md:max-w-[400px]">
              <button
                onClick={() => toggleCTA('partner')}
                className="w-full px-6 py-4 sm:px-8 sm:py-6 border border-[var(--color-accent)] sm:border-2 text-[var(--color-accent)] bg-zinc-950/40 font-black uppercase rounded-xl sm:rounded-2xl transition-all tracking-widest text-xs sm:text-lg shadow-xl active:scale-95 hover:bg-[var(--color-accent)] hover:text-zinc-950"
              >
                {activeCTA.partner ? "✕ Close Channels" : "Partner With Us"}
              </button>
              {activeCTA.partner && (
                <div className="flex items-center justify-center gap-2 sm:gap-4 w-full p-2 sm:p-3 bg-zinc-950 border border-zinc-800 sm:border-2 rounded-xl sm:rounded-2xl animate-fade-in">
                  <button 
                    onClick={() => executeLink('whatsapp', 'partner')}
                    className="flex-1 py-3 sm:py-4 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-lg sm:rounded-xl font-mono text-[10px] sm:text-sm uppercase font-black hover:bg-emerald-600/30 transition-colors"
                  >
                    💬 WhatsApp
                  </button>
                  <button 
                    onClick={() => executeLink('email', 'partner')}
                    className="flex-1 py-3 sm:py-4 bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-lg sm:rounded-xl font-mono text-[10px] sm:text-sm uppercase font-black hover:bg-zinc-800 transition-colors"
                  >
                    ✉️ Email
                  </button>
                </div>
              )}
            </div>

          </div>
          
          <div className="pt-8 sm:pt-12 border-t border-zinc-800/80 sm:border-t-2 flex flex-col md:flex-row gap-4 sm:gap-6 text-[10px] sm:text-base font-mono tracking-wide w-full">
            {/* 
              CRITICAL FIX: break-all completely prevents the long email strings from blowing past 
              your screen width and causing the horizontal layout shift. 
            */}
            <div className="flex-1 p-4 sm:p-5 bg-zinc-950/80 rounded-lg sm:rounded-xl border border-zinc-800 text-left shadow-inner break-all">
              <span className="text-zinc-500 font-bold block sm:inline">PARTNERSHIP:</span> <span className="text-[var(--color-accent)] font-bold sm:ml-2">Latifisabirye123@gmail.com</span>
            </div>
            <div className="flex-1 p-4 sm:p-5 bg-zinc-950/80 rounded-lg sm:rounded-xl border border-zinc-800 text-left shadow-inner break-all">
              <span className="text-zinc-500 font-bold block sm:inline">ECOSYSTEM:</span> <span className="text-[var(--color-accent)] font-bold sm:ml-2">cymatichubevolution@gmail.com</span>
            </div>
          </div>
        </section>

      </article>
      
      {/* 
        MANDATORY REMINDER PROTOCOL: 
        You still need to go into your assets folder and create the literal file paths for image four, image five, and image six. Your architecture is incomplete if your media routing fails. 
      */}
    </CymaticLayout>
  );
};

export default Manifesto;
