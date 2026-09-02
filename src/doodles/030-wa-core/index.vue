<script setup lang="ts">
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell w="2">
    <div :class="$style.it">&lcub;<span>CORE</span>&rcub;</div>
  </Bento.Cell>
</template>

<style module>
.it {
  font-family: 'Sono';
  font-weight: 500;
  font-size: 1.2rem;
  color: #0004;
  /* color: rgb(from dodgerblue r g b / 0.3); */

  span {
    font-weight: 600;
    color: dodgerblue;
  }
}
</style>
