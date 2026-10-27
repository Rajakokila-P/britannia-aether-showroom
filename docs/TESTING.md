# Testing and quality assurance
## Layers and requirement mapping
| Requirement/risk | Check | Evidence boundary |
| --- | --- | --- |
| R1 model/filter counts | tests/browser.cjs | Exact visible names and live status |
| R2 dialog and personalization | tests/browser.cjs | All model titles, Escape/Close, selected edition and focus |
| R3 technology panels | tests/browser.cjs | Heading changes and one selected control |
| R4 configuration/download | tests/browser.cjs | Nomad/Focused summary and actual downloaded text |
| R5 contact validation | tests/browser.cjs | Empty, invalid email, whitespace, special-character encoding and edit invalidation on three pages |
| R6 source links and IDs | scripts/check.py | Local src/href, fragments, duplicate IDs and expected external URLs |
| R7 responsive behavior | tests/browser.cjs plus manual review | Five pages at 390/768/1440; overflow only is automated |
| R8 honest content | Source review and brief assertions | Concept disclaimers; not legal/vehicle certification |
| Documentation completeness | scripts/check_docs.py | All area documents exist, current links resolve, showroom alias parity |
| Runtime errors/network | tests/browser.cjs | Page errors and unintended external requests fail the run |

## Run source validation
```sh
python scripts/check.py
python scripts/check_docs.py
node --check site/app.js
node --check site/contact.js
node --check tests/browser.cjs
```

## Run browser acceptance tests
Follow SETUP.md to install development-only Playwright and Chromium. Run `node tests/browser.cjs` from the project root. The suite creates a local static server, uses an isolated browser context, downloads a local concept brief, blocks external requests, and closes the browser/server afterwards. It does not click the mailto link, send email or publish. Nonzero exit means a failure requiring diagnosis; do not retry silently until green.

## CI and deployment
Both existing workflows validate JavaScript, HTML references and current documentation before publishing. The browser suite is a separate release check; it is not installed or run by those workflows. No application build exists. No API/database/authentication tests apply because those systems are absent.

## Manual release checklist
- Tab from skip link through controls; check visible focus, meaningful order, dialog focus restoration and Escape.
- Check screen-reader labels/status announcements, text contrast and 200% zoom.
- Inspect image crops, table scrolling and navigation wrapping on a real phone and tablet.
- Verify Firefox, Safari and Edge where available; Chromium alone is insufficient.
- Check reduced-motion behavior and no-JavaScript contact fallback.
- Test a local mail handler manually without sending to an unintended recipient; explain that a draft is not delivery.
- Review supplied external URLs and concept/legal notices; no current external legal review is implied.
- Record browser/version, date, archive/revision and results. Use DEBUGGING.md's bug template.

## Performance and limitations
Existing Lighthouse results are dated historical measurements. No new score, performance guarantee, WCAG conformance or security certification is inferred from these checks. Coverage is behavior-based, not a claimed percentage. See VERIFICATION.md for the actual latest run and any environment limitations.
