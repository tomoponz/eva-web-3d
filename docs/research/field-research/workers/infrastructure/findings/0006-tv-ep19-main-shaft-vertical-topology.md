# TV Episode 19 — NERV Main Shaft vertical topology / human-visible shaft architecture

## Scope

A single infrastructure unit: the `Main Shaft` exposed and penetrated by Zeruel in TV Episode 19. This cycle asks what the shaft connects, what can be said about its visible geometry, how it relates to occupied NERV levels, and what should or should not be modeled in Web 3D.

## Worker

WORKER B — NERV Infrastructure

## Continuity

TV series (1995–1996), Episode 19 only. Rebuild uses a separate `main shaft` continuity and is excluded from geometry/topology conclusions here.

## Summary

Episode 19 establishes a protected, very large vertical shaft behind NERV's upper defensive armor. Once the final armor layer is destroyed, the shaft becomes directly exposed; Zeruel then enters it and descends toward Central Dogma. Frame-by-frame secondary documentation shows the shaft viewed from below and a large/distorted pipe in the foreground while Zeruel falls. The shaft is therefore a large human-visible infrastructure void and not merely a hidden elevator machineway.

The evidence does **not** establish a circular shaft profile, exact diameter, exact wall material, guide rails, counterweights, hoist ropes, catwalks, ladders, or a normal personnel/equipment lift operating in this shaft. It must not be conflated with the Foundation report's separate `elevator shaft` description.

## Findings

### Finding 1 — The Main Shaft is directly protected by upper defensive armor

**Claim:** Episode 19 places the Main Shaft immediately behind the defensive structure that becomes exposed after a direct hit and the melting/destruction of the final armor plate.

**Evidence class:** `CANON_EXPLICIT` through independently agreeing dialogue transcriptions

**Confidence:** High

**Evidence:** Japanese transcription reproduces the sequence: a direct hit to the third base/foundation, final armor plate loss, then Misato states that the Main Shaft is exposed. English transcript reproductions agree on the same causal sequence.

**Sources:** S3, S4, S5

**3D consequence:** The shaft should have an upper `ArmorBoundary` / seal layer and a damage state. It should not begin as an always-open vertical void at the GeoFront surface.

### Finding 2 — The Main Shaft is an explicit vertical route toward Central Dogma

**Claim:** Zeruel enters the Main Shaft, descends, and is reported as moving directly toward Central Dogma.

**Evidence class:** `CANON_EXPLICIT` through independently agreeing dialogue transcriptions

**Confidence:** High

**Evidence:** Aoba reports entry into the Main Shaft and descent; Hyuga reports the destination as Central Dogma. The Japanese and English reproductions agree.

**Sources:** S3, S4, S5, S6

**Topology consequence:** `upper NERV defensive level → Main Shaft → Central Dogma sector` is a verified network edge at the narrative/topological level, though exact floor coordinates remain unknown.

### Finding 3 — The shaft is EVA/Angel-scale, not a personnel-only shaft

**Claim:** The Main Shaft aperture and vertical volume are large enough for Zeruel to descend through it.

**Evidence class:** `CANON_EXPLICIT` + `VISUAL_OBSERVATION`

**Confidence:** High for relative scale; Low for numeric dimensions

**Evidence:** The Angel physically enters and descends the shaft. No exact measurement is given.

**Sources:** S3, S4, S6

**Scale classification:** `Relative`

**3D consequence:** The shaft belongs to the large-infrastructure class. It should not reuse the Episode 22 enclosed passenger-lift shaft dimensions or a human-only elevator template.

### Finding 4 — The Main Shaft is visually readable as a large open vertical void

**Claim:** A TV cut shows the Main Shaft from below; a following cut shows Zeruel falling while a distorted pipe crosses/frames the view.

**Evidence class:** `VISUAL_OBSERVATION` through frame-by-frame secondary documentation

**Confidence:** Medium

**Evidence:** EvaGeeks' Full-episode Commentary identifies cut 252 as `Main Shaft from below` and cut 254 as the Angel falling beyond a distorted pipe.

**Sources:** S6

**3D consequence:** A Web 3D reconstruction can safely include a tall open vertical volume with at least one visible large pipe/utility element as a scene-specific observation. It cannot yet establish a universal pipe rack layout.

### Finding 5 — Current evidence does not determine the shaft cross-section

**Claim:** No checked public source establishes whether the TV Main Shaft is circular, rectangular, polygonal, or another fixed profile.

**Evidence class:** `UNKNOWN`

**Confidence:** High that the question remains unresolved in the checked evidence set

**Evidence:** The frame commentary's phrase `circular explosions` describes explosion effects, not the shaft's plan section. No official sheet or dimensioned profile was located publicly in this cycle.

