<script setup lang="ts">
import { ref } from 'vue';

import { SwitchBox } from '../../bits';
import { Bento } from '../../components';

const value = ref(false);
</script>

<template>
  <Bento.Cell>
    <SwitchBox v-model="value" data-silent />
  </Bento.Cell>
</template>

<style module>
.it {
}
</style>
