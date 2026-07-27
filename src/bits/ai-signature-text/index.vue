<script setup lang="ts">
/* https://codepen.io/amazing-vishnya/pen/xbKMdKz */

defineProps<{
  text: string;
}>();
</script>

<template>
  <div :class="$style.it">
    <span :class="$style.select">{{ text }}</span>
    <span :class="$style.text">{{ text }}</span>
    <span :class="[$style.text, $style.glow1]">{{ text }}</span>
    <span :class="[$style.text, $style.glow2]">{{ text }}</span>
  </div>
</template>

<style module>
.it {
  font-family: 'Nunito', sans-serif;

  filter: saturate(1.5);
  font-weight: 500;
  line-height: 1.1; /* Fix for Chrome overflow */
  white-space: nowrap;

  display: grid;
  > * {
    grid-area: 1/1;
  }
}

.select {
  text-box: trim-both cap alphabetic;
  color: transparent;
}

.text {
  position: absolute; /* Let .select define block size */
  color: transparent;
  text-box: trim-both cap text;
  animation: ai 5s infinite linear;

  background-clip: text;
  background-attachment: local;
  background-size: 500%;
  background-position: -500% 0%;
  background-image: linear-gradient(
    in lch 131.88deg,
    #e67b99 0%,
    #91626f 25%,
    rgb(112, 161, 240) 50%,
    #6a6291 75%,
    #e67b99 100%
  );
}

.glow1 {
  filter: blur(0.4em);
  mix-blend-mode: color-burn;
  opacity: 0.5;
}

.glow2 {
  filter: blur(1em);
  mix-blend-mode: difference;
  animation-delay: 0s;
}

@keyframes ai {
  to {
    background-position: 0%;
  }
}
</style>
