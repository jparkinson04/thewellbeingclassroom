# The Wellbeing Classroom — website project

## What this is
Website for **The Wellbeing Classroom**, founded by **Clare Blackmore**, a BACP Registered
Counsellor with 10+ years' experience. She delivers in-person mental health & wellbeing
workshops to schools across Yorkshire (South Yorkshire, Wakefield, Pontefract and beyond):
pupil workshops, DBT skills groups, INSET staff training and parent workshops.

**Audience/buyer:** headteachers, SENCOs, DSLs, wellbeing leads and pastoral teams —
NOT therapy clients. The site must feel credible and safeguarding-aware, but warm and
energetic, never clinical or corporate.

## Current state
- `index.html` — finished one-page site with all approved content. Treat as the design
  reference: any new page must match its look exactly.
- `styles/tokens.css` — brand colours & fonts. **All colours live here.** Default palette
  is "Rose & Mint"; three approved alternates are commented at the bottom of the file.
  Never hard-code hex values in components.
- `styles/main.css` — the design system (see below).
- `content/site-copy.md` — the full approved messaging, organised by page/section.
  This is the single source of truth for copy. Do not invent claims, qualifications,
  testimonials or statistics that aren't in it.


## Logo — "The W Rise"
A "W" for Wellbeing drawn as one continuous line that dips, recovers, and ends higher
than it started, finished with a single pink dot. Assets in `assets/`:
- `w-rise-logo.svg` — primary mark (bare line + dot)
- `w-rise-badge.svg` — badge version for favicon / social avatars / sizes under 24px

Canonical inline SVG (use exactly this geometry everywhere):
```html
<svg viewBox="0 0 64 64" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 24 L18 48 L29 30 L39 48 L52 14" stroke="var(--ink)" stroke-width="5.5"/>
  <circle cx="52" cy="14" r="5" fill="var(--primary)" stroke="var(--ink)" stroke-width="2.6"/>
</svg>
```
Rules: never rotate, outline, shadow or gradient the mark; only the dot recolours
between variants (line stays --ink, or white when reversed on dark/primary panels);
below 24px always use the badge version; keep clear space of one peak-height around it.

## The design system ("notepad")
The visual identity is a school exercise book:
- Ruled-paper background (repeating gradient) with a vertical margin line down the left.
- Chunky 2.5px `--ink` borders with hard offset shadows (`4–6px 4–6px 0 var(--ink)`).
- Slightly rotated elements: sticky notes, "washi tape" strips, handwritten Caveat
  annotations in `--accent`, highlighter swipes via `.hl`.
- Radial "glow" gradients (`--glow-a`/`--glow-b`) behind the hero and CTA only.
- Fonts: Bricolage Grotesque (display), Nunito Sans (body), Caveat (handwriting).
- School-vernacular motifs are encouraged (report card, register strip, timetable,
  grades like "A*") — playful but never childish; this sells to headteachers.

## Conventions
- Plain HTML + CSS. No frameworks, no build step, no JS unless a feature truly needs it
  (e.g. a mobile nav toggle — fine, keep it small and dependency-free).
- British English throughout (organise, programme, enquire).
- Semantic HTML, one `h1` per page, alt text on all images, visible focus states,
  colour-contrast safe (check text on `--primary` panels when switching palettes).
- Mobile-first mindset: the existing breakpoint is 920px; test everything at 380px width.
- Placeholders are clearly marked with HTML comments (`<!-- PLACEHOLDER ... -->`):
  testimonials, phone number, email and domain. Keep them marked until Clare confirms
  real details. Never fabricate testimonials.
- Pricing (from £175 workshop / £350 half-day / £600 full-day / £450–£750 INSET /
  DBT on request) must match `content/site-copy.md` exactly wherever shown.

## Roadmap (in rough priority order)
1. **Mobile nav** — hamburger toggle for `.nav-links` under 920px.
2. **Split into pages** once the one-pager is approved:
   `index.html` (home) · `workshops.html` (full pupil menu + workshop detail blocks) ·
   `dbt-skills-groups.html` · `inset-training.html` · `parent-workshops.html` ·
   `about.html` · `pricing.html` · `contact.html`. Shared nav/footer on every page;
   keep the register strip on home only.
3. **Contact form** — static-friendly (e.g. a form service the user chooses); until then
   keep the mailto link.
4. **Real photos** — swap emoji icons for photos of Clare/sessions when supplied;
   keep the tape/rotation treatment on images.
5. **Enquiry pack / brochure page** — Clare wants an A4 brochure ("prospectus" feel);
   a print-styled page or downloadable PDF could come from the same content.
6. SEO basics per page: unique titles/descriptions, Open Graph tags, LocalBusiness
   structured data (Yorkshire service area).

## Things to ask the user (don't guess)
- Final colourway (default Rose & Mint vs the commented alternates — Clare has also
  mentioned liking "sage green and blush", which Rose & Mint approximates).
- Real contact details, testimonials and photos.
- Domain + hosting choice before adding anything host-specific.
