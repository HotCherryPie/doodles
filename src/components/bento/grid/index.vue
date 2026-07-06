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

<style lang="css" module>
.it {
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fill, 32px);
  /* grid-template-rows: repeat(auto-fill, 32px); */
  grid-template-rows: repeat(30, 32px);
  justify-content: center;
  gap: 8px;
}
</style>
