<script setup lang="ts">
import { Bento } from '../../components';

import A from './variants/a.vue';
import B from './variants/b.vue';
import C from './variants/c.vue';
import D from './variants/d.vue';
</script>

<template>
  <Bento.Cell w="2" h="4" subgrid :class="$style.cell">
    <A />
    <B />
    <C />
    <D />
  </Bento.Cell>
</template>

<style module>
.cell {
  > * {
    grid-column: 1/-1;
  }
}
</style>
