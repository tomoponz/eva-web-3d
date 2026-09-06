import numpy as np, os, struct, json
from pathlib import Path

VS=0.12
# bounds meters
XMIN,XMAX=-15,15
YMIN,YMAX=0,80.4
ZMIN,ZMAX=-8,8
xs=np.arange(XMIN,XMAX+VS*0.5,VS,dtype=np.float32)
ys=np.arange(YMIN,YMAX+VS*0.5,VS,dtype=np.float32)
zs=np.arange(ZMIN,ZMAX+VS*0.5,VS,dtype=np.float32)
occ=np.zeros((len(xs),len(ys),len(zs)),dtype=np.uint8)
# 0 empty; 1 purple,2 dark,3 green,4 metal,5 orange,6 eye


def idx_bounds(cx,cy,cz,rx,ry,rz):
    ix0=max(0,int(np.floor((cx-rx-XMIN)/VS))); ix1=min(len(xs),int(np.ceil((cx+rx-XMIN)/VS))+1)
    iy0=max(0,int(np.floor((cy-ry-YMIN)/VS))); iy1=min(len(ys),int(np.ceil((cy+ry-YMIN)/VS))+1)
    iz0=max(0,int(np.floor((cz-rz-ZMIN)/VS))); iz1=min(len(zs),int(np.ceil((cz+rz-ZMIN)/VS))+1)
    return ix0,ix1,iy0,iy1,iz0,iz1

def add_super(cx,cy,cz,rx,ry,rz,mat=1,p=4.0,rot_z=0.0, rot_x=0.0):
    ix0,ix1,iy0,iy1,iz0,iz1=idx_bounds(cx,cy,cz,rx*1.4,ry*1.4,rz*1.4)
    X=xs[ix0:ix1,None,None]-cx; Y=ys[None,iy0:iy1,None]-cy; Z=zs[None,None,iz0:iz1]-cz
    if rot_z:
        c=np.cos(rot_z); s=np.sin(rot_z); X,Y=c*X+s*Y,-s*X+c*Y
    if rot_x:
        c=np.cos(rot_x); s=np.sin(rot_x); Y,Z=c*Y+s*Z,-s*Y+c*Z
    q=(np.abs(X/rx)**p + np.abs(Y/ry)**p + np.abs(Z/rz)**p)
    mask=q<=1
    sub=occ[ix0:ix1,iy0:iy1,iz0:iz1]
    sub[mask]=mat

def add_tapered_y(cx,cy,cz,height,wx0,wx1,dz0,dz1,mat=1,p=4.0,lean_x=0.0,lean_z=0.0):
    ry=height/2
    rx=max(wx0,wx1)/2*1.2; rz=max(dz0,dz1)/2*1.2
    ix0,ix1,iy0,iy1,iz0,iz1=idx_bounds(cx,cy,cz,rx+abs(lean_x),ry,rz+abs(lean_z))
    X=xs[ix0:ix1,None,None]; Y=ys[None,iy0:iy1,None]; Z=zs[None,None,iz0:iz1]
    t=np.clip((Y-(cy-ry))/height,0,1)
    ccx=cx + (t-0.5)*lean_x
    ccz=cz + (t-0.5)*lean_z
    hx=(wx0*(1-t)+wx1*t)/2
    hz=(dz0*(1-t)+dz1*t)/2
    yn=(Y-cy)/ry
    cross=(np.abs((X-ccx)/hx)**p + np.abs((Z-ccz)/hz)**p)<=1
    end=np.abs(yn)<=1
    mask=cross & end
    sub=occ[ix0:ix1,iy0:iy1,iz0:iz1]; sub[mask]=mat

