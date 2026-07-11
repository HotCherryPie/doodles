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

export const doodles = Object.values(imports).map((it) => ({
  component: it.default,
  name: it.name,
}));
