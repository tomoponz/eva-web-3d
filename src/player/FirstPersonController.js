import * as THREE from 'three';

export class FirstPersonController {
  constructor(camera, domElement, config, colliders, navigation) {
    this.camera = camera;
    this.domElement = domElement;
    this.config = config;
    this.colliders = colliders;
    this.navigation = navigation;
    this.keys = new Set();
    this.yaw = 0;
    this.pitch = 0;
    this.velocityY = 0;
    this.locked = false;

    this._onMouseMove = (event) => {
      if (!this.locked) return;
      this.yaw -= event.movementX * 0.0021;
      this.pitch -= event.movementY * 0.0021;
      this.pitch = THREE.MathUtils.clamp(this.pitch, -Math.PI/2 + 0.02, Math.PI/2 - 0.02);
      this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
    };

    document.addEventListener('mousemove', this._onMouseMove);
    document.addEventListener('keydown', (event) => this.keys.add(event.code));
    document.addEventListener('keyup', (event) => this.keys.delete(event.code));
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.domElement;
      document.body.classList.toggle('locked', this.locked);
    });
  }

  lock() {
    this.domElement.requestPointerLock();
  }

  setPosition(position) {
    this.camera.position.set(position.x, position.y, position.z);
  }

  _groundHeight(x, z) {
    for (const ramp of this.navigation.ramps) {
      const inX = x >= ramp.minX && x <= ramp.maxX;
      const minZ = Math.min(ramp.startZ, ramp.endZ);
      const maxZ = Math.max(ramp.startZ, ramp.endZ);
      if (inX && z >= minZ && z <= maxZ) {
        const t = (z - ramp.startZ) / (ramp.endZ - ramp.startZ);
        return THREE.MathUtils.lerp(ramp.startY, ramp.endY, THREE.MathUtils.clamp(t, 0, 1));
      }
    }

    for (const deck of this.navigation.decks) {
      if (x >= deck.minX && x <= deck.maxX && z >= deck.minZ && z <= deck.maxZ) return deck.y;
    }
    return 0;
  }

  _collides(x, y, z) {
    const r = this.config.PLAYER_RADIUS;
    const feet = y - this.config.HUMAN_EYE_HEIGHT;
    const head = feet + this.config.PLAYER_HEIGHT;
    for (const box of this.colliders) {
      const overlapsY = head > box.min.y && feet < box.max.y;
      if (!overlapsY) continue;
      if (x + r > box.min.x && x - r < box.max.x && z + r > box.min.z && z - r < box.max.z) return true;
    }
    return false;
  }

  update(delta) {
    const move = new THREE.Vector3();
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    if (this.keys.has('KeyW')) move.add(forward);
    if (this.keys.has('KeyS')) move.sub(forward);
    if (this.keys.has('KeyD')) move.add(right);
    if (this.keys.has('KeyA')) move.sub(right);
    if (move.lengthSq() > 0) move.normalize();

    const speed = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')
      ? this.config.PLAYER_FAST_SPEED
      : this.config.PLAYER_SPEED;

    const dx = move.x * speed * delta;
    const dz = move.z * speed * delta;
    const p = this.camera.position;

    const nextX = p.x + dx;
    if (!this._collides(nextX, p.y, p.z)) p.x = nextX;

    const nextZ = p.z + dz;
    if (!this._collides(p.x, p.y, nextZ)) p.z = nextZ;

    const ground = this._groundHeight(p.x, p.z);
    const feet = p.y - this.config.HUMAN_EYE_HEIGHT;
    const rise = ground - feet;

    if (rise > 0 && rise <= this.config.STEP_HEIGHT) {
      p.y += rise;
      this.velocityY = 0;
    } else if (feet > ground + 0.02) {
      this.velocityY -= this.config.GRAVITY * delta;
      p.y += this.velocityY * delta;
      if (p.y - this.config.HUMAN_EYE_HEIGHT <= ground) {
        p.y = ground + this.config.HUMAN_EYE_HEIGHT;
        this.velocityY = 0;
      }
    } else {
      p.y = ground + this.config.HUMAN_EYE_HEIGHT;
      this.velocityY = 0;
    }
  }
}
