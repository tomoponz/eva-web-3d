import math
import gzip
from pathlib import Path

import numpy as np
import trimesh
from trimesh.visual.material import PBRMaterial

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets' / 'models' / 'eva-unit-hero.glb'
OUT_GZ = Path(str(OUT) + '.gz')
OUT.parent.mkdir(parents=True, exist_ok=True)

scene = trimesh.Scene()


def pbr(name, rgb, metallic, roughness, emissive=None):
    kwargs = dict(
        name=name,
        baseColorFactor=[rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, 1.0],
        metallicFactor=metallic,
        roughnessFactor=roughness,
    )
    if emissive is not None:
        kwargs['emissiveFactor'] = [emissive[0] / 255, emissive[1] / 255, emissive[2] / 255]
    return PBRMaterial(**kwargs)


M = {
    'purple': pbr('armor_purple', (67, 46, 82), .14, .42),
    'purple_dark': pbr('armor_purple_dark', (39, 31, 48), .12, .50),
    'purple_light': pbr('armor_purple_light', (104, 84, 118), .10, .40),
    'green': pbr('armor_green', (115, 145, 65), .04, .44),
    'green_dark': pbr('armor_green_dark', (70, 92, 40), .04, .52),
    'joint': pbr('joint_rubber', (12, 15, 18), .04, .82),
    'dark': pbr('dark_armor', (22, 24, 28), .14, .60),
    'metal': pbr('exposed_metal', (93, 101, 108), .78, .30),
    'metal_dark': pbr('dark_metal', (42, 47, 52), .70, .38),
    'orange': pbr('warning_orange', (168, 82, 35), .02, .48),
    'sensor': pbr('sensor_blue', (130, 205, 244), .05, .24, (30, 100, 150)),
    'eye': pbr('eye_emissive', (185, 255, 106), .00, .18, (90, 220, 45)),
    'black': pbr('deep_black', (7, 8, 10), .02, .92),
}


def signed_pow(x, e):
    return math.copysign(abs(x) ** e, x)


def superellipsoid_unit(e1=.40, e2=.34, lat=8, lon=12):
    verts = []
    for i in range(lat + 1):
        eta = -math.pi / 2 + math.pi * i / lat
        ce = signed_pow(math.cos(eta), e1)
        se = signed_pow(math.sin(eta), e1)
        for j in range(lon):
            omega = -math.pi + 2 * math.pi * j / lon
            co = signed_pow(math.cos(omega), e2)
            so = signed_pow(math.sin(omega), e2)
            verts.append([.5 * ce * co, .5 * se, .5 * ce * so])
    faces = []
    for i in range(lat):
        for j in range(lon):
            nj = (j + 1) % lon
            a = i * lon + j
            b = i * lon + nj
            c = (i + 1) * lon + j
            d = (i + 1) * lon + nj
            faces.extend(([a, c, d], [a, d, b]))
    return trimesh.Trimesh(vertices=np.asarray(verts), faces=np.asarray(faces), process=True)


def wedge_unit(top_ratio=.72, depth_top_ratio=.82, skew=.0):
    wb, wt = .5, .5 * top_ratio
    db, dt = .5, .5 * depth_top_ratio
    h = .5
    v = np.array([
        [-wb, -h, -db], [wb, -h, -db], [wb, -h, db], [-wb, -h, db],
        [-wt, h, -dt + skew], [wt, h, -dt + skew], [wt, h, dt + skew], [-wt, h, dt + skew],
    ])
    f = np.array([
        [0,1,2],[0,2,3],[4,6,5],[4,7,6],
        [0,4,5],[0,5,1],[1,5,6],[1,6,2],
        [2,6,7],[2,7,3],[3,7,4],[3,4,0],
    ])
    return trimesh.Trimesh(vertices=v, faces=f, process=True)


def add_template(name, mesh, material):
    mesh = mesh.copy()
    mesh.visual = trimesh.visual.TextureVisuals(material=material)
    scene.add_geometry(mesh, geom_name=name, node_name=f'__template_{name}')
    scene.graph.update(frame_to=f'__template_{name}', frame_from='world',
                       matrix=trimesh.transformations.translation_matrix([0, -10000, 0]), geometry=name)


def matrix(pos=(0,0,0), rot=(0,0,0), scale=(1,1,1)):
    T = trimesh.transformations.translation_matrix(pos)
    Rx = trimesh.transformations.rotation_matrix(rot[0], [1,0,0])
    Ry = trimesh.transformations.rotation_matrix(rot[1], [0,1,0])
    Rz = trimesh.transformations.rotation_matrix(rot[2], [0,0,1])
    S = np.diag([scale[0], scale[1], scale[2], 1.0])
    return T @ Rz @ Ry @ Rx @ S


