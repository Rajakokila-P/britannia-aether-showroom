# Setup and initialisation
## Preview without dependencies
Extract the ZIP. Open a terminal in the directory containing README.md, site/ and scripts/. Install Python 3 if unavailable, then run:

```sh
python -m http.server 8000 --directory site
```

On Windows use `py -m http.server 8000 --directory site` if `python` is unavailable. Open http://localhost:8000. Stop with Ctrl+C. No application build, environment file, API key or database is required. VS Code is optional; avoid committing editor-specific machine settings.

## Source checks
Install Node.js (CI uses 22) and Python 3 (CI uses 3.12), then run:

```sh
python scripts/check.py
python scripts/check_docs.py
node --check site/app.js
node --check site/contact.js
```

## Optional browser-test dependencies
These are development-only and do not change the shipped website:

```sh
npm install --no-save --package-lock=false playwright@1.62.1
npx playwright install chromium
node tests/browser.cjs
```

Use the Playwright version recorded in VERIFICATION.md if a different version was used for this update. Browser installation may require internet access and system libraries. The test script starts its own loopback server on an available port and closes it afterwards. CHROMIUM_PATH can point to an existing compatible Chromium executable. It never sends an email or visits external links.

## Deployment
The existing GitHub Pages workflow publishes site/ after its checks. Repository Pages settings must use GitHub Actions. Uploading this ZIP or replacing local files alone does not deploy it. Preserve the existing hosting arrangement; no custom domain is needed.

## First checks and common problems
Confirm all four cards appear, a model dialog opens and a download includes your selections. If port 8000 is occupied use 8001 and the matching URL. If Python/Node is not recognized, install it and reopen the terminal. If browser tests cannot find Playwright/Chromium, complete the development-only steps above. See DEBUGGING.md for further diagnosis.
