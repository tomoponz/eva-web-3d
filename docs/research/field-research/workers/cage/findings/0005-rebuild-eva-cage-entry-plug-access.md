# Rebuild EVA Cage Entry Plug Access — Insertion Port, Clearance Envelope, and Personnel-Access Uncertainty

## Scope

One narrow research unit: **how the Entry Plug interfaces with the EVA while it is in a Rebuild-era Cage, and what this implies for human access geometry immediately around the upper back / neck area**.

This cycle covers:

- the location of the Entry Plug insertion port on the EVA body;
- the fact that the port is covered by a movable hatch;
- the need for a clear insertion / removal volume behind the upper torso;
- whether current evidence supports a permanent personnel bridge to that port.

This cycle does **not** research general NERV corridors, general lifts, Cage crane systems as a whole, or the wider launch-shaft network.

## Continuity

Primary target: **Rebuild of Evangelion**, especially the `:序` / `:破`-era Unit-01 body and Cage context.

Primary evidence:

- DeAgostini Japan's official press release for the licensed `週刊 エヴァンゲリオン初号機をつくる`, which states that the Rebuild Unit-01 model faithfully recreates the Entry Plug insertion opening around the neck-to-back region and makes the hatch and plug removable.
- EVA-INFO licensed-product coverage confirming that Rebuild Unit-01's back armor hatch can open and that inserted / non-inserted Entry Plug states are represented.
- EVA-INFO Rebuild merchandise copy identifying the A10NERVE marking at the location where the Entry Plug is inserted.

Secondary/context evidence is used only to assess operational sequence, not to promote unverified Cage geometry to canon.

TV / EoE exact access geometry is **not merged** into this finding.

## Summary

The strongest defensible geometry is the **EVA-side interface**, not a human bridge:

1. the Entry Plug insertion opening is in the **neck-to-upper-back region**;
2. a **movable armor hatch** covers this opening;
3. the Entry Plug is a **removable component** that must physically enter and leave this region;
4. therefore the Cage must preserve a **rear/upper insertion clearance envelope** around the EVA, even if the exact loading machine is still unknown.

Current research does **not** establish a permanent human walkway or cantilever bridge terminating at the Entry Plug port. The unaudited Gemini Foundation's statement that an access bridge reaches the Entry Plug area should remain `Evidence Weak` until a production layout, official setting sheet, or directly readable official reconstruction confirms it.

For Web 3D, the safe design is to model the insertion port and its clearance as required geometry, while keeping any upper-back personnel bridge **optional / retractable / provisional** rather than baking it into the Cage as canonical structure.

## Findings

### Finding 1 — The Entry Plug interface is located at the neck-to-upper-back region

**Claim:**
The Cage model must reserve the Entry Plug interface on the EVA's dorsal upper torso, around the neck-to-back region, rather than placing pilot access at the chest or front torso.

**Evidence class:** `OFFICIAL_META`

**Confidence:** High for Rebuild Unit-01 interface location.

**Evidence:**
DeAgostini Japan's licensed Rebuild Unit-01 model press release describes the Entry Plug insertion opening as being around the neck-to-back area (`首元から背中付近`) and states that this opening is completely reproduced. The press release also says the model is based on extensive examination of the Rebuild Unit-01 design and is intended to faithfully reproduce it.

EVA-INFO's Rebuild merchandise coverage independently describes the A10NERVE graphic as being at the location where the Entry Plug is inserted.

**Sources:**
- https://deagostini.jp/f/resources_news/press/ev1.pdf
- https://www.eva-info.jp/11234

**Web 3D classification:** EVA-side port and hatch silhouette `Requires unique modeling`.

---

### Finding 2 — The dorsal armor hatch is movable and the Entry Plug is removable

**Claim:**
The upper-back Entry Plug interface should be modeled as a **stateful opening**, not a static painted panel.

**Evidence class:** `OFFICIAL_META`

**Confidence:** High for the licensed Rebuild representation.

**Evidence:**
The DeAgostini press release explicitly states that the Entry Plug hatch opens and closes and that the Entry Plug itself can be removed. EVA-INFO's licensed MAFEX and RAH NEO Unit-01 product descriptions likewise state that the back armor hatch can open and inserted / non-inserted Entry Plug states can be reproduced.

These licensed models do not prove the exact actuator design or motion curve used in the film, but they strongly support the existence of a distinct hatch-open / hatch-closed state and removable plug geometry.

**Sources:**
- https://deagostini.jp/f/resources_news/press/ev1.pdf
- https://www.eva-info.jp/4360
- https://www.eva-info.jp/5980

**Web 3D classification:** `Requires unique modeling` + animated state.

Suggested state machine:

```text
PORT_CLOSED
  -> HATCH_OPEN
  -> PLUG_REMOVED / PLUG_APPROACHING
  -> PLUG_INSERTED
  -> HATCH_CLOSED
```

Exact timing and actuator path remain `UNKNOWN`.

---

### Finding 3 — The Cage needs a protected insertion/removal clearance volume behind the upper torso

