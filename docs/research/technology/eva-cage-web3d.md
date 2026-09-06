# EVA Cage Web 3D Implementation Guidance — v0.1

Status: production guidance derived from current audit + field research

This file is not canon. It converts normalized research constraints into implementation rules for a browser-based 3D scene.

## Core implementation principle

Unknown geometry must remain **editable**.

Do not encode uncertain setting choices into one irreversible monolithic mesh.

## Required scene parameters

At minimum keep these configurable:

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

Use relative ratios where possible instead of hard-coded world dimensions.

## Suggested scene graph

```text
EVA_CAGE_ROOT
├─ architecture
│  ├─ bayModules
│  ├─ wallSeparators
│  ├─ lowerZone
│  └─ transferBoundary
├─ evaInterface
│  ├─ restraintSystem
│  ├─ rearSupport
│  └─ entryPlugInterface
├─ humanAccess
│  ├─ floorApron
│  ├─ serviceDecks
│  ├─ stairs
│  └─ optionalEntryPlugBridge
├─ launchInterface
│  ├─ transportPlatform
│  ├─ railGuide
│  └─ continuationProxy
├─ utilities
│  ├─ cables
│  ├─ pipes
│  └─ ventilation
├─ lighting
├─ signage
└─ debug
   ├─ humanScaleReference
   ├─ entryPlugKeepout
   └─ uncertaintyVolumes
```

## Entry Plug state model

Current evidence supports a dorsal upper-back port with a movable hatch and removable plug.

Recommended state machine:

```text
PORT_CLOSED
→ HATCH_OPEN
→ PLUG_REMOVED / PLUG_APPROACHING
→ PLUG_INSERTED
→ HATCH_CLOSED
```

Exact actuator timing and insertion trajectory remain unknown.

Create a non-rendered `entry_plug_keepout` volume and author nearby geometry around it.

## Geometry classification

### Must be geometry

- major Cage bay masses and separators;
- EVA-sized openings/recesses;
- major restraint silhouettes;
- transport-platform envelope;
- primary rail/guide path;
- launch transition opening;
- Entry Plug port/hatch silhouette.

### Good candidates for instancing

- repeated bay modules;
- railing posts;
- structural supports;
- repeated service panels;
- bolts only where they materially affect close-range appearance.

### Good candidates for textures/materials/decals

- panel seams;
- surface wear;
- technical labels;
- hazard markings;
- fine non-silhouette surface detail.

### Keep modular/removable

- upper-back personnel bridge;
- catwalk level count;
- lower liquid surface;
- top crane systems;
- rear support configuration;
- exact wall section;
- speculative utility systems.

## Material normalization

The original Gemini report used several intermediate metallic values that the audit identified as physically incorrect for a standard metallic-roughness PBR workflow.

Use these production rules instead:

- painted steel surface: `metallic = 0` on intact paint;
- exposed bare metal: `metallic = 1`;
- galvanized/bare metal grating: generally `metallic = 1`;
- concrete: `metallic = 0`;
- use a mask when paint chips expose metal rather than averaging the material into arbitrary intermediate metallic values.

Roughness values remain scene-tuning parameters, not canon.

## Lighting

Use art-direction goals rather than a canonical photometric model:

- local work/emergency sources;
- deep shadow zones;
- readable EVA/human-scale silhouettes;
- continuity-specific color tuning;
- low-level IBL/environment contribution if needed for PBR readability.

Do not assume dramatic animation lighting proves the physical location of a light fixture.

## Performance policy

Do not adopt the Gemini report's `200k–400k tris per zone`, `100–150 draw calls`, or `150–250 MB texture` numbers as fixed budgets.

They are unaudited production recommendations and may be too loose for the stated mobile/integrated-GPU 60 fps target.

For early prototypes, use conservative **provisional engineering targets** and profile on actual hardware:

```text
mobile draw calls: target <= 50 when practical
whole visible scene triangles: target <= 500k when practical
texture memory: measure and tune; no fixed canon-derived number
```

These are engineering starting points, not guarantees.

## Optimization priorities

Prefer:

- `InstancedMesh` / equivalent for repeated structures;
- KTX2/Basis for texture compression;
- ORM packing where appropriate;
- LOD for distant repeated detail;
- frustum culling;
- occlusion-friendly spatial segmentation;
- decal/atlas strategy for signage;
- simplified distant launch continuation rather than full unseen geometry.

Do not make alpha-tested grating a universal rule without device profiling; mobile tile-based GPUs can react differently to discard-heavy materials.

## Traversal and scale

Player/camera settings should derive from human scale first and EVA scale second.

Use a configurable human reference around `1.6–1.8 m` for production testing only; this is not an Evangelion-specific canonical dimension.

Avoid tuning FOV, movement speed, and clipping planes around a hard-coded 40 m EVA.

## Debugging requirements

During blockout, expose toggles for:

- human scale mannequin;
- EVA height parameter;
- catwalk levels;
- fluid on/off + level;
- wall section mode;
- Entry Plug keep-out volume;
- launch direction/orientation;
- speculative modules.

Any geometry currently classified as `UNKNOWN` or `PRODUCTION RECOMMENDATION` should be visually identifiable in debug mode.

## Provenance

Primary inputs:

- `../raw-reports/claude/0001-foundation-audit.md`
- `../raw-reports/gemini/0001-foundation-visual.md`
- `../field-research/workers/cage/`
- `../locations/eva-cage/rebuild.md`
