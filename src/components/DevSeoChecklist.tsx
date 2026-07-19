import { useEffect } from 'react';

export const DevSeoChecklist = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;

    const checkSeo = () => {
      const title = document.title;
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content');

      if (!title || title.includes('Untitled')) {
        console.warn('[SEO WARNING]: Page title is missing or generic.');
      }
      if (!description) {
        console.warn('[SEO WARNING]: Meta description is missing.');
      }
    };

    checkSeo();
  }, []);

  return null; // Invisible in production, just a helper
};
