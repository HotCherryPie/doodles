<script setup lang="ts">
import { Bento } from '../components';
import {
  Heading,
  IosActivityIndicator,
  PanHeart,
  Controls,
  WebKitsAudio,
} from '../doodles';
</script>

<template>
  <Bento.Grid :class="$style.bento">
    <Heading />
    <Controls />
    <IosActivityIndicator />
    <PanHeart />
    <WebKitsAudio />
  </Bento.Grid>
</template>

<style lang="css" module>
.bento {
  margin: 32px;
  column-rule: 1px solid #0001;
  row-rule: 1px solid #0001;
  border: 1px solid #0001;
}
</style>
