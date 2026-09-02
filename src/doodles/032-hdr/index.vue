<script setup lang="ts">
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell>
    <div :class="$style.it">HDR</div>
  </Bento.Cell>
</template>

<style module>
.it {
  color: #98a2f6;
  font-size: 0.6rem;
  font-family: 'Nunito';
  font-weight: 900;
  padding: 0.3em 0.3em;
  border-radius: 0.5em;
  border: 0.2em solid currentColor;
  text-box: trim-both cap alphabetic;
  /* corner-shape: superellipse(1.4); */
}
</style>
