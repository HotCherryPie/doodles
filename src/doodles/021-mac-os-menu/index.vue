<script setup lang="ts">
import { Bento } from '../../components';

const items = ['', 'Edit', 'Window', 'Help'];
</script>

<template>
  <Bento.Cell w="6">
    <nav :class="$style.nav" focusgroup="menubar nomemory">
      <li v-for="it of items" :key="it" tabindex="1">
        <div>{{ it }}</div>
      </li>
    </nav>
  </Bento.Cell>
</template>

<style module>
@font-face {
  font-family: 'SF Pro';
  src: url('./sf-pro.woff2') format('woff2');
  font-weight: 400 500;
  font-stretch: 100%;
  unicode-range: U+0020, U+002D, U+0030-0039, U+0040-005A, U+0061-007A, U+F8FF;
}

.nav {
  --gap: 0.75rem;

  font-family: 'SF Pro';

  max-width: fit-content;
  min-width: fit-content;

  padding: 0.1rem;
  border: 1px solid #eee;
  border-radius: 0.6rem;

  display: grid;
  grid-auto-flow: column;
  /* grid-template-columns: [gap] var(--gap) repeat(4, [col] max-content [gap] var(--gap)); */
  grid-template-columns: var(--gap) repeat(4, max-content var(--gap));

  > li {
    text-box: trim-both cap alphabetic;
    padding: 0.5em calc(var(--gap) + 0.25em);
    border-radius: 0.5em;

    grid-row: 1 / 1;
    /* grid-column: gap sibling-index() / col calc(sibling-index() + 1); */
    grid-column: calc(sibling-index() * 2 - 1) / calc(sibling-index() * 2 + 2);

    &:hover {
      background-color: #0001;
    }

    &:focus-visible {
      outline: 0.25em solid #0074e5c9;
    }
  }

  > li:first-child div {
    scale: 1.25;
  }
}
</style>
