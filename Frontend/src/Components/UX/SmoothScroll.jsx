import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

/**
 * SmoothScroll Component
 * Initializes Lenis for global inertial (momentum) scrolling.
 * Handles automatic scroll-to-top on route changes.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be wrapped
 */
const SmoothScroll = ({ children }) => {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // Also fallback to browser native scroll to ensure Reveal triggers correctly
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