def node(template, name, pos=(0,0,0), rot=(0,0,0), scale=(1,1,1)):
    scene.graph.update(frame_to=name, frame_from='world', matrix=matrix(pos, rot, scale), geometry=template)


for mat_name in ('purple','purple_dark','purple_light','green','green_dark','joint','dark','metal','metal_dark','orange','sensor','eye','black'):
    add_template(f'rounded_{mat_name}', superellipsoid_unit(), M[mat_name])
for mat_name in ('purple','purple_dark','purple_light','green','green_dark','metal','metal_dark','orange','dark'):
    add_template(f'wedge_{mat_name}', wedge_unit(), M[mat_name])
    add_template(f'wedge_sharp_{mat_name}', wedge_unit(.55, .68, .08), M[mat_name])
for mat_name in ('joint','metal','metal_dark','sensor'):
    add_template(f'cyl_{mat_name}', trimesh.creation.cylinder(radius=.5, height=1.0, sections=8), M[mat_name])
for mat_name in ('metal','metal_dark'):
    add_template(f'torus_{mat_name}', trimesh.creation.torus(major_radius=.40, minor_radius=.10, major_sections=12, minor_sections=5), M[mat_name])
add_template('cone_purple', trimesh.creation.cone(radius=.5, height=1.0, sections=8), M['purple'])

for side in (-1,1):
    x = side * 3.15
    node('rounded_dark', f'foot_sole_{side}', (x,1.0,.85), scale=(5.2,1.65,8.6))
    node('wedge_purple', f'foot_toe_{side}', (x,2.45,2.3), (math.radians(-5),0,0), (5.0,2.4,6.4))
    node('rounded_purple_dark', f'foot_heel_{side}', (x,2.25,-2.45), scale=(4.0,2.2,3.4))
    for i in range(5): node('rounded_metal_dark', f'foot_tread_{side}_{i}', (x,.14,-1.8+i*.9), scale=(4.4,.20,.42))
    node('cyl_joint', f'ankle_joint_{side}', (x,5.4,0), (0,math.pi/2,0), (2.9,2.9,2.8))
    node('torus_metal', f'ankle_ring_{side}', (x,5.4,0), (0,math.pi/2,0), (3.9,3.9,3.9))
    node('rounded_joint', f'shin_core_{side}', (x,14.3,0), scale=(3.7,12.8,3.4))
    node('wedge_purple', f'shin_front_{side}', (x,14.6,2.28), (math.radians(2),0,0), (4.6,12.7,2.4))
    node('wedge_purple_light', f'shin_outer_{side}', (x+side*2.10,14.8,0), (0,0,math.radians(side*4)), (1.45,10.5,3.0))
    node('wedge_purple_dark', f'shin_inner_{side}', (x-side*1.88,14.3,-.05), (0,0,math.radians(-side*3)), (.75,8.5,2.8))
    node('wedge_green', f'shin_green_{side}', (x+side*.95,15.4,3.25), scale=(2.15,7.6,.72))
    for i in range(6): node('rounded_metal_dark', f'shin_vent_{side}_{i}', (x-.75+i*.30,13.4,3.38), scale=(.23,1.15,.18))
    for j,y in enumerate((10.0,12.8,15.6,18.4)): node('cyl_metal', f'shin_bolt_{side}_{j}', (x+side*2.23,y,1.75), (math.pi/2,0,0), (.28,.28,.18))
    node('cyl_joint', f'knee_joint_{side}', (x,23.7,0), (0,math.pi/2,0), (3.56,3.56,3.0))
    node('torus_metal', f'knee_ring_{side}', (x+side*.1,23.7,0), (0,math.pi/2,0), (4.6,4.6,4.6))
    node('wedge_purple_light', f'knee_cap_{side}', (x,24.4,2.1), (math.radians(8),0,0), (3.4,3.3,2.8))
    node('wedge_orange', f'knee_warning_{side}', (x,25.0,3.38), (math.radians(8),0,0), (2.2,1.25,.85))
    tx = side * 2.80
    node('rounded_joint', f'thigh_core_{side}', (tx,33.4,0), scale=(4.7,11.8,4.2))
    node('wedge_purple', f'thigh_front_{side}', (tx,33.5,2.45), scale=(5.4,11.4,2.7))
    node('wedge_purple_dark', f'thigh_outer_{side}', (tx+side*2.42,33.9,0), (0,0,math.radians(side*5)), (1.25,8.8,4.0))
    for i in range(5): node('rounded_metal_dark', f'thigh_vent_{side}_{i}', (tx-.70+i*.35,33.4,3.86), scale=(.24,.95,.18))

