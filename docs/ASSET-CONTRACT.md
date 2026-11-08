# Asset package contract v1

**Why:** Separate *creative identity* (owner judgement), *technical integration* (Codex judgement) and *reuse rights* (verified provenance). An art-focused project freezes its critical usable assets before the FINAL GDD; minor decorations need no such gate.

## Folder and discovery

Every entry lives under `assets/<type-plural>/<asset-id>/`, with `asset.json`, `README.md`, preview, actual usable files and editable sources or immutable links when duplication is wasteful. `catalog/index.json` lists the ID, type, tags and package location.

A manifest contains:
- `id`, `name`, `type`: character/vehicle/environment/effect/ui/prop/audio
- `tags.roles`: player/boss/enemy/npc/decorative/interface, etc.
- `tags.styles`: pixel-art/illustrated/stylized/procedural/mixed-raster-vector, etc.
- `tags.views`: side/top-down/isometric/3d, etc.
- `tags.features`: animated/rigged/directional/transparent/editable-source-linked, etc.
- `tags.formats`: png/svg/webp/glb/js/json, etc.
- `status.creative`: candidate/accepted-for-origin/asset-frozen
- `status.integration`: source-present/demo-verified/cross-project-verified
- `status.rights`: verified-open/project-restricted/unverified
- `approval`, `origin`, `rights`, `files`, `checksums`, `integration`, `limits`

These are independent: original-game approval never implies universal license, and static preview never implies tested animation. Each status must have evidence.

## Import contract

A FINAL GDD identifies the ID **at an immutable library commit**, the import entry point, allowed project-specific adaptations and any owner/licensing restrictions. Codex retains freedom over performance, rendering integration, appropriate scale, collision and project mechanics, but must not quietly recreate a frozen critical asset.

## Source and licensing

Preserve exact bytes and hashes of runtime assets. Keep editable source in the package when reasonable; if an unusually large or third-party source must stay at an immutable origin URL, record the **exact** reference and limitation. No automatic rights escalation. Do not remove or alter the original game repo.

No compulsory asset count, approval questionnaire, art gate for incidental objects, or new shared AICP process amendment.

## Compatible v1.0 gallery extensions

The original battleship manifest and all its files are preserved byte-identically. Its absent capabilities default to metadata-only. A manifest remains schemaVersion 1 and may add:

- `localized.en` and `localized["zh-TW"]`: `{name, description}`; original legal text remains authoritative. `description` supports search.
- `capabilities`: `{adapter, preview, sourceDownload, spriteExport, controls}`. `adapter` is `metadata`, `image` (raster PNG/WebP/JPG path in `image`), or `pixelfx` (vetted key in `effect`). Preview/public downloads require `rights: verified-open` **and** `rights.publicDistribution: true`. Rights metadata and actual license/notices must substantiate those flags. Restricted records never enter the site as binaries.
- `rights.notices`: repository-relative license/NOTICE paths, checked for existence and safe containment; source downloads require these and a declared license. PixelFX uses the preserved vendor LICENSE/NOTICE. No blanket repository MIT grant.
- `integration`: `framePixels`, `pivot` relative to frame top-left, `duration` in seconds, `fps`, `loop`, `coordinates`, `entryPoint`, `instructions`, `allowed`, `needsReview`. `dependencies` lists the recorded inventory. `files.exports` are local package paths, all covered by `checksums` when sprite exports are enabled.
- `parent`: `{id, revision, summary}`; separate stable child identity and exact 40-character parent library commit. Include new source/output hashes and inherited/adapted licensing, creative acceptance scope and limits.

`node scripts/catalog.mjs` discovers every `assets/**/asset.json` deterministically. `node scripts/validate.mjs` checks catalog agreement, unique identities, tags, status axes, paths, traversal/URL safety, file hashes, origin pins, source distribution gates and vendor integrity. Unknown executable effects are rejected. Do not add URLs, script names or imports from arbitrary manifest data to the gallery adapter registry.

`npm run build` emits `dist/` using only local resources. Category navigation derives from manifests. Static verified-open image assets can be previewed using the existing image adapter; arbitrary HTML previews are never embedded. The build omits restricted images/downloads while keeping public-safe catalog metadata. A new executable format requires a reviewed adapter, not a gallery redesign.

PixelFX downloads are deterministic ZIPs containing native source + dependencies or default PNG + frame/timing/pivot JSON, together with exact MIT LICENSE, NOTICE and provenance inventory. Export PNGs directly copy transparent RGBA from the fixed renderer: no alpha multiplication, palette reconstruction or screenshots. Preview customization is temporary; downloads explicitly contain default options. `timing.json` gives exact frame durations (1000/fps), time, pivot, source commit, renderer conventions and terminal-frame handling. Sprite color/glow composite is most faithful on dark backgrounds; the retained native buffers support other integrations.

For a new distributable image source package, declare that asset's own license/notice paths; the build includes those, not an assumed PixelFX license. Include a README and actual source/runtime files. Use [New Asset Creation Contract](NEW-ASSET-CREATION-CONTRACT.md) for separate future freeze/publication authority.
