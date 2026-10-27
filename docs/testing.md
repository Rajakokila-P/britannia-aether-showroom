> Historical document retained for traceability. Current specification and coverage: [COVERAGE.md](COVERAGE.md). Current homepage is index.html (showroom); portfolio.html is separate. Résumé is intentionally excluded. Earlier audit scores are historical, not rerun by this update.

# Testing record

## Browser checks performed before the GitHub export

On 23 October 2026, the site was checked locally using Playwright with Microsoft Edge:

- No page-level horizontal overflow at 375px and 1440px widths.
- Performance filtering displayed two matching editions.
- Model dialogs opened; Escape dismissed them.
- Edition and cabin-mood selections updated the concept summary.
- A Nomad concept text download was generated successfully.
- Technology panels changed their visible content.
- All four vehicle cards included a legal-information link.
- A model dialog's legal link navigated to the legal page.
- Four social labels had no anchor links.
- Sample telephone details had no callable telephone link.
- Legal page included the expected GOV.UK source links.

JavaScript syntax checks passed. Desktop screenshots were inspected. The showroom overview screenshot predates the legal/contact addition; the separate contact screenshot shows the later addition.

## Repository checks

`scripts/check.py` checks local HTML references, fragment IDs, duplicate IDs, expected social links and legal references. `node --check site/app.js` checks JavaScript syntax. These commands run in GitHub Actions.

## Limits

This is not a full WCAG audit, multi-browser certification, vehicle assessment or legal review. Live government guidance can change. External links require periodic review. There is no backend or payment flow to test. The sample phone, address and email must not be treated as real business contacts.
