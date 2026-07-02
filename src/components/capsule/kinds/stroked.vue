<script setup lang="ts">
import type { Slot } from 'vue';

defineSlots<{ default: Slot }>();
defineProps<{
  color?: CSSValueType.Color | undefined;
  thickness?: CSSValueType.Length | undefined;
  stroke?: 'sold' | 'dotted' | 'dashed' | undefined; // CSSValueType.LineStyle
}>();
</script>

<template>
  <div :class="$style.it">
    <slot />
  </div>
</template>

<style lang="css" module>
.it {
  border-radius: var(--bento-rounding);
  corner-shape: superellipse(var(--bento-rounding-aspect));
  border: v-bind(thickness) v-bind(stroke) v-bind(color);
}
</style>
