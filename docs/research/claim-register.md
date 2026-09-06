# Claim Register

Status: normalized v0.1

This is a compact ledger for high-impact claims that affect 3D production. It is not exhaustive.

| ID | Claim | Continuity | Verdict | Production decision | Primary normalized evidence |
|---|---|---|---|---|---|
| CR-001 | EVA Cage is part of a restraint → rail transfer → launch-staging chain | Rebuild | SUPPORTED / OFFICIAL_META | SAFE TO MODEL NOW | Worker A 0001; Claude audit |
| CR-002 | Dedicated restrained transport platform exists in `:序` launch workflow | Rebuild:序 | VERIFIED / OFFICIAL_META | SAFE TO MODEL NOW | Worker A 0001 |
| CR-003 | Entry Plug insertion interface is at neck-to-upper-back / dorsal region | Rebuild | VERIFIED / OFFICIAL_META | SAFE TO MODEL NOW | Worker A 0005; Claude audit |
| CR-004 | Entry Plug hatch can open and Plug can be removed | Rebuild | VERIFIED / OFFICIAL_META | SAFE TO MODEL NOW | Worker A 0005 |
| CR-005 | Entry Plug inserts through the top of EVA head | Mixed/raw | CONTRADICTED | DO NOT MODEL | Claude audit |
| CR-006 | Rebuild Cage may use repeated adjacent vertical bays | Rebuild | PLAUSIBLE / OFFICIAL_META + VISUAL_OBSERVATION | SAFE WITH EXPLICIT ASSUMPTION | Worker A 0001 |
| CR-007 | `第7ケイジ` is a Rebuild-era naming anchor for Unit-01 first encounter | Rebuild | OFFICIAL_META | SAFE WITH CONTINUITY TAG | Worker A 0001 |
| CR-008 | Cage chamber height is 100+ m | Rebuild | UNSUPPORTED | KEEP PARAMETRIC | Worker A 0001; Claude audit |
| CR-009 | Injection/launch site is described as over 100 m high in official/promotional material | Rebuild | SUPPORTED OFFICIAL_META | SAFE WITH EXPLICIT ASSUMPTION | Worker A 0001 |
| CR-010 | EVA Cage has exactly 5–8 catwalk levels | Rebuild | WEAK EVIDENCE | KEEP PARAMETRIC | Worker A backlog; Claude audit |
| CR-011 | Cage has a permanent human bridge directly to Entry Plug port | Rebuild | UNKNOWN | DO NOT MODEL AS CANON YET | Worker A 0005 |
| CR-012 | Cage lower-zone liquid is definitively LCL | Rebuild | UNKNOWN | KEEP PARAMETRIC | Worker A 0008; Claude audit |
| CR-013 | Cage lower zone can be represented dry in official/promotional Rebuild reconstruction | Rebuild | SUPPORTED VISUAL_OBSERVATION | SAFE WITH EXPLICIT ASSUMPTION | Worker A 0008 |
| CR-014 | Flooded lower-body basin presentation exists in sanctioned Seventh Cage reconstruction | Rebuild | SUPPORTED VISUAL_OBSERVATION / OFFICIAL_META | SAFE WITH EXPLICIT ASSUMPTION | Worker A 0008 |
| CR-015 | EVA is supported exclusively from a rear suspension mount | Rebuild | UNKNOWN / PLAUSIBLE INFERENCE | KEEP PARAMETRIC | Worker A 0007; Claude audit |
| CR-016 | Cage wall section is definitively cylindrical | Mixed/raw | UNKNOWN | KEEP PARAMETRIC | Claude audit |
| CR-017 | Cage wall section is definitively hexagonal/rectangular | Mixed/raw | UNKNOWN | KEEP PARAMETRIC | Claude audit |
| CR-018 | TV/EoE EVA has universal fixed height 40 m | TV/EoE | CONTRADICTED / WEAK | DO NOT HARD-CODE | Claude audit |
| CR-019 | Rebuild ~80 m can be used as an explicit continuity-specific production assumption | Rebuild | CONTINUITY-DEPENDENT | SAFE WITH EXPLICIT ASSUMPTION | Claude audit |
| CR-020 | GeoFront `13.75 km / 6 km / 0.9 km / 22 layers` is fully primary-source-verified canon | TV/EoE/Rebuild unclear | SUPPORTED BUT INCOMPLETE | SAFE WITH EXPLICIT ASSUMPTION ONLY | Claude audit |
| CR-021 | Visual density `50/35/15` is an official Evangelion design rule | Mixed/raw | PRODUCTION RECOMMENDATION | ART DIRECTION ONLY | Claude audit |
| CR-022 | Color ratios `60–70 / 20–30 / 5–10 / <2%` are official Evangelion rules | Mixed/raw | PRODUCTION RECOMMENDATION | ART DIRECTION ONLY | Claude audit |
| CR-023 | Railing 1.1 m / stairs 0.2/0.25 m / catwalk 0.6–0.8 m / door 2.0 m are Evangelion canon | Mixed/raw | PRODUCTION RECOMMENDATION | HUMAN-SCALE DEFAULTS ONLY | Claude audit |
| CR-024 | Painted steel should use intermediate metallic 0.10–0.30 | Web 3D | CONTRADICTED | DO NOT USE | Claude audit |
| CR-025 | Painted surfaces metallic=0; exposed bare metal metallic=1 with masks at transitions | Web 3D | VERIFIED ENGINEERING GUIDANCE | SAFE TO IMPLEMENT | Claude audit |
| CR-026 | Gemini `100–150 draw calls` is a fixed mobile 60fps budget | Web 3D | CONTRADICTED / WEAK | DO NOT ADOPT AS FIXED BUDGET | Claude audit |
| CR-027 | `第二湾岸通路` facility described by ChatGPT Foundation is established Rebuild canon | Rebuild | UNKNOWN / suspected hallucination | DO NOT MODEL AS CANON YET | Claude audit |

## Decision rule

A `SAFE TO MODEL NOW` decision means the **existence/function** can be represented. It does not automatically validate every dimension, material, mechanism, or exact topology.

For unresolved values, prefer configurable scene parameters and removable modules.
