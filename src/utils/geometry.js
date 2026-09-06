import * as THREE from 'three';

export function addBox(group, size, position, material, name = '') {
  const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(position.x, position.y, position.z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.name = name;
  group.add(mesh);
  return mesh;
}

export function makeWireBox(size, color = 0xffaa55) {
  const box = new THREE.BoxGeometry(size.x, size.y, size.z);
  const edges = new THREE.EdgesGeometry(box);
  return new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.85 })
  );
}

export function registerAabb(colliders, center, size, tag = 'solid') {
  colliders.push({
    tag,
    min: {
      x: center.x - size.x / 2,
      y: center.y - size.y / 2,
      z: center.z - size.z / 2
    },
    max: {
      x: center.x + size.x / 2,
      y: center.y + size.y / 2,
      z: center.z + size.z / 2
    }
  });
}
