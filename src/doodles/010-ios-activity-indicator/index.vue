<script setup lang="ts">
import { IosActivityIndicator } from '../../bits';
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell>
    <IosActivityIndicator mode="tint" color="#1e90ff" />
  </Bento.Cell>

  <Bento.Cell>
    <IosActivityIndicator mode="accent" color="hsl(350deg 100% 55% / 100%)" />
  </Bento.Cell>
</template>
