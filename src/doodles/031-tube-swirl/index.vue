<script setup lang="ts">
import { Bento } from '../../components';

// const colors = ['#B2054C', '#D10056', '#FFB900', '#007DCC'];
// const colors = ['#8B1E2D', '#E63946', '#F4D35E', '#457B9D'];
const colors = ['#25a737', '#f4bb14', '#ee6e1a', '#e4191e', '#2291d0'];
const gap = 5.5;

// eslint-disable-next-line unicorn/no-array-reduce
const stops = colors.reduce((out, it, index, array) => {
  const gapsCount = array.length - 1;
  const gapsQuota = gapsCount * gap;
  const segmentSize = (100 - gapsQuota) / array.length;
  const offset = index * (segmentSize + gap);

  return `
    ${out},
    #0000 ${offset - gap}%,
    #0000 ${offset}%,
    ${it} ${offset}%,
    ${it} ${offset + segmentSize}%
  `.replaceAll(/\s+/g, ' ');
}, '');
const fill = `linear-gradient(-22.5deg${stops})`;
</script>

<template>
  <Bento.Cell w="1" h="2">
    <div :class="$style.it" />
  </Bento.Cell>
</template>

<style module>
.it {
  position: absolute;
  inset: 0;
  background-image: v-bind(fill);
  filter: url("data:image/svg+xml,\
    <svg xmlns='http://www.w3.org/2000/svg'>\
      <defs>\
        <filter id='filter'>\
          <feGaussianBlur in='SourceGraphic' stdDeviation='3' result='blur'></feGaussianBlur>\
          <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -8' result='goo'></feColorMatrix>\
          <feComposite in='SourceGraphic' in2='goo' operator='atop'></feComposite>\
        </filter>\
      </defs>\
    </svg>#filter");
}
</style>
