import { useEffect } from 'react';

const SITE = 'Michael Hills';
const DEFAULT_TITLE = `${SITE} | Backend Engineer`;

// Sets the tab title for the current page, e.g. "About | Michael Hills". No argument gives the home title.
export default function usePageTitle(page) {
  useEffect(() => {
    document.title = page ? `${page} | ${SITE}` : DEFAULT_TITLE;
  }, [page]);
}
