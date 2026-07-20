import { defineSound } from '@web-kits/audio';
import type { SoundDefinition } from '@web-kits/audio';

// eslint-disable-next-line ts/no-unnecessary-type-assertion
const modules = import.meta.glob('./sounds/*.ts', { eager: true }) as Record<
  string,
  Record<string, Record<string, SoundDefinition>>
>;

export const packs = Object.fromEntries(
  Object.values(modules).flatMap((it) =>
    Object.entries(it).map(([k, v]) => [
      k,
      Object.fromEntries(
        Object.entries(v).map(([a, b]) => [a, defineSound(b)]),
      ),
    ]),
  ),
);

console.log('>>> G', packs);
