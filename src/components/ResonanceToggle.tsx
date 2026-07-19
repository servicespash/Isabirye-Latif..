import React, { useState, useEffect, useRef } from 'react';
import { Radio, ChevronDown, CloudRain, TreePine, Waves, Volume2, VolumeX } from 'lucide-react';

interface CustomWindow extends Window {
  webkitAudioContext?: typeof AudioContext;
}

type NaturePreset = 'rain' | 'forest' | 'ocean';

const PRESETS = [
  { id: 'rain' as NaturePreset, name: 'Rain Canopy', icon: CloudRain, description: 'Deep brownian drops & wind canopy' },
  { id: 'forest' as NaturePreset, name: 'Forest Whispers', icon: TreePine, description: 'Pink wind rustles & procedural birdsong' },
  { id: 'ocean' as NaturePreset, name: 'Ocean Swell', icon: Waves, description: 'Sinusoidal rolling tidal swells' },
];

// ============================================================================
// PROCEDURAL SOUND SYNTHESIS ENGINE (DEFINED OUTSIDE COMPONENT FOR RENDER PURITY)
// ============================================================================

const playBirdSound = (ctx: AudioContext, destination: AudioNode) => {
  if (!ctx || ctx.state === 'closed') return;
  const now = ctx.currentTime;
  const chirpsCount = Math.floor(Math.random() * 3) + 1; // 1 to 3 chirps in a group
  
  let chirpDelay = 0;
  for (let j = 0; j < chirpsCount; j++) {
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    
    osc.type = 'sine';
    // Pitch sweep
    const baseFreq = 2200 + Math.random() * 1000;
    osc.frequency.setValueAtTime(baseFreq, now + chirpDelay);
    osc.frequency.exponentialRampToValueAtTime(baseFreq + 800 + Math.random() * 400, now + chirpDelay + 0.08);
    
    oscGain.gain.setValueAtTime(0.0001, now + chirpDelay);
    oscGain.gain.linearRampToValueAtTime(0.02, now + chirpDelay + 0.02);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + chirpDelay + 0.08);
    
    osc.connect(oscGain);
    oscGain.connect(destination);
    
    osc.start(now + chirpDelay);
    osc.stop(now + chirpDelay + 0.09);
    
    chirpDelay += 0.12 + Math.random() * 0.08;
  }
};

const scheduleBirds = (
  ctx: AudioContext, 
  destination: AudioNode, 
  onSetInterval: (id: number) => void
) => {
  const timerId = window.setTimeout(() => playBirdSound(ctx, destination), 1200);

  const intervalId = window.setInterval(() => {
    playBirdSound(ctx, destination);
  }, 6500);

  onSetInterval(intervalId);

  return () => {
    window.clearTimeout(timerId);
  };
};

const startRain = (
  ctx: AudioContext, 
  gainNode: GainNode, 
  onSaveRefs: (source: AudioBufferSourceNode, lfo: OscillatorNode, lfoGain: GainNode) => void
) => {
  // Generate 4 seconds of custom Brownian noise
  const bufferSize = ctx.sampleRate * 4;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  
  let lastOut = 0.0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    // Brownian formula
    data[i] = (lastOut + (0.02 * white)) / 1.02;
    lastOut = data[i];
    data[i] *= 3.5; // Compounding volume gain
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;

  // Filter
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(820, ctx.currentTime);

  // LFO to modulate filter
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.05; // 20 second cycle
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 180; // fluctuation range

  lfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);
  lfo.start();

  source.connect(filter);
  filter.connect(gainNode);
  source.start(0);

  onSaveRefs(source, lfo, lfoGain);
};

const startForest = (
  ctx: AudioContext, 
  gainNode: GainNode, 
  onSaveRefs: (source: AudioBufferSourceNode, lfo: OscillatorNode, lfoGain: GainNode) => void,
  onSetInterval: (id: number) => void
) => {
  // Generate 4 seconds of Pink noise for a rustling canopy breeze
  const bufferSize = ctx.sampleRate * 4;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    b6 = white * 0.115926;
    data[i] *= 0.11; // normalization
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;

  // Filter
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(1100, ctx.currentTime);

  // LFO to simulate gentle swaying forest gusts
  const lfo = ctx.createOscillator();
  lfo.frequency.value = 0.08;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 220;

  lfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);
  lfo.start();

  source.connect(filter);
  filter.connect(gainNode);
  source.start(0);

  onSaveRefs(source, lfo, lfoGain);

  // Schedule high-fidelity procedural forest birds
  scheduleBirds(ctx, gainNode, onSetInterval);
};

