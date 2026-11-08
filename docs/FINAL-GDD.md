# Game Asset Library v1.0 — FINAL Design & Delivery Contract

**Status:** FINAL — owner-approved Design Freeze on 2026-11-08 (Asia/Taipei)
**Authority:** Creative director's explicit “Design Freeze — Game Asset Library v1.0” authorization in the project design conversation, including the final extensibility clarification.
**Project / visibility:** https://github.com/jaychtw/game-asset-library — public repository
**Baseline inspected:** main at cf3723742b37ed057a9dc62b3f8037f6867b9b33, 2026-11-08
**Release mode:** Release, not Experiment
**Budget ceiling:** USD 0. No purchases, overages, paid accounts/services, or unapproved data transfer.
**Approved website / public visibility:** https://jaychtw.github.io/game-asset-library/ — public GitHub Pages only
**Standards pins:** AICP 2.1.1 and relevant UGDS 2.0.0 quality principles at https://github.com/jaychtw/game-development-standards/tree/61c24205f437826f1fc901f1741c49b677502f66; read both full texts and their one-shot templates. UGDS game-specific gameplay requirements apply only by analogy to this asset-gallery application.
**Related local authority:** existing README.md, docs/ASSET-CONTRACT.md, templates/CHARACTER-DESIGN.md, templates/ASSET-MANIFEST.example.json, scripts/validate.mjs, catalog/index.json, and the battleship asset package. Evolve compatibly; do not silently discard existing approved records.

## 1. Purpose, audience, boundaries

Build a durable, production-usable **Game Asset Library**, not an art mood board, wholesale game engine, asset marketplace, or general-purpose editor.

Two equal consumers share ONE canonical catalog:
- **Human creators:** browse a responsive, PixelFX-inspired dark gallery; search and filter; inspect real static or animated outputs; try reversible preview controls; see technical/rights status; retrieve only authorized files/exports.
- **AI collaborators (ChatGPT/Codex):** discover exact asset IDs, descriptive tags, actual source and minimal faithful runtime, editable/regeneration data, exports, provenance and licenses, technical assumptions, verification evidence, allowed adaptations, version pins, and derivation lineage. Import into games without reconstructing creative identity or revisiting the original conversation.

The library separates uncertain asset production from game implementation when useful. An important/risky character or other asset MAY be designed, built, approved and version-pinned in an individual asset-first conversation before its game's FINAL GDD. Routine decorations need no mandatory pre-production gate. Asset validity never guarantees correctness in a new game: distinguish asset verification from target-project integration verification.

**Initial release is complete, not a proof-of-concept.** It establishes reusable infrastructure and a small genuine initial collection. Future assets are added through asset packages and catalog updates, ordinarily without revising gallery presentation code or rebuilding the site's design.

### In-scope asset types

The catalog's extensible taxonomy includes characters, vehicles, environments, effects, UI, props, audio, animations and other bona fide reusable production assets. Support public-safe catalog records for all applicable types. For v1 actual preview/playback adapters are required for formats in the approved initial inventory (existing battleship's PNG/static preview and selected PixelFX effect code). The design must permit additional format-specific adapters in later asset assignments without redesigning the gallery. Do not invent placeholder characters, audio recordings, UI kits or a 3D model just to demonstrate empty categories.

### Approved initial content

1. **Armorheart battleship:** preserve its existing asset ID, immutable original identity, manifest, registered muzzle anchors, source link, hashes and origin-specific acceptance scope. Its existing public library copy is a documented migration sample, not a cross-project reuse grant. Its rights status is **unverified**; no new unrestricted license, reuse claim, derivative distribution, generated export or enabled download button may be inferred. In the gallery show the public-safe catalog record and honest limitations. Show a visual preview only when the relevant display/distribution rights can be substantiated; otherwise show a clear metadata-only/preview-restricted presentation and permitted source reference. Do not silently delete or rewrite the already-public original. If a real rights conflict requires altering existing source beyond approved scope, isolate and escalate narrowly.
2. **PixelFX:** select **four to six** representative effects from distinct or meaningfully different categories / behaviors (for example fire, ice, melee, sci-fi, looping versus one-shot, palette variation or actor timing). Exact effect IDs are delegated to Codex; DO NOT require another owner selection. Obtain from https://github.com/patch-gg/pixelfx, examined source baseline a84159688af3ca37a4be05a0d422b94451b2e24e. Pin the exact upstream commit actually imported, source file paths and byte hashes. Include the minimum lawful core dependencies for faithful self-contained playback and any authorized sprite-sheet rendering/export. The project states its code and effects are MIT-licensed, but verify every imported file and applicable upstream MIT notices at the chosen revision. Preserve LICENSE, NOTICE and attribution obligations. The gallery's Patch Pixel font is explicitly excluded from PixelFX's general MIT grant: **do not copy that font** without independent verified authorization. Use an appropriate freely usable local/system font.
3. No automatic bulk migration of older projects, no import of all PixelFX effects, and no mere conceptual stills masquerading as production assets.

