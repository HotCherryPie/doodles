<script setup lang="ts">
import { FeverText } from '../../bits';
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell w="5">
    <FeverText :class="$style.it">CROP FEVER!</FeverText>
  </Bento.Cell>
</template>

<style module>
.it {
  font-family: 'Minecraft Seven';
  font-size: 1.5rem;
}
</style>
