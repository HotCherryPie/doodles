<template>
  <div :class="$style.it">
    <div :class="$style.text">
      <slot />
    </div>

    <div :class="$style.outline" />
    <div :class="$style.outline" />
  </div>
</template>

<style module>
.it {
  display: grid;

  > * {
    grid-area: 1/1;
  }

  border-radius: 999px;
  background-image: linear-gradient(to bottom, #1e1e2a8c, rgb(49 86 151 / 12%));
}

.text {
  color: #fff;
  user-select: none;
  padding: 0.2em 2.75em;
}

.outline {
  pointer-events: none;
  border: 0.05em solid #0000;
  border-radius: inherit;
  mix-blend-mode: overlay;
  background:
    radial-gradient(ellipse at 50% 0, #fff0 50%, #fff2),
    linear-gradient(
        130deg,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.2) 15%,
        rgba(255, 255, 255, 0.2) 85%,
        rgba(255, 255, 255, 0.9)
      )
      border-area;
}
</style>
