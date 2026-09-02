<script setup lang="ts">
import { ref } from 'vue';

import { Bento } from '../../components';

const text = ref('Sweet');

function handleTextChange(event: InputEvent) {
  if (!(event.target instanceof HTMLElement)) return;

  // eslint-disable-next-line unicorn/prefer-dom-node-text-content
  let next = event.target.innerText.replaceAll('\n', '');

  if (next.trim() === '') next = 'Sweet';

  // eslint-disable-next-line unicorn/prefer-dom-node-text-content
  if (event.target.innerText !== next) event.target.innerText = next;

  text.value = next;
}
</script>

<template>
  <Bento.Cell w="7" h="3" :class="$style.root">
    <div :class="$style.it">
      <div :class="[$style.t, $style.f]">{{ text }}</div>
      <div :class="[$style.t, $style.e]">{{ text }}</div>
      <div :class="[$style.t, $style.d]">{{ text }}</div>
      <div :class="[$style.t, $style.c]">{{ text }}</div>
      <div :class="[$style.t, $style.b]">{{ text }}</div>
      <div :class="[$style.t, $style.top]">{{ text }}</div>
      <div :class="[$style.t, $style.glow]">{{ text }}</div>
      <div
        v-once
        :class="[$style.t, $style.select]"
        spellcheck="false"
        contenteditable="plaintext-only"
        @input="handleTextChange($event)"
      >
        {{ text }}
      </div>
    </div>
  </Bento.Cell>
</template>

<style module>
.it {
  font-size: 4rem;
  display: grid;
  justify-items: center;

  &:not(:focus-within) {
    user-select: none;
  }

  > * {
    grid-area: 1/1;
  }
}

.t {
  font-family: 'Anja Eliane';
  color: transparent;
  paint-order: stroke;

  letter-spacing: -0.02em;
  scale: 0.9 1;
  filter: blur(0.01em);

  pointer-events: none;
  white-space-collapse: preserve;
  text-wrap-mode: nowrap;
}

.select {
  pointer-events: all;
  user-select: auto;
  filter: none;
  caret-color: #000;

  cursor: text;
}

.glow {
  color: transparent;
  background-color: #00ff096b;
  translate: 0 0;
  background-clip: text;
  text-shadow: 0 -0.02em 0.01em #000;
  mix-blend-mode: exclusion;
}

