# TV Episode 11 — R-07-area corridor branch-node geometry / route-choice topology

## Scope

A single infrastructure unit: the human-scale corridor branch nodes encountered by Shinji, Rei and Asuka while moving from the Route-07 access path toward NERV Headquarters during the blackout in TV Episode 11. This cycle asks what kind of branching is explicitly supported, how branch choice changes vertical/topological destination, and what junction geometry may safely be modeled.

This does **not** attempt to reconstruct every Episode 11 corridor, ventilation duct, EVA launch route, or Cage interior.

## Worker

WORKER B — NERV Infrastructure

## Continuity

TV series (1995–1996), Episode 11 only. EoE and Rebuild are excluded.

## Summary

Episode 11 clearly depicts a route-choice node with **two branches**, described in multiple independent dialogue/scene transcriptions as a right-versus-left decision. Asuka selects the right branch against Rei's recommendation. The chosen passage then rises upward and reaches a door that opens directly to the exterior/Angel-facing side, demonstrating that branch selection can change both **vertical grade** and **facility boundary destination**.

A later scene is again identified as a branch point and Rei directs the party onward. The checked evidence does not prove whether this is the same physical junction revisited or a second branch node. Nor does it prove that the original left branch is a direct uninterrupted route to Headquarters.

Most importantly for Web 3D, current public evidence does **not** establish whether the junction is T-shaped, Y-shaped, oblique, offset, curved, or vertically staggered. The corridor network should therefore be represented first as an evidence-tagged navigation graph, with exact mesh geometry left parameterized until a storyboard/layout/background sheet is located.

## Findings

### Finding 1 — A two-branch human circulation node is explicitly present

**Claim:** After using a shortcut duct/pass-through, Shinji, Rei and Asuka arrive at a point with two branches and must choose right or left.

**Evidence class:** `SECONDARY` scene/dialogue transcription of the TV episode

**Confidence:** Medium-High

**Evidence:** Multiple independent transcriptions reproduce the same right-versus-left exchange. Animanga explicitly labels the scene as the three standing `in front of two branches`; Japanese dialogue logs label it a `分岐点` / `分岐路`.

**Sources:** S3, S4, S5, S6, S7

**3D consequence:** The NERV personnel-circulation graph must support true branch nodes rather than a purely linear corridor chain.

### Finding 2 — The right branch gains elevation

**Claim:** The branch selected by Asuka leads into an upward-sloping passage.

**Evidence class:** `SECONDARY`

**Confidence:** Medium-High

**Evidence:** Japanese and English transcriptions agree that after selecting the right-hand route, Shinji notes that the passage is going uphill / `上り坂`.

**Sources:** S3, S4, S5, S6

**Topology consequence:** Branch edges may carry vertical grade. A junction cannot be modeled under the assumption that all outgoing corridors remain on one level.

### Finding 3 — The selected right branch terminates at an exterior-facing door

**Claim:** Continuing along the uphill right branch reaches a door which Asuka opens, revealing the Angel outside / an exterior-facing boundary.

**Evidence class:** `SECONDARY` carrying scene-action evidence

**Confidence:** Medium-High

**Evidence:** Independent Japanese scene logs describe the door as directly connected to the exterior; the English transcript sequence likewise follows the uphill passage with a door opening and direct Angel encounter.

**Sources:** S3, S4, S5, S7

**3D consequence:** A human corridor branch can terminate at a restricted/exterior boundary rather than only another internal corridor. For this episode-specific node, the right branch should support an `ExteriorSecurityDoor` endpoint.

### Finding 4 — The network contains repeated branch-choice events

**Claim:** Later in the route, the pilots encounter a branch decision again and Rei directs the party onward.

**Evidence class:** `SECONDARY`

**Confidence:** Medium

**Evidence:** Japanese dialogue transcriptions include Shinji's `まただ` followed by Rei's `こっちよ`; a 1995 fan timing log separately labels `再び分岐路にて` at a later timestamp.

**Sources:** S4, S5, S6

**Assessment:** This supports a network with repeated route-choice nodes, but does not establish whether the later branch is a second junction or a return to the first one.

**3D consequence:** The episode should not be reduced to one decorative fork. The facility-navigation layer should allow multiple junction nodes and backtracking/re-routing.

### Finding 5 — The original left branch is probably the better route, but its exact destination is not verified

**Claim:** Rei recommends the left branch while Asuka chooses the right branch and reaches the wrong/exterior-facing route. This makes the left branch a plausible correct-direction edge, but the checked evidence does not show an uninterrupted left-branch-to-HQ connection.

**Evidence class:** `INFERENCE`

