# Portfolio redesign — requirements and handoff

The new `site/index.html` presents BRITANNIA Aether as a restrained project portfolio while retaining its automotive concept identity. The original interactive experience remains at `site/showroom.html`. Downloaded source files were copied into this workspace; the Downloads copy was not modified.

## Implemented
- Clear headline, value proposition, project and contact calls to action.
- About section, four expandable design studies with problem, scope, stack, concept architecture and outcome.
- Project process timeline, implemented technology stack and three technical notes.
- Existing project email, GitHub repository, supplied social channels and email-draft form.
- Responsive grid layouts, semantic landmarks, keyboard focus, native disclosure controls and reduced-motion support.
- Page title, description, Open Graph metadata and favicon.
- System fonts, lazy-loaded project images and compressed WebP portfolio images.
- Original showroom filters, dialogs, comparison, configuration and brief downloads retained.

## Content needed for a personal engineer portfolio
No verified employment history, qualifications, impact metrics, personal location, LinkedIn profile or resume was supplied. These are deliberately not fabricated. Supply them before adding an employment timeline, LinkedIn link and resume download. The project process is not presented as employment experience. The four studies belong to one project, not four independent software products.

## Stack decision
Preserved the existing HTML/CSS/JavaScript stack: no build or package installation needed. Next.js/React/TypeScript/Tailwind migration was not performed. Framework options in the brief were treated as recommendations rather than a required migration.

## Verification — 25 October 2026
- `python scripts/check.py`: PASS, internal references, IDs, fragments, social and legal links.
- `node --check site/app.js`: PASS.
- `node --check site/contact.js`: PASS.
- Browser preview attempted; local socket access was denied and the in-app browser timed out. Visual layout, browser interactions, mobile behaviour and Lighthouse scores are not verified.
- No deployment, domain purchase or analytics setup was performed. Existing GitHub Pages pipeline is retained; its next deployment includes the new homepage and showroom page.

## Preview and release
Run `python -m http.server 8000 --directory site` from the project root and open http://localhost:8000 in a browser. Test at desktop, tablet and mobile widths; verify the case studies, navigation, email draft, showroom filters, dialogs and downloads. Check Lighthouse before release. Publish the `site/` directory through the existing GitHub Pages workflow when ready. The Open Graph image uses the existing GitHub Pages hostname; update it if hosting changes.

## Follow-up quality review
The earlier browser-access restriction was resolved. See [quality audit](quality-audit.md) for measured scores, verified fixes and current browser evidence. Publication is now explicitly authorised by the project owner.
