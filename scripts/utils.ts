import fs from 'node:fs/promises';

import pathe from 'pathe';

// eslint-disable-next-line unicorn/name-replacements
export const src = (where: string) =>
  pathe.resolve(import.meta.dirname, '../src', where);

export async function createFile(
  location: string,
  content: string,
): Promise<void> {
  if (!location.trim()) throw new TypeError('File location must not be empty.');
  await fs.mkdir(pathe.dirname(location), { recursive: true });
  await fs.writeFile(location, content, { encoding: 'utf8', flag: 'wx' });
}

export const DOODLES_DIRECTORY = src('doodles');
export const BITS_DIRECTORY = src('bits');
