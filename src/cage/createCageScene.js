import * as THREE from 'three';
import { addBox, makeWireBox, registerAabb } from '../utils/geometry.js';
import { createEvaPlaceholder } from './createEvaPlaceholder.js';

function railMaterial(color = 0x4e5357) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.62, metalness: 1 });
}

function addRailing(group, colliders, start, end, baseY, material) {
  const height = 1.1;
  const thickness = 0.12;
  const horizontal = Math.abs(end.x - start.x) > Math.abs(end.z - start.z);
  const length = horizontal ? Math.abs(end.x - start.x) : Math.abs(end.z - start.z);
  const center = {
    x: (start.x + end.x) / 2,
    y: baseY + height / 2,
    z: (start.z + end.z) / 2
  };
  const size = horizontal
    ? { x: length, y: height, z: thickness }
    : { x: thickness, y: height, z: length };

  // Simple blockout collider; visible rails are thinner.
  registerAabb(colliders, center, size, 'railing');

  const topSize = horizontal
    ? { x: length, y: thickness, z: thickness }
    : { x: thickness, y: thickness, z: length };
  addBox(group, topSize, { ...center, y: baseY + height }, material, 'rail-top');

  const postCount = Math.max(2, Math.floor(length / 2.4));
  for (let i = 0; i <= postCount; i += 1) {
    const t = i / postCount;
    const x = THREE.MathUtils.lerp(start.x, end.x, t);
    const z = THREE.MathUtils.lerp(start.z, end.z, t);
    addBox(group, { x: thickness, y: height, z: thickness }, { x, y: baseY + height/2, z }, material, 'rail-post');
  }
}

