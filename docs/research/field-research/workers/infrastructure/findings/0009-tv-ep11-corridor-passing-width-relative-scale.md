# TV Episode 11 Corridor Passing-Width / Character-Relative Scale

## Scope

Determine what Episode 11 supports about **human passing width** in ordinary NERV personnel circulation, using character-relative visual evidence without converting it into unsupported meter dimensions.

This unit is limited to:
- the bright personnel/access corridor seen during the blackout sequence;
- the R-07 access bay only as a local comparison;
- human foot circulation.

It does **not** establish EVA Cage widths, launch-shaft dimensions, vehicle clearance, exact stair dimensions, or a universal NERV corridor width.

## Worker

WORKER B — NERV Infrastructure

## Continuity

TV Episode 11 (`静止した闇の中で / The Day Tokyo-3 Stood Still`)

## Summary

Episode 11 supports a useful **relative lower bound** for ordinary personnel corridors: they are not single-file maintenance passages. In the bright corridor, multiple pilot-scale humans occupy different lateral positions while using wall interfaces, with a third person remaining in the circulation zone. This supports at least a **two-way / passing-capable personnel corridor class**.

The R-07 access bay separately accommodates two standing pilots at the door while Shinji operates the manual mechanism at the side. That demonstrates a locally widened access node, but it should **not** be used as the canonical width of the adjoining corridor.

No official meter dimension, calibrated plan, or readable setting-sheet dimension was found. For Web 3D, corridor width should remain a configurable production parameter constrained by the stronger qualitative requirement: **human two-way passage must remain believable**.

## Findings

### Finding 1 — The bright Episode 11 corridor is wider than a single-file passage

Claim:
The bright NERV access/personnel corridor shown before the pilots enter Route-07 supports at least two-person passing / simultaneous lateral occupancy.

Evidence class:
`VISUAL_OBSERVATION`

Confidence:
High for the qualitative width class; Low for any numeric width.

Evidence:
A TV still shows:
- Shinji positioned at a wall-mounted interface on one side;
- Rei positioned at a wall-mounted interface on the opposite side farther down the same corridor;
- Asuka standing in the central circulation zone;
- a continuous unobstructed floor strip between the wall-side interface zones;
- a stair flight continuing from the corridor at the far end.

The figures are longitudinally offset, so this does **not** prove three people can walk shoulder-to-shoulder everywhere. It does establish that the corridor is functionally broader than a one-person service passage and supports simultaneous wall interaction plus through circulation.

Sources:
- IMDb-hosted TV still: https://www.imdb.com/title/tt0112159/mediaviewer/rm757389313/
- Episode 11 identification / context: https://www.imdb.com/title/tt0781963/
- Japanese Episode 11 dialogue archive: https://wikiwiki.jp/eva-shingeki/%E3%82%BB%E3%83%AA%E3%83%95%E4%BF%9D%E7%AE%A1%E5%BA%AB/%E7%AC%AC%E6%8B%BE%E5%A3%B1%E8%A9%B1
- English transcript: https://www.oocities.org/gorene/text/Episode11.txt

Source note:
The still is used only for visual observation. No screenshot is copied into the repository.

### Finding 2 — The safe relative classification is `two-way personnel circulation`, not an exact meter value

Claim:
The strongest production-usable scale statement is that the corridor should permit ordinary two-way human circulation and wall-side interaction.

Evidence class:
`INFERENCE` from `VISUAL_OBSERVATION`

Confidence:
Medium-High

Evidence:
The visible arrangement requires enough lateral clearance for different occupants to use opposite wall interfaces without turning the whole space into a crawl/service passage. Episode 11 also treats these spaces as part of a route three pilots can traverse on foot while carrying school bags.

Scale classification:
- Exact clear width: `Unknown`
- Passing capability: `Relative — supported`
- Comfortable two-way personnel passage: `Production recommendation`
- Three-abreast continuous walking: `Unknown`
- Vehicle passage: `Unknown`

Do not derive a meter value from screen pixels. Perspective, lens/layout choices, animation staging, and the lack of a calibrated drawing make that precision unjustified.

### Finding 3 — R-07 is a local access-bay widening, not a generic corridor-width template

Claim:
The R-07 scene supports a broader local working zone around a security/manual door but should not define the generic corridor module.

Evidence class:
`VISUAL_OBSERVATION`

Confidence:
High for local occupancy; Medium for architectural interpretation.

Evidence:
A TV frame shows:
- Rei standing to the left of the R-07 doorway;
- Asuka standing centered in front of the door;
- Shinji crouched/working at the manual actuator to the right;
- all three occupying the access face simultaneously.

This indicates that the door node provides working clearance for access operation and waiting personnel. However, the frame is an access bay dominated by a large door and side actuator, so its clear width may be greater than the adjoining passage.

Sources:
- R-07 still reproduced on Brunch: https://brunch.co.kr/@f7372d29678441b/4
- Episode 11 transcript identifying Door R-07 and manual operation: https://www.oocities.org/gorene/text/Episode11.txt

### Finding 4 — Production setting materials exist, but no public width dimension was verified

Claim:
Primary production-setting collections exist and are the correct future source for exact geometry, but current public pages do not expose a verified corridor-width dimension.

Evidence class:
`OFFICIAL_META` for source existence; `UNKNOWN` for exact width.

Confidence:
High

Evidence:
- The official Evangelion site states that the 2015 TV animation setting-material collection reproduces materials created during production of the 1995 TV series.
- EVANGELION STORE states that the 2026 30th edition adds newly discovered originals and rescanned setting materials, with khara supervision/approval.
- The official publisher page for the English production-art collection states that it includes design sketches for interior and exterior locations with original design notes.

