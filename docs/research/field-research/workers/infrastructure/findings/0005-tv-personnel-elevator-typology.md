# TV-series NERV personnel elevator typology and human vertical circulation

## Scope

This Research Unit covers only **human-scale / pilot-scale personnel elevators inside TV-series NERV facilities**. It asks whether the TV series supports one universal lift type, what cabin treatments are visibly evidenced, what human circulation functions they perform, and what a Web 3D prototype can safely implement.

It does **not** cover EVA launch elevators, Cage-specific lifts, large freight elevators, inclined GeoFront transport, or Rebuild elevator designs.

## Worker

WORKER B — NERV Infrastructure

## Continuity

Primary continuity: TV series (1995–1996).

Two TV scenes are used as cross-checks:
- Episode 22 (`せめて、人間らしく`) for an enclosed passenger cabin.
- Episode 12 (`奇跡の価値は`) for a more industrial pilot-transport lift treatment.

The official Blu-ray catalog distinguishes Episode 22's on-air and video-format versions. Public secondary sources indicate the famous elevator scene was visually revised for the later format, so exact decorative proportions should not be assumed identical across both cuts.

EoE and Rebuild geometry are excluded from this Unit.

## Summary

The TV-series evidence does **not** support a single universal NERV elevator design.

At minimum, a clearly **enclosed passenger elevator** exists: Episode 22 places Rei and Asuka in a human-scale lift with smooth pale green enclosure walls and a horizontal colored band. The scene depicts ordinary personnel/pilot circulation between NERV levels, including upward travel and exit at a destination floor.

Episode 12 provides a separate industrial-looking pilot transport scene on the way to the Evangelions, where secondary visual documentation emphasizes an exposed metal grille / cage-like overhead treatment and visible movement. This second case should not be merged geometrically with the enclosed Episode 22 cabin without stronger production sheets.

The principal field-research correction is therefore to the Gemini Foundation's stronger statement that NERV elevator cages are generally *not enclosed* and are formed as exposed metal-frame / expanded-metal industrial lifts. That visual language may apply to some industrial lifts, but Episode 22 proves that **enclosed smooth-walled personnel lifts also exist in TV continuity**.

For Web 3D, the correct abstraction is a small **personnel-elevator family**, not one canonical elevator prefab.

## Findings

### Finding 1 — TV NERV includes a fully enclosed human-scale passenger elevator

**Claim:** Episode 22 contains an enclosed passenger elevator used by Rei and Asuka for ordinary vertical circulation within NERV.

**Evidence class:** `VISUAL_OBSERVATION` + `SECONDARY` scene-context evidence.

**Confidence:** High for existence and enclosed character; Medium for exact finishes because publicly accessible reproductions differ by source/cut.

**Evidence:**
- An open-access academic study reproduces the Episode 22 lift scene as a figure credited to khara and describes the lift interior as pale green with a horizontal purple band.
- Episode summaries consistently identify Rei and Asuka as riding an elevator; one Japanese summary states that the closed space is moving upward and that Asuka exits when it reaches the intended floor.
- The famous static composition shows two full-size teenagers standing apart within the cabin, one able to lean against a side wall, establishing a human-scale enclosed interior rather than a one-person service cage.

**Sources:**
- *Anime Studies: Media-Specific Approaches to Neon Genesis Evangelion*, open-access chapter figure 1.4, lift scene credited `© khara, inc.`: https://uplopen.com/books/9767/files/56ff60ff-fa6a-45d7-85b2-1088fbede8a3.pdf
- Episode 22 secondary summary: https://36ch.com/eva_story22
- EVANGELION official TV-series Blu-ray catalog identifying both OA and video-format Episode 22: https://www.evangelion.jp/ng.html

### Finding 2 — The enclosed Episode 22 cabin performs normal level-to-level personnel circulation

**Claim:** The Episode 22 lift is not merely a static room or symbolic set; it is shown functioning as a normal elevator carrying occupants upward to a destination floor.

**Evidence class:** `SECONDARY` description of canonical scene action.

**Confidence:** Medium-High.

**Evidence:** A detailed Japanese episode summary describes Asuka encountering Rei in the elevator, traveling upward in the closed space, and leaving through the opened elevator door at the destination floor.

**Topology consequence:** This establishes at least one ordinary vertical-circulation edge inside NERV. It does **not** establish the exact floor names, shaft height, stop count, or whether the same shaft continues to Central/Terminal Dogma.

### Finding 3 — Relative capacity is at least multi-person, but no maximum capacity is known

