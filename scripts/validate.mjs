import { access, readFile } from 'node:fs/promises';
import { CAGE_CONFIG, deriveConfig } from '../src/config.js';

const required = [
  'index.html',
  'styles.css',
  'src/main.js',
  'src/config.js',
  'src/cage/createCageScene.js',
  'src/cage/createEvaPlaceholder.js',
  'src/cage/addFineDetail.js',
  'src/cage/loadEvaGlb.js',
  'assets/models/eva-unit-continuous-prod.glb',
  'scripts/generate-eva-web-production.py',
  'src/cage/addIndustrialDetail.js',
  'src/player/FirstPersonController.js',
  'docs/design/eva-cage/README.md',
  'docs/design/eva-cage/unresolved.md'
];

for (const path of required) await access(new URL(`../${path}`, import.meta.url));

const config = deriveConfig(CAGE_CONFIG);
const requiredParams = [
  'EVA_HEIGHT', 'CAGE_WIDTH', 'CAGE_DEPTH', 'CAGE_HEIGHT', 'CATWALK_LEVEL_COUNT',
  'LOWER_PIT_DEPTH', 'CAGE_FLUID_ENABLED', 'CAGE_FLUID_LEVEL', 'ENTRY_PLUG_KEEP_OUT',
  'LAUNCH_INTERFACE_OFFSET', 'USE_GLB_EVA', 'EVA_MODEL_VARIANT', 'EVA_ASSET_PATH',
  'DEBUG_FLY_MODE', 'DEBUG_FLY_SPEED', 'DEBUG_FLY_FAST_SPEED', 'DEBUG_BRIGHT_MODE'
];
for (const key of requiredParams) {
  if (config[key] === undefined || config[key] === null) throw new Error(`Missing parameter: ${key}`);
}
if (config.ENTRY_PLUG_KEEP_OUT.centerY <= config.EVA_HEIGHT * 0.5) {
  throw new Error('Entry Plug keep-out must remain in dorsal upper-body region.');
}
if (config.DEBUG_FLY_SPEED <= 0 || config.DEBUG_FLY_FAST_SPEED < config.DEBUG_FLY_SPEED) {
  throw new Error('Debug fly speeds must be positive and fast speed must be >= normal fly speed.');
}
if (config.EVA_MODEL_VARIANT !== 'continuous-m4-production') {
  throw new Error('Runtime must identify the continuous M4 production EVA variant.');
}
if (!config.EVA_ASSET_PATH.endsWith('eva-unit-continuous-prod.glb')) {
  throw new Error('Runtime must point at the continuous production EVA GLB.');
}

const source = await readFile(new URL('../src/config.js', import.meta.url), 'utf8');
if (/EVA_HEIGHT\s*:\s*40\b/.test(source)) throw new Error('Forbidden fixed 40m EVA default detected.');
if (/CAGE_FLUID_TYPE\s*:\s*['"]LCL['"]/.test(source)) throw new Error('Fluid identity must not be fixed to LCL.');

const asset = await readFile(new URL('../assets/models/eva-unit-continuous-prod.glb', import.meta.url));
if (asset.length < 100_000 || asset.length > 2_000_000) {
  throw new Error(`Continuous EVA GLB size outside Web production budget: ${asset.length}`);
}
if (asset.toString('ascii', 0, 4) !== 'glTF') throw new Error('Production EVA asset is not a GLB.');
if (asset.readUInt32LE(4) !== 2) throw new Error('Production EVA GLB must use glTF 2.0.');
if (asset.readUInt32LE(8) !== asset.length) throw new Error('Production EVA GLB declared length is invalid.');

const jsonChunkLength = asset.readUInt32LE(12);
const jsonChunkType = asset.readUInt32LE(16);
if (jsonChunkType !== 0x4E4F534A) throw new Error('First GLB chunk must be JSON.');
const gltf = JSON.parse(asset.toString('utf8', 20, 20 + jsonChunkLength).trim());
if (!Array.isArray(gltf.meshes) || gltf.meshes.length < 1) throw new Error('Production EVA GLB has no mesh.');
if (!Array.isArray(gltf.accessors) || gltf.accessors.length < 1) throw new Error('Production EVA GLB has no accessors.');

let triangles = 0;
for (const mesh of gltf.meshes) {
  for (const primitive of mesh.primitives ?? []) {
    if (primitive.mode !== undefined && primitive.mode !== 4) continue;
    if (primitive.indices !== undefined) triangles += Math.floor(gltf.accessors[primitive.indices].count / 3);
  }
}
if (triangles < 20_000 || triangles > 50_000) {
  throw new Error(`Continuous EVA triangle budget regression: ${triangles}`);
}

console.log('Validation passed.');
console.log(JSON.stringify({
  EVA_HEIGHT: config.EVA_HEIGHT,
  CAGE_WIDTH: config.CAGE_WIDTH,
  CAGE_DEPTH: config.CAGE_DEPTH,
  CAGE_HEIGHT: config.CAGE_HEIGHT,
  CATWALK_LEVEL_COUNT: config.CATWALK_LEVEL_COUNT,
  LOWER_PIT_DEPTH: config.LOWER_PIT_DEPTH,
  fluid: config.CAGE_FLUID_ENABLED,
  evaVariant: config.EVA_MODEL_VARIANT,
  evaAsset: config.EVA_ASSET_PATH,
  evaAssetBytes: asset.length,
  evaTriangles: triangles,
  entryPlugKeepOutCenterY: config.ENTRY_PLUG_KEEP_OUT.centerY
}, null, 2));
