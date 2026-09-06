# Rebuild EVA Cage — Normalized Location Record v0.1

Continuity: `Rebuild`, primarily `:序` / `:破`-era material

Status: production-facing normalization; not a complete canonical floor plan

## Scope

This document normalizes the current strongest evidence for the Rebuild-era EVA Cage. It intentionally preserves unresolved geometry as parameters/unknowns rather than inventing a finished floor plan.

Primary inputs:

- `../../raw-reports/claude/0001-foundation-audit.md`
- `../../field-research/workers/cage/index.md`
- `../../field-research/workers/cage/findings/0001-rebuild-eva-cage-macro-spatial-organization.md`
- `../../field-research/workers/cage/findings/0002-rebuild-eva-cage-restraint-structures.md`
- `../../field-research/workers/cage/findings/0003-rebuild-eva-cage-catwalk-layout.md`
- `../../field-research/workers/cage/findings/0004-rebuild-eva-cage-human-scale-circulation.md`
- `../../field-research/workers/cage/findings/0005-rebuild-eva-cage-entry-plug-access.md`
- `../../field-research/workers/cage/findings/0006-rebuild-eva-cage-maintenance-decks.md`
- `../../field-research/workers/cage/findings/0007-rebuild-eva-cage-placement-posture.md`
- `../../field-research/workers/cage/findings/0008-rebuild-eva-cage-lower-pit-liquid.md`

## SAFE TO MODEL NOW

### Cage as part of a launch-staging chain

**Verdict:** `SUPPORTED / OFFICIAL_META`

For a Rebuild-inspired scene, the Cage should function as one stage of an operational chain rather than as an isolated garage:

```text
storage / maintenance under restraint
→ restraint release
→ linear-rail transfer
→ launch lane / injection system
```

EVA-INFO and SMALL WORLDS official/promotional material support restraint-panel removal and linear-rail movement toward the launch lanes. A licensed BANDAI SPIRITS transport-platform product also supports a dedicated restrained transport stage in `:序`.

**3D consequence:** reserve a real transfer interface and continuation toward the launch system. Do not terminate the Cage as a decorative dead end.

### EVA is stored upright under restraint

**Verdict:** `SUPPORTED`

The current evidence supports a standing/upright EVA storage presentation with large restraint hardware. Exact load path and actuator geometry remain unresolved.

**3D consequence:** the blockout may include major restraint masses, but their exact contact points, hydraulics, and motion must remain modular.

### Entry Plug interface is on the neck-to-upper-back region

**Verdict:** `VERIFIED / OFFICIAL_META` for Rebuild Unit-01 interface location

The Entry Plug insertion opening is around the neck-to-upper-back region, not on the top of the head. Licensed Rebuild product documentation supports an opening hatch and removable Entry Plug.

**3D consequence:**

- model a dorsal/upper-back insertion port;
- support hatch-open / hatch-closed states;
- reserve a non-rendered `entry_plug_keepout` volume;
- do not place permanent pipes, beams, lights, or platforms through the unresolved insertion path.

### Human-scale circulation exists around the Cage

**Verdict:** `SUPPORTED, exact geometry incomplete`

Current Worker A evidence supports at minimum a human-scale floor/apron and raised wall-side access/stair hierarchy in official or licensed reconstruction material. Exact dimensions and whether every element is film-production-derived remain unresolved.

**3D consequence:** include human-scale circulation cues in the blockout, but keep dimensions as production parameters rather than canon.

### `第7ケイジ` is a Rebuild-era naming anchor

**Verdict:** `OFFICIAL_META`

Official Rebuild-era promotion associates Shinji's first encounter with Unit-01 with the Seventh Cage. Do not generalize the numbering to all continuities or every Cage without further evidence.

## SAFE WITH EXPLICIT ASSUMPTION

### Repeated adjacent Cage bays

**Verdict:** `VISUAL_OBSERVATION + OFFICIAL_META`, Medium confidence

SMALL WORLDS presents Units 01, 00, and 02 in adjacent vertical bays. This is useful as a modular visual reference but may be an exhibition-specific synthesis.

**Allowed assumption:** prototype one repeatable Cage bay module and instance it laterally.

