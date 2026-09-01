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
  src: url(data:font/woff2;base64,d09GMgABAAAAAADYAAoAAAAAAfgAAACRAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk4ALAocQAE2AiQDCAsGAAQgBQYHIBthAfgvCuwG7Rrd4iYMg5LqU0TZZLPfa3uCBGExyAo8AiFfOBzCEwgBJnLzILRYz/oGQLj+l531+0X9DxtwYJIwxhjgckLQwAFJASutQWvgVRhW3IeDQ9BALIKTcoFSguNfSAAMUAgKZ0ABUp+9f/b/hDYBBOFWP73XNPhevQ1ODZuA0GCCSQAAozAhGErgmwUA);
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
