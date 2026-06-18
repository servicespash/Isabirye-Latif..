/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hub-accent': 'var(--accent-gold)', 
        'hub-gold': 'var(--accent-gold)',
        'hub-text': 'var(--text-primary)',
        'hub-glass': 'var(--bg-glass)',
        'hub-border': 'var(--border-color)',
      },
      fontFamily: {
        'mono': ['"JetBrains Mono"', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
