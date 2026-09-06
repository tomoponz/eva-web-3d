# TV Episode 24 — Heaven's Door operation and physical-gate evidence

## Scope

This Research Unit covers only the named **Heaven's Door** at Terminal Dogma in TV Episode 24: what it separates, what control/interlock behavior is explicitly evidenced, what its opening sequence implies for a Web 3D implementation, and what remains unknown about the physical geometry.

It does **not** attempt to reconstruct all of Terminal Dogma, Lilith's chamber, Central Dogma, or EVA Cage structures.

## Worker

WORKER B — NERV Infrastructure

## Continuity

TV series, Episode 24 (`最後のシ者 / The Beginning and the End, or "Knockin' on Heaven's Door"`).

EoE and Rebuild geometry are not used to fill TV-series gaps.

## Summary

Heaven's Door is supported as a **real physical access boundary inside Terminal Dogma**, not merely a poetic label. A Platinum-era glossary transcription describes a door called Heaven's Door with Lilith beyond it, while Episode 24 transcript reproductions place a distinct control event immediately before its opening: **the final safety device is disengaged, then Heaven's Door opens**.

The strongest 3D-useful conclusion is therefore operational rather than geometric: the gate should be modeled as a high-security physical barrier with an explicit final interlock/state transition. Publicly accessible evidence checked in this cycle does **not** establish the leaf count, opening direction, actuator type, thickness, travel distance, aperture dimensions, or whether an Evangelion normally passes through the same opening.

The Episode 24 sequence also separates the physical gate from an A.T. Field/containment barrier. The dialogue reports an exceptionally strong A.T. Field, then separately reports final-safety release and physical gate opening. Web 3D should therefore not collapse those two mechanisms into a single object.

## Findings

### Finding 1 — Heaven's Door is a named physical entry boundary to Lilith's chamber

**Claim:** Within Terminal Dogma there is a door called Heaven's Door, and Lilith is beyond it.

**Evidence class:** `OFFICIAL_META` via secondary transcription of the Platinum booklet glossary.

**Confidence:** High for the functional relation; Medium-High for wording because the currently accessible copy is a transcription rather than a directly scanned official page.

**Evidence:** The Platinum Booklets glossary transcription states that Terminal Dogma contains a door called Heaven's Door and that Lilith is beyond it. This is independently repeated by long-running Evangelion reference sources, but those remain secondary.

**Sources:**
- Eva Monkey, Platinum Booklets glossary transcription: https://www.evamonkey.com/platinum-booklets/glossary.php
- Evangelion official works page for Episode 24 continuity identification: https://www.eva-info.jp/works

### Finding 2 — Opening is preceded by release of a final safety device

**Claim:** Heaven's Door has at least one explicit final safety/interlock state which is released immediately before opening.

**Evidence class:** `CANON_EXPLICIT` via independent transcript reproductions of Episode 24.

**Confidence:** High.

**Evidence:** Multiple Episode 24 transcript reproductions preserve the sequence equivalent to: final safety device disengaged/released, followed immediately by an announcement that Heaven's Door is opening. A Japanese fan transcript independently reproduces `最終安全装置、解除` followed by `ヘヴンズドアが、開いて行きます`.

**Sources:**
- Forever Dreaming Episode 24 transcript: https://transcripts.foreverdreaming.org/viewtopic.php?t=77634
- SpringfieldSpringfield Episode 24 transcript: https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e24&tv-show=neon-genesis-evangelion-1995
- Japanese transcript cross-check: https://wikiwiki.jp/eva-shingeki/%E3%82%BB%E3%83%AA%E3%83%95%E4%BF%9D%E7%AE%A1%E5%BA%AB/%E7%AC%AC%E5%BC%90%E6%8B%BE%E5%9B%9B%E8%A9%B1

### Finding 3 — Physical gate and A.T.-Field containment are distinct evidence layers

**Claim:** The Episode 24 sequence supports treating Heaven's Door and the Terminal Dogma A.T.-Field/containment barrier as distinct systems.

**Evidence class:** `CANON_EXPLICIT` for sequence; `INFERENCE` for architectural implementation separation.

**Confidence:** High for dialogue sequence; Medium-High for the implementation conclusion.

