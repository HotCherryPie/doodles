<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<style lang="css" module>
.root {
  /* Close to original palette */
  --color-1: #ffe83b; /* Yellow */
  --color-2: #fc52fb; /* Pink */
  --color-3: #4f96e2; /* Blue */
  --color-4: #5bee68; /* Green */
  --color-5: #63e9d7; /* Cyan */
  --color-6: #f95853; /* Red */
  --color-7: #ffffff; /* White */

  /* oklch(L:0.7667 / C:0.1256) based palette */
  --color-1: #f7909f;
  --color-2: #e4a550;
  --color-3: #9dc267;
  --color-4: #39cdb6;
  --color-5: #5ebefa;
  --color-6: #b3a5fd;
  --color-7: #ffffff;

  /* Same but reordered */
  /* --color-1: #f7909f;
  --color-2: #39cdb6;
  --color-3: #e4a550;
  --color-4: #5ebefa;
  --color-5: #9dc267;
  --color-6: #b3a5fd; */

  animation: blink6 0.7s steps(1, end) infinite;
  text-shadow: 0.08em 0.08em 0 hsl(from currentColor h s calc(l * 0.4));
  filter: saturate(1.2) brightness(1.2);
}

@keyframes blink7 {
  0% {
    color: var(--color-1);
  }
  14.28% {
    color: var(--color-2);
  }
  28.47% {
    color: var(--color-3);
  }
  42.85% {
    color: var(--color-4);
  }
  57.14% {
    color: var(--color-5);
  }
  71.42% {
    color: var(--color-6);
  }
  85.71% {
    color: var(--color-7);
  }
}

@keyframes blink6 {
  0% {
    color: var(--color-1);
  }
  16.67% {
    color: var(--color-2);
  }
  33.33% {
    color: var(--color-3);
  }
  50% {
    color: var(--color-4);
  }
  66.67% {
    color: var(--color-5);
  }
  83.33% {
    color: var(--color-6);
  }
}
</style>
