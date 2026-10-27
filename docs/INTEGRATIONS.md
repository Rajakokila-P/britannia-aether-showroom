# Integrations
| Connection | Actual behavior | Credentials/configuration | Failure handling |
| --- | --- | --- | --- |
| GitHub Pages | Serves static site/; existing Actions workflow publishes | Repository Pages settings and workflow-scoped deployment permissions | Inspect Actions logs; restore prior approved revision |
| Email application | Encoded mailto draft, explicitly sent by visitor | Public project email in contact.js and markup; no SMTP credentials | Direct email/copy message fallback; no claim of delivery |
| Social/reference links | Opens external destinations | Supplied URLs in HTML | Periodically check URLs manually; no retry/payment/API integration |
| Local downloads | Browser Blob/object URL | None | Check browser download permissions; try again |

## Not integrated
No OpenAI API, CRM, payment gateway, analytics, cloud database, automatic response service, webhook or application cloud-storage upload exists. No API key setup, quota or paid usage is required.

## Adding a service
Define purpose, data sharing/retention, cost, secret storage and required consent first. Use a server boundary for secrets. Document request/response/error contracts and tests in API.md and TESTING.md. Never use a public browser script as a place to hide credentials.

## Verification limits
Source checks validate selected expected external URLs, not remote service availability. This update does not verify ownership, current external content or live deployment success. The historical source-check dates on legal guidance are not updated by documentation maintenance.
