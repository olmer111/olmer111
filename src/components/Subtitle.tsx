import React from 'react';
import { AbsoluteFill, useVideoConfig } from 'remotion';
import type { SubtitleSegment } from '../data/subtitles';
import { getSubtitleOpacity } from '../utils/animation';

interface SubtitleProps {
  segment: SubtitleSegment;
  currentFrame: number;
}

export const Subtitle: React.FC<SubtitleProps> = ({ segment, currentFrame }) => {
  const { fps } = useVideoConfig();

  const startFrame = Math.round(segment.startSecond * fps);
  const endFrame = Math.round(segment.endSecond * fps);

  // Calculate opacity with fade in/out
  const opacity = getSubtitleOpacity(currentFrame, startFrame, endFrame, fps);

  // Only render if opacity > 0
  if (opacity <= 0) return null;

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: '80px',
      }}
    >
      <div
        style={{
          color: '#ffffff',
          fontSize: '28px',
          fontWeight: 600,
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
          maxWidth: '90%',
          lineHeight: '1.4',
          opacity,
          textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
          transition: 'opacity 0.1s ease-out',
        }}
      >
        {segment.text}
      </div>
    </AbsoluteFill>
  );
};
