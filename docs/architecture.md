> Historical document retained for traceability. Current specification and coverage: [COVERAGE.md](COVERAGE.md). Current homepage is index.html (showroom); portfolio.html is separate. Résumé is intentionally excluded. Earlier audit scores are historical, not rerun by this update.

# Architecture and pipeline

## Current website

```mermaid
flowchart TD
  Visitor[Desktop or mobile visitor] --> Hosting[Public GitHub Pages hosting]
  Hosting --> HTML[HTML pages]
  HTML --> CSS[Responsive CSS]
  HTML --> Images[Vehicle imagery]
  HTML --> JS[Vanilla JavaScript]
  JS --> Filters[Edition filters and model dialogs]
  JS --> Panels[Technology panels]
  JS --> Config[Concept configurator]
  Config --> Download[Local text download]
  HTML --> Form[Contact form]
  Form --> Draft[Browser prepares mailto draft]
  Draft --> Email[Visitor sends through their email app]
  HTML --> Legal[Company and UK legal page]
  Legal --> Sources[GOV.UK and Ofcom sources]
  HTML --> Contact[Project email, sample address and external social links]
```

There is no custom application backend or database. The hosting provider may process access and authentication information. System fonts avoid external font requests. The configurator does not send selections to a sales service.

## GitHub validation pipeline

```mermaid
flowchart LR
  Edit[Edit source] --> Push[Push or pull request]
  Push --> CI[GitHub Actions]
  CI --> Syntax[JavaScript syntax check]
  CI --> References[HTML references and content checks]
  Syntax --> Review[Review results]
  References --> Review
```

## GitHub Pages deployment pipeline

```mermaid
flowchart LR
  Main[Push to main] --> Validate[JavaScript and HTML validation]
  Validate --> Upload[Upload site directory as Pages artifact]
  Upload --> Deploy[Deploy to GitHub Pages]
  Deploy --> Public[Public github.io website]
```

The `pages.yml` workflow publishes only after validation succeeds. It uses GitHub's Pages deployment token; no personal credentials are stored in the repository. Pages serves static files with no application backend or database. The architecture and testing documents remain in the GitHub `docs/` directory.

## Separate original Sites publication workflow

```mermaid
flowchart LR
  Source[Prepare Sites source] --> Preview[Local preview]
  Preview --> Tests[Browser interaction and layout checks]
  Tests --> Sync[Commit and push Sites source]
  Sync --> Archive[Package static assets]
  Archive --> Version[Save version]
  Version --> Deploy[Private deployment]
  Deploy --> Verify[Confirm deployment success]
```

The GitHub and Sites repositories are separate. GitHub checks do not automatically deploy to Sites. Hosting identifiers, temporary credentials and machine-specific tooling are excluded from this source export.
