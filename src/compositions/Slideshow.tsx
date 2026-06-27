import React from 'react';
import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, staticFile, interpolate, Audio } from 'remotion';
import { IMAGE_TIMELINE, TOTAL_DURATION_SECONDS } from '../data/images';

const FADE_FRAMES = 8; // crossfade duration in frames

export const Slideshow: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentSecond = frame / fps;

  // Find current and next image based on current time
  let currentIdx = 0;
  for (let i = IMAGE_TIMELINE.length - 1; i >= 0; i--) {
    if (IMAGE_TIMELINE[i].startSecond <= currentSecond) {
      currentIdx = i;
      break;
    }
  }

  const current = IMAGE_TIMELINE[currentIdx];
  const next = IMAGE_TIMELINE[currentIdx + 1];

  // Frame at which next image starts
  const nextStartFrame = next ? next.startSecond * fps : Infinity;
  const framesUntilNext = nextStartFrame - frame;

  // Crossfade opacity: current fades out, next fades in during last FADE_FRAMES
  const currentOpacity = next
    ? interpolate(framesUntilNext, [0, FADE_FRAMES], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
    : 1;

  const nextOpacity = next
    ? interpolate(framesUntilNext, [0, FADE_FRAMES], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
    : 0;

  return (
    <AbsoluteFill style={{ background: '#000' }}>
      {/* Narration audio */}
      <Audio src={staticFile('guion_completo.mp3')} />

      {/* Current image */}
      <AbsoluteFill style={{ opacity: currentOpacity }}>
        <Img
          src={staticFile(`images/${current.filename}`)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AbsoluteFill>

      {/* Next image (pre-loaded for smooth crossfade) */}
      {next && (
        <AbsoluteFill style={{ opacity: nextOpacity }}>
          <Img
            src={staticFile(`images/${next.filename}`)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
