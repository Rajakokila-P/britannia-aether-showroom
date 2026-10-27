# Design system and interaction guidance
## Direction
A British-inspired automotive concept presentation: spacious imagery, restrained cream surfaces, navy technical sections and a clear distinction between fictional vehicles and implemented website features. Preserve the showroom homepage and separate portfolio.

## Tokens and typography
The showroom's source of truth is site/style.css: --ink #131e25, --paper #f5f4f0, --muted #5d676d and --accent #bedbd6. Body uses Segoe UI/Arial/system fallbacks; the brand uses Georgia. No hosted fonts. Heading sizes use clamp; standard sections use 100px vertical and 7% horizontal spacing before responsive overrides. Portfolio rules live in site/portfolio.css. Change shared styles at their source rather than adding isolated overrides.

## Components and pages
Reuse .button, .text-link, .section, .section-heading, .car, .filters and status elements. The showroom sequence is hero, collection, technology, comparison, configurator, questions, contact and footer. Dialogs provide focused model detail; native details/summary provide disclosures. The comparison table scrolls within its container on narrow screens.

## States and accessibility
Filter and technology controls expose aria-pressed. Filter/configuration/contact messages announce status without moving focus unnecessarily. The native dialog supports Escape; Personalise moves focus to edition selection. Keep real labels, meaningful alt text, skip navigation and visible focus. Form errors must explain missing information. Contact draft is hidden until prepared and hidden again on edits. Cabin mood changes text only; imagery is explicitly unchanged.

## Responsive behavior and motion
CSS uses desktop defaults with smaller-screen overrides; do not describe it as strictly mobile-first. Inspect 390, 768 and 1440px widths for overflow, wrapping, readable text and touch operation. Preserve prefers-reduced-motion rules. Test keyboard order and contrast after palette changes; automated results are not a full WCAG assessment.

## Content and error guidance
Do not imply purchases, real warranties or tested vehicle specifications. Do not show a successful sent-message state: the site prepares a draft only. There are no remote API skeleton/loading states. Missing assets should be diagnosed using DEBUGGING.md.

## Development page
development.html and development.css use the showroom palette and typography, a two-column desktop/mobile screenshot gallery, a single-column narrow layout and keyboard-operable native disclosures for all 15 areas. The expanded main navigation wraps at intermediate widths.
