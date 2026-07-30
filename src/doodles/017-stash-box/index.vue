<script setup lang="ts">
import { Bento } from '../../components';

import SideA from './side-a.vue';
import SideB from './side-b.vue';
import SideC from './side-c.vue';
import SideD from './side-d.vue';

// https://workbox.sh/?v=3
// https://icons8.com/icons/set/ecommerce--style-color
// https://icons8.com/icons/set/ecommerce--style-pulsar-line
// https://www.gwp.co.uk/guides/transit-packaging-symbols/
</script>

<template>
  <Bento.Cell w="8" h="8">
    <div :class="$style.it">
      <div :class="$style.pivot">
        <SideA :class="[$style.side, $style.a]" />
        <SideB :class="[$style.side, $style.b]" />
        <SideC :class="[$style.side, $style.c]" />
        <SideD :class="[$style.side, $style.d]" />
      </div>
    </div>
  </Bento.Cell>
</template>

<style module>
.it {
  display: contents;

  color: #444;
  --box-width: 220px;
  --box-height: 120px;
  --box-length: 220px;
  --box-color: #fdfdfd;
  --box-corner-thickness: 1px;
  --box-corner-color: #0007;
}

.pivot {
  pointer-events: none;
  position: relative;
  transform: rotateX(-30deg) rotateY(-45deg);
  transform-style: preserve-3d;
}

.side {
  position: absolute;
  transform-style: preserve-3d;

  height: var(--box-height);
  background-color: var(--box-color);

  outline: calc(0.5 * var(--box-corner-thickness)) solid var(--box-corner-color);
  outline-offset: calc(-0.5 * var(--box-corner-thickness));
  /* border: solid #0006; */
  /* border-width: 1px 0.5px 1px 0.5px; */

  > * {
    backface-visibility: hidden;
  }

  &.a {
    width: var(--box-width);
    translate: -50% -50% calc(var(--box-length) / 2);
  }
  &.b {
    width: var(--box-width);
    rotate: y 180deg;
    translate: -50% -50% calc(var(--box-length) / -2);

    background-color: #eee;
  }
  &.c {
    width: var(--box-length);
    rotate: y 90deg;
    translate: calc(-50% + (var(--box-width) / 2)) -50%;
  }
  &.d {
    width: var(--box-length);
    rotate: y -90deg;
    translate: calc(-50% - (var(--box-width) / 2)) -50%;

    background-color: #eee;
  }

  .floor {
    width: var(--box-width);
    height: var(--box-length);
    background-color: #eee;
  }
}
</style>
