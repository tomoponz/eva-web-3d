# TV R-07 Access Route / Manual Door

## Scope

One narrow Infrastructure Research Unit: the TV-series Route-07 entrance and its manually operable R-07 door as shown in Episode 11, with only the minimum downstream topology needed to understand what the entrance connects.

## Worker

WORKER B — NERV Infrastructure

## Continuity

TV (1995–1996), primarily Episode 11 `静止した闇の中で / The Day Tokyo-3 Stood Still`.

EoE and Rebuild are not used to define the R-07 geometry in this finding.

## Summary

R-07 is supported as one of the access routes from the Tokyo-3 / surface side toward the GeoFront. During the total blackout, Rei explicitly selects Route-07, and the trio encounters a door identified in the episode transcript as `Door R-07`. Shinji recognizes that it can be opened manually and physically operates the mechanism.

The strongest 3D-useful conclusion is therefore functional rather than dimensional: R-07 should be modeled as an emergency-capable human ingress boundary with a visible manual operating mechanism that remains usable without electrical power. Public evidence checked in this cycle does **not** establish exact dimensions, door thickness, actuator gearing, normal powered operation, or vehicle capacity.

A secondary 1998 fan-compiled terminology source identifies `R-075` as a downstream route connecting R-07 toward NERV Headquarters, but this topology is not elevated above `PLAUSIBLE_CONNECTION` without primary production material.

## Findings

### Finding 1 — Route-07 is an access route toward the GeoFront

Claim:
- Route-07 provides an access path from the Tokyo-3 / upper side toward the GeoFront.

Evidence class:
- `CANON_EXPLICIT` for the dialogue content as represented by episode transcript sources.
- `SECONDARY` for the online transcript reproductions themselves.

Confidence:
- High for the directional function.
- Medium for exact start/end nodes beyond `Tokyo-3 / upper access → GeoFront`.

Evidence:
- Episode 11 dialogue has Rei state that they can go to the GeoFront through Route-07.
- Multiple independent transcript reproductions agree on this sequence.

Sources:
- Animanga Episode 11 transcript: https://www.animanga.com/scripts/textesgb/eva11.html
- SpringfieldSpringfield Episode 11 transcript: https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e11&tv-show=neon-genesis-evangelion-1995
- 1995 Usenet episode log preserved by Google Groups: https://groups.google.com/g/fj.rec.animation/c/B0kUNqgZLug

### Finding 2 — R-07 has a manually operable door usable during total blackout

Claim:
- The first R-07 access boundary encountered by the pilots can be opened manually during the blackout.

Evidence class:
- `CANON_EXPLICIT` for the spoken recognition of a manual door and Shinji's physical operation.
- `VISUAL_OBSERVATION` for the adjacent circular manual-control assembly visible in a reproduced episode frame.

Confidence:
- High for manual operability.
- Medium for the exact mechanical architecture.

Evidence:
- The Episode 11 transcript labels the scene `Door R-07`; Shinji first notes that the doors do not work, then recognizes the manual door and is tasked with opening it.
- A publicly reproduced frame shows the large `R-07` marked door and a separate circular mechanical control assembly at the right side, operated by Shinji.
- The evidence supports a human-powered operating interface. It does not establish the concealed linkage or whether the same door normally has powered actuation.

Sources:
- Animanga Episode 11 transcript: https://www.animanga.com/scripts/textesgb/eva11.html
- Talk Film Society page carrying a frame from the R-07 scene: https://talkfilmsociety.com/podcasts/anime-a-go-go-neon-genesis-evangelion-episode-6
- Japanese Episode 11 dialogue log describing Shinji turning the valve and opening the door: https://neverworld.dreamlog.jp/archives/2542542.html

### Finding 3 — The manual control is a distinct wall-side mechanism, not a simple push/pull leaf

Claim:
- The R-07 entrance is visually presented as a heavy industrial boundary with a dedicated side-mounted manual actuator.

Evidence class:
- `VISUAL_OBSERVATION`

Confidence:
- Medium-High for the visible arrangement.
- Low for internal mechanism.

Evidence:
- The reproduced frame shows a large flat industrial door surface with prominent `R-07` marking, hazard striping at the door-side boundary, and a circular crank/control assembly recessed or mounted to the right of the door.
- Shinji visibly exerts effort at the mechanism, implying non-trivial manual torque.

Do **not** infer from this alone:
- exact door mass,
- exact leaf count,
- exact sliding direction,
- hydraulic actuation,
- gearing ratio,
- normal powered mode.

### Finding 4 — R-07 is part of a longer circulation sequence, not proven to be a direct door into NERV HQ

Claim:
- Passing the R-07 door does not establish immediate direct entry into NERV Headquarters; the pilots continue through a difficult route network before reaching the Cage area.

Evidence class:
- `CANON_EXPLICIT` / `SECONDARY` via Episode 11 transcript sequence.

