# TV NERV General Personnel Corridor Cross-Section / Geometry

## Scope

Determine whether TV-era NERV general personnel corridors have a single canonical cross-section that can be used as the default modular Web 3D corridor.

This cycle does **not** cover Cage catwalks, Cage access, launch-shaft interiors, Command Center interiors, or Rebuild-era corridors.

## Worker

WORKER B — NERV Infrastructure

## Continuity

TV (1995–1996)

## Summary

The current public evidence does **not** justify a single canonical NERV corridor cross-section.

TV-era NERV corridors clearly share a visual language — long rectilinear perspective, industrial wall/floor segmentation, integrated wall interfaces, deliberate hazard marking near access boundaries, and sparse functional lighting — but the evidence checked here shows enough variation that one global "octagonal / 45-degree-chamfered" section should not be frozen as canon.

For Web 3D, treat corridor profile as a **parametric module family**, not one immutable mesh. Canon-safe variables should include clear width, ceiling height, wall cant/chamfer, panel cadence, light placement, door module, and service-strip placement.

## Findings

### Finding 1 — Production-era corridor designs exist as explicit setting material

Claim:
TV-era NERV corridors were not merely improvised background paintings; corridor/interior designs exist in production setting-material collections.

Evidence class:
OFFICIAL_META

Confidence:
High

Evidence:
- EVANGELION STORE currently describes the `EVANGELION 30th edition` as a collection of production setting materials used in animation production, with newly found originals and color-design material added to earlier editions.
- The official English publisher/distributor page for khara's `TV Animation Production Art Collection` states that the book archives design sketches for the 1995 TV series and 1997 film, including interior/exterior locations and original design notes.
- A detailed independent review of that collection specifically states that NERV HQ interiors and corridors are among the included environment sketches.

Sources:
- https://www.evastore.jp/shop/e/e260609-feature_dD/
- https://www.simonandschuster.net/books/Neon-Genesis-Evangelion-TV-Animation-Production-Art-Collection/khara/9781772940428
- https://www.parkablogs.com/index.php/content/book-review-neon-genesis-evangelion-tv-animation-production-art-collection

### Finding 2 — A shared personnel-corridor visual grammar is supported

Claim:
A generic TV-era NERV personnel corridor should be modeled as a controlled industrial circulation space rather than a decorative sci-fi hallway.

Evidence class:
VISUAL_OBSERVATION

Confidence:
Medium-High

Evidence:
Publicly indexed TV stills show:
- long straight circulation runs with strong single-point perspective;
- modular wall panels and repeated floor slab/panel joints;
- wall-integrated control/display panels;
- broad, uncluttered walking surfaces;
- sparse local hazard striping around access points / wall-side interfaces rather than all-over decoration;
- stairs or vertical transitions appearing as direct continuations of circulation space.

A representative still with Shinji, Rei, and Asuka shows a broad personnel corridor with wall-mounted interfaces, repeated wall/floor paneling, localized yellow/black floor-edge warnings, and a stair flight at the far end.

Sources:
- https://www.imdb.com/title/tt0112159/mediaviewer/rm757389313/
- https://www.imdb.com/title/tt0781963/mediaviewer/rm3563999488/

Source note:
IMDb is only the host of the editorial stills, not a production authority. The visual evidence is used only as an observation of frames from the TV work.

### Finding 3 — The "universal 45-degree-cut / octagonal corridor" claim is not verified

Claim:
The current evidence does not support treating a 45-degree upper-corner cut or octagonal section as the universal NERV corridor profile.

Evidence class:
UNKNOWN / contradiction control

Confidence:
High that it is **not yet verified**; Low on the true global prevalence of any one profile.

Evidence:
- The current Gemini foundation report states that NERV corridor sections may use 45-degree-cut upper corners / octagonal forms, but no primary setting sheet is cited in the repository snippet supporting universality.
- TV stills checked this cycle include corridor/access spaces whose visible geometry is compatible with conventional rectilinear/segmented wall construction; the images do not establish a single repeated octagonal section across NERV HQ.
- The official metadata confirms that authoritative corridor setting sheets exist in published production-art collections, but their specific corridor pages were not publicly readable from official sources during this cycle.

Repository foundation note:
`docs/research/raw-reports/gemini/0001-foundation-visual.md` should therefore be treated as a hypothesis/source lead for this point, not final geometric authority.

### Finding 4 — Exact corridor dimensions remain unknown

Claim:
No official exact corridor width, ceiling height, or wall-chamfer angle was located in current public Web evidence.

Evidence class:
UNKNOWN

Confidence:
High

Evidence:
Character-relative stills give useful human scale but not enough calibrated information for defensible fixed dimensions.

Scale classification:
- Width: Relative only
- Ceiling height: Relative only
- Wall angle/chamfer: Unknown
- Panel spacing: Relative / visual repetition only

Production recommendation:
Keep these as Scene Config parameters until a readable setting sheet or calibrated primary source is found.

## Spatial Structure

The best-supported generic structure for a first prototype is:

```text
[wall/service strip] | broad personnel circulation | [wall/service strip]
           -> repeated wall/floor panel cadence ->
           -> door / junction / stair module ->
```

Do not encode an octagonal cross-section as a required topological property.

## Connectivity

Episode 11 secondary transcripts explicitly identify `Route-07` as a route used to descend toward the GeoFront during the blackout and show a manually operable door on that path.

Topology classification:

```text
Tokyo-3 / upper access
    ↓
Route-07 access path
    ↓
manual access door
    ↓
GeoFront / NERV circulation network
```

