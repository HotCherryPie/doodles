<template>
  <div>
    <div :class="$style.a">Side S</div>
    <div :class="$style.b">CUT HERE</div>
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

.b {
  font-size: 10px;
  font-family: sans-serif;
  position: absolute;
  top: 10px;
  right: 6px;
  font-weight: 600;
  letter-spacing: -1px;

  writing-mode: vertical-rl;
  text-orientation: upright;
}
</style>
