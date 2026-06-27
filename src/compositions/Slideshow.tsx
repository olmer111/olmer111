import React from 'react';
import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, staticFile, interpolate, Audio } from 'remotion';
import { IMAGE_TIMELINE, TOTAL_DURATION_SECONDS } from '../data/images';
import { AUDIO_TIMELINE } from '../data/audio_timeline';
import { IMAGE_ANIMATIONS, createDefaultAnimation } from '../data/animations';
import { SUBTITLE_TIMELINE } from '../data/subtitles';
import { AnimatedImage } from '../components/AnimatedImage';
import { Subtitle } from '../components/Subtitle';

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

  // Get animation config for current and next image
  const currentAnimationConfig = IMAGE_ANIMATIONS[currentIdx] || createDefaultAnimation(current.num);
  const nextAnimationConfig = next
    ? IMAGE_ANIMATIONS[next.num] || createDefaultAnimation(next.num)
    : null;

  // Get active subtitle based on current time
  const activeSubtitle = SUBTITLE_TIMELINE.find(
    (s) => s.startSecond <= currentSecond && currentSecond < s.endSecond
  );

  return (
    <AbsoluteFill style={{ background: '#000' }}>
      {/* Narration audio segments */}
      {AUDIO_TIMELINE.map((audio) => (
        <Audio
          key={audio.id}
          src={staticFile(audio.filename)}
          startFrom={Math.round(audio.startSecond * fps)}
        />
      ))}

      {/* Current image with Ken Burns animation */}
      <AnimatedImage
        src={staticFile(`images/${current.filename}`)}
        animationConfig={currentAnimationConfig}
        opacity={currentOpacity}
        imageStartFrame={Math.round(current.startSecond * fps)}
        imageEndFrame={nextStartFrame === Infinity ? frame + 1000 : nextStartFrame}
        currentFrame={frame}
      />

      {/* Next image (pre-loaded for smooth crossfade) with Ken Burns animation */}
      {next && (
        <AnimatedImage
          src={staticFile(`images/${next.filename}`)}
          animationConfig={nextAnimationConfig!}
          opacity={nextOpacity}
          imageStartFrame={nextStartFrame}
          imageEndFrame={
            currentIdx + 2 < IMAGE_TIMELINE.length
              ? Math.round(IMAGE_TIMELINE[currentIdx + 2].startSecond * fps)
              : frame + 1000
          }
          currentFrame={frame}
        />
      )}

      {/* Subtitle overlay */}
      {activeSubtitle && <Subtitle segment={activeSubtitle} currentFrame={frame} />}
    </AbsoluteFill>
  );
};
