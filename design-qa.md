# Design QA

## References

- Intro: `/Users/filipbukovina/.codex/generated_images/01a04f0c-e7d8-7cc1-82a1-69c0dcd7f97e/exec-011d1559-9446-41cf-8ec5-5369376829ad.png`
- Portfolio: `/Users/filipbukovina/.codex/generated_images/01a04f0c-e7d8-7cc1-82a1-69c0dcd7f97e/exec-4e90dbbe-b2b5-40d4-bd19-664bce035b0e.png`

## Comparison setup

- Compared the intro reference and first-visit implementation side by side at 1440 × 1024.
- Compared the portfolio reference and revealed implementation side by side at 1440 × 1024.
- Reviewed the full implementation at 390 × 844, including every section and the first-visit intro.

## Findings and fixes

- P0: none.
- P1: an initial pre-paint script placement produced development hydration warnings. Moved the synchronous inline script into the document head following the repository's Next.js 16 guidance; clean-tab console retest has no errors or warnings.
- P1: none remaining.
- P2: the first Gradey composition lacked the reference's restrained green ambience. Added a subtle device-derived green shadow while retaining the near-black ground.
- P2: mobile project copy initially sat close to the next-chapter label. Verified the final 390 px layout has no overlap or horizontal overflow and preserves the intended two-column chapter handoff.
- P2: none remaining.

## Functional and accessibility checks

- New tab: intro plays, copy enters within the first 350 ms, and the blocking overlay is gone after two seconds.
- Same-tab refresh: pre-paint state is `skip`; the intro is not visible and does not flash.
- Reduced motion: the pre-paint branch checks `prefers-reduced-motion: reduce` and marks the intro `skip` before paint; CSS also removes motion durations.
- Navigation: Work, About, Contact, the skip link, and the Countie chapter anchor resolve to real page targets.
- Semantics: one page heading plus Gradey, Countie, About, and Contact headings; the Gradey visual has descriptive alternative text.
- Content: Gradey and Countie are the only project headings. Quipee and Kamenictví do not render; OpenSide appears only in biography/role context.
- Responsive layout: no horizontal overflow at 1440 × 1024 or 390 × 844.
- Console: no errors or warnings on clean desktop and mobile loads.
- Contact links without supplied destinations remain inert labels.

## Final result

passed
