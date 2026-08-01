<script setup lang="ts">
import { Bento } from '../../components';

import Leading from './leading.vue';
import Middle from './middle.vue';
</script>

<template>
  <Bento.Cell w="5" h="2" subgrid>
    <Leading style="grid-area: 1 / 1 / 1 / -1" />
    <Middle style="grid-area: 2 / 1 / 2 / -1" />
  </Bento.Cell>
</template>
