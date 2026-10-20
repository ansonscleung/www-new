# Journey verification — 20 October 2026

Base: 6b16719 (codex/intent-working-systems-implementation).
Branch: codex/journey-scrollytelling.
Preview: http://127.0.0.1:8000/
The original G:/code/www-new checkout and its untracked docs are preserved.

## Checks completed

- npm run test:run: **28 passed**, 14 files.
- npm run typecheck: **passed**.
- npm run build: **passed**, including clean and all five generated pages.
  GATSBY_CPU_COUNT=4 and GATSBY_TELEMETRY_DISABLED=1 were set for the local run.
- npm run test:e2e against this production build: **31 passed, 3 skipped**.
  The three pre-existing skips exclude mobile-only navigation from desktop and desktop-only
  theme/preference scenarios from mobile. No new skips were added.
- git diff --check: **passed**.

## Browser and visual coverage

Chromium desktop and mobile contexts:
- 320, 390, 768, 1024, 1440 and 1920px; mobile landscape and short windows.
- Actual sticky stage geometry, forward/reverse scroll, fast jumps, natural release.
- Chapter links, direct hashes, reload, back navigation, Skip journey and legacy anchors.
- Keyboard Tab/Enter for chapter selection and skipping.
- Light/dark themes, reduced motion, and server-rendered reading with JavaScript disabled.
- A 200% zoom-equivalent layout: 720x450 CSS viewport at 2x device scale, representing
  1440x900 physical pixels. Static reading remained available without horizontal overflow.
  This is a layout emulation, not a manual browser-toolbar zoom test.
- Desktop screenshots of all four chapters, the closer hero crop, 1024px minimum-height
  stage, dark theme, mobile chapters and a full mobile page were captured.
- Faces and text placement were visually inspected. The HKUST portrait retains its hairline;
  the recent photograph has distinct close hero and wider story crops.
- Conservative white-on-photo contrast calculation assumes the brightest possible photograph
  under the declared gradient at the paragraph's right edge: 5.33:1 at 1024px,
  12.17:1 at 1440px, 13.16:1 at 1920px.
- Screenshot pass recorded no browser page errors. Headings/content share one DOM reading
  sequence; no duplicate story or live announcements were introduced.

## Regressions found and fixed

- Reloading a chapter could restore the previous chapter while fonts/layout settled.
  Deep-link positioning now lands inside the reading interval and re-aligns after load/fonts.
  The browser regression verifies both the active chapter and real sticky viewport position.
- The old labs anchor was initially omitted. It is now retained on the Explorations container,
  covered by a unit test and the legacy-anchor browser scenario.
- Travel Planner's return link now points to Explorations.

## Evidence

Screenshots and the full successful production-build log are stored in:
C:/Users/Anson Leung/.codex/visualizations/2026/10/19/01a15531-04d7-7e21-83f8-4df0968bd3d3/journey/

Key images:
- desktop-hero.png
- desktop-cuhk.png / desktop-aalto.png / desktop-hkust.png / desktop-now.png
- desktop-1024-hkust.png / dark-hkust.png
- mobile-cuhk.png / mobile-aalto.png / mobile-hkust.png / mobile-now.png
- mobile-full-page.png / zoom-200-equivalent.png
- visual-checks.json / production-build.log

The preview server must be stopped before running Gatsby clean on Windows because it holds
the cache database open. An initial clean attempt exposed this lock; after stopping the server,
the complete npm run build succeeded. Existing WMIC, Sass and Browserslist tooling warnings
did not prevent compilation.

No dependencies, CMS or animation library were added. No deployment, push or merge was performed.
