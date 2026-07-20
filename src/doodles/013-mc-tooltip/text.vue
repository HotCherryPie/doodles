<script setup lang="ts">
import type { Slot } from 'vue';

withDefaults(
  defineProps<{
    fancy?: boolean | undefined;
    color:
      | 'blue'
      | 'cyan'
      | 'green'
      | 'magenta'
      | 'orange'
      | 'red'
      | 'white'
      | 'yellow';
  }>(),
  {
    fancy: false,
  },
);

defineSlots<{
  default: Slot;
}>();
</script>

<template>
  <span :class="[$style.it, $style[color], fancy && $style.fancy]">
    <slot />
  </span>
</template>

<style lang="css" module>
.it {
  width: max-content;
  height: max-content;
  font-family: Minecraft;
  color: var(--color);
  text-shadow: 2px 2px rgb(from currentColor r g b / 0.25);

  position: relative;
  text-box: trim-both ex alphabetic;
  display: inline-block;

  &::before {
    position: absolute;
    inset: -0.35em;
    content: '';
    image-rendering: pixelated;
    filter: brightness(1.5);
  }

  &.blue {
    --color: blue;
    --bg: url('./sparks/blue.gif');
  }

  &.cyan {
    --color: cyan;
    --bg: url('./sparks/cyan.gif');
  }

  &.green {
    --color: green;
    --bg: url('./sparks/green.gif');
  }

  &.magenta {
    --color: #fc54fc;
    --bg: url('./sparks/magenta.gif');
  }

  &.orange {
    --color: orange;
    --bg: url('./sparks/orange.gif');
  }

  &.red {
    --color: red;
    --bg: url('./sparks/red.gif');
  }

  &.white {
    --color: white;
    --bg: url('./sparks/white.gif');
  }

  &.yellow {
    --color: yellow;
    --bg: url('./sparks/yellow.gif');
  }

  &.fancy {
    &::before {
      background-image: var(--bg);
    }
  }
}
</style>
