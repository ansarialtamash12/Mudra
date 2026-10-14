# Mudra (DMDR) landing page

Next.js 14 (App Router) + Tailwind CSS 3 + TypeScript.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things are

- `lib/content.ts` holds all copy, links, tokenomics, staking tiers, roadmap phases and FAQ. Edit here first.
- `components/` has one file per section. `Roadmap.tsx` is the scroll-animated timeline.
- `app/globals.css` holds the brand palette as CSS variables (blue and gold from the logo), one set for light and one for dark.
- `tailwind.config.ts` maps those variables to Tailwind colours (`bg-ink`, `text-fg`, `text-gold-ink`, `bg-blue` ...) and holds the keyframes.
- `app/layout.tsx` loads the fonts through `next/font`: Plus Jakarta Sans (headings), Inter (body) and Noto Sans Devanagari (coin back face only). It also applies the saved theme before first paint.

## Light and dark mode

The sun/moon button in the navbar switches theme and remembers the choice in `localStorage`. Dark is the default. To change the default to light, edit the `themeScript` string in `app/layout.tsx`.

## Brand colours

To match the logo exactly, edit these values in `app/globals.css`:

- `--blue`, `--blue-ink`, `--blue-deep`, `--blue-light` (logo blue)
- `--gold`, `--gold-ink`, `--gold-light`, `--gold-dark` (logo golden orange)

Values are `R G B` triplets. `-ink` variants are the readable text versions on each theme.

## About section background

`public/images/about-bg-light.svg` and `public/images/about-bg-dark.svg` are shown in light and dark mode. Replace them with a photo or artwork of your own (keep the file names, or update the two `bg-[url(...)]` classes in `components/About.tsx`).

## Confirm before launch

These are placeholders, marked DRAFT in `lib/content.ts`:

- Token allocation percentages, network and total supply
- Staking APY values and lock terms
- Roadmap target quarters
- The "10,000+ people joined" badge (copied from the current site)

## Deploy

Push to GitHub and import the repo in Vercel. No environment variables are needed.
