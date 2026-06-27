import React from 'react';
import { Composition } from 'remotion';
import { HelloWorld } from './compositions/HelloWorld';
import { Slideshow } from './compositions/Slideshow';
import { TOTAL_DURATION_SECONDS } from './data/images';

const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Slideshow"
        component={Slideshow}
        durationInFrames={TOTAL_DURATION_SECONDS * FPS}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ message: '¡Hola Mundo!' }}
      />
    </>
  );
};
