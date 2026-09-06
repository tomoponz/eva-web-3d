import * as THREE from 'three';
import { CAGE_CONFIG, deriveConfig } from './config.js';
import { createCageScene } from './cage/createCageScene.js';
import { addIndustrialDetail } from './cage/addIndustrialDetail.js';
import { addFineDetail } from './cage/addFineDetail.js';
import { loadEvaMicroVoxel } from './cage/loadEvaMicroVoxel.js';
import { FirstPersonController } from './player/FirstPersonController.js';

const config = deriveConfig(CAGE_CONFIG);
const app = document.querySelector('#app');
const status = document.querySelector('#status');
const start = document.querySelector('#start');

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x07090b);
scene.fog = new THREE.FogExp2(0x07090b, 0.0085);

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.05, config.CAGE_HEIGHT * 3.5);
const cage = createCageScene(config);
addIndustrialDetail(cage.root, config);
addFineDetail(cage.root, config);
scene.add(cage.root);

const controller = new FirstPersonController(camera, renderer.domElement, config, cage.colliders, cage.navigation);
controller.setPosition(cage.spawn);

let evaAssetState = config.USE_MICRO_VOXEL_EVA ? 'M5 MICRO LOADING' : 'PROCEDURAL';
let microVoxelEva = null;
loadEvaMicroVoxel(cage.root, config)
  .then((result) => {
    if (result.loaded) {
      microVoxelEva = result;
      evaAssetState = `M5 ${result.mode} ${result.voxelSize.toFixed(2)}m / ${result.voxelCount.toLocaleString()} voxels`;
    } else {
      evaAssetState = 'PROCEDURAL FALLBACK';
      console.warn('Micro-voxel EVA not loaded:', result.reason);
    }
  })
  .catch((error) => {
    evaAssetState = 'PROCEDURAL FALLBACK';
    console.warn('Failed to load M5 micro-voxel EVA; procedural fallback remains active.', error);
  });

const ambient = new THREE.HemisphereLight(0x778894, 0x17110c, 0.18);
scene.add(ambient);

const debugAmbient = new THREE.AmbientLight(0xffffff, 0);
const debugFront = new THREE.DirectionalLight(0xffffff, 0);
debugFront.position.set(0, config.CAGE_HEIGHT * 0.42, config.CAGE_DEPTH * 0.9);
const debugRear = new THREE.DirectionalLight(0xbfd7ff, 0);
debugRear.position.set(0, config.CAGE_HEIGHT * 0.34, -config.CAGE_DEPTH * 0.9);
const debugTop = new THREE.DirectionalLight(0xfff1d8, 0);
debugTop.position.set(config.CAGE_WIDTH * 0.25, config.CAGE_HEIGHT * 1.15, config.CAGE_DEPTH * 0.15);
const debugZenith = new THREE.DirectionalLight(0xf3f7ff, 0);
debugZenith.position.set(0, config.CAGE_HEIGHT * 1.45, 0);
scene.add(debugAmbient, debugFront, debugRear, debugTop, debugZenith);

const upperFloodLights = [];
for (const side of [-1, 1]) {
  for (const zRatio of [-0.28, -0.08, 0.12, 0.32]) {
    const flood = new THREE.SpotLight(0xfff2cf, 0, config.CAGE_DEPTH * 1.4, Math.PI / 4.4, 0.45, 1.0);
    flood.position.set(side * config.CAGE_WIDTH * 0.34, config.CAGE_HEIGHT * 0.95, config.CAGE_DEPTH * zRatio);
    flood.target.position.set(0, config.CAGE_HEIGHT * 0.58, config.CAGE_DEPTH * (zRatio * 0.55));
    flood.castShadow = false;
    scene.add(flood, flood.target);
    upperFloodLights.push(flood);
  }
}

const upperWorkLights = [];
for (const side of [-1, 1]) {
  for (const yRatio of [0.70, 0.80, 0.90]) {
    const fill = new THREE.PointLight(0xe4eefc, 0, config.CAGE_WIDTH * 0.95, 1.8);
    fill.position.set(side * config.CAGE_WIDTH * 0.40, config.CAGE_HEIGHT * yRatio, -config.CAGE_DEPTH * 0.08);
    scene.add(fill);
    upperWorkLights.push(fill);
  }
}

