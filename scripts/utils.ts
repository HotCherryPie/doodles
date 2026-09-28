import fs from 'node:fs/promises';

import pathe from 'pathe';

export const DOODLES_DIRECTORY = src('doodles');
export const BITS_DIRECTORY = src('bits');

// eslint-disable-next-line unicorn/name-replacements
export function src(where: string) {
  return pathe.resolve(import.meta.dirname, '../src', where);
}

export async function createFile(
  location: string,
  content: string,
): Promise<void> {
  if (!location.trim()) throw new TypeError('File location must not be empty.');
  await fs.mkdir(pathe.dirname(location), { recursive: true });
  await fs.writeFile(location, content, { encoding: 'utf8', flag: 'wx' });
}

export async function getDoodles() {
  const entries = await fs.readdir(DOODLES_DIRECTORY, { withFileTypes: true });

  const folders = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .toSorted((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return folders;
}
