<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<!-- eslint-disable-next-line vue/enforce-style-attribute -->
<style lang="css">
@import url(./styles/fonts.css);

/* TODO: move to reset styles */
@font-face {
  font-family: 'fons';
  src: url(data:font/woff2;base64,d09GMgABAAAAAAC4AAoAAAAAAgQAAAByAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAANAoQMAE2AiQDBgsGAAQgBQYHIBtpAfifBc45rrYQso7ZW2jMo+frxH3/bqKVjN+UtKoFg5AleTrrq2S4Eb4mgTUd/9AUlxbgAAQa4LCQFHk8AgEAcMBg4baE23awbfF435dOAjBgI4QBbEAFCPH9zY9Zgb/2lYABEQAQACBAGAkMgMdlAQ==);
}

html {
  font-size: 1.25rem; /* 20px most likely */
  font-family: 'fons';
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
