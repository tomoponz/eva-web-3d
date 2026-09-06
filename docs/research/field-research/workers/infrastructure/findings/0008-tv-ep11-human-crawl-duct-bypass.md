# TV Episode 11 human crawl-duct / emergency bypass geometry

## Scope

Episode 11 (`静止した闇の中で / The Day Tokyo-3 Stood Still`) only. This unit examines the human-scale duct passages used by Shinji, Rei and Asuka during the blackout: how the duct network relates to ordinary corridors, how it is entered, what movement posture it requires, and how it reconnects to the EVA-area boundary.

This unit does **not** model Cage interior geometry. The Infrastructure-side duct is followed only to the boundary where the pilots emerge into the EVA area.

## Worker

WORKER B — NERV Infrastructure

## Continuity

TV series only. Rebuild and EoE excluded.

## Summary

Episode 11 supports at least two distinct human duct-use events during the blackout. The pilots first take a duct as a shortcut before reaching a route-choice junction. Later, after encountering a door that cannot be opened by hand, Rei proposes breaking into a duct and the group subsequently crawls through one again. This establishes a human-passable, low-clearance utility passage that can bypass blocked corridor circulation, but does not prove that the duct is a normal personnel or maintenance route.

For Web 3D, this should be represented as a narrow crawl-space network connected to the corridor graph through evidence-tagged transition nodes, not as a full-height service corridor. Exact cross-section, material, maintenance-panel design, duct dimensions and whether both crawl sequences belong to the same duct network remain unknown.

## Findings

### Finding 1 — Episode 11 contains a deliberate duct shortcut before the branch node

**Claim:** The pilots deliberately use a duct as a shortcut while moving toward NERV Headquarters.

**Evidence class:** `SECONDARY`

**Confidence:** High for duct traversal; Medium for the secondary label `air-conditioning duct`

**Evidence:** The English episode transcript explicitly marks Shinji, Rei and Asuka crawling through a duct after Rei proposes a shortcut. A Japanese episode summary independently describes the trio crawling through an `空調ダクト` to reach their destination.

**Sources:** S2, S3

**3D consequence:** Human circulation during emergency conditions can leave the normal corridor graph and enter a physically separate narrow utility passage.

### Finding 2 — A second duct traversal is used as a bypass when a door cannot be opened

**Claim:** Later in the same route, a blocked/manual-unopenable door causes the pilots to use a duct as an alternate path.

**Evidence class:** `SECONDARY`

**Confidence:** High for the sequence; Medium for exact spatial adjacency

**Evidence:** Shinji states that he cannot open the door by hand. Rei replies that they should break the duct and proceed through it. The following scene again shows the trio crawling through a duct.

**Sources:** S2, S4, S5

**Assessment:** The sequence strongly supports a corridor-to-duct bypass transition. It does **not** reveal whether they break a wall panel, ceiling panel, floor panel, grille, hatch, or the duct shell itself.

**3D consequence:** Model this as `BlockedRoute -> BreachTransition -> CrawlDuctSegment`, with the breach location and opening geometry configurable/unknown.

### Finding 3 — The duct is low-clearance human crawl space, not a walkable service corridor

**Claim:** The human duct requires crawling and constrains the occupants into a longitudinal order.

**Evidence class:** `SECONDARY` scene/action evidence

**Confidence:** High

**Evidence:** Multiple transcriptions describe all three pilots as crawling. During the later traversal, Asuka tells Shinji not to look forward; Shinji answers that he cannot advance if he does not look forward. This exchange is only spatially meaningful if the characters are aligned along the duct and movement is constrained enough that normal upright passing is not practical.

**Sources:** S2, S4, S5

**Scale consequence:** Human passability is verified qualitatively. Exact height/width is not. The duct should force a crawl/crouch locomotion state rather than ordinary walking.

### Finding 4 — Human use does not prove the duct was designed as a personnel route

**Claim:** Episode 11 demonstrates emergency human traversal, but not intended human circulation or formal maintenance-access design.

**Evidence class:** `INFERENCE`

**Confidence:** High

**Evidence:** The first duct is selected as an improvised shortcut, and the later duct is entered only after Rei proposes breaking it to bypass an unusable door. No checked source identifies the passage as a staff corridor, inspection tunnel, or designated escape route.

**Sources:** S2, S3, S4, S5

**3D consequence:** Do not add normal corridor signs, standard doors, handrails, dedicated walking clearance or permanent human-access hatches as Canon without separate evidence.

### Finding 5 — The later duct reconnects to the EVA-area boundary by an abrupt exit

