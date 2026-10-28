# Helping Hand Foundation (HHF) — website design concept

A demo redesign prepared by **Kreatif Atelier** to pitch to Helping Hand Foundation, Hyderabad (helpinghandf.org).
React + TypeScript + Vite + Tailwind CSS v4, using the Agape colour system, with a custom animation layer.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5210
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Animation layer (`src/components/motion.tsx`)

Word-by-word headline reveals, scroll reveals (fade / slide / scale / clip-wipe), infinite marquees, 3D tilt cards
with glare, pointer-parallax hero, cursor spotlight, floating plus-sign particles, an animated ECG heartbeat line,
a scroll-drawn heartbeat path, scroll parallax, animated progress bars and counters, an auto-advancing programme
showcase, page transitions, a scroll-progress bar and a back-to-top ring. Everything is disabled for visitors who
prefer reduced motion.

## Homepage content mirrored from helpinghandf.org

Their homepage banner photos (the Indian Oil Corporation CSR ceremony leads the hero photo stack), all 15
"Achievements 2025" figures, the "What makes HHF different" principles, the 12-service "Our Work" carousel with
every photo it shows, the documentary, the partner-logo wall, news, and the newsletter sign-up.

## What's real vs. demo

- **From helpinghandf.org and linked press:** history, founder story, 2025 figures (1M lives, 400+ team, 20 centres,
  5,172+ dialysis sessions, 17+ help desks), savings figures, all eight programme descriptions, hospital list,
  trustees/advisors/staff, partners, stories (Bhaskar, NIMS MoU, cataract surgeries, Sivananda rehab, Sarojini Devi,
  Apollo, HHF School, COVID help desks), recognitions, press links, bank/PAN and 80G guidance, contact details,
  social accounts, blood-donor registration link, documentary video, and photos.
- **Demo / placeholder (labelled in the UI):** donation checkout, forms and newsletter (nothing is sent or stored),
  most donation-amount impact examples, cause progress bars, expense breakdown, policy text.

## Where to change things

- Content: `src/data/site.ts` · Motion: `src/components/motion.tsx` · Styles/tokens: `src/styles.css`
- Social links: `org.socials` in `src/data/site.ts` · Payments: `src/lib/payments.ts` · Photos: `public/images/`
