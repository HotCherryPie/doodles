// https://github.com/tsparticles/tsparticles/blob/main/wrappers/vue3/src/components/vue-particles.vue

import type { Container, Engine, ILoadParams } from '@tsparticles/engine';
import { tryOnScopeDispose } from '@vueuse/core';
import { isNil, noop } from 'es-toolkit';
import { ref, shallowRef, toValue, watch } from 'vue';

import type { MaybeReadonlyRefOrGetter } from '../utils/vue';

const isLibsInitialized = ref(false);
let tsParticles: Engine | undefined;

export const useTsParticles = (
  root: MaybeReadonlyRefOrGetter<HTMLElement | null | undefined>,
  options: NonNullable<ILoadParams['options']>,
) => {
  const container = shallowRef<Container>();
  let isDisposed = false;

  const init = async () => {
    if (isDisposed) return;
    if (!isLibsInitialized.value) return;

    const element = toValue(root);

    if (isNil(element)) return;

    const container_ = await tsParticles?.load({ element, options });

    // Destroy container AFTER `load()` to make sure we
    //  don't end up with a lost container, if two or more
    //  `init()` calls simultaneously.
    container.value?.destroy();

    // Make sure we are still not in disposed scope after `await`
    /* eslint-disable-next-line ts/no-unnecessary-condition --
        False positive -- we are here after `await`.
      */
    if (isDisposed) return;

    container.value = container_;
  };

  watch(
    () => toValue(root),
    () => void init(),
  );

  void fetchLibs()
    .then(() => void init())
    .catch(noop);

  tryOnScopeDispose(() => {
    isDisposed = true;
    container.value?.destroy();
    container.value = undefined;
  });

  return {
    container,
  } as const;
};

async function fetchLibs() {
  const [a, b] = await Promise.allSettled([
    import('@tsparticles/engine'),
    import('tsparticles'),
  ]);

  const tsParticles_ =
    a.status === 'fulfilled' ? a.value.tsParticles : undefined;
  const loadFull = b.status === 'fulfilled' ? b.value.loadFull : undefined;

  if (tsParticles_ === undefined || loadFull === undefined) return;

  if (!isLibsInitialized.value) await loadFull(tsParticles_);

  isLibsInitialized.value = true;

  // eslint-disable-next-line unicorn/no-top-level-assignment-in-function
  tsParticles = tsParticles_;
}
