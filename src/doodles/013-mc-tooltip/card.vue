<script setup lang="ts">
import type { Slot } from 'vue';

defineSlots<{
  default: Slot;
}>();
</script>

<template>
  <div :class="$style.it">
    <slot />
  </div>
</template>

<style module>
.it {
  background-color: #120211;
  corner-shape: notch;
  border-radius: 4px;
  outline: 2px solid #48149a;
  outline-offset: -4px;
}
</style>
