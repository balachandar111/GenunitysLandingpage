import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Ensures smooth, reliable scroll restoration and positioning across page navigations.
 * When clicking a new page link, it scrolls to the top.
 * When using the browser Back/Forward buttons (POP), it respects the browser's scroll restoration,
 * or handles hash targets safely.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType === 'POP') {
      if (hash && hash.length > 1) {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
          return () => clearTimeout(t);
        }
      }
      return;
    }

    if (hash && hash.length > 1) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
        return () => clearTimeout(t);
      }
    }

    // Forward navigation to a page without a hash
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, navType]);

  return null;
}
