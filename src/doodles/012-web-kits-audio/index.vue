<script setup lang="ts">
import { Bento } from '../../components';

import { sounds } from './sounds';
</script>

<template>
  <Bento.Cell :w="5" :h="2">
    <div :class="$style.root">
      <button
        v-for="(sound, i) of sounds"
        :key="i"
        type="button"
        data-silent
        :class="$style.btn"
        @click="sound()"
      >
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.74514 3.06414C4.41183 2.87665 4 3.11751 4 3.49993V12.5002C4 12.8826 4.41182 13.1235 4.74512 12.936L12.7454 8.43601C13.0852 8.24486 13.0852 7.75559 12.7454 7.56443L4.74514 3.06414ZM3 3.49993C3 2.35268 4.2355 1.63011 5.23541 2.19257L13.2357 6.69286C14.2551 7.26633 14.2551 8.73415 13.2356 9.30759L5.23537 13.8076C4.23546 14.37 3 13.6474 3 12.5002V3.49993Z"
          />
        </svg>
      </button>
    </div>
  </Bento.Cell>
</template>

<style lang="css" module>
.root {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  width: 1.25rem;
  height: 1.25rem;
  color: #1437ed;
  border: 1px solid hsl(from currentColor h s 70%);
  border-radius: 8px;
  corner-shape: superellipse(1.6);
  aspect-ratio: 1;
  display: grid;
  place-items: center;

  svg {
    height: 0.8rem;
    width: 0.8rem;
    fill: currentColor;
  }
}
</style>
