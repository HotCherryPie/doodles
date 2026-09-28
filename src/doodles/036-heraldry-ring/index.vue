<script setup lang="ts">
import { useId } from 'vue';

import { Bento } from '../../components';

const exposure = 140;
const exposureSafeArea = 3;
const crop = 15;
const thickness = 2;

const bg = '#0d0027';
const fg = 'currentColor';

const vb = { h: 136, w: 128, m: Math.min(130, 128) } as const;
const hole = { r: 36, cx: vb.w / 2, cy: vb.h - vb.m / 2 } as const;
const rays = { n: 45, l: vb.h * 2, padding: 3 } as const;

const filterId = useId();
const clipPathRaysId = useId();
const clipPathCropId = useId();
const textPathId = useId();
</script>

<template>
  <Bento.Cell w="3" h="3">
    <svg :viewBox="`0 0 ${vb.w} ${vb.h}`" :class="$style.it">
      <filter :id="filterId">
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -8" />
      </filter>

      <clipPath :id="clipPathCropId">
        <rect :x="0" :y="crop" :width="vb.w" :height="vb.h - crop" />
      </clipPath>

      <clipPath :id="clipPathRaysId">
        <rect
          :clip-path="`url(#${clipPathCropId})`"
          :x="rays.padding"
          :y="0"
          :width="vb.w - rays.padding * 2"
          :height="vb.h / 2"
        />
        <circle
          :clip-path="`url(#${clipPathCropId})`"
          :cx="hole.cx"
          :cy="hole.cy"
          :r="vb.m / 2 - rays.padding"
        />
      </clipPath>

      <path
        fill-rule="evenodd"
        :fill="bg"
        :d="`
           M 0 0
           H ${vb.w}
           V ${vb.h - vb.m / 2}
           a 64 64 0 0 1 -128 0
           Z
           M ${hole.cx} ${hole.cy - hole.r}
           a ${hole.r} ${hole.r} 0 1 1 0 72
           a ${hole.r} ${hole.r} 0 1 1 0-72
           Z
        `"
      />

      <text
        :y="12"
        :x="5"
        :textLength="vb.w - 5 * 2"
        fill="currentColor"
        lengthAdjust="spacing"
        font-size="12"
        font-weight="500"
      >
        CONSTELLATION
      </text>

      <path
        :id="textPathId"
        fill="none"
        pathLength="360"
        :d="`M ${hole.cx} ${hole.cy - 117 / 2}
          a 50 50 0 1 0 0 117
          a 50 50 0 1 0 0-117
          Z
        `"
      />
      <text
        fill="currentColor"
        font-size="25"
        font-weight="400"
        :textLength="exposure"
      >
        <!-- +2 in the startOffset to compensate extra font spacing -->
        <textPath
          :href="`#${textPathId}`"
          :startOffset="180 - exposure / 2 + 2"
        >
          MMXXXI
        </textPath>
      </text>

      <circle
        :cx="hole.cx"
        :cy="hole.cy"
        :r="hole.r - thickness"
        fill="none"
        :stroke="bg"
        :stroke-width="thickness * 2"
      />

      <g :filter="`url(#${filterId})`">
        <circle
          :cx="hole.cx"
          :cy="hole.cy"
          :r="hole.r"
          fill="none"
          :stroke="fg"
          :stroke-width="thickness"
        />

        <g :clip-path="`url(#${clipPathRaysId})`">
          <template v-for="it in rays.n" :key="it">
            <line
              v-if="
                (360 / rays.n) * it < 180 - exposure / 2 - exposureSafeArea
                || (360 / rays.n) * it > 180 + exposure / 2 + exposureSafeArea
              "
              :x1="hole.cx"
              :y1="hole.cy - rays.l"
              :x2="hole.cx"
              :y2="hole.cy - hole.r"
              :stroke="fg"
              :stroke-width="thickness"
              :transform="`rotate(${(360 / rays.n) * it})`"
              :transform-origin="`${hole.cx} ${hole.cy}`"
            />
          </template>
        </g>
      </g>
    </svg>
  </Bento.Cell>
</template>

<style module>
.it {
  color: #ffc760;
  font-family: 'Gelica';
}
</style>
