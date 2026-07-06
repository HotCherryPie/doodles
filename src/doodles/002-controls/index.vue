<script setup lang="ts">
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell :w="6" :h="1" :y="4" cover style="display: grid">
    <div :class="$style.it"></div>
  </Bento.Cell>
</template>

<style lang="css" module>
.it {
  border-radius: 8px;
  background-color: #eee;
}
</style>
