import { access, readFile } from 'node:fs/promises';
import { CAGE_CONFIG, deriveConfig } from '../src/config.js';

const required = [
  'index.html',
  'styles.css',
  'src/main.js',
  'src/config.js',
  'src/cage/createCageScene.js',
  'src/cage/createEvaPlaceholder.js',
  'src/player/FirstPersonController.js',
  'docs/design/eva-cage/README.md',
  'docs/design/eva-cage/unresolved.md'
];

for (const path of required) await access(new URL(`../${path}`, import.meta.url));

const config = deriveConfig(CAGE_CONFIG);
const requiredParams = [
  'EVA_HEIGHT', 'CAGE_WIDTH', 'CAGE_DEPTH', 'CAGE_HEIGHT', 'CATWALK_LEVEL_COUNT',
  'LOWER_PIT_DEPTH', 'CAGE_FLUID_ENABLED', 'CAGE_FLUID_LEVEL', 'ENTRY_PLUG_KEEP_OUT',
  'LAUNCH_INTERFACE_OFFSET', 'DEBUG_FLY_MODE', 'DEBUG_FLY_SPEED',
  'DEBUG_FLY_FAST_SPEED', 'DEBUG_BRIGHT_MODE'
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
if (config.CAGE_HEIGHT === 100) {
  console.warn('Note: derived cage height happens to equal 100m; this is still a parameterized production assumption.');
}

const source = await readFile(new URL('../src/config.js', import.meta.url), 'utf8');
if (/EVA_HEIGHT\s*:\s*40\b/.test(source)) throw new Error('Forbidden fixed 40m EVA default detected.');
if (/CAGE_FLUID_TYPE\s*:\s*['"]LCL['"]/.test(source)) throw new Error('Fluid identity must not be fixed to LCL.');

console.log('Validation passed.');
console.log(JSON.stringify({
  EVA_HEIGHT: config.EVA_HEIGHT,
  CAGE_WIDTH: config.CAGE_WIDTH,
  CAGE_DEPTH: config.CAGE_DEPTH,
  CAGE_HEIGHT: config.CAGE_HEIGHT,
  CATWALK_LEVEL_COUNT: config.CATWALK_LEVEL_COUNT,
  LOWER_PIT_DEPTH: config.LOWER_PIT_DEPTH,
  fluid: config.CAGE_FLUID_ENABLED,
  entryPlugKeepOutCenterY: config.ENTRY_PLUG_KEEP_OUT.centerY
}, null, 2));
