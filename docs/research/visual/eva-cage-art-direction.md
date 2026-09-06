# EVA Cage Art Direction — Normalized v0.1

Continuity target: primarily Rebuild `:序` / `:破` unless otherwise stated

Status: **production guidance, not canon specification**

## Purpose

Gemini's visual report contains many useful observations and production heuristics, but the Claude audit found that most of them are not Canon facts. This document preserves the useful art-direction value while clearly separating:

- visual observation;
- real-world engineering reference;
- production recommendation;
- unverified setting claim.

## High-value visual observations

These are useful as direction, but should not be presented as hard setting facts unless separately sourced.

### Monumental verticality

Prefer compositions where the Cage reads as substantially taller than a human-scale space. Avoid framing that makes the chamber feel like a conventional warehouse.

Production implications:

- use strong vertical lines;
- allow upper structure to leave the camera frame or fall into shadow;
- maintain visible human-scale references near the EVA;
- avoid making the ceiling consistently easy to read from every viewpoint.

### Strong human-scale contrast

Handrails, stairs, doors, workers, maintenance access, and other familiar human-scale objects are important for scale perception.

The **presence** of these references is a strong production principle. Their exact dimensions are not Evangelion canon unless separately verified.

### Uneven visual density

Large relatively quiet surfaces contrasted with concentrated machinery/detail clusters are a useful way to avoid generic AI/sci-fi greeble density.

Gemini's `50% void / 35% structure / 15% detail` ratio is **not an Evangelion rule**. Treat it as an optional composition heuristic only.

### Controlled perspective and foreground occlusion

One-point-perspective compositions, low/high viewing angles, and foreground structural occlusion are consistent with the visual language identified in the foundation research.

These are camera/art-direction techniques, not spatial canon.

### Localized high-contrast lighting

Use strong local work/emergency illumination and large dark zones to preserve scale and mood.

Do not interpret dramatic animation lighting as proof of exact physical light-source placement.

## Project art-direction rules

The following are explicitly **project rules**, not claims that official Evangelion design documentation mandates them.

1. Preserve large low-detail/negative-space regions.
2. Use human-scale objects beside EVA-scale masses.
3. Concentrate mechanical detail in functional clusters rather than distributing it uniformly.
4. Avoid generic blue LED strips and spaceship-wall greebles as a default language.
5. Prefer rectilinear/industrial massing over decorative sci-fi curvature unless evidence says otherwise.
6. Keep warning colors sparse and functionally motivated.
7. Use foreground occlusion and strong perspective to communicate depth.
8. Keep upper/lower voids visually unresolved when this improves scale perception.
9. Treat cables, pipes, restraints, platforms, and signage as functional systems rather than decoration.
10. Preserve a tension between monumental stillness and active heavy-industry infrastructure.

## Non-canon production defaults

These may be useful starting values but must not appear in canon/location documents as official dimensions:

- railing height around `1.1 m`;
- stair riser around `0.2 m` and tread around `0.25 m`;
- catwalk width around `0.6–0.8 m`;
- door height around `2.0 m`;
- generic adult placeholder around `1.6–1.8 m`.

These are real-world/production references only.

## Color

Gemini's `60–70 / 20–30 / 5–10 / <2%` palette percentages are a design heuristic, not an Evangelion-derived numeric rule.

Recommended use:

- large low-saturation structural base;
- limited safety/warning accents;
- small high-luminance indicator/emissive areas;
- continuity-specific overrides where evidence supports them.

Do not use the numeric percentages as a validation test for canon fidelity.

## Typography

### Supported

`マティスEB` / Evangelion-associated Matisse typography has verified official relevance, with continuity-specific differences between TV-era and Rebuild-era products/usage noted by the audit.

### Not verified as canonical facility font rules

The claims that facility signage systematically uses:

- Helvetica Bold;
- DIN 1451;
- Univers;
- 新ゴ;
- ゴシックMB101;

remain weak/unverified.

These can be considered as production references, not source-backed setting facts.

## Materials

Claims such as exposed concrete, steel, galvanized grating, wet industrial floors, rust, efflorescence, and oil staining are best treated as **visual/engineering interpretations** unless a setting source explicitly identifies the material.

They are still useful for the project because they support the desired heavy-infrastructure visual language.

Recommended documentation rule:

```text
material identity = production assumption unless explicitly sourced
```

## Lighting

Real-world color-temperature ranges such as `5500–6500 K` and `2700–3200 K` are technically plausible references, but are not canonical NERV lighting specifications.

Lighting should be tuned separately for continuity and scene purpose.

Do not use `ambient light = 0` as a physical rule. For PBR/Web 3D, very low-level IBL/environment contribution may be necessary even if the artistic goal is deep shadow.

## Cage-specific unresolved visual claims

Do not bake the following into art direction as universal Cage rules:

- exactly `5–8` catwalk levels;
- permanent liquid pit;
- exact cylindrical/hexagonal/rectangular wall section;
- permanent top gantry crane;
- suspended umbilical arm;
- rear-only EVA suspension;
- permanent Entry Plug bridge;
- always-open bottomless pit;
- fixed dry or flooded lower-zone state.

## Relationship to source documents

Source/audit inputs:

- `../raw-reports/gemini/0001-foundation-visual.md`
- `../raw-reports/claude/0001-foundation-audit.md`
- `../field-research/workers/cage/`

When these disagree, this document follows the audit verdict and current narrow Field Research rather than the more assertive wording of the original Gemini report.