- `Tokyo-3 / upper access -> Route-07`: SUPPORTED_CONNECTION
- `Route-07 -> manual access door`: SUPPORTED_CONNECTION
- `manual access door -> exact generic corridor module`: UNKNOWN_CONNECTION

Sources:
- https://www.animanga.com/scripts/textesgb/eva11.html
- https://evangelion.fandom.com/wiki/Episode%3A11

Caution:
These are secondary sources for dialogue/episode sequencing. They are sufficient to keep Route-07 in the topology backlog, not to define exact architectural geometry.

## Human Circulation

The bright personnel corridor still supports:
- ordinary human foot circulation;
- at least multi-person passing/standing without a catwalk-like narrowness;
- wall interfaces reachable at standing height;
- stairs integrated directly into circulation.

Classification:
VISUAL_OBSERVATION — Medium

Do not convert this to an exact meter value yet.

## Maintenance / Logistics

Current evidence for the **general personnel corridor** does not establish whether utilities are continuously exposed or mostly concealed. The Gemini foundation's claim of lower-wall cable trays may apply to some corridor types, but was not independently verified here as a global rule.

Status:
UNKNOWN

## Visual Observations

Supported reusable motifs:
- repeated large wall panels;
- repeated floor panels/slabs;
- long axial perspective;
- sparse embedded wall interfaces;
- localized hazard striping near access boundaries;
- restrained color blocks rather than dense sci-fi greebling;
- stairs/doors as strong modular interruptions.

Not yet safe as universal motifs:
- 45-degree upper chamfers;
- octagonal tunnel section;
- exposed cable trays on every corridor;
- fixed continuous light-strip layout;
- fixed giant stencil numbering on every corridor.

## Scale Evidence

Official:
- None located for dimensions.

Relative:
- Human figures provide consistent scale anchors.
- Corridor is visibly wider than a single-file maintenance passage.

Production recommendation:
- Use an adjustable clear width sized for comfortable two-way human passage plus wall interaction.
- Do not hard-code exact numeric dimensions as canon.

## 3D Modeling Implications

1. Build a modular corridor kit rather than a single long baked mesh.
2. Keep `clear_width`, `ceiling_height`, `upper_chamfer`, `panel_pitch`, `light_pitch`, and `service_strip_height` parameterized.
3. First prototype should prioritize the shared visual grammar, not an unverified section angle.
4. Separate modules:
   - straight personnel corridor;
   - stair transition;
   - door/access bay;
   - junction;
   - service/maintenance corridor variant.
5. Use character-height reference mannequins during blockout.
6. Preserve long sightlines and perspective rhythm; they are more strongly supported than exact dimensions.

## Web 3D Classification

- Corridor shell: Must be geometry
- Repeated wall panels: Can be instanced
- Floor panel cadence: Can be procedural / instanced
- Hazard markings: Can be decal / texture
- Wall interfaces: Can be instanced with a few unique variants
- Light fixtures: Can be instanced
- Door/access bay: Requires unique modeling per door family
- Stairs: Must be geometry
- Exact cross-section: Parameterized / Unknown

## Real-World Engineering Analogies

PRODUCTION / ENGINEERING INFERENCE only:
- A modular service-building approach is analogous to underground utility corridors, transport back-of-house passages, and industrial plant access galleries.
- Repeated access bays and utility/service strips are plausible engineering devices for a large underground facility.

These analogies must not be presented as Evangelion canon.

## Contradictions

Claim A:
Gemini foundation: corridor upper corners may be 45-degree cut / octagonal as a recurring NERV visual form.

Source A:
`docs/research/raw-reports/gemini/0001-foundation-visual.md`

Evidence type A:
Foundation synthesis; underlying primary corridor sheet not visible in repository snippet.

Claim B:
Current cycle: publicly visible TV stills do not establish that profile as universal; multiple corridor/access visual types exist.

Source B:
TV still observations hosted by IMDb plus production-art metadata.

Evidence type B:
VISUAL_OBSERVATION + OFFICIAL_META

Assessment:
Do not reject the octagonal/chamfered form entirely; downgrade it from "general rule" to "candidate corridor variant requiring primary-sheet verification."

Infrastructure consequence:
Corridor generator must support multiple section profiles.

3D consequence:
Do not bake a 45-degree chamfer into the shared base mesh.

Needs Claude audit:
Yes

## Unknowns

- Which exact pages/sheets in the official setting-material collection define NERV HQ corridor sections?
- How many corridor families were explicitly designed for the TV series?
- Are wall cant/chamfer angles specified or only drawn perspectivally?
- Is there an explicit standard width/height grid?
- Are general personnel corridors and Route-07 access corridors part of the same module family?

## Questions for Claude / Deep Research

1. Can a primary/official setting sheet be located that explicitly shows the cross-section or orthographic elevation of a TV-era NERV HQ general corridor?
2. Does that sheet specify 45-degree upper corner cuts, and if so, is the design labeled as a generic corridor or a specific room/route?
3. Are there multiple corridor setting sheets with materially different profiles?
4. Can a published page reference be established in the 2015 or 30th-edition setting-material collection without reproducing copyrighted scans?

## Cross-Worker Boundary Notes

No EVA Cage geometry was investigated. Cage-adjacent circulation should remain with Worker A until the path has crossed the Cage boundary into NERV-wide infrastructure.

## Sources

See `../sources/0001-tv-general-corridor-cross-section-sources.md`.
