# Chronological portfolio trial — verification

Branch: `codex/portfolio-chronological-story`, based on `9e7d4de` of `codex/journey-scrollytelling`.

## Final reading structure

Introduction → Work project trail → study and wider context → Now → Contact → Other projects and bilingual quotes.

The user's clarification was that projects felt scattered and their evolution was hard to follow. The Work section therefore keeps Pascal, MusicCompare, itinni, Shoalter and Travel Planner together, with a linked overview. Education and consulting context are separately chronological. Projects with unknown development dates are not assigned invented dates.

## Content boundaries

- itinni: December 2019–December 2021, following the user's correction.
- Aalto: postgraduate exchange, April–June 2022, during HKUST study.
- Shoalter ends August 2026; October 2025 promotion retained.
- No OOCL or GreenTomato in public content.
- MusicCompare's 2020 archive milestone is not treated as its development date.
- Travel Planner remains an ongoing private prototype.
- Now uses the original 120040 photograph, without generative retouching.
- Company-reported scale remains distinguished from personal contributions. The CV file was not edited.

## Validation

- Unit tests: 23 passed across 11 files.
- TypeScript: passed.
- Production build: passed (77.18 seconds); final incremental refinement build passed (29.79 seconds).
- Playwright: 33 passed, 3 existing device-specific skips (36 total).
- Real Edge exploration preceded test changes: project links, native disclosures, keyboard activation, mobile menu, prototype route and back navigation.
- ARTEMIS diagnostics found no Android device and a missing multimodal key. The user explicitly approved browser exploration and Playwright for this Gatsby task.
- No-JavaScript tests wait for fonts and native anchor scrolling to settle before opening disclosures; no arbitrary timeout was introduced.
- Final visual checks: 320, 390, 768, 1024, 1440 and 1920 pixels; no horizontal overflow or page errors. Also checked short viewport, dark theme and reduced motion.
- A 720×450 viewport at 2× scale was used as a zoom-equivalent reading check; this is not a browser-toolbar 200% zoom verification.

## Deliverables

Preview: http://127.0.0.1:8002/#selected-work

Artifacts: `C:/Users/Anson Leung/.codex/visualizations/2026/10/19/01a15531-04d7-7e21-83f8-4df0968bd3d3/chronology/`

Includes comparison.html, desktop/mobile Work and full-page captures, visual-checks.json, build logs, e2e.log and portfolio.patch.

No new dependencies, deployment, push or merge. The original Journey branch is retained for comparison; the other checkout's untracked docs are untouched.