def add_capsule(a,b,r,mat=2):
    ax,ay,az=a; bx,by,bz=b
    cx=(ax+bx)/2; cy=(ay+by)/2; cz=(az+bz)/2
    rx=abs(bx-ax)/2+r; ry=abs(by-ay)/2+r; rz=abs(bz-az)/2+r
    ix0,ix1,iy0,iy1,iz0,iz1=idx_bounds(cx,cy,cz,rx,ry,rz)
    X=xs[ix0:ix1,None,None]; Y=ys[None,iy0:iy1,None]; Z=zs[None,None,iz0:iz1]
    ab=np.array([bx-ax,by-ay,bz-az],dtype=np.float32); den=float(np.dot(ab,ab))
    t=((X-ax)*ab[0]+(Y-ay)*ab[1]+(Z-az)*ab[2])/den; t=np.clip(t,0,1)
    dx=X-(ax+t*ab[0]); dy=Y-(ay+t*ab[1]); dz=Z-(az+t*ab[2])
    mask=(dx*dx+dy*dy+dz*dz)<=r*r
    sub=occ[ix0:ix1,iy0:iy1,iz0:iz1]; sub[mask]=mat

def carve_super(cx,cy,cz,rx,ry,rz,p=4.0):
    ix0,ix1,iy0,iy1,iz0,iz1=idx_bounds(cx,cy,cz,rx,ry,rz)
    X=xs[ix0:ix1,None,None]-cx; Y=ys[None,iy0:iy1,None]-cy; Z=zs[None,None,iz0:iz1]-cz
    q=(np.abs(X/rx)**p+np.abs(Y/ry)**p+np.abs(Z/rz)**p)<=1
    sub=occ[ix0:ix1,iy0:iy1,iz0:iz1]; sub[q]=0

# Authored silhouette: deliberately slender, angular EVA-like proportions.
for s in (-1,1):
    add_super(s*2.35,1.9,1.75,2.05,0.95,4.4,1,p=7)
    add_super(s*2.35,1.9,-1.9,1.45,0.85,1.7,2,p=7)
    add_capsule((s*2.45,3.2,0),(s*2.55,6.0,0),0.95,4)
    add_tapered_y(s*2.35,13.2,0,14.0,2.9,3.4,2.9,3.3,2,p=7,lean_x=-s*0.35)
    add_tapered_y(s*2.32,13.6,1.45,12.6,2.55,2.9,1.25,1.0,1,p=7,lean_x=-s*0.30)
    add_super(s*2.15,21.4,1.15,1.45,1.6,1.65,3,p=6)
    add_tapered_y(s*1.8,30.3,0,15.8,3.55,3.1,3.45,3.0,2,p=6,lean_x=-s*0.75)
    add_tapered_y(s*1.72,30.7,1.45,13.0,3.05,2.65,1.2,0.95,1,p=7,lean_x=-s*0.65)

add_tapered_y(0,40.0,0,5.4,7.0,8.2,5.0,5.8,2,p=7)
add_tapered_y(0,42.0,1.25,4.0,6.2,7.0,2.4,2.8,1,p=7)
add_tapered_y(0,47.4,0,8.0,4.6,5.4,2.8,3.1,2,p=6)
add_tapered_y(0,48.0,2.0,6.6,3.5,4.0,1.15,1.35,1,p=7)

add_tapered_y(0,56.5,0,11.8,6.0,12.4,4.4,5.5,2,p=6)
add_tapered_y(0,57.3,2.35,10.0,5.1,10.8,2.1,2.55,1,p=7)
add_tapered_y(0,57.4,3.45,8.2,0.8,1.05,0.65,0.75,4,p=7)
for s in (-1,1):
    add_tapered_y(s*3.85,58.0,3.6,6.6,0.9,1.25,0.95,1.25,3,p=7,lean_x=s*0.25)
add_super(0,63.0,-0.1,3.5,1.35,2.7,4,p=6)
add_capsule((0,63.4,-0.2),(0,67.0,-0.15),1.35,4)

for s in (-1,1):
    add_capsule((s*4.8,60.8,0.1),(s*6.75,61.8,0.1),1.55,2)
    add_super(s*6.6,61.9,0.3,2.1,2.25,2.7,1,p=6,rot_z=s*0.12)
    add_tapered_y(s*7.6,65.1,-0.35,10.0,2.25,1.4,3.4,2.35,1,p=7,lean_x=s*0.15)
    add_tapered_y(s*7.65,65.3,1.3,7.4,0.65,0.52,1.55,1.05,3,p=7)