node('rounded_joint','pelvis_core',(0,42.6,0),scale=(10.2,5.2,5.4))
node('wedge_purple_dark','pelvis_front',(0,43.1,1.15),scale=(9.3,4.7,5.8))
for side in (-1,1):
    node('wedge_purple_light',f'hip_skirt_{side}',(side*4.85,43.2,.4),(0,0,math.radians(side*8)),(3.0,4.8,4.8))
    node('wedge_green',f'pelvis_green_{side}',(side*2.8,44.4,4.0),scale=(.75,2.8,.65))
node('rounded_joint','abdomen_core',(0,48.7,0),scale=(6.0,7.4,4.5))
for i in range(5):
    y=46.4+i*1.65; w=5.6+i*.35
    node('wedge_purple' if i%2==0 else 'wedge_purple_light',f'abdomen_plate_{i}',(0,y,1.4),scale=(w,1.15,4.2))
    node('rounded_black',f'abdomen_gap_{i}',(0,y-.68,3.28),scale=(w*.85,.20,.20))

node('rounded_joint','chest_inner',(0,58.3,-.15),scale=(11.4,13.0,6.6))
for side in (-1,1):
    node('wedge_purple',f'chest_main_{side}',(side*2.95,58.5,3.45),(math.radians(1),math.radians(side*5),math.radians(side*2)),(5.7,8.5,3.2))
    node('wedge_green',f'chest_green_{side}',(side*4.10,59.2,4.66),(0,math.radians(side*5),0),(2.35,5.4,2.3))
    node('wedge_purple_dark',f'chest_lower_{side}',(side*1.55,54.8,3.88),(math.radians(7),math.radians(side*2),0),(2.8,3.5,2.5))
    for i in range(5): node('rounded_metal_dark',f'chest_vent_{side}_{i}',(side*2.95+(i-2)*.52,58.2,5.09),scale=(.26,1.45,.18))
    node('rounded_joint',f'pylon_core_{side}',(side*8.0,62.0,-.25),(0,0,math.radians(side*3)),(4.5,12.5,5.0))
    node('wedge_purple',f'pylon_shell_{side}',(side*8.25,62.3,.1),(0,0,math.radians(side*5)),(5.3,12.7,5.2))
    node('wedge_green',f'pylon_green_{side}',(side*10.25,62.8,-.1),(0,0,math.radians(side*5)),(1.05,9.6,4.0))
    for j,y in enumerate((58.5,61.0,63.5,66.0)): node('cyl_metal',f'pylon_bolt_{side}_{j}',(side*10.65,y,1.65),(math.pi/2,0,0),(.30,.30,.16))
node('wedge_metal','sternum_rail',(0,58.4,5.05),scale=(.85,8.4,.9))
for j,y in enumerate((55.7,57.5,59.3,61.1)): node('cyl_metal',f'sternum_bolt_{j}',(0,y,5.50),(math.pi/2,0,0),(.28,.28,.18))
node('cyl_sensor','chest_sensor',(0,62.0,5.25),(math.pi/2,0,0),(.84,.84,.28))

for side in (-1,1):
    ux=side*7.05
    node('rounded_joint',f'upper_arm_core_{side}',(ux,52.2,0),scale=(3.3,9.3,3.3))
    node('wedge_purple',f'upper_arm_armor_{side}',(ux,52.5,2.10),(0,0,math.radians(side*2)),(4.0,9.4,2.2))
    node('cyl_joint',f'elbow_joint_{side}',(side*7.25,46.7,0),(0,math.pi/2,0),(3.1,3.1,2.7))
    node('torus_metal',f'elbow_ring_{side}',(side*7.25,46.7,0),(0,math.pi/2,0),(4.1,4.1,4.1))
    node('rounded_joint',f'forearm_core_{side}',(side*7.40,41.0,0),scale=(3.0,9.3,3.3))
    node('wedge_purple_light',f'forearm_armor_{side}',(side*7.40,41.2,2.10),(0,0,math.radians(side*1.5)),(3.75,9.2,2.7))
    node('wedge_green',f'forearm_green_{side}',(side*7.40,43.6,3.55),scale=(2.2,1.05,.75))
    for i in range(5): node('rounded_metal_dark',f'forearm_vent_{side}_{i}',(side*7.40+(i-2)*.35,39.6,3.57),scale=(.22,.90,.16))
    node('torus_metal_dark',f'wrist_ring_{side}',(side*7.40,35.5,0),(0,math.pi/2,0),(3.0,3.0,3.0))
    node('rounded_dark',f'hand_{side}',(side*7.40,33.1,.35),scale=(3.1,3.6,2.8))
    for i in range(4):
        fx=side*7.40+(i-1.5)*.48
        node('rounded_joint',f'finger_{side}_{i}',(fx,30.35,.70),(math.radians(2),0,0),(.38,3.0,.54))
        node('rounded_metal_dark',f'knuckle_{side}_{i}',(fx,31.75,.70),scale=(.44,.38,.58))

