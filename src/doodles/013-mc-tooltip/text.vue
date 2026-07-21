<script setup lang="ts">
import type { Slot } from 'vue';

withDefaults(
  defineProps<{
    kind?: 'fancy' | 'primary' | 'secondary' | undefined;
    color?:
      | 'blue'
      | 'cyan'
      | 'green'
      | 'grey'
      | 'magenta'
      | 'orange'
      | 'red'
      | 'white'
      | 'yellow'
      | undefined;
  }>(),
  {
    kind: 'primary',
    color: 'white',
  },
);

defineSlots<{
  default: Slot;
}>();
</script>

<template>
  <span :class="[$style.it, $style[`color-${color}`], $style[`kind-${kind}`]]">
    <slot />
  </span>
</template>

<style lang="css" module>
.it {
  font-family: Minecraft;
  color: var(--color);

  position: relative;
  text-box: trim-both ex alphabetic;
  display: inline-block;

  &.kind-fancy {
    width: max-content;
    height: max-content;
    text-shadow: 2px 2px rgb(from currentColor r g b / 0.25);

    &::before {
      position: absolute;
      inset: -0.35em;
      content: '';
      image-rendering: pixelated;
      background-image: var(--bg);
    }
  }

  &.kind-primary {
    text-shadow: 2px 2px rgb(from currentColor r g b / 0.25);
  }

  &.kind-secondary {
    color: #fff5;
    text-shadow: 2px 2px #000;
  }

  &.color-blue {
    --color: blue;
    --bg: url('./sparks/blue.gif');
  }

  &.color-cyan {
    --color: cyan;
    --bg: url('./sparks/cyan.gif');
  }

  &.color-green {
    --color: green;
    --bg: url('./sparks/green.gif');
  }

  &.color-magenta {
    --color: #fc54fc;
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
    --color: yellow;
    --bg: url('./sparks/yellow.gif');
  }
}
</style>
