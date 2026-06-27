import { interpolate } from 'remotion';
import type { KenBurnsConfig } from '../data/animations';

export interface KenBurnsTransform {
  transform: string;
  transformOrigin: string;
  willChange: string;
}

/**
 * Calculate Ken Burns transform (zoom + pan effect) over time
 * Simulates slow camera movement across an image
 */
export function calculateKenBurnsTransform(
  progress: number, // 0-1 over image duration
  config: KenBurnsConfig
): KenBurnsTransform {
  const zoom = interpolate(progress, [0, 1], [config.startZoom, config.endZoom]);
  const panX = interpolate(progress, [0, 1], [config.panStartX, config.panEndX]);
  const panY = interpolate(progress, [0, 1], [config.panStartY, config.panEndY]);

  return {
    transform: `translate(${panX}%, ${panY}%) scale(${zoom})`,
    transformOrigin: 'center center',
    willChange: 'transform', // GPU acceleration
  };
}

/**
 * Calculate progress through current image (0-1)
 */
export function getAnimationProgress(
  currentFrame: number,
  imageStartFrame: number,
  imageEndFrame: number
): number {
  if (imageEndFrame <= imageStartFrame) return 0;
  const progress = (currentFrame - imageStartFrame) / (imageEndFrame - imageStartFrame);
  return Math.max(0, Math.min(1, progress)); // Clamp to 0-1
}

/**
 * Get opacity for subtitle fade in/out
 * Includes fade-in (0.4s), stable display, fade-out (0.4s)
 */
export function getSubtitleOpacity(
  currentFrame: number,
  startFrame: number,
  endFrame: number,
  fps: number = 30
): number {
  const fadeFrames = Math.ceil(0.4 * fps); // 0.4s fade

  const fadeInOpacity = interpolate(
    currentFrame,
    [startFrame, startFrame + fadeFrames],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );

  const fadeOutOpacity = interpolate(
    currentFrame,
    [endFrame - fadeFrames, endFrame],
    [1, 0],
    { extrapolateLeft: 'clamp' }
  );

  // Return minimum (both must be high for full opacity)
  return Math.min(fadeInOpacity, fadeOutOpacity);
}

/**
 * Check if we're in crossfade zone (transition between images)
 * Ken Burns should be disabled during crossfade to prevent visual jank
 */
export function isInCrossfadeZone(
  opacity: number,
  threshold: number = 0.3
): boolean {
  // During crossfade, opacity is between threshold values
  // (fading in or out)
  return opacity >= threshold && opacity <= (1 - threshold);
}
