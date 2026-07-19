import { useEffect } from 'react';
export const ThemeDebug = () => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      console.log('DOM Mutation: dark class is now', document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return null;
};
