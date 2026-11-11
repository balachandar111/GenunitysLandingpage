import { useEffect } from 'react';

/**
 * Robust scroll reveal hook.
 * Adds `.in` class to `.reveal` elements when they scroll into view.
 * Guarantees that elements already in or above the viewport,
 * or restored via browser Back/Forward navigation, are immediately visible.
 */
export default function useReveal(dep) {
  useEffect(() => {
    const revealVisible = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const els = document.querySelectorAll('.reveal:not(.in)');
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is in viewport, near viewport, or already scrolled past
        if (rect.top <= windowHeight + 120 || rect.bottom <= 0) {
          el.classList.add('in');
        }
      });
    };

    // 1. Reveal elements already visible on mount and after layout paints
    revealVisible();
    const frameId = requestAnimationFrame(revealVisible);
    const t1 = setTimeout(revealVisible, 60);
    const t2 = setTimeout(revealVisible, 200);
    const t3 = setTimeout(revealVisible, 500);

    // Failsafe: ensure no element is permanently hidden after navigation
    const failsafe = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        el.classList.add('in');
      });
    }, 1200);

    // 2. IntersectionObserver for smooth entrance of upcoming elements
    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (
              en.isIntersecting ||
              en.boundingClientRect.top < (window.innerHeight || document.documentElement.clientHeight) + 120
            ) {
              en.target.classList.add('in');
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.02, rootMargin: '0px 0px 100px 0px' }
      );

      document.querySelectorAll('.reveal:not(.in)').forEach((e) => io.observe(e));
    } else {
      document.querySelectorAll('.reveal:not(.in)').forEach((e) => e.classList.add('in'));
    }

    // 3. Listen to scroll, popstate (browser back/forward), and pageshow (bfcache)
    window.addEventListener('scroll', revealVisible, { passive: true });
    window.addEventListener('popstate', revealVisible, { passive: true });
    window.addEventListener('pageshow', revealVisible, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(failsafe);
      io?.disconnect();
      window.removeEventListener('scroll', revealVisible);
      window.removeEventListener('popstate', revealVisible);
      window.removeEventListener('pageshow', revealVisible);
    };
  }, [dep]);
}
