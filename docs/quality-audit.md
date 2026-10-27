> Historical document retained for traceability. Current specification and coverage: [COVERAGE.md](COVERAGE.md). Current homepage is index.html (showroom); portfolio.html is separate. Résumé is intentionally excluded. Earlier audit scores are historical, not rerun by this update.

# Quality audit — 25 October 2026

Lighthouse 13.5.0 ran against the local HTTP preview with headless Microsoft Edge. Scores are laboratory measurements, not a guarantee of live network performance or full WCAG conformance.

| Page / device | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Homepage / mobile | 100 | 100 | 100 | 100 |
| Homepage / desktop | 100 | 100 | 100 | 100 |
| Showroom / mobile | 99 | 100 | 100 | 100 |

## Fixes verified
- Corrected the homepage logo's accessible-name mismatch; the detailed audit now passes.
- Added responsive 640px WebP variants for smaller screens.
- Reused optimized WebP images throughout the showroom, added image dimensions, deferred below-fold imagery and prioritised its hero.
- Removed blocking Google Fonts requests in favour of system fonts.
- Added the showroom favicon to eliminate its missing-resource console error.
- Showroom mobile performance improved from 74 to 99; homepage mobile improved from 98 to 100.

## Browser checks
- Homepage case study expands to reveal problem, role, stack, architecture and outcome.
- Contact form prepares the expected mailto draft with test data; no email was sent.
- Performance filter displays exactly two editions.
- Model dialog opens and Escape dismisses it.
- Choosing Nomad and Focused updates the image and concept summary.
- Adaptive ride panel switches content.
- Downloaded Nomad text brief contains the selected edition and cabin mood.
- Homepage document has no horizontal overflow at 390px, 768px and 1440px viewport widths.
- Desktop and mobile screenshots captured and reviewed.
- Existing internal-reference checks and JavaScript syntax checks pass.

## Scope and limits
Reports and screenshots are saved locally in `quality-reports/` and excluded from Git. The local development server has no compression or cache policy; GitHub Pages controls production headers. Remaining local cache diagnostics are hosting-related. This is not an exhaustive assistive-technology or cross-browser audit. No personal career claims, LinkedIn profile or resume were invented.

## Requirements follow-up — 25 October 2026
Added homepage sharing/canonical metadata, 44px footer targets, accurate system-font wording, the owner-supplied LinkedIn link and a software case study. Local Lighthouse follow-up: showroom desktop and case-study mobile both score 100 performance, 100 accessibility, 100 best practices and 100 SEO. Footer target-size check passes. The case-study metrics intentionally retain their dated pre-fix live baseline with methodology in performance-evidence.json. Resume remains pending.

