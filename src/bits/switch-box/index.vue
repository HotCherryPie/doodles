<script setup lang="ts">
import { sounds } from './sounds';

interface Props {
  color?: CSSValueType.Color | undefined;
}

withDefaults(defineProps<Props>(), {
  color: '#32C257',
});

const [model] = defineModel<boolean>({ default: false });

function handleClick() {
  if (model.value) sounds.off();
  else sounds.on();

  model.value = !model.value;
}

defineExpose({
  touch: () => void handleClick(),
});
</script>

<template>
  <button
    type="button"
    :class="[$style.it, model && $style.on]"
    role="switch"
    :aria-checked="model"
    @click="handleClick()"
  >
    <svg :class="$style.handle" viewBox="0 0 20 10">
      <path
        fill-rule="evenodd"
        d="
          M 0 0 H 20 V 10 H 0 Z
          M 5 4
          H 15
          A 1 1 0 0 1 16 5
          A 1 1 0 0 1 15 6
          H 5
          A 1 1 0 0 1 4 5
          A 1 1 0 0 1 5 4
          Z
        "
      />
    </svg>
  </button>
</template>

<style module>
.it {
  --transition: 90ms;
  --backdrop: #0002; /* #8a8a8a54 */

  --size: 1.5rem;
  --radius: 0.45rem;
  --padding: calc(0.0625rem * 2);

  /* Consider to match only primary input method */
  @media (any-pointer: coarse) {
    --size: 2.5rem;
    --radius: 0.8rem;
    --padding: calc(0.0625rem * 4);
  }

  transition-property: background-color;
  transition-duration: var(--transition);

  aspect-ratio: 1;
  width: var(--size);
  border-radius: calc(var(--radius) - var(--padding));
  background-color: var(--backdrop);
  padding: var(--padding);
}

.handle {
  /* 1/2 aspect ratio */
  --handle-size: calc((var(--size) - (var(--padding) * 2)) / 2);
  --dy: calc((var(--size) / 2) - (var(--handle-size) / 2) - var(--padding));

  transition-property: translate;
  transition-duration: var(--transition);

  border-radius: calc(var(--radius) - var(--padding) * 2);
  fill: #fff; /* dark theme: #959595 */
  translate: 0 calc(-1 * var(--dy));
  box-shadow: 0 0.0625rem 0.0625rem 0 #0000001f;
  /* filter: drop-shadow(0 0.0625rem 0.0625rem #0000001f); */
}

.it.on {
  background-color: v-bind('color');
}

.it:not(.on) {
  .handle {
    translate: 0 var(--dy);
  }
}
</style>