for s in (-1,1):
    add_capsule((s*7.0,59.4,0),(s*7.75,50.1,0),1.28,2)
    add_tapered_y(s*7.4,54.8,1.2,7.4,2.25,2.05,1.0,0.85,1,p=6,lean_x=s*0.25)
    add_super(s*7.85,47.7,0.1,1.5,1.45,1.5,4,p=6)
    add_capsule((s*7.9,46.5,0),(s*8.45,37.1,0),1.08,2)
    add_tapered_y(s*8.2,41.5,1.05,7.5,2.0,1.75,0.95,0.75,3,p=6,lean_x=s*0.2)
    add_super(s*8.55,34.5,0.5,0.95,1.9,1.05,2,p=6)

add_tapered_y(0,71.0,-0.25,6.6,5.8,4.4,5.8,4.2,2,p=7)
add_tapered_y(0,70.6,1.65,5.6,4.2,2.8,2.0,1.45,1,p=7)
add_super(0,67.9,2.0,2.25,1.55,2.15,1,p=6)
for s in (-1,1):
    add_super(s*2.0,69.2,1.4,0.95,1.85,1.35,1,p=6,rot_z=s*0.15)
    add_super(s*2.5,70.6,-0.2,0.62,1.65,1.25,3,p=6)
add_super(0,71.05,2.85,1.65,0.28,0.23,6,p=7)
add_tapered_y(0,76.3,0.15,7.2,0.62,0.18,0.68,0.28,3,p=7,lean_z=-0.2)
for s in (-1,1):
    add_tapered_y(s*1.1,74.6,0.0,3.4,0.5,0.2,0.55,0.25,3,p=7,lean_x=s*0.45)

add_tapered_y(0,59.8,-3.1,7.0,4.3,5.0,1.3,1.5,4,p=6)
add_super(0,63.0,-3.8,2.1,2.0,1.05,2,p=6)
for s in (-1,1):
    add_capsule((s*1.25,56.7,-3.2),(s*1.0,63.6,-3.25),0.36,4)

for s in (-1,1):
    carve_super(s*5.0,51.2,0,1.8,6.8,4.3,p=5)
    carve_super(s*4.2,45.5,0,1.35,3.7,3.7,p=5)
add_tapered_y(0,47.5,0,7.6,4.2,5.0,2.6,2.9,2,p=6)

filled=occ>0
interior=filled.copy()
interior[1:-1,1:-1,1:-1] &= filled[:-2,1:-1,1:-1]&filled[2:,1:-1,1:-1]&filled[1:-1,:-2,1:-1]&filled[1:-1,2:,1:-1]&filled[1:-1,1:-1,:-2]&filled[1:-1,1:-1,2:]
surf=filled & ~interior
idx=np.argwhere(surf)
mats=occ[surf]
print('grid',occ.shape,'filled',filled.sum(),'surface',len(idx))

out=Path(__file__).resolve().parent.parent/'assets'/'models'
out.mkdir(parents=True, exist_ok=True)
asset=out/'eva-microvoxel-m5.bin'
meta_path=out/'eva-microvoxel-m5.json'
with asset.open('wb') as f:
    f.write(b'EVVX')
    f.write(struct.pack('<Hf', 2, VS))
    f.write(struct.pack('<fff', XMIN, YMIN, ZMIN))
    f.write(struct.pack('<I', len(idx)))
    for (ix,iy,iz),m in zip(idx,mats):
        f.write(struct.pack('<HHHB', int(ix), int(iy), int(iz), int(m)))
meta={
    'version': 2,
    'voxel_size_m': VS,
    'surface_voxels': int(len(idx)),
    'height_m': 80,
    'origin_m': [XMIN,YMIN,ZMIN],
    'materials': {
        '1':'purple_armor','2':'dark_frame','3':'green_accent',
        '4':'metal_joint','5':'warning_orange','6':'emissive_eye'
    },
    'rendering': {
        'near':'instanced micro-cubes',
        'far':'vertex-colored point cloud from identical surface samples'
    },
    'status':'production assumption; not canon dimensions'
}
meta_path.write_text(json.dumps(meta,indent=2)+'\n',encoding='utf-8')
print(json.dumps({'asset':str(asset),'bytes':asset.stat().st_size,'surface_voxels':int(len(idx)),'voxel_size_m':VS}))