.top {
  translate: 0 0;

  filter: blur(0.003em);

  background-clip: text;
  padding-inline: 0.1ch;
  background-image: linear-gradient(0, #fffd, #fff 30%, #fff 60%, #fffd);
  background-color: #ff0049;
}

.b {
  -webkit-text-stroke: 0.015em #bd0edd;
  translate: 0 0.015em;
}

.c {
  -webkit-text-stroke: 0.09em #f17734;
  translate: 0 0.03em;
}

.d {
  -webkit-text-stroke: 0.2em #fff100;
  translate: 0 0.04em;
}

.e {
  -webkit-text-stroke: 0.26em #9ddaff;
  translate: 0 0.07em;
}

.f {
  -webkit-text-stroke: 0.31em #3b90ff;
  translate: 0 0.08em;

  filter: blur(0.003em);

  text-shadow: 0 0.078125em 0.46875em #0090ff85;
}

.root {
  background-size: 19rem;
  background-position: center;
  background-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 800">\
      <g fill="%23ddd">\
        <path d="M1102.5 734.8c2.5-1.2 24.8-8.6 25.6-7.5.5.7-3.9 23.8-4.6 24.5-.2.3-16-12.3-21-17m123.8-505.7c0-.1-4.9-9.4-7-14.2l-.4-1.6q-.1-.6-.6-.9-.5-.2-.8.1l-13.1 12.3-.4.8q0 .5.2 1l2.1 3.6c2.4 3.7 6.5 12.1 6.5 12.2q.3.4.7.6.4 0 .7-.3l2.7-3.6 4.6-4.7c1.2-1.2 1.6-1.4 2.1-1.6s1.1-.5 2.5-1.9q.6-.9.2-1.8M33 770.3q0-1.1-1.2-1.2l-.4.1c-1.6.2-14.3.1-22.2 0q-.4 0-.9.4-.3.3-.4.9l.1 5.9.4 13.6q0 .4.4.9.3.3.8.3h.1q11-1 22-.6.5 0 .9-.3.4-.4.4-.9zM171.1 383.4c1.3-2.5 14.3-22 15.6-21.6.8.3 11.5 21.2 11.5 22.1-.1.3-20.3.1-27.1-.5m425.3 328.4a277 277 0 0 1-9.7-12.5l-.7-1.5q-.3-.6-.7-.8-.5-.2-.8.3L574 712q-.2.3-.2.9 0 .5.4.9c.1.1 1.8 2.2 2.8 3.1 3.1 3.1 8.8 10.5 8.9 10.6q.3.4.8.4t.6-.5s1.2-2.8 2-4.1l3.5-5.5c.9-1.4 1.3-1.7 1.7-2 .5-.4 1-.7 2.1-2.4.3-.3.2-1.1-.2-1.6m131.1-531.9q1 .2 1.4-.8v-.4c.2-1.4 2.8-12.6 4.5-19.5q.1-.5-.2-.8t-.8-.5l-5.7-1.3-13.4-2.7a1 1 0 0 0-.9.2l-.5.6v.1q-1.3 9.8-3.9 19.4-.1.5.2.9t.8.5zm1-1.8-.4-.2zM699.6 472.7q-2.3 0-3.5-2.3c-.8-1.9 0-4.2 1.9-5 3.7-1.6 6.8-4.7 8.4-8.5s1.7-8.1.2-11.9l-1.2-2.8q-1.4-2.6-2.3-5.9a19 19 0 0 1 2-12.8q2.5-4.6 7.6-9.1c1.6-1.4 4-1.2 5.3.4 1.4 1.6 1.2 4-.4 5.3a26 26 0 0 0-5.9 7 11 11 0 0 0-1.3 7.6q.5 2 1.7 4.3l1.5 3.3a23.8 23.8 0 0 1-12.6 30.1q-.6.3-1.4.3m40.8-51.3q2.4-.2 3.8 1.9a4 4 0 0 1-1.4 5.3 16.4 16.4 0 0 0-6.5 21.6q.6 1.3 1.6 2.7 1.6 2.5 3 5.7a19 19 0 0 1-.6 13.2 33 33 0 0 1-6.8 10.1 4 4 0 0 1-5.5.2 3.7 3.7 0 0 1-.2-5.4q3.8-4.2 5.3-7.7 1.7-4.3.5-7.9-.8-2-2.2-4.1l-1.9-3.2a24 24 0 0 1 10.9-32.4M261.3 590.9c5.7 6.8 9 15.7 9.4 22.4.5 7.3-2.4 16.4-10.2 20.4q-4.5 2.2-11.2 2.2-11.7-.1-15.4-8.4c-2.1-4.7-2.3-11.4 1.8-15.9 3.2-3.5 7.8-4.1 11.2-1.6 1.2.9 1.5 2.7.6 3.9a3 3 0 0 1-3.9.6c-1.8-1.3-3.6.6-3.8.8-2.4 2.6-2.1 7-.8 9.9q2 5 10.4 5.1 5.3 0 8.6-1.6c4.7-2.4 7.7-8.6 7.2-15a36 36 0 0 0-13-23.9 15 15 0 0 0-12.9-3.1q-4.6 1-9.7 5a42 42 0 0 0-14.2 19 30 30 0 0 0 1.9 23.9c.7 1.4.1 3.1-1.3 3.7s-3.1.1-3.7-1.3a36 36 0 0 1-2.2-28.2 48 48 0 0 1 16.1-21.6q6.1-4.6 11.8-6 9.1-2 17.5 4a39 39 0 0 1 5.8 5.7"/>\
        <circle cx="1013.7" cy="153.9" r="7.1"/>\
        <circle cx="1024.3" cy="132.1" r="7.1"/>\
        <circle cx="1037.3" cy="148.9" r="7.1"/>\
        <path d="M1508.7 297.2q-7.2-8.1-14.8-16.2c5.6-5.6 11.1-11.5 15.6-18.2 1.2-1.7.7-4.1-1-5.2a3.7 3.7 0 0 0-5.2 1q-6.4 9.1-14.5 16.9-7.2-7.5-14.7-14.9a3.7 3.7 0 0 0-5.3 0 3.7 3.7 0 0 0 0 5.3q7.3 7.3 14.5 14.8l-3.5 3.2a278 278 0 0 0-12.4 12 4 4 0 0 0 0 5.3 4 4 0 0 0 5.3-.1q6-6 12.1-11.7l3.5-3.3 14.6 15.9.2.2a4 4 0 0 0 5.2.2c1.7-1.2 1.8-3.6.4-5.2M327.6 248.6l-.4-2.6a292 292 0 0 1-2.3-37q0-8.1.2-18.5v-2.3c0-5 0-11.2 3.9-13.5q3.4-2 8.5.9a54 54 0 0 1 17.5 14.9 31 31 0 0 1 5 25.7c-3.2 12.3-15 31-30 32.1zm4.5-69.4-.4.1c-.1.1-.7.5-1.1 2.7q-.4 3-.3 6.3v2.4q-.2 10.2-.2 18.3.1 18.6 2 33.7c11-2.7 20.4-18.1 23-27.8 1.9-7.2.4-14.8-4.2-21.3a51 51 0 0 0-15.9-13.3 7 7 0 0 0-2.9-1.1M516.3 60.8l-.4-.1c-2.4-.7-4-.9-6.7-.7q-1.2 0-1.4-1.2 0-1.1 1.2-1.4a19 19 0 0 1 7.6.8q1.1.4.9 1.6-.4 1-1.2 1m-10.2 9.7q-.8 0-1.2-.8a21 21 0 0 1-1.3-6.6q0-1.2 1.2-1.3 1.2 0 1.3 1.2.2 3 1.1 5.8.3 1.2-.8 1.6zm-12-6.1q-.6 0-1-.5-.6-1 .2-1.8 2.7-2.1 5.8-3.6 1-.4 1.7.6.4 1-.6 1.7-2.9 1.3-5.3 3.3-.3.3-.8.3m6.4-9.1q-.7 0-1.2-.7a62.5 62.5 0 0 0-3.5-4.8q-.6-1 .2-1.8 1-.6 1.8.2l1.1 1.4c1.3 1.6 2.1 2.6 2.7 3.9q.4 1-.6 1.7zm6.2-.3-.8-.2q-.9-.7-.3-1.8 1.8-2.5 3.3-5.2.6-1 1.7-.5 1 .6.5 1.7-1.5 2.9-3.5 5.6-.3.4-.9.4m522.6 327.8-.4-.1c-2.4-.7-4-.9-6.7-.7q-1.1 0-1.4-1.2 0-1.1 1.2-1.4a19 19 0 0 1 7.6.8q1.1.4.9 1.6-.4 1-1.2 1m-10.2 9.7q-.8 0-1.2-.8a21 21 0 0 1-1.3-6.6q0-1.2 1.2-1.3 1.2 0 1.3 1.2.2 3 1.1 5.8.3 1.2-.8 1.6zm-12-6.1q-.6 0-1-.5-.6-1 .2-1.8 2.7-2.1 5.8-3.6 1-.4 1.7.6.4 1-.6 1.7-2.9 1.4-5.3 3.3-.3.3-.8.3m6.4-9.1q-.7 0-1.2-.7a62.5 62.5 0 0 0-3.5-4.8q-.6-1 .2-1.8 1-.6 1.8.2l1.1 1.4c1.3 1.6 2.1 2.6 2.7 3.9q.4 1-.6 1.7zm6.2-.3-.8-.2q-.9-.7-.3-1.8 1.8-2.5 3.3-5.2.6-1 1.7-.5 1 .6.5 1.7-1.5 2.9-3.5 5.6-.3.4-.9.4m310 196.4a15 15 0 0 1-4.5-.7 34 34 0 0 1-18.7-20q-.6-2.1-.9-4.4c-8.1 3.3-15.5 10.6-15.4 21 0 1.5-1.2 2.7-2.7 2.8a2.7 2.7 0 0 1-2.7-2.7 26 26 0 0 1 7-18q5.6-6.1 13.7-8.8c.5-6.5 3.1-12.9 7.4-17.4 7-7.4 18.2-8.9 27.3-10.1l.7-.1c1.5-.2 2.9.9 3.1 2.3.2 1.5-.9 2.9-2.3 3.1l-.7.1c-8.6 1.2-18.4 2.5-24 8.4-3 3.2-5 7.7-5.7 12.4 7.9-1 17.7 1.3 24.3 5.7 4.3 2.9 7.1 7.8 7.2 12.7.2 4.3-1.7 8.3-5.2 11.1a14 14 0 0 1-7.9 2.6m-18.7-26.7q.2 2.3.8 4.4a29 29 0 0 0 15.1 16.3q4.1 1.3 7.2-1.1a8 8 0 0 0 3.1-6.6c-.1-3.2-2-6.4-4.8-8.3a32 32 0 0 0-21.4-4.7"/>\
      </g>\
    </svg>\
  ');
}
</style>