## 2. Site experience and interaction contract

**Visual direction:** PixelFX-inspired **dark canvas**, clear high-contrast typography, compact category chips, visually prominent real asset cards with animated previews where applicable, and a **large detail inspector**. Take inspiration from layout and behavior, not blindly copy styling, logos, artwork, branding or excluded font. No relationship to Possibility's page design.

**Site navigation and state:**
- On load show site identity, discoverable English / Traditional Chinese language switch, total/current asset count if present, search, category chips and a responsive asset grid. Empty, loading and error states are truthful.
- Search matches normalized asset ID, localized title/description where provided, category and tags (role, style, view, feature, format). Whitespace/case differences should not defeat ordinary queries. Category filtering composes with search; category choices come from catalog data rather than manually maintained hardcoded inventories. Offer a clear no-results state and a simple way to reset.
- Cards show a real representative visual when lawful/available, human-readable title, category, useful capabilities and honest status. When animated: play genuine asset output, avoid too many simultaneously running previews, pause or avoid playback off-screen, do not automatically animate if reduced motion is preferred. Cards remain operable by keyboard and pointer/touch. Missing previews show a clear alternative, not an invented depiction.
- Selecting a card opens a **large asset detail inspector** (modal or equivalently accessible view) showing full-size real preview; asset ID; name/category/description; useful tags; native perspective; intrinsic size, durations/state names and renderer/format assumptions when applicable; source and immutable origin reference; author/attribution/license; creative, integration and rights statuses; allowed adaptations/restrictions; parent-child derivative links where relevant; and available source/export/integration actions. Modal keyboard navigation, escape close and focus restoration work.
- Controls are driven by declared **asset capabilities**, not presented identically for everything: effects may offer pause/play/replay, speed, background, palette/seed/flip where actually supported; images zoom/background inspection; future animation characters state/direction choice; future audio playback/mute. Unsupported controls are absent or explicitly disabled with explanation. Variations are reversible and DO NOT change source assets or persist canonical edits.
- Display all eligible legitimate source references, copyable asset ID/integration instructions, and download/export controls. A public-gallery “download” action may target only files whose public redistribution is verified and whose notices accompany them. For supported PixelFX effects, provide a faithful **sprite-sheet PNG plus timing/frame/pivot JSON** export or verified pre-generated equivalent from the same fixed source revision. Never claim an export succeeded if corrupt or mismatched; disable it on error while preserving valid links.
- Group traceable derivatives under their parent in asset details or grouping UI while keeping each derivative discoverable as its own catalog entry. When none exist, do not show fake variants.

**Bilingual requirements:** English and **Traditional Chinese (zh-TW)**, obvious switching without losing search, filters or active selection; centralized UI strings for navigation, instructions, buttons, errors, status labels, accessibility labels and downloads. Localized metadata descriptions should be supplied for new owned entries and selected imports where appropriate. If original source names, license text or inherited metadata are only in English, preserve legal originals and mark English-only source metadata honestly rather than inventing legally authoritative translation. Browser detection may pick initial locale, but a visible manual switch overrides it.

**Responsive accessibility:** Target ordinary modern desktop and mobile browsers, keyboard/mouse plus touch input; use representative narrow/wide sizes and inspect the real rendered interface. Clear focus, meaningful alt/accessible labels, proper dialog focus, adequate contrast, usable touch targets, no color-only statuses, no hidden essential hover requirement, reduced-motion behavior, paused/no autoplay audio, and truthful accessible errors. No unsupported orientation promises or mandatory arbitrary viewport/test-count quota.

