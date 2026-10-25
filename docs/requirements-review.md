# Requirements review — 25 October 2026

Scope: live showroom homepage and portfolio.html. Read-only audit; no production source changes.

## Fresh Lighthouse results

| Device, live showroom | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Mobile | 100 | 100 | 100 | 100 |
| Desktop | 100 | 97 | 100 | 100 |

Mobile LCP 1.5 seconds; desktop LCP 0.3 seconds; both CLS 0. Lab measurements vary. Reports: current-live-mobile.report.html and current-live-desktop.report.html in this directory.

## Design
- Minimal and modern: partial. The separate portfolio is restrained; the owner-selected showroom homepage deliberately uses a large automotive hero and promotional copy.
- Strong typography: present, with clear heading hierarchy. Some captions remain small.
- Light/dark palette: met, with cream sections and dark navy feature panels.
- Consistent spacing/alignment: generally met in inspected views.
- Fast loading: met in fresh live Lighthouse tests; remaining image and cache optimization suggestions are non-blocking.
- Mobile-first responsive design: responsive behaviour verified at 390, 768 and 1440 CSS pixels on both pages, without horizontal page overflow. CSS uses desktop defaults and max-width overrides, so the implementation is not strictly mobile-first.
- Accessible colors/contrast: automated contrast checks pass; this is not a full accessibility certification. Desktop footer legal/contact links fail target-size spacing (14px tall, 22px effective clearance).
- Simple navigation: usable section links, but seven showroom links wrap across rows on mobile; a more compact menu is optional.

## Case studies and professional content
- Title, short summary, problem and stack: present in four portfolio design studies.
- My role: partial; identical generic role text does not specify the creator's individual responsibilities or contribution boundaries.
- Architecture: partial; concept architecture describes imagined vehicle features, not implemented software components, data flow or tradeoffs. A shared architecture note is linked separately.
- Results/metrics: partial; qualitative outcomes are stated, but no measurable engineering results appear within the studies. Verified website performance evidence could be added with dates and test conditions. Do not invent latency, traffic or production metrics.
- Code/demo: met at site level; GitHub repository links and a working showroom demo are provided. All study demo links lead to the same collection section.
- Outcomes rather than features: partial; concept descriptions dominate, with limited evidence of engineering impact.
- Honest scope: generally met; speculative vehicles, AI imagery and lack of road approval are explicit. Individual authorship still needs confirmation.
- Concise technical copy: portfolio largely meets this; showroom copy intentionally serves a design showcase.
- Real projects: one real implemented website with four fictional vehicle design studies, not four independent software projects.

## Launch checklist
- Desktop/tablet/mobile: checked at the widths above. Not exhaustive cross-browser testing.
- Lighthouse: strong fresh results; footer target-size issue outstanding.
- SEO metadata/Open Graph: partial. All pages have titles/descriptions. Portfolio has og:title, og:description, og:type and og:image; the restored showroom homepage has no Open Graph tags. No canonical tags were found; index.html and showroom.html duplicate the showroom.
- Contact: direct email and email-draft form exist. The form does not send messages through a server.
- GitHub/LinkedIn: GitHub links are on the portfolio; LinkedIn absent.
- Resume download: missing; no verified resume supplied.
- Domain/deployment: GitHub Pages is live over HTTPS; no custom domain is configured in the supplied site. A purchase cannot be inferred from repository files.
- Analytics: no application analytics integration found; optional.

## Additional finding
site/legal.html still says fonts are requested from Google Fonts, but style.css uses system fonts with no font import. Update that description to match implementation.

## Verification
- python scripts/check.py: PASS.
- node --check site/app.js: PASS.
- node --check site/contact.js: PASS.
- Live DOM confirms case-study fields, missing LinkedIn/resume, homepage missing Open Graph, portfolio Open Graph present.
- Live browser width checks: no horizontal document overflow at 390, 768 and 1440px for either page.

## Recommended order
1. Increase footer link target sizes and add showroom Open Graph/canonical metadata.
2. Correct the outdated font privacy description.
3. Add one honest software case study for the implemented showroom, with individual role, actual architecture and dated measured outcomes.
4. Add supplied LinkedIn and resume details.
5. Choose a custom domain if wanted; analytics remains optional.

No source edits, purchases or deployments were performed during this audit.

## Follow-up implementation
Footer target sizing, showroom Open Graph/canonical metadata, font wording, a detailed software case study and the owner-supplied LinkedIn profile have now been added. See README.md for the updated checklist. Resume and custom domain remain pending; analytics is optional.

