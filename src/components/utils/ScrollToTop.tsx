import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash (e.g. #contact), scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } 
    // If there is a hash, we let the browser handle it or we can handle it manually if needed
    // But for SPAs, scrollTo(0,0) is the default expected behavior on page change
  }, [pathname, hash]);

  return null;
}
