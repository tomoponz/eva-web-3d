# Continuity and Evidence Policy

Status: normalized policy v0.1

This file defines how Evangelion setting information is allowed to enter production-facing documentation.

## Continuity tags are mandatory

Every setting claim, location rule, asset note, or dimension should identify continuity where possible:

- `TV`
- `EoE`
- `Rebuild:序`
- `Rebuild:破`
- `Rebuild:Q`
- `Rebuild:シン`
- `Unknown`

A claim without a stable continuity assignment is automatically treated as `CONTINUITY-DEPENDENT` until resolved.

Do not silently merge TV/EoE and Rebuild geometry, colors, terminology, UI, machinery, scale, or topology.

## Evidence classes

Field research may use:

- `CANON_EXPLICIT`
- `OFFICIAL_META`
- `VISUAL_OBSERVATION`
- `SECONDARY`
- `INFERENCE`
- `ESTIMATE`
- `UNKNOWN`

Normalization additionally records an audit verdict:

- `VERIFIED`
- `SUPPORTED BUT INCOMPLETE`
- `CONTINUITY-DEPENDENT`
- `PLAUSIBLE INFERENCE`
- `PRODUCTION RECOMMENDATION`
- `WEAK EVIDENCE`
- `CONTRADICTED`
- `UNKNOWN`

## Promotion rules

### May enter normalized location/canon docs

- `VERIFIED`
- `SUPPORTED BUT INCOMPLETE`, if the missing evidence and assumption are written next to the claim.
- `CONTINUITY-DEPENDENT`, only inside the matching continuity section.

### May enter visual/technology docs, but not as canon

- `PLAUSIBLE INFERENCE`
- `PRODUCTION RECOMMENDATION`

These must remain labeled as observation, engineering analogy, or project decision.

### Must not be fixed as canon

- `WEAK EVIDENCE`
- `CONTRADICTED`
- `UNKNOWN`

Unknown geometry may still be prototyped if it is modular, removable, and explicitly labeled provisional.

## Scale policy

### EVA height

Do not hard-code one universal EVA height.

For TV/EoE, the current audit does not support a single fixed official total height. Treat scale as relative/parametric.

For Rebuild, an approximately 80 m production assumption may be used only when explicitly labeled as a Rebuild-specific assumption. It must not be back-ported to TV/EoE.

Recommended implementation:

```text
EVA_HEIGHT = configurable
```

All dependent cage dimensions, catwalk elevations, camera settings, and traversal metrics should derive from this parameter or from relative ratios rather than a universal fixed number.

## Spatial-topology policy

Do not equate editing continuity with architectural adjacency.

For every important connection, distinguish:

- `VERIFIED_CONNECTION`
- `SUPPORTED_CONNECTION`
- `PLAUSIBLE_CONNECTION`
- `INFERRED_CONNECTION`
- `UNKNOWN_CONNECTION`

If a film cuts from one space to another, that is not sufficient by itself to prove a direct physical connection.

## Real-world engineering references

Real-world standards are useful for playable human scale, but are not Evangelion canon.

Examples such as 1,100 mm railings, 200/250 mm stairs, 600–800 mm catwalk widths, or 2,000 mm doors must be labeled `PRODUCTION RECOMMENDATION` unless an Evangelion source independently establishes them.

## Source discipline

- Multiple websites repeating one source are not independent confirmation.
- Licensed products/exhibitions are useful `OFFICIAL_META`, but may adapt or compress production geometry.
- Product dimensions are not automatically in-universe dimensions.
- Fan wikis are discovery tools, not sufficient authority for `VERIFIED` by themselves.
- Raw AI reports are never authority solely because multiple models agree.

## Current hard exclusions from canon

The following audited claims must not be reintroduced as established setting facts without new evidence:

- Entry Plug insertion at the top of the EVA head.
- A universal TV/EoE EVA height of exactly 40 m.
- `5–8` EVA Cage catwalk levels as a fixed count.
- Cage lower liquid being definitively LCL.
- EVA Cage chamber height being 100+ m merely because the injection site is described that way.
- Intermediate metallic values for painted/nonpainted surfaces being treated as canonical material facts.

## Provenance

Primary normalization inputs:

- `../raw-reports/claude/0001-foundation-audit.md`
- `../field-research/workers/cage/`

Raw ChatGPT and Gemini reports remain preserved for traceability but do not override the audit/evidence policy.
