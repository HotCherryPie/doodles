<script setup lang="ts">
import { sounds } from './sounds';

interface Props {
  color?: CSSValueType.Color | undefined;
}

withDefaults(defineProps<Props>(), {
  color: '#32c257',
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
    <div :class="$style.handle" />
  </button>
</template>

<style lang="css" module>
.it {
  --size: 1.5rem;
  --radius: 0.45rem;
  --padding: calc(0.0625rem * 2);
  --handle-size: calc(0.0625rem * 10);
  --transition: 90ms;

  /* Consider to natch only primary input method */
  @media (any-pointer: coarse) {
    --size: 2.5rem;
    --radius: 0.8rem;
    --padding: calc(0.0625rem * 4);
    --handle-size: calc(0.0625rem * 16);
  }

  width: var(--size);
  aspect-ratio: 1;
  border-radius: calc(var(--radius) - var(--padding));

  background-color: #0002; /* #8a8a8a54 */

  /* box-shadow:
    inset 0 -1px 3px -1px #0003,
    inset 0 1px 3px -1px #0003; */

  /* background-image: linear-gradient(to bottom, #32c257, #32c257, #32c257); */
  /* box-shadow: inset 0 0 3px 0px #00000069; */

  transition-property: background-color;
  transition-duration: var(--transition);

  padding: var(--padding);
}

.handle {
  --dy: calc((var(--size) / 2) - (var(--handle-size) / 2) - var(--padding));

  height: var(--handle-size);
  border-radius: calc(var(--radius) - var(--padding) * 2);
  background-color: #fff; /* dark theme: #959595 */
  box-shadow: 0 0.0625rem 0.0625rem 0 #0000001f;

  transition-property: translate;
  transition-duration: var(--transition);

  translate: 0 calc(-1 * var(--dy));

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 0.75rem; /* 12px */
    aspect-ratio: 12; /* 1px */
    background: #ccc; /* dark theme: #4b4b4b */
    position: absolute;
    margin: auto;
    border-radius: 999px;
  }
}

.it.on {
  background-color: v-bind('color');

  .handle {
    translate: 0 var(--dy);
  }
}
</style>
