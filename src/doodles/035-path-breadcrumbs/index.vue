<script setup lang="ts">
import { Bento } from '../../components';

const location = ['~', 'articles', 'version-control', 'git'];
</script>

<template>
  <Bento.Cell w="8">
    <nav :class="$style.it">
      <span v-for="(it, i) in location" :key="i">
        <a href="" @click.prevent>{{ it }}</a>
      </span>
    </nav>
  </Bento.Cell>
</template>

<style module>
.it {
  text-box: trim-both cap alphabetic;
  font-size: 1rem;
  font-family: 'JetBrains Mono';
}

.it span {
  white-space: nowrap;

  &:not(:last-child) {
    color: rgb(from currentColor r g b / 0.4);

    &::after {
      color: rgb(from currentColor r g b / 1);
      content: '\02009/\02009';
    }
  }

  &:first-child {
    color: deeppink;
  }
}

.it a {
  &:hover {
    text-decoration: underline;
  }
}
</style>
