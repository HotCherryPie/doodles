<script setup lang="ts">
import { PanHeart } from '../../bits';
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell :w="3" :h="3" inert>
    <PanHeart :class="$style.heart" />
    <div v-if="false" :class="$style.text">
      <span style="--color: #ff218c">P</span>
      <span style="--color: #ffd800">a</span>
      <span style="--color: #21b1ff">n</span>
    </div>
  </Bento.Cell>
</template>

<style lang="css" module>
.text {
  /* position: absolute; */
  font-family: Blaktur;
  font-size: 2rem;
  inset-block-start: 1.5rem;
  color: transparent;

  span {
    color: var(--color);
  }
}

.heart {
  font-size: 6rem;
  rotate: -90deg;
}
</style>
