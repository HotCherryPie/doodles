<script setup lang="ts">
import type { Slot } from 'vue';

defineSlots<{
  front: Slot;
  back: Slot;
  left: Slot;
  right: Slot;
}>();

const props = defineProps<{
  holes?: 'x' | 'z' | undefined;
  color: CSSValueType.Color;
  w: CSSValueType.Length;
  h: CSSValueType.Length;
  l: CSSValueType.Length;
}>();

const isHoled = (side: 'front' | 'back' | 'right' | 'left') => {
  if (props.holes === 'x') return ['right', 'left'].includes(side);
  if (props.holes === 'z') return ['front', 'back'].includes(side);
  return false;
};
</script>

<template>
  <div :class="$style.pivot">
    <div
      v-for="side in ['front', 'back', 'left', 'right']"
      :key="side"
      :class="[$style.side, $style[side]]"
    >
      <div :class="[$style.foreground, isHoled(side) && $style.holed]">
        <slot :name="side" />
        <div v-if="isHoled(side)" :class="$style.cutout" />
      </div>
      <div :class="[$style.background, isHoled(side) && $style.holed]">
        <div v-if="isHoled(side)" :class="$style.cutout" />
      </div>
    </div>
  </div>
</template>

<style module>
.pivot {
  color: #444;
  --box-width: v-bind(w);
  --box-height: v-bind(h);
  --box-length: v-bind(l);
  --box-color: v-bind(color);
  --box-corner-thickness: 1px;
  --box-corner-color: #0007;

  position: relative;
  transform-style: preserve-3d;
}

.side {
  position: absolute;
  transform-style: preserve-3d;
  height: var(--box-height);

  &.front {
    width: var(--box-width);
    translate: -50% -50% calc(var(--box-length) / 2);
  }

  &.back {
    width: var(--box-width);
    rotate: y 180deg;
    translate: -50% -50% calc(var(--box-length) / -2);
  }

  &.right {
    width: var(--box-length);
    rotate: y 90deg;
    translate: calc(-50% + (var(--box-width) / 2)) -50%;
  }

  &.left {
    width: var(--box-length);
    rotate: y -90deg;
    translate: calc(-50% - (var(--box-width) / 2)) -50%;
  }

  .foreground,
  .background {
    position: absolute;
    inset: 0;
    outline: calc(0.5 * var(--box-corner-thickness)) solid
      var(--box-corner-color);
    outline-offset: calc(-0.5 * var(--box-corner-thickness));
    overflow: hidden;
  }

  .foreground {
    background-color: var(--box-color);
  }

  .background {
    background-color: hsl(from var(--box-color) h s calc(l * 0.9) / alpha);
    translate: 0 0 -0.1px;
  }

  .holed {
    mask-mode: luminance;
    mask-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg">\
      <rect width="100%" height="100%" fill="%23ffffff"></rect>\
      <rect x="calc(50% - 30px)" y="30px" width="60px" height="20px" fill="%23000000" rx="10px" ry="10px"></rect>\
    </svg>');
  }
}

.floor {
  width: var(--box-width);
  height: var(--box-length);
  background-color: #eee;
}

.cutout {
  --w: 60px;
  --h: 20px;
  --y: 30px;

  position: absolute;
  left: calc((50% - (var(--w) / 2)) - 1px);
  top: calc(var(--y) - 1px);
  width: calc(var(--w) + 2px);
  height: calc(var(--h) + 2px);
  border: var(--box-corner-thickness) solid var(--box-corner-color);
  border-radius: 999px;
  z-index: calc(infinity);
}
</style>
