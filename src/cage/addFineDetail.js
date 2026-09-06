import * as THREE from 'three';
import { addBox } from '../utils/geometry.js';

function mat(color, roughness = 0.6, metalness = 0.1, emissive = 0x000000, emissiveIntensity = 0) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness, emissive, emissiveIntensity });
}

function addMesh(group, geometry, material, position, name, rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position.x, position.y, position.z);
  mesh.rotation.set(...rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function cylinderBetween(group, a, b, radius, material, name, segments = 10) {
  const start = new THREE.Vector3(a.x, a.y, a.z);
  const end = new THREE.Vector3(b.x, b.y, b.z);
  const delta = end.clone().sub(start);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, delta.length(), segments), material);
  mesh.position.copy(start.clone().add(end).multiplyScalar(0.5));
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.clone().normalize());
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

function addRing(group, radius, tube, material, position, name, rotation = [Math.PI / 2, 0, 0]) {
  return addMesh(group, new THREE.TorusGeometry(radius, tube, 8, 18), material, position, name, rotation);
}

function addBolt(group, radius, depth, material, position, name, rotation = [Math.PI / 2, 0, 0]) {
  return addMesh(group, new THREE.CylinderGeometry(radius, radius, depth, 8), material, position, name, rotation);
}

function addEvaFineDetail(root, config, materials) {
  const eva = root.getObjectByName('eva-visual-blockout-m2') || root.getObjectByName('eva-visual-blockout-m2-5');
  if (!eva || eva.getObjectByName('eva-fine-detail-root')) return;

  const detail = new THREE.Group();
  detail.name = 'eva-fine-detail-root';
  eva.add(detail);

  const s = config.EVA_HEIGHT / 80;
  const { purpleDark, purpleLight, green, dark, metal, metalDark, sensor, orange, rubber } = materials;

  for (const side of [-1, 1]) {
    const x = side * 3.1 * s;
    for (let i = 0; i < 4; i += 1) {
      addBox(detail, { x: 1.05*s, y: 0.20*s, z: 3.1*s },
        { x: x + (i-1.5)*1.05*s, y: 0.42*s, z: 2.7*s }, metalDark, `sole-rib-${side}-${i}`);
    }
    addBox(detail, { x: 4.4*s, y: 0.34*s, z: 0.34*s }, { x, y: 4.0*s, z: 3.86*s }, metal, `toe-edge-${side}`);
    for (const dx of [-1.55, 1.55]) {
      addBolt(detail, 0.14*s, 0.16*s, metal, { x: x+dx*s, y: 3.45*s, z: 3.95*s }, `foot-fastener-${side}-${dx}`);
    }
    addRing(detail, 1.72*s, 0.16*s, metalDark, { x, y: 6.15*s, z: 0 }, `ankle-service-ring-${side}`);

    addBox(detail, { x: 3.15*s, y: 0.30*s, z: 0.20*s }, { x, y: 19.1*s, z: 2.88*s }, purpleLight, `shin-upper-ridge-${side}`);
    addBox(detail, { x: 2.85*s, y: 0.26*s, z: 0.22*s }, { x, y: 12.0*s, z: 2.88*s }, purpleDark, `shin-lower-ridge-${side}`);
    for (let i = 0; i < 5; i += 1) {
      addBox(detail, { x: 0.20*s, y: 1.05*s, z: 0.16*s },
        { x: x-side*0.75*s + (i-2)*0.38*s, y: 14.2*s, z: 2.95*s }, metalDark, `shin-vent-${side}-${i}`);
    }
    for (const y of [10.8, 13.8, 16.8, 19.8]) {
      addBolt(detail, 0.13*s, 0.15*s, metal, { x: x+side*1.88*s, y: y*s, z: 2.10*s }, `shin-bolt-${side}-${y}`);
    }

    addRing(detail, 0.82*s, 0.16*s, metal, { x: x+side*2.16*s, y: 24.1*s, z: 0 }, `knee-lock-ring-${side}`, [0, Math.PI/2, 0]);
    addBox(detail, { x: 2.5*s, y: 0.34*s, z: 0.20*s }, { x, y: 25.55*s, z: 3.18*s }, orange, `knee-insert-${side}`);

    const thighX = side * 2.75 * s;
    addBox(detail, { x: 3.75*s, y: 0.25*s, z: 0.22*s }, { x: thighX, y: 37.7*s, z: 2.72*s }, purpleLight, `thigh-seam-upper-${side}`);
    addBox(detail, { x: 3.45*s, y: 0.25*s, z: 0.22*s }, { x: thighX, y: 30.4*s, z: 2.72*s }, purpleDark, `thigh-seam-lower-${side}`);
    for (let i = 0; i < 4; i += 1) {
      addBox(detail, { x: 0.22*s, y: 0.95*s, z: 0.16*s },
        { x: thighX+(i-1.5)*0.46*s, y: 33.8*s, z: 2.92*s }, metalDark, `thigh-vent-${side}-${i}`);
    }
  }

  addBox(detail, { x: 5.6*s, y: 0.35*s, z: 0.25*s }, { x: 0, y: 45.15*s, z: 3.78*s }, green, 'pelvis-accent-strip');
  for (const side of [-1, 1]) {
    addBox(detail, { x: 1.05*s, y: 2.6*s, z: 0.28*s }, { x: side*4.8*s, y: 43.7*s, z: 3.10*s }, purpleLight, `hip-edge-${side}`);
    addBolt(detail, 0.15*s, 0.16*s, metal, { x: side*2.65*s, y: 44.4*s, z: 3.90*s }, `pelvis-bolt-${side}`);
  }
  for (let i = 0; i < 6; i += 1) {
    addBox(detail, { x: (5.1+i*0.28)*s, y: 0.16*s, z: 0.18*s },
      { x: 0, y: (47.0+i*1.28)*s, z: 3.00*s }, dark, `abdomen-gap-${i}`);
  }

  for (const side of [-1, 1]) {
    addBox(detail, { x: 4.5*s, y: 0.24*s, z: 0.28*s }, { x: side*3.0*s, y: 61.75*s, z: 4.75*s }, green, `chest-upper-edge-${side}`);
    addBox(detail, { x: 4.0*s, y: 0.22*s, z: 0.25*s }, { x: side*3.0*s, y: 55.0*s, z: 4.48*s }, purpleDark, `chest-lower-edge-${side}`);
    for (let i = 0; i < 5; i += 1) {
      addBox(detail, { x: 0.24*s, y: 1.55*s, z: 0.15*s },
        { x: side*3.0*s+(i-2)*0.58*s, y: 58.25*s, z: 4.55*s }, metalDark, `chest-vent-${side}-${i}`);
    }
    for (const dy of [-2.2, 2.2]) {
      for (const dx of [-1.65, 1.65]) {
        addBolt(detail, 0.13*s, 0.15*s, metal,
          { x: side*3.0*s+dx*s, y: (58.35+dy)*s, z: 4.62*s }, `chest-fastener-${side}-${dx}-${dy}`);
      }
    }
    cylinderBetween(detail,
      { x: side*5.25*s, y: 57.0*s, z: -2.0*s },
      { x: side*5.7*s, y: 61.4*s, z: -2.2*s }, 0.20*s, rubber, `chest-rear-cable-${side}`);
  }
  addBox(detail, { x: 0.52*s, y: 6.5*s, z: 0.18*s }, { x: 0, y: 58.0*s, z: 4.72*s }, metal, 'sternum-service-rail');
  for (const y of [55.6, 57.2, 58.8, 60.4]) {
    addBolt(detail, 0.14*s, 0.16*s, metal, { x: 0, y: y*s, z: 4.90*s }, `sternum-fastener-${y}`);
  }
  addMesh(detail, new THREE.CylinderGeometry(0.34*s, 0.34*s, 0.38*s, 12), sensor,
    { x: 0, y: 62.0*s, z: 4.70*s }, 'chest-status-sensor', [Math.PI/2, 0, 0]);

  for (const side of [-1, 1]) {
    const px = side*7.9*s;
    addBox(detail, { x: 3.3*s, y: 0.28*s, z: 0.24*s }, { x: px, y: 67.75*s, z: 2.40*s }, purpleLight, `pylon-cap-ridge-${side}`);
    addBox(detail, { x: 0.32*s, y: 8.0*s, z: 0.24*s }, { x: side*10.12*s, y: 62.2*s, z: 2.48*s }, green, `pylon-edge-light-${side}`);
    for (const y of [57.8, 60.0, 62.2, 64.4, 66.6]) {
      addBolt(detail, 0.14*s, 0.16*s, metal, { x: px+side*2.15*s, y: y*s, z: 2.20*s }, `pylon-bolt-${side}-${y}`);
    }
    for (let i = 0; i < 4; i += 1) {
      addBox(detail, { x: 0.20*s, y: 1.65*s, z: 0.16*s },
        { x: px+(i-1.5)*0.45*s, y: 62.4*s, z: 2.55*s }, metalDark, `pylon-vent-${side}-${i}`);
    }

    const armX = side*7.0*s;
    addBox(detail, { x: 2.9*s, y: 0.24*s, z: 0.22*s }, { x: armX, y: 56.9*s, z: 2.26*s }, purpleLight, `upper-arm-ridge-${side}`);
    addRing(detail, 1.75*s, 0.15*s, metal, { x: side*7.25*s, y: 47.3*s, z: 0 }, `elbow-service-ring-${side}`, [0, Math.PI/2, 0]);
    addBox(detail, { x: 2.7*s, y: 0.25*s, z: 0.22*s }, { x: side*7.35*s, y: 45.7*s, z: 2.72*s }, green, `forearm-top-ridge-${side}`);
    for (let i = 0; i < 5; i += 1) {
      addBox(detail, { x: 0.20*s, y: 0.95*s, z: 0.15*s },
        { x: side*7.35*s+(i-2)*0.38*s, y: 40.6*s, z: 2.75*s }, metalDark, `forearm-vent-${side}-${i}`);
    }
    addRing(detail, 1.22*s, 0.13*s, metalDark, { x: side*7.35*s, y: 36.9*s, z: 0 }, `wrist-service-ring-${side}`);
    for (let finger = 0; finger < 4; finger += 1) {
      const fx = side*7.35*s+(finger-1.5)*0.50*s;
      addMesh(detail, new THREE.SphereGeometry(0.22*s, 8, 6), metalDark,
        { x: fx, y: 33.1*s, z: 0.75*s }, `finger-knuckle-${side}-${finger}`);
    }
  }

  for (const y of [64.9, 65.75, 66.6]) {
    addRing(detail, 2.05*s, 0.13*s, metalDark, { x: 0, y: y*s, z: -0.2*s }, `neck-seal-${y}`);
  }
  for (const side of [-1, 1]) {
    addRing(detail, 0.70*s, 0.13*s, metal, { x: side*2.78*s, y: 70.65*s, z: -0.25*s }, `temple-ring-${side}`, [0, Math.PI/2, 0]);
    addMesh(detail, new THREE.CylinderGeometry(0.38*s, 0.38*s, 0.45*s, 12), sensor,
      { x: side*3.02*s, y: 70.65*s, z: -0.25*s }, `temple-sensor-${side}`, [0, 0, Math.PI/2]);
    for (let i = 0; i < 4; i += 1) {
      addBox(detail, { x: 0.16*s, y: 0.58*s, z: 0.14*s },
        { x: side*1.75*s+(i-1.5)*0.28*s, y: 69.25*s, z: 3.12*s }, metalDark, `jaw-vent-${side}-${i}`);
    }
    addBolt(detail, 0.12*s, 0.14*s, metal, { x: side*2.15*s, y: 72.0*s, z: 3.15*s }, `brow-fastener-${side}`);
  }
  addBox(detail, { x: 2.1*s, y: 0.18*s, z: 0.14*s }, { x: 0, y: 69.15*s, z: 3.38*s }, metalDark, 'face-mouth-slit');
  addBox(detail, { x: 0.34*s, y: 3.2*s, z: 0.18*s }, { x: 0, y: 75.2*s, z: 0.45*s }, green, 'horn-center-inset');

  addRing(detail, 1.48*s, 0.16*s, metalDark, { x: 0, y: 64.1*s, z: -4.88*s }, 'entry-plug-port-service-ring', [0, 0, 0]);
  for (const side of [-1, 1]) {
    addBolt(detail, 0.13*s, 0.14*s, metal, { x: side*1.15*s, y: 65.6*s, z: -4.84*s }, `entry-port-bolt-top-${side}`);
    addBolt(detail, 0.13*s, 0.14*s, metal, { x: side*1.15*s, y: 62.6*s, z: -4.84*s }, `entry-port-bolt-bottom-${side}`);
    cylinderBetween(detail,
      { x: side*1.15*s, y: 54.5*s, z: -4.15*s },
      { x: side*1.55*s, y: 62.3*s, z: -4.35*s }, 0.16*s, rubber, `dorsal-service-conduit-${side}`);
  }
}

