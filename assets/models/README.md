# EVA runtime assets

## Active runtime model — M5 Micro-Voxel Production

- `eva-microvoxel-m5.bin` is the active browser EVA surface model.
- It is generated reproducibly by `scripts/generate-eva-microvoxel.py` and committed by `.github/workflows/generate-eva-microvoxel.yml`.
- The active cell size is 0.12 m: 80 m height corresponds to roughly 667 vertical voxel steps.
- Only surface cells are stored. Interior occupied cells are discarded before export.
- The current generated asset contains about 184k surface voxels and is ~1.29 MB in its compact binary representation.
- Near the EVA, cells are rendered as `InstancedMesh` micro-cubes with a 0.94 scale factor, leaving only a very small seam between adjacent cells.
- Farther away, the same surface samples are rendered as a vertex-colored `Points` LOD so the silhouette remains dense without drawing millions of cube triangles.
- The generator silhouette is a production interpretation aimed at a slender EVA-like form; dimensions other than the project-level `EVA_HEIGHT` assumption are not canon claims.
- Dorsal Entry Plug-region geometry remains an upper-back / neck production interpretation and does not assert an unresolved insertion axis.

## Legacy/reference assets

- `eva-unit-continuous-prod.glb` is the superseded M4 continuous-surface experiment. It remains only as a reference/fallback asset and is not the active runtime model.
- `eva-unit-hero.glb.gz` is the older M3 primitive/instanced hero experiment.
- `docs/design/eva-cage/eva-unit-mesh-spec.md` remains a future authored mesh/PBR reference.
