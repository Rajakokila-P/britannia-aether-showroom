# Britannia Aether

British-inspired automotive concept showroom, built with HTML, CSS and vanilla JavaScript.

[Visit the showroom](https://rajakokila-p.github.io/britannia-aether-showroom/) · [Architecture](docs/architecture.md) · [Testing](docs/testing.md)

![Showroom preview](docs/showroom-preview.png)

## About

Explore Aether Sport, Windsor Halo, Nomad and Albion Phoenix through model filters, detailed dialogs, technology panels and a personal concept configurator. The site includes a comparison table, downloadable concept briefs, a UK legal information page and clearly labelled sample contact details.

These are fictional vehicle designs, not production cars. No orders, reservations, payments or road-approval claims are made. Social channels link to accounts supplied by the project creator. Company details are illustrative, not verified registration information.

## Technology

- Semantic HTML, responsive CSS and vanilla JavaScript
- Browser-local interactions and text-file downloads
- Native dialogs and keyboard-accessible controls
- System fonts (no external font requests)
- Public static hosting through GitHub Pages
- No custom backend, customer database or payment processing

## Repository structure

```text
.github/workflows/check.yml  Automated source checks
site/
  index.html                Main showroom
  legal.html                Company and UK legal guidance
  style.css                 Responsive styles
  app.js                    Browser interactions
  assets/                   Creator-supplied vehicle images
docs/
  architecture.md           Architecture and publishing pipeline
  testing.md                Validation record and limits
  contact-preview.png       Sample contact section
  showroom-preview.png      Earlier showroom overview
scripts/check.py            Internal references and content checks
```

## Run locally

Install Python 3, then run from the repository root:

```sh
python -m http.server 8000 --directory site
```

Open http://localhost:8000. No frontend build step or package installation is required. Internet access is needed for external reference links.

## Validate

With Python 3 and Node.js installed:

```sh
python scripts/check.py
node --check site/app.js
```

GitHub Actions runs these checks on pushes and pull requests. Browser interaction testing is documented separately; passing source checks does not certify accessibility or legal compliance.

## Deployment

The `.github/workflows/pages.yml` pipeline validates the source, uploads the `site/` directory and deploys it to GitHub Pages on pushes to `main`. Repository Pages settings use GitHub Actions as the publishing source. The public address is https://rajakokila-p.github.io/britannia-aether-showroom/.

Architecture and testing documentation are available in `docs/` on GitHub. The original Sites deployment remains separate and is not updated by this pipeline. Downloaded concept briefs link to the legal page on the current host.

## Legal information and sample data

The legal page links to GOV.UK guidance covering company disclosures, vehicle approval, driver obligations, online sales, consumer rights, advertising and data protection. Sources were checked on 23 October 2026. It is an informational summary, not a legal-compliance certification or complete sales contract.

Replace fictional company and contact details with verified information before using the website for real trading. The project email links to spraja110880.rk@gmail.com through mailto; replies are handled manually, with no backend or automatic response service. The telephone number is from Ofcom's fictional range.

## Credits

No open-source licence has been selected for this project. Repository availability does not grant additional reuse rights to its code, branding or imagery.

## Contact form

The contact form collects a name, reply email and message to prepare a local email draft addressed to spraja110880.rk@gmail.com. Visitors must send it in their email application. There is no server submission, database storage or automatic reply. A direct email link remains available.

## Showroom homepage and portfolio
The original automotive showroom is restored as the homepage at site/index.html. The project portfolio remains at site/portfolio.html, retained as a separate page, without a link from the showroom homepage. The existing site/showroom.html address continues to work. See [portfolio requirements and handoff](docs/portfolio-requirements.md) for implementation details, missing personal content and verification limits.


## Quality audit
See [the quality audit](docs/quality-audit.md) for Lighthouse results and browser verification of the portfolio and optimized showroom.
## Requirements checklist and follow-up fixes

The showroom remains the homepage. The separate portfolio contains four fictional vehicle design studies and [one implemented software case study](https://rajakokila-p.github.io/britannia-aether-showroom/showroom-case-study.html).

| Requirement | Status |
| --- | --- |
| Minimal and modern | Portfolio is restrained; the owner-selected showroom retains its automotive presentation. |
| Typography, palette and spacing | Clear hierarchy, cream/dark palette and consistent section spacing. |
| Fast loading | Live audit on 25 October 2026 measured performance 100 on mobile and desktop. Lab results vary. |
| Responsive desktop/tablet/mobile | Both existing pages checked at 390, 768 and 1440 CSS pixels without horizontal document overflow. CSS uses desktop defaults with responsive overrides. |
| Accessible colors and controls | Automated contrast checks passed. Footer links now have 44px minimum target height; this is not full WCAG certification. |
| Simple navigation | Company/showroom section links; navigation wraps on small screens. The portfolio link has been removed from the homepage. |
| Case-study title, summary, problem, role, stack and architecture | Implemented software case study documents scope, AI-assisted contributions, actual browser data flow and delivery pipeline. |
| Results and metrics | Dated Lighthouse measurements, LCP and CLS included with audit settings; no invented traffic, revenue or vehicle metrics. |
| GitHub and live demo | Linked from the portfolio and software case study. |
| Honest scope and concise technical content | One real website; four speculative vehicle studies clearly labelled. |
| SEO and sharing metadata | Showroom title/description, Open Graph tags, sharing image and canonical URL added. Legacy showroom URL points canonically to the homepage. |
| Contact | Direct email and local email-draft form; no server-side delivery. |
| LinkedIn | [Owner-supplied profile](https://www.linkedin.com/in/rajakokila-periyathamby-4b3689120/) added to both contact areas. |
| Resume download | Not applicable to this university company website. The public PDF and all CV download links have been removed at the owner’s request. |
| Deployment and custom domain | GitHub Pages deployment configured and live; no custom domain configured. |
| Analytics | Optional; not installed. |

The legal page now correctly states that system fonts are used with no Google Fonts requests. The full original requirements review is recorded in [requirements-review.md](docs/requirements-review.md); its findings describe the pre-fix state.

### Reproducible measurement evidence

[Performance evidence](docs/performance-evidence.json) records the live audit timestamp, revision, device/throttling settings and raw metric values. At revision `4609369`, mobile scores were 100/100/100/100 and desktop scores 100/97/100/100 (performance/accessibility/best practices/SEO). Desktop accessibility identified the footer targets addressed in this follow-up. Mobile LCP was approximately 1.5 seconds, desktop 0.3 seconds, and CLS was 0 on both. These are laboratory results, not guarantees or traffic analytics.

### Follow-up verification
After these fixes, fresh local Lighthouse checks scored 100/100/100/100 for the showroom on desktop and the new software case study on mobile. The footer target-size audit passes, and both footer links measure 44px high. These local follow-up runs are distinct from the dated live measurements used in the case study. Internal reference and JavaScript syntax checks pass.


### This is for University project website — 25 October 2026

The owner clarified that this is a university project website. The CV PDF and all CV download links have been removed from the published site. The showroom homepage and its alternate route no longer link to the separate portfolio page. Existing GitHub Pages hosting is retained; a custom domain and analytics are not required.
