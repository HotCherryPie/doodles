<template>
  <div :class="$style.root">
    <div :class="[$style.text, $style.a]">
      <slot />
    </div>
    <div :class="[$style.text, $style.b]">
      <slot />
    </div>
    <div :class="[$style.text, $style.c]">
      <slot />
    </div>
  </div>
</template>

<style module>
.root {
  display: grid;

  > * {
    grid-area: 1/1;
  }
}

.text {
  color: transparent;
  background-clip: text;

  &.a {
    text-shadow: 0 0.07em 0.14em rgba(0, 0, 0, 0.16);
    background-image: linear-gradient(180deg, #ffffff 20%, #ebdec5 100%);
    mix-blend-mode: overlay;
  }

  &.b {
    text-shadow: 0px -0.04em 0.06em rgb(0 0 0);
    background-color: #fff6;
    mix-blend-mode: plus-lighter;
  }

  &.c {
    text-shadow: 0px 0.02em 0.02em rgb(0 0 0);
    background-color: #fff6;
    mix-blend-mode: plus-lighter;
  }
}
</style>
