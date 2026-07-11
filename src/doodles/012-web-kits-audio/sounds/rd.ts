// From https://recent.design/

import type { SoundDefinition } from '@web-kits/audio';

// More here https://audio.raphaelsalaja.com/library
export const rd = {
  press: {
    layers: [
      {
        source: {
          type: `noise`,
          color: `white`,
        },
        filter: {
          type: `bandpass`,
          frequency: 2100,
          resonance: 0.9,
        },
        envelope: {
          attack: 0,
          decay: 0.006,
          sustain: 0,
          release: 0.003,
        },
        gain: 0.11,
      },
      {
        source: {
          type: `triangle`,
          frequency: {
            start: 520,
            end: 430,
          },
        },
        envelope: {
          attack: 0.001,
          decay: 0.038,
          sustain: 0,
          release: 0.014,
        },
        gain: 0.62,
      },
      {
        source: {
          type: `sine`,
          frequency: {
            start: 1220,
            end: 880,
          },
          fm: {
            ratio: 0.5,
            depth: 35,
          },
        },
        envelope: {
          attack: 0.001,
          decay: 0.018,
          sustain: 0,
          release: 0.007,
        },
        gain: 0.18,
      },
    ],
  },
  pressOutline: {
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
  },
  pressSoft: {
    layers: [
      {
        source: {
          type: `noise`,
          color: `pink`,
        },
        filter: {
          type: `bandpass`,
          frequency: 1980,
          resonance: 0.85,
        },
        envelope: {
          attack: 0,
          decay: 0.007,
          sustain: 0,
          release: 0.003,
        },
        gain: 0.1,
      },
      {
        source: {
          type: `sine`,
          frequency: {
            start: 760,
            end: 580,
          },
          fm: {
            ratio: 0.5,
            depth: 24,
          },
        },
        filter: {
          type: `lowpass`,
          frequency: 2600,
          resonance: 0.7,
        },
        envelope: {
          attack: 0.001,
          decay: 0.034,
          sustain: 0,
          release: 0.012,
        },
        gain: 0.52,
      },
      {
        source: {
          type: `sine`,
          frequency: {
            start: 1420,
            end: 1100,
          },
        },
        envelope: {
          attack: 0.001,
          decay: 0.016,
          sustain: 0,
          release: 0.006,
        },
        gain: 0.14,
      },
    ],
  },
  pressGhost: {
    layers: [
      {
        source: {
          type: `noise`,
          color: `white`,
        },
        filter: {
          type: `bandpass`,
          frequency: 7200,
          resonance: 1.1,
        },
        envelope: {
          attack: 0,
          decay: 0.004,
          sustain: 0,
          release: 0.002,
        },
        gain: 0.11,
      },
      {
        source: {
          type: `sine`,
          frequency: {
            start: 2200,
            end: 1800,
          },
          fm: {
            ratio: 0.5,
            depth: 42,
          },
        },
        envelope: {
          attack: 0,
          decay: 0.014,
          sustain: 0,
          release: 0.005,
        },
        gain: 0.3,
      },
      {
        source: {
          type: `triangle`,
          frequency: {
            start: 320,
            end: 240,
          },
        },
        envelope: {
          attack: 0,
          decay: 0.021,
          sustain: 0,
          release: 0.008,
        },
        gain: 0.11,
      },
    ],
  },
  pop: {
    source: {
      type: `sine`,
      frequency: {
        start: 300,
        end: 2e3,
      },
    },
    envelope: {
      attack: 0.008,
      decay: 0.12,
      sustain: 0,
      release: 0.04,
    },
    gain: 0.32,
  },
  select: {
    source: {
      type: `sine`,
      frequency: {
        start: 860,
        end: 1040,
      },
    },
    envelope: {
      attack: 0.001,
      decay: 0.05,
      sustain: 0,
      release: 0.02,
    },
    gain: 1,
  },
  toggleOn: {
    layers: [
      {
        source: {
          type: `sine`,
          frequency: 520,
        },
        envelope: {
          attack: 0.001,
          decay: 0.065,
          sustain: 0,
          release: 0.02,
        },
        gain: 1,
      },
      {
        source: {
          type: `sine`,
          frequency: 760,
        },
        envelope: {
          attack: 0.001,
          decay: 0.07,
          sustain: 0,
          release: 0.02,
        },
        delay: 0.035,
        gain: 1,
      },
    ],
  },
  toggleOff: {
    layers: [
      {
        source: {
          type: `sine`,
          frequency: 620,
        },
        envelope: {
          attack: 0.001,
          decay: 0.055,
          sustain: 0,
          release: 0.018,
        },
        gain: 1,
      },
      {
        source: {
          type: `sine`,
          frequency: 410,
        },
        envelope: {
          attack: 0.001,
          decay: 0.055,
          sustain: 0,
          release: 0.018,
        },
        delay: 0.03,
        gain: 1,
      },
    ],
  },
  open: {
    source: {
      type: `sine`,
      frequency: {
        start: 420,
        end: 760,
      },
    },
    envelope: {
      attack: 0.002,
      decay: 0.09,
      sustain: 0,
      release: 0.03,
    },
    gain: 1,
  },
  close: {
    source: {
      type: `sine`,
      frequency: {
        start: 720,
        end: 360,
      },
    },
    envelope: {
      attack: 0.002,
      decay: 0.08,
      sustain: 0,
      release: 0.025,
    },
    gain: 1,
  },
  success: {
    layers: [
      {
        source: {
          type: `sine`,
          frequency: 523,
        },
        envelope: {
          attack: 0.003,
          decay: 0.3,
          sustain: 0.06,
          release: 0.1,
        },
        gain: 0.16,
      },
      {
        source: {
          type: `sine`,
          frequency: 659,
        },
        envelope: {
          attack: 0.003,
          decay: 0.28,
          sustain: 0.05,
          release: 0.1,
        },
        delay: 0.07,
        gain: 0.14,
      },
      {
        source: {
          type: `sine`,
          frequency: {
            start: 784,
            end: 880,
          },
        },
        envelope: {
          attack: 0.003,
          decay: 0.32,
          sustain: 0.06,
          release: 0.12,
        },
        delay: 0.14,
        gain: 0.15,
      },
    ],
  },
  error: {
    layers: [
      {
        source: {
          type: `sawtooth`,
          frequency: {
            start: 320,
            end: 140,
          },
        },
        filter: {
          type: `lowpass`,
          frequency: 1200,
        },
        envelope: {
          attack: 0,
          decay: 0.25,
          sustain: 0,
          release: 0.08,
        },
        gain: 0.22,
      },
      {
        source: {
          type: `square`,
          frequency: {
            start: 180,
            end: 80,
          },
        },
        filter: {
          type: `lowpass`,
          frequency: 800,
        },
        envelope: {
          attack: 0,
          decay: 0.2,
          sustain: 0,
          release: 0.06,
        },
        delay: 0.03,
        gain: 0.12,
      },
    ],
  },
  copy: {
    layers: [
      {
        source: {
          type: `sine`,
          frequency: 1200,
        },
        envelope: {
          attack: 0,
          decay: 0.015,
          sustain: 0,
          release: 0.006,
        },
        gain: 0.16,
      },
      {
        source: {
          type: `sine`,
          frequency: 1400,
        },
        envelope: {
          attack: 0,
          decay: 0.015,
          sustain: 0,
          release: 0.006,
        },
        delay: 0.04,
        gain: 0.14,
      },
    ],
  },
  realtimeHover: {
    source: {
      type: `sine`,
      frequency: 1300,
    },
    envelope: {
      attack: 0.005,
      decay: 0.015,
      sustain: 0,
      release: 0.008,
    },
    gain: 1,
  },
} satisfies Record<string, SoundDefinition>;
