import type { SoundDefinition } from '@web-kits/audio';

export const primitives = {
  a: {
    layers: [
      {
        source: {
          type: 'triangle',
          frequency: { start: 360, end: 145 },
          fm: { ratio: 0.5, depth: 55 },
        },
        filter: { type: 'lowpass', frequency: 1400, resonance: 1.2 },
        envelope: { attack: 0, decay: 0.034, sustain: 0, release: 0.012 },
        delay: 0.008,
        gain: 0.05,
      },
    ],
  },
} satisfies Record<string, SoundDefinition>;
