# Implementation and maintenance plan
Updated 27 October 2026. This is a task/dependency plan, not a claim of recorded development hours.

| Phase | Deliverable | Dependency | Priority | Status |
| --- | --- | --- | --- | --- |
| Scope | PRD, concept boundaries and page inventory | Owner project direction | High | Documented |
| Design | Responsive layout, imagery, controls and design guide | Scope | High | Implemented/documented |
| Browser features | Filters, dialogs, technology, configurator/download | Layout and model data | High | Implemented |
| Contact | Validated email draft with accurate messaging | Contact requirements | High | Implemented |
| Documentation | All 15 areas with explicit not-applicable decisions | Source review | High | Added in this update |
| Verification | Source checks and repeatable browser suite | Features/docs | High | See VERIFICATION.md for actual execution |
| Release | Review checks, merge/publish site/ using existing workflow | Verification and owner release decision | High | Not performed in this update |
| Maintenance | Link review, manual accessibility and cross-browser checks | Release candidate | Medium | Ongoing |

## Working method
Make one focused change, run source checks, run browser tests, inspect keyboard/mobile behavior and update affected documents. Keep index.html and showroom.html consistent. Preserve speculative-product disclosures. Do not bundle runtime-service expansion into documentation maintenance.

## Deferred work
Database, API server, login, AI-agent orchestration, MCP, analytics, payment and automatic email delivery remain outside scope. A custom domain and résumé are not required for this university website. Any future scope change needs acceptance criteria and an estimate before implementation.

## Release and rollback
Keep a copy or Git revision of the prior source. Publish only site/. If a release fails, restore the previous approved revision through the existing workflow. This archive does not modify the live website or automatically update the separate original Sites project.
