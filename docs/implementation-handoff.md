# Implementation handoff — From intent to working systems

## Read first
Implement the approved contract in [intent-working-systems.md](intent-working-systems.md). The user wants a lower-cost model (e.g. Luna or Terra) to do the implementation. This handoff contains planning only; the preparing model must not implement the entire redesign.

## Current state
- Branch: `codex/intent-working-systems`, created from the existing checkout.
- No website source, styling, configuration or existing tests have been changed.
- The design contract and this handoff are the only retained additions. No build or browser verification of the redesign has occurred.
- A draft acceptance test was briefly added and then removed when the user clarified the handoff boundary. Do not treat it as completed test coverage.
- Existing stack: Gatsby 5, React, TypeScript, SCSS/Bulma, Vitest, Playwright. Node 22 is available. Keep the existing Yarn lockfile; do not migrate tools.

## User amendments override the earlier plan
- Hero contains name, statement and introductory paragraph; **no current-employer line**. GreenTomato belongs in Background.
- Use the already configured Geologica as primary font and Google Fonts Noto Sans HK for Chinese. Both are already present in `gatsby-config.ts`; fix the CSS font hierarchy rather than adding a duplicate font loader.
- Exact contact copy: “Let’s stay in touch.” / “If you’d like to connect or just have a chat, feel free to get in touch.”
- Keep rich personal content: MusicCompare, jyutpingify, the Pascal school project, education and bilingual quotes with switching.

## Execute sequentially, one bounded slice per turn

### 1. Career and metadata
Read `src/data/profile-evidence.ts`, `gatsby-config.ts`, `src/pages/index.tsx`, `src/hooks/use-site-metadata.ts` and related tests. Add GreenTomato Sep 2026–Present / Senior Business Designer, summary across project management, business analysis and business development, no achievements. Close Shoalter at Aug 2026. Replace sole Technical Product Manager SEO positioning with the approved business/technology/delivery positioning. Keep past employers' historical titles intact. Verify content tests and typecheck; report changed files and results.

### 2. Theme and hero
Read `src/pages/styles.scss`, `src/components/identity.tsx` and its SCSS/test. Apply the design tokens and font stack from the contract. Remove the full-page grid and decorative system/status styling. Hero uses the exact approved copy and a semantic Travel Planner summary figure with explanatory text. Use normal links/HTML/CSS, no new diagram library. Verify at desktop and phone widths. Retain existing routes. Update hero tests alongside the change.

### 3. Work and approach
Read `src/data/selected-work.ts`, `src/components/projects.*`, `src/components/capabilities.*` and `src/pages/index.tsx`. Order work: Shoalter, Travel Planner, itinni; titles above role labels. Use Shoalter business/system scope and company-attributed numbers; remove the standalone Impact render and retain `#impact` as a landing point inside Selected Work. Do not repeat its numbers elsewhere. Replace capabilities with the three approved questions and case links. Keep `#selected-work` and `#capabilities`; introduce stable case anchors for Shoalter and itinni as needed. No invented decision stories. Test case links and attribution.

### 4. Background, personal content, navigation and contact
Read `experience.*`, `education.*`, `labs.*`, `quote.*`, `header.*`, `contact.*` and `src/data/labs-education.ts`. Nest Education under Background and quotes under Outside the brief; remove their standalone homepage renders. Preserve existing IDs (`experience`, `education`, `labs`, `quote`, `contact`) to avoid broken bookmarks. Navigation labels: Work / Approach / Background / Outside work / Contact. Name returns home. Use existing `src/images/MusicCompare.png` via Gatsby image tooling for the featured personal project. Keep quote hydration and manual-switch behavior. Reduce older career detail; retain all entries. Remove duplicate résumé action. Update section-order and interaction tests.

### 5. Case page and final verification
Apply the same visual system to `src/pages/work/travel-planner.tsx` and its SCSS without expanding its factual claims. Keep the route and return link. Inspect all shared styles, including footer/Bulma dark-scheme interactions. Run `npm run test:run`, `npm run typecheck`, `npm run build`, then browser tests against the current build or development server. The checked-in Playwright configuration uses port 8000 and launches `yarn develop`; ensure the tested server serves this checkout rather than a stale build. Test 320/390/768/1440/1920px, dark OS preference with fixed light appearance, reduced motion, keyboard focus, >=44px primary targets, no overflow, quote switching and case navigation. Capture and visually inspect screenshots. Verify font loading and contrast. Document actual results; do not substitute old test results. Do not deploy.

## Working rules
- Start each slice by inspecting current files and Git status; this map describes the checkout at handoff and may drift.
- Prefer small source edits over overrides that leave the old design active underneath.
- Maintain one h1 per page; use coherent heading levels after nesting Education and Quotes.
- Preserve source attribution and separate company scale from personal contribution.
- No framework migration, backend, CMS, new design package, blog or invented GreenTomato case.
- A passing slice should be a reviewable checkpoint; stop and report after the requested slice unless the user explicitly authorizes multiple slices.
- Git may require elevated permission to write `.git`; command-scoped `git -c safe.directory=G:/code/www-new ...` was used. Do not change global Git trust.

## Suggested first message to the next model
Read `docs/intent-working-systems.md` and `docs/implementation-handoff.md`. Implement slice 1 only: career and SEO content. Preserve the approved wording and factual boundaries. Run relevant tests and typecheck, then report the changes and results. Do not start slice 2 yet and do not deploy.
