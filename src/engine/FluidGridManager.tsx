import { useState, useEffect } from 'react';

/**
 * FluidGridManager
 * Upgraded to use ResizeObserver for precision.
 * Now provides a normalized resonance state that prevents layout thrashing.
 */
export const useFluidGridManager = () => {
  const [resonance, setResonance] = useState<number>(1);

  useEffect(() => {
    // We observe the body or root to detect layout changes without scrollbar-induced jitter
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        
        // Define clean, institutional breakpoints
        // 1 = Mobile, 2 = Tablet, 3 = Workstation
        const factor = width < 768 ? 1 : width < 1280 ? 2 : 3;
        
        // Temporal modulation: Maintain the 'grind' context, 
        // but normalize it to avoid UI layout shifts during transitions
        const hour = new Date().getHours();
        const temporalMod = (hour > 22 || hour < 5) ? 0.2 : 0; 
        
        setResonance(Number((factor + temporalMod).toFixed(1)));
      }
    });

    observer.observe(document.body);

    return () => observer.disconnect();
  }, []);

  return { resonance };
};
