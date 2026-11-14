# Skitii website assessment

Responsive homepage hero and "How Skitii Works" section, plus the supporting homepage sections, built with plain HTML, CSS and JavaScript. Assessment concept using public skitii.com content and placeholders only. It does not change the live website.

## Pages
- `index.html`: homepage (Concept A, the strictly on-brand hero)
- `concept-b.html`: alternative hero layout, same identity (self-contained review page)
- `design-system.html`: colour, type, spacing, component and language rules (self-contained review page)

## Structure
- `css/tokens.css`: design tokens (colour, type scale, radius)
- `css/base.css`, `buttons.css`: reset, focus styles, shared button component
- `css/header.css`, `hero.css`, `how-it-works.css`, `cta.css`, `sections.css`: one file per area of the page
- `css/responsive.css`: animation keyframes, tablet (960px) and mobile (720px) rules, reduced motion
- `css/media.css`: real images, device showcase, record card, founders, certificate, dark footer, stat odometer and hover motion (loads last)
- `js/`: six small independent modules: `hero-trace.js`, `nav.js`, `step-tabs.js`, `cta-dock.js`, `enquiry-form.js`, `stats-odometer.js`

Stylesheets load in the order listed in `index.html`. Keep that order, because later files override earlier ones.

## Run locally
`python3 -m http.server 8000` (or `npx serve`), then open http://localhost:8000

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel choose Add New, then Project, import the repository, and keep the defaults (no framework, no build command).
3. `vercel.json` adds security headers and caching. Pages are marked noindex because this is an assessment preview.

## Accessibility and SEO
Skip link, semantic landmarks and headings, visible keyboard focus, arrow-key tabs, 48px tap targets, labelled form fields with text errors, reduced-motion support, contrast-checked palette (see design system), page title and meta description, Open Graph tags.

## Images
All images in `assets/img/` come from the public skitii.com site, the supplied assets, or AI-generated concept imagery (the Record photo). Swap in approved, consented photography before any real launch.

## Logos
Official files: `assets/skitii-logo.png` (colored, for light backgrounds) and `assets/skitii-logo-white.png` (for dark backgrounds). Both are used at their natural proportions with `width: auto`, so they are never stretched.

## Motion (from the Figma prototype)
Hero trace draws in over about 3.1s. The two stats roll like odometers over 1.25s when scrolled into view. Step and device photos zoom slowly on hover (1.25s). Buttons and founder cards respond over 0.3s. All motion is disabled for reduced-motion users.

## Placeholders to replace
the Record-step copy. The enquiry form is a client-side prototype and sends nothing.

## Content notes
- Wording follows the investigational, evidence-conscious language in the brand guide. No approval or outcome claims are made.
- The two statistics in "Why we do it" come from skitii.com and its linked papers. Verify them against the sources before publishing.
- The live site and a medRxiv protocol differ on CDSCO licence status. This build uses the official site wording: licensing in progress.

## Not done yet
Fonts load from Google Fonts. For best performance, self-host Manrope (woff2) and add `font-display: swap`.
