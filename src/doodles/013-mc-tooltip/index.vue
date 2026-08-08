<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';

import { Bento } from '../../components';

import Card from './card.vue';
import Preview from './preview.vue';

const $card = useTemplateRef('card');
const expanded = ref(false);

onClickOutside(
  $card,
  (event) => {
    if (!expanded.value) return;
    expanded.value = false;
    event.stopPropagation();
  },
  { capture: true },
);
</script>

<template>
  <Bento.Cell
    w="2"
    h="2"
    cover
    :class="[$style.it, expanded && $style.expanded]"
    @click="expanded = true"
  >
    <div :class="$style.previewAnchorRest" />
    <Preview :expanded :class="$style.preview" />

    <Card ref="card" :expanded>
      <div :class="$style.previewAnchorCard" />
      <div :class="$style.content">
        <div style="width: 300px; height: 1px; background: #ccc0; z-index: 1" />
        <div
          style="
            width: 1px;
            height: 400px;
            background: #ccc0;
            align-self: center;
            z-index: 1;
          "
        />
      </div>
    </Card>
  </Bento.Cell>
</template>

<style lang="css" module>
.it {
  --duration-s: 250ms;
  --duration-open: 400ms;
  --duration-close: 250ms;

  anchor-scope: --preview-anchor-rest, --preview-anchor-card;

  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 1;

  & > * {
    grid-area: 1/1;
  }
}

.preview {
  transition-property: translate, scale, filter, width, height, top, left;
  transition-duration: var(--duration-s);

  filter: drop-shadow(6px 6px 2px #0002);
  pointer-events: none;
  z-index: 1;

  position: absolute;
  position-anchor: --preview-anchor-rest;
  width: 100%;
  aspect-ratio: 1;
  top: anchor(top);
  left: anchor(left);
}

.content {
  display: flex;
  flex-direction: column;
  width: max-content;
}

.previewAnchorRest {
  /* outline: 2px solid blueviolet; */

  anchor-name: --preview-anchor-rest;
  align-self: start;
}

.previewAnchorCard {
  /* outline: 2px solid lightsalmon; */

  transition-property: inset-inline-end, inset-block-start;
  transition-duration: var(--duration-s);

  position: absolute;
  anchor-name: --preview-anchor-card;

  top: 15px;
  right: calc(50% - -10px);
}

.it:not(.expanded):hover {
  .preview {
    scale: 1.05;
    translate: -2px -2px;
    filter: drop-shadow(8px 8px 3px #0002);
  }
}

.it.expanded {
  .preview {
    position-anchor: --preview-anchor-card;

    width: 150px;
  }
}
</style>
