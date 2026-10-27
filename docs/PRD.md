# Product requirements
Current specification: 27 October 2026. This document governs the static university concept showroom; historical audits are not current requirements.

## Problem, audience and value
Visitors need a clear way to explore four fictional British-inspired vehicle designs without mistaking them for available products. The audience is university assessors and visitors interested in the design project. The value is an interactive visual explanation, comparison and downloadable personal concept brief.

## Scope and user journeys
A visitor enters the showroom, filters editions, opens a model dialog, explores technology concepts, compares models, chooses an edition and cabin mood, downloads a text brief, and optionally prepares an email enquiry. A separate portfolio and software case study explain the work.

| ID | Requirement and acceptance criterion |
| --- | --- |
| R1 | Initially show Aether Sport, Windsor Halo, Nomad and Albion Phoenix. Performance shows Sport and Phoenix; Luxury shows Windsor; Exploration shows Nomad; All restores four. Announce the count. |
| R2 | Each Explore control opens the matching dialog. Close and Escape dismiss it; Personalise selects that edition and moves focus to the edition control. |
| R3 | Cabin, ride and connected technology controls update the panel and pressed state. Proposed technology remains labelled speculative. |
| R4 | Changing edition or cabin mood updates the summary. Download contains the chosen edition, mood and concept disclaimers. No order is created. |
| R5 | Contact requires name, valid email and nonblank message. Prepare email reveals an encoded mailto draft; editing invalidates the old draft. Nothing is automatically sent or stored. |
| R6 | Local page references resolve, IDs are unique, external social links remain supplied links and fictional phone is not callable. |
| R7 | Layout fits 390, 768 and 1440 CSS-pixel viewports. Controls have labels, visible keyboard focus, status announcements and reduced-motion support. Manual assistive-technology review remains required. |
| R8 | No pricing, production, road approval or vehicle performance is claimed as verified. Legal information is contextual, not certification. |

## Pages and permissions
index.html is the showroom homepage. showroom.html is its compatibility alias. portfolio.html is separate and intentionally absent from the homepage navigation. showroom-case-study.html explains implemented software; legal.html provides disclosures. All visitors are anonymous with read/configure/download access. There is no administrator UI.

## Data, integrations and states
Model data and technology text are bundled in app.js. Selections live only in the current page; reload resets them. Contact input lives in the DOM until navigation or reload. Static images load through the browser; native form validation and explicit blank-input feedback cover contact errors. No asynchronous API loading, database empty state or authenticated state applies. JavaScript is required for dynamic cards/configuration; contact has a noscript email fallback.

## Non-functional requirements and exclusions
Preserve plain HTML/CSS/JavaScript, system fonts, optimized images, keyboard operation and static hosting. Keep dependencies out of the shipped website. No checkout, reservations, customer records, login, AI agents, MCP, analytics or real vehicle engineering is in scope. Historical Lighthouse scores are dated measurements, not ongoing guarantees.

## Success and future decisions
Success is reproducible R1–R8 evidence with remaining manual checks disclosed. Any future server submission, account system or external paid integration requires a new specification, privacy decisions and deployment plan. Do not invent company registration or product capabilities.

## Public development page
R9: development.html is linked from both showroom navigation routes and displays desktop/mobile screenshots, all 15 documented areas with working GitHub links, explicit not-applicable decisions and verification limits. Native disclosure controls work without JavaScript.
