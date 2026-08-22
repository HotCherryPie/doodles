<script setup lang="ts">
import { Bento } from '../../components';

const text =
  'If we’re both going crazy, then we’ll go crazy together, right?'.toLocaleUpperCase(
    'en',
  );
</script>

<template>
  <Bento.Cell w="3" h="5">
    <div :class="$style.it">{{ text }}</div>
  </Bento.Cell>
</template>

<style module>
.it {
  font-family: 'Mabook';
  font-size: 1.25rem;
  line-height: 1.1;
  text-align: center;
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to bottom, #161113, #cfd2da);
}
</style>
