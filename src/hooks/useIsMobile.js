import { useEffect, useState } from 'react';

export function useIsMobile(maxWidth = 900) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(`(max-width: ${maxWidth}px)`).matches : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const onChange = (e) => setIsMobile(e.matches);
    try {
      mql.addEventListener('change', onChange);
    } catch (e) {
      // Safari
      mql.addListener(onChange);
    }
    return () => {
      try {
        mql.removeEventListener('change', onChange);
      } catch (e) {
        mql.removeListener(onChange);
      }
    };
  }, [maxWidth]);

  return isMobile;
}



