import { defineSound } from '@web-kits/audio';
import type { PlayOptions, VoiceHandle } from '@web-kits/audio';

export const sounds = {
  on: defineSound({
    layers: [
      {
        source: { type: `noise`, color: `white` },
        filter: { type: `bandpass`, frequency: 1000, resonance: 1 },
        envelope: { attack: 0, decay: 0.005, sustain: 0, release: 0.2 },
        delay: 0,
      },
      {
        source: { type: `noise`, color: `white` },
        filter: { type: `bandpass`, frequency: 3000, resonance: 1 },
        envelope: { attack: 0, decay: 0.005, sustain: 0, release: 0.002 },
        delay: 0.09,
      },
    ],
  }),

  off: defineSound({
    layers: [
      {
        source: { type: `noise`, color: `white` },
        filter: { type: `bandpass`, frequency: 4000, resonance: 1 },
        envelope: { attack: 0, decay: 0.002, sustain: 0, release: 0.002 },
        gain: 0.5,
        delay: 0,
      },
      {
        source: { type: `noise`, color: `white` },
        filter: { type: `bandpass`, frequency: 950, resonance: 1 },
        envelope: { attack: 0, decay: 0.005, sustain: 0, release: 0.2 },
        delay: 0.09,
      },
    ],
  }),
} satisfies Record<string, (options?: PlayOptions) => VoiceHandle>;
