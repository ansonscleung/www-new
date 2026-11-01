# Personal timeline trial
Base: codex/portfolio-chronological-story at 59f104d. Branch: codex/portfolio-personal-timeline. Use the implementation worktree; leave the other checkout's untracked docs alone.

Preserve text-first static layouts, right-aligned desktop photos, sans-serif, shared gutters, themes, legacy anchors and private-project labels. Add a fine vertical timeline within Experience, with compact text-only entries for early awards and HKAGE internship; place teaching, student representation, CUACS publications and PSM I within CUHK. Keep MusicCompare there. No sticky, extra cards, decorative photos or explanatory subtitles.

Dates: HKOI competition years 2014 and 2014–2015; HKAGE July–December 2016; STEM teaching December 2016–June 2020; student representation 2017–2020; CUACS Publication Officer 2019–2020; PSM I July 2020. Retain existing confirmed academic/work dates, including itinni ending December 2021.

Research sources: G:/code/www/2017–2019/index.html, G:/code/www/index.html and CV.html, G:/code/ansonscleung.com/src/pages/CV.tsx and components/life.tsx. The old HKOI tooltip conflicts with the CV; use competition years, not award months. JA's old CV period August 2016–April 2017 needs confirmation. Undated projects and itinni Main Developer / CTO / Product Director titles remain research context, not dated promotions. Do not reintroduce OOCL, GreenTomato or Pascal. Do not edit the CV.

Verify chronological grouping, overlapping tenures, compact entries, disclosure keyboard support, no-JS, links/anchors, light/dark and 320–1920px. Run unit tests, typecheck, production build and Playwright. Capture desktop/mobile and before/after comparison. No deployment or merge.

## Verified implementation
- One internal compact flag extends the existing StoryEntry data/renderer. Seven main entries, with teaching, councils, CUACS, MusicCompare and PSM I nested within CUHK.
- Timeline is CSS-only and decorative; the original text-first DOM, shared gutters and right-aligned photos remain. No new package, public API, CMS or image retouching.
- Actual Edge exploration preceded revised tests. Council appointments expand with the mouse and toggle via Enter.
- Unit tests: 22 passed. TypeScript passed. Production build passed in 187.27 seconds.
- Final Playwright: 41 passed, 3 existing device-specific skips. The initial no-JS run exposed a test click racing the native smooth anchor scroll; an explicit destination-position wait resolved it without a sleep or product change.
- 320, 390, 768, 1024, 1440 and 1920px: identical section edges, no horizontal overflow or page errors. Light/dark, short windows, reduced motion, no-JS and old anchors passed.
- Desktop/mobile captures inspected, including early nodes and the compact university roles. Browser viewport testing is not a physical Android-device test; the user-approved browser/Playwright exception remains in use.
- Preview: http://127.0.0.1:8002/#journey
- Artifacts: C:/Users/Anson Leung/.codex/visualizations/2026/10/19/01a15531-04d7-7e21-83f8-4df0968bd3d3/personal-timeline/ (comparison.html, desktop/mobile captures, visual-checks.json, portfolio.patch).
- Baseline screenshots in ../copy-cleanup/ correspond to 59f104d. No deployment, push, merge or changes to the other checkout.
