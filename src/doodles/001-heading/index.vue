<script setup lang="ts">
import { PanHeart } from '../../bits';
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell x="1" y="1" w="6" h="3">
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

    <div :class="$style.bg">
      <div />
      <div />
      <div />
    </div>
  </Bento.Cell>
</template>

<style lang="css" module>
.it {
  font-family: Blaktur;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: max-content;
  pointer-events: none;
}

.heading {
  text-box: trim-both cap alphabetic;
  font-size: 3rem;
  -webkit-text-stroke:
    1px #000,
    2px #f00;
}

.subheading {
  text-box: trim-both cap alphabetic;
  font-size: 1.75rem;
  display: inline-block;
  top: 0.5ch;
  left: -0.2lh;
  position: relative;
}

.author {
  -webkit-text-stroke: 0.5px #000;
  color: #fff;
  z-index: 10;
  position: relative; /* For z-index to work */
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

.bg {
  --s: 2rem;

  position: absolute;
  inset: 0;
  z-index: 1;

  * {
    width: var(--s);
    aspect-ratio: 1;
    border-radius: 50%;
    position: absolute;
    filter: blur(2rem) saturate(0) brightness(0);

    transition-property: filter;
    transition-duration: 1s;
  }

  :nth-child(1) {
    background-color: #ff0d5c;
    left: calc(25% - var(--s) / 2);
    top: calc(50% - var(--s) / 2);
  }

  :nth-child(2) {
    background-color: #ffb705;
    left: calc(50% - var(--s) / 2);
    top: calc(30% - var(--s) / 2);
  }

  :nth-child(3) {
    background-color: #1388ff;
    left: calc(75% - var(--s) / 2);
    top: calc(50% - var(--s) / 2);
  }

  &:hover * {
    filter: blur(2rem);
  }
}
</style>
