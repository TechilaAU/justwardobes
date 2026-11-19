# Just Wardrobes & Storage website

Rebuild of justwardrobes.com.au. Static site built with [Astro](https://astro.build), so it can be hosted anywhere (Netlify, Cloudflare Pages, Vercel).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## What changed from the old site

The old site had 30+ pages split across "Your Space", "Wardrobes" and "About Us" menus, with many near-empty gallery pages. The new site has five menu items and one action that's on every page.

| New page | Replaces |
| --- | --- |
| `/` | Home |
| `/wardrobes/` | Wardrobes, Spaces, Systems, Suspended, Built-in, On the floor, Centre buffet, Boutique robes, Walk-in robes |
| `/cabinetry/` | Kitchens, Cabinetry Collection, Office, Media, Living room, Storage, Commercial |
| `/doors-and-finishes/` | Doors, Colours, White melamine, Edged melamine, Timbergrain |
| `/our-work/` | Projects gallery and every per-system photo page (filterable, with lightbox) |
| `/about/` | About us, Why us, Design process |
| `/new-homes-and-renovations/` | Building a home, Renovating |
| `/reviews/`, `/faq/`, `/contact/`, `/privacy/` | Testimonials, FAQs, Contact, Privacy policy |

Old URLs are 301 redirected in `public/_redirects` (Netlify / Cloudflare format). If hosting on Vercel, port these into `vercel.json`.

## Brand

- **Mark**: two sliding door panels on a double track, one open (`src/components/Logo.astro`, `public/favicon.svg`).
- **Colours** come from the product: melamine white `#fafaf8`, graphite frame `#23262b`, brushed aluminium `#c9ced2`, oak timbergrain `#8c5b37`, and eucalypt green `#2d4a3e` reserved for the "Book a free measure" action.
- **Type**: Schibsted Grotesk (self-hosted via Fontsource), one family throughout.
- **Signature detail**: key photos carry joinery-style dimension lines (`src/components/Dimensioned.astro`) using real standard heights (2040 to 2100mm).

## Editing content

- Phone, email, address, licence, warranty: `src/config/site.ts`
- Reviews, FAQs, process steps, suppliers: `src/data/content.ts`
- Photos and gallery: `src/data/images.ts`

## Quote form → Salesforce

The form on `/contact/` posts straight into the Just Wardrobes Salesforce org as a Lead (Web-to-Lead, org `00D7F000000yPEY`, Lead Source "Website"). The "What do you need?" choice is added to the Lead description. Before launch:

1. Check Web-to-Lead is enabled in Setup.
2. Submit a test lead and confirm it lands, then confirm the redirect to `/thanks/`.
3. Optional: map "What do you need?" to a custom picklist by renaming the select to its `00N...` field ID.

To use a different form service, change `quoteForm.action` in `src/config/site.ts`.

## Photos (do this before go-live)

Photos currently load from the old site's `/content/wp-content/uploads/` folder. Before the old site is switched off:

```bash
npm run images:pull                       # copies every photo into public/img
PUBLIC_IMAGES_LOCAL=true npm run build    # set this env var in your host too
```

## Before launch checklist

- [ ] Pull images locally (above)
- [ ] Test the quote form end to end
- [ ] Confirm GTM container `GTM-MFDWH4Z` is still the right one
- [ ] Add 301s for any old URLs not covered (the old site had a `/shop` link)
- [ ] Submit `sitemap-index.xml` in Google Search Console after DNS switch
