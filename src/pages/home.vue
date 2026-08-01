<script setup lang="ts">
import { ref } from 'vue';

import { SwitchBox } from '../bits';
import { Bento } from '../components';
import { doodles } from '../doodles';

const withRulers = ref(false);
const scale = '2rem';
const gap = '0.5rem';
</script>

<template>
  <div :class="$style.toolbar">
    <label data-silent>
      <SwitchBox v-model="withRulers" />
      Rulers
    </label>
  </div>

  <Bento.Grid :gap :scale :class="[$style.bento, withRulers && $style.rulers]">
    <template v-for="(it, i) of doodles" :key="i">
      <component :is="it.component" />
    </template>
  </Bento.Grid>
</template>

<style lang="css" module>
.bento {
  margin: 1rem 2rem;
  padding: calc(v-bind(gap) / 2);

  &.rulers {
    column-rule: 1px solid #0001;
    row-rule: 1px solid #0001;
    outline: 1px solid #0001;
  }
}

.toolbar {
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  grid-area: 1rem;
  font-family: sans-serif;
  border-bottom: 1px solid #eee;

  label {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    user-select: none;
  }
}
</style>