Confidence:
- High that more circulation follows after R-07.
- Low-Medium for route identifiers of downstream segments.

Evidence:
- Later in Episode 11 the trio is still walking through dark passages, remarking on the route difficulty and whether a passage is correct.
- They eventually encounter another door that cannot be opened manually and choose to break into / traverse a duct.
- This supports a multi-stage emergency circulation network rather than `R-07 door → HQ room` as a single edge.

Sources:
- Animanga Episode 11 transcript, later sequence: https://www.animanga.com/scripts/textesgb/eva11.html

### Finding 5 — `R-075` as the R-07-to-HQ downstream route is useful but secondary-only

Claim:
- A 1998 fan-compiled Evangelion terminology dictionary identifies `R-075` as Route 75 connecting R-07 and NERV Headquarters and identifies the blocked door encountered in Episode 11 with that route.

Evidence class:
- `SECONDARY`

Confidence:
- Medium as an episode-indexed secondary synthesis.
- Not sufficient for `VERIFIED_CONNECTION`.

Evidence:
- The dictionary entry states that R-07 is a route from Tokyo-3 to the GeoFront and that its first door was manually opened by Shinji in Episode 11.
- The same source describes R-075 as a route between R-07 and NERV Headquarters.

Source:
- `エヴァンゲリオン用語事典` scan/index hosted on Scribd: https://www.scribd.com/document/694738026/1998-%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%82%AA%E3%83%B3%E7%94%A8%E8%AA%9E%E4%BA%8B%E5%85%B8-%E3%82%A8%E3%83%B4%E3%82%A1%E7%94%A8%E8%AA%9E%E4%BA%8B%E5%85%B8%E7%B7%A8%E7%BA%82%E5%B1%80

## Spatial Structure

Minimum supported scene abstraction:

```text
Tokyo-3 / upper-side facility zone
        |
        |  SUPPORTED_CONNECTION
        v
R-07 access boundary / manual door
        |
        |  SUPPORTED_CONNECTION
        v
Route-07 interior circulation
        |
        |  PLAUSIBLE_CONNECTION (secondary R-075 identification)
        v
R-075 / downstream passage network
        |
        |  PLAUSIBLE_CONNECTION
        v
NERV HQ interior circulation
```

The only robustly supported macro edge for current implementation is:

```text
Tokyo-3 / upper access → Route-07 → GeoFront
```

Exact intermediate floor levels and branch junctions remain `UNKNOWN`.

## Connectivity

### Edge A

`Tokyo-3 / upper-side access → R-07 entrance`

Classification:
- `SUPPORTED_CONNECTION`

Basis:
- Rei selects Route-07 as the way down to / through to the GeoFront.

### Edge B

`R-07 entrance → Route-07 interior`

Classification:
- `VERIFIED_CONNECTION` at scene level.

Basis:
- The pilots physically open the R-07 door and continue along the route.

### Edge C

`Route-07 → R-075 → NERV Headquarters`

Classification:
- `PLAUSIBLE_CONNECTION`

Basis:
- Secondary terminology dictionary plus the episode's continued route traversal.
- Needs setting sheet / script / storyboard confirmation before promotion.

## Human Circulation

- The route is demonstrably usable by ordinary human-scale occupants; three teenage pilots traverse it on foot.
- The manual opening procedure is physically demanding but operable by one person in the depicted emergency.
- No evidence located in this cycle proves that R-07 supports vehicles or heavy equipment.
- No evidence located in this cycle proves an active security checkpoint at the R-07 door during normal operation.
- The route functions as emergency ingress when powered systems are unavailable, making it important to model as a fallback circulation path rather than a purely decorative door.

## Maintenance / Logistics

Evidence supports a manual emergency operating provision but not the maintenance layout behind the actuator.

Production implication:
- reserve wall depth / service volume behind the manual-control side of the entrance as a configurable engineering allowance,
- but tag it `Production Inference`, not canon geometry.

## Visual Observations

From the publicly reproduced R-07 frame:

- very large, flat industrial door surface relative to the human figures,
- large red `R-07` identifier visible across / adjacent to the door field,
- localized red-black hazard striping at the door boundary,
- dedicated circular manual actuator at the right side,
- cool blue-gray industrial wall/door palette,
- the actuator is placed at human working height and requires crouched / braced operation.

Exact colors, proportions, dimensions, and material finishes should be rechecked against authorized production material before final asset lock.

## Scale Evidence

- Exact width: `Unknown`
- Exact height: `Unknown`
- Door thickness: `Unknown`
- Actuator diameter: `Unknown`
- Human-scale relation: `Relative` — actuator is directly hand-operated; door is significantly larger than a person.

Do not convert the frame into meter dimensions without a controlled reference study.

## 3D Modeling Implications

### Geometry

Create R-07 as a **unique entrance module**, not as a generic corridor door instance.

