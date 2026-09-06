# TV Episode 13 — Sigma Unit / Central Dogma Physical Isolation

## Scope

Physical compartment isolation between the Sigma Unit and the Central Dogma during the Ireul contamination event in TV Episode 13. Cage-specific structures are excluded.

## Worker

WORKER B — NERV Infrastructure

## Continuity

TV (1995), Episode 13 "Lilliputian Hitcher"

## Summary

Episode 13 establishes that NERV Headquarters can physically compartmentalize a contaminated internal zone. The sequence is not best represented as one generic blast door: dialogue calls for Central Dogma to be physically shut down and separated from Sigma Unit; an evacuation announcement orders Sigma Unit separated from B Floor and all partitions closed; a later announcement states that the Central Dogma below Sigma Unit will be completely sealed within 60 seconds and that a vacuum pump will activate after 30 seconds. A Platinum booklet commentary likewise describes the lower Central Dogma region being physically sealed to prevent Angel penetration.

## Findings

### Finding 1 — Physical isolation is an explicit facility capability

Claim: NERV can physically isolate Central Dogma from the Sigma Unit during contamination.

Evidence class: CANON_EXPLICIT

Confidence: High

Evidence: Episode 13 dialogue explicitly orders a physical shutdown of Central Dogma and separation from Sigma Unit.

Sources:
- https://www.animanga.com/scripts/textesgb/eva13.html
- https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e13&tv-show=neon-genesis-evangelion-1995

### Finding 2 — The isolation boundary is a multi-partition system, not one confirmed door

Claim: At least one part of the isolation event closes multiple partitions at the Sigma Unit / B Floor boundary.

Evidence class: CANON_EXPLICIT

Confidence: High

Evidence: The evacuation announcement says Sigma Unit is being separated from B Floor and all partitions are closing. The exact number, geometry, thickness, leaf configuration, and actuator type are not stated.

Sources:
- https://www.animanga.com/scripts/textesgb/eva13.html

### Finding 3 — Full sealing is sequenced and time-bound

Claim: The lower Central Dogma isolation sequence has a stated 60-second completion window and includes vacuum-pump activation 30 seconds before/within the sealing sequence.

Evidence class: CANON_EXPLICIT

Confidence: High

Evidence: Episode 13 announcement states complete sealing in 60 seconds and vacuum-pump activation in 30 seconds; a later announcement confirms complete sealing.

Sources:
- https://www.animanga.com/scripts/textesgb/eva13.html
- https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e13&tv-show=neon-genesis-evangelion-1995

### Finding 4 — Officially licensed commentary supports the lower-region interpretation

Claim: The Platinum booklet commentary describes Gendo physically sealing the Central Dogma region below Sigma Unit to keep the Angel from reaching lower NERV facilities.

Evidence class: OFFICIAL_META

Confidence: Medium-High

Evidence: A surviving web transcription of ADV's Platinum booklet episode commentary says the region in Central Dogma below Sigma Unit is completely physically sealed. The current web source is a fan-hosted transcription of licensed DVD booklet text, not the original booklet scan.

Sources:
- https://www.evamonkey.com/platinum-booklets/episode-commentaries-07-13.php

### Finding 5 — Exact vertical topology remains contradictory

Claim: The episode clearly establishes an isolation relationship, but not a fully self-consistent floor topology around Sigma Unit.

Evidence class: SECONDARY / UNKNOWN

Confidence: Medium

Evidence: Secondary continuity analysis notes tension among dialogue about Sigma Unit being close to Adam, the announcement that Central Dogma below Sigma Unit is sealed, and other level references in the episode. This is not sufficient to assign an exact floor coordinate.

Sources:
- https://evangelion.fandom.com/wiki/Episode%3A13

## Spatial Structure

Minimum supported abstraction:

```text
Sigma Unit A Floor / Pribnow Box
        |
        | contamination propagates through walls / pipe system
        v
Sigma Unit
        |
        | multi-partition isolation boundary at/around B Floor
        v
Central Dogma lower region
```

Do not encode exact level numbers as canon from this unit.

## Connectivity

- `Pribnow Box -> Sigma Unit`: VERIFIED_CONNECTION
- `Sigma Unit -> B Floor isolation boundary`: VERIFIED_CONNECTION
- `Sigma Unit -> lower Central Dogma region`: SUPPORTED_CONNECTION
- exact floor-number mapping / exact vertical coordinate: UNKNOWN_CONNECTION

