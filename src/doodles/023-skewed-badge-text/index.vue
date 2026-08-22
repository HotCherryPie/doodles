<script setup lang="ts">
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell w="4">
    <div :class="$style.it">
      <div :class="$style.bg" />
      <div :class="$style.text">ULTIMATE</div>
    </div>
  </Bento.Cell>
</template>

<style module>
.it {
  display: grid;
  font-size: 1.25rem;

  & > * {
    grid-area: 1/1;
  }
}

.bg {
  background-color: crimson;
  width: 100%;
  justify-self: center;
  border-radius: 0.2em 0.2em 0.2em 0.2em;
  transform: skewX(-11deg);
  z-index: -1;
  box-shadow: 0 0 20px 0 #b51c394a;
}

.text {
  font-family: 'Tactic Round Extended';
  font-style: italic;
  font-weight: 900;
  translate: -0.01em 0;
  background-image: linear-gradient(to bottom, #fffa, #fff);
  background-clip: text;
  color: transparent;
  padding: 0.2em 0.2em;
  text-box: trim-both cap alphabetic;
}
</style>
