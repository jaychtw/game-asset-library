# Codex — ONE-SHOT Game Asset Library v1.0: Build, Verify & Publish

**Mission:** Implement, self-correct, safely merge, publish and verify the entire owner-frozen Game Asset Library v1.0 in ONE assignment. This is a **Release**, not an experiment. Do not ask for ordinary intermediate design, POC, gallery-art, testing or acceptance approvals. Stop only for AICP's genuine exceptions after exhausting approved fallbacks.

## Immutable authority — read these BEFORE making changes

1. **FINAL GDD:** https://github.com/jaychtw/game-asset-library/blob/39aebfc29dbb23fafa646cbaf8cada065b2ec457/docs/FINAL-GDD.md — this is the complete owner-approved design and permission contract. Its acceptance scenarios G01–G12 and E01 extensibility are release-critical.
2. **Pinned AICP 2.1.1:** https://github.com/jaychtw/game-development-standards/blob/61c24205f437826f1fc901f1741c49b677502f66/AI-COLLABORATION-PROTOCOL.md
3. **Pinned UGDS 2.0.0 (applicable quality principles only):** https://github.com/jaychtw/game-development-standards/blob/61c24205f437826f1fc901f1741c49b677502f66/UGDS.md
4. **Pinned one-shot brief template:** https://github.com/jaychtw/game-development-standards/blob/61c24205f437826f1fc901f1741c49b677502f66/templates/CODEX-BRIEF.md
5. **Existing library:** https://github.com/jaychtw/game-asset-library, its README, docs/ASSET-CONTRACT.md, catalog, asset/manifest templates, validation script and immutable baseline cf3723742b37ed057a9dc62b3f8037f6867b9b33. Read current main and this GDD's handoff commit; recover any newer approved changes before implementation, do not assume cached memories are authoritative.
6. **PixelFX source:** https://github.com/patch-gg/pixelfx; pre-inspected revision a84159688af3ca37a4be05a0d422b94451b2e24e. Pin the exact commit used, audit every copied file's rights and notices. Preserve MIT/copyright terms and third-party notices. DO NOT copy the separately excluded Patch Pixel font.

**Approved delivery:** source repository is public **jaychtw/game-asset-library**; working branch pushes YES; PR and safe merge to main YES after checks; GitHub Pages public deploy and real URL verification YES **only** at https://jaychtw.github.io/game-asset-library/; budget strictly **USD $0**. Standard free CI/GitHub Actions allowed only if genuinely free within existing settings. Never enable paid overages, alternative hosts, privacy-invasive services, or settings overrides. **Possibility: NOT AUTHORIZED**, and no other project repo changes. Future assets require separate asset-level publication authorization.

## Your responsibilities and execution sequence

### 0. Preflight and recoverability

- Fetch the *full* GDD and pinned standards, not snippets; use their current canonical links and the immutable revisions above. Verify real repo branch head, status, existing manifest contract, Pages/Actions settings and effects of pushes. If you cannot access a specific settings API, do not guess what is configured.
- Reconcile existing source and this contract without destroying earlier records. Keep a single authoritative FINAL GDD and this execution brief; no speculative new design drafts.
- Start on a dedicated implementation branch from verified current source (if the docs handoff branch/PR is not yet merged, include it safely). Commit and push recoverable meaningful checkpoints with source/assets rather than expecting the owner to shuttle files. No force pushes, unrelated writes, silent branch-protection modifications, unreviewed secrets or nonapproved spending.

### 1. Build the whole released product

- Deliver a polished **PixelFX-inspired dark gallery** with responsive grid, dynamically derived category chips, search (ID/name/description/tags), result counts/empty states, actual preview cards and large keyboard/touch-accessible asset inspector. Source detail and status/rights/integration/lineage are clearly visible. Support EN and Traditional Chinese (zh-TW) with persistent mid-session UI state, and local-friendly non-sensitive locale choice.
- The canonical source of content is the repository asset manifests and **catalog/index.json**, NOT manually crafted HTML cards or hardcoded asset category lists. Make the gallery auto-discover newly cataloged packages at build time. Protect against unsafe paths/URLs/code loading. Preserve existing asset metadata and validate checksums/links. Add a reusable concise **New Asset Creation Contract** for future ChatGPT/Codex instances, including separate future freeze/publication permissions.
- Include the existing **Armorheart battleship** record, its origin/anchors/hash and accurate unverified cross-project rights. Do not reinterpret existing public files as a license or grant new downloads/republication absent verification. Show honest metadata-only/preview-restricted fallback where needed. Do not edit the Armorheart origin repo.
- Select and add **four to six** genuinely distinct/representative PixelFX effects. Preserve their exact legally usable source, minimal runtime dependencies, editable/regeneration materials, license notices, origin commits and hashes. Do not import the entire collection or copy the excluded font. Imported effects must run without runtime CDN/API access. Provide faithful animation and applicable controls (pause, replay, speed/background/palette/seed/mirror where the effect actually supports them).
- For eligible PixelFX effects support faithful sprite-sheet **PNG plus frame/timing/pivot JSON** downloads, generated in browser or supplied from deterministic validated pre-rendering at the pinned revision. Source downloads/integration instructions only where rights permit. Missing or failed exports must be disabled with meaningful messages, never silently fabricated.
- Implement stable asset IDs, parent-child derivative references with independent identities, source/version pins, rights/creative/integration status axes, truthful preview/export status and capability-based UI. A new asset must not require hand-editing gallery layout or category navigation; type adapters can be extended for genuinely new formats later. Do not create unapproved placeholder characters/UI/audio.
- Preserve minimum runnable/inspectable source per asset; no general asset editor, accounts, uploads, backend, telemetry, alternative host or unrelated site redesign. Make core gallery and imported preview runtime self-contained from committed local/static resources.

