# Integrated experience and projects
Supersedes the project-trail layout in chronological-portfolio-plan.md and the layout conclusions in chronological-portfolio-verification.md.

## Approved direction
Keep the existing trial branch. Introduction → Experience with its associated projects → Still making things → Contact → Other projects / quotes.
- CUHK (Sep 2016–Jul 2020): degree and original graduation photo; MusicCompare as a nested university course project.
- itinni (Dec 2019–Dec 2021): role and product delivery together.
- HKUST (Aug 2021–Jun 2022): department portrait, followed by nested Aalto postgraduate exchange (Apr–Jun 2022).
- Protiviti (Sep 2022–Feb 2023): concise text.
- Shoalter (Feb 2023–Aug 2026): work, October 2025 promotion and company context together.
- Now: original recent photograph and nested private Travel Planner prototype.
Remove the secondary-school Pascal entry. Keep undated jyutpingify and bilingual quotes in the footer.

## Layout
Latest direction: normal scrolling throughout, with no sticky images or scrollytelling stage. Each illustrated row puts text first in the DOM: text left / image right at >=900px, and text above / image below on smaller screens. Portraits use rem-based maximum widths instead of viewport-height sizing.
A shared page-shell uses the same content width, horizontal gutters and centering for Hero, Experience, Now, Contact, Other projects / quotes and footer. The navigation brand aligns to the same left edge. Full-width background bands remain outside the inner shell. Removed the old Contact 62rem cap and overridden Bulma's extra footer padding.
Nested subsections keep MusicCompare within CUHK, Aalto within HKUST, and Travel Planner within Now. One DOM copy of all content, including without JavaScript. Native details preserve keyboard expansion.

## Assets and compatibility
itinni has an existing logo, not a product screenshot; its labelled visual is an overview of collaborative planning. Shoalter uses a delivery-responsibility schematic. Travel Planner uses a labelled concept sketch, not a fabricated product screenshot. No photographs were retouched or regenerated.
Preserve existing Travel Planner route, themes, company-versus-personal contribution boundaries, and legacy hashes (including #selected-work at itinni).
The source CV is unchanged. No new dates were inferred.
The user previously approved browser exploration and Playwright as the ARTEMIS exception for this Gatsby website; this session explored the updated page in actual Edge before authoring revised tests.

## Verification
- Unit: 22 passed, 10 files. TypeScript passed.
- Clean production build passed (148.02 seconds).
- Playwright: 36 passed, 4 device-specific skips (the prior 3 plus the desktop-only sticky test in the mobile project).
- Actual sticky geometry: figure remains at 112px during two scroll positions, then leaves the viewport at the next section.
- No-JavaScript navigation, native disclosures, route/back navigation and legacy hashes passed.
- 320, 390, 768, 1024, 1440, 1920px: no horizontal overflow or page errors. Desktop/mobile screenshots visually inspected, including portrait proportions.
- Dark theme, reduced motion, short windows and zoom-equivalent layout passed; no claim of physical-device ARTEMIS or browser-toolbar zoom validation.
- Screenshots and visual-checks.json: C:/Users/Anson Leung/.codex/visualizations/2026/10/19/01a15531-04d7-7e21-83f8-4df0968bd3d3/integrated/
- Preview: http://127.0.0.1:8002/#journey (production preview used for no-JS verification).
- Review: one source record per experience, nested parts, native CSS sticky, no new runtime dependency or scroll state. Company scale and private prototype labels retained.
- No deployment, push or merge. The other checkout's untracked docs were not changed.

## Density and sans-serif refinement
The follow-up review found that the 65vh minimum row height kept images sticky after short text had ended. Removed that viewport-height floor and the trailing content padding, reduced chapter / nested-part spacing, and reduced desktop portrait sizes where text is short. Sticky now has only the natural height of the row to work within; short rows need no extra scroll distance.
Display headings now use the existing Geologica / Noto Sans HK sans-serif stack. Hero statement is upright, with slightly firmer heading weights. No new font download or dependency.
Validation: 22 unit tests passed; TypeScript passed; clean production build passed in 114.29 seconds; 38 Playwright tests passed and 4 device-specific tests skipped. A new geometry regression checks that row height is determined by its actual children, not an empty viewport-sized spacer, and that the nested project gap stays within 33px.
Actual Edge exploration and desktop/mobile screenshot inspection completed. Six viewport widths (320–1920px) have no horizontal overflow or page errors; reduced-motion, short-window, no-JS and sticky-release checks still pass.
Updated screenshots: C:/Users/Anson Leung/.codex/visualizations/2026/10/19/01a15531-04d7-7e21-83f8-4df0968bd3d3/compact/

## Text-first flow and section alignment verification
This update supersedes the earlier local-sticky layout and its historical checks above.
- Unit: 22 passed; TypeScript passed.
- Clean production build passed (150.07 seconds); final alignment fix build passed (46.24 seconds).
- Final Playwright: 39 passed, 3 existing device-specific skips. Replaced sticky expectations with natural image movement and static-position checks in every viewport mode.
- At 320, 390, 768, 1024, 1440 and 1920px, all six section shells share identical left AND right content edges. Navigation brand aligns to the same left edge; no horizontal overflow or page errors.
- At 1440px the shared content edges are 120px / 1320px; at 390px they are 20px / 370px.
- Actual Edge exploration preceded revised tests. Desktop and mobile captures visually inspected for text/image order, original portrait proportions and readable headings.
- E2E continues to cover no-JS reading, keyboard disclosures, themes, reduced motion, short windows, routes and legacy anchors.
- Latest screenshots and visual-checks.json: C:/Users/Anson Leung/.codex/visualizations/2026/10/19/01a15531-04d7-7e21-83f8-4df0968bd3d3/aligned/
- Production preview: http://127.0.0.1:8002/#journey. No deployment or merge.

## Copy restraint
Let the hierarchy and grouping explain the page. Avoid repeating the name, section heading, project status or surrounding paragraph in secondary labels and captions. Keep dates, material photo context, private-prototype status and the boundary between personal contribution and company-reported scale.
Removed the experience introduction, repeated Hero background, contact eyebrow/invitation, duplicate diagram headings/status notes, obvious image captions and quote category badge/secondary heading. MusicCompare remains clearly identified as university coursework in its paragraph. The quote selector still uses categories internally.
Verification: production build passed (164.58s); 22 unit tests and TypeScript passed; final browser suite passed 39 checks with 3 existing device-specific skips. An initial concurrent run timed out creating a browser page before a desktop-inapplicable test could skip; rerunning with two workers passed. Six viewport sizes retain aligned section edges without overflow or page errors.
Screenshots: C:/Users/Anson Leung/.codex/visualizations/2026/10/19/01a15531-04d7-7e21-83f8-4df0968bd3d3/copy-cleanup/
