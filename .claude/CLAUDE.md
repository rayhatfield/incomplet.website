# idh.fm

Website for the **Incomplete Design History** podcast — a show exploring overlooked areas of graphic design history. Static Next.js site; all episode/season data is fetched from the Simplecast API at build time and deployed on Vercel.

## Commands

```
yarn dev          # start dev server
yarn build        # production build
yarn start        # run production server
yarn lint         # ESLint
yarn run deploy   # vercel --prod
```

## Environment setup

Requires `.env.local` (not committed). Pull from Vercel:

```
vercel env pull .env.local
```

Key vars: `API_BASE_URL`, `API_BEARER_TOKEN` (Simplecast), `VERCEL_OIDC_TOKEN`

## Architecture

- `pages/` — Next.js routes; `episodes/[[...slug]].js` is the catch-all episode page; `s/[season].js` redirects to a season's first episode
- `components/` — React components with co-located `.module.css` files
- `lib/episodes.js` — all Simplecast API calls with in-memory memoization; this is the entire data layer
- `lib/constants.js` — reads env vars

All episode/season pages use `getStaticPaths` + `getStaticProps` for static generation at build time.

## Data source

Simplecast API (podcast ID: `db77199b-3626-4512-aa8e-1eac84ec4c66`). Episode slugs from Simplecast drive the URL structure. Episode artwork is served from `image.simplecastcdn.com` (allowed in next.config.js).

## Styling

CSS Modules only — each component has a `.module.css` sibling file. Global styles in `pages/_app.css`. Fonts via Hoefler Typography cloud (typography.com). No Tailwind, no CSS-in-JS.

## Testing

No testing framework is set up.