node('rounded_joint','neck_core',(0,65.4,-.20),scale=(4.0,4.8,4.1))
for j,y in enumerate((64.2,65.2,66.2)): node('torus_metal_dark',f'neck_ring_{j}',(0,y,-.18),scale=(4.55,4.55,4.55))
node('rounded_purple_dark','helmet_core',(0,70.8,.15),scale=(5.8,6.0,5.3))
node('wedge_purple','face_main',(0,70.75,2.1),(math.radians(-3),0,0),(5.3,5.2,4.0))
node('wedge_purple_dark','jaw',(0,67.95,2.10),(math.radians(-8),0,0),(4.25,2.2,3.6))
node('wedge_green','brow_green',(0,72.05,4.05),scale=(3.9,.82,.55))
for side in (-1,1):
    node('wedge_purple',f'cheek_{side}',(side*2.55,69.6,2.2),(math.radians(4),math.radians(side*10),math.radians(side*7)),(1.55,2.85,2.7))
    node('wedge_green_dark',f'temple_{side}',(side*2.95,70.8,-.25),(0,math.radians(side*14),0),(1.1,3.2,2.3))
    node('cyl_sensor',f'temple_sensor_{side}',(side*3.38,70.8,-.25),(0,0,math.pi/2),(.68,.68,.34))
    node('rounded_eye',f'eye_{side}',(side*1.38,71.25,4.18),scale=(1.35,.52,.30))
    for i in range(4): node('rounded_metal_dark',f'jaw_vent_{side}_{i}',(side*1.7+(i-1.5)*.26,68.8,3.95),scale=(.18,.60,.15))
node('rounded_black','mouth_slit',(0,68.15,4.15),scale=(2.2,.18,.15))
node('cone_purple','center_horn',(0,76.1,.25),(math.radians(-8),0,0),(1.2,1.2,6.8))
for side in (-1,1): node('wedge_green',f'head_fin_{side}',(side*1.6,75.2,-.55),(math.radians(-4),0,math.radians(side*18)),(.65,5.0,2.1))

node('torus_metal_dark','dorsal_collar',(0,64.9,-2.25),(math.radians(28),0,0),(6.6,6.6,6.6))
node('wedge_metal','entry_port_surround',(0,63.8,-4.05),(math.radians(5),0,0),(4.9,4.6,1.45))
node('wedge_dark','entry_port_hatch',(0,63.8,-4.83),(math.radians(5),0,0),(3.25,3.3,.75))
for side in (-1,1):
    node('wedge_dark',f'dorsal_spine_{side}',(side*2.25,60.5,-3.45),(math.radians(5),0,math.radians(side*5)),(1.15,7.2,1.25))
    node('cyl_metal_dark',f'dorsal_conduit_a_{side}',(side*1.40,57.8,-3.98),(math.radians(-4),math.radians(side*4),0),(.34,.34,7.8))
    node('cyl_joint',f'dorsal_conduit_b_{side}',(side*1.82,58.0,-3.72),(math.radians(-4),math.radians(side*4),0),(.28,.28,7.0))
    for j,y in enumerate((62.3,65.3)): node('cyl_metal',f'entry_port_bolt_{side}_{j}',(side*1.3,y,-4.92),(math.pi/2,0,0),(.28,.28,.16))
for i in range(5): node('rounded_metal_dark',f'rear_spine_block_{i}',(0,53.7+i*2.0,-3.75),scale=(2.8-i*.1,1.0,1.0))

scene.metadata['asset'] = 'eva-unit-hero'
scene.metadata['units'] = 'meters'
scene.metadata['nominal_height_m'] = 80
scene.metadata['entry_plug_region'] = 'dorsal-upper-back'
scene.export(OUT)
with OUT.open('rb') as src, gzip.open(OUT_GZ, 'wb', compresslevel=9) as dst:
    dst.write(src.read())

loaded = trimesh.load(OUT, force='scene')
print(f'Wrote: {OUT}')
print(f'Bytes: {OUT.stat().st_size}')
print(f'Gzip bytes: {OUT_GZ.stat().st_size}')
print(f'Geometry definitions: {len(loaded.geometry)}')
print(f'Node instances: {len(loaded.graph.nodes_geometry)}')
print(f'Triangles in definitions: {sum(len(g.faces) for g in loaded.geometry.values()):,}')
