# Armorheart battleship — migration sample

**Origin acceptance:** [Armorheart Interception M3 art approval](https://github.com/jaychtw/armorheart/blob/29c5e871f6c7b92599880b60a3666943fa452a74/docs/decisions/M3_IMPLEMENTATION_AUTHORIZATION.md). Accepted for that game with known style limitations. **Not** an automatically frozen or licensed cross-project asset.

- [runtime.png](runtime.png) — original transparent 664×260 runtime render, copied with exact Git blob identity and recorded SHA-256.
- [anchors.json](anchors.json) — original registration and source/export hash metadata.
- [Editable source SVG at immutable source commit](https://github.com/jaychtw/armorheart/blob/29c5e871f6c7b92599880b60a3666943fa452a74/planning/interception-m3/art/battleship-editable.svg) — actual mixed raster/vector construction, approximately 5.25 MB with embedded raster art. Intentionally linked instead of duplicated in this small first import; fetch it when editing.
- [preview.html](preview.html) — standalone side-by-side display of the real runtime image and source link, *not* an animation demo.
- [asset.json](asset.json) — machine-readable type, tags, approval/rights, import dimensions and limitations.

### For Codex

Import `runtime.png` from a fixed asset-library Git commit. The hull occupies 320×88 world units and the export is 664×260 px. The registered local muzzle points are (−88,66), (0,66), and (88,66); see `anchors.json`.

Adaptation of orientation, scale and contextual effects requires the next game's GDD. **Do not infer independent commercial redistribution or license authorization.** A new project must determine rights and creative suitability.

The original project's source and runtime remain unchanged. The imported file has been recorded, but a fresh local browser preview and independent cross-project import are not yet verified.
