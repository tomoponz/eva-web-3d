# Rebuild EVA Cage placement / posture — foot support, rear restraint, and suspension uncertainty

## Scope

This unit asks a narrow spatial / mechanical question: when a Rebuild-era EVA is stored in the Cage, what can be said about its resting posture and support path from currently traceable evidence?

The unit separates four concepts that must not be collapsed into one:

1. visible foot contact / lower support;
2. visible rear restraint or cradle structure;
3. restraint contribution to posture;
4. true suspension / load bearing from the rear or above.

It does **not** attempt to determine full launch-shaft mechanics outside the direct Cage boundary.

## Continuity

- Primary target: Rebuild (`:序` / `:破`-era visual language)
- Primary visual reconstruction evidence: SMALL WORLDS Evangelion Hangar
- Supporting launch-state evidence: BANDAI SPIRITS Rebuild restraint / transport platform
- Foundation reports remain candidate research pending Claude audit.

## Summary

The strongest current official visual evidence does **not** justify modeling the stored EVA as visibly hanging free of the floor.

In the SMALL WORLDS official full-body Hangar image, Units 02, 00 and 01 are all presented upright with both feet visibly contacting small rectangular support surfaces at the base of each bay. Each EVA also has a large vertical rear structure rising behind the body, extending to or above shoulder / head height.

The safe conclusion is therefore a **combined support envelope**:

- lower-body / foot contact is visibly present in the official reconstruction;
- a substantial rear restraint / cradle is also visibly present;
- the exact load share between feet, rear restraint and any hidden mechanism is `UNKNOWN`;
- no traceable official source found in this cycle establishes the stronger Gemini-style claim that the EVA is wholly suspended from a rear mount and is not standing on any lower support.

The stored pose is upright but not a rigid parade stance: the official reconstruction shows the arms hanging down, the head / upper torso slightly forward, and the body visually contained by the rear structure. This is useful as a production pose reference, but exact joint angles must remain adjustable.

## Findings

### Finding 1 — Official reconstruction visibly gives each EVA lower foot contact

**Claim:** In the official SMALL WORLDS Hangar reconstruction, the EVAs are upright with both feet visibly contacting individual rectangular support pads / base surfaces.

**Evidence class:** `VISUAL_OBSERVATION`

**Confidence:** High for the official exhibit; Medium-Low for exact Rebuild film geometry.

**Evidence:** Official image `03.jpg` shows Units 02, 00 and 01 standing in adjacent bays. Both feet of each unit meet a small rectangular base directly beneath the body. The bases sit at the Cage-front floor/apron level rather than leaving the EVA visibly suspended above an open void.

**Sources:**

- SMALL WORLDS Hangar page: https://smallworlds.jp/area/eva_hangar/
- SMALL WORLDS official full-body image: https://smallworlds.jp/wp/wp-content/themes/smallworlds/area/eva_hangar/03.jpg
- EVA-INFO SMALL WORLDS introduction: https://www.eva-info.jp/9321

**Assessment:** The reconstruction supports visible lower support. It does not prove that the feet carry the entire EVA weight.

**Web 3D classification:** `Must be geometry` for the current evidence-backed blockout: provide a foot-support / base interface beneath the stored EVA rather than leaving the feet unsupported in space.

### Finding 2 — A large rear vertical restraint / cradle is simultaneously present

**Claim:** The official reconstruction also shows a substantial rear structure immediately behind each EVA, extending vertically past the torso and shoulders.

**Evidence class:** `VISUAL_OBSERVATION`

**Confidence:** High for presence in the exhibit; Low-Medium for exact mechanical role.

**Evidence:** Official image `03.jpg` shows tall dark / pale structural masses behind Units 01, 00 and 02. Unit 01 is visibly framed by a vertical rear assembly while the feet remain on the lower base.

**Sources:**

- SMALL WORLDS official full-body image `03.jpg`.
- EVA-INFO official promotional Hangar image: https://www.eva-info.jp/cab/wp-content/uploads/2020/06/2006_kakunouko.jpg

**Assessment:** This structure should be treated as a rear restraint / cradle envelope in 3D, but its load-bearing share is unknown. Presence does not establish full suspension.

**Web 3D classification:** `Requires unique modeling` for the rear restraint silhouette; exact actuators and contact points remain modular.

### Finding 3 — The visible stored pose is restrained-neutral rather than rigidly erect

**Claim:** The official reconstruction presents the EVAs in an upright but slightly passive / forward-contained posture rather than a fully extended military stance.

**Evidence class:** `VISUAL_OBSERVATION`

**Confidence:** Medium for pose language; Low for exact joint angles in film continuity.

**Evidence:** In official image `03.jpg`, the arms hang downward, the head is not held high, and the upper body reads slightly forward within the rear restraint volume. The same general forward-contained silhouette is visible in the EVA-INFO promotional image.

**Sources:**

