# Rebuild EVA Cage Restraint Structures — Cage Panels vs Mobile Launcher Restraints

## Scope

One narrow research unit: the **restraint structures that hold an EVA during cage storage/maintenance and during transport/injection** in Rebuild-era material.

This cycle does not attempt to settle catwalk layout, Entry Plug access, exact cage dimensions, rear suspension, or TV/EoE restraint geometry.

## Continuity

Primary target: **Rebuild**, with strongest evidence tied to `ヱヴァンゲリヲン新劇場版：序` and later officially licensed Rebuild representations.

TV / EoE: **Unknown in this cycle**. No cross-continuity merging.

## Summary

Current official/official-meta evidence supports at least **two restraint states** that should remain visually and mechanically distinct in a Web 3D reconstruction:

1. **Cage-side restraint panels** that are removed before rail transfer toward the injection lane.
2. A **dedicated mobile transport/injection platform that itself restrains the EVA during high-speed transport**, with safety devices around both shoulders and both arms that release after surface injection.

The evidence does **not yet prove** that these are two wholly independent hardware systems. A conservative 3D interpretation is therefore to model them as two operational assemblies/states with a modular interface, rather than permanently fusing the cage panels into the mobile launcher or assuming that every visible clamp is unrelated.

## Findings

### Finding 1 — Cage restraint panels are removed before transfer to the injection lane

**Claim:**
The Rebuild-inspired cage should include large removable **restraint panels** as a distinct pre-transfer state.

**Evidence class:** `OFFICIAL_META`

**Confidence:** High for the operational sequence; Medium for exact panel geometry.

**Evidence:**
Official EVA information describing the SMALL WORLDS Evangelion Hangar states that, when an Angel attack begins, work starts in the hangar, **restraint panels are removed**, and the EVAs are then moved by **linear rail** to the injection lane before launch. SMALL WORLDS' own current area description repeats the same sequence.

This is strong evidence that a cage-stage restraint element is removed before the rail-transfer stage. It does not, by itself, define the number, hinge/slide axis, actuator type, or exact contact points of the panels.

**Sources:**
- https://www.eva-info.jp/9321
- https://smallworlds.jp/area/eva_hangar/

**Web 3D classification:** `Requires unique modeling`

### Finding 2 — The transport/injection platform is itself a restraint device

**Claim:**
The Rebuild launch chain includes an EVA-sized **mobile transport platform that doubles as a restraint fixture**.

**Evidence class:** `OFFICIAL_META`

**Confidence:** High.

**Evidence:**
BANDAI SPIRITS identifies the `:序` transport platform as the device used to reproduce the scene in which the EVA is **restrained while being transported rapidly to the surface**. A later officially licensed product names the assembly `エヴァンゲリオン専用拘束兼移動式射出台` — a dedicated restraint-and-mobile-injection platform.

This supports treating the launch platform as structural machinery around the EVA, not as a visually empty elevator slab beneath its feet.

**Sources:**
- https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102590152000
- https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102629319000
- https://www.eva-info.jp/7315
- https://www.eva-info.jp/15026

**Web 3D classification:** `Requires unique modeling`

### Finding 3 — Shoulder and arm restraints are explicit release points on the mobile launcher

**Claim:**
For a Rebuild-inspired launcher model, the highest-confidence visible restraint contact zones are **both shoulders and both arms**.

**Evidence class:** `OFFICIAL_META`

**Confidence:** High for contact-zone naming; Medium for exact film geometry.

**Evidence:**
BANDAI SPIRITS' dedicated restraint/mobile-launcher product explicitly states that it includes a sliding gimmick reproducing release of the **safety devices on both shoulders and both arms after surface injection**.

This provides a stronger modeling anchor than generic guesses such as waist clamps, ankle locks, chest straps, or full-body cages. Those additional contact points remain unverified in this cycle.

**Sources:**
- https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102629319000

**Web 3D classification:** `Requires unique modeling`

### Finding 4 — The restraint system is dynamic machinery, not permanent static architecture

**Claim:**
At least the launcher-side restraint elements should be modeled as **movable safety devices** with a clear release state.

**Evidence class:** `OFFICIAL_META`

**Confidence:** High.

