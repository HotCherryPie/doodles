import { useStyleTag, usePointer } from '@vueuse/core';
import { watchEffect } from 'vue';

import pointerPressed from '../assets/cursors/pointer-pressed.svg?url';
import pointer from '../assets/cursors/pointer.svg?url';

export const setupCustomCursor = () => {
  const { css } = useStyleTag('');
  const { pressure } = usePointer();

  watchEffect(() => {
    const url = pressure.value > 0 ? pointerPressed : pointer;
    css.value = `html { cursor: url(${JSON.stringify(url)}) 10 2, auto; }`;
  });
};
