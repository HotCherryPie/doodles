<script setup lang="ts">
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell w="2" h="2" subgrid>
    <div :class="$style.it1" style="grid-area: 1 / 1 / 1 / -1">
      &lcub;<span>CORE</span>&rcub;
    </div>
    <div :class="$style.it2" style="grid-area: 2 / 1 / 2 / -1">
      &lsqb;<span>CORE</span>&rsqb;
    </div>
  </Bento.Cell>
</template>

<style module>
.it1 {
  text-box: trim-both cap alphabetic;
  font-family: 'Sono';
  font-weight: 500;
  font-size: 1.2rem;
  color: #0004;

  span {
    font-weight: 600;
    color: dodgerblue;
  }
}

.it2 {
  text-box: trim-both cap alphabetic;
  font-family: 'Sono';
  font-weight: 500;
  font-size: 1.2rem;
  color: #0004;

  span {
    font-weight: 600;
    color: color(rec2020 0.94 0.83 0.05);
    display: inline-block;
    transform: translateY(0.05em);
  }
}
</style>
