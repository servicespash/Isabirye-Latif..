import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useRouteTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Analytics tracking logic
    console.log(`[ANALYTICS] Route changed to: ${location.pathname}${location.hash}`);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const id = decodeURIComponent(location.hash.replace('#', ''));
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 350);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);
};