Recommended adjustable parameters:

```text
opening_width
opening_height
door_leaf_layout
frame_depth
manual_actuator_offset_x
manual_actuator_height
manual_actuator_radius
hazard_stripe_band_width
r07_label_scale
service_wall_depth
```

All numerical defaults are production values, not canon values.

### Interaction

R-07 should support an emergency manual-open interaction:

1. Player reaches the wall-side actuator.
2. Repeated / held interaction rotates the actuator.
3. Door state transitions only after sufficient manual operation.
4. Electrical blackout does not disable this interaction.

This captures the strongest canon function without inventing unseen mechanics.

### Animation

- `Requires animation` for the manual actuator.
- `Requires animation` for the door if shown opening.
- Opening kinematics should remain configurable until a more authoritative setting source establishes leaf motion.

### Lighting / Signage

- `R-07` marking should be geometry-independent and implemented as decal / texture layer.
- Hazard striping should be localized to the operating / pinch boundary, not spread decoratively across the corridor.

## Web 3D Classification

- Door/frame: `Requires unique modeling`
- R-07 identifier: `Can be decal`
- Hazard stripes: `Can be decal` / `Can be texture/material`
- Manual actuator: `Must be geometry`
- Manual actuator: `Requires animation`
- Manual actuator: `Requires interaction`
- Downstream passage shells: `Can be procedural` once route geometry is better constrained
- Exact opening kinematics: `Unknown`

## Real-World Engineering Analogies

`PRODUCTION / ENGINEERING INFERENCE` only:

A large emergency door with an independent handwheel / crank is analogous to manual overrides used on industrial gates, watertight doors, bunker closures, and large mechanical isolation systems. In real systems the visible hand control may drive a gearbox, screw, chain, or other transmission.

None of those real-world transmission types should be canonized for R-07 without Evangelion-specific evidence.

## Contradictions

### Normal powered operation

Claim A:
- The surrounding outage sequence implies ordinary facility doors generally depend on electrical systems.

Claim B:
- Shinji identifies this specific entrance as a `manual door`.

Assessment:
- Manual operability is verified; whether R-07 is normally motorized with manual override or fundamentally manual is not established by the public dialogue checked here.

Infrastructure consequence:
- Implement `manual_capable = true`.
- Keep `normal_powered_operation` configurable / unknown.

3D consequence:
- Do not build visible hydraulic cylinders, motors, or powered rails as canon-only details.

Needs Claude audit:
- Yes.

## Unknowns

- Exact R-07 door dimensions.
- Exact leaf count and opening direction.
- Exact door thickness and armor construction.
- Whether the door is normally powered or always manual.
- Internal mechanical linkage from the circular actuator to the door.
- Exact route geometry immediately behind the door.
- Whether `R-075` is the official on-screen / production identifier for the downstream segment or only a later secondary reconstruction.
- Normal access-control and credential requirements at R-07.
- Vehicle / heavy-equipment clearance.

## Questions for Claude / Deep Research

1. Do TV production setting sheets or Episode 11 storyboard pages explicitly label the R-07 entrance as `EMERGENCY ONLY`, specify its leaf motion, or show its internal manual linkage?
2. Is `R-075` visibly legible on the blocked downstream door in Episode 11 or explicitly named in script / storyboard material?
3. Does the 2015 or 2026 TV animation setting-material collection contain a dedicated R-07 / gate sheet that establishes dimensions or normal operating mode?

## Cross-Worker Boundary Notes

- No EVA Cage geometry was researched.
- Downstream traversal is discussed only as Infrastructure topology required to place R-07 in the facility network.
- The point at which the pilots ultimately emerge into the Cage is Worker A territory and is intentionally not modeled here.

## Sources

Primary/official metadata:
- EVANGELION official 2015 setting-material announcement: https://www.evangelion.jp/sp/news/det_11377.html
- EVANGELION STORE 30th edition production-material description: https://www.evastore.jp/shop/e/e260609-feature_dD/

Episode evidence / transcript reproductions:
- https://www.animanga.com/scripts/textesgb/eva11.html
- https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e11&tv-show=neon-genesis-evangelion-1995
- https://groups.google.com/g/fj.rec.animation/c/B0kUNqgZLug
- https://neverworld.dreamlog.jp/archives/2542542.html

Visual reference reproduction:
- https://talkfilmsociety.com/podcasts/anime-a-go-go-neon-genesis-evangelion-episode-6

Secondary route index:
- https://www.scribd.com/document/694738026/1998-%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%82%AA%E3%83%B3%E7%94%A8%E8%AA%9E%E4%BA%8B%E5%85%B8-%E3%82%A8%E3%83%B4%E3%82%A1%E7%94%A8%E8%AA%9E%E4%BA%8B%E5%85%B8%E7%B7%A8%E7%BA%82%E5%B1%80
