import fs from 'node:fs/promises';

import { consola } from 'consola';
import { colorize } from 'consola/utils';
import pathe from 'pathe';
import { kebabCase, titleCase } from 'scule';

import { createFile, DOODLES_DIRECTORY } from './utils.ts';

async function run() {
  const rawName = process.argv.at(2);
  if (rawName === undefined) throw new Error('No doodle name provided.');

  const fixedName = rawName.trim().replaceAll(/\s+/g, '-');
  if (fixedName.length === 0) throw new Error('No doodle name provided.');

  const name = kebabCase(fixedName);

  // eslint-disable-next-line ts/no-non-null-assertion
  const lastDoodle = (await getLastFolderName(DOODLES_DIRECTORY))!;
  // eslint-disable-next-line ts/no-non-null-assertion
  const lastDoodleNumber = lastDoodle.split('-', 1)[0]!;
  const numberPadding = lastDoodleNumber.length;
  const number = (+lastDoodleNumber + 1)
    .toString()
    .padStart(numberPadding, '0');
  const directoryName = `${number}-${name}`;
  const directory = pathe.join(DOODLES_DIRECTORY, directoryName);

  await Promise.all([
    createFile(pathe.join(directory, 'index.ts'), getIndexTsFileText(name)),
    createFile(pathe.join(directory, 'index.vue'), getIndexVueFileText()),
  ]);

  consola.success(
    colorize(
      'green',
      `Doodle "${colorize('underline', directoryName)}" created!`,
    ),
  );
  consola.info(colorize('gray', pathe.join(directory, 'index.ts')));
}

await run();

async function getLastFolderName(
  location: string,
): Promise<string | undefined> {
  const entries = await fs.readdir(location, { withFileTypes: true });

  const folders = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .toSorted((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return folders.at(-1);
}

function getIndexTsFileText(name: string) {
  // TODO: use dedent
  return `export { default } from './index.vue';

export const name = '${titleCase(name)}';
`;
}

function getIndexVueFileText() {
  // TODO: use dedent
  return `<script setup lang="ts">
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell>
    <div />
  </Bento.Cell>
</template>

<style module>
.it {
}
</style>
`;
}
