<script setup lang="ts">
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell w="3" h="2" cover>
    <div :class="$style.it" />
  </Bento.Cell>
</template>

<style module>
.it {
  --r: 0.2rem;
  --c: #fd2e94;
  --cb: hsl(from var(--c) h s 15);

  background-color: var(--cb);
  corner-shape: notch;
  border-radius: var(--r);
  border: var(--r) solid var(--cb);

  background-image:
    linear-gradient(
      to right,
      var(--c) var(--r),
      #0000 var(--r),
      #0000 calc(100% - var(--r)),
      var(--c) var(--r)
    ),
    linear-gradient(
      to bottom,
      var(--c) var(--r),
      #0000 var(--r),
      #0000 calc(100% - var(--r)),
      var(--c) var(--r)
    );
}
</style>
