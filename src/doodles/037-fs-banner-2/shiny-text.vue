<script setup lang="ts">
import type { Slot } from 'vue';

export interface Props {
  highlight?: CSSValueType.Color | undefined;
}

export interface Slots {
  default: Slot;
}

defineProps<Props>();
defineSlots<Slots>();
</script>

<template>
  <div :class="$style.root">
    <div :class="[$style.text, $style.a]">
      <slot />
    </div>
    <div :class="[$style.text, $style.b]">
      <slot />
    </div>
  </div>
</template>

<style module>
.root {
  display: grid;

  > * {
    grid-area: 1/1;
  }
}

.text {
  color: transparent;
  background-clip: text;

  &.a {
    mix-blend-mode: screen;
    text-shadow: 0 0.05em 0.1em rgba(0, 0, 0, 0.16);
    background-image: linear-gradient(
      180deg,
      #fff 20%,
      v-bind('highlight ?? "#fff3"') 100%
    );
  }

  &.b {
    mix-blend-mode: screen;
    background-color: #fff;
    text-shadow: 0px -0.05em 0.08em rgb(0 0 0);
  }
}
</style>
