<!-- eslint-disable unicorn/name-replacements -->
<script setup lang="ts">
import { useTemplateRef } from 'vue';

import { SwitchBox } from '../../bits';
import { Bento } from '../../components';

const $a = useTemplateRef('a');
const $b = useTemplateRef('b');
const $c = useTemplateRef('c');
const $d = useTemplateRef('d');
const $e = useTemplateRef('e');
const $f = useTemplateRef('f');
const $j = useTemplateRef('j');
const $h = useTemplateRef('h');
const $i = useTemplateRef('i');
</script>

<template>
  <Bento.Cell w="3" h="3" subgrid>
    <!-- linear-gradient(135deg in oklch, #fc466b, #3f5efb) -->
    <SwitchBox ref="a" color="#f5466f" data-silent @mouseenter="$a?.touch()" />
    <SwitchBox ref="b" color="#e13fa9" data-silent @mouseenter="$b?.touch()" />
    <SwitchBox ref="c" color="#bc45d5" data-silent @mouseenter="$c?.touch()" />
    <SwitchBox ref="d" color="#e23fa7" data-silent @mouseenter="$d?.touch()" />
    <SwitchBox ref="e" color="#bf44d2" data-silent @mouseenter="$e?.touch()" />
    <SwitchBox ref="f" color="#8c4ff2" data-silent @mouseenter="$f?.touch()" />
    <SwitchBox ref="j" color="#bd45d4" data-silent @mouseenter="$j?.touch()" />
    <SwitchBox ref="h" color="#8f4ef1" data-silent @mouseenter="$h?.touch()" />
    <SwitchBox ref="i" color="#3f5dfb" data-silent @mouseenter="$i?.touch()" />
  </Bento.Cell>
</template>
