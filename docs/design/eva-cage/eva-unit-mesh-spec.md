# EVA Unit — M3 Authored Mesh Specification

Status: production design specification for the Web 3D EVA Cage project.

This document defines how the procedural EVA placeholder is replaced by an authored Blender → GLB asset while preserving the project's research boundary and parametric scale contract.

## 1. Authority and scope

### Canon-safe anchors used by the mesh

- The unit is an upright giant humanoid EVA-class body for a Rebuild-inspired Cage presentation.
- Entry Plug-related geometry belongs to the **dorsal neck / upper-back** region.
- The model must preserve clear human-scale readability when viewed from floor level and service decks.
- Exact universal EVA height is not canon-fixed; the exported asset is normalized and scaled at runtime by `EVA_HEIGHT`.

### Explicit production assumptions

The following are visual-production choices, not canon claims:

- Unit proportions, armor seams, panel thicknesses, vent placement and small mechanical fasteners.
- Exact horn, jaw, shoulder-pylon and limb contour interpretation.
- Number and routing of maintenance ports, hoses and service panels.
- Surface roughness, paint wear and micro-scratches.

### Forbidden assumptions

- Do not encode a universal 40 m EVA scale.
- Do not place the Entry Plug on top of the head.
- Do not bake a permanent Entry Plug personnel bridge into the EVA asset.
- Do not identify any lower Cage fluid as LCL through the EVA mesh.

---

## 2. Asset contract

Primary authored asset:

```text
assets/models/eva-unit.glb
```

Prototype/fallback asset:

```text
assets/models/eva-unit-prototype.glb
```

Blender source target:

```text
assets/source/eva-unit.blend
```

Runtime requirements:

- Y-up after GLB export.
- Front of the EVA faces **+Z**.
- Feet rest at `Y = 0`.
- Local origin is centered between the feet on the floor plane.
- Exported mesh height is normalized to **80 Blender/scene units** before runtime scaling.
- Three.js rescales the asset to `EVA_HEIGHT`.
- Dorsal Entry Plug interface faces primarily toward **-Z**.

---

## 3. Target visual result

The M3 mesh should no longer read as a stack of boxes. At a human-scale camera distance of 2–15 m, the viewer should perceive:

1. layered armor plates with visible thickness;
2. beveled and chamfered edges catching light;
3. tapered mechanical forms rather than rectangular prisms;
4. recessed joints between armor shells;
5. complex silhouette changes around head, shoulders, forearms, knees and calves;
6. localized high-density details around the face, chest, hands, Entry Plug region and restraint-contact areas;
7. broad low-frequency forms at distance, medium panel structure at service-deck distance, and small detail only at close inspection distance.

The model should look intentionally engineered even without textures.

---

## 4. Global proportions

All dimensions below are normalized to `EVA_REFERENCE_HEIGHT = 80.0` and are **production proportions**, not canon dimensions.

| Region | Y range | Target max width | Target depth | Notes |
|---|---:|---:|---:|---|
| Feet | 0–5 | 8.0 | 10.0 | elongated toe, separated heel mass |
| Lower legs | 5–25 | 9.0 | 6.5 | narrow ankle, broad calf armor |
| Upper legs | 25–42 | 10.0 | 7.0 | tapered thigh shell |
| Pelvis | 40–47 | 12.0 | 7.5 | mechanical core + side hip armor |
| Abdomen | 46–54 | 8.0 | 6.0 | articulated layered segments |
| Chest | 53–65 | 15.0 | 10.0 | largest forward armor mass |
| Shoulder pylons | 57–70 | 22.0 overall | 7.0 | key silhouette feature |
| Arms | 33–61 | 20.0 overall | 6.0 | narrow joints, broader armor shells |
| Neck | 64–69 | 6.5 | 6.5 | visible seal / collar layering |
| Head | 68–78 | 8.0 | 8.0 | asymmetric layered face read encouraged |
| Horn / top feature | 74–80 | 4.0 | 4.0 | must not be confused with Entry Plug |

### Proportion validation

- Head should occupy roughly 10–12% of total height including horn.
- Knee center should sit around 29–31% of total height.
- Pelvis center should sit around 53–55%.
- Shoulder joint center should sit around 73–76%.
- Dorsal Entry Plug interface center should remain around 77–82% of body height depending on final neck/head proportions.

---

## 5. Blender collection structure

Required collection hierarchy:

