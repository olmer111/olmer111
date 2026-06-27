import React from 'react';
import { AbsoluteFill, Img, useVideoConfig } from 'remotion';
import type { ImageAnimationConfig } from '../data/animations';
import { calculateKenBurnsTransform, getAnimationProgress, isInCrossfadeZone } from '../utils/animation';
import { applyCameraAngle } from '../utils/camera-angles';

interface AnimatedImageProps {
  src: string;
  animationConfig: ImageAnimationConfig;
  opacity: number;
  imageStartFrame: number;
  imageEndFrame: number;
  currentFrame: number;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  animationConfig,
  opacity,
  imageStartFrame,
  imageEndFrame,
  currentFrame,
}) => {
  const { fps } = useVideoConfig();

  // Calculate progress through this image (0-1)
  const progress = getAnimationProgress(currentFrame, imageStartFrame, imageEndFrame);

  // Disable Ken Burns during crossfade to prevent jank
  const inCrossfade = isInCrossfadeZone(opacity);

  // Apply camera angle modifier to base Ken Burns config
  const finalConfig = applyCameraAngle(animationConfig.kenBurns, animationConfig.cameraAngle);

  // Calculate transform only if not in crossfade
  const transform = inCrossfade
    ? { transform: 'translate(0%, 0%) scale(1)', transformOrigin: 'center center', willChange: 'transform' }
    : calculateKenBurnsTransform(progress, finalConfig);

  return (
    <AbsoluteFill style={{ opacity }}>
      <Img
        src={src}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ...transform,
        }}
      />
    </AbsoluteFill>
  );
};