**Confidence:** Medium

**Evidence:** The right branch demonstrably leads uphill to the exterior-facing door; Rei's alternative is left. Later Rei again provides route guidance. No checked source gives a complete floor-plan edge from the original left branch to Headquarters.

**Sources:** S3, S4, S5, S7

**Topology classification:** `PLAUSIBLE_CONNECTION`

**3D consequence:** Do not hard-code `left = Headquarters` as Canon. In a prototype, it may be used only as a clearly tagged production inference if needed for navigation.

### Finding 6 — Exact junction plan geometry remains unknown

**Claim:** Current public evidence does not determine whether the two-branch node is T-shaped, Y-shaped, angled, offset, curved, or otherwise non-orthogonal.

**Evidence class:** `UNKNOWN`

**Confidence:** High that the checked evidence set does not resolve this

**Evidence:** Dialogue/scene logs establish left/right branching but not wall angles, centerlines, branch widths, corner radii, ceiling profile, or a dimensioned plan. Image searches did not locate a clean, reliable public frame of this exact junction.

**Sources:** S1, S2, S3–S7

**3D consequence:** Keep `junctionPlanType`, `branchAngle`, `clearWidth`, `cornerRadius`, `gradeStart`, and `ceilingProfile` configurable.

### Finding 7 — Branch nodes are operational navigation infrastructure, not only visual set dressing

**Claim:** The junction materially affects human circulation under emergency conditions: the party stops, compares directions, chooses an edge, discovers an incorrect vertical/destination outcome, and must re-route.

**Evidence class:** `SECONDARY` + `INFERENCE`

**Confidence:** Medium-High

**Evidence:** The branch-choice dialogue and subsequent wrong-route outcome form a continuous navigation sequence.

**Sources:** S3, S4, S5, S7

**3D consequence:** Junctions should exist in the navigation graph and level logic. A visually convincing corridor that is topologically linear would miss a canon-supported feature of NERV circulation.

## Spatial Structure

Minimum evidence-supported graph:

```text
Route-07 / internal blackout route
        ↓
shortcut duct / narrow passage
        ↓
TWO-BRANCH DECISION NODE
      ↙         ↘
 left           right
  ?              ↓
  ?         uphill passage
  ?              ↓
  ?        exterior-facing door
  ?              ↓
  ?            Angel
```

Later sequence:

```text
internal route
    ↓
branch point again
    ↓  [Rei directs "this way"]
continued restricted route
    ↓
blocked door / duct workaround
    ↓
EVA-area arrival boundary
```

The identity relationship between the first and later branch points is `UNKNOWN`.

## Connectivity

| Edge | Classification | Notes |
|---|---|---|
| Route-07 internal path → shortcut duct/pass-through | `SUPPORTED_CONNECTION` | Scene sequence supports the shortcut as part of the approach network. |
| shortcut duct/pass-through → two-branch decision node | `SUPPORTED_CONNECTION` | Directly adjacent in the dialogue/scene sequence; exact intervening distance unknown. |
| decision node → right branch | `SUPPORTED_CONNECTION` | Right is explicitly chosen. |
| right branch → uphill passage | `SUPPORTED_CONNECTION` | Dialogue explicitly notes upward grade after the choice. |
| uphill passage → exterior-facing door | `SUPPORTED_CONNECTION` | Door encounter directly follows the uphill route. |
| original left branch → correct NERV Headquarters route | `PLAUSIBLE_CONNECTION` | Rei recommends left and right proves wrong; uninterrupted destination not shown. |
| later branch point → continued route toward EVA-area approach | `SUPPORTED_CONNECTION` | Rei redirects party; later duct workaround reaches EVA-area. Exact intermediate geometry unresolved. |
| first branch node = later branch node | `UNKNOWN_CONNECTION` | Could be a revisit or another junction. |

## Human Circulation

- The node accommodates at least three adolescents stopping together and choosing a route; numeric width is not known.
- Branch selection is meaningful enough that the group can take a wrong path and then re-route.
- One outgoing path incorporates a vertical grade rather than remaining level.
- The episode's blackout removes normal automated assistance; however, the checked sources do not establish what fixed signs, floor markings, or route labels are visible at the junction itself.
- The later `again` branch scene implies repeated decision pressure within the circulation network.

For Web 3D, the player should experience junctions as actual navigational choices, not as shallow decorative alcoves.

## Maintenance / Logistics

This unit does not establish:
- whether either branch is staff-only or maintenance-only;
- whether the shortcut duct is a normal personnel route;
- fire doors or isolation shutters at the node;
- utility cabinets, cable trays, floor drains or maintenance hatches at the junction.

