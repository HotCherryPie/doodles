<script setup lang="ts">
import { Bento } from '../../components';

import chicagoCubsLogo from './assets/chicago-cubs.svg?url';
import texasRangersLogo from './assets/texas-rangers.svg?url';

const tournament = {
  country: 'USA',
  name: 'Major League Baseball',
  teams: [
    { name: 'Texas Rangers', logo: texasRangersLogo },
    { name: 'Chicago Cubs', logo: chicagoCubsLogo },
  ],
} as const;
</script>

<template>
  <Bento.Cell w="9" h="2" refreshable>
    <div :class="$style.card">
      <div :class="$style.highlight" />
      <div :class="$style.glow" />

      <div :class="$style.info">
        <img alt="" src="./assets/baseball-a.png" :class="$style.art" />
        <!-- <img alt="" src="./assets/mlb-national-league.svg" /> -->

        <div :class="$style.tournament">
          <div :class="$style.country">{{ tournament.country }}</div>
          <div :class="$style.dot" />
          <div :class="$style.name">{{ tournament.name }}</div>
        </div>

        <div :class="$style.teams">
          <div
            v-for="team in tournament.teams"
            :key="team.name"
            :class="$style.team"
          >
            {{ team.name }}
          </div>
        </div>
      </div>

      <time :class="$style.when" datetime="2026-08-23">
        <div>AUG 23</div>
        <div>21:30</div>
      </time>
    </div>
  </Bento.Cell>
</template>

<style module>
.card {
  font-family: 'Montserrat';
  color: #fff;

  width: 20rem;
  height: 3rem;
  border-radius: 1.5em 1em 1em 1.5em;
  corner-shape: round superellipse(1.6) superellipse(1.6) round;
  background: linear-gradient(
    305deg,
    rgba(34, 93, 238, 1),
    rgba(238, 36, 209, 1)
  );
  overflow: hidden;
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
}

.info {
  corner-shape: inherit;
  border-radius: 1.5em 0.75em 0.75em 1.5em;
  width: 13em;
  margin: 0.2em;
  /* background-color: #000;
  box-shadow:
    0 0px 0.4em #0009,
    0 0px 0.1em #000; */

  align-self: stretch;
  padding: 0.1em;

  display: grid;
  grid-template-areas: 'art tournament' 'art teams';
  grid-template-columns: auto auto;
  grid-template-rows: auto 1fr;
}

.art {
  grid-area: art;
}

.tournament {
  display: flex;
  align-items: center;
  font-size: 0.5em;
  font-weight: 700;
  gap: 0.75ch;
  grid-area: tournament;

  .country {
    text-transform: uppercase;
    opacity: 0.6;
    letter-spacing: 0.2ch;
  }

  .dot {
    opacity: 0.2;
    width: 0.5em;
    aspect-ratio: 1;
    background-color: currentColor;
    border-radius: 50%;
  }

  .name {
    text-transform: uppercase;
    opacity: 0.7;
    letter-spacing: 0.05ch;
  }
}

.teams {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2em;

  .team {
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 700;
    text-box: trim-both cap alphabetic;
  }
}

.when {
  text-align: center;

  > :first-child {
    text-box: trim-both cap alphabetic;
    font-size: 0.6em;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  > :last-child {
    margin-top: 0.2em;
    text-box: trim-both cap alphabetic;
    font-size: 1.4em;
    font-weight: 350;
    /* font-variant-numeric: tabular-nums; */
  }
}

.glow {
  border-radius: inherit;
  corner-shape: inherit;
  position: absolute;
  inset: 0;

  mix-blend-mode: overlay;
  box-shadow: inset 0 0 0.5em 0.1em #ffffffa8;
  z-index: -1;
}

.highlight {
  background-image: url('./assets/highlight.webp');
  background-size: 11.5em;
  background-position: 0 -1.15em;

  mask-image: linear-gradient(to right, #fff0, #fff);
  position: absolute;
  right: 0;
  width: 8.3rem;
  height: 100%;
  background-repeat: no-repeat;
  opacity: 0.35;
  filter: saturate(1.5);
  z-index: -1;
}
</style>
