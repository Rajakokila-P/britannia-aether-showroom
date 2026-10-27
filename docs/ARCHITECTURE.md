# Architecture
## Decision and boundaries
Use semantic HTML, CSS and vanilla JavaScript because the project is a public, static concept showroom. A framework, custom application server and customer database would add operational work without supporting current requirements. Python is a local preview tool, not an application backend.

## Files and data flow
site/index.html and site/showroom.html load style.css, app.js and contact.js. app.js holds four model records and technology content, renders cards, handles filtering and dialogs, and generates local text downloads via Blob/object URLs. contact.js validates DOM inputs and builds an encoded mailto link. portfolio.html loads portfolio.css and the contact script. The legal and case-study pages are static HTML. Assets are local images.

Visitor → static host → HTML/CSS/images/scripts → local DOM state → local download or email-app draft. No application network API or storage write occurs. Social/reference links navigate to other sites.

## Security and operations
Public source and static content contain no application secrets. User text is encoded for mailto rather than inserted into HTML. Existing innerHTML templates consume fixed project strings, not submitted contact text. Keep that boundary. Hosting logs and headers belong to the hosting provider. There are no application roles, sessions, tokens or migrations.

## Delivery and errors
.github/workflows/check.yml runs source checks on changes; pages.yml validates then publishes site/ on main. docs/ and tests are not public website assets. The independent original Sites deployment is not updated by this archive. Syntax/reference failures must block release. Browser interaction tests are an additional manual release command described in TESTING.md.

## Evolution
Add backend/API/database/authentication designs only after new requirements are approved. Document hosting, secret management, retention, authorization, migrations, backup and failure handling before shipping them. See DATABASE.md, API.md, AUTHENTICATION.md and MCP.md for current not-applicable decisions.
