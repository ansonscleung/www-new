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
Each illustrated row puts the original image or labelled concept illustration on the left and text on the right. Photos use native CSS sticky only inside their row at widths >= 900px and heights >= 700px with no reduced-motion preference. Reading stays natural; no full-screen stage, scroll interception or new animation dependency.
On smaller / shorter viewports or with reduced motion, images use normal static flow. Mobile order is image then text. Natural row boundaries replace the image as readers reach the next part.
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
