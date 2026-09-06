import * as THREE from 'three';

function material(color, roughness = 0.62, metalness = 0.05, emissive = 0x000000, emissiveIntensity = 0) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness, emissive, emissiveIntensity });
}

function addPart(group, geometry, mat, position, name, rotation = [0, 0, 0], scale = [1, 1, 1]) {
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.scale.set(...scale);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function box(x, y, z) {
  return new THREE.BoxGeometry(x, y, z, 1, 1, 1);
}

function capsule(radius, length) {
  return new THREE.CapsuleGeometry(radius, Math.max(0.01, length), 6, 12);
}

export function createEvaPlaceholder(config) {
  const group = new THREE.Group();
  group.name = 'eva-visual-blockout-m2';

  const s = config.EVA_HEIGHT / 80;
  const primary = material(0x392947, 0.56, 0.08);
  const secondary = material(0x51405d, 0.58, 0.08);
  const darkArmor = material(0x191b20, 0.72, 0.12);
  const joint = material(0x0d1013, 0.88, 0.08);
  const metal = material(0x4b5055, 0.44, 0.72);
  const green = material(0x708842, 0.54, 0.03);
  const eye = material(0xa8ff5b, 0.3, 0, 0x6fc52b, 2.2);
  const orange = material(0x9a4f22, 0.56, 0.05);

  for (const side of [-1, 1]) {
    const x = side * 3.1 * s;
    addPart(group, box(5.8*s, 2.6*s, 9.4*s), darkArmor, [x, 1.8*s, 1.3*s], `foot-sole-${side}`);
    addPart(group, box(5.2*s, 3.0*s, 7.2*s), primary, [x, 3.4*s, 0.2*s], `foot-armor-${side}`, [-0.08, 0, 0]);
    addPart(group, capsule(1.75*s, 3.0*s), joint, [x, 6.4*s, 0], `ankle-${side}`);

    addPart(group, capsule(1.75*s, 13.2*s), joint, [x, 14.6*s, 0], `shin-frame-${side}`);
    addPart(group, box(4.4*s, 13.8*s, 4.2*s), primary, [x, 15.2*s, 0.25*s], `shin-armor-${side}`, [0.035, 0, side*0.025]);
    addPart(group, box(3.7*s, 9.2*s, 0.75*s), secondary, [x, 15.4*s, 2.36*s], `shin-front-plate-${side}`);
    addPart(group, box(2.2*s, 7.6*s, 0.8*s), green, [x + side*1.25*s, 16.2*s, 2.55*s], `shin-accent-${side}`);

    addPart(group, new THREE.SphereGeometry(2.25*s, 16, 10), joint, [x, 24.1*s, 0], `knee-joint-${side}`);
    addPart(group, box(4.7*s, 3.5*s, 4.8*s), secondary, [x, 25.0*s, 0.5*s], `knee-armor-${side}`, [0.10, 0, 0]);
    addPart(group, box(3.1*s, 1.1*s, 1.0*s), orange, [x, 25.4*s, 2.8*s], `knee-warning-${side}`);

    addPart(group, capsule(2.15*s, 11.2*s), joint, [side*2.75*s, 33.4*s, 0], `thigh-frame-${side}`);
    addPart(group, box(5.2*s, 12.0*s, 5.0*s), primary, [side*2.75*s, 34.0*s, 0], `thigh-armor-${side}`, [-0.025, 0, side*0.04]);
    addPart(group, box(1.0*s, 8.0*s, 5.3*s), secondary, [side*4.95*s, 34.0*s, 0], `thigh-side-plate-${side}`);
  }

  addPart(group, box(9.8*s, 5.2*s, 6.2*s), darkArmor, [0, 42.0*s, 0], 'pelvis-core');
  addPart(group, box(7.6*s, 3.3*s, 6.8*s), primary, [0, 44.1*s, 0.3*s], 'pelvis-front');
  addPart(group, box(3.3*s, 4.6*s, 6.0*s), secondary, [-4.8*s, 43.7*s, 0], 'hip-armor-left', [0, 0, -0.10]);
  addPart(group, box(3.3*s, 4.6*s, 6.0*s), secondary, [4.8*s, 43.7*s, 0], 'hip-armor-right', [0, 0, 0.10]);

  addPart(group, capsule(2.6*s, 6.4*s), joint, [0, 48.8*s, 0], 'waist-inner');
  for (let i = 0; i < 4; i += 1) {
    const y = (47.3 + i*1.9) * s;
    const width = (6.8 + i*0.5) * s;
    addPart(group, box(width, 1.15*s, 5.4*s), i % 2 ? secondary : primary, [0, y, 0.2*s], `abdomen-plate-${i}`);
  }

  addPart(group, capsule(4.3*s, 9.2*s), joint, [0, 57.4*s, 0], 'chest-inner');
  addPart(group, box(11.2*s, 9.6*s, 6.8*s), primary, [0, 57.9*s, 0], 'chest-main');
  for (const side of [-1, 1]) {
    addPart(group, box(5.5*s, 7.4*s, 1.15*s), secondary, [side*3.0*s, 58.4*s, 3.8*s], `chest-front-plate-${side}`, [0, side*0.05, side*0.055]);
    addPart(group, box(4.6*s, 1.1*s, 1.35*s), green, [side*3.0*s, 61.2*s, 4.4*s], `chest-green-${side}`);
  }
  addPart(group, box(1.1*s, 7.8*s, 1.2*s), darkArmor, [0, 58.0*s, 4.0*s], 'sternum-channel');

  for (const side of [-1, 1]) {
    addPart(group, box(4.6*s, 12.8*s, 5.3*s), primary, [side*7.9*s, 61.7*s, -0.3*s], `shoulder-pylon-${side}`, [0, 0, side*0.055]);
    addPart(group, box(1.0*s, 9.0*s, 5.6*s), green, [side*10.0*s, 62.3*s, -0.3*s], `shoulder-pylon-accent-${side}`);
    addPart(group, new THREE.SphereGeometry(2.4*s, 16, 10), joint, [side*6.4*s, 59.0*s, 0], `shoulder-joint-${side}`);

    addPart(group, capsule(1.55*s, 8.7*s), joint, [side*7.0*s, 53.2*s, 0], `upper-arm-frame-${side}`);
    addPart(group, box(4.1*s, 9.6*s, 4.2*s), primary, [side*7.0*s, 53.2*s, 0], `upper-arm-armor-${side}`, [0, 0, side*0.035]);
    addPart(group, new THREE.SphereGeometry(1.8*s, 14, 8), joint, [side*7.25*s, 47.3*s, 0], `elbow-${side}`);
    addPart(group, capsule(1.45*s, 9.2*s), joint, [side*7.35*s, 41.9*s, 0], `forearm-frame-${side}`);
    addPart(group, box(3.8*s, 9.6*s, 4.6*s), secondary, [side*7.35*s, 42.0*s, 0.15*s], `forearm-armor-${side}`, [0.02, 0, side*0.02]);
    addPart(group, box(3.2*s, 1.0*s, 1.1*s), green, [side*7.35*s, 43.6*s, 2.55*s], `forearm-accent-${side}`);

    addPart(group, box(3.4*s, 3.4*s, 2.8*s), darkArmor, [side*7.35*s, 35.3*s, 0.4*s], `hand-palm-${side}`);
    for (let finger = 0; finger < 4; finger += 1) {
      const fx = side*7.35*s + side*(finger-1.5)*0.22*s;
      addPart(group, box(0.38*s, 3.0*s, 0.55*s), joint, [fx, 32.7*s, 0.7*s], `finger-${side}-${finger}`, [0.04, 0, 0]);
    }
  }

  addPart(group, capsule(2.1*s, 3.4*s), joint, [0, 66.1*s, -0.2*s], 'neck-inner');
  addPart(group, box(5.7*s, 3.6*s, 5.6*s), primary, [0, 67.1*s, 0.0], 'neck-armor');
  addPart(group, capsule(2.75*s, 3.5*s), primary, [0, 71.0*s, 0.15*s], 'helmet-core', [0.04, 0, 0], [1.0, 1.0, 0.88]);
  addPart(group, box(5.6*s, 2.9*s, 5.3*s), secondary, [0, 70.6*s, 0.45*s], 'helmet-front', [-0.04, 0, 0]);
  addPart(group, box(4.7*s, 2.0*s, 3.9*s), darkArmor, [0, 68.7*s, 1.25*s], 'jaw', [0.10, 0, 0]);
  addPart(group, box(3.9*s, 0.85*s, 0.7*s), green, [0, 72.1*s, 3.0*s], 'brow-accent');
  addPart(group, box(1.45*s, 0.65*s, 0.45*s), eye, [-1.35*s, 71.55*s, 3.18*s], 'eye-left');
  addPart(group, box(1.45*s, 0.65*s, 0.45*s), eye, [1.35*s, 71.55*s, 3.18*s], 'eye-right');

  addPart(group, new THREE.ConeGeometry(0.58*s, 7.4*s, 5), primary, [0, 76.0*s, -0.25*s], 'helmet-horn', [-0.17, 0, 0]);
  addPart(group, box(1.1*s, 5.4*s, 1.4*s), green, [0, 74.6*s, -2.0*s], 'rear-head-fin', [-0.05, 0, 0]);

  addPart(group, box(4.2*s, 5.8*s, 1.5*s), metal, [0, 64.0*s, -3.75*s], 'entry-plug-port-proxy', [0.06, 0, 0]);
  addPart(group, box(2.8*s, 3.8*s, 0.5*s), darkArmor, [0, 64.1*s, -4.55*s], 'entry-plug-hatch-proxy', [0.06, 0, 0]);

  for (let i = 0; i < 5; i += 1) {
    addPart(group, box((2.8-i*0.12)*s, 1.2*s, 1.2*s), metal, [0, (53.5+i*2.2)*s, -3.8*s], `rear-spine-service-block-${i}`);
  }

  return group;
}
