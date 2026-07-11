import { useEventListener } from '@vueuse/core';
import { isNil } from 'es-toolkit';

import { isInteractableElement } from '../utils';

function random(min: number, max: number) {
  // eslint-disable-next-line sonar/pseudo-random
  return Math.random() * (max - min) + min;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  drag: number;
  life: number;
  decay: number;
  length: number;
  thickness: number;
  maxDistance: number;
  originX: number;
  originY: number;
}

interface Ring {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  lineWidth: number;
}

const SPARK_COLOR = 'rgba(0, 0, 0, 0.78)';
const GLOW_COLOR = 'rgba(0, 0, 0, 0.28)';

const shouldPlayForPath = (path: EventTarget[]) =>
  path.every((it) => !isInteractableElement(it));

export const setupClickAnimation = () => {
  const canvas = Object.assign(document.createElement('canvas'), {
    style: `
      position: fixed;
      pointer-events: none;
      width: 100lvw;
      height: 100lvh;
    `,
  });

  document.body.append(canvas);

  const context = canvas.getContext('2d');

  const particles: Particle[] = [];
  const rings: Ring[] = [];

  let width = 0;
  let height = 0;
  let dpr = 1;

  function resizeCanvas() {
    if (isNil(context)) return;

    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width.toString()}px`;
    canvas.style.height = `${height.toString()}px`;

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function burst(x: number, y: number) {
    rings.push({
      x,
      y,
      radius: 2,
      alpha: 0.42,
      lineWidth: 1.4,
    });

    const count = 8;

    for (let index = 0; index < count; index++) {
      const angle = (Math.PI * 2 * index) / count + random(-0.14, 0.14);
      const speed = random(0.28, 0.48);

      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        drag: 0.995,
        life: 1,
        decay: random(0.012, 0.016),
        length: random(3.5, 5.5),
        thickness: random(0.8, 1.3),
        maxDistance: random(10, 14),
        originX: x,
        originY: y,
      });
    }
  }

  function drawSpark(p: Particle) {
    if (isNil(context)) return;

    context.save();
    context.translate(p.x, p.y);
    context.rotate(Math.atan2(p.vy, p.vx));
    context.globalAlpha = Math.max(p.life, 0) * 0.8;
    context.fillStyle = SPARK_COLOR;
    context.shadowColor = GLOW_COLOR;
    context.shadowBlur = 4;

    context.beginPath();
    context.roundRect(
      -p.length * 0.5,
      -p.thickness * 0.5,
      p.length,
      p.thickness,
      p.thickness * 0.5,
    );
    context.fill();

    context.restore();
  }

  function animate() {
    if (isNil(context)) return;

    context.clearRect(0, 0, width, height);

    for (let index = rings.length - 1; index >= 0; index--) {
      // eslint-disable-next-line ts/no-non-null-assertion
      const ring = rings[index]!;

      ring.radius += 0.22;
      ring.alpha -= 0.008;
      ring.lineWidth *= 0.997;

      context.save();
      context.globalAlpha = Math.max(ring.alpha, 0);
      context.strokeStyle = SPARK_COLOR;
      context.lineWidth = ring.lineWidth;
      context.shadowColor = GLOW_COLOR;
      context.shadowBlur = 3;
      context.beginPath();
      context.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
      context.stroke();
      context.restore();

      if (ring.alpha <= 0 || ring.radius >= 14) {
        rings.splice(index, 1);
      }
    }

    for (let index = particles.length - 1; index >= 0; index--) {
      // eslint-disable-next-line ts/no-non-null-assertion
      const p = particles[index]!;

      p.vx *= p.drag;
      p.vy *= p.drag;
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;

      const distance = Math.hypot(p.x - p.originX, p.y - p.originY);

      drawSpark(p);

      if (p.life <= 0 || distance >= p.maxDistance) {
        particles.splice(index, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  function handlePoint(clientX: number, clientY: number) {
    burst(clientX, clientY);
  }

  useEventListener('click', (event) => {
    if (!shouldPlayForPath(event.composedPath())) return;
    handlePoint(event.clientX, event.clientY);
  });

  // TODO: add check for `shouldPlayForPath`
  useEventListener(
    'touchstart',
    (event) => {
      for (const touch of event.changedTouches)
        handlePoint(touch.clientX, touch.clientY);
    },
    { passive: true },
  );

  useEventListener('resize', resizeCanvas);

  resizeCanvas();
  animate();
};
