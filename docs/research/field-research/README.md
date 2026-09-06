# EVA WEB 3D Field Research

This directory stores **candidate knowledge** gathered by narrow field-research cycles before or alongside normalization.

Nothing in this directory is promoted to canon by default.

## Current parallel-worker structure

Worker-owned research lives under:

```text
workers/<scope>/
```

Current worker subtree:

```text
workers/cage/
```

The Cage worker owns its own:

- `findings/`
- `index.md`
- `backlog.md`
- `research-log.md`

Other workers may be added later with separate write ownership.

## Shared pre-lock files

The shared root files:

- `index.md`
- `backlog.md`
- `research-log.md`
- `findings/`

contain research created before parallel ownership was fully separated.

In particular, Cage findings `0001–0003` also exist under `workers/cage/findings/` as unchanged copies so the worker subtree is self-contained. The shared originals are preserved for provenance and should not be edited merely to remove duplication while parallel workers are active.

## Evidence classes

Field findings may use:

- `CANON_EXPLICIT`
- `OFFICIAL_META`
- `VISUAL_OBSERVATION`
- `SECONDARY`
- `INFERENCE`
- `ESTIMATE`
- `UNKNOWN`

Each finding should separate continuity, source quality, confidence, scale status, and 3D-production implications.

## Relationship to the normalized Research Bible

Normalized production-facing knowledge lives **outside this directory** under:

- `../canon/`
- `../locations/`
- `../visual/`
- `../technology/`
- `../claim-register.md`
- `../contradictions.md`
- `../unknowns.md`

A Field Research cycle may add evidence that changes a normalized verdict, but must not silently rewrite normalized knowledge without an explicit normalization pass.

## Preservation rule

Do not delete or rewrite older findings simply because a later audit disagrees with them. Preserve the evidence trail and record the resolution in the normalized contradiction/claim registries.
