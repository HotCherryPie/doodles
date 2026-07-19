<script setup lang="ts">
import type { Slot } from 'vue';

defineSlots<{
  default: Slot;
}>();
</script>

<template>
  <div :class="$style.it">
    <div :class="$style.frame" />
    <slot />
  </div>
</template>

<style module>
.it {
  position: relative;
  background-color: #120211;
  corner-shape: notch;
  border-radius: 4px;
  outline: 2px solid #48149a;
  outline-offset: -4px;
  display: grid;
}

.frame {
  position: absolute;
  image-rendering: pixelated;
  pointer-events: none;
  background-image: url('./frames/magenta.png');
  background-size: contain;
  background-repeat: no-repeat;
  filter: hue-rotate(-40deg);
  aspect-ratio: 63 / 34;
  width: 110%;
  justify-self: center;
  top: -37%;
}
</style>
