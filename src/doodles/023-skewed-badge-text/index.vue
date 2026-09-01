<script setup lang="ts">
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell w="4" h="2" subgrid>
    <div :class="[$style.it, $style.a]">
      <div :class="$style.bg" />
      <div :class="$style.text">ULTIMATE</div>
    </div>

    <div :class="[$style.it, $style.b]">
      <div :class="$style.bg" />
      <div :class="$style.text">ELITE</div>
    </div>
  </Bento.Cell>
</template>

<style module>
.it {
  display: grid;
  grid-column: 1/-1;
  font-size: 1.25rem;

  & > * {
    grid-area: 1/1;
  }
}

.bg {
  width: 100%;
  justify-self: center;
  border-radius: 0.2em 0.2em 0.2em 0.2em;
  transform: skewX(-11deg);
}

.text {
  font-style: italic;
  font-weight: 900;
  translate: -0.01em 0;
  background-clip: text;
  color: transparent;
  padding: 0.2em 0.2em;
  text-box: trim-both cap alphabetic;
}

.a {
  .bg {
    background-color: crimson;
    box-shadow: 0 0 20px 0 #b51c394a;
  }

  .text {
    font-family: 'Tactic Round';
    font-weight: 800;
    font-stretch: expanded;
    background-image: linear-gradient(to bottom, #fffb, #fff 70%);
  }
}

.b {
  .bg {
    background-color: #fff;
    border: 0.05em solid #c05858;
  }

  .text {
    font-family: 'Tactic Round';
    font-weight: 800;
    font-stretch: extra-expanded;
    background-image: linear-gradient(to bottom, #580e0e, #ff0000);
  }
}
</style>
