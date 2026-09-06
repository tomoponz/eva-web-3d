# EVA Cage Playable Blockout — Design v0.1

## Authority boundary

This design consumes the normalized research layer first. Research files are read-only for this implementation.

Production anchors used now:

- Rebuild-inspired Cage participates in a restraint → rail transfer → launch-staging chain.
- EVA is upright under large restraint hardware.
- Entry Plug interface belongs to the neck / upper-back dorsal region.
- Human circulation has a defensible minimum topology of floor apron + raised wall-side service deck + stair.
- Exact dimensions, wall section, catwalk count, lower liquid state, Entry Plug access bridge, load path, and transfer orientation remain unresolved.

The generated visual target is used only for monumental verticality, human/EVA scale contrast, localized lighting, deep shadow, industrial density, foreground occlusion, and concrete/dark-industrial direction.

## Current repository / stack decision

At inspection time, `main` contained research documents only and no Web 3D application stack. The first milestone therefore uses a deliberately small static stack:

- Three.js ES module pinned from jsDelivr;
- vanilla JavaScript modules;
- Node built-in static development server;
- no bundler and no physics engine for M1;
- custom first-person controller, gravity, and conservative AABB collision/nav surfaces.

This avoids choosing a large framework before traversal and scale are validated. A later milestone can move Three.js to npm/Vite and add GLB/KTX2 tooling without changing the scene parameter contract.

## World scale

- 1 world unit = 1 meter.
- `EVA_HEIGHT` is a production assumption, not canon.
- Cage dimensions derive from editable ratios unless explicitly overridden.
- Human eye height is an editable production reference.

## Playable route M1

```text
entrance corridor
→ cage entrance
→ main floor apron
→ EVA foot-level viewpoint
→ guarded stair
→ raised wall-side service deck
→ rear launch-interface observation area
```

The raised deck is intentionally wall-side. No permanent Entry Plug bridge is modeled.

## Scene graph

```text
EVA_CAGE_ROOT
├─ architecture
├─ evaInterface
│  ├─ EVA placeholder
│  └─ cage-side restraint proxies
├─ humanAccess
│  ├─ floor apron
│  ├─ raised service deck
│  ├─ stair
│  └─ railings
├─ launchInterface
│  ├─ transport-platform envelope
│  ├─ rail guides
│  └─ dark continuation proxy
└─ debug
   ├─ human-scale reference
   └─ entry_plug_keepout
```

## Parametric contract

Required editable values are defined in `src/config.js`:

- `EVA_HEIGHT`
- `CAGE_WIDTH`
- `CAGE_DEPTH`
- `CAGE_HEIGHT`
- `CATWALK_LEVEL_COUNT`
- `CATWALK_ELEVATIONS`
- `LOWER_PIT_DEPTH`
- `CAGE_FLUID_ENABLED`
- `CAGE_FLUID_LEVEL`
- `ENTRY_PLUG_KEEP_OUT`
- `ENTRY_PLUG_INSERTION_AXIS`
- `SERVICE_BRIDGE_ENABLED`
- `REAR_SUPPORT_MODE`
- `TRANSFER_INTERFACE_ORIENTATION`
- `LAUNCH_INTERFACE_OFFSET`

## M1 acceptance criteria

- page starts from a static HTTP server;
- Three.js scene loads;
- pointer-lock mouse look;
- WASD movement;
- gravity and collision;
- human-scale camera;
- EVA placeholder scales from `EVA_HEIGHT`;
- cage macro architecture is traversable;
- floor apron, stair, raised service deck, restraint volume, dorsal keep-out, and rail/launch interface exist;
- upper vertical volume remains visually unresolved in darkness;
- fluid is off by default and toggleable;
- no research file is modified.

## Controls

- Click: pointer lock
- WASD: move
- Shift: fast move
- K: toggle Entry Plug keep-out debug volume
- H: toggle human reference
- F: toggle optional lower-zone fluid surface