function addCageFineDetail(root, config, materials) {
  const architecture = root.children[0];
  const evaInterface = root.children[1];
  const humanAccess = root.children[2];
  const launchInterface = root.children[3];
  if (!architecture || architecture.getObjectByName('cage-fine-detail-root')) return;

  const detail = new THREE.Group();
  detail.name = 'cage-fine-detail-root';
  architecture.add(detail);

  const eva = config.EVA_HEIGHT;
  const w = config.CAGE_WIDTH;
  const d = config.CAGE_DEPTH;
  const h = config.CAGE_HEIGHT;
  const { steel, metal, metalDark, dark, lampWarm, lampGreen, rubber } = materials;

  const boltGeo = new THREE.CylinderGeometry(eva*0.0021, eva*0.0021, eva*0.0045, 8);
  const bolts = new THREE.InstancedMesh(boltGeo, metal, 8 * 9 * 4 * 2);
  const matrix = new THREE.Matrix4();
  const qLeft = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, Math.PI/2));
  const qRight = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, -Math.PI/2));
  const unit = new THREE.Vector3(1, 1, 1);
  let bi = 0;
  for (const side of [-1, 1]) {
    const x = side*(w/2-eva*0.022);
    const q = side < 0 ? qLeft : qRight;
    for (let row = 0; row < 8; row += 1) {
      const y = h*(0.09+row*0.11);
      for (let col = 0; col < 9; col += 1) {
        const z = THREE.MathUtils.lerp(-d*0.39, d*0.37, col/8);
        for (const dy of [-eva*0.010, eva*0.010]) {
          for (const dz of [-eva*0.010, eva*0.010]) {
            matrix.compose(new THREE.Vector3(x, y+dy, z+dz), q, unit);
            bolts.setMatrixAt(bi++, matrix);
          }
        }
      }
    }
  }
  bolts.count = bi;
  bolts.castShadow = true;
  bolts.name = 'wall-fastener-field';
  detail.add(bolts);

  for (const side of [-1, 1]) {
    const x = side*(w/2-eva*0.070);
    for (const zRatio of [-0.34, -0.18, 0, 0.18, 0.34]) {
      const z = d*zRatio;
      for (const yRatio of [0.16, 0.32, 0.48, 0.64, 0.80]) {
        addBox(detail, { x: eva*0.030, y: eva*0.012, z: eva*0.010 }, { x, y: h*yRatio, z }, steel, 'service-bracket');
        addBox(detail, { x: eva*0.022, y: eva*0.036, z: eva*0.026 },
          { x: x-side*eva*0.018, y: h*yRatio+eva*0.030, z }, dark, 'junction-box');
        addBox(detail, { x: eva*0.006, y: eva*0.005, z: eva*0.006 },
          { x: x-side*eva*0.031, y: h*yRatio+eva*0.041, z }, lampGreen, 'junction-indicator');
      }
    }
  }

  for (const side of [-1, 1]) {
    const x = side*(w/2-eva*0.050);
    for (const zRatio of [-0.33, -0.14, 0.08, 0.29]) {
      const z = d*zRatio;
      for (const yRatio of [0.18, 0.36, 0.54, 0.72]) {
        addRing(detail, eva*0.010, eva*0.0022, steel, { x, y: h*yRatio, z }, 'service-pipe-flange');
      }
    }
  }

  for (const side of [-1, 1]) {
    const x = side*w*0.23;
    for (let i = 0; i < 24; i += 1) {
      const z = THREE.MathUtils.lerp(-d*0.10, d*0.40, i/23);
      addBox(humanAccess, { x: eva*0.012, y: 0.024, z: 0.10 }, { x, y: 0.065, z }, metalDark, 'floor-drain-bar');
    }
  }
  for (const zRatio of [-0.04, 0.14, 0.32]) {
    const z = d*zRatio;
    addBox(humanAccess, { x: w*0.38, y: 0.018, z: 0.055 }, { x: 0, y: 0.070, z }, rubber, 'floor-expansion-joint');
    for (const xRatio of [-0.16, -0.08, 0, 0.08, 0.16]) {
      addBolt(humanAccess, 0.055, 0.04, metal, { x: w*xRatio, y: 0.090, z }, 'floor-joint-fastener', [0, 0, 0]);
    }
  }

  const deckY = config.CATWALK_ELEVATIONS[0] ?? eva*0.15;
  const deckW = w*0.22;
  const deckD = d*0.72;
  const wallT = Math.max(1.0, eva*0.022);
  const deckX = -w/2 + deckW/2 + wallT*1.2;
  const deckZ = -d*0.02;
  for (let i = 0; i < 12; i += 1) {
    const z = THREE.MathUtils.lerp(deckZ-deckD*0.44, deckZ+deckD*0.44, i/11);
    addBox(humanAccess, { x: deckW*0.90, y: eva*0.007, z: eva*0.008 },
      { x: deckX, y: deckY-0.46, z }, steel, 'deck-cross-member-fine');
    for (const x of [deckX-deckW*0.40, deckX, deckX+deckW*0.40]) {
      addBolt(humanAccess, 0.05, 0.04, metal, { x, y: deckY+0.09, z }, 'deck-floor-bolt', [0, 0, 0]);
    }
  }

  for (const side of [-1, 1]) {
    const x = side*eva*0.145;
    const y = eva*0.575;
    addRing(evaInterface, eva*0.020, eva*0.0024, metal, { x, y, z: 2.8 }, `restraint-pivot-ring-${side}`, [0, Math.PI/2, 0]);
    for (const dy of [-eva*0.020, eva*0.020]) {
      addBolt(evaInterface, eva*0.003, eva*0.006, metal, { x, y: y+dy, z: 2.88 }, `restraint-pivot-bolt-${side}-${dy}`);
    }
    addBox(evaInterface, { x: eva*0.010, y: eva*0.010, z: eva*0.014 },
      { x: x-side*eva*0.030, y: y+eva*0.040, z: 2.3 }, lampWarm, `restraint-status-lamp-${side}`);
  }

  for (let i = 0; i < 24; i += 1) {
    const z = THREE.MathUtils.lerp(d*0.05, config.LAUNCH_INTERFACE_OFFSET.z, i/23);
    for (const x of [-2.2, 2.2]) {
      addBox(launchInterface, { x: 0.48, y: 0.12, z: 0.30 }, { x, y: 0.24, z }, metalDark, 'launch-rail-clamp-fine');
      addBolt(launchInterface, 0.065, 0.045, metal, { x, y: 0.34, z }, 'launch-rail-fastener', [0, 0, 0]);
    }
  }

  for (const side of [-1, 1]) {
    for (const yRatio of [0.17, 0.36, 0.56, 0.75]) {
      const x = side*(w/2-eva*0.088);
      const y = h*yRatio;
      const z = d*0.20;
      addBox(detail, { x: eva*0.018, y: eva*0.010, z: eva*0.08 }, { x, y, z }, steel, 'light-bracket-fine');
      for (const dz of [-0.035, 0, 0.035]) {
        addBox(detail, { x: eva*0.002, y: eva*0.030, z: eva*0.002 },
          { x: x-side*eva*0.015, y, z: z+eva*dz }, metal, 'light-cage-bar');
      }
    }
  }
}

export function addFineDetail(root, config) {
  const materials = {
    purpleDark: mat(0x2b2036, 0.58, 0.10),
    purpleLight: mat(0x6b5877, 0.48, 0.08),
    green: mat(0x728c42, 0.48, 0.04),
    dark: mat(0x181b1e, 0.82, 0.08),
    metal: mat(0x555c61, 0.42, 0.74),
    metalDark: mat(0x2e3438, 0.54, 0.68),
    steel: mat(0x4d5458, 0.50, 0.68),
    sensor: mat(0x9edcff, 0.24, 0.02, 0x3c8db9, 1.5),
    orange: mat(0xa45829, 0.55, 0.04),
    rubber: mat(0x090b0c, 0.95, 0.01),
    lampWarm: mat(0xe8dfca, 0.42, 0.02, 0xffb85a, 1.7),
    lampGreen: mat(0x94b579, 0.42, 0.02, 0x4e9138, 1.5)
  };

  addEvaFineDetail(root, config, materials);
  addCageFineDetail(root, config, materials);
}
