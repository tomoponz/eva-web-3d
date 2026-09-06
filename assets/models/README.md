# EVA GLB assets

## Active runtime model — M4 Continuous Production

- `eva-unit-continuous-prod.glb` is the active browser EVA model.
- It is generated reproducibly by `scripts/generate-eva-web-production.py` and committed by `.github/workflows/generate-eva-web-production.yml`.
- The production generator creates one smoothed implicit surface instead of assembling visible box/cylinder/capsule meshes at runtime.
- Current production acceptance requires one watertight connected component and a 20k–50k triangle Web budget. The current generated asset is about 32.8k triangles and ~657 KB.
- Runtime loading uses the normal Three.js `GLTFLoader`; after successful load the old procedural EVA layers are hidden. If loading fails, the procedural model remains as a fail-safe fallback.
- Dorsal Entry Plug-region geometry remains an upper-back / neck production interpretation; it is not promoted to a canon dimension or insertion-axis claim.

## Legacy/reference assets

- `eva-unit-hero.glb.gz` is the older M3 primitive/instanced hero experiment. It is retained as a reference asset but is no longer the active runtime model.
- `docs/design/eva-cage/eva-unit-mesh-spec.md` remains the authored modeling specification and review target for future Blender/PBR refinement.
