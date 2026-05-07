# Premium Developer Portfolio

A premium, single-page developer portfolio for a WordPress & Web Developer.
Dark, glassmorphic, animated — built to impress international clients on first scroll.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom theme + glass + gradient utilities)
- **Framer Motion** (scroll reveal, mouse parallax, modal transitions)
- **lucide-react** (icons)
- **Space Grotesk** (display) + **Inter** (body), loaded via `next/font`

## Sections

1. Sticky animated navbar with smooth scroll, scroll-spy, and mobile drawer
2. Hero — typewriter, floating tech tiles, animated gradient blobs, CTAs
3. About — copy + animated stat counters + availability indicator
4. Skills — animated grid with mastery bars (14 skills)
5. Services — 7 service cards with hover glow
6. Experience — alternating vertical timeline
7. Projects — 8 case studies, "Load More", fullscreen animated case-study modal
8. Testimonials — auto-rotating cards with manual controls
9. Contact — glass form, social links, availability pill
10. Footer — minimal, premium

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Customize

- **Profile, projects, skills, services, testimonials, experience** — all in
  [`data/portfolio.ts`](data/portfolio.ts).
- **Theme colors / gradients / animations** — [`tailwind.config.ts`](tailwind.config.ts) +
  [`app/globals.css`](app/globals.css).
- **Project artwork** is rendered as live SVG/CSS gradient browser mocks in
  [`components/ProjectArtwork.tsx`](components/ProjectArtwork.tsx) — swap in
  `next/image` screenshots once you have them.

## Wiring the contact form

The form in [`components/Contact.tsx`](components/Contact.tsx) is a demo flow
(simulates a submit). Wire it to your endpoint of choice — a Next.js route
handler, Formspree, GoHighLevel, etc. Replace the `setTimeout` in `onSubmit`
with a `fetch()` to your endpoint.

## Build

```bash
npm run build
npm run start
```