- SMALL WORLDS official image `03.jpg`.
- EVA-INFO promotional Hangar image `2006_kakunouko.jpg`.

**Assessment:** Use a neutral restrained pose rig with editable head, spine, shoulder, elbow, hip and knee angles. Do not bake exact angles from the exhibit as canon dimensions.

**Web 3D classification:** `Must inform rig / pose`; no fixed numerical angles.

### Finding 4 — Cage restraint removal and rail transfer imply support is stateful

**Claim:** Official SMALL WORLDS descriptions state that restraint panels are removed before the EVAs move by linear rail to the launch lane, so support / restraint cannot be treated as one permanently fixed static condition.

**Evidence class:** `OFFICIAL_META`

**Confidence:** High for the exhibit's operational sequence; Medium for exact film mechanism.

**Evidence:** The official Hangar page states the sequence: restraint-panel removal -> movement by linear rail to the launch lane -> launch.

**Sources:**

- SMALL WORLDS Hangar page: https://smallworlds.jp/area/eva_hangar/
- EVA-INFO 2020 introduction: https://www.eva-info.jp/9321

**Assessment:** The 3D scene should separate `stored/restrained` and `transfer-ready` states. Which physical elements continue supporting the EVA after cage-panel release remains unknown.

**Web 3D classification:** `Must support animation state changes`; `Can be procedural` for restraint visibility / retraction state.

### Finding 5 — The Rebuild mobile launcher is explicitly both transport platform and restraint device

**Claim:** BANDAI SPIRITS officially identifies the Rebuild launch hardware as a dedicated transport platform / restraint device, with shoulder and arm safety devices released after surface launch.

**Evidence class:** `OFFICIAL_META`

**Confidence:** High for launch-platform function; Medium for using its detailed geometry as exact production reference.

**Evidence:** The product description calls it an EVA-dedicated `輸送台兼拘束具` and states that it reproduces the surface-launch sequence and the release of safety devices at both shoulders and arms.

**Sources:**

- BANDAI SPIRITS, `ＲＧ エヴァンゲリオン専用拘束兼移動式射出台セット`: https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102629319000
- BANDAI SPIRITS, `RG 初号機DX 輸送台セット`: https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102590152000

**Assessment:** Rebuild clearly uses a support concept combining a platform with upper-body restraints during transport. This supports keeping lower platform support and rear / upper restraints as separate but cooperating systems in the Web 3D rig. It does **not** prove that the Cage uses the identical hardware or load path.

### Finding 6 — “Entire EVA suspended from the rear mount” remains unverified

**Claim:** No traceable official source found in this cycle establishes that a stored Rebuild EVA is entirely suspended from a rear mount with no meaningful lower support.

**Evidence class:** `UNKNOWN`

**Confidence:** High that the evidence gap exists; this does not prove rear suspension is impossible.

**Evidence:** Current official reconstruction imagery visibly includes foot contact and a rear structure simultaneously. Official operational text discusses restraint-panel removal and rail transfer but does not define the static load path. The BANDAI launch-platform material describes restraint and transport, not rear-only suspension.

**Candidate conflicting material:** The Gemini visual Foundation describes the EVA as not self-standing and being suspended from a rear mount. That claim has not yet been traced to an identifiable official setting source.

**3D consequence:** Do not make rear-only suspension a hard structural assumption. Keep load-bearing semantics abstract in the implementation until production evidence resolves them.

## Visual Observations

### SMALL WORLDS official image `03.jpg`

- Three adjacent EVAs are upright.
- Both feet of each EVA visibly meet a small base / pad.
- The lower base is near the shared apron rather than separated by a large visible gap.
- Tall restraint / cradle structures rise behind each body.
- Arms hang naturally downward.
- Head / torso posture reads slightly forward and contained.
- No visible overhead cable or crane appears to be carrying the EVA in this frame.

The final point is an **absence in one view**, not proof that overhead suspension never exists.

### EVA-INFO promotional image `2006_kakunouko.jpg`

- Unit 01 is shown closely against a dark rear / side structural mass.
- The head and upper torso project forward from that structural volume.
- The crop does not show the lower support and therefore cannot determine load path by itself.

## Spatial Implications

A production-safe stored-state blockout is:

`foot-support/base -> EVA upright neutral pose -> rear restraint/cradle envelope`

not:

`EVA floating freely -> assumed hidden rear suspension`

The scene graph should allow the following conceptual states without prescribing the exact real mechanism:

1. `CAGE_RESTRAINED` — feet on lower support, rear restraint engaged;
2. `CAGE_RELEASE` — restraint panels retract / release while lower support remains available;
3. `TRANSFER_READY` — EVA aligned with the rail / transport interface;
4. `MOBILE_RESTRAINT` — dedicated transport / launch restraints active.

The handoff between states remains an animation / research gap.

## Human-Scale Implications

