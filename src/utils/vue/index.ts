import type { ComputedRef, Ref, ShallowRef } from 'vue';

export type ReadonlyRef<T> = Readonly<Ref<T>>;
export type ReadonlyShallowRef<T> = Readonly<ShallowRef<T>>;

export type MaybeReadonlyRef<T> =
  T | ReadonlyRef<T> | ReadonlyShallowRef<T> | ComputedRef<T>;

export type MaybeReadonlyRefOrGetter<T> = MaybeReadonlyRef<T> | (() => T);
