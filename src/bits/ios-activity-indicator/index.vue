<script setup lang="ts">
import { useId } from 'vue';

import type { Props } from './types';

withDefaults(defineProps<Props>(), {
  mode: 'tint',
  color: 'currentColor',
  leafs: 8,

  /* Not just '0' because Chrome can't mix pure 0 with other
   *  specifiers like `1ms` or `1s`.
   */
  delay: '0ms',
});

const ANIMATION_DURATION = 0.64;

const leafId = useId();
</script>

<template>
  <svg viewBox="0 0 120 120" :class="[$style.root, $style[mode]]">
    <defs>
      <path
        :id="leafId"
        stroke="currentColor"
        stroke-width="14"
        stroke-linecap="round"
        d="M60 7v25"
      />
    </defs>

    <g>
      <use v-for="i in leafs" :key="i" :href="`#${leafId}`" />
    </g>
  </svg>
</template>

<style lang="css" module>
.root {
  width: 1.25em;
  height: 1.25em;

  --color-from: v-bind(color);

  > g > use {
    opacity: 0;
    animation: spin calc(1s * v-bind(ANIMATION_DURATION)) infinite ease-out;
    rotate: calc(
      (
          (sibling-count() - (sibling-index() - 1)) *
            (360 / sibling-count() * -1)
        ) *
        1deg
    );
    animation-delay: calc(
      ((v-bind(ANIMATION_DURATION) / sibling-count()) * (sibling-index() - 1)) *
        1s + v-bind(delay)
    );
    transform-origin: 50%;
  }

  &.tint {
    --color-to: hsl(from var(--color-from) h s l / 0.25);
  }

  &.accent {
    /* calc(l + (l + -1) / 2) */
    --color-to: hsl(from var(--color-from) h 0 l / 0.25);
  }
}

@keyframes spin {
  from {
    color: var(--color-to);
    opacity: 1;
  }
  10% {
    color: var(--color-from);
  }
  75% {
    color: var(--color-to);
  }
  to {
    color: var(--color-to);
    opacity: 1;
  }
}
</style>
