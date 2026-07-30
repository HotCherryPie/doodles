<script setup lang="ts">
import { Bento } from '../../components';

import SideA from './side-a.vue';
import SideB from './side-b.vue';
import SideC from './side-c.vue';
import SideD from './side-d.vue';

// https://workbox.sh/?v=3
</script>

<template>
  <Bento.Cell w="8" h="8">
    <div>
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

  height: 140px;
  width: 220px;

  background-color: #fff;
  border: solid #0006;
  border-width: 1px 0.5px 1px 0.5px;

  > * {
    backface-visibility: hidden;
  }

  &.a {
    translate: -50% -50% 110px;
  }
  &.b {
    rotate: y 180deg;
    translate: -50% -50% -110px;

    background-color: #eee;
  }
  &.c {
    rotate: y 90deg;
    translate: calc(-50% + 110px) -50%;
  }
  &.d {
    rotate: y -90deg;
    translate: calc(-50% - 110px) -50%;

    background-color: #eee;
  }
}
</style>
