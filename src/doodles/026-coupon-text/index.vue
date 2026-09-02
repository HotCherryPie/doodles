<script setup lang="ts">
import { CouponText } from '../../bits';
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell w="4" h="2">
    <CouponText :class="$style.it" leading="HOT" trailing="SALE" />
  </Bento.Cell>
</template>

<style module>
.it {
  color: crimson;
  font-weight: 900;
  letter-spacing: 0.025ch;
  font-family: 'Anja Eliane';
  font-size: 2rem;
  filter: drop-shadow(0 0.0625em 0.0625em rgba(0, 0, 0, 0.05))
    drop-shadow(0 0.125em 0.5em rgba(0, 0, 0, 0.1));
}
</style>