- Foot-support pads provide an additional scale reference at ground level near NERV personnel.
- Rear cradle height emphasizes the EVA as equipment that requires building-scale restraint hardware.
- A slightly passive restrained pose makes the EVA read as stored biological machinery rather than a freestanding heroic statue.

## 3D Modeling Implications

### Build now

- `Must be geometry`: lower foot-support / base surface under each stored EVA.
- `Must be geometry`: rear restraint / cradle silhouette behind torso and shoulders.
- `Must inform rig`: neutral upright posture with relaxed hanging arms and editable forward pitch.
- `Can be instanced`: generic foot-pad edge / hazard-strip modules if repeated across bays.

### Keep parametric / unresolved

- percentage of EVA weight carried by feet;
- rear-restraint load-bearing share;
- hidden pelvic / waist support;
- overhead suspension cable / crane connection;
- exact rear contact points;
- exact sole orientation and ankle angle;
- whether the visible lower base is the same mobile platform used after restraint release.

### Animation architecture

Do not fuse the EVA mesh to the rear restraint or base. Keep separate transforms for:

- EVA root;
- left / right foot support;
- rear cradle;
- shoulder / arm restraint elements;
- mobile launcher platform.

This preserves later correction if Audit establishes a different load path.

## Lighting / Material Implications

This unit does not establish exact materials. For production:

- visually separate foot-support edges from the shared apron using geometry and safety markings;
- use rear restraint massing to create strong dark occlusion behind the EVA silhouette;
- avoid lighting that makes the EVA appear to float above the base unless a future source proves suspension.

Exact PBR values remain production recommendations, not evidence.

## Scale Evidence

- `Relative`: feet are visibly supported by pads only moderately larger than the EVA soles in the official reconstruction.
- `Relative`: rear restraint rises from base level to at least shoulder / head region.
- `Unknown`: pad dimensions, rear-frame offsets, support-point heights, body lean angle, foot spacing and load distribution.
- No exact numeric dimensions are fixed by this finding.

## Contradictions

### Rear-only suspension claim vs visible lower support

**Claim A:** EVA is not self-standing and is suspended from a rear mount.

**Source A:** Gemini visual Foundation candidate report; source trace pending.

**Claim B:** Official SMALL WORLDS reconstruction visibly places both feet on lower support pads while also showing a large rear restraint / cradle.

**Source B:** SMALL WORLDS official image `03.jpg`.

**Assessment:** The official reconstruction does not prove the actual load path, so this is not enough to disprove hidden rear load bearing. However, it does make `rear-only suspension with unsupported feet` an unsafe default for 3D production.

**3D consequence:** Model both lower and rear interfaces, keep their mechanical roles unresolved, and avoid hard-coding a rear-only suspension rig.

**Needs deeper research:** Yes.

## Unknowns

- Do the feet carry static load in film continuity or merely rest on a positioning platform?
- Does the rear restraint carry some, most, or none of the EVA weight?
- Is there a pelvis / waist support hidden behind the body?
- Is any overhead crane / cable used for static storage rather than maintenance only?
- Is the SMALL WORLDS foot base the same physical carrier that transitions onto the linear rail?
- Do all EVA models use identical foot / rear support geometry?
- What exact posture is used before pilot boarding versus immediately before launch?

## Questions for Deep Research / Claude Audit

1. Can the Gemini rear-suspension claim be traced to an official layout, setting sheet, storyboard, CG model or identifiable film frame?
2. In `:序`, is the EVA already standing on the mobile transport / launch platform while inside the Cage, or is there a separate handoff from a stationary Cage base?
3. Do production drawings identify lower-foot, ankle, pelvis, back, shoulder or overhead support points?
4. Is any source explicit about static load bearing, as opposed to restraint against movement?
5. Are Units 00, 01 and 02 stored with the same posture and support hardware?

## Sources

### Official / official reconstruction

- SMALL WORLDS Evangelion Hangar: https://smallworlds.jp/area/eva_hangar/
- SMALL WORLDS official Hangar image 03: https://smallworlds.jp/wp/wp-content/themes/smallworlds/area/eva_hangar/03.jpg
- EVA-INFO SMALL WORLDS introduction: https://www.eva-info.jp/9321
- EVA-INFO official Hangar promotional image: https://www.eva-info.jp/cab/wp-content/uploads/2020/06/2006_kakunouko.jpg
- BANDAI SPIRITS restraint / mobile launch platform: https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102629319000
- BANDAI SPIRITS Unit-01 DX transport-platform set: https://www.bandaispirits.co.jp/products/search/detail.php?grp_id=5325&prd_id=4573102590152000

### Candidate repository research

- `docs/research/raw-reports/chatgpt/0001-foundation-canon.md` — states upright Cage storage, candidate pending audit.
- `docs/research/raw-reports/gemini/0001-foundation-visual.md` — contains rear-suspension candidate claim; source trace pending.
