#!/usr/bin/env python3
"""Generate the production continuous-surface EVA GLB for the Web 3D cage.

This is a production mesh generator, not canon geometry. The silhouette is built
as one implicit surface so the body reads as a continuous authored form instead
of a stack of box/cylinder primitives.
"""
from pathlib import Path
import numpy as np
from scipy.ndimage import gaussian_filter
from skimage.measure import marching_cubes
import trimesh

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "models" / "eva-unit-continuous-prod.glb"
RESOLUTION = (56, 140, 56)
TARGET_HEIGHT_M = 80.0


def build_mesh(resolution=RESOLUTION):
    xmin, xmax = -16.0, 16.0
    ymin, ymax = 0.0, 82.0
    zmin, zmax = -10.0, 10.0
    nx, ny, nz = resolution
    x = np.linspace(xmin, xmax, nx)
    y = np.linspace(ymin, ymax, ny)
    z = np.linspace(zmin, zmax, nz)
    X, Y, Z = np.meshgrid(x, y, z, indexing="ij")
    field = np.full((nx, ny, nz), 1e6, dtype=np.float32)

    def union(d):
        nonlocal field
        field = np.minimum(field, d.astype(np.float32))

    def sphere(cx, cy, cz, r):
        return np.sqrt((X-cx)**2 + (Y-cy)**2 + (Z-cz)**2) - r

    def ellipsoid(cx, cy, cz, rx, ry, rz):
        q = np.sqrt(((X-cx)/rx)**2 + ((Y-cy)/ry)**2 + ((Z-cz)/rz)**2)
        return (q - 1.0) * min(rx, ry, rz)

    def box(cx, cy, cz, sx, sy, sz):
        qx = np.abs(X-cx) - sx/2
        qy = np.abs(Y-cy) - sy/2
        qz = np.abs(Z-cz) - sz/2
        ox, oy, oz = np.maximum(qx, 0), np.maximum(qy, 0), np.maximum(qz, 0)
        return np.sqrt(ox*ox + oy*oy + oz*oz) + np.minimum(np.maximum(qx, np.maximum(qy, qz)), 0)

    def capsule(ax, ay, az, bx, by, bz, r):
        pax, pay, paz = X-ax, Y-ay, Z-az
        bax, bay, baz = bx-ax, by-ay, bz-az
        h = np.clip((pax*bax + pay*bay + paz*baz) / (bax*bax + bay*bay + baz*baz), 0, 1)
        dx, dy, dz = pax-bax*h, pay-bay*h, paz-baz*h
        return np.sqrt(dx*dx + dy*dy + dz*dz) - r

    # Limbs and feet.
    for s in (-1, 1):
        union(capsule(2.7*s, 7, 0, 2.4*s, 22.5, 0, 2.0))
        union(capsule(2.0*s, 24, .2, 1.6*s, 38, 0, 2.45))
        union(ellipsoid(2.8*s, 3, 2.5, 2.7, 1.6, 4.9))
        union(ellipsoid(2.9*s, 2.8, -2.1, 1.8, 1.2, 2.1))
        union(sphere(2.6*s, 23.5, .5, 2.1))

    # Continuous pelvis -> torso -> head transition.
    union(ellipsoid(0, 43.5, 0, 6.6, 4.8, 4.3))
    union(ellipsoid(0, 51, 0, 4.8, 5.6, 3.5))
    union(ellipsoid(0, 59, .8, 7.2, 9.2, 4.7))
    union(capsule(0, 64, -.5, 0, 67.6, -.2, 2.1))
    union(ellipsoid(0, 72.2, .5, 4.2, 5.2, 4.3))
    union(ellipsoid(0, 68.2, 2, 3.4, 2.1, 2.8))

    for s in (-1, 1):
        union(ellipsoid(8.2*s, 63, .4, 3.5, 3.5, 4))
        union(capsule(8.8*s, 61.5, 0, 9.5*s, 49.5, 0, 1.75))
        union(sphere(9.7*s, 47, .2, 1.8))
        union(capsule(10*s, 45.2, .3, 10.6*s, 34.2, 0, 1.45))
        union(ellipsoid(10.7*s, 31.8, .5, 1.4, 2, 1.2))
        union(ellipsoid(3*s, 58.5, 3.7, 2.7, 4.2, 1.7))
        union(ellipsoid(4.6*s, 58.8, 4.2, 1.2, 2.9, .9))
        union(ellipsoid(8.6*s, 64.5, .5, 2.8, 2.7, 3))
        union(ellipsoid(2.9*s, 14.5, 2, 2.1, 6, 1.4))
        union(ellipsoid(2*s, 33.8, 2.1, 2.4, 5.5, 1.4))
        union(ellipsoid(2.3*s, 70.3, 1.2, 1.3, 2.2, 1.6))

    # Dorsal / upper-back Entry Plug-region production interpretation.
    union(np.sqrt((np.sqrt(X*X + (Y-65.5)**2)-2.8)**2 + (Z+2.5)**2) - .45)
    union(ellipsoid(0, 63.2, -4, 2.7, 3.4, 1.5))
    for s in (-1, 1):
        union(capsule(1.7*s, 59, -3.7, 1.2*s, 65, -2.9, .52))
        union(capsule(1.4*s, 74.8, .6, 1.9*s, 78.6, .3, .42))
    union(capsule(0, 74.1, .8, 0, 77.5, .5, .36))
    union(box(0, 71.6, 2.8, 4.2, .8, .55))

    field = gaussian_filter(field, sigma=1.0)
    spacing = ((xmax-xmin)/(nx-1), (ymax-ymin)/(ny-1), (zmax-zmin)/(nz-1))
    verts, faces, normals, _ = marching_cubes(field, 0.0, spacing=spacing)
    verts[:, 0] += xmin
    verts[:, 1] += ymin
    verts[:, 2] += zmin
    mesh = trimesh.Trimesh(vertices=verts, faces=faces, vertex_normals=normals, process=True)
    trimesh.smoothing.filter_taubin(mesh, lamb=.25, nu=.26, iterations=3)

    bounds = mesh.bounds
    mesh.apply_scale(TARGET_HEIGHT_M / (bounds[1, 1] - bounds[0, 1]))
    bounds = mesh.bounds
    mesh.apply_translation([-(bounds[0,0]+bounds[1,0])/2, -bounds[0,1], -(bounds[0,2]+bounds[1,2])/2])

    colors = np.tile(np.array([38, 42, 48, 255], dtype=np.uint8), (len(mesh.vertices), 1))
    for i, (vx, vy, vz) in enumerate(mesh.vertices):
        if vy > 68 or (vy > 55 and vz > 2.2) or (vy > 55 and abs(vx) > 8):
            colors[i] = [68, 49, 82, 255]
        if vz > 3.7 and vy > 55 and abs(vx) > 3.5:
            colors[i] = [114, 143, 72, 255]
        if vy > 71 and 2.4 < vz < 3.4 and abs(vx) < 2.4:
            colors[i] = [182, 255, 110, 255]
    mesh.visual.vertex_colors = colors
    return mesh


def main():
    mesh = build_mesh()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    scene = trimesh.Scene()
    scene.add_geometry(mesh, node_name="eva_continuous_prod", geom_name="eva_continuous_prod")
    scene.export(OUT)
    components = len(mesh.split(only_watertight=False))
    print(f"generated={OUT}")
    print(f"vertices={len(mesh.vertices)} triangles={len(mesh.faces)}")
    print(f"watertight={mesh.is_watertight} components={components}")
    print(f"bytes={OUT.stat().st_size} bounds={mesh.bounds.tolist()}")
    if not mesh.is_watertight or components != 1:
        raise SystemExit("Production EVA mesh must be one watertight connected component")
    if not (20_000 <= len(mesh.faces) <= 50_000):
        raise SystemExit("Production EVA triangle budget regression")


if __name__ == "__main__":
    main()