### 2. Prove the contract, including E01

Design a proportionate test plan internally. You are empowered to iterate and self-correct. DO NOT seek another human approval step.

Execute and report evidence of **every GDD scenario G01–G12**, including:
- Normal and no-results search/filter; selecting/closing detail; mouse/keyboard/touch responsive usage, bilingual complete flows and language switch retaining UI state.
- Real imported effect playback, customization and reversal, reduced-motion/offscreen pause, and valid source-backed sprite-sheet PNG/timing JSON exports. Real visual inspection of representative gallery states on narrow/wide viewports, comparison to approved dark high-contrast direction, not tests alone.
- Valid manifests, license provenance/NOTICE preservation, allowed/blocked downloads, hashes, URL/path safety, honest battleship rights and no silent claims of cross-project verification.
- Broken preview/export/source failure without whole-gallery failure, appropriate fallback states.
- **E01 extensibility test:** introduce a valid temporary representative asset package and manifest, regenerate/update catalog, rebuild and prove it becomes searchable and inspectable WITHOUT editing gallery page/layout/category presentation code. Remove the disposable fixture and rerun relevant checks. Also verify the actual selected PixelFX additions travel through the same path. This is essential, not optional.
- Production build and at least one meaningful successful and failure/recovery interaction; accessibility inspection with report, working keyboard focus/contrast/labels, reduced-motion. Fix all release-critical failures. Do not chase vanity test counts or make up unperformed physical-device/human aesthetic approval.

### 3. Safely ship if preauthorized and feasible

- Confirm all critical acceptance criteria PASS and no known blocking license/privacy/security defects before merging/publishing. Maintain reproducible source and short release evidence/limitations.
- Push branch/checkpoints; create a PR, respect repository rules and any new protections, wait for required checks, safely merge to main when authorized and allowed. No force push or bypass.
- Configure/use only the approved **GitHub Pages project URL** within USD $0/permission limits; deploy exactly to https://jaychtw.github.io/game-asset-library/ and verify fresh live page, correct project subpath, representative real search/detail/effect/export experience. A successful build or source merge does not by itself prove deployment.
- Update root README and useful repository docs so future agents know the correct gallery URL, immutable source/catalog contract, licenses, preview/export/asset-onboarding procedure and current status. Do not change Possibility or other repositories.
- **If Pages cannot be activated/accessed safely:** complete independently authorized source/build/PR or merge operations, preserve durable verified artifacts, mark **PARTIAL — publication blocked** with exact reason. No different host. If a material art, licensing, cost, permission or safety decision truly cannot be resolved with this GDD's fallbacks, isolate that operation, keep independent authorized work moving and raise only ONE narrow question with evidence and safest recommendation.

## Explicit permitted / prohibited authority

| Operation | Status |
| --- | --- |
| Implement full frozen GDD, choose toolchain, self-correct visual/technical work | YES |
| Create working branch, reproducible source/asset checkpoints | YES |
| Import 4–6 vetted legal PixelFX effect packages and local dependencies | YES |
| Create PR, merge main when checks/protections allow | YES |
| Public GitHub Pages at **exact** gallery URL after passing mandatory criteria | YES |
| Routine cost-free CI/build setup in the existing repo with no spending | YES |
| Directly modify Possibility or add its entry | NO |
| Modify Armorheart, PixelFX upstream, standards or other project repos | NO |
| Add accounts, backend, telemetry, paid hosting/API, another public site or enable overages | NO |
| Override source/license restrictions, expose secrets, force push, bypass permissions | NO |
| Publish future independent assets without their own release authorization | NO |

## Completion report — one final report, no additional routine acceptance gate

Report **COMPLETE / PARTIAL / BLOCKED** truthfully and concisely:
1. Implemented feature set and imported asset IDs, origin commits and license/notice evidence.
2. Verified source branch/final main commit and PR/merge links, with pinned final asset/library revisions.
3. Acceptance G01–G12 and E01 checks PASS/FAIL/NOT VERIFIED/N/A; build, actual visuals/screenshots, representative input/language/a11y/export integrity and known limitations.
4. Public Pages status **separately**: exact URL, live verification time/behavior, or exact blocker. No false declaration of deployment.
5. Possibility: **not authorized, unchanged**.
6. Remaining owner action **only** for a genuine narrow blocker. No proposal for a mandatory second design or acceptance phase.

**Final instruction:** Do the entire authorized release in this one assignment. The designer has already frozen the requirements, quality criteria and publication authority. If a technical method fails, adapt within approved fallbacks and repair it rather than asking the owner to manage your implementation.
