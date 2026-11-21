# Personal Portfolio

Source for [Michael Hills' portfolio site](https://michaelhills.dev), built with React, Vite and styled-components and hosted on Cloudflare (Workers static assets).

## Development

```bash
npm install
npm run dev      # start the dev server
npm run lint     # run ESLint
npm run build    # production build into dist/
```

## Deploying

Cloudflare Workers Builds deploys every push to `main`: it runs `npm run build`, then `npx wrangler deploy`, which serves `dist/` as configured in `wrangler.jsonc`. Other branches get their own preview URL. There is no manual deploy step.

## Contact form

The contact form sends mail through [EmailJS](https://www.emailjs.com/). The keys are read at build time from:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Set them as build variables in the Cloudflare project (Settings, Build, Variables and secrets) for deploys, and in a git-ignored `.env` file for local development.

## Project structure

- `src/pages/` – top-level routes (Home, About, Projects, Project detail, Notes, Note, Contact)
- `src/components/` – shared UI components (header, footer, project list and table, buttons…)
- `src/assets/data/` – site content: `projects.js` (add new projects here), `notes/` (engineering notes, numbered in the order listed in `notes/index.js`), `profile.js` (skills, experience, education) and `contact.js` (contact details, socials, CV link)
- `src/styles/GlobalStyle.js` – design tokens (colours for both themes, fonts, spacing) and base styles
- `scripts/github-pages-redirect/` – pages that forward the old `michael-hills.github.io/Personal-Portfolio` address to the new domain

Fonts are Archivo (variable, including the width axis) and IBM Plex Mono, self-hosted via Fontsource.

The site is served from the domain root; `base` in `vite.config.js` is `/` and the router reads it from `import.meta.env.BASE_URL`.
