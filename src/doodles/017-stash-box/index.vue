<script setup lang="ts">
import { Carton } from '../../bits';
import { Bento } from '../../components';

import Back from './side-back.vue';
import Front from './side-front.vue';
import Left from './side-left.vue';
import Right from './side-right.vue';

// https://workbox.sh/?v=3
// https://icons8.com/icons/set/ecommerce--style-color
// https://icons8.com/icons/set/ecommerce--style-pulsar-line
// https://www.gwp.co.uk/guides/transit-packaging-symbols/

const holes: 'x' | 'z' = 'x' as 'x' | 'z';
const color = '#fdfdfd';
const w = '12rem';
const h = '6rem';
const l = '12rem';
</script>

<template>
  <Bento.Cell w="8" h="8">
    <Carton :holes :color :w :h :l :class="$style.box">
      <template #front>
        <Front />
      </template>

      <template #back>
        <Back />
      </template>

      <template #left>
        <Left />
      </template>

      <template #right>
        <Right />
      </template>
    </Carton>
  </Bento.Cell>
</template>

<style module>
.box {
  pointer-events: none;
  transform: rotateX(-30deg) rotateY(-45deg);
}
</style>