**Evidence:** The control room first reports an unprecedented A.T. Field/containment field that blocks monitoring. After that, it separately reports final safety release and Heaven's Door opening. A further A.T. Field is then detected around Terminal Dogma. Nothing in the checked evidence says the physical door itself generates the A.T. Field.

**3D consequence:** Implement a `PhysicalGate` and an `ATFieldBarrier` as separate systems. They may be orchestrated by the same scripted security sequence, but should not be a single mesh/state unless stronger evidence is found.

### Finding 4 — The gate is part of a restricted-access transition

**Claim:** Heaven's Door is part of the transition into one of NERV's most restricted areas.

**Evidence class:** `OFFICIAL_META` via Platinum glossary transcription.

**Confidence:** High for restricted access, Low for the exact authentication hardware at Heaven's Door.

**Evidence:** The glossary transcription says access to Terminal Dogma is limited to only a handful of people, including the Commander and Vice Commander. This establishes a high-security zone boundary, but does not prove that the access-control reader or authentication point is physically attached to Heaven's Door itself.

### Finding 5 — Exact opening geometry remains unknown

**Claim:** Public evidence checked in this cycle is insufficient to canonize the physical leaf motion or dimensions of Heaven's Door.

**Evidence class:** `UNKNOWN`.

**Confidence:** High that the evidence gap exists.

**Unknown parameters:**
- leaf count;
- horizontal vs vertical vs compound motion;
- telescoping / sliding / hinged / retracting mechanism;
- actuator type;
- door thickness;
- opening width and height;
- frame depth;
- normal opening speed;
- emergency/manual override;
- whether the same aperture is intended for EVA-scale passage;
- whether the opening seen in Episode 24 is normal operation or a compromised/emergency state.

No exact numbers should be placed into Canon data.

## Spatial Structure

Minimum supported structure:

```text
Terminal Dogma approach / lower-region access
    ↓
Heaven's Door physical security boundary
    ↓
Lilith chamber / inner restricted volume
```

The first edge is `SUPPORTED_CONNECTION`; the second edge is `VERIFIED_CONNECTION` at the functional level because the glossary explicitly places Lilith beyond Heaven's Door.

Exact distances, orientation and room dimensions remain `UNKNOWN`.

## Connectivity

| Edge | Classification | Notes |
|---|---|---|
| Terminal Dogma lower access → Heaven's Door | `SUPPORTED_CONNECTION` | Episode 24 places the target at the lowest level and then at Heaven's Door; exact path geometry is not fixed. |
| Heaven's Door → Lilith chamber | `VERIFIED_CONNECTION` | Platinum glossary transcription explicitly places Lilith beyond the door. |
| Heaven's Door physical gate ↔ final safety device | `VERIFIED_CONNECTION` operationally | Release is immediately followed by gate opening; hardware placement is unknown. |
| Heaven's Door ↔ A.T.-Field containment barrier | `UNKNOWN_CONNECTION` physically | Same incident sequence, but no evidence that one mechanism generates the other. |

## Human Circulation

Normal human access is highly restricted. The evidence supports designing this as a controlled transition rather than an ordinary corridor door.

For the prototype:
- normal player traversal should be locked unless the narrative grants high-level authorization;
- the gate should visibly communicate `LOCKED / INTERLOCKED / OPENING / OPEN` state;
- do not invent a biometric reader, card slot or guard station as Canon geometry without evidence;
- maintenance bypass and evacuation route are unknown.

## Maintenance / Logistics

No source checked this cycle identifies:
- actuator maintenance spaces;
- service access behind/above the gate;
- emergency power feed;
- hydraulic or electric drive;
- inspection catwalks;
- freight role.

These remain production-design questions, not Canon facts.

## Visual Observations

Current official episode images on the Evangelion works page confirm Episode 24 identity but do not depict Heaven's Door. Web image searches found Terminal Dogma context frames but did not yield a sufficiently attributable, high-quality front-on door frame that would justify a precise geometry claim.

Therefore **no door screenshot or copyrighted frame is stored in the repository**, and no geometry is reverse-engineered from low-quality or ambiguous image-search results.

## Scale Evidence

- **Official:** none located for Heaven's Door dimensions.
- **Relative:** Kaworu reaches/passes the boundary, but this only proves human-scale passage during the incident.
- **EVA-scale aperture:** `Unknown`. Unit-01's later presence in the inner area does not, by itself, prove that it traversed the same normal gate aperture.
- **Production recommendation:** keep aperture width/height configurable until production art or a clearly attributable frame resolves it.

