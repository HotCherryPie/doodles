<script setup lang="ts">
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell w="3" h="2">
    <div :class="$style.it">
      <div :class="$style.text">SMACK</div>

      <svg stroke="#000" stroke-width="20" viewBox="154 148 1085 835">
        <path
          d="M432 158c102 194 238 218 440 64 61 214 156 177 321 100-52 80-2 179 36 197-199 115-305 334-345 454a335 335 0 0 0-380-24c-42-148-128-229-329-182 22-65 15-139-11-187 79-53 92-120 69-187 140 21 176-71 199-235"
          fill="#fff"
        ></path>
      </svg>
    </div>
  </Bento.Cell>
</template>

<style module>
@font-face {
  font-family: 'Bangers';
  src: url('./bangers.ttf');
}

.it {
  display: grid;
  place-items: center;

  & > * {
    grid-area: 1/1;
  }
}

.text {
  font-family: 'Bangers';
  font-size: 2rem;
  color: #fff;
  -webkit-text-stroke: 0.1em #000;
  paint-order: stroke;
  rotate: 8deg;
}
</style>
