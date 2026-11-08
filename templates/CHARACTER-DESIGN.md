# Playable character — design and freeze template

A conversational guide for ChatGPT, **not a questionnaire that must be filled in before any creative work**.

## 1. Intent and identity

Who is the character? What should controlling them feel like? What must distinguish them immediately from other actors?

## 2. Appearance and readability

Silhouette; anatomy/proportions; costume/armor; materials; palette; key accessories; weapons; primary direction; camera scale; background contrast; explicitly unwanted alternatives.

## 3. Motion and personality

Idle, movement, turning, attacks, hit reaction, defeat, transitions and pose timing **only as needed**. Decide whether motion is acted through a rig/procedural poses or fixed spritesheets. Preview actual animation—not just a polished still.

## 4. Portable delivery

Choose runtime formats and renderer assumptions, frame dimensions, origin/anchors, animation state names, variation controls, performance budget and dependencies. Preserve editable source. Make a minimal standalone viewer to show actual visuals.

## 5. Freeze

Owner approval evidence must identify **the actual runnable visual revision and behavior**. Specify frozen visual invariants, allowed recolors/gear/scales, excluded changes, rights, tested integration scope and known limits.

Package in `assets/characters/<id>/` using the [manifest example](ASSET-MANIFEST.example.json), update the catalog, and use an immutable commit link in the game's FINAL GDD.

**Critical rule:** A still character illustration alone is not a frozen playable-character system. Do not make this standard mandatory for incidental props.
