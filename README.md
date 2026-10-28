# Britannia Aether
British-inspired fictional automotive concept showroom for a university project. Built with semantic HTML, CSS and vanilla JavaScript. No vehicles, orders, payments or road approval are offered.

[Interactive Frontend Development — screenshots and all 15 areas](https://rajakokila-p.github.io/britannia-aether-showroom/development.html)

## Desktop and mobile screenshots

Captured from the live GitHub Pages homepage on 27 October 2026 using Edge with responsive viewport overrides. These show the initial page view, not a complete accessibility or cross-browser test. The mobile image is a narrow browser viewport, not a physical-device capture.

### Desktop view — 1440 × 1000 CSS-pixel viewport

![Britannia Aether desktop homepage: navigation, headline and Aether Sport concept](docs/screenshots/desktop.jpg)

### Mobile view — 390 × 844 CSS-pixel viewport

![Britannia Aether mobile homepage: wrapped navigation and responsive hero](docs/screenshots/mobile.jpg)

[Open the live showroom](https://rajakokila-p.github.io/britannia-aether-showroom/)

## All 15 project areas

All 15 areas are addressed below. “Not applicable” means the system is not implemented because this static showroom does not require it. It does not mean a working backend or AI service is included.

| # | Area | Document | Current scope |
| --- | --- | --- | --- |
| 1 | Product requirements | [PRD.md](docs/PRD.md) | Documented for static showroom |
| 2 | Design | [DESIGN.md](docs/DESIGN.md) | Documented and implemented in CSS/HTML |
| 3 | Architecture | [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Static data flow and delivery documented |
| 4 | Database/backend | [DATABASE.md](docs/DATABASE.md) | Not applicable; local data model documented |
| 5 | API | [API.md](docs/API.md) | No application API; browser contracts documented |
| 6 | Agents/coding rules | [../AGENTS.md](AGENTS.md) | Coding rules included; runtime agents not applicable |
| 7 | README | [../README.md](README.md) | Current entry point and handoff |
| 8 | Implementation plan | [PLAN.md](docs/PLAN.md) | Dependencies, priorities and release steps |
| 9 | Setup | [SETUP.md](docs/SETUP.md) | Preview, validation and development dependencies |
| 10 | Features | [FEATURES.md](docs/FEATURES.md) | Source mapping and acceptance behavior |
| 11 | Authentication/security | [AUTHENTICATION.md](docs/AUTHENTICATION.md) | Public access decision and trust boundaries |
| 12 | MCP | [MCP.md](docs/MCP.md) | Not applicable; rationale and future gate |
| 13 | Integrations | [INTEGRATIONS.md](docs/INTEGRATIONS.md) | Actual connections and failure boundaries |
| 14 | Testing/QA | [TESTING.md](docs/TESTING.md) | Repeatable suite plus manual coverage |
| 15 | Debugging | [DEBUGGING.md](docs/DEBUGGING.md) | Diagnosis, recovery and report template |

## Start here

- [All 15 areas](docs/COVERAGE.md): current documentation and explicit not-applicable decisions.
- [Requirements](docs/PRD.md), [design](docs/DESIGN.md), [architecture](docs/ARCHITECTURE.md).
- [Setup](docs/SETUP.md), [testing](docs/TESTING.md), [fresh verification](docs/VERIFICATION.md), [debugging](docs/DEBUGGING.md).

## Features
Explore Aether Sport, Windsor Halo, Nomad and Albion Phoenix; filter editions; open detail dialogs; switch technology panels; compare concepts; configure edition/cabin mood and download a local text brief. Contact prepares an email draft that the visitor must send manually. No enquiry is submitted to a server or saved by the website.

## Structure
site/index.html is the showroom homepage; site/showroom.html is its compatibility alias. site/portfolio.html is separate and not linked from the homepage navigation. site/showroom-case-study.html explains the implemented website. site/legal.html contains disclosures. site/app.js and contact.js handle browser behavior; assets/ holds supplied images. docs/ contains current specifications and labelled historical reports. scripts/ contains source/document checks; tests/ contains browser tests. .github/workflows/ retains source checks and Pages deployment.

## Run
```sh
python -m http.server 8000 --directory site
```
Open http://localhost:8000. No application build or package installation is required. Use `py` on Windows if necessary.

## Validate
```sh
python scripts/check.py
python scripts/check_docs.py
node --check site/app.js
node --check site/contact.js
```
For optional development-only browser dependencies and `node tests/browser.cjs`, see SETUP.md. Source checks alone do not prove browser behavior or accessibility.

## Testing and verification

**Last checked: 28 October 2026. Overall result: partial verification.** Source and documentation checks passed. The automated browser suite was attempted but could not start because the required Chromium executable was unavailable. A successful source check or deployment does not establish that every interactive feature, browser or accessibility requirement passes.

**Tested source:** [commit 90677bf](https://github.com/Rajakokila-P/britannia-aether-showroom/commit/90677bf58e2ef545be8fc27172bb620a94487e08). All 60 repository files in the local test copy matched that commit's Git blob hashes before this README-only update. Local environment: Python 3.12.14 and Node.js 24.22.1. GitHub CI is configured for Python 3.12 and Node.js 22.

### Check / result summary

| Check | Result |
| --- | --- |
| JavaScript syntax: `site/app.js` and `site/contact.js` | **Passed** — both `node --check` commands exited successfully on 28 October. |
| Browser test script syntax: `tests/browser.cjs` | **Passed (syntax only)** — does not establish that its assertions execute successfully. |
| Local HTML file references, internal anchor targets and unique IDs | **Passed** — `python scripts/check.py`, exit 0. |
| Supplied social-link targets and legal references | **Passed (source checks)** — expected targets are present; external destination availability was not tested. |
| Fictional telephone is not a callable link | **Passed** — included in the source-check script. |
| All 15 documentation areas and current Markdown link targets | **Passed** — `python scripts/check_docs.py`, exit 0. Optional services remain explicitly not applicable. |
| Homepage and `showroom.html` compatibility route remain identical | **Passed** — byte-for-byte parity checked by the documentation script. |
| GitHub Actions website checks for the tested commit | **Succeeded** — [view source-check run](https://github.com/Rajakokila-P/britannia-aether-showroom/actions/runs/40500570906). This workflow does not run the browser acceptance suite. |
| GitHub Pages deployment for the tested commit | **Succeeded** — [view deployment run](https://github.com/Rajakokila-P/britannia-aether-showroom/actions/runs/40500570835). Run outcome rechecked on 28 October. |
| Automated browser acceptance suite | **Blocked by environment** — `node tests/browser.cjs` exited 1 at Chromium launch; no acceptance group executed. |
| Live development page: screenshots load, 15 areas appear and a disclosure expands | **Previously observed on 27 October** — limited manual browser evidence from the preceding update; not rerun on 28 October. |
| Desktop and mobile screenshots in this README | **Evidence available** — captured on 27 October; screenshots alone do not prove responsive or accessibility compliance. |
| W3C HTML/CSS validation and automated accessibility audit | **Not completed in this verification.** Source-link checks are not W3C validation. |
| Full keyboard, screen-reader and physical-device checks | **Pending.** No complete accessibility or device pass is claimed. |
| Cross-browser testing and fresh Lighthouse/performance measurements | **Pending.** Earlier dated reports are historical evidence only. |
| Login, password recovery, database isolation, server API, runtime agents and MCP | **Not applicable** — these services are not implemented in this static concept showroom. |
| Automatic email delivery, payments and orders | **Not applicable** — contact prepares a local email draft; no message, payment or order is submitted by the website. |

### Interactive acceptance coverage

The existing [browser test suite](tests/browser.cjs) is designed to check the following behaviours. **Every row below remains unverified by automated browser execution in the 28 October run**, because browser launch failed before the first assertion.

| Requirement | Expected behaviour covered by the existing suite |
| --- | --- |
| R1 — Collection filters | Four models initially; Performance shows Sport/Phoenix, Luxury shows Windsor Halo, Exploration shows Nomad, and All restores four; count announcements and selected state update. |
| R2 — Model details | Each model opens the correct dialog; Escape and Close dismiss it; Personalise selects Nomad and focuses the edition control. |
| R3 — Technology panels | Cabin, ride and connected-journey headings update, with exactly one selected technology control. |
| R4 — Configurator and download | Selecting Nomad and Focused updates the summary; the downloaded brief contains those selections and concept disclaimers, with the expected filename. |
| R5 — Contact draft | Required, invalid-email and whitespace-only inputs do not produce a draft; valid text is URL-encoded; editing invalidates the draft. Checked on the homepage, showroom alias and portfolio. No email is sent. |
| R7 — Responsive overflow | Homepage, showroom alias, portfolio, case study and legal page are checked at 390, 768 and 1440 CSS pixels for document overflow. This is not a complete visual or accessibility audit. |
| Runtime/network behaviour | The tested journeys must produce no page JavaScript exceptions or attempted external requests. This is not a complete HTTP-response or security audit. |

**Coverage gap:** `development.html` (R9) is not included in the current automated browser suite. Its 15 areas and screenshot display have limited earlier manual evidence, but responsive and keyboard checks for that page remain pending. R8 concept disclosures are partly exercised by download assertions; a full content review is still separate.

### Reproduce the checks

From the repository root:

```sh
python scripts/check.py
python scripts/check_docs.py
node --check site/app.js
node --check site/contact.js
node --check tests/browser.cjs
node tests/browser.cjs
```

The first five commands passed in the 28 October run. The final command requires the development-only Playwright dependency and its browser. Follow [SETUP.md](docs/SETUP.md) to install them, or set `CHROMIUM_PATH` to an existing compatible Chromium executable. The suite starts and stops its own local server.

Observed blocker:

```text
browserType.launch: Executable doesn't exist at
/root/.cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell
```

After resolving the browser dependency, rerun the suite and record its actual results before changing any blocked row to passed. Complete the pending manual, validation and accessibility checks separately.

See [TESTING.md](docs/TESTING.md) for the test plan and [VERIFICATION.md](docs/VERIFICATION.md) for the earlier 27 October evidence and limitations. This section is the newer 28 October verification record.

## Scope and privacy
No database, login, application API, AI-agent runtime, MCP, analytics, automatic email or payment service is installed. The 15-area documentation explains those decisions. GitHub Pages serves public files and may process hosting logs. Vehicle images are speculative AI-generated imagery supplied by the creator. Mood selections do not render new images. Business address/phone details are fictional samples. Legal information is not a compliance certification.

## Contributing and roadmap
Read AGENTS.md and PRD.md, make a focused change, keep both showroom routes consistent, run validation and browser checks, then update affected documentation. Report bugs using DEBUGGING.md. Remaining manual work includes cross-browser/assistive-technology review and external-link checks. Backend/AI expansions require new requirements. A résumé, custom domain and analytics are not required for this university site.

## Deployment and replacement
The existing Pages workflow publishes site/ on main after validation. This replacement archive updates project source only; it does not itself publish. Back up your existing project, extract this archive and use the included project folder as the replacement. If using Git, review the changes and retain your .git directory. Do not upload node_modules. A separate original Sites deployment is not changed by the GitHub workflow.

## Evidence and licence
Fresh results are in docs/VERIFICATION.md. Earlier dated Lighthouse reports remain historical and must not be presented as newly measured. No open-source licence has been selected; public availability does not grant additional reuse rights to code, branding or imagery.