export function createCageScene(config) {
  const root = new THREE.Group();
  root.name = 'EVA_CAGE_ROOT';

  const colliders = [];
  const navigation = { decks: [], ramps: [] };
  const toggles = {};

  const architecture = new THREE.Group();
  const evaInterface = new THREE.Group();
  const humanAccess = new THREE.Group();
  const launchInterface = new THREE.Group();
  const debug = new THREE.Group();
  root.add(architecture, evaInterface, humanAccess, launchInterface, debug);

  const concrete = new THREE.MeshStandardMaterial({ color: 0x25282b, roughness: 0.93, metalness: 0 });
  const concreteDark = new THREE.MeshStandardMaterial({ color: 0x171a1c, roughness: 0.95, metalness: 0 });
  const paintedSteel = new THREE.MeshStandardMaterial({ color: 0x30363a, roughness: 0.7, metalness: 0 });
  const exposedMetal = railMaterial();
  const warning = new THREE.MeshStandardMaterial({ color: 0x7b4023, roughness: 0.65, metalness: 0 });

  const w = config.CAGE_WIDTH;
  const d = config.CAGE_DEPTH;
  const h = config.CAGE_HEIGHT;
  const wallT = Math.max(1.0, config.EVA_HEIGHT * 0.022);

  // Main floor apron and entrance corridor.
  addBox(architecture, { x: w, y: 0.8, z: d * 0.72 }, { x: 0, y: -0.4, z: d * 0.12 }, concrete, 'floor-apron');
  addBox(architecture, { x: w * 0.36, y: 0.8, z: 22 }, { x: 0, y: -0.4, z: d * 0.68 }, concreteDark, 'entrance-corridor-floor');

  // Massive side/back wall masses.
  const sideCenterY = h / 2;
  addBox(architecture, { x: wallT, y: h, z: d }, { x: -w/2, y: sideCenterY, z: 0 }, concreteDark, 'wall-left');
  addBox(architecture, { x: wallT, y: h, z: d }, { x: w/2, y: sideCenterY, z: 0 }, concreteDark, 'wall-right');
  addBox(architecture, { x: w, y: h, z: wallT }, { x: 0, y: sideCenterY, z: -d/2 }, concreteDark, 'wall-rear');
  registerAabb(colliders, { x: -w/2, y: sideCenterY, z: 0 }, { x: wallT, y: h, z: d }, 'wall');
  registerAabb(colliders, { x: w/2, y: sideCenterY, z: 0 }, { x: wallT, y: h, z: d }, 'wall');
  registerAabb(colliders, { x: 0, y: sideCenterY, z: -d/2 }, { x: w, y: h, z: wallT }, 'wall');

  // Vertical structural repetition. Geometry is instanced to establish scale without greeble overload.
  const ribGeometry = new THREE.BoxGeometry(wallT * 1.5, h * 0.72, wallT * 1.6);
  const ribCount = 10;
  const ribs = new THREE.InstancedMesh(ribGeometry, paintedSteel, ribCount * 2);
  const matrix = new THREE.Matrix4();
  for (let i = 0; i < ribCount; i += 1) {
    const z = THREE.MathUtils.lerp(-d*0.43, d*0.43, i / (ribCount - 1));
    matrix.makeTranslation(-w/2 + wallT*1.4, h*0.48, z);
    ribs.setMatrixAt(i, matrix);
    matrix.makeTranslation(w/2 - wallT*1.4, h*0.48, z);
    ribs.setMatrixAt(i + ribCount, matrix);
  }
  ribs.castShadow = true;
  ribs.receiveShadow = true;
  architecture.add(ribs);

  // EVA placeholder and large cage-side restraint masses.
  const eva = createEvaPlaceholder(config);
  evaInterface.add(eva);

  const restraintY = config.EVA_HEIGHT * 0.56;
  for (const side of [-1, 1]) {
    const panelCenter = { x: side * config.EVA_HEIGHT * 0.105, y: restraintY, z: 0.8 };
    const panelSize = { x: config.EVA_HEIGHT * 0.055, y: config.EVA_HEIGHT * 0.28, z: config.EVA_HEIGHT * 0.12 };
    addBox(evaInterface, panelSize, panelCenter, paintedSteel, `restraint-panel-${side}`);
    registerAabb(colliders, panelCenter, panelSize, 'restraint');
    addBox(
      evaInterface,
      { x: Math.abs(side) * config.EVA_HEIGHT * 0.11, y: config.EVA_HEIGHT * 0.035, z: config.EVA_HEIGHT * 0.04 },
      { x: side * config.EVA_HEIGHT * 0.16, y: config.EVA_HEIGHT * 0.61, z: 0.8 },
      warning,
      `restraint-arm-${side}`
    );
  }

  // Lower-zone recess. It is visually present but not declared as a fixed canonical pit state.
  const pitWidth = w * 0.42;
  const pitDepth = d * 0.34;
  const pitCenterZ = -d * 0.17;
  const pitWallHeight = config.LOWER_PIT_DEPTH;
  addBox(architecture, { x: pitWidth, y: pitWallHeight, z: wallT }, { x: 0, y: -pitWallHeight/2, z: pitCenterZ - pitDepth/2 }, concreteDark, 'lower-zone-back');
  addBox(architecture, { x: wallT, y: pitWallHeight, z: pitDepth }, { x: -pitWidth/2, y: -pitWallHeight/2, z: pitCenterZ }, concreteDark, 'lower-zone-left');
  addBox(architecture, { x: wallT, y: pitWallHeight, z: pitDepth }, { x: pitWidth/2, y: -pitWallHeight/2, z: pitCenterZ }, concreteDark, 'lower-zone-right');

  const fluid = addBox(
    architecture,
    { x: pitWidth * 0.96, y: 0.12, z: pitDepth * 0.96 },
    { x: 0, y: config.CAGE_FLUID_LEVEL, z: pitCenterZ },
    new THREE.MeshStandardMaterial({ color: 0x182329, roughness: 0.28, metalness: 0, transparent: true, opacity: 0.58 }),
    'optional-fluid-surface'
  );
  fluid.visible = config.CAGE_FLUID_ENABLED;
  toggles.fluid = fluid;

  // Service deck and a visible stair with an invisible walk ramp.
  const deckY = config.CATWALK_ELEVATIONS[0] ?? config.EVA_HEIGHT * 0.15;
  const deckW = w * 0.22;
  const deckD = d * 0.72;
  const deckX = -w/2 + deckW/2 + wallT * 1.2;
  const deckZ = -d * 0.02;
  addBox(humanAccess, { x: deckW, y: 0.55, z: deckD }, { x: deckX, y: deckY - 0.275, z: deckZ }, paintedSteel, 'raised-service-deck');
  navigation.decks.push({ minX: deckX-deckW/2, maxX: deckX+deckW/2, minZ: deckZ-deckD/2, maxZ: deckZ+deckD/2, y: deckY });

  const stairWidth = Math.max(2.4, config.EVA_HEIGHT * 0.035);
  const stairRun = Math.max(18, deckY * 2.1);
  const stairX = deckX + deckW/2 + stairWidth/2;
  const stairStartZ = d*0.28;
  const stairEndZ = stairStartZ - stairRun;
  const steps = Math.max(12, Math.round(deckY / 0.28));
  for (let i = 0; i < steps; i += 1) {
    const t = (i + 0.5) / steps;
    const y = deckY * t;
    const z = THREE.MathUtils.lerp(stairStartZ, stairEndZ, t);
    addBox(humanAccess, { x: stairWidth, y: 0.22, z: stairRun/steps + 0.05 }, { x: stairX, y, z }, paintedSteel, 'stair-tread');
  }
  navigation.ramps.push({
    minX: stairX - stairWidth/2,
    maxX: stairX + stairWidth/2,
    startZ: stairStartZ,
    endZ: stairEndZ,
    startY: 0,
    endY: deckY
  });

  // Keep the deck edge guarded, but leave a real opening where the stair arrives.
  const deckInnerX = deckX + deckW/2;
  const gapHalf = stairWidth * 0.72;
  const deckMinZ = deckZ - deckD/2;
  const deckMaxZ = deckZ + deckD/2;
  if (stairEndZ - gapHalf > deckMinZ) {
    addRailing(humanAccess, colliders,
      { x: deckInnerX, z: deckMinZ }, { x: deckInnerX, z: stairEndZ-gapHalf }, deckY, exposedMetal);
  }
  if (stairEndZ + gapHalf < deckMaxZ) {
    addRailing(humanAccess, colliders,
      { x: deckInnerX, z: stairEndZ+gapHalf }, { x: deckInnerX, z: deckMaxZ }, deckY, exposedMetal);
  }
  addRailing(humanAccess, colliders,
    { x: deckX-deckW/2, z: deckMinZ }, { x: deckX+deckW/2, z: deckMinZ }, deckY, exposedMetal);

  // Stair edge collision is a conservative tall boundary; visible rail geometry follows the slope.
  for (const side of [-1, 1]) {
    const x = stairX + side*stairWidth/2;
    registerAabb(colliders,
      { x, y: (deckY+1.1)/2, z: (stairStartZ+stairEndZ)/2 },
      { x: 0.12, y: deckY+1.1, z: Math.abs(stairStartZ-stairEndZ) },
      'stair-railing'
    );
    const segments = 10;
    for (let i = 0; i <= segments; i += 1) {
      const t = i/segments;
      const z = THREE.MathUtils.lerp(stairStartZ, stairEndZ, t);
      const y = THREE.MathUtils.lerp(0, deckY, t);
      addBox(humanAccess, { x: 0.10, y: 1.1, z: 0.10 }, { x, y: y+0.55, z }, exposedMetal, 'stair-rail-post');
      if (i < segments) {
        const t2 = (i+1)/segments;
        const z2 = THREE.MathUtils.lerp(stairStartZ, stairEndZ, t2);
        const y2 = THREE.MathUtils.lerp(0, deckY, t2);
        const dz = z2-z;
        const dy = y2-y;
        const len = Math.hypot(dz, dy);
        const beam = addBox(humanAccess, { x: 0.10, y: 0.10, z: len },
          { x, y: (y+y2)/2 + 1.1, z: (z+z2)/2 }, exposedMetal, 'stair-rail-top');
        beam.rotation.x = Math.atan2(dy, Math.abs(dz));
      }
    }
  }

  // Corridor side walls prevent the player from leaving the authored entrance route.
  const corridorW = w * 0.36;
  const corridorCenterZ = d * 0.68;
  for (const side of [-1, 1]) {
    const center = { x: side*corridorW/2, y: 2.0, z: corridorCenterZ };
    const size = { x: 0.35, y: 4.0, z: 22 };
    addBox(architecture, size, center, concreteDark, 'entrance-corridor-wall');
    registerAabb(colliders, center, size, 'wall');
  }

  // Rail / launch interface: provisional rearward route, kept as its own group.
  const railZ0 = d * 0.06;
  const railZ1 = config.LAUNCH_INTERFACE_OFFSET.z;
  const railLength = Math.abs(railZ1 - railZ0);
  for (const x of [-2.2, 2.2]) {
    addBox(launchInterface, { x: 0.45, y: 0.35, z: railLength }, { x, y: 0.18, z: (railZ0 + railZ1)/2 }, exposedMetal, 'launch-rail-guide');
  }
  addBox(launchInterface, { x: config.EVA_HEIGHT*0.23, y: 0.8, z: config.EVA_HEIGHT*0.12 }, { x: 0, y: 0.4, z: -d*0.31 }, paintedSteel, 'transport-platform-envelope');

  const openingSize = { x: w*0.34, y: h*0.72, z: wallT*1.5 };
  const openingCenter = { x: 0, y: h*0.40, z: -d/2 + wallT*0.4 };
  // Dark proxy void masks the rear wall visually without pretending exact boundary geometry.
  addBox(launchInterface, openingSize, openingCenter,
    new THREE.MeshBasicMaterial({ color: 0x030405 }), 'launch-continuation-proxy');

  // Entry Plug keep-out debug volume.
  const ko = config.ENTRY_PLUG_KEEP_OUT;
  const keepOut = makeWireBox({ x: ko.width, y: ko.height, z: ko.depth });
  keepOut.position.set(0, ko.centerY, ko.centerZ);
  keepOut.visible = false;
  keepOut.name = 'entry_plug_keepout';
  debug.add(keepOut);
  toggles.keepOut = keepOut;

  // Human reference.
  const human = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.25, 1.2, 4, 8),
    new THREE.MeshStandardMaterial({ color: 0xd8dadd, roughness: 0.8, metalness: 0 })
  );
  human.position.set(5.2, 0.85, d*0.2);
  human.name = 'human-scale-reference';
  debug.add(human);
  toggles.human = human;

  // Conservative collision around EVA feet/body to keep the player out of the placeholder.
  registerAabb(colliders, { x: 0, y: config.EVA_HEIGHT*0.34, z: 0 },
    { x: config.EVA_HEIGHT*0.19, y: config.EVA_HEIGHT*0.68, z: config.EVA_HEIGHT*0.14 }, 'eva-placeholder');

  // Prevent falling into the unresolved lower-zone recess from the apron.
  const pitRailZ = pitCenterZ + pitDepth/2 + 0.8;
  addRailing(humanAccess, colliders,
    { x: -pitWidth/2, z: pitRailZ }, { x: pitWidth/2, z: pitRailZ }, 0, exposedMetal);

  return { root, colliders, navigation, toggles, spawn: { x: 0, y: config.HUMAN_EYE_HEIGHT, z: d*0.68 + 7 } };
}
