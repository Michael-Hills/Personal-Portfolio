import { createGlobalStyle } from 'styled-components';

// Design tokens live here as CSS variables; the active theme is set by
// <html data-theme="dark|light"> (see ThemeContext and the inline script in index.html).
const GlobalStyles = createGlobalStyle`
  :root,
  :root[data-theme='dark'] {
    color-scheme: dark;
    --bg: #0f0f0d;
    --bg-raised: #181815;
    --ink: #ecebe6;
    --ink-muted: #a09d95;
    --ink-faint: #6b6963;
    --rule: #2b2a26;
    --rule-strong: #46443f;
    --accent: #ff5a1f;
    --on-accent: #0f0f0d;
  }

  :root[data-theme='light'] {
    color-scheme: light;
    --bg: #f2f0ea;
    --bg-raised: #e8e5dc;
    --ink: #151513;
    --ink-muted: #58554f;
    --ink-faint: #8f8b82;
    --rule: #d8d4ca;
    --rule-strong: #b2ada2;
    --accent: #c73c0b;
    --on-accent: #f2f0ea;
  }

  :root {
    --font-sans: 'Archivo Variable', 'Archivo', system-ui, sans-serif;
    --font-mono: 'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace;
    --gutter: 16px;
    --header-h: 56px;
    --max: 1280px;
    --cell: 24px; /* inner padding beside a vertical rule */
  }

  @media (min-width: 768px) {
    :root {
      --gutter: 32px;
    }
  }

  @media (min-width: 1024px) {
    :root {
      --cell: 32px;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-h) + 16px);
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: var(--bg);
    color: var(--ink);
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    background: none;
    border: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  ::selection {
    background: var(--accent);
    color: var(--on-accent);
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  /* Page frame: content column with hairline rules either side on wide screens. */
  .container {
    width: 100%;
    max-width: var(--max);
    margin-inline: auto;
    padding-inline: var(--gutter);
  }

  @media (min-width: 1024px) {
    .container {
      border-inline: 1px solid var(--rule);
    }
  }

  /* Vertical breathing room between sections that keeps the frame rules unbroken. */
  .section::before {
    content: '';
    display: block;
    height: var(--section-gap, 96px);
    max-width: var(--max);
    margin-inline: auto;
  }

  @media (min-width: 1024px) {
    .section::before {
      border-inline: 1px solid var(--rule);
    }
  }

  @media (max-width: 767px) {
    .section {
      --section-gap: 48px;
    }
  }

  /* Shared 12-column grid, so vertical rules line up from section to section.
     The main text column starts at column 4 (the 25% line) on every page.
     Children set --span (and optionally --start); below 640px everything stacks.
     Wrapped in :where() so these defaults have zero specificity: any page or component
     rule overrides them regardless of the order styles are injected (it differs in dev). */
  :where(.grid-12) {
    --span: 12;
    --start: auto;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  :where(.grid-12) > :where(*) {
    grid-column: var(--start) / span var(--span);
    min-width: 0;
  }

  /* A cell that opens with a vertical rule. */
  :where(.grid-12) > :where(.ruled) {
    border-left: 1px solid var(--rule);
    padding-left: var(--cell);
  }

  :where(.grid-12) > :where(.pad-r) {
    padding-right: var(--cell);
  }

  @media (max-width: 639px) {
    :where(.grid-12) {
      grid-template-columns: minmax(0, 1fr);
    }

    :where(.grid-12) > :where(*) {
      grid-column: 1 / -1;
    }

    :where(.grid-12) > :where(.ruled) {
      border-left: 0;
      padding-left: 0;
    }

    :where(.grid-12) > :where(.pad-r) {
      padding-right: 0;
    }
  }

  @media (max-width: 639px) {
    .hide-phone {
      display: none !important;
    }
  }

  @media (min-width: 640px) {
    .phone-only {
      display: none !important;
    }
  }

  /* Small monospace caption used for indices, metadata and form labels. */
  .label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1.4;
    color: var(--ink-muted);
  }

  /* Photos sit in greyscale with the rest of the page and reveal colour on hover.
     Touch devices (no hover) always get full colour. */
  @media (hover: hover) {
    .photo img {
      filter: grayscale(1) contrast(1.05);
      transition: filter 0.3s ease;
    }

    .photo:hover img {
      filter: none;
    }
  }

  /* Underlined inline text link. */
  .text-link {
    text-decoration: underline;
    text-decoration-color: var(--rule-strong);
    text-underline-offset: 0.2em;
    transition: color 0.15s ease, text-decoration-color 0.15s ease;

    &:hover {
      color: var(--accent);
      text-decoration-color: var(--accent);
    }
  }

  /* On touch screens, give inline text links a finger-sized hit area without changing the layout much. */
  @media (pointer: coarse), (max-width: 767px) {
    .text-link {
      display: inline-block;
      padding-block: 10px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
