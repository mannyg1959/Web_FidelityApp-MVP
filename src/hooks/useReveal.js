import { useEffect } from 'react';

/**
 * Hook to handle scroll reveal animations using Intersection Observer.
 * Adds 'active' class to elements with 'reveal', 'reveal-left', 'reveal-right', or 'reveal-scale' classes.
 */
export const useReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Slight offset for better feel
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
