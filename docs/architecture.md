# Architecture and pipeline

## Current website

```mermaid
flowchart TD
  Visitor[Desktop or mobile visitor] --> Hosting[Private Sites hosting]
  Hosting --> HTML[HTML pages]
  HTML --> CSS[Responsive CSS]
  HTML --> Images[Vehicle imagery]
  HTML --> JS[Vanilla JavaScript]
  JS --> Filters[Edition filters and model dialogs]
  JS --> Panels[Technology panels]
  JS --> Config[Concept configurator]
  Config --> Download[Local text download]
  HTML --> Legal[Company and UK legal page]
  Legal --> Sources[GOV.UK and Ofcom sources]
  HTML --> Contact[Sample contact and non-linked social labels]
```

There is no custom application backend or database. The hosting provider may process access and authentication information. Google Fonts receives external requests. The configurator does not send selections to a sales service.

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

## Sites publication workflow

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
