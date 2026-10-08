/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect } from 'react';
import { useSystemTheme } from '../hooks/useSystemTheme';

interface ThemeContextType {
  resonance: number;
  theme: 'light' | 'dark';
  contrast: number;
  highContrast: boolean;
  aspectRatio: string;
  toggleTheme: () => void;
  toggleHighContrast: () => void;
  setContrast: (value: number) => void;
  setAspectRatio: (value: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode, resonance: number }> = ({ children, resonance }) => {
  const { theme, toggleTheme } = useSystemTheme();
  const [contrast, setContrast] = React.useState(100);
  const [highContrast, setHighContrast] = React.useState(false);
  const [aspectRatio, setAspectRatio] = React.useState('16:9');

  const toggleHighContrast = () => setHighContrast(prev => !prev);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('high-contrast', highContrast);
    root.setAttribute('data-theme', theme);
    root.style.setProperty('--global-contrast', `${contrast}%`);
    root.style.setProperty('--global-aspect-ratio', aspectRatio === '16:9' ? '1.777' : aspectRatio === '4:3' ? '1.333' : '1');
    
    // Dispatch a custom event so non-react layers (like Canvas) can react
    window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme, contrast, aspectRatio, highContrast } }));
  }, [theme, contrast, aspectRatio, highContrast]);

  return (
    <ThemeContext.Provider value={{ 
      resonance, 
      theme, 
      contrast, 
      highContrast,
      aspectRatio, 
      toggleTheme, 
      toggleHighContrast,
      setContrast, 
      setAspectRatio 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCymaticTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useCymaticTheme must be used within a ThemeProvider');
  return context;
};
