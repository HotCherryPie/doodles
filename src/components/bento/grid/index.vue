<script setup lang="ts">
import type { Slot } from 'vue';

defineSlots<{
  default: Slot;
}>();

defineProps<{
  gap: CSSValueType.AbsoluteSize;
  scale: CSSValueType.AbsoluteSize;
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
  grid-template-columns: repeat(auto-fill, v-bind(scale));
  /* grid-template-rows: repeat(auto-fill, v-bind(scale)); */
  grid-template-rows: repeat(30, v-bind(scale));
  justify-content: center;
  gap: v-bind(gap);

  user-select: none;
}
</style>
