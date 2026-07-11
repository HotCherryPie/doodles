import { useEventListener } from '@vueuse/core';
import { defineSound } from '@web-kits/audio';

const play = defineSound({
  layers: [
    {
      source: {
        type: `noise`,
        color: `white`,
      },
      filter: {
        type: `bandpass`,
        frequency: 2950,
        resonance: 1.2,
      },
      envelope: {
        attack: 0,
        decay: 0.005,
        sustain: 0,
        release: 0.002,
      },
      gain: 0.13,
    },
    {
      source: {
        type: `sine`,
        frequency: {
          start: 1250,
          end: 970,
        },
        fm: {
          ratio: 0.5,
          depth: 48,
        },
      },
      envelope: {
        attack: 0.001,
        decay: 0.025,
        sustain: 0,
        release: 0.008,
      },
      gain: 0.4,
    },
    {
      source: {
        type: `triangle`,
        frequency: {
          start: 220,
          end: 150,
        },
      },
      envelope: {
        attack: 0,
        decay: 0.018,
        sustain: 0,
        release: 0.006,
      },
      gain: 0.12,
    },
  ],
});

const handler = (event: Event) => {
  // Check for `data-silent` attribute
  const shouldNotPlay = event
    .composedPath()
    .some((it) => it instanceof HTMLElement && 'silent' in it.dataset);

  if (!shouldNotPlay) play();
};

export const setupClickSound = () => {
  useEventListener('click', handler);
};
