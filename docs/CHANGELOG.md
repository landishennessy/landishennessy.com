# Changelog

## 2026-10-05

### Public-contact privacy update

- Removed the public Gmail address and every `mailto:` link from the live site source.
- Replaced email calls to action with clear "contact coming soon" placeholders until a dedicated business address is verified.
- No contact form or replacement address was introduced, so the site does not expose a new inbox.

## 2026-09-30

### Consulting homepage refresh

- Rebuilt the homepage around the existing product-development positioning.
- Added clear capability, work-in-progress, and contact sections.
- Preserved the existing email contact and made no custom-domain changes.

## 2026-07-09

### Site foundation

- Updated site metadata in `app/layout.tsx` with Landis Hennessy title and description.
- Applied Geist globally via Tailwind `font-sans` on the root layout body.
- Removed unused create-next-app CSS variables, dark-mode media query, and Arial fallback from `app/globals.css`.
- Added a `#work` placeholder section on the homepage so the "View Work" CTA scrolls to a real target.