**Sources:** S1, S2, S6

**3D consequence:** Keep `shaftProfile`, `clearSpan`, and `wallSegmentCount` configurable. Do not canonize a round shaft from the current evidence.

### Finding 6 — Main Shaft breach directly endangers occupied Central Dogma / command spaces

**Claim:** Once Zeruel descends the Main Shaft toward Central Dogma, Misato orders all personnel to evacuate; moments later the Angel physically breaches into the occupied bridge/control-space sequence.

**Evidence class:** `CANON_EXPLICIT` + `VISUAL_OBSERVATION`

**Confidence:** High for emergency consequence; Medium for exact spatial interface

**Evidence:** The dialogue immediately orders total evacuation. Frame-by-frame documentation then shows Zeruel breaking through the main monitor/wall into the bridge area.

**Sources:** S3, S4, S6

**Human-circulation consequence:** The shaft is adjacent to or terminates within an occupied critical sector, but it is not established as an ordinary pedestrian route.

### Finding 7 — Do not transfer elevator-shaft machinery claims onto the Main Shaft

**Claim:** The Foundation report's concrete/steel lining, counterweight, wire-rope, and open industrial lift description concerns `Elevator Shafts`; Episode 19's `Main Shaft` evidence does not establish those mechanisms.

**Evidence class:** `INFERENCE` based on terminology separation and missing evidence

**Confidence:** High

**Evidence:** The repository Foundation explicitly describes elevator shafts as a distinct category. Episode 19 instead presents a huge defensive/vertical penetration route used by Zeruel.

**Sources:** S8, S3, S6

**3D consequence:** Use separate asset families:
- `PersonnelElevatorShaft`
- `IndustrialElevatorShaft`
- `NervMainShaft`

Do not instance ropes/counterweights into `NervMainShaft` unless a primary/visual source supports them.

## Spatial Structure

Minimum supported structure:

```text
GeoFront / upper NERV defensive structure
        ↓
final armor boundary
        ↓  [armor destroyed in Ep.19]
Main Shaft
        ↓  [Zeruel descends]
Central Dogma sector
        ↓ / lateral breach
occupied bridge / command-space interface
```

The exact vertical distance, number of intermediate levels, shaft plan profile, and precise bridge elevation are unknown.

## Connectivity

| Edge | Classification | Notes |
|---|---|---|
| Upper defensive structure → final armor boundary | `VERIFIED_CONNECTION` | Direct-hit / final-armor sequence precedes shaft exposure. |
| Final armor boundary → Main Shaft | `VERIFIED_CONNECTION` | Shaft becomes exposed immediately after final armor loss. |
| Main Shaft → Central Dogma sector | `VERIFIED_CONNECTION` | Dialogue explicitly identifies Zeruel's destination while descending. |
| Main Shaft → occupied bridge/control-space interface | `SUPPORTED_CONNECTION` | Scene sequence shows descent followed by physical breakthrough into the bridge area; exact level geometry unresolved. |
| Main Shaft → Cage / catapult No.5 | `UNKNOWN_CONNECTION` | Unit-01 later drives Zeruel through damaged internal spaces toward a cage/catapult; this may be damage-created adjacency, not a normal circulation edge. |
| Main Shaft → ordinary personnel elevator network | `UNKNOWN_CONNECTION` | No direct evidence found. |

## Human Circulation

- No source checked here shows routine staff walking inside the Main Shaft.
- The shaft's breach causes an immediate `all personnel evacuate` order.
- The lower interface is close enough to occupied command infrastructure for breach to become a direct personnel hazard.
- Maintenance access, ladders, galleries, rescue routes and inspection platforms remain `UNKNOWN`.

For Web 3D, player access inside the shaft should be treated as restricted/maintenance or damage-state content unless later evidence establishes normal human circulation.

## Maintenance / Logistics

Unresolved:
- permanent maintenance catwalks;
- inspection doors;
- pipe-rack service decks;
- drainage at shaft bottom;
- smoke/pressure management;
- armor-plate maintenance access;
- whether any lift platform normally travels through the shaft.

Any such elements added for playability must be tagged `PRODUCTION / ENGINEERING INFERENCE`.

## Visual Observations

Supported at medium confidence from cut descriptions:
- very large vertical open void;
- visible depth from a below-looking viewpoint;
- a large/distorted pipe or pipe-like utility element visible across/near the falling Angel;
- damage effects propagate through the shaft during breach.

Not supported:
- circular cross-section;
- a regular ladder pattern;
- perimeter catwalk rings;
- exposed traction ropes;
- counterweights;
- exact lining material.

## Scale Evidence

