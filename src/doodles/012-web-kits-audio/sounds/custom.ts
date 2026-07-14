import type { SoundDefinition } from '@web-kits/audio';

export const custom = {
  a: {
    layers: [
      // Sharp key-cap / mechanism click
      {
        source: { type: 'noise', color: 'white' },
        filter: [
          { type: 'highpass', frequency: 1800 },
          { type: 'bandpass', frequency: 4200, resonance: 4.5 },
        ],
        envelope: { attack: 0, decay: 0.012, sustain: 0, release: 0.004 },
        gain: 0.12,
      },

      // Heavier body impact
      {
        source: { type: 'noise', color: 'pink' },
        filter: { type: 'bandpass', frequency: 1250, resonance: 2.2 },
        envelope: { attack: 0, decay: 0.035, sustain: 0, release: 0.01 },
        delay: 0.003,
        gain: 0.09,
      },

      // Brief metallic typebar resonance
      {
        source: {
          type: 'triangle',
          frequency: { start: 3100, end: 1800 },
        },
        filter: { type: 'bandpass', frequency: 2400, resonance: 7 },
        envelope: { attack: 0, decay: 0.028, sustain: 0, release: 0.008 },
        delay: 0.006,
        gain: 0.035,
      },
    ],
  },

  b: {
    layers: [
      // Hard initial strike
      {
        source: { type: 'noise', color: 'white' },
        filter: [
          { type: 'highpass', frequency: 1100 },
          { type: 'bandpass', frequency: 3000, resonance: 3.5 },
        ],
        envelope: { attack: 0, decay: 0.018, sustain: 0, release: 0.006 },
        gain: 0.2,
      },

      // Heavy mechanical impact
      {
        source: { type: 'noise', color: 'pink' },
        filter: { type: 'bandpass', frequency: 700, resonance: 2.8 },
        envelope: { attack: 0, decay: 0.055, sustain: 0, release: 0.015 },
        delay: 0.002,
        gain: 0.19,
      },

      // Deep chassis thump
      {
        source: {
          type: 'triangle',
          frequency: { start: 240, end: 105 },
        },
        filter: { type: 'lowpass', frequency: 480, resonance: 1.5 },
        envelope: { attack: 0, decay: 0.065, sustain: 0, release: 0.018 },
        delay: 0.003,
        gain: 0.16,
      },

      // Typebar metal resonance
      {
        source: {
          type: 'triangle',
          frequency: { start: 2300, end: 1200 },
        },
        filter: { type: 'bandpass', frequency: 1750, resonance: 6 },
        envelope: { attack: 0, decay: 0.04, sustain: 0, release: 0.012 },
        delay: 0.006,
        gain: 0.065,
      },

      // Delayed mechanism knock
      {
        source: { type: 'noise', color: 'pink' },
        filter: { type: 'bandpass', frequency: 430, resonance: 3.2 },
        envelope: { attack: 0, decay: 0.025, sustain: 0, release: 0.01 },
        delay: 0.012,
        gain: 0.1,
      },
    ],
  },

  // Paper 1
  c: {
    layers: [
      // Main paper fold and rubbing texture
      {
        source: { type: 'noise', color: 'pink' },
        filter: [
          { type: 'highpass', frequency: 180, resonance: 0.7 },
          {
            type: 'lowpass',
            frequency: 3200,
            resonance: 1.2,
            envelope: { attack: 0.025, peak: 5600, decay: 0.3 },
          },
        ],
        envelope: { attack: 0.015, decay: 0.42, sustain: 0, release: 0.025 },
        gain: 0.13,
      },

      // Dense central crease
      {
        source: { type: 'noise', color: 'brown' },
        filter: { type: 'bandpass', frequency: 850, resonance: 1.6 },
        envelope: { attack: 0.012, decay: 0.28, sustain: 0, release: 0.015 },
        delay: 0.055,
        gain: 0.07,
      },

      // Sharp paper crackles
      {
        source: { type: 'noise', color: 'white' },
        filter: { type: 'bandpass', frequency: 5400, resonance: 5 },
        envelope: { attack: 0, decay: 0.012, sustain: 0, release: 0.005 },
        delay: 0.025,
        pan: -0.35,
        gain: 0.055,
      },
      {
        source: { type: 'noise', color: 'white' },
        filter: { type: 'bandpass', frequency: 3900, resonance: 4 },
        envelope: { attack: 0, decay: 0.022, sustain: 0, release: 0.005 },
        delay: 0.082,
        pan: 0.25,
        gain: 0.05,
      },
      {
        source: { type: 'noise', color: 'white' },
        filter: { type: 'bandpass', frequency: 6600, resonance: 6 },
        envelope: { attack: 0, decay: 0.009, sustain: 0, release: 0.005 },
        delay: 0.137,
        pan: -0.15,
        gain: 0.045,
      },
      {
        source: { type: 'noise', color: 'pink' },
        filter: { type: 'bandpass', frequency: 2300, resonance: 3.5 },
        envelope: { attack: 0, decay: 0.032, sustain: 0, release: 0.008 },
        delay: 0.205,
        pan: 0.4,
        gain: 0.05,
      },
      {
        source: { type: 'noise', color: 'white' },
        filter: { type: 'bandpass', frequency: 4700, resonance: 4.5 },
        envelope: { attack: 0, decay: 0.016, sustain: 0, release: 0.005 },
        delay: 0.285,
        pan: -0.3,
        gain: 0.04,
      },

      // Final compressed-paper crunch
      {
        source: { type: 'noise', color: 'pink' },
        filter: [
          { type: 'highpass', frequency: 350 },
          { type: 'lowpass', frequency: 2400, resonance: 2 },
        ],
        envelope: { attack: 0, decay: 0.095, sustain: 0, release: 0.012 },
        delay: 0.34,
        gain: 0.065,
      },
    ],
  },

  // Paper 2
  d: {
    layers: [
      // Soft paper compression
      {
        source: { type: 'noise', color: 'pink' },
        filter: [
          { type: 'highpass', frequency: 650, resonance: 0.7 },
          { type: 'lowpass', frequency: 3800, resonance: 0.8 },
        ],
        envelope: { attack: 0.012, decay: 0.13, sustain: 0, release: 0.01 },
        gain: 0.045,
      },

      // First small crease
      {
        source: { type: 'noise', color: 'white' },
        filter: { type: 'bandpass', frequency: 3600, resonance: 2.5 },
        envelope: { attack: 0.003, decay: 0.018, sustain: 0, release: 0.004 },
        delay: 0.025,
        pan: -0.2,
        gain: 0.018,
      },

      // Softer central fold
      {
        source: { type: 'noise', color: 'pink' },
        filter: { type: 'bandpass', frequency: 2100, resonance: 1.8 },
        envelope: { attack: 0.004, decay: 0.03, sustain: 0, release: 0.005 },
        delay: 0.07,
        pan: 0.2,
        gain: 0.022,
      },

      // Quiet finishing rustle
      {
        source: { type: 'noise', color: 'pink' },
        filter: { type: 'bandpass', frequency: 1400, resonance: 1.2 },
        envelope: { attack: 0.008, decay: 0.045, sustain: 0, release: 0.006 },
        delay: 0.105,
        pan: -0.1,
        gain: 0.016,
      },
    ],
  },

  // Paper 3
  e: {
    layers: [
      // Thin wrapper movement underneath the crackles
      {
        source: { type: 'noise', color: 'pink' },
        filter: [
          { type: 'highpass', frequency: 1100, resonance: 0.7 },
          {
            type: 'lowpass',
            frequency: 6200,
            resonance: 0.8,
            envelope: { attack: 0.018, peak: 8800, decay: 0.11 },
          },
        ],
        envelope: { attack: 0.006, decay: 0.15, sustain: 0, release: 0.006 },
        gain: 0.032,
      },

      // Initial wrapper bend — not instantaneous
      {
        source: { type: 'noise', color: 'white' },
        filter: [
          { type: 'highpass', frequency: 2400 },
          { type: 'bandpass', frequency: 4400, resonance: 2.1 },
        ],
        envelope: { attack: 0.003, decay: 0.022, sustain: 0, release: 0.003 },
        delay: 0.012,
        pan: -0.2,
        gain: 0.022,
      },

      // Small crisp crease
      {
        source: { type: 'noise', color: 'white' },
        filter: { type: 'bandpass', frequency: 7100, resonance: 3.2 },
        envelope: { attack: 0.002, decay: 0.011, sustain: 0, release: 0.002 },
        delay: 0.038,
        pan: 0.3,
        gain: 0.017,
      },

      // Wider paper fold
      {
        source: { type: 'noise', color: 'pink' },
        filter: [
          { type: 'highpass', frequency: 1700 },
          { type: 'bandpass', frequency: 3300, resonance: 1.7 },
        ],
        envelope: { attack: 0.004, decay: 0.03, sustain: 0, release: 0.004 },
        delay: 0.061,
        pan: -0.1,
        gain: 0.024,
      },

      // Bright cellophane-like crackle
      {
        source: { type: 'noise', color: 'white' },
        filter: { type: 'bandpass', frequency: 8200, resonance: 3.8 },
        envelope: { attack: 0.0015, decay: 0.008, sustain: 0, release: 0.002 },
        delay: 0.087,
        pan: 0.4,
        gain: 0.014,
      },

      // Second uneven crease
      {
        source: { type: 'noise', color: 'white' },
        filter: [
          { type: 'highpass', frequency: 2900 },
          { type: 'lowpass', frequency: 7600 },
        ],
        envelope: { attack: 0.002, decay: 0.017, sustain: 0, release: 0.002 },
        delay: 0.112,
        pan: -0.35,
        gain: 0.018,
      },

      // Quiet final wrapper release
      {
        source: { type: 'noise', color: 'pink' },
        filter: { type: 'bandpass', frequency: 2700, resonance: 1.4 },
        envelope: { attack: 0.004, decay: 0.028, sustain: 0, release: 0.004 },
        delay: 0.137,
        pan: 0.15,
        gain: 0.016,
      },
    ],
  },

  // Switch 1
  f: {
    layers: [
      {
        // Bright metal/contact snap.
        source: { type: 'noise', color: 'white' },
        filter: [
          { type: 'highpass', frequency: 1800, resonance: 0.8 },
          { type: 'bandpass', frequency: 5200, resonance: 5.5 },
        ],
        envelope: { attack: 0, decay: 0.006, sustain: 0, release: 0.003 },
        gain: 0.13,
      },
      {
        // Plastic/bakelite housing clack.
        source: { type: 'noise', color: 'pink' },
        filter: [
          { type: 'bandpass', frequency: 1150, resonance: 2.4 },
          { type: 'lowpass', frequency: 2600, resonance: 0.8 },
        ],
        envelope: { attack: 0, decay: 0.026, sustain: 0, release: 0.009 },
        delay: 0.004,
        gain: 0.14,
      },
      {
        // Low, damped lever impact against the mechanical stop.
        source: {
          type: 'triangle',
          frequency: { start: 360, end: 145 },
          fm: { ratio: 0.5, depth: 55 },
        },
        filter: { type: 'lowpass', frequency: 1400, resonance: 1.2 },
        envelope: { attack: 0, decay: 0.034, sustain: 0, release: 0.012 },
        delay: 0.008,
        gain: 0.17,
      },
      {
        // Very small delayed contact bounce; audible as texture, not a second click.
        source: { type: 'noise', color: 'white' },
        filter: { type: 'bandpass', frequency: 3400, resonance: 6 },
        envelope: { attack: 0, decay: 0.004, sustain: 0, release: 0.003 },
        delay: 0.018,
        gain: 0.06,
      },
    ],
  },

  // Switch 2
  j: {
    layers: [
      // Metallic click
      {
        source: { type: `noise`, color: `white` },
        filter: { type: `bandpass`, frequency: 2950, resonance: 1.2 },
        envelope: { attack: 0, decay: 0.005, sustain: 0, release: 0.002 },
        gain: 0.95,
      },

      // Bright metal/contact snap.
      {
        source: { type: 'noise', color: 'white' },
        filter: [
          { type: 'highpass', frequency: 1800, resonance: 0.8 },
          { type: 'bandpass', frequency: 5200, resonance: 5.5 },
        ],
        envelope: { attack: 0, decay: 0.006, sustain: 0, release: 0.003 },
        gain: 0.13,
      },

      // Plastic/bakelite housing clack.
      {
        source: { type: 'noise', color: 'pink' },
        filter: [
          { type: 'bandpass', frequency: 1150, resonance: 2.4 },
          { type: 'lowpass', frequency: 2600, resonance: 0.8 },
        ],
        envelope: { attack: 0, decay: 0.026, sustain: 0, release: 0.009 },
        delay: 0.004,
        gain: 0.14,
      },

      // Low, damped lever impact against the mechanical stop.
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

      // Very small delayed contact bounce; audible as texture, not a second click.
      {
        source: { type: 'noise', color: 'white' },
        filter: { type: 'bandpass', frequency: 3400, resonance: 6 },
        envelope: { attack: 0, decay: 0.004, sustain: 0, release: 0.003 },
        delay: 0.018,
        gain: 0.06,
      },
    ],
  },

  // Paper
  h: {
    layers: [
      {
        // Hard graphite point making first contact with the paper.
        source: { type: 'noise', color: 'white' },
        filter: [
          { type: 'highpass', frequency: 2600, resonance: 0.7 },
          { type: 'bandpass', frequency: 5200, resonance: 4.8 },
        ],
        envelope: { attack: 0, decay: 0.0032, sustain: 0, release: 0.0015 },
        gain: 0.095,
      },
      {
        // Small woody impulse conducted through the pencil shaft.
        source: {
          type: 'triangle',
          frequency: { start: 1850, end: 720 },
          fm: { ratio: 1.73, depth: 3.5 },
        },
        filter: [
          { type: 'highpass', frequency: 420, resonance: 0.6 },
          { type: 'lowpass', frequency: 2800, resonance: 1.1 },
        ],
        envelope: { attack: 0, decay: 0.01, sustain: 0, release: 0.003 },
        delay: 0.0007,
        gain: 0.055,
      },
      {
        // The sheet flexes against the desk: soft, papery body rather than a hard surface knock.
        source: { type: 'noise', color: 'pink' },
        filter: [
          { type: 'bandpass', frequency: 780, resonance: 2.1 },
          { type: 'lowpass', frequency: 2100, resonance: 0.7 },
        ],
        envelope: { attack: 0, decay: 0.018, sustain: 0, release: 0.007 },
        delay: 0.0015,
        gain: 0.082,
      },
      {
        // Very short graphite drag over paper fibres after the tip lands.
        source: { type: 'noise', color: 'white' },
        filter: [
          { type: 'highpass', frequency: 1300, resonance: 0.5 },
          { type: 'bandpass', frequency: 3100, resonance: 2.2 },
        ],
        envelope: { attack: 0.001, decay: 0.01, sustain: 0, release: 0.004 },
        delay: 0.0034,
        gain: 0.035,
      },
      {
        // Restrained desk-coupled thump, kept low so the event still reads as paper.
        source: {
          type: 'sine',
          frequency: { start: 235, end: 145 },
        },
        filter: { type: 'lowpass', frequency: 520, resonance: 0.8 },
        envelope: { attack: 0, decay: 0.02, sustain: 0, release: 0.006 },
        delay: 0.0018,
        gain: 0.032,
      },
    ],
  },

  // Paper 2
  k: {
    layers: [
      {
        // Hard graphite point making first contact with the paper.
        source: { type: 'noise', color: 'white' },
        filter: [
          { type: 'highpass', frequency: 2600, resonance: 0.7 },
          { type: 'bandpass', frequency: 5200, resonance: 4.8 },
        ],
        envelope: { attack: 0, decay: 0.0032, sustain: 0, release: 0.0015 },
        gain: 0.095,
      },
      {
        // Small woody impulse conducted through the pencil shaft.
        source: {
          type: 'triangle',
          frequency: { start: 1850, end: 720 },
          fm: { ratio: 1.73, depth: 3.5 },
        },
        filter: [
          { type: 'highpass', frequency: 420, resonance: 0.6 },
          { type: 'lowpass', frequency: 2800, resonance: 1.1 },
        ],
        envelope: { attack: 0, decay: 0.01, sustain: 0, release: 0.003 },
        delay: 0.0007,
        gain: 0.055,
      },
      {
        // The sheet flexes against the desk: soft, papery body rather than a hard surface knock.
        source: { type: 'noise', color: 'pink' },
        filter: [
          { type: 'bandpass', frequency: 780, resonance: 2.1 },
          { type: 'lowpass', frequency: 2100, resonance: 0.7 },
        ],
        envelope: { attack: 0, decay: 0.018, sustain: 0, release: 0.007 },
        delay: 0.0015,
        gain: 0.082,
      },
      {
        // Very short graphite drag over paper fibres after the tip lands.
        source: { type: 'noise', color: 'white' },
        filter: [
          { type: 'highpass', frequency: 1300, resonance: 0.5 },
          { type: 'bandpass', frequency: 3100, resonance: 2.2 },
        ],
        envelope: { attack: 0.001, decay: 0.01, sustain: 0, release: 0.004 },
        delay: 0.0034,
        gain: 0.035,
      },
      {
        // Restrained desk-coupled thump, kept low so the event still reads as paper.
        source: {
          type: 'sine',
          frequency: { start: 235, end: 145 },
        },
        filter: { type: 'lowpass', frequency: 520, resonance: 0.8 },
        envelope: { attack: 0, decay: 0.02, sustain: 0, release: 0.006 },
        delay: 0.0018,
        gain: 0.032,
      },
    ],
  },
} satisfies Record<string, SoundDefinition>;
