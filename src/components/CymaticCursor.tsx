import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CymaticCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      // Look for custom interactive markers or common clickable elements
      const isInteractive = target.closest(
        'a, button, [role="button"], [class*="glass"], [class*="card"], [data-interactive], input, select, textarea'
      );
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  // Disable cursor follower on touchscreen devices for clean accessibility
  const [hasFinePointer, setHasFinePointer] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : true
  );
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const listener = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  if (!hasFinePointer || !isVisible) return null;

  return (
    <>
      {/* Outer concentric resonance ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--color-accent)]/40 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? (isClicked ? 1.6 : 1.4) : (isClicked ? 0.75 : 1),
          borderColor: isHovered ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.4)',
          boxShadow: isHovered
            ? '0 0 14px var(--color-accent)'
            : '0 0 0px rgba(0,0,0,0)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />
      
      {/* Inner sharp nexus node */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--color-accent)] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 0.5 : (isClicked ? 1.4 : 1),
          backgroundColor: isHovered ? 'var(--color-accent)' : '#ffffff',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
      />
    </>
  );
};
