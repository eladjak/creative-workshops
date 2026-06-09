# creative-workshops - Progress

## 2026-06-09 — eladjak.com overhaul: blog scrape + image fix (comics)
- Mega-scraped the old blog (meharoshelhadaf.blogspot.com) → embedded 28 works + 15 real photos into the modern page. Wrong/mismatched images replaced.
- Live: **https://creative-workshops.vercel.app** (HTTP 200 via VPS). SSR audit: 1 H1, 2 JSON-LD blocks, canonical present, custom favicon (32x32). robots/sitemap/llms.txt all 200.
- ⚠️ NEEDS ELAD: Vercel project has ZERO production env vars → **RESEND_API_KEY missing** → contact form logs only (no email delivered). Add RESEND_API_KEY + RESEND_FROM (`comics@eladjak.com`) + CONTACT_EMAIL (`eladjak@gmail.com`).
- Optional: dedicated comics.eladjak.com subdomain (currently on vercel.app default).
- Git clean, on main, pushed.

## Status: Production Complete (overhaul Jun 9) — pending RESEND key
## Last Updated: 2026-06-09

## Live URLs
- https://workshops.eladjak.com (subdomain)
- https://creative-workshops.vercel.app (Vercel default)
- GitHub: https://github.com/eladjak/creative-workshops (11 commits)

## What Was Done
- [x] Next.js 15 + TS + Tailwind 4 + Framer Motion
- [x] All 9 sections + WhatsApp floating button + Lightbox
- [x] Fixed all broken animations (opacity fade-in)
- [x] SEO: metadataBase, canonical, OG image, Twitter card, JSON-LD, sitemap, robots
- [x] Accessibility: skip-to-content, focus-visible, aria-pressed, role+aria-label
- [x] Contact form: WhatsApp redirect + real contact info
- [x] Custom 404 + custom favicon + apple-touch-icon
- [x] Real original artworks from blog archive (12 gallery items)
- [x] Plausible Analytics + dynamic imports for performance
- [x] Gallery lightbox (click to enlarge, Escape to close)
- [x] Hero image visible on mobile + proper Gemini workshop scene
- [x] Fixed typo + consistent name "אלעד יעקובוביץ'"
- [x] Image optimization (1.2MB -> 260KB)
- [x] Loading spinners for lazy-loaded sections
- [x] 3 new photorealistic workshop photos (classroom, art table, birthday)
- [x] **Pricing updated based on market research (16 competitors)**
  - Single: from 1,000 NIS (was 800-1,200)
  - Club 8 sessions: from 4,500 NIS (was "custom")
  - Events: from 900 NIS (was 600 - below market!)
- [x] Security headers, git hygiene, gradient cleanup

## For Elad to decide
- Review testimonial names (currently placeholder names)
- Set up Plausible account at plausible.io for workshops.eladjak.com
