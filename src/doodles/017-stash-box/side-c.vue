<template>
  <div :class="$style.it">
    <div :class="$style.a">Side C</div>
    <div :class="$style.cutout" />
    <div :class="$style.barcode">Barcode</div>
  </div>
</template>

<style lang="css" module>
.a {
  font-size: 24px;
  font-family: sans-serif;
  position: absolute;
  top: 10px;
  left: 10px;
}

.barcode {
  font-display: block;
  font-family: 'Libre Barcode 128';
  font-size: 32px;

  position: absolute;
  bottom: 10px;
  right: 10px;
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
}

.it {
  mask-mode: luminance;
  mask-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg">\
    <rect width="100%" height="100%" fill="%23ffffff"></rect>\
    <rect x="calc(50% - 30px)" y="30px" width="60px" height="20px" fill="%23000000" rx="10px" ry="10px"></rect>\
  </svg>');
}
</style>
