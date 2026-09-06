import * as THREE from 'three';
import { addBox } from '../utils/geometry.js';

function cylinderBetween(group, a, b, radius, material, name) {
  const start = new THREE.Vector3(a.x, a.y, a.z);
  const end = new THREE.Vector3(b.x, b.y, b.z);
  const delta = end.clone().sub(start);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, delta.length(), 10), material);
  mesh.position.copy(start.add(end).multiplyScalar(0.5));
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.clone().normalize());
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

export function addIndustrialDetail(root, config) {
  const [architecture, evaInterface, humanAccess, launchInterface] = root.children;
  const w = config.CAGE_WIDTH;
  const d = config.CAGE_DEPTH;
  const h = config.CAGE_HEIGHT;
  const eva = config.EVA_HEIGHT;

  const panel = new THREE.MeshStandardMaterial({ color: 0x34383b, roughness: 0.82, metalness: 0.08 });
  const panelDark = new THREE.MeshStandardMaterial({ color: 0x202427, roughness: 0.9, metalness: 0.04 });
  const steel = new THREE.MeshStandardMaterial({ color: 0x51575b, roughness: 0.48, metalness: 0.72 });
  const pipe = new THREE.MeshStandardMaterial({ color: 0x3f4649, roughness: 0.56, metalness: 0.68 });
  const cable = new THREE.MeshStandardMaterial({ color: 0x151719, roughness: 0.9, metalness: 0 });
  const hazard = new THREE.MeshStandardMaterial({ color: 0xb25a25, roughness: 0.62, metalness: 0.02 });
  const lamp = new THREE.MeshStandardMaterial({ color: 0xe8ddc0, emissive: 0xffd88a, emissiveIntensity: 1.7, roughness: 0.45 });

  const rows = 8;
  const cols = 7;
  const panelGeo = new THREE.BoxGeometry(Math.max(0.18, eva*0.003), h*0.075, d*0.095);
  const panels = new THREE.InstancedMesh(panelGeo, panel, rows * cols * 2);
  const m = new THREE.Matrix4();
  let index = 0;
  for (const side of [-1, 1]) {
    for (let r = 0; r < rows; r += 1) {
      const y = h * (0.08 + r * 0.105);
      for (let c = 0; c < cols; c += 1) {
        const z = THREE.MathUtils.lerp(-d*0.40, d*0.38, c/(cols-1));
        m.makeTranslation(side*(w/2 - eva*0.018), y, z);
        panels.setMatrixAt(index++, m);
      }
    }
  }
  panels.castShadow = true;
  panels.receiveShadow = true;
  panels.name = 'wall-service-panel-field';
  architecture.add(panels);

  for (const yRatio of [0.12, 0.28, 0.46, 0.65, 0.83]) {
    const y = h*yRatio;
    for (const side of [-1, 1]) {
      addBox(architecture, { x: eva*0.018, y: eva*0.018, z: d*0.92 }, { x: side*(w/2-eva*0.030), y, z: -d*0.01 }, steel, 'wall-horizontal-beam');
      addBox(architecture, { x: eva*0.010, y: eva*0.010, z: d*0.84 }, { x: side*(w/2-eva*0.043), y: y-eva*0.018, z: -d*0.02 }, panelDark, 'wall-shadow-channel');
    }
  }

  for (const side of [-1, 1]) {
    for (const zRatio of [-0.33, -0.14, 0.08, 0.29]) {
      const x = side*(w/2-eva*0.050);
      const z = d*zRatio;
      cylinderBetween(architecture, {x, y: 1.2, z}, {x, y: h*0.78, z}, eva*0.0065, pipe, 'vertical-service-pipe');
    }
    for (const yRatio of [0.20, 0.52]) {
      const y = h*yRatio;
      cylinderBetween(architecture,
        {x: side*(w/2-eva*0.052), y, z: -d*0.33},
        {x: side*(w/2-eva*0.052), y, z: d*0.29},
        eva*0.0045, pipe, 'horizontal-service-pipe');
    }
  }

  for (const side of [-1, 1]) {
    const trayX = side*(w/2-eva*0.075);
    addBox(architecture, { x: eva*0.024, y: eva*0.012, z: d*0.74 }, { x: trayX, y: h*0.35, z: 0 }, steel, 'wall-cable-tray');
    for (let i = 0; i < 4; i += 1) {
      const offset = (i-1.5)*eva*0.004;
      cylinderBetween(architecture,
        {x: trayX + side*offset, y: h*0.355, z: -d*0.35},
        {x: trayX + side*offset, y: h*0.355, z: d*0.35},
        eva*0.0018, cable, 'cable-bundle');
    }
  }

  const grateCount = 26;
  for (let i = 0; i < grateCount; i += 1) {
    const z = THREE.MathUtils.lerp(-d*0.12, d*0.45, i/(grateCount-1));
    addBox(humanAccess, { x: w*0.32, y: 0.035, z: 0.11 }, { x: 0, y: 0.035, z }, steel, 'floor-grate-bar');
  }
  for (const x of [-w*0.18, w*0.18]) {
    addBox(humanAccess, { x: 0.16, y: 0.045, z: d*0.58 }, { x, y: 0.05, z: d*0.17 }, hazard, 'floor-hazard-line');
  }

  const deckY = config.CATWALK_ELEVATIONS[0] ?? eva*0.15;
  const deckX = -w/2 + (w*0.22)/2 + Math.max(1.0, eva*0.022)*1.2;
  for (const zRatio of [-0.28, -0.10, 0.08, 0.26]) {
    const z = d*zRatio;
    cylinderBetween(humanAccess, {x: deckX-w*0.09, y: deckY-0.3, z}, {x: -w/2+eva*0.035, y: deckY-eva*0.10, z}, eva*0.0045, steel, 'deck-brace');
    addBox(humanAccess, {x: w*0.055, y: eva*0.035, z: d*0.045}, {x: deckX-w*0.04, y: deckY+eva*0.025, z}, panel, 'deck-equipment-cabinet');
  }

  for (const side of [-1, 1]) {
    const baseX = side*eva*0.145;
    const y = eva*0.575;
    cylinderBetween(evaInterface,
      {x: baseX, y, z: 2.7},
      {x: side*eva*0.095, y: y+eva*0.015, z: 1.1},
      eva*0.011, steel, 'restraint-actuator-proxy');
    addPartHinge(evaInterface, side*eva*0.145, y, 2.8, eva, steel, hazard);
  }

  for (let i = 0; i < 18; i += 1) {
    const z = THREE.MathUtils.lerp(d*0.05, config.LAUNCH_INTERFACE_OFFSET.z, i/17);
    addBox(launchInterface, {x: eva*0.13, y: 0.10, z: 0.45}, {x: 0, y: 0.08, z}, steel, 'launch-track-sleeper');
  }

  for (const side of [-1, 1]) {
    for (const yRatio of [0.16, 0.32, 0.55, 0.74]) {
      addBox(architecture, {x: eva*0.006, y: eva*0.035, z: eva*0.13},
        {x: side*(w/2-eva*0.085), y: h*yRatio, z: d*0.18}, lamp, 'wall-work-light');
    }
  }
}

function addPartHinge(group, x, y, z, eva, steel, hazard) {
  const hinge = new THREE.Mesh(new THREE.CylinderGeometry(eva*0.017, eva*0.017, eva*0.055, 12), steel);
  hinge.position.set(x, y, z);
  hinge.rotation.z = Math.PI/2;
  hinge.castShadow = true;
  hinge.name = 'restraint-hinge-proxy';
  group.add(hinge);
  addBox(group, {x: eva*0.035, y: eva*0.012, z: eva*0.020}, {x, y: y+eva*0.03, z}, hazard, 'restraint-hazard-cap');
}
