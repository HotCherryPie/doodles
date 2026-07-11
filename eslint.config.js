import { base } from './eslint.config.base.js';

const toolingFiles = ['**/eslint.config.*', '**/prettier.config.*', '**/vite.config.*'];

const node = [];

export default base({ node, tooling: toolingFiles }, [
  {
    name: 'override-for-doodles-folder',
    rules: {
      'import/no-default-export': 'off',
    },
  },
]);
