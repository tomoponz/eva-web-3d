import * as THREE from 'three';

const MATERIALS = {
  1: { color: 0x4c3760, roughness: 0.48, metalness: 0.10, emissive: 0x000000, emissiveIntensity: 0 },
  2: { color: 0x181b1f, roughness: 0.76, metalness: 0.18, emissive: 0x000000, emissiveIntensity: 0 },
  3: { color: 0x78964a, roughness: 0.46, metalness: 0.04, emissive: 0x000000, emissiveIntensity: 0 },
  4: { color: 0x666d73, roughness: 0.34, metalness: 0.78, emissive: 0x000000, emissiveIntensity: 0 },
  5: { color: 0xb1602a, roughness: 0.55, metalness: 0.05, emissive: 0x000000, emissiveIntensity: 0 },
  6: { color: 0xb6ff6e, roughness: 0.24, metalness: 0.00, emissive: 0x67d32e, emissiveIntensity: 1.8 },
};

function parseVoxelAsset(buffer) {
  const view = new DataView(buffer);
  if (view.byteLength < 26) throw new Error('Micro-voxel payload is too small.');
  const magic = String.fromCharCode(view.getUint8(0), view.getUint8(1), view.getUint8(2), view.getUint8(3));
  if (magic !== 'EVVX') throw new Error(`Unexpected micro-voxel magic: ${magic}`);
  const version = view.getUint16(4, true);
  if (version !== 2) throw new Error(`Unsupported micro-voxel version: ${version}`);
  const voxelSize = view.getFloat32(6, true);
  const origin = new THREE.Vector3(
    view.getFloat32(10, true),
    view.getFloat32(14, true),
    view.getFloat32(18, true),
  );
  const count = view.getUint32(22, true);
  const recordBytes = 7;
  if (26 + count * recordBytes !== view.byteLength) {
    throw new Error(`Micro-voxel payload length mismatch: count=${count} bytes=${view.byteLength}`);
  }

  const records = new Array(count);
  const perMaterial = new Map();
  let offset = 26;
  for (let i = 0; i < count; i += 1) {
    const ix = view.getUint16(offset, true);
    const iy = view.getUint16(offset + 2, true);
    const iz = view.getUint16(offset + 4, true);
    const material = view.getUint8(offset + 6);
    offset += recordBytes;
    const x = origin.x + ix * voxelSize;
    const y = origin.y + iy * voxelSize;
    const z = origin.z + iz * voxelSize;
    const record = { x, y, z, material };
    records[i] = record;
    if (!perMaterial.has(material)) perMaterial.set(material, []);
    perMaterial.get(material).push(record);
  }
  return { voxelSize, records, perMaterial };
}

function hideLegacyEva(evaInterface) {
  for (const name of [
    'eva-visual-blockout-m2-5',
    'eva-visual-blockout-m2',
    'eva-fine-detail-root',
    'eva-hero-shell-detail',
    'eva-glb-prototype',
    'eva-glb-production',
  ]) {
    const object = evaInterface.getObjectByName(name);
    if (object) object.visible = false;
  }
}

function makeMaterial(spec) {
  return new THREE.MeshStandardMaterial({
    color: spec.color,
    roughness: spec.roughness,
    metalness: spec.metalness,
    emissive: spec.emissive,
    emissiveIntensity: spec.emissiveIntensity,
  });
}

function buildPointLod(records, voxelSize) {
  const positions = new Float32Array(records.length * 3);
  const colors = new Float32Array(records.length * 3);
  const color = new THREE.Color();
  for (let i = 0; i < records.length; i += 1) {
    const record = records[i];
    positions[i * 3] = record.x;
    positions[i * 3 + 1] = record.y;
    positions[i * 3 + 2] = record.z;
    color.setHex((MATERIALS[record.material] ?? MATERIALS[2]).color);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.computeBoundingSphere();
  const material = new THREE.PointsMaterial({
    size: voxelSize * 1.22,
    vertexColors: true,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geometry, material);
  points.name = 'eva-microvoxel-point-lod';
  return points;
}

function buildCubeLod(perMaterial, voxelSize, grainScale) {
  const group = new THREE.Group();
  group.name = 'eva-microvoxel-cube-lod';
  const cubeSize = voxelSize * grainScale;
  const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
  const matrix = new THREE.Matrix4();
  for (const [materialId, records] of perMaterial.entries()) {
    const spec = MATERIALS[materialId] ?? MATERIALS[2];
    const mesh = new THREE.InstancedMesh(geometry, makeMaterial(spec), records.length);
    mesh.name = `eva-microvoxel-material-${materialId}`;
    mesh.castShadow = materialId !== 6;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    for (let i = 0; i < records.length; i += 1) {
      const record = records[i];
      matrix.makeTranslation(record.x, record.y, record.z);
      mesh.setMatrixAt(i, matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    group.add(mesh);
  }
  return group;
}

export async function loadEvaMicroVoxel(root, config) {
  if (!config.USE_MICRO_VOXEL_EVA) return { loaded: false, reason: 'disabled' };
  const evaInterface = root.children[1];
  if (!evaInterface) return { loaded: false, reason: 'missing-eva-interface' };

  const assetUrl = new URL(config.EVA_MICRO_VOXEL_ASSET_PATH, import.meta.url).href;
  const response = await fetch(assetUrl, { cache: 'no-cache' });
  if (!response.ok) throw new Error(`Failed to fetch micro-voxel asset: ${response.status}`);
  const parsed = parseVoxelAsset(await response.arrayBuffer());
  if (parsed.records.length > config.EVA_MICRO_VOXEL_MAX_INSTANCES) {
    throw new Error(`Micro-voxel count ${parsed.records.length} exceeds configured safety budget.`);
  }

  const group = new THREE.Group();
  group.name = 'eva-microvoxel-m5';
  group.scale.setScalar(config.EVA_HEIGHT / 80);
  const cubeLod = buildCubeLod(parsed.perMaterial, parsed.voxelSize, config.EVA_MICRO_VOXEL_GRAIN_SCALE);
  const pointLod = buildPointLod(parsed.records, parsed.voxelSize);
  group.add(pointLod, cubeLod);
  evaInterface.add(group);
  hideLegacyEva(evaInterface);

  const center = new THREE.Vector3(0, config.EVA_HEIGHT * 0.5, 0);
  const nearDistance = config.EVA_MICRO_VOXEL_NEAR_DISTANCE;
  const hysteresis = 5;
  let nearMode = true;

  function setNearMode(enabled) {
    nearMode = enabled;
    cubeLod.visible = enabled;
    pointLod.visible = !enabled;
  }
  setNearMode(true);

  return {
    loaded: true,
    object: group,
    voxelSize: parsed.voxelSize * (config.EVA_HEIGHT / 80),
    voxelCount: parsed.records.length,
    get mode() { return nearMode ? 'MICRO-CUBES' : 'POINT-LOD'; },
    update(camera) {
      const distance = camera.position.distanceTo(center);
      if (nearMode && distance > nearDistance + hysteresis) setNearMode(false);
      else if (!nearMode && distance < nearDistance - hysteresis) setNearMode(true);
      return nearMode;
    },
  };
}
