<script setup lang="ts">
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell w="3" h="2">
    <div :class="$style.it">
      <div :class="$style.text">SMACK</div>

      <svg
        viewBox="-4.5 -4.5 535 379"
        style="scale: 1.6; translate: 7% -1%; z-index: -1"
      >
        <path
          stroke-width="7"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="#ffed00"
          stroke="#000"
          d="M84 48c120 86.5 142 95 134-48 37.5 131.4 74.4 131.6 152 50-49.8 88-15.5 106.7 100 37-89 82-66 98 56 118-133-1-142 4-47 84-113-47-136.4-62-94 66-80-126.4-110.1-131-140 15-14-146-21-140-148-33 79-121 47.3-111.8-94-58 92.3-76.5 90.8-94-3-147 109 20 178.5 20.2 84-84"
        />
      </svg>
    </div>
  </Bento.Cell>
</template>

<style module>
.it {
  display: grid;
  place-items: center;

  & > * {
    grid-area: 1/1;
  }
}

.text {
  --stroke-color: #000;

  font-family: 'Bangers';
  font-size: 2rem;
  color: #fff;
  -webkit-text-stroke: 0.125em var(--stroke-color);
  paint-order: stroke;
  rotate: 8deg;
  text-shadow: 0.1em 0.1em var(--stroke-color);
}
</style>
