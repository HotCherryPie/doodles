<script setup lang="ts">
import { IosActivityIndicator } from '../../bits';
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell refreshable subgrid w="1" h="3">
    <IosActivityIndicator mode="tint" color="#aaa" />
    <IosActivityIndicator mode="tint" color="#1e90ff" />
    <IosActivityIndicator mode="accent" color="#ff1a40" />
  </Bento.Cell>
</template>
