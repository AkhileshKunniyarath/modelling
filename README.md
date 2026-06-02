# Hanaz Modelling Website

Backendless Next.js App Router website for Hanaz Modelling, built from the supplied BRD.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content Updates

Editable business content lives in `src/content`.

- `site.ts`: navigation, social links, CTA fallbacks, contact details
- `models.ts`: model cards and static profile data
- `editorials.ts`: editorial collections and gallery media
- `events.ts`: event cards and detail pages

Replace placeholder editorial image URLs with approved client assets when available. Store local media in `public/images` using descriptive names, then update the matching content file.

## Backendless Guardrails

This version intentionally has no API routes, database, authentication, CMS, admin panel, upload flow, or payment integration. Conversion actions use Instagram, WhatsApp, email, or approved external form URLs from environment variables.

## Build

```bash
npm run build
```
