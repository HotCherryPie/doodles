<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<!-- eslint-disable-next-line vue/enforce-style-attribute -->
<style lang="css">
@import url(./styles/fonts.css);

html {
  font-size: 1.25rem; /* 20px most likely */
}

body {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}

#app {
  display: contents;
}
</style>
