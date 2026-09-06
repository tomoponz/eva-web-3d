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
  'src/cage/loadEvaMicroVoxel.js',
  'assets/models/eva-microvoxel-m5.bin',
  'assets/models/eva-microvoxel-m5.json',
  'scripts/generate-eva-microvoxel.py',
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
  'LAUNCH_INTERFACE_OFFSET', 'USE_MICRO_VOXEL_EVA', 'EVA_MODEL_VARIANT',
  'EVA_MICRO_VOXEL_ASSET_PATH', 'EVA_MICRO_VOXEL_GRAIN_SCALE',
  'EVA_MICRO_VOXEL_NEAR_DISTANCE', 'EVA_MICRO_VOXEL_MAX_INSTANCES',
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
if (!config.USE_MICRO_VOXEL_EVA || config.EVA_MODEL_VARIANT !== 'microvoxel-m5-production') {
  throw new Error('Runtime must identify and enable the M5 micro-voxel EVA variant.');
}
if (!config.EVA_MICRO_VOXEL_ASSET_PATH.endsWith('eva-microvoxel-m5.bin')) {
  throw new Error('Runtime must point at the M5 micro-voxel binary.');
}
if (config.EVA_MICRO_VOXEL_GRAIN_SCALE < 0.9 || config.EVA_MICRO_VOXEL_GRAIN_SCALE > 1.0) {
  throw new Error('Micro-voxel grain scale must preserve only a subtle inter-cell seam.');
}

const source = await readFile(new URL('../src/config.js', import.meta.url), 'utf8');
if (/EVA_HEIGHT\s*:\s*40\b/.test(source)) throw new Error('Forbidden fixed 40m EVA default detected.');
if (/CAGE_FLUID_TYPE\s*:\s*['"]LCL['"]/.test(source)) throw new Error('Fluid identity must not be fixed to LCL.');

const asset = await readFile(new URL('../assets/models/eva-microvoxel-m5.bin', import.meta.url));
if (asset.length < 500_000 || asset.length > 2_000_000) {
  throw new Error(`M5 micro-voxel asset outside production byte budget: ${asset.length}`);
}
if (asset.toString('ascii', 0, 4) !== 'EVVX') throw new Error('M5 micro-voxel asset has invalid magic.');
const version = asset.readUInt16LE(4);
const voxelSize = asset.readFloatLE(6);
const count = asset.readUInt32LE(22);
if (version !== 2) throw new Error(`Unexpected M5 micro-voxel version: ${version}`);
if (voxelSize < 0.10 || voxelSize > 0.14) throw new Error(`M5 voxel size must remain near 0.12m: ${voxelSize}`);
if (count < 120_000 || count > config.EVA_MICRO_VOXEL_MAX_INSTANCES) {
  throw new Error(`M5 surface voxel budget regression: ${count}`);
}
if (26 + count * 7 !== asset.length) throw new Error('M5 micro-voxel record count does not match asset length.');

const meta = JSON.parse(await readFile(new URL('../assets/models/eva-microvoxel-m5.json', import.meta.url), 'utf8'));
if (meta.surface_voxels !== count) throw new Error('M5 metadata voxel count mismatch.');

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
  voxelAsset: config.EVA_MICRO_VOXEL_ASSET_PATH,
  voxelAssetBytes: asset.length,
  voxelSize,
  surfaceVoxels: count,
  entryPlugKeepOutCenterY: config.ENTRY_PLUG_KEEP_OUT.centerY
}, null, 2));
