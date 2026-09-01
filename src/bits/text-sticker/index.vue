<script setup lang="ts">
interface Props {
  text?: string | undefined;

  /**
   * @default 'image(Canvas)'
   */
  bg?: CSSValueType.Image | undefined;
  /**
   * @default 'image(currentColor)'
   */
  fg?: CSSValueType.Image | undefined;
}

withDefaults(defineProps<Props>(), {
  bg: 'image(Canvas)',
  fg: 'image(currentColor)',
});
</script>

<template>
  <div :class="$style.it">
    <div :class="$style.a">
      <span>{{ text }}</span>
    </div>
    <div :class="$style.b">
      <span>{{ text }}</span>
    </div>
    <div :class="$style.c">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<style module>
.it {
  display: grid;
  /* text-box: trim-both cap alphabetic; */

  > * {
    grid-area: 1/1;
    position: relative;

    span {
      color: transparent;
      padding: 0.1em 0.4em;
      box-decoration-break: clone;
    }
  }
}

.a {
  pointer-events: none;
  filter: url("data:image/svg+xml,\
    <svg xmlns='http://www.w3.org/2000/svg'>\
      <defs>\
        <filter id='filter'>\
          <feGaussianBlur in='SourceGraphic' stdDeviation='4' result='blur'></feGaussianBlur>\
          <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -8' result='goo'></feColorMatrix>\
          <feComposite in='SourceGraphic' in2='goo' operator='atop'></feComposite>\
        </filter>\
      </defs>\
    </svg>#filter");

  span {
    border-radius: 0.1em;
    background-image: v-bind(bg);
  }
}

.b {
  pointer-events: none;
  background-image: v-bind(fg);
  background-clip: text;
  filter: blur(0.25em);
  opacity: 0.75;
}

.c {
  background-image: v-bind(fg);
  background-clip: text;
}
</style>
