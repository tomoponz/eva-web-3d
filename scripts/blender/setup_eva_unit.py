"""Blender setup script for the M3 EVA authored mesh.

Run inside Blender's Scripting workspace. The script creates the agreed collection
hierarchy, integration sockets, review cameras and reference guides. It does not
pretend to generate the final hero mesh automatically.
"""

import bpy
from mathutils import Vector

ROOT_COLLECTION = "EVA_UNIT_ROOT"
REFERENCE_HEIGHT = 80.0

COLLECTIONS = {
    "GEO_BODY": ["GEO_HEAD", "GEO_NECK", "GEO_TORSO", "GEO_PELVIS", "GEO_ARM_L", "GEO_ARM_R", "GEO_LEG_L", "GEO_LEG_R"],
    "GEO_ARMOR": ["ARMOR_HEAD", "ARMOR_CHEST", "ARMOR_SHOULDER_L", "ARMOR_SHOULDER_R", "ARMOR_ARM_L", "ARMOR_ARM_R", "ARMOR_LEG_L", "ARMOR_LEG_R"],
    "GEO_MECH": ["JOINTS", "FASTENERS", "VENTS", "CABLES", "DORSAL_INTERFACE"],
    "SOCKETS": [],
    "COLLISION": [],
    "DEBUG_GUIDES": []
}

SOCKETS = {
    "SOCKET_ENTRY_PLUG": (0.0, 63.0, -4.0),
    "SOCKET_RESTRAINT_CHEST_L": (-5.0, 58.0, 1.0),
    "SOCKET_RESTRAINT_CHEST_R": (5.0, 58.0, 1.0),
    "SOCKET_RESTRAINT_SHOULDER_L": (-8.0, 62.0, 0.0),
    "SOCKET_RESTRAINT_SHOULDER_R": (8.0, 62.0, 0.0),
    "SOCKET_FOOT_L": (-3.0, 1.0, 0.0),
    "SOCKET_FOOT_R": (3.0, 1.0, 0.0),
    "SOCKET_HEAD_LOOK": (0.0, 72.0, 4.0)
}

CAMERAS = {
    "CAM_HUMAN_FRONT_LOW": ((0.0, 1.68, 13.0), (0.0, 38.0, 0.0)),
    "CAM_HUMAN_SIDE_LOW": ((13.0, 1.68, 8.0), (0.0, 36.0, 0.0)),
    "CAM_SERVICE_CHEST": ((11.0, 55.0, 10.0), (0.0, 59.0, 0.0)),
    "CAM_SERVICE_HEAD": ((9.0, 70.0, 9.0), (0.0, 71.0, 0.0)),
    "CAM_REAR_DORSAL": ((0.0, 64.0, -12.0), (0.0, 64.0, -3.5)),
    "CAM_LONG_CAGE": ((24.0, 18.0, 35.0), (0.0, 40.0, 0.0))
}


def ensure_collection(name, parent):
    existing = bpy.data.collections.get(name)
    if existing is None:
        existing = bpy.data.collections.new(name)
    if existing.name not in [c.name for c in parent.children]:
        parent.children.link(existing)
    return existing


def ensure_root():
    root = bpy.data.collections.get(ROOT_COLLECTION)
    if root is None:
        root = bpy.data.collections.new(ROOT_COLLECTION)
    scene_root = bpy.context.scene.collection
    if root.name not in [c.name for c in scene_root.children]:
        scene_root.children.link(root)
    return root


def add_empty(name, location, collection, display_type='PLAIN_AXES', size=0.7):
    obj = bpy.data.objects.get(name)
    if obj is None:
        obj = bpy.data.objects.new(name, None)
        collection.objects.link(obj)
    obj.location = location
    obj.empty_display_type = display_type
    obj.empty_display_size = size
    return obj


def look_at(obj, target):
    direction = Vector(target) - obj.location
    obj.rotation_euler = direction.to_track_quat('-Z', 'Y').to_euler()


def add_camera(name, location, target, collection):
    cam_obj = bpy.data.objects.get(name)
    if cam_obj is None:
        cam_data = bpy.data.cameras.new(name)
        cam_obj = bpy.data.objects.new(name, cam_data)
        collection.objects.link(cam_obj)
    cam_obj.location = location
    cam_obj.data.lens = 38
    look_at(cam_obj, target)
    return cam_obj


def add_reference_box(name, dimensions, location, collection):
    obj = bpy.data.objects.get(name)
    if obj is None:
        bpy.ops.mesh.primitive_cube_add(size=1.0, location=location)
        obj = bpy.context.object
        obj.name = name
        for c in list(obj.users_collection):
            c.objects.unlink(obj)
        collection.objects.link(obj)
    obj.dimensions = dimensions
    obj.display_type = 'WIRE'
    obj.hide_render = True
    return obj


def main():
    root = ensure_root()
    created = {}
    for parent_name, children in COLLECTIONS.items():
        parent = ensure_collection(parent_name, root)
        created[parent_name] = parent
        for child_name in children:
            created[child_name] = ensure_collection(child_name, parent)

    sockets = created['SOCKETS']
    for name, location in SOCKETS.items():
        add_empty(name, location, sockets, size=0.6)

    collision = created['COLLISION']
    add_reference_box('COL_BODY', (14.0, 45.0, 10.0), (0.0, 48.0, 0.0), collision)
    add_reference_box('COL_LEG_L', (6.0, 37.0, 7.0), (-3.0, 20.0, 0.0), collision)
    add_reference_box('COL_LEG_R', (6.0, 37.0, 7.0), (3.0, 20.0, 0.0), collision)
    add_reference_box('COL_FOOT_L', (6.0, 5.0, 10.0), (-3.0, 2.5, 1.0), collision)
    add_reference_box('COL_FOOT_R', (6.0, 5.0, 10.0), (3.0, 2.5, 1.0), collision)

    guides = created['DEBUG_GUIDES']
    add_empty('GUIDE_FLOOR_ORIGIN', (0.0, 0.0, 0.0), guides, size=1.5)
    add_empty('GUIDE_HEAD_TOP', (0.0, REFERENCE_HEIGHT, 0.0), guides, size=1.0)
    add_reference_box('GUIDE_EVA_EXTENTS', (22.0, 80.0, 12.0), (0.0, 40.0, 0.0), guides)

    for name, (location, target) in CAMERAS.items():
        add_camera(name, location, target, guides)

    print('EVA M3 modeling scene structure created.')


if __name__ == '__main__':
    main()
