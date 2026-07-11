<script setup lang="ts">
import { Bento } from '../components';
import { doodles } from '../doodles';

const scale = '32px';
const gap = '8px';
</script>

<template>
  <Bento.Grid :gap :scale :class="[$style.bento, $style.rules]">
    <template v-for="(it, i) of doodles" :key="i">
      <component :is="it.component" />
    </template>
  </Bento.Grid>
</template>

<style lang="css" module>
.bento {
  margin: 32px;
  padding: calc(v-bind(gap) / 2);

  &.rules {
    column-rule: 1px solid #0001;
    row-rule: 1px solid #0001;
    /* outline: 1px solid #0001; */
  }
}
</style>