- **Official numeric dimensions:** none located.
- **Relative:** the shaft passes Zeruel, so the clear opening is giant/EVA-scale.
- **Production recommendation:** size the prototype relative to the chosen Angel/EVA avatar envelope and keep exact dimensions configurable.
- **Cross-section:** `Unknown`.

## 3D Modeling Implications

Recommended Web 3D structure:

```text
NervMainShaft
├─ UpperArmorBoundary
│  ├─ IntactState
│  ├─ CompromisedState
│  └─ BreachedState
├─ ShaftVolume
│  ├─ profile: configurable
│  ├─ clearSpan: configurable
│  └─ depth: configurable
├─ WallShell
├─ ServicePipeLayer
│  └─ scene-supported sparse pipe element(s)
├─ LowerCriticalSectorInterface
└─ DamageSequenceController
   ├─ SEALED
   ├─ ARMOR_COMPROMISED
   ├─ EXPOSED
   └─ BREACHED
```

Implementation rules:
1. keep the vertical volume as unique large geometry;
2. use parametric wall segments because exact profile is unresolved;
3. model only sparse service piping until stronger setting-sheet evidence exists;
4. do not add elevator counterweights/hoist ropes by default;
5. separate normal-state navigation from Episode 19 damage-state traversal;
6. use fog/occlusion/LOD for the long vertical sightline in browser rendering.

## Web 3D Classification

- Main shaft wall/void: `Must be geometry`, `Requires unique modeling`
- Upper armor boundary: `Must be geometry`, `Requires animation` for damage sequence
- Sparse pipe/utilities: `Can be instanced` after source-backed placement rules are defined
- Damage/debris: `Can be procedural` / `Can be simplified at distance`
- Shaft traversal: `Requires interaction` only if a production-designed maintenance route is added
- Exact shaft profile: `Unknown`

## Real-World Engineering Analogies

Not Evangelion evidence:
- a protected deep vertical penetration through a hardened facility would normally require compartmentation, drainage, fire/smoke control, inspection access and structural reinforcement;
- a large vertical void in a browser scene benefits from intermediate occlusion volumes and maintenance landings for rendering/gameplay.

These are production/engineering analogies only. They do not establish Canon features.

## Contradictions

### Claim A
The Foundation describes `Elevator Shafts` with concrete/ribbed steel walls, massive counterweights, thick wire ropes, and open industrial lift cages.

**Source A:** repository Gemini Foundation report.

**Evidence type A:** cross-model research synthesis; exact primary scene citation absent in the surfaced excerpt.

### Claim B
Episode 19's `Main Shaft` is shown as a giant defensive/vertical penetration route used by Zeruel; current field evidence only supports a large open void plus at least one pipe-like element.

**Source B:** Episode 19 transcripts and frame-by-frame secondary documentation.

**Evidence type B:** canon dialogue via secondary transcription + visual observation.

**Assessment:** These need not be contradictory if they are different shaft classes. The error would be to merge them into one universal NERV shaft kit.

**Infrastructure consequence:** Maintain separate shaft typologies.

**3D consequence:** Do not automatically place elevator machinery in the Main Shaft.

**Needs Claude audit:** Yes — verify whether official setting sheets distinguish the Main Shaft from ordinary elevator shafts and whether a plan/section exists.

## Unknowns

- exact shaft plan profile;
- exact clear span / depth;
- lining material;
- number and placement of pipes/ducts;
- maintenance galleries or ladders;
- intermediate floor openings;
- bottom termination geometry;
- relationship to ordinary elevator systems;
- normal purpose before the breach (transport, utility, structural, multi-purpose, or mixed);
- exact relation of the shaft axis to the command bridge and nearby Cage/catapult zones.

## Questions for Claude / Deep Research

1. Does `Groundwork of EVANGELION Vol.2` contain the Episode 19 cuts around the Main Shaft descent, and do any reproduced layouts show the shaft plan/section rather than only perspective views?
2. Does the TV animation setting-material collection contain a sheet explicitly titled `メインシャフト`, and if so, what profile, wall systems, service lines and adjacent levels are drawn?
3. Is the `Main Shaft` ever shown in another TV episode from a viewpoint that confirms its cross-section or normal operational purpose?
4. Is there primary evidence for a normal connection between the Main Shaft and Cage/catapult infrastructure, or is Episode 19's adjacency created by combat damage/editing?

## Cross-Worker Boundary Notes

This Unit covers the NERV-side Main Shaft and its network relationship to Central Dogma. Cage room geometry, Cage-side launch interfaces and Cage-specific machinery remain Worker A territory.

## Sources

See `../sources/0006-tv-ep19-main-shaft-vertical-topology-sources.md`.
