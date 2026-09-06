# Rebuild EVA Cage maintenance decks — general circulation vs equipment-specific work platforms

## Scope

This unit asks a narrow implementation question: which visible human-access surfaces in a Rebuild-era EVA Cage can be treated as general circulation/service decks, and which can actually be identified as equipment-specific maintenance platforms?

It does **not** assume that every platform near an EVA is a maintenance deck. It also does not infer a fixed count or anatomical height for platforms that are not evidenced.

## Continuity

- Primary target: Rebuild (`:序` / `:破`-era visual language)
- Primary reconstruction evidence: SMALL WORLDS Evangelion Hangar
- Foundation reports are treated as candidate research material pending Claude audit.

## Summary

Official SMALL WORLDS material explicitly states that Units 01, 00 and 02 are **stored and maintained** in the hangar. However, the official images currently available do not establish a separate fixed platform whose sole purpose is maintenance of a specific EVA component.

The visually defensible human-access topology remains:

1. a broad shared floor apron in front of the cage bays;
2. at least one raised wall-side deck with guardrail and stair connection;
3. restraint / launch hardware that is machinery, not automatically a personnel deck.

The raised wall-side deck is best classified as a **general service/circulation deck** unless a production source proves a component-specific maintenance role. A distinct chest-, shoulder-, head-, or Entry-Plug-specific maintenance platform remains `UNKNOWN`.

This matters for Web 3D: the scene should not be filled with invented permanent work platforms merely because the Cage is described as a maintenance space. General access geometry can be built now; equipment-specific platforms should remain modular/optional until evidenced.

## Findings

### Finding 1 — The Cage has an explicit maintenance function

**Claim:** Official SMALL WORLDS material identifies the Cage as a place where the three EVAs are stored and maintained.

**Evidence class:** `OFFICIAL_META`

**Confidence:** High for the exhibit's stated function; Medium for exact film-continuity workflow.

**Evidence:** The official Hangar page states that Units 01, 00 and 02 are stored in the Cage and that maintenance is performed there.

**Sources:**

- SMALL WORLDS, `エヴァンゲリオン格納庫エリア`: https://smallworlds.jp/area/eva_hangar/
- English page: https://smallworlds.jp/en/area/eva_hangar/

**Web 3D classification:** `Must inform layout`, but the statement alone does not prove specific platform geometry.

### Finding 2 — The broad floor apron is a shared work/circulation surface, not a component-specific platform

**Claim:** Official Hangar imagery shows a broad horizontal apron spanning the fronts of multiple cage bays, populated by many NERV staff figures.

**Evidence class:** `VISUAL_OBSERVATION`

**Confidence:** High for the official exhibit; Medium-Low for exact Rebuild production geometry.

**Evidence:** Official image `03.jpg` shows a continuous floor surface in front of Units 02, 00 and 01. Staff figures are distributed across it and the surface is not tied to one EVA anatomical component.

**Sources:**

- SMALL WORLDS official image: https://smallworlds.jp/wp/wp-content/themes/smallworlds/area/eva_hangar/03.jpg

**Assessment:** Treat this as shared floor-level circulation / staging / maintenance space. Do not label it an equipment-specific maintenance deck.

**Web 3D classification:** `Must be geometry`.

### Finding 3 — The visible raised deck is wall-side general service access

**Claim:** Official Hangar imagery shows at least one raised wall-side deck with guardrail and stair access, but the image does not establish that it is dedicated to servicing a particular EVA component.

**Evidence class:** `VISUAL_OBSERVATION`

**Confidence:** High for visible deck/stair geometry in the exhibit; Low-Medium for its exact production role.

**Evidence:** Official image `04.jpg` shows personnel standing on a broad raised ledge attached to the wall, with a guarded stair descending below. No component-specific servicing fixture or direct contact bridge to an EVA is established in the frame.

**Sources:**

- SMALL WORLDS official image: https://smallworlds.jp/wp/wp-content/themes/smallworlds/area/eva_hangar/04.jpg

**Assessment:** Until stronger evidence exists, classify it as a general service/circulation deck rather than a dedicated head/chest/shoulder maintenance platform.

**Web 3D classification:** `Must be geometry` for the minimum topology; railing modules can be `Can be instanced`.

### Finding 4 — “Maintenance occurs here” does not prove permanent component-specific platforms

**Claim:** No traceable official source found in this cycle proves permanent platforms dedicated to a specific EVA anatomical work point such as chest, shoulder, head, or Entry Plug.

**Evidence class:** `UNKNOWN`

**Confidence:** High that the evidence gap exists; no claim is made that such platforms do not exist.

**Evidence:** The official Hangar page establishes the maintenance function, while the official images establish shared floor and wall-side access. Neither source labels a visible structure as a component-specific maintenance platform.

**Sources:**

- SMALL WORLDS Hangar page and images above.

**3D consequence:** Do not convert maintenance function into unsupported geometry. Keep future component-specific work platforms as optional modular assets until source-backed.

### Finding 5 — Gemini Foundation's “multi-level movable maintenance catwalk decks” remains unverified

**Claim:** The Gemini Foundation states that multiple movable maintenance catwalk decks project around the EVA, but the current official reconstruction evidence does not independently verify the `multi-level` or `movable` parts of that claim.

**Evidence class:** `SECONDARY` for the Foundation claim; `UNKNOWN` for canon status.

**Confidence:** Low pending source trace / Claude audit.

