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
| `/standard-robes/` | Standard Robe Configurations and all 26 width pages (now one page: pick type, width, height, layout, then order) |
| `/doors-and-finishes/` | Doors, Colours, White melamine, Edged melamine, Timbergrain |
| `/our-work/` | Projects gallery and every per-system photo page (filterable, with lightbox) |
| `/about/` | About us, Why us, Design process |
| `/new-homes-and-renovations/` | Building a home, Renovating |
| `/reviews/`, `/faq/`, `/contact/`, `/privacy/` | Testimonials, FAQs, Contact, Privacy policy |

Old URLs are 301 redirected in `public/_redirects` (Netlify / Cloudflare format). If hosting on Vercel, port these into `vercel.json`.

## Brand

Follows the existing Just Wardrobes & Storage logo and website.

- **Logo**: `public/logo.png` (supplied artwork) and `public/logo-white.png` (black lettering switched to white for the dark footer). Favicon is the mark cropped from the logo.
- **Colours**: logo cyan `#00AEEF` and logo black `#231F20`. Cyan is for marks and fills (heading bars, lines, ticks, the call-to-action band); text links use `#0F72B0` because cyan text on white fails contrast. Panels are `#F2F2F2`, as on the current site.
- **Type**: Playfair Display for headings and Open Sans for body, as on the current site (self-hosted via Fontsource).
- **Details**: the short cyan bar under headings carries over from the current site. Key photos carry joinery-style dimension lines (`src/components/Dimensioned.astro`).

## Editing content

- Phone, email, address, licence, warranty: `src/config/site.ts`
- Reviews, FAQs, process steps, suppliers: `src/data/content.ts`
- Photos and gallery: `src/data/images.ts`

## Standard robes (price and order online)

`/standard-robes/` lists 165 standard layouts taken from the drawings on the current site: built-in cavity or with end panel, 1200 to 3600mm wide, 1800/2040/2100mm high. Customers pick type, width and height, choose a layout, see the price and place an order. Orders go to Salesforce as a Lead (Lead Source "Website - Standard robe order") with the layout, layout ID, price shown, sliding door request and timing in the description. No payment is taken online; the copy tells customers you'll call to confirm, check-measure and take the deposit.

**Prices**: add them to `src/data/standard-robe-prices.ts`, either one price per size (applies to every layout at that size) or per layout. `npm run robes:list` prints every key. Robes without a price show "Price on request" and can still be ordered.

Layouts come from `src/data/standard-robes.json` (drawing paths); section names are decoded from the drawing filenames (DU drawer unit, LH long hanging, DH double hanging, BOS bank of shelves, and so on) in `src/data/standard-robes.ts`.

To take a deposit online later, add a Stripe Payment Link per layout and swap the order button for it.

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

- [ ] Add standard robe prices
- [ ] Pull images locally (above). This also copies the 165 standard robe drawings
- [ ] Test the quote form end to end
- [ ] Confirm GTM container `GTM-MFDWH4Z` is still the right one
- [ ] Add 301s for any old URLs not covered (the old site had a `/shop` link)
- [ ] Submit `sitemap-index.xml` in Google Search Console after DNS switch
