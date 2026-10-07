# MedVA Made Easier — Home Page (Next.js)

The Home page only, rebuilt from `MedVA_Made_Easier_Website_Content.pdf` (Page 1 of 7). The other six pages referenced in the sitewide nav (Our Services, Who We Serve, Our Process, Security & Compliance, Resources, Blog) are linked from the header/footer but not yet built.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Sections (in order, per the source doc)

1. **Top Utility Bar** — founder credit + book-a-call link
2. **Header** — sitewide nav, sticky, mobile menu
3. **Hero** — badges, headline, subheadline, primary/secondary CTAs, trust line
4. **Interactive Moment** — "How much of your week is admin, really?" — drag the slider (5–40 hrs) to see estimated hours freed and a best-fit role match
5. **EHR/EMR Trust Band** — the 9 platforms MVAs are trained on
6. **Stat Strip** — 7 specialties · 3 countries · 14-day trial · 7+ EHR platforms (count-up on scroll)
7. **Testimonials** — "What Practice Owners Say" (placeholder quotes, flagged in-page — replace with real, permission-cleared quotes before launch)
8. **Final CTA** — "Ready to free up your practice's time?"
9. **Footer** — sitewide footer (company blurb, nav, get-started links, legal links)

## Placeholders to fill before launch

These come straight from the source doc's bracketed notes:

- `[Founder Name]` in the top utility bar (`lib/data.js` → `utilityBar`)
- Testimonial names, titles, and locations (`lib/data.js` → `testimonials`) — currently placeholder copy from the source doc, clearly flagged on the page
- Domain confirmation (`medvamadeeasier.com`)
- Legal pages (Privacy Policy, Terms of Service, Cookie Policy) — footer links currently point to routes that don't exist yet

The admin-hours-to-role mapping in the slider (`lib/data.js` → `adminSlider.roleMatches`) is an illustrative demo mapping built from the 7 flagship specialties — it wasn't specified in the source doc, so adjust the thresholds if you want a different mapping.

## Stack

Next.js 14 · React 18 · JavaScript (JSX) · Tailwind CSS · Framer Motion · lucide-react icons
