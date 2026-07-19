<script setup lang="ts">
import { ref } from 'vue';
import type { Slot } from 'vue';

import type { Props } from './types';

withDefaults(defineProps<Props>(), {
  w: 1,
  h: 1,
  x: 'auto',
  y: 'auto',
  cover: false,
});

defineSlots<{
  default: Slot;
}>();

const key = ref(1);
</script>

<template>
  <div
    :key
    :class="[$style.content, !cover && $style.center]"
    @click="key += 1"
  >
    <slot />
  </div>
</template>

<style lang="css" module>
.content {
  position: relative;
  contain: layout size style;
  grid-column-start: v-bind(x);
  grid-column-end: span v-bind(w);
  grid-row-start: v-bind(y);
  grid-row-end: span v-bind(h);
}

.center {
  display: grid;
  place-items: center;
}
</style>
