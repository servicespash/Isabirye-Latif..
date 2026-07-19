/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect } from 'react';
import { useSystemTheme } from '../hooks/useSystemTheme';

interface ThemeContextType {
  resonance: number;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode, resonance: number }> = ({ children, resonance }) => {
  const { theme, toggleTheme } = useSystemTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.setAttribute('data-theme', theme);
    
    // Dispatch a custom event so non-react layers (like Canvas) can react
    window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ resonance, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCymaticTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useCymaticTheme must be used within a ThemeProvider');
  return context;
};
