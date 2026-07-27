<script setup lang="ts">
import { ref } from 'vue';

import { SparkyText } from '../../bits';
import { Bento } from '../../components';

const x = ref(1);
const colors = [
  'blue',
  'cyan',
  'green',
  'magenta',
  'orange',
  'red',
  'yellow',
] as const;
</script>

<template>
  <Bento.Cell w="3" @click="x += 1">
    <SparkyText :color="colors.at(x % colors.length)" :class="$style.text"
      >[Sparky Text]</SparkyText
    >
  </Bento.Cell>
</template>

<style lang="css" module>
.text {
  font-family: 'Shantell Sans';
  font-variation-settings: 'BNCE' 61;
}
</style>
