> Superseded by chronological-portfolio-plan.md. Correct chronology: HKUST August 2021–June 2022; Aalto postgraduate exchange April–June 2022; itinni December 2019–December 2021.

# Portfolio Journey: approved implementation plan

Approved 20 October 2026. Base: codex/intent-working-systems-implementation at 6b16719.
Branch: codex/journey-scrollytelling, using the existing implementation worktree.
Preserve untracked docs in the other checkout. No deployment or merge.

## Goal and page order

Help visitors understand Anson's capabilities and delivered work, then connect his education,
career and ongoing hands-on work through four photographic chapters.
English-first; preserve "From intent to working systems.", existing fonts and light/dark themes.

Hero -> Selected Work -> Approach -> Journey / Now -> Explorations -> Contact.

- Hero: recent Central photo with a closer crop; Explore selected work and My journey actions.
- Selected Work: Shoalter lead, itinni secondary; preserve personal contribution and company-scale attribution.
- Approach: three compact rows using existing capabilities, without repeated introductory copy.
- Journey: four chapters followed by compact Selected experience. Preserve Shoalter promotion and all factual career dates.
  Education lives in the relevant story chapters and is not repeated as a separate full section.
- Explorations: Travel Planner clearly labelled ongoing private prototype; MusicCompare as existing personal work;
  preserve jyutpingify, Pascal project, bilingual quotes and switching. Contact copy stays.
- Navigation: Work / Approach / Journey / Explorations / Contact.
- Remove GreenTomato from public career content, legacy data and related expectations.
  Shoalter ends August 2026. Update superseded design documents.

## Four chapters

1. Building a foundation: cuhk.jpg; BSc Computer Science and early programming projects.
2. Learning in another context: Portrait.jpg; exchange studies and one semester living in Finland.
3. Technology inside organisations: hkust-department-portrait.jpg; MSc Information Systems Management,
   connected to existing startup, consulting and product-delivery experience.
   Caption explicitly identifies a department-arranged photographer during HKUST studies.
4. Bringing it together: central-2026.jpg; business analysis, product delivery and technical implementation,
   leading into ongoing work such as Travel Planner.

Each chapter has one heading, two or three English sentences and a short factual caption.
No invented education dates, personal turning points or AI/HCI professional positioning.

## Interaction

- Enhanced stage only at viewport width >=1024px and height >=700px, with no reduced-motion preference.
- Native CSS sticky below the measured fixed header; stage fills the remaining viewport.
- Outer track is five stage heights, leaving four screenfuls of pinned reading distance.
- One chapter per screen of travel; last chapter releases naturally into the next content.
- Images crossfade over 300ms. Text fades and translates upward by 12px.
- No autoplay, zoom, parallax or wheel interception.
- Fixed left copy, max 34ch, with a local dark gradient; white text in both themes.
  Configure image focus per chapter to preserve faces and avoid text overlap.
- Show 01 / 04, chapter links and Skip journey.
- Forward/reverse scrolling, fast jumps, chapter links, initial hashes and browser history select the right chapter.
- Narrow/short screens, reduced motion and no JavaScript: ordinary image -> heading -> text chapters,
  no sticky track or transition. All content remains available.
- Preserve old experience, education, labs and quote anchors and the Travel Planner route.

## Implementation

1. Create branch, save plan, copy the two external images, correct career content.
2. Implement static Journey first. Add an internal JourneyChapter type and four fixed records:
   id, title, paragraphs, image key, caption and image focus. Use static Gatsby image mapping.
3. Enhance with sticky and requestAnimationFrame-coalesced passive scroll handling.
   Update React state only when the chapter changes. Recalculate on viewport/header resize.
4. Integrate hero, selected work, approach, compact career, explorations and navigation.
5. Verify and commit each working increment. Deliver diff, actual checks and desktop/mobile screenshots.

Keep Gatsby, React, TypeScript, SCSS and existing image tools; no animation library or CMS.
One content source and one complete accessible reading sequence.
Process EXIF orientation and responsive sizes via Gatsby. Load first chapter early and others lazily;
text and a background colour remain available while images load.

## Acceptance

- Correct factual content and HKUST photo context; no invented dates or outcomes.
- Travel Planner visibly private/in-progress; launched work distinguished from experiments.
- Real sticky geometry, four chapters forward/reverse, jumps, hashes, skip, history and exit.
- Check 320, 390, 768, 1024, 1440 and 1920px, short viewports and mobile landscape.
- No cut-off faces, text-over-face, clipped content or horizontal overflow.
- Light/dark, keyboard, 200% zoom, reduced motion and JavaScript disabled remain readable.
- Verify text contrast over photos and that header does not cover anchor destinations.
- Update content/composition unit tests; Playwright covers actual scrolling and fallback.
- Run npm run test:run, npm run typecheck, npm run build and npm run test:e2e.
  Ensure the test server serves this branch's worktree.


## 21 October update: photo index and original photograph

The Hero now introduces CUHK, Aalto, HKUST and Now in a four-photo chapter index
(four columns above 800px, two columns otherwise). The standalone close portrait
is superseded. The existing positioning, introduction and two primary links remain.

Now uses the unretouched 20261003_120040.jpg supplied by Anson. The generated retouch
drafts were rejected because they changed facial appearance and are not used by the site.
src/images/central-2026-original.jpg is an exact copy of the supplied JPEG.
src/images/central-2026-upright.png is its lossless decoded, orientation-normalized
version, prepared using the already-installed Sharp dependency: rotate().png().
Decoded RGB pixels were checked equal to the source after the same EXIF rotation.
There is no facial reconstruction, exposure adjustment, background cleanup or reshaping.
Gatsby performs its normal responsive image encoding; CSS controls the displayed crop.
