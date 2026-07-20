import { base } from './eslint.config.base.js';

const toolingFiles = ['**/eslint.config.*', '**/prettier.config.*', '**/vite.config.*'];

const node = [];

export default base({ node, tooling: toolingFiles }, [
  {
    name: 'common',
    rules: {
      'unicorn/consistent-boolean-name': ['error', { prefixes: { with: true } }],
    },
  },
  {
    name: 'override-for-doodles-index',
    files: ['./src/doodles/*/index.ts'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
]);
