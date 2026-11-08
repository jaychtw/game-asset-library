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