const key = new THREE.SpotLight(0xe6dfcf, 5200, config.CAGE_DEPTH * 2.0, Math.PI/5, 0.55, 1.2);
key.position.set(config.CAGE_WIDTH*0.28, config.CAGE_HEIGHT*0.62, config.CAGE_DEPTH*0.30);
key.target.position.set(0, config.EVA_HEIGHT*0.48, 0);
key.castShadow = true;
key.shadow.mapSize.set(1024, 1024);
scene.add(key, key.target);

const warm = new THREE.PointLight(0xff6a2b, 450, config.CAGE_WIDTH*0.62, 2.0);
warm.position.set(-config.CAGE_WIDTH*0.30, config.EVA_HEIGHT*0.12, config.CAGE_DEPTH*0.18);
scene.add(warm);

for (const side of [-1, 1]) {
  for (const yRatio of [0.08, 0.22, 0.44, 0.67]) {
    const light = new THREE.PointLight(0xff2f18, 60, 8, 2.2);
    light.position.set(side * config.CAGE_WIDTH*0.44, config.CAGE_HEIGHT*yRatio, -config.CAGE_DEPTH*0.20);
    scene.add(light);
  }
}

let debugBright = Boolean(config.DEBUG_BRIGHT_MODE);
function applyDebugBrightness(enabled) {
  debugBright = Boolean(enabled);

  renderer.toneMappingExposure = debugBright ? 2.35 : 0.82;
  ambient.intensity = debugBright ? 1.28 : 0.18;
  key.intensity = debugBright ? 10000 : 5200;
  warm.intensity = debugBright ? 860 : 450;

  debugAmbient.intensity = debugBright ? 1.60 : 0;
  debugFront.intensity = debugBright ? 1.85 : 0;
  debugRear.intensity = debugBright ? 1.25 : 0;
  debugTop.intensity = debugBright ? 1.55 : 0;
  debugZenith.intensity = debugBright ? 1.45 : 0;

  for (const flood of upperFloodLights) flood.intensity = debugBright ? 2300 : 0;
  for (const fill of upperWorkLights) fill.intensity = debugBright ? 850 : 0;

  scene.background.set(debugBright ? 0x707981 : 0x07090b);
  scene.fog.color.set(debugBright ? 0x707981 : 0x07090b);
  scene.fog.density = debugBright ? 0.00005 : 0.0085;
}
applyDebugBrightness(debugBright);

start.addEventListener('click', () => controller.lock());
renderer.domElement.addEventListener('click', () => {
  if (!controller.locked) controller.lock();
});

document.addEventListener('keydown', (event) => {
  if (event.repeat) return;
  if (event.code === 'KeyK') cage.toggles.keepOut.visible = !cage.toggles.keepOut.visible;
  if (event.code === 'KeyH') cage.toggles.human.visible = !cage.toggles.human.visible;
  if (event.code === 'KeyF') cage.toggles.fluid.visible = !cage.toggles.fluid.visible;
  if (event.code === 'KeyG') controller.toggleFlyMode();
  if (event.code === 'KeyB') applyDebugBrightness(!debugBright);
});

const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const delta = Math.min(clock.getDelta(), 0.05);
  controller.update(delta);

  if (microVoxelEva) {
    microVoxelEva.update(camera);
    evaAssetState = `M5 ${microVoxelEva.mode} ${microVoxelEva.voxelSize.toFixed(2)}m / ${microVoxelEva.voxelCount.toLocaleString()} voxels`;
  }

  const feetY = camera.position.y - config.HUMAN_EYE_HEIGHT;
  const mode = controller.flyMode ? 'FLY' : 'WALK';
  const lightMode = debugBright ? 'DEBUG FULL-BRIGHT' : 'CINEMATIC';
  status.textContent = `${mode} | ${lightMode} | ${evaAssetState} | EVA ${config.EVA_HEIGHT.toFixed(0)}m assumption | x ${camera.position.x.toFixed(1)} y ${feetY.toFixed(1)} z ${camera.position.z.toFixed(1)}`;
  renderer.render(scene, camera);
}
frame();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
