import { defineSound } from '@web-kits/audio';

import { custom } from './sounds/custom';
import { rd } from './sounds/rd';

export const sounds = [...Object.values(rd), ...Object.values(custom)].map(
  (it) => defineSound(it),
);
