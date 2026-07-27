import path from 'node:path';

import ts from 'typescript';

import { base } from './eslint.config.base.js';

export default base({ node: [], tooling: getTsConfigIncludedFiles('./tsconfig.tooling.json') }, [
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

// TODO: move to `@(67)/configs.js/utils`
function getTsConfigIncludedFiles(config) {
  const unrecoverableErrors = [];
  const onUnRecoverableConfigFileDiagnostic = (it) => void unrecoverableErrors.push(it);

  const parsed = ts.getParsedCommandLineOfConfigFile(
    config,
    {},
    { ...ts.sys, onUnRecoverableConfigFileDiagnostic },
  );

  const diagnostics = [...unrecoverableErrors, ...(parsed?.errors ?? [])];
  if (diagnostics.length > 0) {
    throw new Error(
      ts.formatDiagnosticsWithColorAndContext(diagnostics, {
        getCanonicalFileName: (fileName) => fileName,

        getCurrentDirectory: ts.sys.getCurrentDirectory,
        getNewLine: () => ts.sys.newLine,
      }),
    );
  }

  const paths = parsed?.fileNames ?? [];

  return paths.map((it) =>
    it.replace(new RegExp(`^${process.cwd().replaceAll(path.sep, '/')}`, 'i'), '.'),
  );
}