**Claim:**
Even without knowing the exact loading machine, the Cage must preserve enough unobstructed volume behind / above the EVA's neck-back region for Entry Plug insertion and removal.

**Evidence class:** `INFERENCE` based on `OFFICIAL_META`

**Confidence:** Medium-High for the need for clearance; Low for exact dimensions and insertion axis.

**Evidence:**
A removable Entry Plug and opening hatch imply a physical approach / withdrawal path. Any permanent wall, beam, dense pipe rack, or non-retractable personnel deck placed directly across this path would conflict with the confirmed state change.

The exact plug trajectory, approach angle, loading mechanism, and required service envelope are not established by the current official sources.

**Sources:**
- https://deagostini.jp/f/resources_news/press/ev1.pdf
- https://www.eva-info.jp/4360
- https://www.eva-info.jp/5980

**Web 3D classification:** clearance volume should be represented as a **design constraint / collision keep-out zone**, not visible geometry.

---

### Finding 4 — A permanent human bridge to the Entry Plug port is not currently verified

**Claim:**
Do not treat a cantilever personnel bridge terminating at the Entry Plug port as established Rebuild Cage canon.

**Evidence class:** `UNKNOWN` / negative research result

**Confidence:** Medium that current accessible official evidence is insufficient; no claim that such a bridge does not exist.

**Evidence:**
The current official / licensed sources establish the dorsal insertion point, hatch motion, and removable plug, but they do not identify a permanent personnel bridge, its attachment point, or its relationship to the Cage's wall-side circulation.

The official SMALL WORLDS imagery used in prior cycles establishes floor-level and wall-side personnel circulation but does not provide a clear rear/upper view proving an Entry Plug bridge. The absence of proof in these materials is **not proof of absence**.

The unaudited Gemini Foundation describes an access bridge toward the Entry Plug area, but no traceable production source for that specific geometry has yet been identified.

**Sources:**
- https://smallworlds.jp/area/eva_hangar/
- `docs/research/raw-reports/gemini/0001-foundation-visual.md` (research material only; not canon authority)

**Web 3D classification:** any Entry-Plug personnel bridge is currently `Unknown`; if prototyped, implement as a removable module rather than permanent baked geometry.

---

### Finding 5 — Human boarding and plug insertion should not be assumed to be the same spatial operation

**Claim:**
The Cage layout should keep **pilot boarding access** conceptually separate from **plug-to-EVA insertion clearance** until stronger Rebuild evidence proves they occur at the same location.

**Evidence class:** `SECONDARY` + `INFERENCE`

**Confidence:** Medium-Low for Rebuild-specific workflow; High that the two functions are physically distinct concepts.

**Evidence:**
A reputable secondary overview of the original series states that the pilot enters the cockpit before the Entry Plug is inserted into the EVA's upper spine. Fan-maintained technical summaries describe the same sequence, but these are not sufficient to establish a Rebuild-specific Cage boarding route.

The official Kyoto Base attraction provides a human stair route to an already positioned Entry Plug, but it is an attraction-specific visitor experience and must **not** be treated as Cage production geometry.

Therefore the Web 3D scene should not automatically route human circulation to the EVA's dorsal port merely because the plug itself inserts there.

**Sources:**
- https://www.theringer.com/2019/06/21/tv/neon-genesis-evangelion-netflix-recappables
- https://www.eigamura.com/eva/ (attraction-specific context only)
- https://www.eva-info.jp/9534 (attraction-specific context only)

**Web 3D classification:** boarding platform / room `Unknown` in this cycle.

## Visual Observations

From licensed Rebuild Unit-01 model documentation:

- the Entry Plug access point is on the dorsal upper body, not the front;
- the armor around the port must visibly separate into an open state;
- the plug projects out from the body when removed / partially inserted;
- this creates a strong rear silhouette change and a mechanical focal point at human-inaccessible height;
- any service deck near this area must avoid visually or physically intersecting the hatch and plug travel envelope.

No exact canonical catwalk termination point can be read from the current official evidence.

## Spatial Implications

A conservative Cage upper-back spatial model is:

```text
[WALL-SIDE CIRCULATION]     [UNKNOWN / OPTIONAL SERVICE BRIDGE]
          |                            ?
          |                            ?
          v                            v
       cage wall       KEEP-OUT / PLUG TRAVEL VOLUME
                              |
                              v
                     [EVA UPPER BACK / NECK]
                     [ENTRY-PLUG HATCH]
```

Key rule:

> **Do not fill the dorsal upper-back zone with permanent structural clutter until the Entry Plug insertion axis is resolved.**

Keep nearby pipe racks, cable trays, lights, and catwalk modules outside a configurable keep-out volume.

## Human-Scale Implications

- The Entry Plug port is high enough on the EVA that direct maintenance by a person standing on the cage floor is impossible.
- Some elevated service method is operationally plausible, but the exact method may be a bridge, retractable platform, loading-machine service position, or another mechanism.
- Do not infer real-world railing height, bridge width, or working-platform dimensions from generic industrial standards as canon.
- If a human-access bridge is added for prototype navigation, label it **production recommendation / provisional geometry**.

