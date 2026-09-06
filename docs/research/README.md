# EVA WEB 3D Research Bible

This directory separates research by **evidence maturity**. Do not treat all Markdown under `docs/research/` as equally authoritative.

## Layers

### 1. Raw reports — preserved evidence history

`raw-reports/`

Contains the original model outputs from ChatGPT, Gemini, and Claude. These files are preserved as historical research artifacts and may contain errors, contradictions, unsupported claims, or production recommendations presented as fact.

### 2. Field research — candidate knowledge

`field-research/`

Contains narrow, repeatable research cycles. Field findings are more granular than the foundation reports, but are still **candidate knowledge** until normalized.

Parallel workers own separate subtrees under:

`field-research/workers/<scope>/`

Shared pre-lock files remain for provenance and should not be deleted merely because a worker-local copy exists.

### 3. Normalized Research Bible — production-facing knowledge

The following directories contain claims that have passed at least one normalization pass:

- `canon/` — continuity and evidence policy; verified/conditional setting claims.
- `locations/` — normalized spatial/location knowledge.
- `visual/` — art-direction guidance clearly separated from canon.
- `technology/` — Web 3D implementation guidance clearly separated from canon.
- `claim-register.md` — compact claim-level status ledger.
- `contradictions.md` — resolved and unresolved conflicts.
- `unknowns.md` — explicit unknowns that must not be silently filled.

## Status vocabulary

Normalized claims use these verdicts where useful:

- `VERIFIED`
- `SUPPORTED BUT INCOMPLETE`
- `CONTINUITY-DEPENDENT`
- `PLAUSIBLE INFERENCE`
- `PRODUCTION RECOMMENDATION`
- `WEAK EVIDENCE`
- `CONTRADICTED`
- `UNKNOWN`

## Production decision vocabulary

Every high-impact claim should eventually map to one of:

- `SAFE TO MODEL NOW`
- `SAFE WITH EXPLICIT ASSUMPTION`
- `KEEP PARAMETRIC / DO NOT FIX DIMENSION`
- `DO NOT MODEL AS CANON YET`

## Current normalized scope

Normalization v0.1 focuses on the **Rebuild-era EVA Cage** because it currently has the densest Field Research coverage.

Primary evidence inputs:

- `raw-reports/chatgpt/0001-foundation-canon.md`
- `raw-reports/gemini/0001-foundation-visual.md`
- `raw-reports/claude/0001-foundation-audit.md`
- `field-research/workers/cage/`

The Claude audit is a quality gate, not a replacement for primary evidence. Worker findings may strengthen, weaken, or leave a claim unresolved.

## Core rule

**Unknown is a valid result.**

Do not convert a plausible visual inference, real-world engineering convention, exhibition adaptation, product-scale dimension, or AI recommendation into Evangelion canon without explicit evidence.
