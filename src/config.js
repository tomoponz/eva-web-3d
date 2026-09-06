// Project blockout parameters. Values here are production assumptions, not canon dimensions.
// 1 scene unit = 1 meter.
export const CAGE_CONFIG = {
  EVA_HEIGHT: 80,

  // Set an explicit number to override the ratio-derived value.
  CAGE_WIDTH: null,
  CAGE_DEPTH: null,
  CAGE_HEIGHT: null,
  CAGE_WIDTH_RATIO: 0.52,
  CAGE_DEPTH_RATIO: 0.55,
  CAGE_HEIGHT_RATIO: 1.35,

  BAY_COUNT: 1,
  BAY_SPACING: null,
  WALL_SECTION_MODE: 'rectilinear-blockout',

  CATWALK_LEVEL_COUNT: 1,
  CATWALK_ELEVATIONS: null,

  LOWER_PIT_DEPTH: null,
  LOWER_PIT_DEPTH_RATIO: 0.12,
  CAGE_FLUID_ENABLED: false,
  CAGE_FLUID_LEVEL: null,
  CAGE_FLUID_TYPE: 'UNSPECIFIED',

  ENTRY_PLUG_KEEP_OUT: {
    widthRatio: 0.24,
    heightRatio: 0.18,
    depthRatio: 0.30,
    centerHeightRatio: 0.74,
    rearOffsetRatio: 0.12
  },
  ENTRY_PLUG_INSERTION_AXIS: 'UNRESOLVED',

  SERVICE_BRIDGE_ENABLED: false,
  REAR_SUPPORT_MODE: 'UNRESOLVED',
  TRANSFER_INTERFACE_ORIENTATION: 'rearward-provisional',
  LAUNCH_INTERFACE_OFFSET: null,

  HUMAN_EYE_HEIGHT: 1.68,
  PLAYER_RADIUS: 0.34,
  PLAYER_HEIGHT: 1.76,
  PLAYER_SPEED: 4.2,
  PLAYER_FAST_SPEED: 7.2,
  GRAVITY: 20,
  STEP_HEIGHT: 0.42
};

export function deriveConfig(source = CAGE_CONFIG) {
  const eva = source.EVA_HEIGHT;
  const width = source.CAGE_WIDTH ?? eva * source.CAGE_WIDTH_RATIO;
  const depth = source.CAGE_DEPTH ?? eva * source.CAGE_DEPTH_RATIO;
  const height = source.CAGE_HEIGHT ?? eva * source.CAGE_HEIGHT_RATIO;
  const pitDepth = source.LOWER_PIT_DEPTH ?? eva * source.LOWER_PIT_DEPTH_RATIO;
  const deckElevations = source.CATWALK_ELEVATIONS ?? Array.from(
    { length: source.CATWALK_LEVEL_COUNT },
    (_, index) => eva * (0.15 + index * 0.12)
  );

  const keepOut = {
    width: eva * source.ENTRY_PLUG_KEEP_OUT.widthRatio,
    height: eva * source.ENTRY_PLUG_KEEP_OUT.heightRatio,
    depth: eva * source.ENTRY_PLUG_KEEP_OUT.depthRatio,
    centerY: eva * source.ENTRY_PLUG_KEEP_OUT.centerHeightRatio,
    centerZ: -eva * source.ENTRY_PLUG_KEEP_OUT.rearOffsetRatio
  };

  return {
    ...source,
    CAGE_WIDTH: width,
    CAGE_DEPTH: depth,
    CAGE_HEIGHT: height,
    BAY_SPACING: source.BAY_SPACING ?? width * 1.08,
    LOWER_PIT_DEPTH: pitDepth,
    CAGE_FLUID_LEVEL: source.CAGE_FLUID_LEVEL ?? -pitDepth * 0.65,
    CATWALK_ELEVATIONS: deckElevations,
    ENTRY_PLUG_KEEP_OUT: keepOut,
    LAUNCH_INTERFACE_OFFSET: source.LAUNCH_INTERFACE_OFFSET ?? {
      x: 0,
      y: 0,
      z: -depth * 0.72
    }
  };
}