**Claim:** The later human duct terminates at or above the EVA-area boundary, where the pilots emerge/fall out of the duct.

**Evidence class:** `SECONDARY`

**Confidence:** High for the scene-level connection; Low for exact outlet geometry

**Evidence:** The transcript sequence states that Shinji and Asuka fall from the duct while Rei lands on the floor, after which Ritsuko addresses them and the scene is in the EVA preparation area.

**Sources:** S2, S6

**Topology classification:** `SUPPORTED_CONNECTION`

**Cross-worker boundary:** The Infrastructure-side duct-to-EVA-area boundary is Worker B scope. The Cage-side receiving geometry, catwalk/deck, local hatch, and exact landing area are Worker A scope and are not modeled here.

### Finding 6 — The first and second duct traversals may be different segments

**Claim:** Current public evidence does not establish that the pre-junction shortcut duct and the later blocked-door bypass duct are the same continuous duct.

**Evidence class:** `UNKNOWN`

**Confidence:** High that identity is unresolved

**Evidence:** The episode places corridor navigation and branch-choice events between the two crawl sequences. No checked source provides a layout linking the two duct segments.

**Sources:** S2, S3, S4, S5

**Topology consequence:** Represent them as separate duct nodes/segments unless future layout evidence proves identity.

### Finding 7 — Exact duct cross-section and construction are unresolved

**Claim:** Current evidence does not support a Canon value for duct cross-section, wall thickness, material, reinforcement, access-panel type, grille type, fan equipment, fire damper, or dimensions.

**Evidence class:** `UNKNOWN`

**Confidence:** High that checked public evidence is insufficient

**Evidence:** Public transcripts and summaries establish crawling and route function, not a dimensioned or clean production drawing. Current official setting-material metadata confirms that production setting sheets exist as a publication class, but does not expose this Episode 11 duct sheet publicly.

**Sources:** S1, S2, S3

**3D consequence:** Keep `ductWidth`, `ductHeight`, `sectionProfile`, `panelPitch`, `liningMaterial`, `accessPanelType`, and `breachOpeningSize` configurable.

## Spatial Structure

Evidence-supported minimum graph:

```text
R-07 / internal blackout route
        ↓
shortcut decision
        ↓
HUMAN CRAWL DUCT A
        ↓
internal route / branch-node network
        ↓
blocked door
        ↓
BREACH TRANSITION
        ↓
HUMAN CRAWL DUCT B
        ↓
EVA-area boundary opening
        ↓
[Worker A scope beyond boundary]
```

The relation `Duct A = Duct B` is `UNKNOWN_CONNECTION`.

## Connectivity

| Edge | Classification | Notes |
|---|---|---|
| internal blackout route -> first shortcut duct | `SUPPORTED_CONNECTION` | Rei chooses a shortcut; the following scene is a human duct crawl. |
| first duct -> later corridor/branch network | `SUPPORTED_CONNECTION` | Scene progression supports re-entry to ordinary circulation; exact outlet geometry/distance unknown. |
| blocked corridor door -> breach transition | `SUPPORTED_CONNECTION` | Door cannot be opened; Rei proposes duct breach as bypass. |
| breach transition -> second human crawl duct | `VERIFIED_CONNECTION` at scene level | The next route segment is again a duct crawl. |
| second duct -> EVA-area boundary | `SUPPORTED_CONNECTION` | Pilots emerge/fall into the EVA preparation area. |
| first duct = second duct network | `UNKNOWN_CONNECTION` | No layout proves network identity. |

## Human Circulation

- At least three adolescents can traverse the duct sequentially.
- Movement posture is crawling, not upright walking.
- The route is uncomfortable/awkward enough to be commented on by Asuka.
- The second duct is used only because the ordinary route is blocked, which makes it an emergency/improvised bypass in this scene.
- There is no evidence that two people can pass side-by-side inside the duct.
- There is no evidence of normal public/staff traffic, wayfinding signage, or designated evacuation markings inside the duct.

For a Web 3D player, entering this segment should switch locomotion and camera clearance to a crawl-space mode and meaningfully reduce movement speed/turning room.

## Maintenance / Logistics

Current TV evidence does not establish:
- formal maintenance walkway clearance;
- inspection doors at regular intervals;
- ladders, rails or service lighting;
- fan/air-handler locations;
- fire/smoke dampers;
- drainage;
- cable trays inside the duct;
- a designed emergency-escape function.

These must not be added as Canon merely because they are common in real facilities.

## Visual Observations

No clean, well-attributed public frame of the exact human crawl-duct interior was located during this cycle's image search. Therefore this finding does **not** assert:
- rectangular vs circular section;
- sheet-metal rib spacing;
- color/material;
- visible fasteners;
- integrated lights;
- exact grille/hatch design.

