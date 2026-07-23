<script setup lang="ts">
import { IosActivityIndicator } from '../../bits';
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell refreshable>
    <IosActivityIndicator mode="tint" color="#1e90ff" />
  </Bento.Cell>

  <Bento.Cell refreshable>
    <IosActivityIndicator mode="accent" color="hsl(350deg 100% 55% / 100%)" />
  </Bento.Cell>
</template>
