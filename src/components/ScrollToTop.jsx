import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// New page: start at the top, or at the #section the link points to.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
