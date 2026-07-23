<script setup lang="ts">
// asd
</script>

<template>
  <div :class="$style.it">
    <div :class="$style.highlight" />
    <img :class="$style.pic" src="./items/mcd-the-pink-scoundrel-custom.png" />
  </div>
</template>

<style lang="css" module>
.it {
  display: grid;
  place-items: stretch;

  & > * {
    grid-area: 1/1;
  }
}

.highlight {
  position: absolute;
}

.pic {
  object-fit: contain;
  pointer-events: none;
  contain: size;
}
</style>
