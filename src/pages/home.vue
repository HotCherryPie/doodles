<script setup lang="ts">
import { useKeyModifier } from '@vueuse/core';
import { ref } from 'vue';

import { SwitchBox } from '../bits';
import { Bento } from '../components';
import { doodles } from '../doodles';

const withRulers = ref(false);
const scale = '2rem';
const gap = '0.5rem';

const hoveredDoodle = ref<string>();

const shift = useKeyModifier('Shift', { initial: false });
</script>

<template>
  <Bento.Grid :gap :scale :class="[$style.bento, withRulers && $style.rulers]">
    <template v-for="(it, i) of doodles" :key="i">
      <component
        :is="it.component"
        @mouseenter="hoveredDoodle = it.name"
        @mouseleave="hoveredDoodle = undefined"
      />
    </template>
  </Bento.Grid>

  <div :class="$style.toolbar">
    <label data-silent>
      <SwitchBox v-model="withRulers" />
      <p>Rulers</p>
    </label>

    <div style="flex-grow: 1" />

    <p secondary>{{ hoveredDoodle }}</p>
  </div>
</template>

<style lang="css" module>
.bento {
  margin: 1rem 1rem;
  padding: calc(v-bind(gap) / 2);

  &.rulers {
    column-rule: 1px solid #0001;
    row-rule: 1px solid #0001;
    outline: 1px solid #0001;
  }
}

.toolbar {
  padding: 0.25rem 1rem;
  display: flex;
  align-items: center;
  grid-area: 1rem;
  font-family: sans-serif;
  border-top: 1px solid #eee;
  position: sticky;
  bottom: 0;
  background-color: #fff;
  z-index: 1000;
  font-family: 'Shantell Sans';

  p {
    &[secondary] {
      color: #0007;
    }
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    p {
      text-box: trim-both cap alphabetic;
      user-select: none;
      color: #555;
      font-weight: 450;
    }

    &:has([aria-checked='true']) {
      p {
        color: #000;
      }
    }
  }
}
</style>
