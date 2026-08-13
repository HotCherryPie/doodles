<script setup lang="ts">
import { useTemplateRef, watchEffect } from 'vue';

import { useTsParticles } from '../../hooks/use-ts-particles';

const props = defineProps<{
  enabled: boolean;
}>();

const $canvas = useTemplateRef('canvas');

const { container } = useTsParticles($canvas, {
  autoPlay: false,
  detectRetina: true,
  fpsLimit: 120,

  // https://particles.js.org/docs/interfaces/tsParticles_Emitters_Plugin.Options_Interfaces_IEmitter.IEmitter.html
  emitters: {
    direction: 'top',
    position: { x: 50, y: 100 },
    size: { width: 100, height: 0, mode: 'percent' },
    rate: { quantity: 1, delay: 0.1 },
  },

  particles: {
    number: { value: 0 },
    shape: { type: 'square' },
    size: {
      value: { min: 0.5, max: 3 },
    },

    paint: {
      // https://particles.js.org/docs/documents/tsParticles_Engine.Options_Particles_Fill.html
      fill: {
        enable: true,
        color: { value: '#f00' },
        opacity: { min: 0.5, max: 1 },
      },
    },

    // https://particles.js.org/docs/documents/tsParticles_Engine.Options_Particles_Life.html
    life: {
      count: 1,
      duration: {
        value: { min: 2, max: 4 },
        // sync: true,
      },
    },

    // https://particles.js.org/docs/documents/tsParticles_Engine.Options_Particles_Destroy.html
    destroy: {
      mode: 'explode',
      explode: {
        maxSizeFactor: 0,
        speed: 0.5,
      },
    },

    // twinkle: {
    //   particles: {
    //     enable: true,
    //     frequency: 1,
    //     color: { value: '#ff0000' },
    //     opacity: 1,
    //   },
    // },

    // wobble: {
    //   enable: true,
    //   distance: { min: 0, max: 20 },
    //   speed: { min: -5, max: 5 },
    // },

    // https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_Particles_Move_IMove.IMove.html
    move: {
      enable: true,
      straight: true,
      speed: { min: 1, max: 3 },
      // random: true,
      // decay: { min: 0.001, max: 0.003 },
      // spin: { enable: true },
      // angle: { value: 100, offset: 100 },
      drift: { min: -0.1, max: 0.1 },
      size: true,

      outModes: {
        default: 'destroy',
      },
    },
  },
});

watchEffect(() => {
  if (props.enabled) container.value?.play();
  else container.value?.pause();
});
</script>

<template>
  <div :class="$style.it">
    <canvas ref="canvas" />
  </div>
</template>

<style lang="css" module>
.it {
  contain: layout;
}
</style>