## 3D Modeling Implications

Recommended component split:

```text
HeavensDoorAssembly
├─ GateFrame                 # Must be geometry
├─ GateLeafSet               # Must be geometry; kinematics unresolved
├─ FinalSafetyInterlock      # Requires state logic; physical form unresolved
├─ WarningIndicatorSet      # Production recommendation until visual evidence
├─ ATFieldBarrier            # Separate system; not merged into gate mesh
└─ RestrictedZoneTrigger     # Requires interaction / narrative authority
```

Recommended state model:

```text
LOCKED
  ↓ final safety release
INTERLOCK_RELEASED
  ↓
OPENING
  ↓
OPEN
```

Do **not** canonize motion vectors yet. `GateLeafSet` should expose motion parameters in Scene Config so the geometry can be replaced without rewriting the interaction logic.

## Web 3D Classification

- Gate frame: `Must be geometry`
- Gate leaves: `Must be geometry`
- Repeated fasteners/panel details if later verified: `Can be instanced`
- Warning labels if later verified: `Can be decal`
- Final-safety sequence: `Requires animation`
- Locked/unlocked access: `Requires interaction`
- A.T. Field: `Requires unique modeling` / shader or VFX system, separate from physical gate
- Exact door kinematics: `Unknown`

## Real-World Engineering Analogies

`PRODUCTION / ENGINEERING INFERENCE` only:

A high-consequence bunker, containment facility or nuclear/industrial security boundary would plausibly use interlocks so a final gate cannot move until safety conditions are satisfied. This is a useful implementation analogy for state sequencing, but it does not establish NERV's actuator type, redundant lock count, pressure rating or geometry.

## Contradictions

No direct contradiction was resolved in this cycle.

Potential ambiguity to preserve:
- some secondary sources casually call Heaven's Door a giant bulkhead/blast door;
- the stronger evidence checked here establishes a named door, final safety release and restricted boundary, but **does not establish a blast-pressure rating**.

Therefore classify it as a **high-security physical gate** rather than asserting `blast door` as a technical Canon property.

## Unknowns

1. What is the exact front elevation and cross-section of TV-series Heaven's Door?
2. How many moving leaves are present and what is their travel direction?
3. Where is the final safety device physically located?
4. Is opening normally initiated by an authorized operator, automatic sequence, or local control?
5. Did Kaworu defeat/override the final safety device, or did another system release it?
6. Is the normal aperture EVA-capable?
7. Are the A.T.-Field barrier and physical gate operationally coupled?

## Questions for Claude / Deep Research

> Is there primary production evidence (Episode 24 storyboard, layout, background art, setting sheet, script, filmbook, or officially reproduced frame) that shows the TV-series Heaven's Door front elevation and actual leaf motion? In particular, can the number of leaves, opening direction, frame proportions, and EVA-scale clearance be established without importing EoE or Rebuild geometry?

> Does any primary source identify what the Episode 24 `final safety device` physically controls, and whether its release is normal gate interlock behavior or a security compromise caused by Kaworu?

## Cross-Worker Boundary Notes

This finding is entirely outside the EVA Cage. Unit-01 / Unit-02 are referenced only where necessary to avoid an unsupported aperture-scale inference. No Cage geometry is researched or modified.

## Sources

1. EVANGELION official works page — Episode 24 continuity metadata and official stills: https://www.eva-info.jp/works
2. Eva Monkey — Platinum Booklets glossary transcription: https://www.evamonkey.com/platinum-booklets/glossary.php
3. Forever Dreaming — Episode 24 transcript reproduction: https://transcripts.foreverdreaming.org/viewtopic.php?t=77634
4. SpringfieldSpringfield — Episode 24 transcript reproduction: https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e24&tv-show=neon-genesis-evangelion-1995
5. Japanese dialogue cross-check: https://wikiwiki.jp/eva-shingeki/%E3%82%BB%E3%83%AA%E3%83%95%E4%BF%9D%E7%AE%A1%E5%BA%AB/%E7%AC%AC%E5%BC%90%E6%8B%BE%E5%9B%9B%E8%A9%B1
6. Eva Monkey — Magi Archives, Central Dogma (secondary reference): https://www.evamonkey.com/writings/magi-archives-central-dogma.php
