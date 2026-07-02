<script setup lang="ts">
import type { Slot } from 'vue';

defineSlots<{ default: Slot }>();
</script>

<template>
  <div>
    <slot />
  </div>
</template>
