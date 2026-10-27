# API and browser contracts
Status: no application HTTP API or external API integration. There is no base API URL, version, endpoint catalogue, bearer token or webhook.

## Implemented browser contracts
Filter input is all/performance/luxury/exploration; output is visible model cards and an announced count. Edition input is sport/windsor/nomad/phoenix and mood is Serene/Focused/Immersive; output is a summary and a UTF-8 text brief named Britannia-Aether-<id>-concept.txt. Blob/object URLs create downloads locally and are revoked after use.

Contact input is required name (maximum 100), email (maximum 254, browser email validity) and message (maximum 1500). Name/message must remain nonblank after trimming. Output is a mailto draft with encoded subject/body, not a POST request. Validation failures retain the form and do not create a new valid draft. Editing clears the previous draft.

## External boundaries
GitHub Pages serves static assets; links navigate to social/reference sites. No remote API keys, paid calls, rate limits, pagination, uploads or application response codes apply. The browser and hosting provider handle ordinary static HTTP errors.

## Future API requirements
Before adding server delivery, specify request/response schemas, server validation, abuse protection, authorization, error codes, timeout/retry behavior and secrets outside browser code. Revisit security and privacy documentation before release.
