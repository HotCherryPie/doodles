<script setup lang="ts">
import { Bento } from '../../components';
</script>

<template>
  <Bento.Cell w="7" h="4" :class="$style.cell">
    <div>
      <div :class="$style.it">
        <div :class="$style.barA" />

        <div :class="$style.areaA"></div>

        <div :class="$style.barB" />

        <div :class="$style.areaB">
          <div :class="$style.hA">AVAILABLE ONLY TODAY</div>
          <div :class="$style.hB">DON'T LOOSE</div>
          <div :class="$style.hC">355 FS GIFT</div>

          <div :class="$style.hX">
            Use code <i>REG355FS</i> during registration to claim
            <strong>up to 355 free spins!</strong>
          </div>

          <video autoplay muted loop playsinline src="./hutao.webm" />

          <div :class="$style.overlay" />
        </div>

        <div :class="$style.barA" />
      </div>

      <div :class="$style.append"></div>
    </div>
  </Bento.Cell>
</template>

<style module>
.cell {
  --color: #bf8f16;
  --surface-a: hsl(from var(--color) h 100 20 / 0.1);
  --radius: 1.5em;
  --corner-shape: superellipse(2);

  font-size: 0.8rem;
  font-family: 'Montserrat';
}

.it {
  border: max(1px, 0.05em) solid var(--color);
  background-color: #fff;
  width: max-content;
  height: max-content;

  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  border-radius: var(--radius);
  corner-shape: var(--corner-shape);

  /* --shadow-size: 0.5em;
  box-shadow: 0 var(--shadow-size) var(--shadow-size)
    calc(-1 * var(--shadow-size)) #0005; */
}

.areaA {
  background-color: var(--surface-a);
  height: 1.5em;
}

.areaB {
  flex-grow: 1;
  background-color: hsl(from var(--color) h 100 60 / 0.03);
  background-image: radial-gradient(
    farthest-corner at 100% 0,
    hsl(from var(--color) h 100 60 / 0.2),
    hsl(from var(--color) h 100 60 / 0) 80%
  );
  padding: 0.75em 1em;
  position: relative;
  isolation: isolate;
}

.hA {
  font-size: 0.5em;
  font-weight: 700;
  text-box: trim-both cap alphabetic;
  color: hsl(from var(--color) h 70 30 / 0.5);
  filter: drop-shadow(0 0 0.4em #fff) drop-shadow(0 0 0.4em #fff)
    drop-shadow(0 0 0.4em #fff);
}

.hB {
  font-size: 1.4em;
  font-weight: 800;
  margin-block-start: 0.3em;
  color: hsl(from var(--color) h 70 20);
  text-box: trim-both cap alphabetic;
  filter: drop-shadow(0 0 0.2em #fff) drop-shadow(0 0 0.2em #fff);
}

.hC {
  font-size: 2.1em;
  font-weight: 800;
  margin-block-start: 0.2em;
  color: hsl(from var(--color) h 100 50);
  text-box: trim-both cap alphabetic;
  filter: drop-shadow(0 0 0.2em #fff) drop-shadow(0 0 0.2em #fff);
}

.hX {
  font-size: 0.6em;
  font-weight: 500;
  margin-block-start: 1.2em;
  color: hsl(from var(--color) h 100 40 / 0.8);
  text-box: trim-both cap alphabetic;
  max-width: 30ch;
  margin-inline-end: 10em;
  filter: drop-shadow(0 0 0.2em #fff) drop-shadow(0 0 0.2em #fff)
    drop-shadow(0 0 0.2em #fff) drop-shadow(0 0 0.2em #fff)
    drop-shadow(0 0 0.2em #fff);

  i {
    font-weight: 700;
    color: hsl(from var(--color) h 100 20);
  }

  strong {
    font-weight: 600;
    color: hsl(from var(--color) h 100 50);
  }
}

video {
  position: absolute;
  height: 6em;
  inset-block-end: 0;
  inset-inline-end: 0;
}

.barA {
  display: none;
  z-index: 1;
  height: 0.3em;
  background-image: linear-gradient(
    90deg,
    var(--color),
    hsl(from var(--color) h 100 60),
    var(--color)
  );
}

.barB {
  height: max(1px, 0.05em);
  background-color: var(--color);
}

.append {
  border-radius: var(--radius);
  background-color: var(--surface-a);
  height: calc(var(--radius) + 1.2em);
  margin-top: calc(var(--radius) * -1);
  corner-shape: var(--corner-shape);
  z-index: -1;
}

.overlay {
  position: absolute;
  inset: 0;
  background-size: 3em;
  background-position: center;
  opacity: 0.1;
  z-index: -1;
  background-image: url("data:image/svg+xml,\
    <svg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'>\
      <path fill='%23000' fill-opacity='1' fill-rule='evenodd' d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' />\
    </svg>");
}
</style>
