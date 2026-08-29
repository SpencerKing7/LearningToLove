# CLAUDE.md — LearningToLove

## What this is

A small content site — "Learning To Love" — converted from a static HTML original to React. Vite +
React + TypeScript, React Router for pages, Bootstrap for styling. Published to GitHub Pages at
https://www.spencerking7.com.

## Layout

- `src/pages/` — one component per route: `Home`, `Story`, `LearnMore`, `Questions`
- `src/components/`, `src/styles/`
- `static/`, `public/` — assets carried over from the original site
- `scripts/generate-commit-message.sh` — used by `npm run deploy`
- `dist/` — build output, published to `gh-pages`
- Work items live in Linear (project `Learning To Love`); use `/backlog`

## Commands

```bash
npm install
npm run dev       # Vite dev server
npm run build
npm run preview   # serve the built site locally
npm run deploy    # build, publish dist/ to gh-pages, then commit and push
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for the full deployment notes.

## Verify

```bash
npm run build
```

There is no test suite. A clean production build is the gate.

## Architecture

Routes are declared with React Router and each maps to a single page component in `src/pages/`.
There is no data layer, no API, and no auth — every page is static content rendered from source.

## Never

- **Never run `npm run deploy` casually.** It is not just a build: it publishes `dist/` to `gh-pages`
  *and* auto-commits and pushes the working tree using the generated commit message. Deploying is a
  human decision.
