# Portfolio — Kazusa Tsubota

Static bilingual (EN/JA) personal site built with [Astro](https://astro.build).

## Develop

```bash
bun install   # or: npm install / pnpm install
bun run dev   # or: npm run dev
```

## Build

```bash
bun run build
bun run preview
```

Output is written to `dist/` (static).

## Deploy on Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework Preset: **Astro** (auto-detected). Build command `astro build`, output `dist`.
4. After you have a production domain, update `site` in `astro.config.mjs` to match.

No serverless functions or environment variables are required for v1.
