<template>
  <div :class="$style.it">
    <div :class="$style.text">LIVE</div>
  </div>
</template>

<style module>
.it {
  filter: contrast(1.5);
  --fill: #ed1453;
  padding: 0.3em 0.5em;
  border-radius: 0.4em;
  background-color: var(--fill);
  box-shadow:
    0 0 0.03125em var(--fill),
    0 0 0.0625em var(--fill),
    0 0 0.09375em var(--fill),
    0 0 0.125em var(--fill),
    0 0 0.15625em var(--fill),
    rgb(from var(--fill) r g b / 0.7) 0px 0px 0.1875em,
    rgb(from var(--fill) r g b / 0.7) 0px 0px 0.3125em,
    rgb(from var(--fill) r g b / 0.7) 0px 0px 0.625em;
}

.text {
  font-family: 'Tactic Round';
  font-weight: 600;

  color: #fff;
  text-shadow:
    0 0 0.4em #fff,
    0 0 0.1em #fff,
    0 0 0.05em #fff;
  /* filter: blur(0.01625em); */
  opacity: 0.8;
  text-box: trim-both cap alphabetic;
}
</style>
