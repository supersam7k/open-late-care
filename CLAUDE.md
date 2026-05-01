# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Static export (next build)
npm run lint     # ESLint
```

The build produces a static site via Next.js App Router with `generateStaticParams`.

## Architecture

**Next.js 16 + Tailwind CSS 4 + TypeScript**. Static site with two route types:

- `/` — homepage with city grid, FAQ, and comparison content (`app/page.tsx`)
- `/[city]/urgent-care-open-now/` — per-city listing page (`app/[city]/urgent-care-open-now/page.tsx`)

**Data layer** (`lib/`):
- `cityListings.ts` — `cities` array (slug + name + listings array). Each listing: name, address, phone, hours, mapsQuery. `getCityListings(slug)` and `getCityName(slug)` are the access helpers.
- `cityDescriptions.ts` — keyed by city slug, one paragraph of intro copy per city.
- `parseHours.ts` — `toSchemaOpeningHours()` converts free-text hours strings to Schema.org format
- `types.ts` — `Listing` type (legacy format with status, badges, note fields)

**Components** (`components/`):
- `CitySearch.tsx` — client-side filter/search over the city grid on the homepage
- `ListingsFilter.tsx` — client-side filter over individual clinic listings (open now toggle, search)
- `ListingCard.tsx` — renders a single clinic card
- `OpenNowBadge.tsx` — determines open/closed status from hours string
- `BackToTop.tsx` — scroll-to-top button

**SEO**: Each city page exports `generateMetadata` with canonical URL, title, and description. `app/sitemap.ts` generates the full sitemap. JSON-LD `MedicalClinic` + `ItemList` structured data is inlined in each city page.

**Analytics/Ads**: GA4 (`G-3ZSPLPH985`) and AdSense (`ca-pub-7148799077582934`) scripts are in `app/layout.tsx`.

**Domain**: `https://urgentcarenearme24.com` — set as `BASE_URL` in `layout.tsx` and `sitemap.ts`.

## Adding a new city

1. Add an entry to the `cities` array in `lib/cityListings.ts` with `slug`, `name`, and `listings`.
2. Optionally add a description paragraph to `lib/cityDescriptions.ts` keyed by the same slug.
3. The city page, sitemap entry, and cross-city nav links are all generated automatically.