**Claim:** TV personnel lifts are demonstrably capable of carrying multiple people simultaneously.

**Evidence class:** `VISUAL_OBSERVATION` / `CANON_EXPLICIT` scene occupancy.

**Confidence:** High for observed occupancy; Low for any capacity rating.

**Evidence:**
- Episode 22 visibly carries two teenage passengers with substantial separation.
- Episode 12 places all three pilots in an elevator while they are heading toward their Evangelions.

**Scale classification:** `Relative` only.

**3D consequence:** A prototype cabin must comfortably support at least three human avatars without treating the cabin as a narrow single-person service lift. No tonnage, person-count placard, width, depth, ceiling height, or door width was found in current public authoritative evidence.

### Finding 4 — Episode 12 supports a distinct industrial-looking pilot-transport lift treatment

**Claim:** The TV series also uses a more industrial elevator presentation for pilot movement toward the EVA area, distinct from the smooth enclosed Episode 22 passenger cabin.

**Evidence class:** `VISUAL_OBSERVATION` via secondary frame reproduction + `SECONDARY` scene-context evidence.

**Confidence:** Medium.

**Evidence:**
- A Japanese Episode 12 summary explicitly places Shinji, Asuka and Rei in an elevator while they are on their way to their Evas.
- A separate contemporary frame-analysis blog describes the Episode 12 lift shot as emphasizing an iron grille/fence while the elevator is visibly moving; the reproduced frame shows green structural surfaces with a strong metal-grid overhead element and red lights.

**Sources:**
- Episode 12 summary: https://36ch.com/eva_story12
- Episode 12 frame-analysis blog: https://samepa.hatenablog.com/entry/20121103/1351976447

**Caveat:** This evidence does not establish whether the complete cabin is open-cage construction, whether only the roof/shaft interface is gridded, or whether the shot looks through external shaft structure. Therefore do not canonize an `open cage` cross-section solely from this scene.

### Finding 5 — The Foundation's universal open-cage elevator statement is over-generalized

**Claim A (Foundation):** The Gemini visual Foundation states that the elevator cage itself is not enclosed and is instead surrounded by metal frame / expanded metal, with exposed large counterweights and multiple thick wire ropes.

**Source A:** `docs/research/raw-reports/gemini/0001-foundation-visual.md`

**Evidence type A:** Foundation synthesis / unspecific visual generalization.

**Claim B (Field Research):** Episode 22 clearly contains an enclosed, smooth-walled passenger elevator used for NERV personnel/pilot vertical circulation.

**Source B:** TV Episode 22 visual evidence and independent secondary descriptions.

**Evidence type B:** `VISUAL_OBSERVATION` + episode action.

**Assessment:** `DISPUTED_AS_UNIVERSAL`.

The Foundation description may remain useful for an **industrial lift variant**, but it cannot be applied to all NERV personnel elevators.

**Infrastructure consequence:** NERV vertical circulation should include multiple lift classes rather than a single open industrial cage.

**3D consequence:** Do not expose counterweights, wire ropes, shaft voids or expanded-metal walls in the Episode 22-style personnel lift unless a specific scene/setting sheet supports them.

**Needs Claude audit:** Yes — determine whether the Foundation statement was inferred from a specific lift and should be narrowed to `industrial elevator variant`.

### Finding 6 — Exact shaft mechanics and floor topology remain unknown

**Claim:** Current public evidence does not establish the traction/drive architecture, shaft section, machine room, counterweight location, door operator, floor count or exact stop graph for the personnel elevators.

**Evidence class:** `UNKNOWN`.

**Confidence:** High that the gap exists.

Do not infer:
- traction vs hydraulic drive;
- machine-room vs machine-room-less arrangement;
- rope count;
- counterweight dimensions;
- exact shaft wall material;
- exact floor numbering;
- travel distance;
- speed;
- door opening direction or leaf count across all variants;
- emergency ladder location.

## Spatial Structure

Minimum supported personnel circulation model:

```text
NERV occupied / technical level
    ↓ or ↑
Personnel elevator shaft
    ↓ or ↑
Another occupied / operational level
```

Episode-specific supported edges:

```text
Episode 22:
post-test / internal NERV circulation area
    ↑  personnel elevator
unspecified destination floor
```

```text
Episode 12:
mission / internal NERV circulation area
    ↓ or ↑  pilot transport elevator
EVA-area approach / Cage-side boundary
```

The Episode 12 endpoint must stop at the **Infrastructure-side approach boundary**. The Cage room, Cage access deck and Cage-side lift interface remain Worker A territory.

