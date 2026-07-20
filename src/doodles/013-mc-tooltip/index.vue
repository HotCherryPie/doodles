<script setup lang="ts">
import { Bento } from '../../components';

import Card from './card.vue';
import Text from './text.vue';
</script>

<template>
  <Bento.Cell :w="6" :h="5" cover>
    <Card :class="$style.card">
      <Text color="magenta" fancy>Bow of flame</Text>
    </Card>
  </Bento.Cell>
</template>

<style lang="css" module>
.card {
  padding: 16px 20px;
}
</style>
