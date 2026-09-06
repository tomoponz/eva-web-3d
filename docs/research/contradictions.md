# Contradictions and Resolutions

Status: normalized v0.1

This file tracks conflicts between raw reports, field findings, official/licensed reconstructions, and audit results.

## C-001 — Entry Plug insertion location

**Claim A:** ChatGPT Foundation: Entry Plug opening is at the top of the EVA head.

**Claim B:** Gemini Foundation / Worker A / Claude audit: insertion interface is in the neck-to-upper-back / dorsal region.

**Resolution:** `CONTRADICTED` for Claim A. Use the dorsal neck-to-upper-back interface.

**3D consequence:** place the Entry Plug port and keep-out volume on the upper back; reject top-of-head bridge/loading geometry.

---

## C-002 — EVA Cage catwalk count

**Claim A:** Gemini Foundation: `5–8` catwalk levels.

**Claim B:** Worker A evidence establishes only a minimum service-access topology and does not support an exact level count.

**Resolution:** `UNRESOLVED / WEAK EVIDENCE` for the numeric count.

**3D consequence:** catwalk count and elevations remain parametric.

---

## C-003 — Lower Cage flooded vs dry state

**Claim A:** Fuji-Q Seventh Cage reconstruction presents a flooded lower-body basin, reported in contemporary material as LCL.

**Claim B:** SMALL WORLDS official Rebuild hangar presents EVAs on dry foot bases/apron.

**Resolution:** `UNRESOLVED`.

Possible explanations include different operational states, different spatial contexts, or exhibition-specific adaptation. Do not merge the two into a single fixed canonical pit state.

**3D consequence:** liquid must be optional/configurable.

---

## C-004 — Cage wall cross-section

**Claim A:** ChatGPT Foundation: cylindrical wall/chamber language.

**Claim B:** Gemini Foundation: hexagonal or rectangular section language.

**Resolution:** `UNKNOWN`. Both are currently interpretation-level claims.

**3D consequence:** wall macro-section must remain replaceable.

---

## C-005 — Cage height vs injection-site height

**Claim A:** secondary retellings often convert the official/promotional `100 m+` description into a Cage/hangar height.

**Claim B:** Worker A tracing indicates the official wording applies to the **injection site / launch facility**, not securely to the Cage chamber.

**Resolution:** cage `100+ m` = `UNSUPPORTED`. Launch/injection facility extreme verticality = `SUPPORTED OFFICIAL_META`.

**3D consequence:** do not set `CAGE_HEIGHT = 100+ m` from this source.

---

## C-006 — EVA support mode

**Claim A:** Gemini Foundation: EVA is suspended from a rear mount rather than standing on the floor.

**Claim B:** Worker A evidence shows foot/base support and rear restraint interfaces but does not resolve the total load path.

**Resolution:** `UNKNOWN / PLAUSIBLE INFERENCE` for rear-only suspension.

**3D consequence:** rear support mode must remain configurable; avoid baking a single load-path explanation into geometry.

---

## C-007 — Entry Plug personnel bridge

**Claim A:** Gemini Foundation describes a bridge reaching the Entry Plug area.

**Claim B:** Worker A verifies the dorsal insertion interface and clearance requirement but does not find official/licensed evidence establishing a permanent bridge.

**Resolution:** bridge = `UNVERIFIED GEOMETRY`, not disproven.

**3D consequence:** optional/retractable module only until stronger evidence appears.

---

## C-008 — EVA height

**Claim A:** raw/secondary material frequently uses ~40 m as if it were a fixed EVA height.

**Claim B:** Claude audit: TV/EoE do not support a single fixed official total height; Rebuild ~80 m is continuity-specific and should not be back-ported.

**Resolution:** universal fixed EVA height = `CONTRADICTED / CONTINUITY-DEPENDENT`.

**3D consequence:** `EVA_HEIGHT` remains parametric.

---

## C-009 — Gemini PBR metallic values

**Claim A:** painted steel `0.10–0.30`, grating `0.70–0.90`, exposed metal `0.85–1.00`.

**Claim B:** metallic-roughness PBR workflow requires dielectric paint to read as `0`, exposed/bare metal as `1`, with masking at chipped boundaries rather than averaging the metallic property.

**Resolution:** original intermediate values = `CONTRADICTED` as general production guidance.

**3D consequence:** use binary metallic material logic with masks; roughness remains tunable.

---

## C-010 — "Second waterfront passage"

**Claim A:** ChatGPT Foundation describes a `第二湾岸通路` Rebuild facility with LCL/fuel infrastructure.

**Audit result:** no reliable trace found; suspected hallucination.

**Resolution:** `DO NOT MODEL AS CANON YET`.

**3D consequence:** exclude from production planning unless new evidence establishes the term/facility.

## Resolution protocol

When new evidence resolves an item:

1. preserve the old claims;
2. add the resolving source and date;
3. update `claim-register.md`;
4. update the affected normalized location/visual/technology document;
5. do not delete the original raw/field evidence trail.