## Connectivity

| Edge | Classification | Notes |
|---|---|---|
| NERV internal level → Episode 22 passenger lift | `VERIFIED_CONNECTION` | Characters enter and ride the lift. |
| Episode 22 passenger lift → unspecified higher destination floor | `SUPPORTED_CONNECTION` | Secondary scene description explicitly says the lift travels upward and Asuka exits at the destination floor; exact level name unknown. |
| NERV internal circulation → Episode 12 pilot elevator | `VERIFIED_CONNECTION` | Three pilots are explicitly described as riding it. |
| Episode 12 pilot elevator → EVA-area / Cage-side approach | `SUPPORTED_CONNECTION` | Scene context says they are on the way to their Evas; exact transition point belongs at Worker B/A boundary. |
| Personnel elevator → Central Dogma / Terminal Dogma | `UNKNOWN_CONNECTION` | No direct edge established by this Unit. |

## Human Circulation

This Unit establishes a useful hierarchy:

1. **Routine enclosed passenger lift** — suitable for staff/pilot movement between ordinary NERV levels.
2. **More industrial pilot-transport lift** — visually rougher and plausibly used near operational/EVA staging zones.

The evidence does not establish whether these are restricted by badge, biometric, keyed floor, guard authorization, or mission state.

For Web 3D:
- ordinary player circulation can use the enclosed cabin variant;
- operational areas can transition to a more industrial lift variant where supported;
- access restrictions should be data-driven and labeled `Production Inference` unless a specific source establishes them.

## Maintenance / Logistics

No current source establishes:
- machine-room access;
- shaft inspection doors;
- pit ladders;
- rescue hatches;
- maintenance car-top controls;
- counterweight guards;
- drive motor placement.

These may be designed from real-world elevator practice only as `PRODUCTION / ENGINEERING INFERENCE`.

## Visual Observations

### Enclosed passenger variant — Episode 22

Supported visual traits from the academically reproduced scene and image-search cross-checks:
- smooth pale green wall fields;
- a horizontal contrasting purple/pink band around the cabin;
- rectilinear, human-scale enclosure;
- two passengers can occupy separated positions against different sides of the cabin;
- restrained, non-industrial interior finish compared with exposed mechanical zones.

Do not copy the exact copyrighted frame or store it in the repository.

### Industrial pilot-transport variant — Episode 12

Supported at lower confidence:
- strong metal-grid / grille visual element above the occupants;
- green structural surfaces;
- red point lights visible near the grid;
- shot explicitly communicates vertical movement.

Whether the grid belongs to the cabin roof, shaft guard or an external structural layer is unresolved.

## Scale Evidence

- **Official numeric dimensions:** none located.
- **Relative occupancy:** 2 passengers in Episode 22; 3 pilots in Episode 12.
- **Relative ergonomics:** Episode 22 allows one passenger to stand/lean at a side wall while another occupies a separate position; this is not a one-person maintenance cage.
- **Maximum capacity:** `Unknown`.
- **Door clear width / ceiling height:** `Unknown`.
- **Production recommendation:** expose `cabinWidth`, `cabinDepth`, `ceilingHeight`, `doorWidth` and `doorHeight` as configurable parameters, using human avatar clearance rather than fabricated Canon measurements.

## 3D Modeling Implications

Recommended family rather than a single prefab:

```text
PersonnelElevatorFamily
├─ EnclosedPassengerLift
│  ├─ CabinShell
│  ├─ DoorAssembly
│  ├─ InteriorPanelBand
│  ├─ ControlPanelPlaceholder   # exact hardware unresolved
│  └─ FloorStopController
│
└─ IndustrialPilotLift
   ├─ CabinFrame
   ├─ GridOrGuardElement        # exact ownership/placement unresolved
   ├─ DoorOrGateAssembly        # unresolved
   └─ ShaftMotionController
```

Shared data model:

```text
ElevatorConfig
- variant
- cabinWidth
- cabinDepth
- ceilingHeight
- doorWidth
- doorHeight
- stopIds[]
- travelAxis = vertical
- travelDistanceByEdge
- speedProfile
- doorKinematics
- accessPolicy
```

Only `travelAxis = vertical` and multi-person human use are strongly supported across this Unit. Other parameters remain configurable production values.

## Web 3D Classification

