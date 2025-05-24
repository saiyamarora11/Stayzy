import { useLayoutEffect, useRef } from "react";
import Lenis from 'lenis'

type LenisOptions = {
  duration?: number;
  easing?: (t: number) => number;
  orientation?: 'vertical' | 'horizontal';
  gestureOrientation?: 'vertical' | 'horizontal';
  smoothWheel?: boolean;
  touchMultiplier?: number;
};

export const useLenis = (options: LenisOptions) => {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    const lenis = new Lenis(options);
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return lenisRef;
};
