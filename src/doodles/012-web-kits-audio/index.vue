<script setup lang="ts">
import { Bento } from '../../components';

import { packs } from './sounds';

const stringToHashRange = (from: string, max: number) =>
  Math.abs(
    // eslint-disable-next-line unicorn/prefer-code-point
    [...from].reduce((hash, it) => it.charCodeAt(0) + ((hash << 6) - hash), 0),
  ) % max;
</script>

<template>
  <Bento.Cell :w="4" :h="6" cover>
    <div :class="$style.root">
      <template v-for="(pack, name) of packs" :key="name">
        <div
          :class="$style.group"
          focusgroup="tablist nomemory"
          :style="{ '--c': stringToHashRange(name, 360) }"
        >
          <button
            v-for="(sound, i) of pack"
            :key="i"
            :title="i"
            type="button"
            data-silent
            :class="$style.btn"
            @click="sound()"
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="oklch(from currentColor l c h / 0.05)"
                stroke="currentColor"
                stroke-width="1"
                d="M19.27 13.52c.99-.77.99-2.27 0-3.04-3-2.32-6.35-4.14-9.92-5.41l-.65-.23a2.07 2.07 0 0 0-2.74 1.69c-.47 3.6-.47 7.34 0 10.94a2.07 2.07 0 0 0 2.74 1.7l.65-.24a36 36 0 0 0 9.92-5.41"
              />
            </svg>
          </button>
        </div>
      </template>
    </div>
  </Bento.Cell>
</template>

<style lang="css" module>
.root {
  --dur: 250ms;

  font-size: 1.5rem;
  line-height: 1;
  text-align: center;

  &:not(:has(:focus-visible)) {
    &:has(:hover) {
      .group:not(:has(:hover)) {
        .btn {
          /* Specified for .btn and not for .group to
              prevent .group to moved to separate composing
              layer. Avoids glitches during animation.
           */
          opacity: 0.25;
        }
      }
    }
  }
}

.group {
  transition-property: opacity;
  transition-duration: var(--dur);
  /* isolation: isolate; */

  --bg: oklch(100% 0.1 var(--c));
  --fg: oklch(50% 0.4 var(--c));
  --ring-a: oklch(40% 0.2 var(--c) / 0.75);
  --ring-b: oklch(90% 0.2 var(--c));

  display: inline;
  border-radius: 0.25em;
  color: var(--fg);

  &:has(:focus-visible) {
    outline: 0.2em solid var(--bg);
    outline-offset: -0.1em;

    .btn {
      background-color: var(--bg);
    }
  }

  &:not(:has(:focus-visible)) {
    &:has(:hover) {
      outline: 0.05em solid var(--ring-b);
      outline-offset: -0.05em;
      z-index: 1;
      position: relative;

      .btn {
        svg {
          scale: 1.1;
        }
      }

      .btn:hover {
        svg {
          scale: 1.25;
        }
      }
    }
  }
}

.btn {
  transition-property: opacity;
  transition-duration: var(--dur);

  position: relative;
  height: 1em;
  width: 1em;

  display: inline;
  justify-items: center;

  display: inline-flex; /* Fix for Firefox */
  justify-content: center; /* Fix for Firefox */
  align-items: center; /* Fix for Firefox */

  svg {
    transition-property: scale, opacity;
    transition-duration: var(--dur);

    height: 0.75em;
    width: 0.75em;
    fill: currentColor;

    position: absolute; /* Fix for Firefox */
  }

  &:hover,
  &:active {
    path:nth-child(1) {
      opacity: 1;
    }
  }

  &:focus-visible {
    z-index: 1;
    outline: 0.15em solid var(--ring-a);
  }
}
</style>