```text
EVA_UNIT_ROOT
├─ GEO_BODY
│  ├─ GEO_HEAD
│  ├─ GEO_NECK
│  ├─ GEO_TORSO
│  ├─ GEO_PELVIS
│  ├─ GEO_ARM_L
│  ├─ GEO_ARM_R
│  ├─ GEO_LEG_L
│  └─ GEO_LEG_R
├─ GEO_ARMOR
│  ├─ ARMOR_HEAD
│  ├─ ARMOR_CHEST
│  ├─ ARMOR_SHOULDER_L
│  ├─ ARMOR_SHOULDER_R
│  ├─ ARMOR_ARM_L
│  ├─ ARMOR_ARM_R
│  ├─ ARMOR_LEG_L
│  └─ ARMOR_LEG_R
├─ GEO_MECH
│  ├─ JOINTS
│  ├─ FASTENERS
│  ├─ VENTS
│  ├─ CABLES
│  └─ DORSAL_INTERFACE
├─ SOCKETS
│  ├─ SOCKET_ENTRY_PLUG
│  ├─ SOCKET_RESTRAINT_CHEST_L
│  ├─ SOCKET_RESTRAINT_CHEST_R
│  ├─ SOCKET_RESTRAINT_SHOULDER_L
│  ├─ SOCKET_RESTRAINT_SHOULDER_R
│  ├─ SOCKET_FOOT_L
│  └─ SOCKET_FOOT_R
├─ COLLISION
│  ├─ COL_BODY
│  ├─ COL_LEG_L
│  └─ COL_LEG_R
└─ DEBUG_GUIDES
```

Keep left/right parts separate for later rigging, animation, restraints and LOD authoring.

---

## 6. Required named mesh modules

### Head

Required forms:

- `eva_head_cranium`
- `eva_head_face_shell`
- `eva_head_jaw`
- `eva_head_cheek_L/R`
- `eva_head_temple_L/R`
- `eva_head_brow_L/R`
- `eva_head_eye_L/R`
- `eva_head_horn_center`
- `eva_head_fin_L/R`
- `eva_head_sensor_L/R`

Modeling requirements:

- Never use one rectangular block for the head.
- Build the head from at least 5 major overlapping volumes.
- Face shell should be a tapered/wedged volume with a projecting brow and recessed eye area.
- Jaw must be a distinct lower shell with an undercut silhouette.
- Temple housings should change the side silhouette when viewed from front 3/4 and rear 3/4.
- Use bevels large enough to produce visible highlights at human viewing distances.

### Neck and dorsal collar

Required forms:

- `eva_neck_core`
- `eva_neck_seal_01..03`
- `eva_dorsal_collar`
- `eva_entry_port_frame`
- `eva_entry_port_hatch`
- `eva_entry_port_fasteners`

Requirements:

- Dorsal interface must remain behind the neck/upper torso.
- The keep-out volume is a separate scene/debug concept and must not be baked as visible canon geometry.
- Port/hatch should read as removable/operable, not painted-on decoration.

### Chest and abdomen

Required forms:

- `eva_chest_core`
- `eva_chest_plate_L/R`
- `eva_chest_inner_rib_L/R`
- `eva_sternum_rail`
- `eva_chest_vent_L/R`
- `eva_abdomen_segment_01..06`
- `eva_waist_core`

Requirements:

- Chest must have at least three depth layers: inner core, main armor, secondary inset/edge armor.
- Avoid flat broad rectangles; use taper and differing surface normals.
- Abdomen segments must overlap slightly and visibly separate under lighting.

### Shoulder pylons

Required forms:

- `eva_pylon_core_L/R`
- `eva_pylon_cowl_L/R`
- `eva_pylon_accent_L/R`
- `eva_pylon_vent_L/R`
- `eva_shoulder_joint_L/R`

Requirements:

- Shoulder pylon silhouette is a primary recognition cue and needs front, side and rear surface variation.
- Pylons should not look like two vertical boxes attached to the torso.
- Add taper, chamfers, inset vents and a distinct upper cap.

### Arms and hands

Required forms per side:

- `eva_upper_arm_core_[L/R]`
- `eva_upper_arm_armor_[L/R]`
- `eva_elbow_joint_[L/R]`
- `eva_forearm_core_[L/R]`
- `eva_forearm_armor_[L/R]`
- `eva_wrist_[L/R]`
- `eva_hand_palm_[L/R]`
- `eva_finger_01..04_[L/R]`

Requirements:

- Elbow and wrist must visibly narrow relative to armor shells.
- Forearm should use an asymmetric cross-section rather than a cuboid.
- Fingers need at least two visible phalange volumes in LOD0 if performance allows.

### Pelvis and legs

Required forms per side:

