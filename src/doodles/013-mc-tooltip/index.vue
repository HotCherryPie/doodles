<script setup lang="ts">
import { Bento } from '../../components';

import Text from './text.vue';
</script>

<template>
  <Bento.Cell :w="5" :h="3" cover>
    <div :class="$style.it">
      <div :class="$style.frame" />
      <Text color="magenta" fancy>Bow of flame</Text>
    </div>
  </Bento.Cell>
</template>

<style lang="css" module>
.it {
  position: relative;
  font-family: Minecraft;
  background-color: #120211;
  corner-shape: notch;
  border-radius: 4px;
  outline: 2px solid #48149a;
  outline-offset: -4px;
  height: 100%;
  padding: 12px 16px;
}

.frame {
  position: absolute;
  image-rendering: pixelated;
  pointer-events: none;
  background-image: url('./frames/magenta.png');
  background-size: contain;
  background-repeat: no-repeat;
  inset-block-end: 0;
  inset-block-start: -50px;
  background-position-y: -2px;
  inset-inline: -9px;
  filter: hue-rotate(-40deg);
}
</style>
