import { Sun, Moon } from 'lucide-react';
import { useCymaticTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useCymaticTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-500 ease-in-out pointer-events-auto"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Moon size={16} className="text-[var(--accent-primary)]" /> : <Sun size={16} className="text-[var(--accent-primary)]" />}
    </button>
  );
};
