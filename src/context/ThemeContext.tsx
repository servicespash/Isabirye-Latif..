import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  resonance: number;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode, resonance: number }> = ({ children, resonance }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => 
    (typeof window !== 'undefined' && localStorage.getItem('theme') as 'light' | 'dark') || 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Dispatch a custom event so non-react layers (like Canvas) can react
    window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

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
