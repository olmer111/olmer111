export interface AudioSegment {
  id: number;
  filename: string;
  startSecond: number;
  duration: number;
}

// Audio segments in chronological order
export const AUDIO_TIMELINE: AudioSegment[] = [
  {
    id: 1,
    filename: 'audio_01.mp3',
    startSecond: 0,
    duration: 91.768125,
  },
  {
    id: 2,
    filename: 'audio_02.mp3',
    startSecond: 91.768125,
    duration: 148.976313,
  },
  {
    id: 3,
    filename: 'audio_03.mp3',
    startSecond: 240.744438,
    duration: 69.746938,
  },
  {
    id: 4,
    filename: 'audio_04.mp3',
    startSecond: 310.491376,
    duration: 255.033438,
  },
  {
    id: 5,
    filename: 'audio_05.mp3',
    startSecond: 565.524814,
    duration: 150.831000,
  },
  // Note: audio_05 ends at 716.355814, which exceeds video duration (522s)
  // Only audios 1-4 and partial audio 5 will be used
];

export const TOTAL_AUDIO_DURATION = AUDIO_TIMELINE[AUDIO_TIMELINE.length - 1].startSecond +
  AUDIO_TIMELINE[AUDIO_TIMELINE.length - 1].duration;
