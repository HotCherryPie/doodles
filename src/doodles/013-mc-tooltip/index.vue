<script setup lang="ts">
import { Bento } from '../../components';

import Card from './card.vue';
import Text from './text.vue';

const TITLE = 'The Pink Scoundrel';
const DESCRIPTION =
  'It would be a deadly mistake to underestimate the power of the Pink Scoundrel';
</script>

<template>
  <Bento.Cell :w="9" :h="8" cover>
    <Card :class="$style.card">
      <Text color="orange" kind="fancy">{{ TITLE }}</Text>
      <Text kind="secondary">{{ DESCRIPTION }}</Text>
    </Card>
  </Bento.Cell>
</template>

<style lang="css" module>
.card {
  font-size: 1rem;
  padding: 20px 20px;
  display: grid;
  gap: 1em;
  grid-template-rows: auto auto 1fr;
}
</style>
