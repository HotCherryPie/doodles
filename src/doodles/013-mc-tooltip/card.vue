<script setup lang="ts">
import type { Slot } from 'vue';

import Bg from './bg.vue';

defineSlots<{
  default: Slot;
}>();

defineProps<{
  expanded: boolean;
}>();
</script>

<template>
  <div :class="[$style.it, expanded && $style.expanded]">
    <div :class="$style.layer1" />
    <div :class="$style.layer2" />
    <Bg
      key="a"
      duration="calc(var(--duration-open) * 1.5)"
      fill="#808080"
      :expanded
      :w="15"
      :h="12"
      :noisiness="0.75"
      :stiffness="8"
      :class="$style.bg"
    />

    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<style module>
.it {
  transition-property: width, height, translate;
  transition-duration: var(--duration-close);

  width: 100%;
  height: 100%;
  grid-template-rows: 100%;

  display: grid;
  place-items: stretch;
  interpolate-size: allow-keywords;

  & > * {
    grid-area: 1/1;
  }
}

.layer1 {
  transition-property: border-radius, outline-width, outline-color, box-shadow;
  transition-duration: var(--duration-close);

  border-radius: 0px;
  corner-shape: notch;

  outline: 1px solid #0000;
  box-shadow: 0px 0px 0px #0000;
}

.layer2 {
  transition-property: border-radius, outline-width, outline-offset, opacity;
  transition-duration: var(--duration-close);

  border-radius: 0px;
  corner-shape: notch;

  outline: 1px solid #fff;
  outline-offset: -1px;
  background-image: linear-gradient(to bottom, #eee, #fff 30%);
  opacity: 0;
}

.content {
  overflow: hidden;
  justify-items: center;
  translate: 0 0; /* FOR ANCHOR TO WORK :/ */
}

.bg {
  transition-behavior: allow-discrete;
  transition-property: display, opacity;
  transition-duration: var(--duration-close);

  border-radius: 16px 16px 0 0;
  corner-shape: notch;
  opacity: 0;

  display: none;

  mask-image: radial-gradient(circle at center top, black 20%, transparent 90%);
  mask-image: radial-gradient(
    circle closest-corner at center top,
    black 0%,
    transparent 160%
  );
  inset: 2px;
  position: absolute;
}

.it:hover {
  .layer1 {
    outline-color: #eee;
  }

  .layer2 {
    opacity: 1;
  }
}

.it.expanded {
  transition-duration: var(--duration-open);
  translate: 0 -8px;
  height: max-content;
  width: max-content;

  .layer1 {
    transition-duration: var(--duration-open);

    border-radius: 16px;
    outline-color: #ddd;
    box-shadow: 0px 12px 20px #0000000c;
  }

  .layer2 {
    transition-duration: var(--duration-open);

    border-radius: 16px;
    outline-width: 2px;
    outline-offset: -2px;
    opacity: 1;
  }

  .bg {
    display: revert;
    transition-duration: 0;
    opacity: 0.4;
  }
}
</style>
