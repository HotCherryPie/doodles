<script setup lang="ts">
import { Bento } from '../../components';

import Badge from './badge.vue';
import GlossyText from './glossy-text.vue';
import ShinyText from './shiny-text.vue';
</script>

<template>
  <Bento.Cell w="7" h="4" cover>
    <div :class="$style.card">
      <div :class="$style.overhead">WELCOME</div>

      <GlossyText :class="$style.heading" style="margin-block: -0.2em 0em">
        <span :class="$style.lv">&lsqb;</span>
        <span :class="$style.l">BONUS</span>
        <span :class="$style.lv">&rsqb;</span>
      </GlossyText>

      <ShinyText
        :class="$style.subheading"
        style="margin-block: -0.4em 0em"
        highlight="#000fff"
      >
        555 FREE SPINS
      </ShinyText>

      <Badge :class="$style.badge" style="margin-block: 0.5em 0em">
        <ShinyText>CLAIM NOW</ShinyText>
      </Badge>
    </div>
  </Bento.Cell>
</template>

<style module>
@font-face {
  font-family: '01a0e7e641d07fdc99d634e4bd7a8fc3';
  src: url(data:font/woff2;base64,d09GMgABAAAAAAGEAAoAAAAAA7wAAAE4AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYAgkoKgSiBPgE2AiQDDAsIAAQgBQYHKhsTAwA+FNjGzMi/mzAiHEzucxFYFo0W/YqPAFr7/ezuPc3QRCQTCYXsXUMhi5ckFopp6XTRCP9fEyxgMMvTBeuk3K2vv856cL88DXlIY9G5LICxt3qvbGuBt1aoqsHh6WkJJhhxCMWRpHqC9l/s26n5AQ9EB6PrDTdCOVYePiSQBeJ6HLu6O7wYCWWiQqJTJkxlMJnRhABISKgTwJgkoE6mC0WZIJowlefwb/P9fE8ACEV8YBChJIEiiujGOKAGkKRSqVguFZde2bJIsTXMU3OVPUPdNj7PAuRqsGyzZz0SfIZ3PnaCbQMd/05OVko5PduNNpZxoZam3qFdQyFznM2C/Dn+4vizEhCYe5raZ4xeLgPL7W+hd0NlEQT+KhB/qw+QMkwmIKmth4iqKnIAFEVAFQAAkAgpHQAAAA==);
}

.overhead {
  margin-block: 1em 0em;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.2ch;
}

.heading {
  font-size: 2.5em;
}

.subheading {
  font-family: Nunito;
  font-weight: 800;
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

.card {
  font-family: 'Montserrat';

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
      #fff 0%,
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
  font-family: Nunito;
  font-weight: 900;
  font-size: 1.2em;
}
</style>
