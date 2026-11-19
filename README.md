# Personal Portfolio

Source for [Michael Hills' portfolio site](https://Michael-Hills.github.io/Personal-Portfolio/), built with React, Vite and styled-components and hosted on GitHub Pages.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run lint     # run ESLint
npm run build    # production build into dist/
npm run deploy   # build and publish dist/ to the gh-pages branch
```

## Contact form

The contact form sends mail through [EmailJS](https://www.emailjs.com/). Create a `.env` file (it is git-ignored) with:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Project structure

- `src/pages/` – top-level routes (Home, About, Projects, Project detail, Contact)
- `src/components/` – shared UI components (header, footer, project index, buttons…)
- `src/assets/data/` – site content: `projects.js` (add new projects here), `profile.js` (skills, experience, education) and `contact.js` (contact details, socials, CV link)
- `src/styles/GlobalStyle.js` – design tokens (colours for both themes, fonts, spacing) and base styles

Fonts are Archivo (variable, including the width axis) and IBM Plex Mono, self-hosted via Fontsource.
- `public/404.html` + the script in `index.html` – SPA routing workaround for GitHub Pages

The site is served from `/Personal-Portfolio/`; this is set by `base` in `vite.config.js` and the router reads it from `import.meta.env.BASE_URL`.
