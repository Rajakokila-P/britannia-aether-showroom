# Debugging and troubleshooting
## Method
Reproduce on a local HTTP preview, record page/viewport/input, open browser Console and Network, isolate the first failing script or asset, fix one cause, then rerun source and browser checks. Never paste secrets or personal enquiry contents into bug reports.

| Symptom | Likely cause | Diagnosis and recovery |
| --- | --- | --- |
| No cards or configuration updates | app.js missing or runtime error | Confirm script request is 200, inspect first Console error, run node --check and restore expected IDs |
| Image missing | Wrong filename/case or missing responsive variant | Inspect Network 404 and src/srcset; verify assets and rerun reference checks |
| Contact draft absent | Invalid/blank field or contact.js error | Inspect browser validation; enter nonblank name/message and valid email; inspect Console |
| Email app does not open | No mail client registered | Use direct email address and copy message; website cannot guarantee a local mail handler |
| No message received | Draft was not sent or mail delivery issue | The site sends nothing automatically; check the visitor's email app and sent folder |
| Download not visible | Browser download policy/location | Check downloads panel; retry; confirm chosen edition/mood and filename |
| Local server will not start | Python unavailable or port in use | Reopen terminal after installing Python, use py on Windows, or use another port |
| Browser suite cannot launch | Playwright/browser dependency unavailable | Follow SETUP.md; set CHROMIUM_PATH for a compatible existing browser |
| GitHub deployment failed | Workflow check, permission or Pages configuration | Inspect failing job, run identical checks locally, confirm Actions publishing source |
| Old layout after upload | Cached asset or wrong deployment | Hard reload, inspect served source, check deployed revision; separate Sites deployment is independent |

## Reporting template
Record date, source revision/archive, page, browser/version, viewport, steps, expected result, actual result, redacted Console/Network error and severity. Use High for blocked core journeys, Medium for bounded malfunction and Low for limited cosmetic issues. Add a reproducible regression test before a fix when practical.

## Recovery and prevention
Keep prior source backups; restore approved files rather than editing deployed assets manually. Preserve index/showroom parity. Review links and keyboard behavior after changes. There are no server/database/MCP logs or migrations to troubleshoot; revisit these instructions if those systems are introduced. No external error-tracking service is installed.
