/* eslint ts/no-non-null-assertion: "warn" */

import { consola } from 'consola';
import { colorize } from 'consola/utils';
import { dedent } from 'es-toolkit';
import pathe from 'pathe';
import { kebabCase, titleCase } from 'scule';

import { createFile, DOODLES_DIRECTORY, getDoodles } from './utils.ts';

await run();

async function run() {
  const rawName = process.argv.at(2);
  if (rawName === undefined) throw new Error('No doodle name provided.');

  const fixedName = rawName.trim().replaceAll(/\s+/g, '-');
  if (fixedName.length === 0) throw new Error('No doodle name provided.');

  const name = kebabCase(fixedName);

  const doodles = await getDoodles();
  const lastDoodle = doodles.at(-1)!;
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
  consola.info(colorize('gray', pathe.join(directory, 'index.vue')));
}

function getIndexTsFileText(name: string) {
  return dedent`
    export { default } from './index.vue';

    export const name = '${titleCase(name)}';

  `;
}

function getIndexVueFileText() {
  return dedent`
    <script setup lang="ts">
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
