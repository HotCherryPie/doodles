<template>
  <div :class="$style.a">Side E</div>
  <div :class="$style.barcode">Barcode</div>
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
</style>