Sources:
- https://www.evangelion.jp/sp/news/det_11377.html
- https://www.evastore.jp/shop/e/e260609-feature_dD/
- https://www.simonandschuster.com/books/Neon-Genesis-Evangelion-TV-Animation-Production-Art-Collection/khara/9781772940428

## Spatial Structure

Supported personnel-corridor blockout logic:

```text
wall interface / standing zone
        |        
        |  shared clear circulation strip
        |
wall interface / standing zone
```

This is a functional diagram, not a measured floor plan.

At access nodes such as R-07:

```text
[waiting/standing] [door opening] [manual actuator / operator]
```

Treat that as a local widening / door bay unless primary drawings prove the same width continues downstream.

## Connectivity

Episode 11 scene sequence supports:

```text
surface / upper access circulation
    ↓
bright personnel/access corridor
    ↓
Route-07 access boundary
    ↓
R-07 manual door
    ↓
Route-07 internal circulation
```

Topology classification:
- upper access circulation -> bright personnel corridor: `SUPPORTED_CONNECTION`
- bright personnel corridor -> Route-07 access boundary: `SUPPORTED_CONNECTION`
- Route-07 boundary -> R-07 manual door: `VERIFIED_CONNECTION` at scene level

Exact geometric distance between the bright corridor and R-07 remains unknown.

## Human Circulation

Supported:
- ordinary walking posture;
- multiple people using the same corridor simultaneously;
- simultaneous wall-interface use and through occupancy;
- two-way/passing-capable personnel circulation as a reasonable minimum blockout class;
- school bags do not prevent normal traversal.

Not supported:
- exact pedestrian capacity;
- exact two-person shoulder clearance;
- crowd egress width;
- wheelchair/code-compliance dimensions;
- vehicle or heavy-equipment circulation.

## Maintenance / Logistics

No evidence in this unit proves that this bright corridor is a maintenance corridor or heavy-logistics route. Its clean surfaces, wall interfaces, and ordinary human use are more consistent with personnel/access circulation, but that is a visual/function classification rather than a formal production label.

Status:
`INFERENCE — Medium`

## Visual Observations

Bright corridor:
- broad central floor strip;
- repeated wall panels;
- wall-mounted user interfaces on both sides;
- localized yellow/black floor-edge markings;
- stair continuation at far end;
- no exposed large utility bundles in the observed frame.

R-07 bay:
- large door occupies most of wall face;
- side-mounted manual actuator;
- three humans can occupy the door face simultaneously;
- local hazard striping frames the access boundary.

## Scale Evidence

Official dimensions:
- None located.

Relative evidence:
- Human figures prove the bright corridor is wider than single-file.
- Opposite-side wall interaction can occur without eliminating the central circulation zone.
- R-07 bay supports at least two standing people plus one side operator locally.

Production recommendation:
- Define `clear_width` as adjustable.
- Use a human reference mannequin and validate two-way passing during blockout.
- Allow localized `door_bay_width > corridor_clear_width`.
- Do not label any chosen meter value as canon.

## 3D Modeling Implications

1. Add a corridor semantic width class such as `personnel_two_way` instead of a hard-coded canon dimension.
2. Keep `clear_width` parameterized in Scene Config.
3. Validate the blockout with two human capsules passing while a third can interact with a wall panel in a widened segment or offset position.
4. Separate `corridor_clear_width` from `door_bay_width`.
5. Preserve wall-interface recesses/standing zones so interaction does not completely obstruct through movement.
6. Keep stair width independently adjustable until primary layout/setting sheets are inspected.

Suggested non-canon parameters:
- `corridor_clear_width`
- `wall_interface_recess_depth`
- `wall_interaction_standing_offset`
- `door_bay_width`
- `door_actuator_side_clearance`
- `stair_clear_width`

## Web 3D Classification

- Corridor floor/walls: `Must be geometry`
- Repeated wall panels: `Can be instanced`
- Wall interfaces: `Can be instanced`
- Hazard markings: `Can be decal / texture`
- Width class: semantic / configurable scene data
- Exact clear width: `Unknown`
- R-07 access bay: `Requires unique modeling`
- Human passing validation: development/blockout requirement, not canon geometry

## Real-World Engineering Analogies

`PRODUCTION / ENGINEERING INFERENCE` only:
- Real underground public/industrial personnel corridors are typically designed so wall-side equipment use does not fully block circulation.
- Access-control and manual-door nodes often locally widen around actuators and waiting/working positions.

These analogies support sensible production blockout only; they are not Evangelion evidence.

## Contradictions

No direct source contradiction was found.

The main discipline issue is **over-precision**: screen staging can support a qualitative passing class, but converting one perspective frame into an exact meter dimension would exceed the evidence.

## Unknowns

- exact corridor clear width;
- exact ceiling height at this corridor;
- whether the wall-interface recesses are continuous or isolated modules;
- exact stair width and rise/run;
- whether all general personnel corridors share this width class;
- whether R-07's access bay width continues into Route-07;
- crowd/evacuation capacity.

## Questions for Claude / Deep Research

1. Does the 2015 or 2026 TV setting-material collection include a readable plan/elevation for the Episode 11 bright corridor with dimensional or character-scale notes?
2. Is there a storyboard/layout sheet that establishes whether the corridor supports three-abreast staging or only staggered two-way passage?
3. Does the R-07 setting sheet show a local widening relative to its approach corridor?
4. Are there other TV episodes using the same corridor background that can cross-check width without relying on one perspective frame?

## Cross-Worker Boundary Notes

No EVA Cage geometry is researched here.

R-07 is used only as an Infrastructure access-bay comparison. Any Cage-side receiving spaces remain Worker A scope.

## Sources

See `../sources/0009-tv-ep11-corridor-passing-width-relative-scale-sources.md`.
