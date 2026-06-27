export interface KenBurnsConfig {
  startZoom: number;
  endZoom: number;
  panStartX: number; // percentage
  panStartY: number; // percentage
  panEndX: number; // percentage
  panEndY: number; // percentage
}

export interface ImageAnimationConfig {
  imageNum: number;
  kenBurns: KenBurnsConfig;
  cameraAngle?: 'wide' | 'close' | 'tilted' | 'normal';
}

// Animation presets for key images with varied Ken Burns effects
export const IMAGE_ANIMATIONS: Record<number, ImageAnimationConfig> = {
  // APERTURA
  1: {
    imageNum: 1,
    kenBurns: { startZoom: 1.0, endZoom: 1.2, panStartX: 0, panStartY: 0, panEndX: 10, panEndY: -8 },
    cameraAngle: 'wide',
  },
  2: {
    imageNum: 2,
    kenBurns: { startZoom: 1.05, endZoom: 1.28, panStartX: 5, panStartY: -5, panEndX: -12, panEndY: 10 },
    cameraAngle: 'wide',
  },
  3: {
    imageNum: 3,
    kenBurns: { startZoom: 1.1, endZoom: 1.32, panStartX: -10, panStartY: 5, panEndX: 15, panEndY: -10 },
    cameraAngle: 'close',
  },
  4: {
    imageNum: 4,
    kenBurns: { startZoom: 1.0, endZoom: 1.25, panStartX: 8, panStartY: -8, panEndX: -5, panEndY: 12 },
    cameraAngle: 'normal',
  },
  5: {
    imageNum: 5,
    kenBurns: { startZoom: 1.08, endZoom: 1.3, panStartX: -8, panStartY: 0, panEndX: 10, panEndY: -15 },
    cameraAngle: 'wide',
  },
  6: {
    imageNum: 6,
    kenBurns: { startZoom: 1.02, endZoom: 1.27, panStartX: 12, panStartY: 8, panEndX: -8, panEndY: -12 },
    cameraAngle: 'normal',
  },
  7: {
    imageNum: 7,
    kenBurns: { startZoom: 1.12, endZoom: 1.35, panStartX: -12, panStartY: -10, panEndX: 8, panEndY: 15 },
    cameraAngle: 'close',
  },
  8: {
    imageNum: 8,
    kenBurns: { startZoom: 1.0, endZoom: 1.22, panStartX: 0, panStartY: 10, panEndX: -10, panEndY: -8 },
    cameraAngle: 'wide',
  },
  9: {
    imageNum: 9,
    kenBurns: { startZoom: 1.1, endZoom: 1.3, panStartX: 10, panStartY: -8, panEndX: -15, panEndY: 10 },
    cameraAngle: 'close',
  },
  10: {
    imageNum: 10,
    kenBurns: { startZoom: 1.05, endZoom: 1.28, panStartX: -10, panStartY: 5, panEndX: 12, panEndY: -10 },
    cameraAngle: 'normal',
  },
  // EL FUEGO (sample mix)
  13: {
    imageNum: 13,
    kenBurns: { startZoom: 1.0, endZoom: 1.25, panStartX: 0, panStartY: 0, panEndX: 15, panEndY: -10 },
    cameraAngle: 'wide',
  },
  14: {
    imageNum: 14,
    kenBurns: { startZoom: 1.15, endZoom: 1.35, panStartX: -15, panStartY: 10, panEndX: 10, panEndY: -15 },
    cameraAngle: 'close',
  },
  20: {
    imageNum: 20,
    kenBurns: { startZoom: 1.08, endZoom: 1.3, panStartX: 12, panStartY: -8, panEndX: -10, panEndY: 12 },
    cameraAngle: 'normal',
  },
  // EL DESCUBRIMIENTO
  30: {
    imageNum: 30,
    kenBurns: { startZoom: 1.1, endZoom: 1.32, panStartX: -10, panStartY: 0, panEndX: 15, panEndY: -12 },
    cameraAngle: 'close',
  },
  // EL SUEÑO BIFÁSICO (key moments)
  38: {
    imageNum: 38,
    kenBurns: { startZoom: 1.0, endZoom: 1.28, panStartX: 8, panStartY: -10, panEndX: -12, panEndY: 8 },
    cameraAngle: 'wide',
  },
  45: {
    imageNum: 45,
    kenBurns: { startZoom: 1.12, endZoom: 1.33, panStartX: -12, panStartY: 8, panEndX: 10, panEndY: -15 },
    cameraAngle: 'close',
  },
  50: {
    imageNum: 50,
    kenBurns: { startZoom: 1.05, endZoom: 1.3, panStartX: 10, panStartY: -5, panEndX: -15, panEndY: 10 },
    cameraAngle: 'normal',
  },
  // LA HISTORIA DE LA LUZ ARTIFICIAL
  66: {
    imageNum: 66,
    kenBurns: { startZoom: 1.0, endZoom: 1.25, panStartX: 0, panStartY: 5, panEndX: -10, panEndY: -12 },
    cameraAngle: 'wide',
  },
  74: {
    imageNum: 74,
    kenBurns: { startZoom: 1.15, endZoom: 1.35, panStartX: -15, panStartY: 0, panEndX: 15, panEndY: -10 },
    cameraAngle: 'close',
  },
  // LAS PANTALLAS Y SOLUCIÓN
  82: {
    imageNum: 82,
    kenBurns: { startZoom: 1.08, endZoom: 1.3, panStartX: 12, panStartY: -8, panEndX: -8, panEndY: 12 },
    cameraAngle: 'normal',
  },
  88: {
    imageNum: 88,
    kenBurns: { startZoom: 1.1, endZoom: 1.32, panStartX: -10, panStartY: 8, panEndX: 12, panEndY: -15 },
    cameraAngle: 'close',
  },
  // QUÉ HACER ESTA NOCHE
  94: {
    imageNum: 94,
    kenBurns: { startZoom: 1.0, endZoom: 1.23, panStartX: 5, panStartY: -10, panEndX: -10, panEndY: 8 },
    cameraAngle: 'wide',
  },
  100: {
    imageNum: 100,
    kenBurns: { startZoom: 1.12, endZoom: 1.35, panStartX: -12, panStartY: 10, panEndX: 10, panEndY: -12 },
    cameraAngle: 'close',
  },
  // CONCLUSIÓN
  101: {
    imageNum: 101,
    kenBurns: { startZoom: 1.05, endZoom: 1.28, panStartX: 10, panStartY: -5, panEndX: -12, panEndY: 10 },
    cameraAngle: 'normal',
  },
  108: {
    imageNum: 108,
    kenBurns: { startZoom: 1.0, endZoom: 1.25, panStartX: 0, panStartY: 0, panEndX: 0, panEndY: 0 },
    cameraAngle: 'wide',
  },
};

// Helper to generate random animation for images without presets
export function createDefaultAnimation(imageNum: number): ImageAnimationConfig {
  const angleOptions: Array<'wide' | 'close' | 'tilted' | 'normal'> = ['wide', 'close', 'tilted', 'normal'];
  const randomAngle = angleOptions[Math.floor(Math.random() * angleOptions.length)];

  return {
    imageNum,
    kenBurns: {
      startZoom: 1.0,
      endZoom: 1.2 + Math.random() * 0.15, // 1.2 - 1.35
      panStartX: (Math.random() - 0.5) * 30,
      panStartY: (Math.random() - 0.5) * 30,
      panEndX: (Math.random() - 0.5) * 30,
      panEndY: (Math.random() - 0.5) * 30,
    },
    cameraAngle: randomAngle,
  };
}