- Cabin shell: `Must be geometry`
- Repeated wall panels / trim: `Can be instanced`
- Horizontal color band: `Can be texture/material` or geometry strip
- Floor labels / warning graphics if later evidenced: `Can be decal`
- Door operation: `Requires animation`
- Elevator travel: `Requires animation`
- Floor selection / access gating: `Requires interaction`
- Shaft machinery: `Unknown` until variant-specific evidence exists
- Distant shaft infrastructure: `Can be simplified at distance`

## Real-World Engineering Analogies

`PRODUCTION / ENGINEERING INFERENCE` only:

A large underground industrial complex would reasonably separate clean passenger elevators from goods/service lifts because their enclosure, access, emergency operation and maintenance needs differ. That real-world pattern is consistent with the multiple TV visual treatments, but it does not prove NERV's drive technology, lift code, rated load or machine-room arrangement.

## Contradictions

### Contradiction — universal open-cage elevator model

**Foundation statement:** elevator cages are non-enclosed industrial frames with expanded metal and exposed counterweight/rope machinery.

**Field evidence:** Episode 22 contains an enclosed smooth-walled passenger cabin.

**Assessment:** The Foundation statement should be narrowed from a general NERV elevator rule to a possible **industrial elevator variant**.

**Infrastructure consequence:** multiple lift classes are required.

**3D consequence:** the first walkable NERV prototype should not make every personnel elevator an exposed cage.

**Needs Claude audit:** Yes.

## Unknowns

1. Are the Episode 22 OA and video-format cabins geometrically identical, or only compositionally equivalent?
2. What are the exact cabin and door dimensions?
3. What floor labels / zone identifiers are present?
4. Is the Episode 12 grid part of the moving cabin or the surrounding shaft?
5. Are there dedicated staff-only personnel lifts distinct from pilot routes?
6. Are the lifts centrally dispatched, locally controlled, or access-restricted?
7. Where are machine rooms, counterweights and emergency egress points located?
8. Does any production setting sheet define a repeatable personnel-elevator module?

## Questions for Claude / Deep Research

> Can the TV-series production setting material or Groundwork/layout material identify a specific `エレベーター` setting sheet for the Episode 22 enclosed passenger cabin, including front/side elevations, door layout, controls, cabin dimensions or floor signage? Please distinguish OA-format Episode 22 from the later video-format revision.

> For Episode 12, does primary layout/background art show whether the prominent metal grid belongs to the moving elevator cabin, a roof guard, or the stationary shaft structure? This is necessary before classifying the lift as a true open-cage industrial elevator.

> Which specific TV-series lift, if any, supports the Gemini Foundation claim of exposed counterweights, multiple thick wire ropes and a non-enclosed cage? If the claim comes from one scene, narrow it to that variant rather than treating it as the default personnel lift.

## Cross-Worker Boundary Notes

This research concerns only the NERV-side vertical transport network and the passenger/pilot lift itself.

Episode 12 is followed only to the `EVA-area / Cage-side approach` boundary. The following remain Worker A-owned and are not modeled or described here:
- Cage room interior;
- Cage access deck;
- Cage-specific door;
- EVA mounting / restraint;
- Cage-side launch-lift interface.

## Sources

1. EVANGELION official TV-series page / Blu-ray catalog — confirms Episode 22 OA and video-format versions: https://www.evangelion.jp/ng.html
2. EVANGELION STORE — `Groundwork of EVANGELION Vol.3`, officially supervised by Hideaki Anno; explicitly includes Episode 22 original drawings: https://www.evastore.jp/shop/g/gZ0000806/
3. EVANGELION official — Groundwork digest metadata; selected TV layouts/layout corrections/original drawings/timesheets from Episodes 1–26: https://www.evangelion.jp/news/gwevadigest/
4. EVANGELION STORE — TV animation setting-material 30th edition; production settings with newly discovered original materials: https://www.evastore.jp/shop/e/e260609-feature_dD/
5. *Anime Studies: Media-Specific Approaches to Neon Genesis Evangelion* — open-access Figure 1.4 reproduces/describes the Episode 22 lift scene, credited `© khara, inc.`: https://uplopen.com/books/9767/files/56ff60ff-fa6a-45d7-85b2-1088fbede8a3.pdf
6. 36ch — Episode 22 secondary summary describing upward elevator travel and exit at destination floor: https://36ch.com/eva_story22
7. 36ch — Episode 12 secondary summary placing all three pilots in an elevator on the way to their Evas: https://36ch.com/eva_story12
8. Samepa — Episode 12 secondary frame analysis noting the iron grille emphasis and moving elevator: https://samepa.hatenablog.com/entry/20121103/1351976447
