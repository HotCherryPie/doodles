<script setup lang="ts">
const props = defineProps<{
  w: number;
  h: number;
  duration: CSSValueType.Time;
  fill: CSSValueType.Color;
  noisiness: number; /* 0-1; Delta between min & max opacity */
  stiffness: number; /* How smoothly animation propagates */
}>();

const IS_DEBUG = false;

const seedRandom = (s: number) => (a: number) =>
  ((a = Math.imul((s + a) ^ 0x1b_87_35_93, 0x9e_37_79_b9)),
  Math.imul(a ^ (a >>> 15), a | 1) >>> 0) / 4_294_967_296;

const random = seedRandom(Date.now() % 100);

const normalizeX = (xFromIterator: number) => xFromIterator - 1 + 0.5;
const normalizeY = (yFromIterator: number) => yFromIterator - 1;

const distance = (ax: number, ay: number, bx: number, by: number) =>
  Math.hypot(bx - ax, by - ay);

const getFarthestDotDistance = () =>
  distance(props.w / 2, 0, 0 + 0.5, props.h - 1);

const getAnimationOrigin = () => [props.w / 2, 0] as const;

const getDistanceFromAnimationOrigin = (x: number, y: number) =>
  distance(x, y, ...getAnimationOrigin());

const getRelativeDistanceFromAnimationOrigin = (x: number, y: number) =>
  getDistanceFromAnimationOrigin(x, y) / getFarthestDotDistance();

const getCellTransitionDuration = () =>
  `calc(${props.duration} / ${props.stiffness})`;

const getAnimationStartDelay = (x: number, y: number) => {
  const lastDelay = `calc(${props.duration} - ${getCellTransitionDuration()})`;
  return `calc(${lastDelay} * ${getRelativeDistanceFromAnimationOrigin(x, y)})`;
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 ${w} ${h}`"
    shape-rendering="crispEdges"
    :class="[$style.it]"
    :style="{ '--duration': getCellTransitionDuration() }"
  >
    <template v-for="y in h">
      <template v-for="x in w" :key="(y - 1) * w + (x - 1)">
        <rect
          :x="x - 1"
          :y="y - 1"
          width="1"
          height="1"
          :opacity="1 - (1 - (1 - noisiness)) * random((y - 1) * w + (x - 1))"
          :fill
          :style="{
            '--delay': getAnimationStartDelay(normalizeX(x), normalizeY(y)),
          }"
        />
      </template>
    </template>

    <template v-if="IS_DEBUG">
      <template v-for="y in h">
        <template v-for="x in w" :key="`${x}|${y}`">
          <circle
            r="0.05"
            :cx="normalizeX(x) - 0.05 / 2"
            :cy="normalizeY(y)"
            fill="red"
          />

          <text
            :x="normalizeX(x) - 0.05 / 2"
            :y="normalizeY(y) + 0.3"
            font-size="0.3"
            font-family="sans-serif"
            fill="#fff"
            paint-order="stroke"
            stroke="#000"
            stroke-width="0.04"
          >
            {{
              getRelativeDistanceFromAnimationOrigin(
                normalizeX(x),
                normalizeY(y),
              ).toFixed(2)
            }}
          </text>

          <text
            :x="normalizeX(x) - 0.05 / 2"
            :y="normalizeY(y) + 0.5"
            font-size="0.2"
            fill="#fff"
            font-family="sans-serif"
            font-weight="500"
            paint-order="stroke"
            stroke="#000"
            stroke-width="0.04"
          >
            {{
              getDistanceFromAnimationOrigin(
                normalizeX(x),
                normalizeY(y),
              ).toFixed(2)
            }}
          </text>
        </template>
      </template>
    </template>
  </svg>
</template>

<style module>
.it {
  rect {
    fill-opacity: 0;
    animation-name: appear-in;
    animation-duration: var(--duration);
    animation-delay: var(--delay);
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-fill-mode: forwards;
  }
}

@keyframes appear-in {
  from {
  }
  to {
    fill-opacity: 1;
  }
}
</style>
