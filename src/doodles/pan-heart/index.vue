<script setup lang="ts">
import { PanHeart } from '../../bits';
</script>

<template>
  <div :class="$style.it">
    <PanHeart :class="$style.heart" />
    <div :class="$style.text">
      <span style="--color: #ff218c">P</span>
      <span style="--color: #ffd800">a</span>
      <span style="--color: #21b1ff">n</span>
    </div>
  </div>
</template>

<style lang="css" module>
.it {
  position: relative;
}

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
