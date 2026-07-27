# Garcia Handyman Services

Fast, mobile-first, 5-page demo site for **Garcia Handyman Services** (full-service general contractor, Atlanta). Styled in a "Trusted Contractor" palette — navy `#16263f`, gold `#c9a24b`, steel `#2f4a6b`, bone `#f4f1ea` — distinct from the olive/rust LRHS site to match the family-owned-but-corporate-ready positioning.

## Pages
| File | Page |
|------|------|
| `index.html`  | Home (hero, stats, services grid, why-Garcia, BBB + review teaser, CTA) |
| `services.html`| Services (7 anchored sections + Service schema) |
| `about.html`  | About (family-named positioning, credentials, service area) |
| `reviews.html` | Reviews (BBB A+ badge + testimonials — the gap the old site had) |
| `contact.html`| Get a Quote (form with photo upload + contact sidebar) |

Shared: `assets/css/styles.css`, `assets/js/main.js`, `assets/img/` (logo, favicon, hero texture).

---

## ⚠️ Before Launch — 5 Things

### 1. Resolve the conflicting phone numbers (HIGH priority for SEO)
The lead data lists **three** different numbers:
- `(404) 520-5958` — lead sheet  ← **used as primary on this site**
- `(470) 543-7663` — site click-to-call
- `(404) 259-7999` — BBB listing

Pick **one** number and make it identical across the site, Google Business Profile, BBB, and Facebook. Mixed numbers fragment your local rankings and erode trust. I wired `(404) 520-5958` everywhere — change it in all 5 HTML files (search `tel:+14045205958` and the displayed number) if you choose a different one.

### 2. Wire up the quote form (currently demo only)
Like LRHS, `#quote-form` validates + shows success but doesn't send. Fastest fix: Formspree / Web3Forms / Basin (free tiers handle file uploads). Point the form action at the endpoint, or keep the JS handler and `fetch()`-POST. Field names are set for a scheduling tool later.

### 3. Replace placeholder testimonials with real reviews
`reviews.html` shows 4 clearly-marked placeholder testimonials. Pull verified ones from BBB, Facebook, Google, or past clients. The BBB A+ badge is real (file opened 2019) — keep it, link to the actual BBB profile.

### 4. Confirm details
- LLC name: "Garcia Handyman Services LLC" (from profile)
- Address `4717 Roswell Rd NE, Atlanta, GA 30342` (from profile)
- Email `info@handymanservicesga.com` (from profile) — wire into the form + footer
- Facebook `facebook.com/GarciaHandymanServices1` (linked in footer/About)
- Owner name was **not** in the profile — left generic ("family-named"). Add if known.

### 5. Replace logo if they have a real one
The logo is AI-generated in the navy/gold palette (GHS seal, house+wrench). Swap in their real mark if they have one.

---

## Local preview
```
cd ~/garcia-site && python3 -m http.server 8000
# open http://localhost:8000
```

## Tech notes
- Semantic HTML, mobile-first, no build step/framework.
- Schema: `HomeAndConstructionBusiness` + `Service` (services) + `AggregateRating`/`Review` (home) + `AboutPage`/`ContactPage`/`CollectionPage` (reviews).
- Reviews are placeholder static cards — swap in real ones.
- Scroll-reveal gated behind `.js` class so content is visible without JS.
