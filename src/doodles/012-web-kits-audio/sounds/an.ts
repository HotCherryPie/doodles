import type { SoundDefinition } from '@web-kits/audio';

// https://www.anirudh.info/
export const an = {
  tap: {
    source: {
      type: `noise`,
      color: `white`,
    },
    filter: {
      type: `bandpass`,
      frequency: 3200,
      resonance: 3,
    },
    envelope: {
      attack: 0.001,
      decay: 0.012,
      sustain: 0,
      release: 0.004,
    },
    gain: 0.34,
  },
  copy: {
    source: {
      type: `sine`,
      frequency: {
        start: 880,
        end: 1320,
      },
    },
    envelope: {
      attack: 0.001,
      decay: 0.12,
      sustain: 0,
      release: 0.03,
    },
    gain: 0.22,
  },
  tab: {
    source: {
      type: `triangle`,
      frequency: {
        start: 420,
        end: 640,
      },
    },
    envelope: {
      attack: 0.002,
      decay: 0.07,
      sustain: 0,
      release: 0.02,
    },
    gain: 0.16,
  },
  soft: {
    source: {
      type: `noise`,
      color: `pink`,
    },
    filter: {
      type: `bandpass`,
      frequency: 1800,
      resonance: 0.7,
    },
    envelope: {
      attack: 0.001,
      decay: 0.06,
      sustain: 0,
      release: 0.02,
    },
    gain: 0.08,
  },
  link: {
    source: {
      type: `sine`,
      frequency: {
        start: 520,
        end: 360,
      },
    },
    envelope: {
      attack: 0.002,
      decay: 0.05,
      sustain: 0,
      release: 0.02,
    },
    gain: 0.1,
  },
  action: {
    source: {
      type: `square`,
      frequency: {
        start: 620,
        end: 520,
      },
    },
    envelope: {
      attack: 0.001,
      decay: 0.035,
      sustain: 0,
      release: 0.012,
    },
    gain: 0.09,
  },
  open: {
    source: {
      type: `triangle`,
      frequency: {
        start: 360,
        end: 720,
      },
    },
    envelope: {
      attack: 0.002,
      decay: 0.09,
      sustain: 0,
      release: 0.025,
    },
    gain: 0.13,
  },
  close: {
    source: {
      type: `triangle`,
      frequency: {
        start: 520,
        end: 280,
      },
    },
    envelope: {
      attack: 0.002,
      decay: 0.075,
      sustain: 0,
      release: 0.025,
    },
    gain: 0.11,
  },
  flip: {
    source: {
      type: `triangle`,
      frequency: {
        start: 520,
        end: 290,
      },
    },
    envelope: {
      attack: 0.003,
      decay: 0.085,
      sustain: 0,
      release: 0.028,
    },
    gain: 0.1,
  },
  hover: {
    source: {
      type: `sine`,
      frequency: {
        start: 1180,
        end: 1480,
      },
    },
    envelope: {
      attack: 0.001,
      decay: 0.04,
      sustain: 0,
      release: 0.015,
    },
    gain: 0.05,
  },
} satisfies Record<string, SoundDefinition>;
