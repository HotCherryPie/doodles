<script setup lang="ts">
import type { Slot } from 'vue';

withDefaults(
  defineProps<{
    color?:
      | 'blue'
      | 'cyan'
      | 'green'
      | 'magenta'
      | 'orange'
      | 'red'
      | 'white'
      | 'yellow'
      | undefined;
  }>(),
  {
    color: 'white',
  },
);

defineSlots<{
  default: Slot;
}>();
</script>

<template>
  <span :class="[$style.it, $style[`color-${color}`]]">
    <slot />
  </span>
</template>

<style lang="css" module>
.it {
  color: var(--color);

  position: relative;
  text-box: trim-both ex alphabetic;
  display: inline-block;

  width: max-content;
  height: max-content;
  text-shadow: 2px 2px rgb(from currentColor r g b / 0.15);

  &::before {
    position: absolute;
    inset: -0.35em;
    content: '';
    image-rendering: pixelated;
    background-image: var(--bg);
  }

  &.color-blue {
    --color: blue;
    --bg: url('./sparks/blue.gif');
  }

  &.color-cyan {
    --color: dodgerblue;
    --bg: url('./sparks/cyan.gif');
  }

  &.color-green {
    --color: lime;
    --bg: url('./sparks/green.gif');
  }

  &.color-magenta {
    --color: #fc54d8;
    --bg: url('./sparks/magenta.gif');
  }

  &.color-orange {
    --color: orange;
    --bg: url('./sparks/orange.gif');
  }

  &.color-red {
    --color: red;
    --bg: url('./sparks/red.gif');
  }

  &.color-white {
    --color: white;
    --bg: url('./sparks/white.gif');
  }

  &.color-yellow {
    --color: #ffe900;
    --bg: url('./sparks/yellow.gif');
  }
}
</style>
