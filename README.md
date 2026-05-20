# Prowess Software Services — Website Mockup (Ready to Implement)

**Build date:** 2026-05-18
**Total pages:** 38 (all returning HTTP 200)
**Status:** Ready for developer handoff. Static HTML/CSS/JS — no build step required.

---

## How to deploy

This folder is self-contained. Drop it on any static host (Netlify, Vercel, S3 + CloudFront, GitHub Pages, plain Nginx).

To preview locally:

```bash
cd <this folder>
python3 -m http.server 8765
# Open http://localhost:8765
```

To zip and share:

```bash
cd ..                       # the directory containing this folder
zip -r prowess-website.zip static -x "static/_versions/*"
```

The `_versions/` folder contains progressive snapshots from the design iteration and is **excluded** from the zip — it's not needed for deployment.

---

## File map

### Top-level pages
- `index.html` — Home (video hero retained per direction)
- `services.html` — Capabilities parent (polygon hero)
- `industries.html` — Industries parent (polygon hero, 6-tile grid)
- `customers.html` — Customer stories index (polygon hero)
- `about.html` — About + leadership + recognition + animated stats counter
- `trust.html` — Trust, security, certifications (polygon hero)
- `why-prowess.html` — Differentiation (polygon hero)
- `products.html` — EnterpriseFLOW™ — 4 pillars × 8 accelerators
- `contact.html`, `newsletter.html`

### `/services/` — six capability pages (each with unique polygon shape + Prowess photo)
- `integration.html` — slanted pentagon, amber
- `data.html` — 7-sided crystal, blue
- `ai-agents.html` — chevron, violet
- `migration.html` — trapezoid, orange
- `managed-services.html` — pentagon w/ cut, emerald
- `centre-of-excellence.html` — irregular hexagon, amber

Vendor pages preserved for SEO / inbound campaigns:
- `mulesoft.html`, `informatica.html`, `agentforce.html`, `managed-integration.html`

### `/industries/` — six industry pages
- `manufacturing.html` (uses bespoke `.i-hero__*` design)
- `logistics.html` (polygon hero, trapezoid, blue)
- `healthcare.html` (polygon hero, hex, teal)
- `retail.html` (polygon hero, chevron, orange)
- `financial-services.html` (polygon hero, pentagon, violet)
- `energy.html` (polygon hero, crystal, amber)

### `/customers/` — five named customer stories (each with polygon hero + case-study photo)
- `novelis.html` (hex, amber)
- `ceva-logistics.html` (chevron, blue)
- `syncron.html` (pentagon, emerald)
- `keystone-logistics.html` (trapezoid, orange)
- `rich-products.html` (crystal, violet)

### `/products/` — eight productized accelerators (per the V2 Productized deck)

**Pillar 1 · Migrate**
- `migration-sprint-mulesoft.html`
- `migration-sprint-informatica.html`

**Pillar 2 · Build**
- `implementation-accelerator.html`
- `agent-fabric-builder.html`

**Pillar 3 · Manage**
- `managed-operations-sprint.html` *(new)*
- `enterpriseflow-run.html` *(new)*

**Pillar 4 · Industry Agents**
- `manufacturing-agent-suite.html` *(new)*
- `retail-agent-suite.html` *(new)*

### `/about/`
- `founders.html`

### `/assets/`
Comprehensive — leadership headshots, customer logos, certifications, case-study imagery, hero photography, partner logos, tech logos, videos, brand assets. All photographs used in the polygon-hero treatment are Prowess originals (no stock Unsplash).

---

## Design system

### Polygon hero system
Each major page uses an SVG polygon-clipped photo as the hero visual. Six distinct shapes are defined; capability and industry pages map to their own shape for visual identity within a coherent system.

Cinematic SVG filter pipeline (applied via `feColorMatrix`):
```
0.78 0    0    0  -0.04
0    0.80 0    0  -0.04
0    0    0.82 0  -0.04
0    0    0    1   0
```
Darkens the photo ~20% on average with a slight cool tint — gives a cinematic, editorial finish. Paired with a radial vignette that fades the photo edges to `#050B14` (the section backdrop) for smooth color transitions — no hard rectangle line.

### Animated stats counter (about.html)
IntersectionObserver-triggered count-up animation. Cards hover-lift. Inline `<script>` is self-contained, no external dependencies.

### Color tokens (used inline)
- Navy `#0A1828` / Deep navy `#050B14`
- Amber `#FFB454` / Deep amber `#FF8A4C`
- Emerald `#34D399` / Deep emerald `#047857`
- Blue `#2E5C8A` / Light blue `#B8D4FF`
- Violet `#8557C2` / Light violet `#D9B5FF`
- Teal `#0D9488` / Orange `#F97316`

---

## Schema.org

JSON-LD structured data is present on every major page (Service, Organization, CollectionPage, BreadcrumbList, Review where applicable). Pricing schema has been removed per direction.

---

## Tone & register

All hero copy and section copy is in the Persistent / Cognizant capability-declaring register — verb-led, mission-stated, no rhetoric, no narrative storytelling. Three-tier pricing references have been stripped site-wide.

---

## Known follow-ups (for next iteration)

The following items remain on the punch list for future polish:

1. **Site-wide Persistent/Cognizant register QA** — a line-by-line review pass against the Cognizant / Persistent reference tone.
2. **Full link audit** — verify every internal link resolves (initial HTTP 200 check passes for all 38 known pages).
3. **manufacturing.html** — uses the bespoke `.i-hero__*` design from an earlier iteration; could be unified with the polygon-hero system used on the other 5 industry pages.
4. **about/founders.html** deep page — currently a stub; could be expanded with founder timeline + photo gallery.
5. **Real customer / award photography** — where the design uses contemporary Prowess assets, a final pro photography refresh on hero shots (about-hero-team.jpg in particular) would lift the visual quality further.

---

## Versioned snapshots

The `_versions/` folder contains chronological snapshots from the design iteration:
- `20260517_collage_capabilities/` — early collage-style hero
- `20260517_polygon_heroes/` — pivot to polygon-clipped photo system
- `20260517_prowess_photos/` — swap from stock to Prowess original imagery
- `20260517_industries/` — industries parent + 4 new industry stubs
- `20260517_full_build/` — full site after photo + restructure rounds
- `20260517_round2/`, `20260517_round2b/`, `20260517_round3/` — incremental polish rounds

These are reference-only and **excluded from the zip** via the `-x "static/_versions/*"` flag above.
