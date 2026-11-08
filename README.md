# Game Asset Library v1.0

A small source-first catalog of real working visual components for game development, with a bilingual dark gallery, live pixel effects, reversible controls and rights-aware downloads.

**Public gallery:** https://jaychtw.github.io/game-asset-library/

## Develop and verify

Node.js 22+ and Python 3; no production dependencies, API, CDN or server backend. QA dependencies are pinned in package-lock.json.

```sh
npm ci
npm run assets      # deterministic exports from the four pinned PixelFX sources
npm run catalog     # discover assets/**/asset.json
npm run build       # validate + static gallery in dist/
npm test            # integrity, safety, exact exported-frame fidelity
npm run serve       # local static server; separate terminal for browser QA
npm run test:browser
```

Browser QA uses `/usr/bin/chromium`, or set `CHROMIUM_PATH` to an installed Chrome/Chromium executable. It exercises EN/zh-TW, keyboard/touch emulation, responsive visuals, axe accessibility, animation/motion, download failures/recovery, and a disposable E01 asset followed by cleanup. Evidence is under [docs/evidence](docs/evidence/). For a deployed-site run set `GAL_BASE_URL` to the approved gallery URL; E01 runs only locally. No physical-device or human aesthetic approval is implied.

## Initial collection and rights

- `pixelfx-torch`, `pixelfx-ice-shatter`, `pixelfx-sword-slash`, `pixelfx-energy-core`: exact selected [PixelFX](https://github.com/patch-gg/pixelfx) sources at `a84159688af3ca37a4be05a0d422b94451b2e24e`, MIT. Loops and one-shots run locally. Source and default sprite ZIPs preserve LICENSE/NOTICE, hashes, origin and timing/pivot metadata. Patch Pixel's excluded gallery font is **not included**; the UI uses system fonts. Upstream's MIT bitmap glyph code is part of its core runtime, not that gallery font.
- `armorheart-battleship`: preserved migration sample accepted for Armorheart Interception M3; cross-project rights are **unverified**. The gallery shows metadata only, with no image or downloads. Original tracked files, origin/anchors/hash and acceptance scope remain unchanged. Public source links do not grant reuse rights.

**This repository is not generally MIT-licensed.** Each asset's manifest and source licenses control its reuse. The four imports are creative candidates with demo verification, not owner-frozen assets or independently tested cross-project integrations.

## Add or consume an asset

The canonical inventory is [catalog/index.json](catalog/index.json) plus package manifests, never HTML cards. Add a package and regenerate/build; categories, search and inspection derive from data. New executable formats need a bounded vetted adapter. Future assets need their own freeze and publication authorization: read [New Asset Creation Contract](docs/NEW-ASSET-CREATION-CONTRACT.md), [manifest/packaging contract](docs/ASSET-CONTRACT.md), and [character design guide](templates/CHARACTER-DESIGN.md).

Consumers pin the immutable library commit, asset ID and export/entry point in their FINAL GDD. Preserve exact source and notices; never silently auto-update a consuming game's pinned art or infer approval from tags.

## Release

[FINAL GDD](docs/FINAL-GDD.md) and [one-shot brief](docs/CODEX-ONE-SHOT.md) remain the frozen authority. [Release evidence](docs/RELEASE.md) distinguishes local QA, Git/PR, CI and live publication. Main deploys through the SHA-pinned [Pages workflow](.github/workflows/pages.yml) only after integrity/build/browser/E01 checks succeed. Public-repository standard GitHub-hosted runners and Pages stay within the $0 contract; no paid settings or alternative hosts are configured. Possibility and other project repositories are outside this release.