## 3. Canonical asset package and interoperability contract

The repository remains the source of truth. Preserve and extend the existing v1 catalog/manifest contract compatible with the Armorheart package. A normal asset entry resides at **assets/<type-plural>/<asset-id>/** with a machine-readable **asset.json**, explanatory README, actual source/runtime/export files where allowed, metadata/anchors/timelines, evidence, attribution and a working preview or explicitly declared preview limitation. The central **catalog/index.json** may be generated or updated through a deterministic command and must stay coherent with entry manifests. Asset IDs are stable; paths and revisions are resolvable. Never use website HTML as the authoritative inventory.

**Required discoverability:** id, name, type, role/style/view/feature/format tags, available capability flags, localized display metadata, source and import entry points, format/native dimensions and coordinate/time conventions when relevant, verification and rights statuses, origin author/repository/commit, hashes, allowed adaptations, known limitations, dependency inventory and optional derivative ancestry. Schema may add optional versioned fields; migration must preserve old records and keep validation backward-compatible unless a safe deterministic migration is explicitly documented and tested.

**Independent status axes:**
- Creative: candidate / accepted-for-origin / asset-frozen, with actual evidence and scope; no synthetic owner sign-off.
- Integration: source-present / demo-verified / cross-project-verified, based on genuine checks; isolated preview is not cross-project integration proof.
- Rights: verified-open / project-restricted / unverified, with provenance and explicit distribution/reuse conditions. Status alone is not a license.
- Preview/export readiness: reflect actual functioning capabilities separately. The gallery may display public-safe metadata for incomplete/restricted entries with unavailable actions clearly marked.

**Ownership and modification:** Keep accepted original source byte-identical; record checksums and immutable upstream/library commit. Every permanent derivative has a **separate stable asset ID**, parent ID and exact parent revision, new source/output hashes, modification summary, applicable inherited/adapted licenses, new creative acceptance scope and limits. Never overwrite a consuming game's pinned revision or auto-update imports. Copy/adapter changes allowed only within the respective frozen project's adaptation limits and verified licenses; a substantially new artistic identity needs its own design decision.

**Source and runtime:** Preserve editable source when reasonable, or exact immutable external source links with explicit limitations for expensive or large files. Include the minimum actual code/dependencies necessary for independent preview/reproduction; do not build a new universal engine. Native code-driven effects and sprite exports can coexist. Source/binary integrity must be machine-verifiable. Prevent path traversal, unintended executing of untrusted manifest content, unsafe resource URLs, or unsupported arbitrary script loading from catalog data. Imported executable effects must be vetted, bundled locally, and used through a controlled approved adapter; do not run random third-party contributions as gallery code.

**Future asset-onboarding contract (release-critical):**
- A new conversation is permitted to start with a simple concept (“create a new character/effect”) rather than redesigning the library. The agent recovers current repository standards, catalog contract, and technical status from Git.
- The asset-specific conversation resolves *that asset's* material identity, animation/behavior, state, constraints, rights, acceptance, integration and visibility before its own explicit asset Design/Asset Freeze; avoid re-questioning library-wide decisions. Future public asset publication is **not blanket-authorized** by this v1 freeze.
- A future Codex assignment produces playable/usable source and preview, adds manifest/tags/lineage/rights, validates, checkpoints, and (only if that asset's authorization permits) publishes to the same gallery. No ordinary gallery layout, category code or site redesign is needed.
- A previously unsupported format may require a bounded adapter extension and the asset-specific authorization, not a full site redesign.

## 4. Privacy, network, performance and deployment

No accounts, backend, hosted database, uploads, payments, telemetry, external analytic trackers, credential collection or user data transmission. The published gallery and approved imported previews must run entirely from committed local/static build assets; do not require an external runtime API, CDN, web font or paid service. Browser storage may retain non-sensitive locale preference only if safe and functional when blocked; no asset edits saved to server. Third-party GitHub downloads may happen during authorized build/import work, pinned and vetted, not at runtime for functioning core previews.

Support GitHub Pages static hosting at exactly **https://jaychtw.github.io/game-asset-library/**, including project subpath assets and deep links if offered. No alternate host, custom domain or Possibility page. Lazy-load/activate only useful previews and stop offscreen work to keep ordinary desktop/mobile interaction responsive. Avoid giant uncompressed duplicate binaries and unnecessary dependencies. Follow USD $0 ceiling with no paid overages. Record builds and dependencies reproducibly; audit existing Pages/CI side effects before adding a workflow or pushing to release branches.

Failure policy: each missing/broken preview, external reference, export or invalid asset has a clear, accessible unavailable status and disables only the affected action. Other catalog items and navigation continue. The release-critical imported assets must either pass their mandated capabilities or be repaired before publishing; “show an error” is not permission to ship broken mandatory examples. Offline/from-local-build functionality is required for core gallery and locally imported previews, not necessarily a service worker or installable PWA. A broken third-party reference must not crash the site.

## 5. Production build, evidence and acceptance

Codex chooses toolchain, dependency management, actual UI implementation and appropriate automated tests. This is **one authorized complete release**, not a series of owner-facing POCs. Test actual rendered behavior, not just metadata. Maintain a short evidence record or final release report, with PASS / FAIL / NOT VERIFIED / N/A and why. No invented owner inspection or subjective sign-off.

**Mandatory acceptance scenarios:**

- **G01 — Discover:** From direct public/local gallery load, search by a known asset name or tag; filter category; combine and clear filters; display correct results/counts, empty state, and responsive layout without broken links.
- **G02 — Inspect:** Open battleship and a selected PixelFX asset. Show actual source-backed preview or, if rights prohibit image republication, the battleship's honest preview-restricted state; inspect manifest provenance/links/statuses; navigate detail with keyboard/touch; close and restore focus.
- **G03 — Animate:** At least representative looped and one-shot imported effects genuinely play from bundled source; pause/replay and relevant customization visibly work and revert without modifying canonical assets; test reduced-motion and offscreen pause.
- **G04 — Export:** For effects with supported sprite exports, produce/download valid PNG frames and frame/timing/pivot JSON tied to the same source revision; validate parseability and representative visual/timing alignment. Verify copyright/notice delivery and deny unsupported/restricted export actions.
- **G05 — Languages:** Run search → detail → controls → permitted export/error journey in EN and zh-TW. Switch mid-session without losing search/filter/selection; test localized focus/labels/errors.
- **G06 — Catalog integrity:** Validate all entries, hashes, safe paths, origin pins, source/preview links, tags and statuses; reject malformed manifests/duplicate IDs/unsafe relative paths; preserve original battleship identity and accurate unverified cross-project rights. Do not attribute unperformed independent game integration.
- **G07 — Extensibility E01:** Add a **temporary valid representative test asset** by packaging it, declaring its manifest and rebuilding/regenerating catalog. Without manually editing gallery component, page layout or category navigation code, it becomes findable by search/type and inspectable with correct capabilities. Remove the disposable fixture before final release, rerun validation and confirm old entries remain unchanged. Newly imported real effects also exercise the normal onboarding path.
- **G08 — Fault containment:** Deliberately test invalid/unavailable preview, external source URL failure, and export failure. Present readable unavailable state, disable only broken action, retain permitted metadata/source info; do not crash site.
- **G09 — A11y and responsive:** Keyboard and touch-emulated primary interaction, focus management, contrast/readability, reduced motion, no audio autoplay, narrow/wide representative layouts, no clipped crucial controls; inspect at least one targeted accessibility audit and actual screens.
- **G10 — Rights/source:** Inspect each imported PixelFX file for the relevant license and third-party notices, preserve attribution, and exclude Patch Pixel font. Ensure public assets are lawfully redistributed, protected metadata only where required, and no secrets/private or nonapproved assets are committed.
- **G11 — Release:** Production build passes; actual gallery is deployed to the exact preauthorized Pages address, direct visit works, assets load on project subpath, search and representative preview work there, and recorded release commit matches deployed content. Distinguish git push, successful build, Pages activation and live verified site.
- **G12 — Recoverable handoff:** Final source, source/asset hashes, docs, manifest schema, new-asset creation instructions and evidence are pushed and retrievable. A future Codex/ChatGPT can add a new asset without requiring the owner to explain site internals or manually shuttle asset bytes.

**Quality standard:** Critical G01–G12 outcomes apply unless the scenario is intrinsically N/A and explained. Failures in rights, core functioning previews, export fidelity, bilingual workflows, extensibility, safety or accessible core interactions block a claim of complete release. Automated test counts have no arbitrary minimum. Physical-device and fresh human aesthetic assessments may be reported NOT VERIFIED unless another condition makes them mandatory. Inspect and repair actual rendered visuals autonomously against this document.

## 6. Exact action and publication authorization matrix

| Action | Authorized? | Scope / condition |
| --- | --- | --- |
| Inspect repo and adopted immutable standards | YES | Read current source and history; reconcile drift against this frozen design |
| Full v1 implementation and safe dedicated working-branch pushes | YES | Only jaychtw/game-asset-library; preserve source, hashes and checkpoints |
| Import/edit selected licensed PixelFX assets and library/gallery code | YES | 4–6 vetted effects, local dependencies and notices, within frozen design |
| Create pull request and safely merge to main | YES | After release-critical checks pass; respect current branch rules, reviews and CI; no force push or bypass |
| Configure/use existing GitHub Pages where permitted | YES | This repository's project Pages only, zero paid cost |
| Public release/verification | YES | https://jaychtw.github.io/game-asset-library/ only, after required checks; exact public visibility |
| Ordinary no-cost build tools and CI | YES, bounded | Reproducible tools and approved free-tier GitHub Actions within strict $0; never enable paid overages or expanded data exposure |
| Source/metadata links to public verified resources | YES | Must honor provenance, license and security constraints |
| Possibility repo/catalog/site changes | NO | No edit, commit, deploy or portfolio card |
| Changes to Armorheart, PixelFX upstream or other projects | NO | Read/reference only; no cross-repo modifications |
| Future asset publication based solely on v1 approval | NO | Each new asset needs its own design/publication permission |
| New host, custom domain, external API/backend, user accounts or analytics | NO | Never silently substitute |
| Payment, paid overages, secrets disclosure, unverified redistribution, destructive ref rewrite | NO | Hard stop |

**Safeguarded execution:** Read repo instructions and CI side effects first. Create work branch from a verified baseline, push meaningful checkpoints, validate, create PR, merge only non-destructively with required checks, deploy exact approved Pages destination and verify real live interactions. The pre-freeze observation was main **unprotected**; recheck current settings at execution time. Do not change branch protections merely to complete the job or claim GitHub API/settings capabilities that are absent.

**Pages fallback:** If GitHub Pages is inaccessible, disabled or cannot be configured with available permission and zero cost, finish the source, validated build and ready PR/merge as independently authorized; accurately report **publication blocked**, not released. Do not choose a different public URL. If required license, privacy, safety or irreversible-change conflicts remain after approved safe fallbacks, stop only the affected step and raise one narrow owner decision; continue independent authorized work.

## 7. Deliberate non-goals, fallback order and closure

Non-goals: entire PixelFX library, mass migration of old projects, new playable character commissioned by this v1, universal 3D/audio editor, mandatory generic audio/3D specimen, online asset authoring, community marketplace, account infrastructure, blanket MIT license for all repository files, automatic changes to consuming games, editing Possibility, alternative hosting.

Approved fallback hierarchy for ordinary implementation issues: (1) repair within the frozen behavior; (2) use a documented equivalent source/render/export implementation that preserves real output and notices; (3) use deterministic verified pre-generated sprite-sheet exports where live client export is impractical, with source/runtime retained; (4) isolate unavailable noncritical features and show truthful status only when this contract explicitly permits. Do not silently replace an approved effect with unrelated art, remove required content, weaken rights or drop critical flows.

**Definition of done:** all applicable release-critical acceptance scenarios PASS, honest source/licensing record and recoverable committed files exist, public Pages at the exact approved URL is live and representative interactions have been verified. No intermediate owner sign-off or separate post-build aesthetic gate is required. If source is ready but Pages blocked, status is **PARTIAL — publication blocked**, with clear URLs/commits and one actionable blocker. Deliver one concise final Codex report with exact source SHA/PR or merge, screenshots/evidence, tests/known limits, license findings, and live verification separately from git/CI status.

**One-shot companion:** docs/CODEX-ONE-SHOT.md is the implementation handoff. Future assets follow their own focused asset-first conversation and freeze; adding one does not reopen this v1 design.
