# Ayush Lakhera — Yoga Instructor Portfolio

A premium, modern, responsive one-page portfolio for a professional yoga
instructor. Built with React 19, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is written to `dist/` — upload that folder's contents
to any static host (Netlify, Vercel, GitHub Pages, your own server, etc.).

## Project structure

```
src/
  components/   # One file per section/UI piece (Navbar, Hero, About, ...)
  hooks/        # useDarkMode, useActiveSection, useScrollProgress, useCountUp
  utils/        # data.js (all site copy), motionVariants.js, iconMap.js
  assets/       # (reserved for local images if you replace the Unsplash ones)
  index.css     # Tailwind v4 theme tokens, fonts, signature animations
  App.jsx       # Composes all sections in order
```

## Editing content

Almost all text content — nav links, stats, services, FAQs, testimonials,
gallery images — lives in `src/utils/data.js`. Change it there rather than
hunting through components.

## Replacing images

All images currently point to Unsplash placeholder URLs. Swap them for your
own by either:
- Replacing the URLs in `src/utils/data.js` / individual components, or
- Dropping your own files into `src/assets/` and importing them.

## Design notes

- **Palette**: white, emerald green (`#0F766E`), light sage (`#DCEFE9`),
  dark slate (`#1F2937`), and a gold accent (`#C9A227`).
- **Type**: Fraunces (display/serif headings) paired with Manrope (body/UI).
- **Signature motif**: a slow "breathing" ring animation (an 8s scale pulse)
  appears in the hero and the Benefits section, echoing the inhale/exhale
  rhythm of Pranayama — the one recurring visual idea the rest of the page
  stays quiet around.
- **Dark mode**: toggled via a class on `<html>`, persisted to
  `localStorage`, and defaults to the visitor's system preference.

## Notes on the contact form

The contact form is frontend-only, as requested — submitting it shows a
confirmation message but does not send data anywhere. To wire it up to a
real backend, connect the `handleSubmit` function in
`src/components/Contact.jsx` to an email service (e.g. Formspree, EmailJS)
or your own API endpoint.
