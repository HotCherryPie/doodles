<script setup lang="ts">
import { Bento } from '../../components';

// const colors = ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'];
// const colors = ['#B2054C', '#D10056', '#FFB900', '#007DCC'];
const colors = ['#01aad3', '#ffd90d', '#fe9310', '#fa3411', '#f9226b'];
</script>

<template>
  <Bento.Cell w="3" h="2">
    <div :class="$style.it">
      <div
        v-for="(color, i) of colors"
        :key="i"
        :class="$style.c"
        :style="{
          backgroundColor: color,
          height: `${0.2 * 1.3 ** i}em`,
        }"
      />

      <div :class="$style.text">ARCADE</div>
      <div :class="$style.overlay" />
    </div>
  </Bento.Cell>
</template>

<style module>
.it {
  font-size: 1rem;
  padding: 0.2em;
  border-radius: 0.3em;
  border: 0.025em solid #0002;
  box-shadow: 0 0.05em 0 #0002;
  background-color: #f2f0f0;
  display: flex;
  flex-direction: column;
  gap: 0.1em;

  position: relative;
  overflow: hidden;
}

.text {
  font-family: 'Tactic Round';
  font-weight: 800;
  font-stretch: expanded;
  text-box: trim-both cap alphabetic;
  margin-top: 0.1em;
  color: #3a0707;
}

.c {
  height: 0.5rem;
  border-radius: 0.1em;
  background-color: crimson;
}

.overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background-size: 1000%;
  mix-blend-mode: soft-light;
  backdrop-filter: saturate(0.9);
  opacity: 0.4;
  background-image: url("data:image/svg+xml,\
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 700'>\
      <filter id='a'>\
        <feTurbulence baseFrequency='.05' numOctaves='4' seed='15' stitchTiles='stitch' type='fractalNoise'/>\
        <feSpecularLighting lighting-color='%23fff' specularConstant='1.9' specularExponent='20' surfaceScale='9'>\
          <feDistantLight azimuth='3' elevation='102'/>\
        </feSpecularLighting>\
      </filter>\
      <filter id='b'>\
        <feTurbulence baseFrequency='.05' numOctaves='4' seed='25' stitchTiles='stitch' type='fractalNoise'/>\
        <feSpecularLighting lighting-color='%23fff' specularConstant='1.9' specularExponent='20' surfaceScale='9'>\
          <feDistantLight azimuth='3' elevation='102'/>\
        </feSpecularLighting>\
        <feColorMatrix values='-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0' />\
      </filter>\
      <path fill='%23808080' d='M0 0h700v700H0z'/>\
      <path d='M0 0h700v700H0z' filter='url(%23a)' opacity='0.5' />\
      <path d='M0 0h700v700H0z' filter='url(%23b)' opacity='0.5' />\
    </svg>");
}
</style>
