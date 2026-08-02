import type { SoundDefinition } from '@web-kits/audio';

export const primitives = {
  a: {
    source: {
      type: 'triangle',
      frequency: { start: 360, end: 145 },
      fm: { ratio: 0.5, depth: 55 },
    },
    filter: { type: 'lowpass', frequency: 1400, resonance: 1.2 },
    envelope: { attack: 0, decay: 0.034, sustain: 0, release: 0.012 },
  },

  b1: {
    source: { type: 'noise', color: 'white' },
    filter: { type: 'bandpass', frequency: 4700, resonance: 4.5 },
    envelope: { attack: 0, decay: 0.016, sustain: 0, release: 0.005 },
    pan: -0.3,
  },

  b2: {
    source: { type: 'noise', color: 'white' },
    filter: { type: 'bandpass', frequency: 3900, resonance: 4 },
    envelope: { attack: 0, decay: 0.022, sustain: 0, release: 0.005 },
    pan: 0.25,
  },

  c: {
    source: { type: 'noise', color: 'pink' },
    filter: [
      { type: 'highpass', frequency: 350 },
      { type: 'lowpass', frequency: 2400, resonance: 2 },
    ],
    envelope: { attack: 0, decay: 0.095, sustain: 0, release: 0.012 },
  },

  d: {
    source: { type: 'noise', color: 'pink' },
    filter: { type: 'bandpass', frequency: 2300, resonance: 3.5 },
    envelope: { attack: 0, decay: 0.032, sustain: 0, release: 0.008 },
    pan: 0.4,
  },

  e1: {
    source: { type: 'noise', color: 'white' },
    filter: { type: 'bandpass', frequency: 6600, resonance: 6 },
    envelope: { attack: 0, decay: 0.009, sustain: 0, release: 0.005 },
    pan: -0.15,
  },

  e2: {
    source: { type: 'noise', color: 'white' },
    filter: { type: 'bandpass', frequency: 5400, resonance: 5 },
    envelope: { attack: 0, decay: 0.012, sustain: 0, release: 0.005 },
    pan: -0.35,
  },

  f: {
    source: { type: 'noise', color: 'brown' },
    filter: { type: 'bandpass', frequency: 850, resonance: 1.6 },
    envelope: { attack: 0.012, decay: 0.28, sustain: 0, release: 0.015 },
  },

  j: {
    source: { type: 'noise', color: 'pink' },
    envelope: { attack: 0.05, decay: 0.5, sustain: 0, release: 1.025 },
    gain: 0.25,
  },

  h1: {
    source: { type: `noise`, color: `white` },
    filter: { type: `bandpass`, frequency: 2950, resonance: 1.2 },
    envelope: { attack: 0, decay: 0.005, sustain: 0, release: 0.002 },
  },

  h2: {
    source: { type: `noise`, color: `white` },
    filter: { type: `bandpass`, frequency: 1950, resonance: 1.2 },
    envelope: { attack: 0, decay: 0.005, sustain: 0, release: 0.2 },
  },

  i: {
    source: { type: `sine`, frequency: { start: 520, end: 360 } },
    envelope: { attack: 0.002, decay: 0.05, sustain: 0, release: 0.02 },
  },
} satisfies Record<string, SoundDefinition>;
