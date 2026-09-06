import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

async function loadGltfAsset(assetUrl) {
  if (!assetUrl.endsWith('.gz')) return loader.loadAsync(assetUrl);
  if (typeof DecompressionStream === 'undefined') {
    throw new Error('DecompressionStream is unavailable for compressed GLB loading.');
  }

  const response = await fetch(assetUrl);
  if (!response.ok || !response.body) {
    throw new Error(`Failed to fetch compressed GLB: ${response.status}`);
  }

  const decompressed = response.body.pipeThrough(new DecompressionStream('gzip'));
  const buffer = await new Response(decompressed).arrayBuffer();
  const basePath = assetUrl.slice(0, assetUrl.lastIndexOf('/') + 1);
  return loader.parseAsync(buffer, basePath);
}

function stripTemplateNodes(root) {
  const remove = [];
  root.traverse((node) => {
    if (node.name?.startsWith('__template_')) remove.push(node);
  });
  for (const node of remove) node.parent?.remove(node);
}

function fitModelToEvaHeight(object, targetHeight) {
  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);
  if (size.y <= 0) return;

  const scale = targetHeight / size.y;
  object.scale.setScalar(scale);

  const fitted = new THREE.Box3().setFromObject(object);
  const fittedCenter = new THREE.Vector3();
  fitted.getCenter(fittedCenter);
  object.position.set(-fittedCenter.x, -fitted.min.y, -fittedCenter.z);
}

function prepareMeshes(root) {
  root.traverse((node) => {
    if (!node.isMesh) return;
    node.castShadow = true;
    node.receiveShadow = true;
    if (node.material) {
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      for (const mat of materials) {
        if ('roughness' in mat && mat.roughness < 0.22) mat.roughness = 0.22;
        if ('metalness' in mat && mat.metalness > 0.9) mat.metalness = 0.9;
      }
    }
  });
}

export async function replacePlaceholderEva(root, config) {
  if (!config.USE_GLB_EVA) return { loaded: false, reason: 'disabled' };

  const evaInterface = root.children[1];
  if (!evaInterface) return { loaded: false, reason: 'missing-eva-interface' };

  const assetUrl = new URL(config.EVA_ASSET_PATH, import.meta.url).href;
  const gltf = await loadGltfAsset(assetUrl);
  const model = gltf.scene || gltf.scenes?.[0];
  if (!model) return { loaded: false, reason: 'empty-gltf' };

  model.name = 'eva-glb-hero';
  stripTemplateNodes(model);
  prepareMeshes(model);
  fitModelToEvaHeight(model, config.EVA_HEIGHT);
  evaInterface.add(model);

  const placeholder = evaInterface.getObjectByName('eva-visual-blockout-m2-5');
  const fine = evaInterface.getObjectByName('eva-fine-detail-root');
  const hero = evaInterface.getObjectByName('eva-hero-shell-detail');
  if (placeholder) placeholder.visible = false;
  if (fine) fine.visible = false;
  if (hero) hero.visible = false;

  return { loaded: true, object: model };
}
