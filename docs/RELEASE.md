# v1.0 release evidence

Frozen authority: FINAL-GDD.md and CODEX-ONE-SHOT.md at `b65f6af8ccb9aaddb19c1e28939c1f577227d89d`. The brief's older GDD link at `39aebfc29dbb23fafa646cbaf8cada065b2ec457` was retrieved and compared byte-identically with this FINAL GDD. AICP 2.1.1 / UGDS 2.0.0 and CODEX-BRIEF were read in full at standards commit `61c24205f437826f1fc901f1741c49b677502f66`.

## Collection and provenance

Four representative imports from PixelFX `a84159688af3ca37a4be05a0d422b94451b2e24e`: `pixelfx-torch` (fire loop), `pixelfx-ice-shatter` (simulated ice destruction), `pixelfx-sword-slash` (short melee one-shot), `pixelfx-energy-core` (sci-fi loop). The effects run in isolation, without a stand-in actor performance. All native effect/helper/core bytes and the two upstream renderer helper files match immutable upstream Git objects; see [provenance audit](evidence/provenance-audit.json) and [vendor hashes](../vendor/pixelfx/provenance.json). LICENSE/NOTICE preserve Patch, Hugo Duprez / Sprite Fusion, and rehan-remade / Hollow Crown attributions. No Patch Pixel font or whole effect collection was imported.

Default exports: 60 / 85 / 24 / 72 frames respectively. One-shots include the terminal frame; time and duration are explicit rather than rounded 33ms approximations. Tests decode the generated PNG, compare **every frame's RGBA** with the upstream renderer, and verify timing, pivots and source pins. Browser canvas pixels also match representative exact source-rendered frames (allowing browser low-alpha premultiplication rounding).

Original battleship manifest, runtime PNG, anchors and README are untouched. Rights remain unverified; the public build excludes its binaries and legacy HTML preview. It displays public-safe provenance/integration metadata only, with disabled download/export controls. No new reuse license or cross-project verification is asserted. Imported effects remain creative candidates with isolated demo verification.

## Acceptance evidence

Local verification uses Node 24, Python 3.12, Chromium, Playwright 1.58.2 and axe-core 4.11.1. CI repeats the production build, determinism checks, tests and browser acceptance on the pinned Node **24.22.1** runtime. Exact reproduction requires this version: testing Node 22 exposed a one-channel floating-point difference in an ice frame and different PNG compression bytes. The generator enforces the pin and timing metadata records it; upstream bytes remain unchanged. [Browser results](evidence/browser.json) contain actual check outcomes and targeted axe findings; screenshots are from real running renders, not mockups.

| Scenario | Verified outcome |
| --- | --- |
| G01 | PASS: normalized name/tag search, type filter composition, counts, empty/reset, wide/narrow grid. |
| G02 | PASS: battleship restricted metadata, effect provenance/statuses, inspector open/close, native modal plus explicit Tab wrap, Escape/focus restoration. |
| G03 | PASS: real loop/one-shot motion, pause/replay/end, speed/background/palette/seed/mirror/reset, offscreen and reduced-motion pause. Card animation is capped at three useful previews; modal pauses card motion. |
| G04 | PASS: valid notice-bearing default sprite ZIP downloads; PNG pixels, all frames/timing/pivots and source commit verified. Restricted exports disabled. Broken/corrupt downloads fail with localized messages. |
| G05 | PASS: EN and zh-TW search/detail/control/export/error workflows; locale switch keeps query/type/selection and control choices. Locale-only local storage is guarded when unavailable. Legal/source originals are explicitly marked English. |
| G06 | PASS: package/catalog coherence, hashes and immutable pins, unsafe paths/URLs and executable adapter rejection; original battleship unchanged. |
| G07 / E01 | PASS: temporary image prop + manifest and parent lineage → regenerated catalog → build → search/new automatic type chip/image inspector, with no gallery source/layout/category edits. Fixture removed in finally; catalog and battleship bytes restored and five real entries rechecked. The four real imports use the same discovery path. |
| G08 | PASS: failed effect module, invalid metadata, unavailable external-source tab, HTTP/corrupt ZIP, and catalog failure/retry. Valid siblings/metadata/allowed actions remain usable. |
| G09 | PASS: keyboard and touch-emulated mobile, focus trap/restore, labels, no horizontal overflow, actual wide/narrow render inspection and targeted axe WCAG 2/2.1 AA audit with zero violations. No audio is loaded. |
| G10 | PASS: immutable upstream byte audit, license/NOTICE and header preservation, local runtime/no external requests, font exclusion and download gates. |
| G11 | Production build PASS. Public deployment is a separate step: the Pages workflow must succeed on main and live `revision.json` must match main, with direct public browser search/effect/export verification. See the final delivery report and linked PR/Actions run for the actual publication outcome; this prepublication evidence does not itself claim the site is live. |
| G12 | Source, manifest extension contract, new-asset instructions, hashes, deterministic export commands and QA evidence are committed on the release branch; PR/main links and final SHA are reported at delivery. |

Visual inspection: wide gallery has the frozen dark canvas, high-contrast text, compact derived chips and genuine motion-backed cards; wide inspector shows large effect preview, reversible controls, statuses and source; narrow layout stacks controls/content without horizontal clipping. See [wide gallery](evidence/gallery-wide.png), [narrow gallery](evidence/gallery-narrow.png), [EN inspector](evidence/inspector-en.png), [zh-TW inspector](evidence/inspector-zh.png), and [mobile inspector](evidence/inspector-mobile.png). No human aesthetic sign-off or physical-device test is claimed.

## Release safety and limitations

The public repository has Pages configured as workflow at **https://jaychtw.github.io/game-asset-library/**. Preflight GitHub branch metadata reported main unprotected, rulesets empty and no existing Actions workflows. Detailed branch-protection and Actions-permission settings APIs returned HTTP 403; no settings were guessed or overridden. PR merge remains subject to GitHub enforcement. The new workflow uses standard public-repository free runners, read-only verify permissions, a main-only Pages deployment, SHA-pinned official actions and no paid features/overage changes. No other hosting URL, custom domain, backend, account, tracker or secret is introduced.

Core gallery, previews and notice-bearing downloads are static and self-contained; external source links can be unavailable without breaking them. No service worker/offline installation is promised. User locale is the only persisted browser preference. Native effect/transparent sprite appearance is intended for pixel-art nearest-neighbor rendering; additive glow composited as RGBA is most faithful over dark backgrounds. Default exports intentionally do not encode temporary UI customizations. All consuming-game suitability/integration remains a separate verification.

Possibility and every other project repository are unchanged. Future independent assets require separate asset-level freeze/publication authority. There is no new mandatory owner acceptance gate.
