<script setup lang="ts">
import { TextSticker } from '../../bits';
import { Bento } from '../../components';

const text = 'Follow your own star';
const bg = 'image(#fff)';
const fg =
  'linear-gradient(to bottom right, #fd12d2, #ff4d73, #ff9d47, #ffe20a)';
</script>

<template>
  <Bento.Cell w="5" h="3">
    <TextSticker :text :bg :fg :class="$style.it" />
  </Bento.Cell>
</template>

<style module>
@font-face {
  font-family: 'Instagram Sans Condensed Regular';
  src: url('./instagram-sans-condensed-regular.ttf');
}

.it {
  text-align: center;
  font-size: 2rem;
  line-height: 1.1;
  text-transform: uppercase;
  font-family: 'Instagram Sans Condensed Regular';
  filter: drop-shadow(0 0.1rem 0.05rem rgba(0, 0, 0, 0.025))
    drop-shadow(0 0.3rem 0.6rem rgba(0, 0, 0, 0.05));
}
</style>
