<template>
  <div :class="$style.it">
    <div :class="$style.text">
      <slot />
    </div>

    <div :class="$style.outline" />
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
  text-transform: uppercase;
}

.text {
  color: #fff;
  user-select: none;
  padding: 0.2em 0.75em;
}

.outline {
  pointer-events: none;
  mix-blend-mode: overlay;
  padding: 0.06em;
  border-radius: inherit;
  background: linear-gradient(
    130deg,
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.2) 15%,
    rgba(255, 255, 255, 0.2) 85%,
    rgba(255, 255, 255, 0.9)
  );
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
</style>