The visual implementation should remain evidence-light until storyboard/layout/background or setting sheets are inspected.

## Scale Evidence

- **Official numeric dimensions:** none located.
- **Relative:** human-passable for school-age pilots while crawling.
- **Upright clearance:** not supported; scene explicitly uses crawling.
- **Parallel passing width:** unknown; scene behavior is consistent with single-file use.
- **Production recommendation:** configure for one avatar in crawl posture with collision margins, but do not record the chosen metric values as Canon.

## 3D Modeling Implications

Recommended representation:

```text
CrawlDuctSegment
├─ width: Parameter
├─ height: Parameter
├─ sectionProfile: Unknown
├─ panelPitch: Parameter
├─ bendRadius: Unknown
├─ lighting: Unknown
├─ crawlOnly: true
├─ normalPersonnelRoute: false / unsupported
└─ evidenceTags

DuctBreachTransition
├─ sourceSpace: Corridor / blocked-route zone
├─ breachSurface: Unknown
├─ openingSize: Parameter
├─ permanentHatch: Unknown
├─ state: INTACT -> BREACHED
└─ interaction: Episode-specific / production choice

DuctExitBoundary
├─ destination: EVA-area boundary
├─ exitType: Unknown
├─ dropHeight: Unknown
└─ WorkerAInterface: true
```

Implementation priorities:
1. make the duct a real graph edge, not decorative background;
2. force crawl locomotion;
3. separate intentional shortcut entry from forced/breached bypass entry;
4. avoid assuming a maintenance hatch at either end;
5. keep exact section and dimensions data-driven/configurable.

## Web 3D Classification

| Element | Classification |
|---|---|
| Crawl duct shell | `Must be geometry`; `Can be procedural` |
| Repeating shell/panel modules | `Can be instanced` / `Can be procedural` |
| Breach opening | `Requires unique modeling` or procedural boolean depending implementation |
| Breach state | `Requires interaction` if player-triggered; otherwise authored sequence |
| Crawl locomotion volume | `Requires interaction` |
| Exact duct cross-section | `Unknown` |
| Maintenance hatch | `Unknown` |
| Service lighting | `Unknown` |
| EVA-area receiving geometry | Worker A scope |

## Real-World Engineering Analogies

**PRODUCTION / ENGINEERING INFERENCE — not Evangelion Canon**

Real HVAC and process-air ducts are normally not primary personnel corridors; human entry, where permitted, is typically maintenance/confined-space access through designated panels or openings. This analogy supports treating the Episode 11 duct as a different movement class from a corridor, but it does **not** justify adding real-world hatch spacing, OSHA-style access geometry, fire dampers, or duct sizes to the Evangelion scene without evidence.

## Contradictions

No direct continuity contradiction was found.

Potential terminology issue:
- S3 calls the human passage an `空調ダクト`.
- English transcripts generally say only `duct`.

Assessment:
- `duct` is well supported.
- `air-conditioning duct` is useful secondary identification but should not be elevated to `CANON_EXPLICIT` without primary script/setting verification.

## Unknowns

- exact cross-section profile;
- width and height;
- wall/lining material;
- whether the first and second crawl segments are connected;
- exact breach surface and method;
- whether a permanent access panel existed before breach;
- exact outlet into the EVA-area boundary;
- duct elevation relative to adjacent corridor floor/ceiling;
- whether the duct is active HVAC, exhaust, service-air, or another utility passage;
- fan/airflow equipment and dampers;
- normal maintenance accessibility.

## Questions for Claude / Deep Research

1. Do the Episode 11 storyboard/layout/background sheets show the human duct interior cross-section or identify it specifically as `空調ダクト` / ventilation duct?
2. Is the second duct entered through a destroyed wall/ceiling panel, grille, inspection hatch, or broken duct shell?
3. Are the first shortcut duct and later blocked-door bypass shown on a common layout or route map?
4. Does the production material define the outlet at the EVA-area boundary, and if so which side belongs to Cage-specific Worker A scope?
5. Is any human-scale measurement recoverable from character/layout sheets without inventing a meter value?

## Cross-Worker Boundary Notes

- Infrastructure-side duct routing, bypass logic and crawl-space geometry are Worker B scope.
- The receiving EVA Cage/maintenance deck, Cage-local hatch/opening, landing surface and Cage circulation are Worker A scope.
- No Cage-specific geometry was researched or edited in this unit.

## Sources

See `../sources/0008-tv-ep11-human-crawl-duct-bypass-sources.md`.
