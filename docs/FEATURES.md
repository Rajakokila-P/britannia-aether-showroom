# Feature implementation guide
| Feature | Source | Behavior and acceptance |
| --- | --- | --- |
| Model collection | app.js models and card templates; index.html #cars | Four concepts; filters match R1; preserve alt text and concept notice |
| Model detail | app.js dialog handlers; #model-dialog | Correct model; Close/Escape; Personalise selects edition and focuses control |
| Technology | app.js technology/showTech | Three panels; selected control aria-pressed=true; speculative labels remain |
| Comparison | index.html comparison table | Static comparison; narrow screens scroll table within container |
| Configuration | app.js selection/updateConfig; #config-form | Four editions and three moods; summary changes without claiming image changes |
| Text download | app.js submit handler | Local UTF-8 brief with selected model/mood and disclaimers; no purchase |
| Contact draft | contact.js; #contact-form | Native validation plus whitespace rejection; encoded draft; edit clears draft; no automatic sending |
| Portfolio/case study | portfolio.html; showroom-case-study.html | Separate supporting pages; honest software scope and dated historical metrics |
| Legal/disclosures | legal.html and notices | Fictional designs and sample business data explicitly identified |

## Change procedure and dependencies
Update requirements first, then model/content definitions and matching markup/styles. Asset filenames must match the model record and responsive variants. Synchronize showroom.html with index.html. Test affected interactions and rerun source checks. New pages must have unique IDs and resolvable links.

## Data and external systems
No migrations, server routes or external API implementation is involved. See DATABASE.md and API.md. Existing user state resets on reload. Future features must not silently add storage or tracking.

## Definition of done
Behavior meets PRD acceptance criteria, labels/focus remain usable, mobile layout is checked, tests pass or gaps are explicitly recorded, and documentation reflects the actual implementation. No unsupported claims or personal career facts may be introduced.