- `eva_pelvis_core`
- `eva_hip_armor_[L/R]`
- `eva_thigh_core_[L/R]`
- `eva_thigh_front_[L/R]`
- `eva_thigh_side_[L/R]`
- `eva_knee_joint_[L/R]`
- `eva_knee_cap_[L/R]`
- `eva_shin_core_[L/R]`
- `eva_shin_front_[L/R]`
- `eva_calf_side_[L/R]`
- `eva_ankle_[L/R]`
- `eva_foot_[L/R]`
- `eva_toe_[L/R]`
- `eva_heel_[L/R]`

Requirements:

- Legs need continuous taper from thigh → knee → shin rather than straight rectangular columns.
- Knee cap must visibly project forward.
- Calf/outer shin armor must alter silhouette from side view.
- Toe and heel must be separate masses.

---

## 7. Topology standard

### LOD0 target

Target range: **120k–220k triangles** for the complete authored EVA.

This is a production target, not a hard requirement. Profile the actual browser build.

Topology rules:

- Prefer quads during Blender authoring.
- Triangulate on export or through the GLTF pipeline.
- Keep loops dense around silhouette-changing curves and sparse on flat interior surfaces.
- Avoid hidden duplicate faces and coplanar shells.
- Merge tiny bolts into instanced/combined meshes where individual transforms are unnecessary.
- Do not model micro-scratches as geometry.
- Use weighted normals / autosmooth-style shading strategy where appropriate.

### Bevel standard

Use real bevels on hero edges.

Normalized reference values for the 80-unit source asset:

- Major armor edge bevel: `0.08–0.22`
- Medium panel bevel: `0.03–0.08`
- Small mechanical part bevel: `0.01–0.04`

Bevel widths should be driven by visual scale, not by pretending these are canon measurements.

---

## 8. LOD policy

Required:

```text
LOD0  120k–220k tris   close inspection / service deck
LOD1   55k–100k tris   normal floor gameplay
LOD2   18k–40k tris    long-distance Cage view
```

Optional:

```text
LOD3    5k–12k tris    distant multi-bay / future scenes
```

LOD reduction priorities:

1. preserve head, horn, shoulder pylon and overall limb silhouette;
2. preserve large armor breaks;
3. remove bolts, micro vents and small cable detail first;
4. collapse finger segmentation before reducing major limb silhouettes;
5. bake medium geometry detail into normals for lower LODs.

---

## 9. UV and texel strategy

Recommended UV sets:

- `TEXCOORD_0`: primary PBR UVs.
- `TEXCOORD_1`: optional lightmap/detail-mask use later.

Texture plan for LOD0:

- 2 × 4K sets maximum for the EVA body in early production.
- Suggested split:
  - Set A: head / chest / shoulder pylons / arms.
  - Set B: pelvis / legs / dorsal mechanics.

For Web delivery later, prepare KTX2/Basis compressed variants.

Avoid unique high-resolution UV space for invisible interior faces.

---

## 10. PBR material slots

Keep the initial authored asset to a limited material budget.

Required logical materials:

```text
MAT_EVA_PURPLE_ARMOR
MAT_EVA_PURPLE_DARK
MAT_EVA_GREEN_ARMOR
MAT_EVA_BLACK_MECH
MAT_EVA_METAL
MAT_EVA_RUBBER
MAT_EVA_EYE_EMISSIVE
MAT_EVA_SENSOR_EMISSIVE
MAT_EVA_WARNING_ORANGE
```

Recommended map channels:

- Base Color
- Normal
- Roughness
- Metallic
- Ambient Occlusion where useful
- Emissive for eyes/sensors

Do not rely on pure black materials. Dark surfaces must retain enough response to read under Cage lighting.

---

## 11. Surface-detail hierarchy

### Macro detail — geometry

Must be modeled:

- major armor shells;
- limb taper;
- chest protrusion;
- shoulder pylons;
- jaw and face volumes;
- knee protrusions;
- toe/heel separation;
- dorsal collar / Entry Plug interface.

### Meso detail — geometry or baked normal

- panel overlaps;
- vents;
- recessed maintenance hatches;
- joint rings;
- large fasteners;
- cable sockets;
- restraint contact plates.

### Micro detail — textures

- paint grain;
- subtle scratches;
- edge wear;
- dirt accumulation;
- tiny screw heads;
- machining marks.

If a detail does not change silhouette and is smaller than a few centimeters at the 80-unit reference scale, prefer normal/roughness texture rather than geometry.

---

## 12. Restraint interaction sockets

Create Blender empties using these exact names:

```text
SOCKET_ENTRY_PLUG
SOCKET_RESTRAINT_CHEST_L
SOCKET_RESTRAINT_CHEST_R
SOCKET_RESTRAINT_SHOULDER_L
SOCKET_RESTRAINT_SHOULDER_R
SOCKET_FOOT_L
SOCKET_FOOT_R
SOCKET_HEAD_LOOK
```

