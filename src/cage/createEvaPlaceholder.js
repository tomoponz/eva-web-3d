import * as THREE from 'three';
import { addBox } from '../utils/geometry.js';

export function createEvaPlaceholder(config) {
  const group = new THREE.Group();
  group.name = 'eva-placeholder';
  const h = config.EVA_HEIGHT;
  const scale = h / 80;

  const armor = new THREE.MeshStandardMaterial({ color: 0x2b2533, roughness: 0.72, metalness: 0 });
  const accent = new THREE.MeshStandardMaterial({ color: 0x596b46, roughness: 0.68, metalness: 0 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x111315, roughness: 0.84, metalness: 0 });

  addBox(group, { x: 8*scale, y: 21*scale, z: 5.8*scale }, { x: 0, y: 52*scale, z: 0 }, armor, 'torso');
  addBox(group, { x: 6*scale, y: 7*scale, z: 6*scale }, { x: 0, y: 67*scale, z: 0.2*scale }, armor, 'head');
  addBox(group, { x: 1.1*scale, y: 6*scale, z: 1.1*scale }, { x: 0, y: 72*scale, z: -0.3*scale }, accent, 'head-fin');

  for (const side of [-1, 1]) {
    addBox(group, { x: 3.3*scale, y: 24*scale, z: 4.0*scale }, { x: side*6.2*scale, y: 50*scale, z: 0 }, armor, `arm-${side}`);
    addBox(group, { x: 4.2*scale, y: 31*scale, z: 4.8*scale }, { x: side*3.0*scale, y: 19*scale, z: 0 }, armor, `leg-${side}`);
    addBox(group, { x: 5.5*scale, y: 2.4*scale, z: 8.5*scale }, { x: side*3.0*scale, y: 2.0*scale, z: 1.5*scale }, dark, `foot-${side}`);
    addBox(group, { x: 1.2*scale, y: 9*scale, z: 1.2*scale }, { x: side*4.5*scale, y: 60*scale, z: -2.9*scale }, accent, `shoulder-accent-${side}`);
  }

  // Dorsal Entry Plug port proxy — location only, not an exact mechanism.
  const port = new THREE.Mesh(
    new THREE.BoxGeometry(3.3*scale, 5.0*scale, 1.0*scale),
    new THREE.MeshStandardMaterial({ color: 0x24282c, roughness: 0.55, metalness: 0 })
  );
  port.position.set(0, 62*scale, -3.4*scale);
  port.name = 'entry-plug-port-proxy';
  group.add(port);

  return group;
}
