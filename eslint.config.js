import { base } from './eslint.config.base.js';

const toolingFiles = [
  '**/eslint.config.*',
  '**/prettier.config.*',
  '**/vite.config.*',
];

const node = [];

export default base({ node, tooling: toolingFiles });
