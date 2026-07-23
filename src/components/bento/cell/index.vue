<script setup lang="ts">
import { ref } from 'vue';
import type { Slot } from 'vue';

import type { Props } from './types';

withDefaults(defineProps<Props>(), {
  w: 1,
  h: 1,
  x: 'auto',
  y: 'auto',
});

defineSlots<{
  default: Slot;
}>();

const key = ref(1);
</script>

<template>
  <div
    :key
    :class="[
      $style.content,
      !cover && $style.center,
      subgrid && $style.subgrid,
    ]"
    @click="key += refreshable ? 1 : 0"
  >
    <slot />
  </div>
</template>

<style lang="css" module>
.content {
  position: relative;
  contain: layout size style;
  display: grid;
  grid-column-start: v-bind(x);
  grid-column-end: span v-bind(w);
  grid-row-start: v-bind(y);
  grid-row-end: span v-bind(h);
}

.subgrid {
  contain: size style;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.center {
  place-items: center;
}
</style>
