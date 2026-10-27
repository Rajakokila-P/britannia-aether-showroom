# Authentication, security and privacy
## Authentication decision
All website pages are public. There is no registration, login, account, password reset, JWT/OAuth integration, session cookie, protected application route or user role. Authentication is not required for the current showroom. GitHub repository access and Pages deployment permissions are hosting/development concerns, not visitor accounts.

## Trust boundaries
Vehicle/technology HTML templates use fixed project-owned strings. Never insert visitor input or third-party responses into innerHTML. Contact fields are encoded into a mailto URL and shown as a link; browser validation is usability protection, not a server security boundary. External links using a new tab use rel=noopener noreferrer. No API secret belongs in HTML, JavaScript, a public ZIP or a committed environment file.

## Data lifecycle
The site does not save submitted enquiries, configurations or accounts. Visitors must explicitly send their email in their own app. Email providers then process that message under their own arrangements. Hosting may process access logs. Avoid sensitive information in enquiries. No analytics integration is installed.

## Checks
Test invalid email, blank/whitespace fields, special characters, draft invalidation and absence of accidental network submissions. Review new external dependencies before adoption. Keep published sample phone/address and concept notices accurate. Browser tests do not certify complete security or legal compliance.

## Future authenticated functionality
Before adding accounts, design server-side authorization, secure sessions, password hashing or a managed identity service, CSRF protections where applicable, rate limiting, verification/recovery flows, deletion and retention. Add negative authorization tests. These are future requirements, not current protections claimed by the project.
