<script setup lang="ts">
interface Props {
  leading?: string | undefined;
  trailing?: string | undefined;

  /**
   * @default 'image(Canvas)'
   */
  fill?: CSSValueType.Image | undefined;
}

withDefaults(defineProps<Props>(), {
  fill: 'image(Canvas)',
});
</script>

<template>
  <div :class="$style.it">
    <div :class="$style.a">{{ leading }}</div>
    <div :class="$style.b">{{ trailing }}</div>
  </div>
</template>

<style module>
.it {
  --cut-out-width: 0.4em;
  --gap: -0.3em;
  --fs: 0.8em;
  --py: 0.2em;
  --px: 0.25em;
  --r: 0.3em;

  display: flex;
  height: calc-size(max-content, size * 1.5);
  transform: skewy(-5deg);
}

.a,
.b {
  background-image: v-bind(fill);
  font-size: var(--fs);
  text-box: trim-both cap alphabetic;

  text-shadow: 0 0 0.3em rgb(from currentColor r g b / 0.4);
  padding: var(--py) var(--px);
  height: max-content;

  filter: url("data:image/svg+xml,\
    <svg xmlns='http://www.w3.org/2000/svg'>\
      <defs>\
        <filter id='filter'>\
          <feGaussianBlur in='SourceGraphic' stdDeviation='2' result='blur'></feGaussianBlur>\
          <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -8' result='goo'></feColorMatrix>\
          <feComposite in='SourceGraphic' in2='goo' operator='atop'></feComposite>\
        </filter>\
      </defs>\
    </svg>#filter");
}

.a {
  padding-inline: var(--px) max(var(--px), var(--cut-out-width) + 0.1em);
  corner-shape: round bevel bevel round;
  border-radius: 0.3em;
  border-top-right-radius: var(--cut-out-width) 50%;
  border-bottom-right-radius: var(--cut-out-width) 50%;
}

.b {
  padding-inline: max(var(--px), var(--cut-out-width) + 0.1em) var(--px);
  corner-shape: bevel round round bevel;
  border-radius: 0.3em;
  border-top-left-radius: var(--cut-out-width) 50%;
  border-bottom-left-radius: var(--cut-out-width) 50%;

  translate: 0 50%;
  margin-left: var(--gap);
}
</style>