**Evidence:** The Foundation contains the phrase `多層に渡る保守用移動キャットウォークデッキ群がせり出す`. Current official SMALL WORLDS evidence only securely establishes a floor apron and at least one wall-side deck/stair.

**Sources:**

- Repository candidate report: `docs/research/raw-reports/gemini/0001-foundation-visual.md`
- SMALL WORLDS official Hangar page and images.

**Assessment:** This is not a direct contradiction because additional platforms may exist outside the available views. It is an evidence-strength mismatch and must remain audit-gated.

## Visual Observations

### Official image 03

- Multiple EVA bays share one foreground apron.
- Many human-scale figures occupy the apron.
- The apron spans laterally rather than terminating at one service point.
- Large vertical structures beside each EVA read as cage/restraint architecture, not as walkable decks.
- No clearly visible permanent platform projects into a specific chest/head work zone.

### Official image 04

- A broad horizontal wall-side ledge supports several people.
- A continuous guardrail protects the open edge.
- A stair links the raised ledge to a lower level.
- The deck reads as a route / work zone along the wall rather than a narrow one-component access bridge.

## Spatial Implications

A safe minimum Cage circulation / maintenance topology is:

`shared floor apron -> stair -> raised wall-side service deck`

This topology can support ordinary inspection, staff movement, observation, staging, and access to wall equipment without asserting unsupported component-specific platforms.

Equipment-specific maintenance access should be represented separately as one of:

- future retractable platform;
- temporary mobile work stand;
- crane / suspended access;
- localized bridge;
- or no permanent geometry until evidence appears.

These are production options, **not canon claims**.

## Human-Scale Implications

- Staff figures on both floor and raised deck provide two vertical human reference planes.
- Guardrails and stairs provide stronger scale cues than arbitrary numerical height labels.
- A player walking the floor apron should perceive the EVA as a vertical wall-like object; ascending the service stair creates a second comparison height without requiring many invented catwalk levels.

## 3D Modeling Implications

### Build now

- `Must be geometry`: broad floor apron / cage-front work floor.
- `Must be geometry`: at least one wall-side raised deck and stair module.
- `Can be instanced`: rail posts, stair treads, small wall brackets, repeated safety fixtures.
- `Can be decal`: caution stripes, bay labels, deck-edge markings.

### Keep modular / uncommitted

- head-specific work platform;
- shoulder-specific service deck;
- chest/core work platform;
- Entry Plug personnel bridge;
- mobile maintenance platform count;
- retract / translation mechanisms.

These should use swappable scene anchors or sockets rather than being fused into the Cage shell.

## Lighting / Material Implications

Current evidence supports ordinary industrial deck treatment, but not exact material specification.

Production-safe interpretation:

- opaque structural floor for broad apron;
- metal or painted structural deck for raised access;
- metal guardrails;
- localized work lights near circulation surfaces.

Exact grating pattern, paint system, roughness, and corrosion remain production recommendations rather than observed canon facts.

## Scale Evidence

- `Relative`: human figures versus apron, stair, and raised deck are visible in official reconstruction imagery.
- `Unknown`: exact deck height, stair rise/run, deck width, railing height, and distance to EVA body.
- No fixed real-world dimension should be locked from these images alone.

## Contradictions

### Candidate Foundation vs currently traceable evidence

**Claim A:** Multiple movable maintenance catwalk decks project around the EVA.

**Source A:** Gemini Foundation candidate report.

**Claim B:** Official reconstruction evidence securely establishes a shared apron plus at least one wall-side raised deck/stair; it does not establish a count or movement mechanism.

**Source B:** SMALL WORLDS official Hangar material.

**Assessment:** Evidence-strength mismatch, not disproof.

**3D consequence:** Implement only the minimum topology as required geometry. Treat additional maintenance platforms as optional modules.

**Needs deeper research:** Yes.

## Unknowns

- Does Rebuild production material define dedicated maintenance platforms at head, chest, shoulder, forearm, or Entry Plug height?
- Are any such platforms permanent, retractable, mobile, or crane-supported?
- Is the visible SMALL WORLDS wall-side deck production-derived or exhibition-specific?
- What equipment is serviced from the visible raised deck?
- Are different EVA bays given identical or role-specific maintenance access?
- What platform positions must clear restraint-panel removal and linear-rail transfer?

## Questions for Deep Research / Claude Audit

1. Can the Gemini claim `多層に渡る保守用移動キャットウォークデッキ群がせり出す` be traced to a production layout, official setting sheet, or identifiable film frame?
2. Does any `:序` / `:破` setting material explicitly distinguish general personnel circulation decks from EVA-component maintenance platforms?
3. Is the SMALL WORLDS raised wall-side deck based on original production CG/layout data or an exhibition-specific access composition?
4. Are maintenance platforms shown retracting before restraint-panel removal or launch transfer?

## Sources

### Official / official reconstruction

- SMALL WORLDS Evangelion Hangar: https://smallworlds.jp/area/eva_hangar/
- SMALL WORLDS Evangelion Hangar (English): https://smallworlds.jp/en/area/eva_hangar/
- SMALL WORLDS official Hangar image 03: https://smallworlds.jp/wp/wp-content/themes/smallworlds/area/eva_hangar/03.jpg
- SMALL WORLDS official Hangar image 04: https://smallworlds.jp/wp/wp-content/themes/smallworlds/area/eva_hangar/04.jpg
- EVA-INFO SMALL WORLDS launch article: https://www.eva-info.jp/9321

### Candidate repository research

- `docs/research/raw-reports/gemini/0001-foundation-visual.md` — candidate only; pending audit.