## 3D Modeling Implications

### Requires unique modeling

- Entry Plug body at least to the extent visible during insertion/removal;
- dorsal hatch / armor opening around the Entry Plug port;
- upper-back opening cavity silhouette.

### Must support animation states

- hatch closed;
- hatch open;
- plug absent;
- plug partially inserted / removed;
- plug installed.

### Keep configurable / provisional

- plug loading machine;
- upper service bridge;
- bridge railings / stairs;
- exact mechanical guides and clamps around the port.

### Collision / scene-authoring rule

Create a non-rendered `entry_plug_keepout` volume. Nearby Cage geometry should be authored around this volume so later research can change plug trajectory without rebuilding the entire wall / deck system.

## Lighting / Material Implications

This unit establishes no canonical light intensity or PBR values.

For readable Web 3D state changes:

- the hatch seam should remain legible when closed;
- when open, local contrast should reveal the depth difference between EVA armor and the plug cavity;
- do not add decorative work lights solely to explain the port unless later evidence supports them.

These are production recommendations, not canon claims.

## Scale Evidence

- **Relative / Official-meta:** the Entry Plug opening lies around the neck-to-back region of the Rebuild Unit-01 body.
- **Relative:** the interface is at a height that implies elevated equipment or service access relative to a human-scale floor.
- **Unknown:** exact port height above Cage floor, plug length in scene units, insertion angle, approach distance, loading-machine dimensions, and any personnel-bridge elevation.
- DeAgostini model dimensions are product-scale values and must **not** be converted directly into canonical EVA dimensions.

## Contradictions

### Entry Plug personnel bridge remains unresolved

**Claim A:**
The unaudited Gemini Foundation describes an access bridge extending toward the Entry Plug insertion area.

**Source A:**
`docs/research/raw-reports/gemini/0001-foundation-visual.md`

**Claim B:**
Current traceable official / licensed sources confirm the dorsal insertion port and removable plug but do not establish a permanent personnel bridge or its connection to wall-side circulation.

**Source B:**
DeAgostini licensed Rebuild Unit-01 documentation; EVA-INFO licensed model descriptions; SMALL WORLDS official hangar material.

**Assessment:**
Not a direct contradiction. Claim A remains **unverified geometry** rather than disproven.

**3D consequence:**
Keep any upper-back bridge modular and removable. The insertion keep-out volume has higher evidentiary priority than a speculative bridge.

**Needs deeper research:** Yes

## Unknowns

- Exact Entry Plug insertion axis and angle in Rebuild Cage context.
- Exact plug loading mechanism in the Cage.
- Whether the plug is loaded into the EVA while the EVA remains in the same restraint state seen in the public Cage reconstruction.
- Where the pilot boards the Entry Plug in Rebuild operational workflow.
- Whether personnel approach the installed plug directly after insertion.
- Whether a permanent or retractable bridge reaches the dorsal port.
- Whether an upper service deck connects to the previously observed wall-side circulation.
- Whether the loading mechanism is overhead, wall-mounted, rear-mounted, or otherwise integrated with Cage structure.
- Clearance between Entry Plug operations and restraint-panel motion.

## Questions for Deep Research / Claude Audit

1. Do `:序` / `:破` setting sheets or layout cuts show the Entry Plug loading machine and its insertion axis relative to Cage walls?
2. Is there a production drawing that explicitly shows a personnel bridge or maintenance platform terminating at the upper-back Entry Plug port?
3. Does the pilot board the Entry Plug before it enters the Cage loading position in Rebuild, or is boarding performed adjacent to the EVA?
4. Is the Gemini Foundation's Entry Plug access-bridge claim traceable to `全記録全集`, a background setting sheet, or another identifiable official source?
5. What clearance must be reserved between plug insertion/removal and Cage restraint-panel movement?

## Sources

### Primary / official-meta / licensed

- DeAgostini Japan, `週刊「エヴァンゲリオン初号機をつくる」` press release: https://deagostini.jp/f/resources_news/press/ev1.pdf
- EVA-INFO, MAFEX Unit-01: https://www.eva-info.jp/4360
- EVA-INFO, RAH NEO Unit-01: https://www.eva-info.jp/5980
- EVA-INFO, Graniph Rebuild collaboration / A10NERVE placement: https://www.eva-info.jp/11234
- SMALL WORLDS Evangelion Hangar: https://smallworlds.jp/area/eva_hangar/

### Context / secondary

- The Ringer, original-series Entry Plug overview: https://www.theringer.com/2019/06/21/tv/neon-genesis-evangelion-netflix-recappables
- Toei Kyoto Studio Park Evangelion Base (visitor attraction; not Cage geometry): https://www.eigamura.com/eva/
- EVA-INFO Kyoto Base announcement (attraction-specific): https://www.eva-info.jp/9534