**Do not assume:** exact bay count, spacing, simultaneous occupancy, or film-accurate floor plan.

### Extreme vertical launch facility

Official/promotional material describes the **injection site / launch facility** as over 100 m high.

**Allowed assumption:** the launch continuation should feel extremely vertical.

**Forbidden inference:** assigning `100+ m` as the Cage chamber height.

### Elevated Entry Plug service method

Because the port is on the upper back, some elevated service/loading method is operationally plausible.

**Allowed assumption:** prototype a removable/retractable service module if needed for traversal.

**Do not claim:** a permanent cantilever bridge is established canon.

## KEEP PARAMETRIC / DO NOT FIX DIMENSION

The following must remain configurable:

```text
EVA_HEIGHT
CAGE_WIDTH
CAGE_DEPTH
CAGE_HEIGHT
BAY_COUNT
BAY_SPACING
WALL_SECTION_MODE
CATWALK_LEVEL_COUNT
CATWALK_ELEVATIONS
LOWER_ZONE_DEPTH
CAGE_FLUID_ENABLED
CAGE_FLUID_LEVEL
CAGE_FLUID_TYPE
ENTRY_PLUG_INSERTION_AXIS
ENTRY_PLUG_CLEARANCE
SERVICE_BRIDGE_ENABLED
RESTRAINT_CONTACT_POINTS
REAR_SUPPORT_MODE
TRANSFER_INTERFACE_ORIENTATION
```

### EVA height

Do not use 40 m as a universal constant. Rebuild-specific ~80 m may be used only as an explicit project assumption; normalized geometry should still derive from `EVA_HEIGHT`.

### Cage dimensions

Exact Cage width, depth, height, bay spacing, and relation to the launch shaft remain unverified.

### Catwalk count

The Gemini claim of `5–8` levels is unsupported. Worker A currently establishes only a minimum service-access topology, not a fixed number of levels.

### Lower pit / liquid

Current evidence is contradictory:

- Fuji-Q Seventh Cage presentation supports a flooded lower-body basin presentation;
- SMALL WORLDS official Rebuild hangar presents dry foot bases/apron.

These may represent different operational states, different spaces, or exhibition adaptation. Do not merge them into one canonical liquid pit.

### Wall cross-section

Claims of cylindrical versus hexagonal/rectangular Cage walls remain unresolved. Build wall section as replaceable macro geometry.

### Load path / suspension

Do not assume the EVA is supported only by a rear suspension system. Current evidence does not resolve how foot support, rear restraint, hidden support, and transport platform share load in different states.

## DO NOT MODEL AS CANON YET

- Entry Plug insertion through the top of the head.
- Exact `5–8` catwalk levels.
- Lower liquid definitively identified as LCL, cooling water, or another named fluid.
- Exact Cage chamber height of `100+ m`.
- Permanent Entry Plug personnel bridge as established geometry.
- Exact Entry Plug insertion axis, loading machine, and clearance dimensions.
- Rear-only EVA suspension.
- Exact hydraulic actuator type for Cage restraints.
- Exact Cage wall cross-section.
- Exact catwalk, railing, stair, door, or floor-apron dimensions as Evangelion canon.
- A top gantry crane / suspended umbilical arm unless later evidence verifies it.

## Recommended blockout topology

```text
[repeatable Cage bay]
  ├─ major wall/separator masses
  ├─ EVA restraint volume
  ├─ human floor/apron access
  ├─ optional raised service access
  ├─ dorsal Entry Plug keep-out volume
  ├─ configurable lower-zone state
  └─ transfer interface
        ↓
[dedicated transport platform / linear rail]
        ↓
[launch / injection continuation]
```

The exact orientation between these nodes is not yet fixed.

## Next research priorities

From Worker A backlog:

1. Cage wall architecture and repeated bay modules.
2. Rear mounting/support structure.
3. Upper structure / crane evidence.
4. Large cables / pipe racks / ventilation.
5. Working and warning lights.
6. Signage and giant labels.
7. Doors/hatches and vertical access.
8. EVA-to-Cage scale-reference inventory.
9. Maintenance workflow.
10. Cage-to-launch-system direct boundary follow-up.

See `../../unknowns.md` and `../../contradictions.md` for cross-document unresolved items.