These should not be added as Canon details without source-specific evidence.

## Visual Observations

The current evidence set safely supports only topological/scene observations:
- two outgoing options expressed as right and left;
- the chosen right branch rises;
- a later branch choice occurs;
- the right branch reaches an exterior-facing/security-door endpoint.

Current public visual search does **not** safely establish:
- T vs Y plan;
- symmetric branch widths;
- a central column/island;
- specific signage at the node;
- octagonal/chamfered section at this exact node;
- exact materials or lighting at the branch.

## Scale Evidence

- **Official numeric dimensions:** none located.
- **Relative:** at least three human characters can occupy the decision area simultaneously.
- **Branch angle:** `Unknown`.
- **Corridor width/height:** `Unknown`.
- **Vertical grade:** qualitative upward slope on the right branch; no numeric angle.
- **Production recommendation:** size from avatar circulation/turning needs while keeping dimensions non-canon and configurable.

## 3D Modeling Implications

Use a graph-first representation separate from the visual mesh:

```text
CorridorBranchNode
├─ nodeId
├─ incomingEdge
├─ outgoingEdges[2]
├─ junctionPlanType: Unknown
├─ branchAngle: Unknown
├─ clearWidth: Parameter
├─ ceilingProfile: Parameter
├─ wayfinding: Unknown
└─ evidenceTags

RightBranch_Ep11
├─ horizontalDirection: right-relative
├─ verticalGrade: up
├─ endpointType: ExteriorSecurityDoor
└─ evidence: Supported

LeftBranch_Ep11
├─ horizontalDirection: left-relative
├─ verticalGrade: Unknown
├─ endpointType: Unknown / probable-HQ-direction
└─ evidence: Plausible
```

Recommended asset strategy:
- generic `CorridorBranchNode` procedural family;
- branch-angle and wall-profile parameters;
- optional ramp/slope edge module;
- optional security/exterior-door termination module;
- evidence metadata stored independently from mesh choices.

This prevents a production geometry guess from becoming mistaken for Canon topology.

## Web 3D Classification

- Branch node: **Must be geometry**
- Generic branch family: **Can be procedural**
- Repeated generic junctions: **Can be instanced** with parameter variation
- Episode-specific right/uphill branch: **Requires scene-specific topology configuration**
- Route labels/signage: **Unknown**
- Navigation choice: **Requires functional nav graph**, not necessarily a bespoke interaction UI
- Distant unseen branch interiors: **Can be simplified at distance**

## Real-World Engineering Analogies

**Production / engineering inference only:** Real underground industrial facilities commonly separate geometry and wayfinding into network nodes/edges, often using signs, door identifiers and vertical-grade transitions to distinguish routes.

This analogy may inform Web 3D usability, but it is **not evidence** that the Episode 11 junction has a particular sign system, branch angle, ramp standard, or code-compliant width.

## Contradictions

No direct contradiction with previous Worker B findings.

Relationship to Finding 0001:
- Finding 0001 established that a universal corridor cross-section is not yet justified.
- This cycle likewise finds that branch-node plan geometry is unresolved.
- Therefore both corridor **section** and corridor **junction plan** should remain parameterized rather than canonized from Foundation generalizations.

## Unknowns

- exact junction plan type: T / Y / offset / oblique / curved;
- branch angles and corner radii;
- widths and ceiling heights at the node;
- exact lighting and wall-panel arrangement;
- fixed signage / zone identifiers at the junction;
- whether the original left branch directly reaches Headquarters;
- whether the later `again` branch is the same node revisited;
- exact relation between this branch node and R-07 in distance/elevation;
- whether branch-specific doors or isolation hardware exist before the exterior-facing endpoint.

## Questions for Claude / Deep Research

1. Is there a TV Episode 11 storyboard, layout, background sheet, filmbook frame, or setting-material page that shows the `right/left` branch point in plan or perspective strongly enough to classify it as T, Y, oblique, or offset?
2. Can a primary source identify whether the later `まただ / 再び分岐路` scene is a return to the same junction or a second junction?
3. Is there any primary route diagram establishing the original left branch as the correct Headquarters/GeoFront edge?
4. Are route labels, wall identifiers, or floor markings visible at this exact junction in production material?

## Cross-Worker Boundary Notes

- This finding covers only NERV-side human circulation and junction topology.
- The final duct's arrival at the EVA area is recorded only as an external boundary edge.
- Cage room geometry, Cage hatches, Cage catwalks and Cage-side circulation remain Worker A scope.

## Sources

See `../sources/0007-tv-ep11-corridor-branch-node-geometry-sources.md`.
