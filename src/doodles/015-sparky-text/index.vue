<script setup lang="ts">
import { ref } from 'vue';

import { SparkyText } from '../../bits';
import { Bento } from '../../components';

const a = ref(1);
const b = ref(3);
const c = ref(4);

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
  <Bento.Cell w="3" h="3" subgrid>
    <SparkyText
      style="grid-area: 1 / 1 / 1 / -1"
      :color="colors.at(a % colors.length)"
      :class="$style.text"
      @click="a += 1"
      >[Sparky Text]</SparkyText
    >
    <SparkyText
      style="grid-area: 2 / 1 / 2 / -1"
      :color="colors.at(b % colors.length)"
      :class="$style.text"
      @click="b += 1"
      >[Sparky Text]</SparkyText
    >
    <SparkyText
      style="grid-area: 3 / 1 / 3 / -1"
      :color="colors.at(c % colors.length)"
      :class="$style.text"
      @click="c += 1"
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
