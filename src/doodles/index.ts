import { directory } from 'virtual:file-meta';
import type { Component } from 'vue';

interface DoodleModule {
  default: Component;
  name: string;
}

// eslint-disable-next-line ts/no-unnecessary-type-assertion
const imports = import.meta.glob('./*/index.ts', { eager: true }) as Record<
  string,
  DoodleModule
>;

export const doodles = Object.entries(imports).map(([location, it]) => ({
  component: it.default,
  name: it.name,
  location: `${directory}/${location.replace('./', '').replace(/index\.ts$/, '')}`,
}));
