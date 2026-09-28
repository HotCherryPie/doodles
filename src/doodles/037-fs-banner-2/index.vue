<script setup lang="ts">
import { Bento } from '../../components';

import GlossyText from './glossy-text.vue';
</script>

<template>
  <Bento.Cell w="7" h="6" cover>
    <div :class="$style.box">
      <div :class="$style.overhead">CLAIM</div>

      <GlossyText :class="$style.heading">
        <span :class="$style.lv">&lsqb;</span>
        <span :class="$style.l">BONUS</span>
        <span :class="$style.lv">&rsqb;</span>
      </GlossyText>

      <div :class="$style.badge">555 Free Spins</div>
    </div>
  </Bento.Cell>
</template>

<style module>
@font-face {
  font-family: '01a0e7e641d07fdc99d634e4bd7a8fc3';
  src: url(data:application/octet-stream;base64,d09GMgABAAAAAAJwAAoAAAAABhQAAAIlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAglIKgSiBPgsIAAE2AiQDDAQgBYRVBywbbAUAngU5WXwKj3DY2lRBlQ4/yAie9qPN290vJy5ItRBdE5XSLB2leRNNdCjxEmJRf36d7+YSD/HmSDfQf1Jbcq5SaKxLyt36LDUF93muqRctlN8uic8segNKwKJpFOEmns/TknBURLOhDpA2jF325BaiiPsqbbqXPgA77v7xiTRakipzX+bETWMKNILCBa4U5oEAZGRMw8ARTIFpLPuBViuBy8L//9t/7P/+EwBEDf7AkAApK9fymA3gJADDAGS5aeqWdN86HFz7vddz9MRuY+CaOMVnyePRvdt5Zt4DJfZXC16S59jsSUsW31x9AzV5Feb27a/3wZMnt5txT9/spK65SnmHZ5nfErdNgXr3PHi86AbA/9PvgslfpwSC58/C9b7Dt10F7O7y3oGku2TtaATrVxPpN18NkAtil0A2UgE0dOrEVjDoAQOMAHmE2giSxhSy2iJZ2HVUuuxFrXYAnbaot+gypIApSgc2jQCEbg+Q9HqGrNt7srAfURl1Rq3bN3Q65z/XZTVO3heWzaVeLVc00uXmD8lCHZroOqQqEYoLe3vR2WxnpQhlriX8Nyj9Q3r8r9noDK6cqfN3gTcBs7SKtIY4JC0Fl9CDMyvpqcmB6UbZg00OaVktJXG2N194un2kKa+qAichJG417Bi4m9qypNDHycBlNFSV4UyqKpC0kpIqXE1DVUFaEiKUgyA1MiIiGd28p1BSVRkD0LnhViLFagkC);
}

.overhead {
  font-family: 'Montserrat';
  margin-block: 1em 0em;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.2ch;
}

.heading {
  font-size: 2.5rem;
  margin-block: -0.2em 0.25em;
}

.l {
  font-weight: 900;
  font-family: 'SF Compact Rounded', 'SF Pro Rounded', 'Nunito';
  text-box: trim-both cap alphabetic;
  display: inline-block;
}

.lv {
  font-family: '01a0e7e641d07fdc99d634e4bd7a8fc3';
  vertical-align: middle;
}

.box {
  border-radius: 2em;
  corner-shape: superellipse(2);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(83, 194, 250, 0.12) 0px 0px 0px 1px inset;

  background-image:
    url(./bg.png),
    radial-gradient(
      84.04% 62.6% at 50% 0%,
      #7c7cc7 0%,
      #4e4ea3 33.33%,
      #242452 66.67%,
      #1e1e2a 100%
    );
  background-position:
    center -10%,
    center;
  background-size:
    130% auto,
    cover;
  background-repeat: no-repeat;
}

.badge {
  font-family: 'Montserrat';
  box-sizing: border-box;
  border-radius: 999px;
  user-select: none;
  color: #fff;
  font-size: 1em;
  font-weight: 700;
  position: relative;
  padding: 0.5em 0.75em;
  background: rgba(83, 194, 250, 0.12);
  text-box: trim-both cap alphabetic;
  text-transform: uppercase;

  &::before {
    position: absolute;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(
      130deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.2) 15%,
      rgba(255, 255, 255, 0.2) 85%,
      rgba(255, 255, 255, 0.9)
    );
    content: '';
    inset: 0;
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }
}
</style>
