import type { KenBurnsConfig } from '../data/animations';

/**
 * Camera angle presets that modify Ken Burns behavior
 * Currently used for selection/categorization
 * Can be extended for more sophisticated effects (DOF, rotation, etc)
 */

export function wideAngleModifier(baseConfig: KenBurnsConfig): KenBurnsConfig {
  // Wide angle: slight pull-back (lower zoom values)
  return {
    ...baseConfig,
    startZoom: Math.max(0.9, baseConfig.startZoom - 0.1),
    endZoom: Math.max(0.95, baseConfig.endZoom - 0.1),
  };
}

export function closeUpModifier(baseConfig: KenBurnsConfig): KenBurnsConfig {
  // Close-up: zoom in more (higher zoom values)
  return {
    ...baseConfig,
    startZoom: baseConfig.startZoom + 0.1,
    endZoom: baseConfig.endZoom + 0.15,
  };
}

export function tiltedModifier(baseConfig: KenBurnsConfig): KenBurnsConfig {
  // Tilted: increased pan for more dynamic movement
  return {
    ...baseConfig,
    panStartX: baseConfig.panStartX * 1.3,
    panStartY: baseConfig.panStartY * 1.3,
    panEndX: baseConfig.panEndX * 1.3,
    panEndY: baseConfig.panEndY * 1.3,
  };
}

export function normalModifier(baseConfig: KenBurnsConfig): KenBurnsConfig {
  // Normal: use as-is
  return baseConfig;
}

/**
 * Apply camera angle modifier to animation config
 */
export function applyCameraAngle(
  baseConfig: KenBurnsConfig,
  angle: 'wide' | 'close' | 'tilted' | 'normal' = 'normal'
): KenBurnsConfig {
  switch (angle) {
    case 'wide':
      return wideAngleModifier(baseConfig);
    case 'close':
      return closeUpModifier(baseConfig);
    case 'tilted':
      return tiltedModifier(baseConfig);
    case 'normal':
    default:
      return normalModifier(baseConfig);
  }
}
