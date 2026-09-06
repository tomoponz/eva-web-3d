import * as THREE from 'three';
import { CAGE_CONFIG, deriveConfig } from './config.js';
import { createCageScene } from './cage/createCageScene.js';
import { addIndustrialDetail } from './cage/addIndustrialDetail.js';
import { addFineDetail } from './cage/addFineDetail.js';
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

// Low environment contribution plus localized work / warning lights.
const ambient = new THREE.HemisphereLight(0x778894, 0x17110c, 0.18);
scene.add(ambient);

// Debug-only fill lights make the blockout readable from any inspection angle.
// They are intentionally non-cinematic and do not cast shadows.
const debugAmbient = new THREE.AmbientLight(0xffffff, 0);
const debugFront = new THREE.DirectionalLight(0xffffff, 0);
debugFront.position.set(0, config.CAGE_HEIGHT * 0.42, config.CAGE_DEPTH * 0.9);
const debugRear = new THREE.DirectionalLight(0xbfd7ff, 0);
debugRear.position.set(0, config.CAGE_HEIGHT * 0.34, -config.CAGE_DEPTH * 0.9);
const debugTop = new THREE.DirectionalLight(0xfff1d8, 0);
debugTop.position.set(config.CAGE_WIDTH * 0.25, config.CAGE_HEIGHT * 1.15, config.CAGE_DEPTH * 0.15);
scene.add(debugAmbient, debugFront, debugRear, debugTop);

const key = new THREE.SpotLight(0xe6dfcf, 5200, config.CAGE_DEPTH * 2.0, Math.PI/5, 0.55, 1.2);
key.position.set(config.CAGE_WIDTH*0.28, config.CAGE_HEIGHT*0.62, config.CAGE_DEPTH*0.30);
key.target.position.set(0, config.EVA_HEIGHT*0.48, 0);
key.castShadow = true;
key.shadow.mapSize.set(1024, 1024);
scene.add(key, key.target);

const warm = new THREE.PointLight(0xff6a2b, 450, config.CAGE_WIDTH*0.62, 2.0);
warm.position.set(-config.CAGE_WIDTH*0.30, config.EVA_HEIGHT*0.12, config.CAGE_DEPTH*0.18);
scene.add(warm);

const warningLights = [];
for (const side of [-1, 1]) {
  for (const yRatio of [0.08, 0.22, 0.44, 0.67]) {
    const light = new THREE.PointLight(0xff2f18, 60, 8, 2.2);
    light.position.set(side * config.CAGE_WIDTH*0.44, config.CAGE_HEIGHT*yRatio, -config.CAGE_DEPTH*0.20);
    scene.add(light);
    warningLights.push(light);
  }
}

let debugBright = Boolean(config.DEBUG_BRIGHT_MODE);
function applyDebugBrightness(enabled) {
  debugBright = Boolean(enabled);

  renderer.toneMappingExposure = debugBright ? 2.05 : 0.82;
  ambient.intensity = debugBright ? 1.15 : 0.18;
  key.intensity = debugBright ? 9000 : 5200;
  warm.intensity = debugBright ? 780 : 450;

  // Full-scene inspection fill. This is deliberately much brighter than the
  // cinematic pass so dark armor, wall recesses, and lower Cage geometry remain readable.
  debugAmbient.intensity = debugBright ? 1.45 : 0;
  debugFront.intensity = debugBright ? 1.65 : 0;
  debugRear.intensity = debugBright ? 1.05 : 0;
  debugTop.intensity = debugBright ? 1.25 : 0;

  scene.background.set(debugBright ? 0x596168 : 0x07090b);
  scene.fog.color.set(debugBright ? 0x596168 : 0x07090b);
  scene.fog.density = debugBright ? 0.00035 : 0.0085;
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

  const feetY = camera.position.y - config.HUMAN_EYE_HEIGHT;
  const mode = controller.flyMode ? 'FLY' : 'WALK';
  const lightMode = debugBright ? 'DEBUG FULL-BRIGHT' : 'CINEMATIC';
  status.textContent = `${mode} | ${lightMode} | EVA ${config.EVA_HEIGHT.toFixed(0)}m assumption | x ${camera.position.x.toFixed(1)} y ${feetY.toFixed(1)} z ${camera.position.z.toFixed(1)}`;
  renderer.render(scene, camera);
}
frame();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
