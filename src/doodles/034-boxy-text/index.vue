<script setup lang="ts">
import { Box } from '../../bits';
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell
    w="4"
    h="3"
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    "
  >
    <Box
      w="calc(4ch + 0.3em)"
      h="calc(1cap + 0.3em)"
      l="0.6em"
      fill
      :class="[$style.box, $style.a]"
    >
      <template #front>
        <div :class="$style.front"><div>2×XP</div></div>
      </template>
    </Box>

    <Box
      w="calc(7ch + 0.8em)"
      h="calc(1cap + 0.5em)"
      l="0.6em"
      fill
      :class="[$style.box, $style.b]"
    >
      <template #front>
        <div :class="$style.front"><div>WEEKEND</div></div>
      </template>
    </Box>
  </Bento.Cell>
</template>

<style module>
.box {
  color: #fff;
  font-family: 'Tactic Round';
  transform: rotateX(20deg) rotateY(-20deg);
}

.front {
  display: grid;
  place-items: center;
  font-weight: 900;

  * {
    text-box: trim-both cap alphabetic;
  }
}

.a {
  font-size: 2rem;
  font-stretch: expanded;

  > * > * {
    background-color: red;
  }
}

.b {
  font-size: 0.8rem;
  translate: 0rem 1.2rem;

  > * > * {
    background-color: dodgerblue;
  }
}
</style>
