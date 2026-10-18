<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<style lang="css" module>
.root {
  --color-1: #ffe83b; /* Yellow */
  --color-2: #fc52fb; /* Pink */
  --color-3: #4f96e2; /* Blue */
  --color-4: #5bee68; /* Green */
  --color-5: #63e9d7; /* Cyan */
  --color-6: #f95853; /* Red */
  --color-7: #ffffff; /* White */

  animation: blink 0.7s steps(1, end) infinite;
  text-shadow: 0.08em 0.08em 0 hsl(from currentColor h s calc(l * 0.4));
}

@keyframes blink {
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
</style>
