<script setup lang="ts">
import type { Slot } from 'vue';

const sides = ['left', 'right', 'front', 'back', 'bottom', 'top'] as const;

defineProps<{
  w: CSSValueType.Length;
  h: CSSValueType.Length;
  l: CSSValueType.Length;
  fill?: boolean | undefined;
}>();

defineSlots<{
  [S in (typeof sides)[number]]: Slot;
}>();
</script>

<template>
  <div :class="$style.pivot">
    <div v-for="side in sides" :key="side" :class="[$style.side, $style[side]]">
      <slot :name="side">
        <div v-if="fill" />
      </slot>
    </div>
  </div>
</template>

<style module>
.pivot {
  --w: v-bind(w);
  --h: v-bind(h);
  --l: v-bind(l);

  position: relative;
  transform-style: preserve-3d;
}

.side {
  display: contents;

  &.front > *,
  &.back > *,
  &.right > *,
  &.left > *,
  &.bottom > *,
  &.top > * {
    position: absolute;
    transform-style: preserve-3d;
    contain: size;
  }

  &.front > * {
    width: var(--w);
    height: var(--h);
    translate: -50% -50% calc(var(--l) / 2);
  }

  &.back > * {
    width: var(--w);
    height: var(--h);
    rotate: y 180deg;
    translate: -50% -50% calc(var(--l) / -2);
  }

  &.right > * {
    width: var(--l);
    height: var(--h);
    rotate: y 90deg;
    translate: calc(-50% + (var(--w) / 2)) -50%;
  }

  &.left > * {
    width: var(--l);
    height: var(--h);
    rotate: y -90deg;
    translate: calc(-50% - (var(--w) / 2)) -50%;
  }

  &.top > * {
    height: var(--l);
    width: var(--w);

    rotate: x 90deg;
    translate: -50% calc(-50% - var(--h) / 2);
  }

  &.bottom > * {
    height: var(--l);
    width: var(--w);

    rotate: x 270deg;
    translate: -50% calc(-50% + var(--h) / 2);
  }
}
</style>