Sockets are integration points, not canon geometry.

`SOCKET_ENTRY_PLUG` must sit in the upper-back / neck dorsal region.

---

## 13. Collision policy

Do not export per-triangle collision for gameplay.

Use authored low-complexity proxy meshes:

```text
COL_BODY
COL_LEG_L
COL_LEG_R
COL_FOOT_L
COL_FOOT_R
```

For the current Web 3D player, conservative AABB collision may continue to be used until physics integration is upgraded.

---

## 14. Rig readiness

Even before animation is added:

- Left/right limbs must remain separable.
- Object origins should be meaningful at shoulder, elbow, wrist, hip, knee and ankle joints.
- Avoid destructive transforms that make later armature setup difficult.
- Keep dorsal hatch/interface parts separate if future state changes are planned.

Future armature minimum:

```text
root
pelvis
spine_01
spine_02
chest
neck
head
clavicle_L/R
upper_arm_L/R
forearm_L/R
hand_L/R
thigh_L/R
shin_L/R
foot_L/R
```

---

## 15. GLB export standard

Blender export settings:

- Format: glTF 2.0 Binary (`.glb`).
- Apply transforms: yes before final export.
- Y-up conversion: exporter default.
- Meshes: selected objects / dedicated export collection.
- Normals: enabled.
- Tangents: enabled when normal maps are present.
- Materials: enabled.
- Images: embedded for prototype, external/compressed pipeline may follow later.
- Animations: disabled until an armature exists.
- Cameras/lights: do not export with the EVA asset.
- Draco: optional only after measuring decode/runtime tradeoffs.

After export run:

```text
1. load GLB in Three.js
2. compute Box3
3. rescale to EVA_HEIGHT
4. align feet to Y=0
5. verify front = +Z
6. verify dorsal port = -Z
7. compare Entry Plug socket against keep-out volume
```

---

## 16. Blender modeling order

### Stage 1 — silhouette blockout

1. feet and lower legs;
2. thighs and pelvis;
3. abdomen and chest;
4. shoulder pylons;
5. arms;
6. neck/head;
7. dorsal collar/interface.

Acceptance: recognizable giant EVA/mecha silhouette from front, side and rear at 10% viewport zoom.

### Stage 2 — primary armor

- split all major armor shells;
- introduce taper and layered depth;
- bevel hero edges;
- create readable joints.

Acceptance: no major limb reads as a rectangular prism.

### Stage 3 — secondary mechanical detail

- vents;
- fasteners;
- panel seams;
- cables;
- sensor housings;
- restraint contact surfaces.

Acceptance: service-deck close view has believable medium-scale information.

### Stage 4 — UV/PBR

- UV unwrap;
- material IDs;
- normal/roughness/metallic pass;
- emissive eye/sensor setup.

### Stage 5 — Web optimization

- LOD1/LOD2;
- KTX2 texture conversion;
- optional mesh compression;
- runtime profiling.

---

## 17. Visual review angles

Every iteration must be reviewed from these cameras:

```text
CAM_HUMAN_FRONT_LOW     eye 1.68 m, 8–15 m from feet
CAM_HUMAN_SIDE_LOW      eye 1.68 m, side 3/4
CAM_SERVICE_CHEST       raised deck, chest/shoulder distance
CAM_SERVICE_HEAD        upper inspection / debug fly
CAM_REAR_DORSAL         Entry Plug interface view
CAM_LONG_CAGE           whole-body scale check
```

If the model only looks correct from a centered front camera, it is not ready.

---

## 18. M3 acceptance criteria

The authored EVA asset is considered M3-ready when:

- GLB loads without procedural EVA visible underneath;
- complete height tracks `EVA_HEIGHT` at runtime;
- feet align with the Cage floor;
- head/shoulder/chest/knee silhouettes are non-cuboid and readable;
- dorsal Entry Plug interface is in the correct upper-back region;
- no major visible z-fighting;
- materials remain readable in both `DEBUG FULL-BRIGHT` and cinematic modes;
- LOD0 has no obvious primitive-stack appearance at 3–10 m;
- LOD1 preserves the primary silhouette;
- browser frame time is profiled before further geometry growth.

---

## 19. Immediate next modeling target

The first authored pass should focus on only five hero regions before adding more microdetail:

1. head / jaw / temple silhouette;
2. chest armor layering;
3. shoulder pylons;
4. knee / shin / foot silhouette;
5. dorsal collar / Entry Plug interface.

These five regions will produce a larger realism gain than hundreds of additional bolts or pipes.
