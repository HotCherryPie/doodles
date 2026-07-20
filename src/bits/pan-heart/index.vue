<template>
  <div :class="$style.it">&lt;3</div>
</template>

<style lang="css" module>
.it {
  font-family: 'Sacramento';
  max-width: max-content;
  max-height: max-content;
  padding-block-end: 0.1em;
  user-select: none;

  color: transparent;
  background-clip: text;
  background-image: conic-gradient(
    from -25deg,
    #ff1b8e 0deg 90deg,
    #ffd900 120deg 240deg,
    #1bb2ff 240deg
  );

  /* --filter-paint */
  filter: url("data:image/svg+xml,\
    <svg xmlns='http://www.w3.org/2000/svg'>\
      <defs>\
        <filter x='-20%' y='-20%' width='140%' height='140%' filterUnits='objectBoundingBox' id='filter'>\
          <feTurbulence type='fractalNoise' baseFrequency='2' numOctaves='5' stitchTiles='stitch' result='t1'></feTurbulence>\
          <feColorMatrix type='matrix' values='0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5' result='t2'></feColorMatrix>\
          <feComposite operator='in' in2='t2' in='SourceGraphic' result='SourceTextured'></feComposite>\
          <feTurbulence type='fractalNoise' baseFrequency='0.03' numOctaves='5' seed='1' result='f1'></feTurbulence>\
          <feDisplacementMap xChannelSelector='R' yChannelSelector='G' scale='5' in='SourceTextured' in2='f1' result='f4'></feDisplacementMap>\
          <feTurbulence type='fractalNoise' baseFrequency='0.0025' numOctaves='5' seed='10' result='f2'></feTurbulence>\
          <feDisplacementMap xChannelSelector='R' yChannelSelector='G' scale='5' in='SourceTextured' in2='f2' result='f5'></feDisplacementMap>\
          <feTurbulence type='fractalNoise' baseFrequency='0.0025' numOctaves='5' seed='100' result='f3'></feTurbulence>\
          <feDisplacementMap xChannelSelector='R' yChannelSelector='G' scale='3' in='SourceTextured' in2='f3' result='f6'></feDisplacementMap>\
          <feBlend mode='multiply' in2='f4' in='f5' result='out1'></feBlend><feBlend mode='multiply' in='out1' in2='f6' result='out2'></feBlend>\
        </filter>\
      </defs>\
    </svg>#filter");
}
</style>
