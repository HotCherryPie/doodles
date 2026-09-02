<script setup lang="ts">
import { Bento } from '../../components';

import A from './variants/a.vue';
import B from './variants/b.vue';
import C from './variants/c.vue';
</script>

<template>
  <Bento.Cell w="2" h="3" subgrid :class="$style.cell">
    <A />
    <B />
    <C />
  </Bento.Cell>
</template>

<style module>
.cell {
  > * {
    grid-column: 1/-1;
  }
}
</style>
