<script setup lang="ts">
import { useKeyModifier, whenever, useDocumentVisibility } from '@vueuse/core';
import { ref, toRef } from 'vue';

import { SwitchBox } from '../bits';
import { Bento } from '../components';
import { doodles } from '../doodles';

const withRulers = ref(false);
const scale = '2rem';
const gap = '0.5rem';

const hoveredDoodleIndex = ref<number>();
const lastHoveredDoodleIndex = ref<number>();

const documentVisibility = useDocumentVisibility();
const ctrl = useKeyModifier('Control', { initial: false });

const inspected = toRef(() => ctrl.value);

whenever(
  () => documentVisibility.value === 'hidden',
  () => (ctrl.value = false),
);

whenever(
  () => !inspected.value,
  () => (lastHoveredDoodleIndex.value = undefined),
);

const hoveredDoodle = toRef(() =>
  hoveredDoodleIndex.value === undefined ?
    undefined
  : doodles[hoveredDoodleIndex.value],
);
const lastHoveredDoodle = toRef(() =>
  lastHoveredDoodleIndex.value === undefined ?
    undefined
  : doodles[lastHoveredDoodleIndex.value],
);

function handleDoodleEnter(index: number) {
  hoveredDoodleIndex.value = index;
  lastHoveredDoodleIndex.value = index;
}
function handleDoodleLeave() {
  hoveredDoodleIndex.value = undefined;
  if (!inspected.value) lastHoveredDoodleIndex.value = undefined;
}
function handleToSourceLeave() {
  lastHoveredDoodleIndex.value = undefined;
}

const gh = (it: string) =>
  `https://github.com/HotCherryPie/doodles/tree/main/${it}`;
</script>

<template>
  <Bento.Grid
    :gap
    :scale
    :class="[
      $style.bento,
      withRulers && $style.rulers,
      inspected && $style.inspected,
    ]"
  >
    <template v-for="(it, i) of doodles" :key="i">
      <component
        :is="it.component"
        :style="{
          'anchor-name':
            lastHoveredDoodleIndex === i ? `--hovered-doodle` : undefined,
        }"
        @mouseenter="handleDoodleEnter(i)"
        @mouseleave="handleDoodleLeave()"
      />
    </template>
  </Bento.Grid>

  <a
    :class="[
      $style.summary,
      inspected && lastHoveredDoodleIndex !== undefined && $style.active,
    ]"
    :href="lastHoveredDoodle?.location ? gh(lastHoveredDoodle.location) : '/'"
    @mouseleave="handleToSourceLeave()"
  >
    <svg viewBox="67.59 106.38 351.41 409.62">
      <path
        fill="currentColor"
        d="M335 499c-13 0-16-6-16-12l1-70c0-24-8-40-18-48 57-6 117-28 117-126 0-28-10-51-26-69 3-6 11-32-3-67 0 0-21-7-70 26-42-12-86-12-128 0-49-33-70-26-70-26-14 35-6 61-3 67-16 18-26 41-26 69 0 98 59 120 116 126-7 7-14 18-16 35-15 6-52 17-74-22 0 0-14-24-40-26 0 0-25 0-1 16 0 0 16 7 28 37 0 0 15 50 86 34l1 44c0 6-3 12-16 12-14 0-12 17-12 17H347s2-17-12-17Z"
      />
    </svg>
  </a>

  <div :class="$style.toolbar">
    <label data-silent>
      <SwitchBox v-model="withRulers" />
      <p>Rulers</p>
    </label>

    <div style="flex-grow: 1" />

    <p secondary>{{ hoveredDoodle?.name }}</p>
  </div>
</template>

<style lang="css" module>
.bento {
  margin: 1rem 1rem;
  padding: calc(v-bind(gap) / 2);
  background-color: #f8f8f9;
  outline: 1px solid #0001;

  &.rulers {
    column-rule: 1px solid #0001;
    row-rule: 1px solid #0001;
  }

  &.inspected {
    > * > * {
      /* Leave pointer events only fro doodle root element */
      pointer-events: none;
    }
  }
}

.summary {
  background-color: #ed143dee;
  border-radius: 0.5rem;
  color: #fff;
  position: fixed;
  z-index: calc(infinity);

  display: grid;
  place-items: center;

  position-anchor: --hovered-doodle;
  left: anchor(left);
  right: anchor(right);
  top: anchor(top);
  bottom: anchor(bottom);

  &:not(.active /* :hover */) {
    display: none;
  }

  svg {
    width: min(70%, 1.5rem);
    height: min(70%, 1.5rem);
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
