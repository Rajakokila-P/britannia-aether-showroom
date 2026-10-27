# Data and backend decision
Status: not applicable to the current static showroom; no database or custom backend is implemented.

## Current data model
app.js contains four model objects with id, name, category, image, tag, description, finish and tech. id identifies a model locally; category supports performance/luxury/exploration filters. The technology object contains cabin/ride/connect display strings. Edition and mood are transient DOM selections. Contact name, email and message stay in form controls and the generated mailto URL until the visitor opens their email application.

## Persistence, ownership and recovery
No localStorage, sessionStorage, database tables, customer account, server enquiry record or API write exists. Downloaded briefs are files on the visitor's device. The visitor controls sending email; subsequent email handling is outside the website. Source and asset recovery use the repository or a retained ZIP. Reload restores default selections.

## Explicitly not applicable
SQL schema, ER diagram, foreign keys, indexes, ORM, connection strings, migrations, seed scripts, row-level security, database backups and backend deployments are absent by design. Do not add empty migrations or claim these features work.

## Future change gate
If saved configurations or enquiry records become requirements, first define fields, ownership, retention/deletion, authenticated access, service hosting, schema validation, migration/rollback and backup restore tests. This is future work, not an implemented backend.
