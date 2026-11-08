# Game Asset Library

A small, demand-driven catalog of **real working visual components** for game development. The purpose is to resolve important artistic decisions **before FINAL GDD Freeze**, not to build an enormous asset collection.

## For creators and AI agents

1. Discuss the art-critical character or object in depth; establish silhouette, pose, palette, animation, perspective, and the intended constraints. Don't force this depth on incidental decorations.
2. Produce a **runnable, inspectable asset**, not just a concept image or a descriptive prompt. Preserve real source/rig/spritesheets and previews.
3. Record the exact creative acceptance scope; **Asset Freeze** is a specific source revision and usable behavior. Mark candidates honestly.
4. Catalog by **type, role, style, view, feature, and format**. Preserve source, rights, hashes, and integration guidance.
5. In the FINAL GDD reference an **immutable library commit and asset ID**, along with the chosen export and permitted adaptations. Codex imports/adjusts and tests the asset rather than inventing its critical visual identity.

## Links

- [Catalog and tags](catalog/README.md) · [JSON index](catalog/index.json)
- [First imported sample: Armorheart battleship](assets/vehicles/armorheart-battleship/README.md)
- [Character creation template](templates/CHARACTER-DESIGN.md)
- [Machine-readable entry example](templates/ASSET-MANIFEST.example.json)
- [Asset packaging and status contract](docs/ASSET-CONTRACT.md)

### First test import

The battleship was **creatively accepted for Armorheart Interception M3**. Its original runtime PNG is copied byte-for-byte; the unusually large editable SVG remains accessible by exact GitHub source link. This is a functional retrieval/catalog example, **not** blanket approval or licensing for other games. Read the entry's rights and limitations before reuse.

## Validate

Requires only Node 20+, no npm dependencies: `node scripts/validate.mjs`. No website, storage service, paid API, CI or GitHub Pages deployment is required for v0.

**This repository is not generally MIT-licensed.** Source projects, external reference art, generated assets and derivatives can have different rights. Each asset's manifest controls what is actually known. Existing projects and the shared [AICP/UGDS standards](https://github.com/jaychtw/game-development-standards) are unchanged.