const startOcean = (
  ctx: AudioContext, 
  gainNode: GainNode, 
  onSaveRefs: (source: AudioBufferSourceNode, lfo: OscillatorNode, lfoGain: GainNode) => void
) => {
  // Generate 6 seconds of Pink noise for crashing shore wave spray
  const bufferSize = ctx.sampleRate * 6;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    b6 = white * 0.115926;
    data[i] *= 0.11;
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;

  // Low, rolling lowpass filter to emulate heavy ocean volume
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(450, ctx.currentTime);

  // LFO to modulate wave swell amplitude
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.setValueAtTime(0.08, ctx.currentTime); // ~12 second wave period
  
  const lfoGain = ctx.createGain();
  lfoGain.gain.setValueAtTime(0.09, ctx.currentTime); // wave swell depth

  // Connect LFO to modulate gainNode's volume level directly
  lfo.connect(lfoGain);
  lfoGain.connect(gainNode.gain);
  lfo.start();

  source.connect(filter);
  filter.connect(gainNode);
  source.start(0);

  onSaveRefs(source, lfo, lfoGain);
};

// ============================================================================
// EXPORT COMPONENT
// ============================================================================

export const ResonanceToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPreset, setCurrentPreset] = useState<NaturePreset>('rain');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const lfoGainRef = useRef<GainNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const birdIntervalRef = useRef<number | null>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const saveReferences = (source: AudioBufferSourceNode, lfo: OscillatorNode, lfoGain: GainNode) => {
    sourceRef.current = source;
    lfoRef.current = lfo;
    lfoGainRef.current = lfoGain;
  };

  const stopActiveSynthesizers = () => {
    // Clear bird interval if active
    if (birdIntervalRef.current) {
      window.clearInterval(birdIntervalRef.current);
      birdIntervalRef.current = null;
    }

    // Stop current source
    if (sourceRef.current) {
      try { 
        sourceRef.current.stop(); 
      } catch (err) {
        console.debug("Source stop caught:", err);
      }
      try { 
        sourceRef.current.disconnect(); 
      } catch (err) {
        console.debug("Source disconnect caught:", err);
      }
      sourceRef.current = null;
    }

    // Stop LFOs
    if (lfoRef.current) {
      try { 
        lfoRef.current.stop(); 
      } catch (err) {
        console.debug("LFO stop caught:", err);
      }
      try { 
        lfoRef.current.disconnect(); 
      } catch (err) {
        console.debug("LFO disconnect caught:", err);
      }
      lfoRef.current = null;
    }

    if (lfoGainRef.current) {
      try { 
        lfoGainRef.current.disconnect(); 
      } catch (err) {
        console.debug("LFO gain disconnect caught:", err);
      }
      lfoGainRef.current = null;
    }

    // Close and reset AudioContext
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      try {
        audioCtxRef.current.close().catch((err) => {
          console.debug("Error closing audio context inside cleanup:", err);
        });
      } catch (err) {
        console.debug("Audio context close failed:", err);
      }
      audioCtxRef.current = null;
    }
  };

  const stopSoundWithFade = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      try {
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.65);
      } catch (err) {
        console.warn("Could not fade out gain node:", err);
      }
    }

    const fadeTimeout = window.setTimeout(() => {
      stopActiveSynthesizers();
    }, 700);

    return () => {
      window.clearTimeout(fadeTimeout);
    };
  };

  const startSound = (selectedPreset: NaturePreset) => {
    try {
      const CustomWindowInstance = window as unknown as CustomWindow;
      const AudioContextClass = window.AudioContext || CustomWindowInstance.webkitAudioContext;
      if (!AudioContextClass) {
        console.warn("Web Audio API not supported in this browser.");
        return;
      }

      // Ensure any existing synthesis nodes are stopped first
      stopActiveSynthesizers();

      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Base Gain Node for smooth fade-in
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0, ctx.currentTime);

      const targetVolume = selectedPreset === 'rain' ? 0.35 : selectedPreset === 'forest' ? 0.28 : 0.24;
      gainNode.gain.linearRampToValueAtTime(targetVolume, ctx.currentTime + 1.2);
      gainNode.connect(ctx.destination);
      gainNodeRef.current = gainNode;

      // Launch specific synthesis engine
      if (selectedPreset === 'rain') {
        startRain(ctx, gainNode, saveReferences);
      } else if (selectedPreset === 'forest') {
        startForest(ctx, gainNode, saveReferences, (id) => {
          birdIntervalRef.current = id;
        });
      } else if (selectedPreset === 'ocean') {
        startOcean(ctx, gainNode, saveReferences);
      }
    } catch (err) {
      console.error("Procedural sound synthesis failed:", err);
    }
  };

  const toggleResonance = React.useCallback(() => {
    if (isPlaying) {
      stopSoundWithFade();
      setIsPlaying(false);
    } else {
      startSound(currentPreset);
      setIsPlaying(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, currentPreset]);

  useEffect(() => {
    const handleGlobalToggle = () => {
      toggleResonance();
    };
    window.addEventListener('toggle-audio-synth', handleGlobalToggle);
    return () => {
      window.removeEventListener('toggle-audio-synth', handleGlobalToggle);
    };
  }, [toggleResonance]);

  const selectPreset = (newPreset: NaturePreset) => {
    setCurrentPreset(newPreset);
    setIsDropdownOpen(false);
    if (isPlaying) {
      startSound(newPreset);
    }
  };

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      if (birdIntervalRef.current) {
        window.clearInterval(birdIntervalRef.current);
      }
      if (sourceRef.current) {
        try { 
          sourceRef.current.stop(); 
        } catch (err) {
          console.debug("Unmount source stop error:", err);
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close().catch((err) => {
            console.debug("Unmount close error:", err);
          });
        } catch (err) {
          console.debug("Unmount catch close error:", err);
        }
      }
    };
  }, []);

  const ActiveIcon = PRESETS.find((p) => p.id === currentPreset)?.icon || CloudRain;

  return (
    <div ref={containerRef} className="relative flex items-center gap-1.5 z-[150] pointer-events-auto">
      {/* 1. MAIN PLAY/PAUSE TRIGGER */}
      <button
        onClick={toggleResonance}
        className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center ${
          isPlaying
            ? 'bg-[var(--color-accent)] text-black shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.5)]'
            : 'bg-white/5 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]'
        }`}
        title={isPlaying ? `Pause ${currentPreset.toUpperCase()}` : `Play ${currentPreset.toUpperCase()}`}
      >
        <Radio className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : ''}`} />
      </button>

      {/* 2. DYNAMIC PRESET SELECTOR PILL */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider border transition-all duration-300 ${
          isPlaying
            ? 'bg-black/40 border-[var(--color-accent)] text-[var(--color-accent)]'
            : 'bg-white/5 border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]'
        }`}
      >
        <ActiveIcon className="w-3.5 h-3.5 shrink-0" />
        <span>{currentPreset}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* 3. FLOATING PRESET SELECTION DROPDOWN */}
      {isDropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-black/95 backdrop-blur-xl border border-[var(--color-border)] rounded-xl py-2 px-1.5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-2.5 py-1.5 border-b border-white/5 mb-1.5">
            <span className="text-[9px] font-mono uppercase text-slate-500 tracking-[0.2em] flex items-center gap-1.5">
              {isPlaying ? <Volume2 className="w-3 h-3 text-[var(--color-accent)] animate-bounce" /> : <VolumeX className="w-3 h-3" />}
              Nature Sound Resonance
            </span>
          </div>

          <div className="space-y-1">
            {PRESETS.map((p) => {
              const IconComp = p.icon;
              const isSelected = p.id === currentPreset;
              return (
                <button
                  key={p.id}
                  onClick={() => selectPreset(p.id)}
                  className={`w-full text-left px-2.5 py-2 rounded-lg transition-all duration-200 flex items-start gap-2.5 ${
                    isSelected
                      ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20'
                      : 'hover:bg-white/5 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-transparent'
                  }`}
                >
                  <IconComp className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-[var(--color-accent)]' : 'text-slate-500'}`} />
                  <div className="flex flex-col gap-0.5">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider">
                      {p.name}
                    </div>
                    <div className="text-[9px] text-slate-500 font-sans tracking-normal leading-normal">
                      {p.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
