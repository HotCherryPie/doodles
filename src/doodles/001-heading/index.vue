<script setup lang="ts">
import { PanHeart } from '../../bits';
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell
    :x="1"
    :y="1"
    :w="6"
    :h="3"
    style="display: grid; place-items: center"
  >
    <div :class="$style.it">
      <h1 :class="$style.heading">Doodles</h1>
      <div style="display: flex; align-items: center">
        <span :class="$style.subheading">
          <span :class="$style.by">by</span>
          <span :class="$style.author"> Artem </span>
        </span>
        <PanHeart :class="$style.heart" />
      </div>
    </div>
  </Bento.Cell>
</template>

<style lang="css" module>
.it {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Blaktur;
  max-width: max-content;
}

.heading {
  font-size: 3rem;
  -webkit-text-stroke:
    1px #000,
    2px #f00;
}

.subheading {
  font-size: 1.75rem;
  display: inline-block;
  translate: -0.5ch 0.2lh;
}

.author {
  -webkit-text-stroke: 0.5px #000;
  color: #fff;
  text-shadow:
    0.33px 0.33px #000,
    0.66px 0.66px #000,
    1px 1px #000,
    1.33px 1.33px #000,
    1.66px 1.66px #000;
}

.by {
  font-size: 0.5em;
  vertical-align: middle;
}

.heart {
  position: absolute;
  font-size: 2rem;
  rotate: -30deg;
  inset-inline-end: 5%;
  inset-block-end: -33%;
}
</style>
