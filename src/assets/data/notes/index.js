import serendipity from './serendipity';
import backgammle from './backgammle';
import { currentWork } from '../profile';

export const NOTES_PATH = '/notes';

// Engineering notes, numbered in this order ("Note 01", "Note 02"…).
export const notes = [{ ...serendipity, stats: currentWork.stats }, backgammle].map((note, i) => ({
  ...note,
  number: String(i + 1).padStart(2, '0'),
  path: `${NOTES_PATH}/${note.slug}`,
}));

export const noteBySlug = (slug) => notes.find((n) => n.slug === slug);