**Evidence:**
The licensed launcher explicitly reproduces a **slide mechanism** for releasing the shoulder/arm safety devices after injection. Combined with the official hangar description of restraint-panel removal before transfer, the restraint system is operationally dynamic at both cage and launch stages.

**3D consequence:**
A prototype should preserve animation-ready pivots/translation axes even if the first implementation is static. Baking the restraints into the wall or EVA mesh would make later launch-sequence animation needlessly destructive.

**Sources:**
- https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102629319000
- https://www.eva-info.jp/9321

**Web 3D classification:** `Must be geometry` + `Requires unique modeling`

### Finding 5 — The evidence does not establish that cage panels and launcher restraints are entirely separate hardware families

**Claim:**
It is premature to assert that the removable cage restraint panels and the shoulder/arm restraints on the mobile launcher are completely unrelated assemblies.

**Evidence class:** `UNKNOWN` + `INFERENCE`

**Confidence:** High that the distinction remains unresolved.

**Evidence:**
Official descriptions establish two operational moments: restraint-panel removal in the hangar, and restraint during high-speed transport on the mobile injection platform. They do not provide a verified mechanical interface diagram showing whether parts transfer between assemblies, remain attached to the EVA, retract into the cage, or are replaced by a second restraint set.

**3D consequence:**
Keep the two assemblies modular and separable in scene hierarchy until frame-level or production-setting evidence resolves the handoff.

**Sources:**
- https://www.eva-info.jp/9321
- https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102590152000
- https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102629319000

## Visual Observations

Official product imagery for the mobile injection platform is useful for **shape-family reference**, but must be treated as licensed-product interpretation rather than direct production geometry.

Safe observations:

- The platform visually envelopes the EVA laterally rather than behaving as a simple floor lift.
- Large restraint masses rise to upper-body height.
- The explicit release points around shoulders/arms imply that the restraint silhouette should frame the EVA's upper body.
- Large planar/mechanical masses are more important to the launcher silhouette than micro-detail.

Not established in this cycle:

- exact clamp thickness;
- exact number of hydraulic cylinders;
- exact pivot centers;
- exact rail gauge;
- exact relationship between launcher restraint blocks and cage-wall panels.

## Spatial Implications

The cage-to-launch blockout should reserve three mechanically distinct volumes:

1. **Cage restraint envelope** — space immediately around the stored EVA where large panels can retract/clear the body.
2. **Transfer-clearance envelope** — unobstructed volume allowing the EVA plus mobile platform/restraint assembly to move toward the injection lane.
3. **Launcher restraint envelope** — upper-body clearance for shoulder/arm safety devices that remain engaged during rapid transport.

Do not place permanent walls, catwalks, or pipes through these swept volumes until the restraint motion is better established.

## Human-Scale Implications

This cycle does not establish exact technician access platforms around the restraints. However, the restraint assemblies are maintenance-critical moving machinery, so a Web 3D scene should leave plausible human access around actuator housings, inspection points, and emergency-release areas.

Any handrail width, service-clearance dimension, or ladder position used now should be labeled **production reference / estimate**, not canon.

## 3D Modeling Implications

### Must be geometry

- Cage-side major restraint panels.
- Mobile launcher primary frame.
- Shoulder/arm safety-device masses.
- Rail/guide attachment points that affect silhouette.

### Requires unique modeling

- Contact geometry around EVA shoulders and arms.
- Cage-to-launch restraint handoff region.
- Any actuator/pivot housings visible close to the player.

### Can be instanced

- Repeated bolts, hinge covers, guide rollers, and secondary brackets after a unique master assembly is established.

### Can be procedural

- Repeated structural ribs and panel seams on non-contact launcher surfaces.
- Cable routing guides whose exact production layout is not yet fixed.

### Can be decal

- Safety labels, unit numbers, warning chevrons, lock/unlock indicators.

### Can be simplified at distance

- Internal actuator mechanics hidden inside large restraint housings.
- Small fasteners and hydraulic detail beyond interaction range.

## Animation / Interaction Implications

Even before final evidence is available, structure the scene hierarchy so the following states can be represented independently:

- `CAGE_LOCKED`
- `CAGE_PANELS_RETRACTED`
- `LAUNCHER_RESTRAINT_LOCKED`
- `SURFACE_RELEASE`

