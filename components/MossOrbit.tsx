import styles from "./MossOrbit.module.css";

/* A disc of white dots in concentric rings, centered exactly on the left edge
   of its positioned parent so half of it is cut off. Dot size swells and
   shrinks in spiral arms, so the slow spin is visible. */

const R = 600; // disc radius in SVG units
const STEP = 50; // spacing between rings and between dots (bigger = fewer dots)

// Dot size ranges from tiny to MAX_SIZE in spiral arms, so as the disc turns
// the dots visibly swell and shrink.
const MIN_SIZE = 3;
const MAX_SIZE = 4;

function buildDots() {
  const dots: { x: number; y: number; r: number }[] = [{ x: 0, y: 0, r: 1.2 }];
  let ring = 1;
  for (let rad = STEP; rad < R - 4; rad += STEP, ring++) {
    const n = Math.round((2 * Math.PI * rad) / STEP);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 2 * Math.PI + (ring % 2) * (Math.PI / n);
      const wave = 0.5 + 0.5 * Math.cos(2 * a - rad / 38); // two spiral arms
      const size = MIN_SIZE + (MAX_SIZE - MIN_SIZE) * Math.pow(wave, 1.6);
      dots.push({
        x: +(rad * Math.cos(a)).toFixed(1),
        y: +(rad * Math.sin(a)).toFixed(1),
        r: +size.toFixed(2),
      });
    }
  }
  return dots;
}

const DOTS = buildDots();

export default function MossOrbit() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: "clamp(380px, 85vh, 820px)", aspectRatio: "1" }}
    >
      <svg viewBox={`${-R} ${-R} ${R * 2} ${R * 2}`} className={styles.spin}>
        <g fill="#ffffff" fillOpacity={0.95}>
          {DOTS.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={d.r} />
          ))}
        </g>
      </svg>
    </div>
  );
}