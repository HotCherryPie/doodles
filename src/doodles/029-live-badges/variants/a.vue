<template>
  <div :class="$style.it">
    <div :class="$style.bg" />
    <div :class="$style.text">LIVE</div>
  </div>
</template>

<style module>
.it {
  display: grid;

  > * {
    grid-area: 1/1;
  }
}

.text {
  z-index: 1;
  font-family: 'Nunito';
  /* font-family: 'Sono'; */
  font-weight: 900;
  padding: 0.1em 0.2em;
  text-box: trim-both cap alphabetic;
  color: #fff;
  letter-spacing: 0.015625em;
  color: #ffffffd9;
  padding: 0.3em 0.6em;
}

.bg {
  background-color: crimson;
  border-radius: 999px;
  border-radius: 0.5em / 50%;
  corner-shape: bevel;
  filter: url("data:image/svg+xml,\
    <svg xmlns='http://www.w3.org/2000/svg'>\
      <defs>\
        <filter id='filter'>\
          <feGaussianBlur in='SourceGraphic' stdDeviation='2' result='blur'></feGaussianBlur>\
          <feColorMatrix in='blur' result='goo' mode='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -8'></feColorMatrix>\
          <feComposite in='SourceGraphic' in2='goo' operator='atop'></feComposite>\
        </filter>\
      </defs>\
    </svg>#filter");
}
</style>