These are **production-state labels**, not canon terminology. They are a safe implementation abstraction derived from the verified operational sequence.

Recommended implementation behavior:

- cage panels should have separate transforms from the cage wall;
- launcher restraints should have separate transforms from the launcher frame;
- the EVA should not be parented permanently to either restraint assembly;
- animation should preserve a handoff point between cage and launcher states.

## Lighting / Material Implications

No canonical material specification was established in this cycle.

For readability, restraint hardware should be separable from both EVA armor and background architecture by value/roughness contrast. This is a **production recommendation**, not an observed canon material rule.

## Scale Evidence

- **Official:** no exact dimensions for cage restraint panels or launcher clamps established in this cycle.
- **Relative:** launcher restraints must reach both shoulder and arm regions of a full-size EVA.
- **Relative:** cage panels must retract sufficiently to permit linear-rail transfer.
- **Unknown:** exact restraint-panel travel distance, launcher width, actuator stroke, and contact pressure.

Do not derive millimeter-level dimensions from model-kit proportions.

## Contradictions

No direct contradiction is resolved here, but there is a **mechanical ambiguity**:

**Claim A:** the hangar sequence removes `拘束パネル` before transfer.

**Source A:** EVA-INFO / SMALL WORLDS hangar description.

**Claim B:** the EVA remains restrained while the dedicated transport platform carries it rapidly to the surface, and shoulder/arm safety devices release after injection.

**Source B:** BANDAI SPIRITS licensed Rebuild launcher descriptions.

**Assessment:**
These claims are compatible if the cage restraint and launcher restraint are different assemblies or different states of a connected system. The sources do not establish which.

**3D consequence:**
Do not collapse all restraints into one permanent object or assert two wholly independent systems. Use modular assemblies and preserve both interpretations.

**Needs deeper research:** Yes.

## Unknowns

- Exact shape, count, and motion axis of cage restraint panels.
- Whether cage panels contact shoulders, torso, hips, arms, or a combination.
- Whether any cage restraint element transfers onto the mobile launcher.
- Whether the launcher restraint devices contact EVA armor directly or through intermediary blocks.
- Whether lower-body restraints exist on the launcher.
- Whether `:序`, `:破`, and later Rebuild sequences use the same launcher hardware without redesign.
- Exact actuator type: hydraulic, electric, mechanical screw, or otherwise.
- Emergency-release mechanism and technician access.

## Questions for Deep Research / Claude Audit

1. Do production setting sheets for `:序` explicitly distinguish `拘束パネル` from `拘束兼移動式射出台` as separate hardware assemblies?
2. What are the exact contact points and motion axes of the cage restraint panels in film frames or official setting art?
3. Are the shoulder/arm safety devices on the mobile launcher identical across Units 00, 01, and 02?
4. Does any official source show lower-body restraint points on the mobile launcher?
5. Is the SMALL WORLDS restraint-removal sequence mechanically faithful to Rebuild production layouts or simplified for the exhibition mechanism?

## Sources

### Official / official Evangelion information

- EVA-INFO — SMALL WORLDS TOKYO opening / Evangelion Hangar description (2020-06-11):
  https://www.eva-info.jp/9321
- SMALL WORLDS — Evangelion Hangar area:
  https://smallworlds.jp/area/eva_hangar/
- EVA-INFO — RG EVA-01 / DX Transport Platform Set (2019-11-30):
  https://www.eva-info.jp/7315
- EVA-INFO — RG dedicated restraint/mobile injection platform announcement (2021-09-08):
  https://www.eva-info.jp/15026

### Officially licensed manufacturer material

- BANDAI SPIRITS — RG EVA-01 DX Transport Platform Set:
  https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102590152000
- BANDAI SPIRITS — RG EVA dedicated restraint/mobile injection platform set:
  https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102629319000

## Foundation Notes

The newly available ChatGPT Foundation report describes the cage as containing large restraint panels and the launch system as a distinct transfer/injection chain. This is consistent with the official-meta evidence above, but the Foundation report remains **unaudited research material** and is not used here as independent confirmation.

The Gemini Foundation contains more specific mechanical claims (for example hydraulic restraint arms). Those specifics remain **Evidence Weak** until independently verified.