## Human Circulation

- Personnel in the affected Sigma Unit area are explicitly ordered to evacuate before compartment closure.
- The sequence therefore implies a short evacuation-before-seal state, then inaccessible/isolated state.
- Exact evacuation route and muster destination are UNKNOWN.
- Whether maintenance personnel have separate bypass routes around the sealed partitions is UNKNOWN.

## Maintenance / Logistics

A compartment capable of physical isolation plus vacuum-pump operation implies dedicated sealing machinery and mechanical plant, but actuator layout, pump placement, duct routing, drain behavior, and pressure rating are not shown clearly enough to canonize. These should remain production-inference layers.

## Visual Observations

This research cycle does not canonize a specific blast-door silhouette. The key supported visual/behavioral feature is the synchronized closure of multiple partitions as part of an emergency compartment-sealing sequence.

## Scale Evidence

- Partition count: Unknown
- Door/partition thickness: Unknown
- Clear opening: Unknown
- 60 s sealing completion: Canon-explicit dialogue timing
- 30 s vacuum-pump activation cue: Canon-explicit dialogue timing

## 3D Modeling Implications

Implement this as a reusable `CompartmentIsolationSystem`, not a single decorative blast-door prefab.

Suggested configurable components:
- multiple partition actors at corridor/utility boundaries
- `OPEN -> WARNING -> EVACUATE -> CLOSING -> SEALED` state machine
- synchronized warning lights / alarms
- optional pressure/vacuum system state
- route-blocking navigation update after seal
- emergency interaction disabled unless separately evidenced

Exact dimensions and actuator mechanics must remain adjustable production parameters rather than canon constants.

## Web 3D Classification

- Partitions: Must be geometry; Can be instanced; Requires animation
- Warning signage/lights: Can be decal/material; Requires animation
- Control logic: Requires interaction/system state
- Vacuum machinery: Unknown visually; production inference only until stronger evidence

## Real-World Engineering Analogies

PRODUCTION / ENGINEERING INFERENCE ONLY:
Real clean-room, tunnel, ship, bunker, and hazardous-process compartment isolation can use multiple barriers, interlocks, pressure control, and evacuation-before-seal logic. These analogies can inform implementation, but they are not evidence for NERV's exact mechanism.

## Contradictions

Claim A: Episode dialogue and Platinum commentary place a physically sealable lower Central Dogma region beneath Sigma Unit.

Claim B: Secondary continuity analysis identifies other level/position cues that do not map cleanly to this interpretation.

Assessment: The isolation relationship is strong; exact vertical topology is not.

Infrastructure consequence: Keep the Sigma-to-Central-Dogma edge, but parameterize its physical vertical placement.

3D consequence: Do not assign authoritative floor numbers yet.

Needs Claude audit: Yes

## Unknowns

- exact count and geometry of the closing partitions
- whether partitions are sliding, dropping, rotating, or compound
- actuator and locking mechanism
- pressure/vacuum target and pump location
- exact B Floor geometry
- exact relationship among Sigma Unit, Central Dogma levels, and Terminal Dogma
- emergency bypass / maintenance egress

## Questions for Claude / Deep Research

1. Do production sheets or licensed setting books show the Sigma Unit / B Floor emergency partitions clearly enough to determine their motion and silhouette?
2. Can the apparent level-number/topology inconsistency in Episode 13 be resolved from original Japanese script, storyboard, filmbook, or Platinum booklet diagrams?
3. Does the vacuum-pump line refer to depressurizing the sealed lower Central Dogma region, the Sigma Unit boundary, or another adjacent volume?

## Cross-Worker Boundary Notes

No Cage-specific doors, Cage circulation, or Cage maintenance structures were researched.

## Sources

- Episode 13 transcript: https://www.animanga.com/scripts/textesgb/eva13.html
- Alternate episode transcript: https://www.springfieldspringfield.co.uk/view_episode_scripts.php?episode=s01e13&tv-show=neon-genesis-evangelion-1995
- Platinum booklet transcription: https://www.evamonkey.com/platinum-booklets/episode-commentaries-07-13.php
- Secondary topology note: https://evangelion.fandom.com/wiki/Episode%3A13
