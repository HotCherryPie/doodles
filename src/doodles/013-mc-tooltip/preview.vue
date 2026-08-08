<script setup lang="ts">
import Mist from './mist.vue';

defineProps<{
  expanded: boolean;
}>();
</script>

<template>
  <div :class="[$style.it, expanded && $style.expanded]">
    <img :class="$style.pic" src="./items/mcd-the-pink-scoundrel-custom.png" />

    <Mist
      :enabled="expanded"
      :class="$style.mist"
      style="outline: 1px solid red"
    />
  </div>
</template>

<style lang="css" module>
.it {
  display: grid;
  place-items: stretch;

  & > * {
    grid-area: 1/1;
  }
}

.mist {
  position: absolute;
  width: 10rem;
  height: 10rem;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  mask-image: radial-gradient(circle closest-side at center, #000 80%, #0000);
  z-index: -1;
}

.pic {
  object-fit: contain;
  pointer-events: none;
  contain: size;
}

.it:not(.expanded) {
  .mist {
    opacity: 0;
  }
}
</style>
