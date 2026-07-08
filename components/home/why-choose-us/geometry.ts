/** Angles (degrees, 0 = +x axis, clockwise) for 6 points evenly spaced around the circle, starting at 12 o'clock. */
export const FEATURE_ANGLES = [-90, -30, 30, 90, 150, 210];

/**
 * Shared radii (all as a percentage of the square layout container, so the
 * whole diagram scales together at any size). The central photo is sized to
 * exactly match RING_RADIUS so its edge meets the ring, and the spoke lines
 * are drawn almost all the way out to LABEL_RADIUS so they visibly connect
 * to each feature card instead of stopping short in empty space.
 */
export const RING_RADIUS = 37;
export const LABEL_RADIUS = 45;
export const SPOKE_OUTER_RADIUS = LABEL_RADIUS - 1;

/** Rounds to a fixed precision so server- and client-rendered markup always match exactly (avoids hydration mismatches from cross-engine float/string differences). */
function round(value: number) {
  return Math.round(value * 1000) / 1000;
}

/** Position on a circle, expressed as a percentage of a 100x100 box so it scales with any container size. */
export function pointOnCircle(angleDeg: number, radiusPercent: number, center = 50) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: round(center + radiusPercent * Math.cos(rad)),
    y: round(center + radiusPercent * Math.sin(rad)),
  };
}

/** Short curved "spoke" path from the ring out to a feature label, as an SVG quadratic path. */
export function spokePath(angleDeg: number, innerRadius: number, outerRadius: number) {
  const start = pointOnCircle(angleDeg, innerRadius);
  const end = pointOnCircle(angleDeg, outerRadius);
  const control = pointOnCircle(angleDeg + 6, (innerRadius + outerRadius) / 2);
  return `M ${start.x} ${start.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`;
}

function angularDistance(a: number, b: number) {
  const diff = Math.abs(a - b) % 360;
  return diff > 180 ? 360 - diff : diff;
}

/** Small decorative dot angles scattered around the ring, keeping clear of the main feature angles. */
export function decorativeDotAngles(mainAngles: number[], count = 30, minGap = 10) {
  const angles: number[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i;
    if (mainAngles.every((a) => angularDistance(angle, a) > minGap)) {
      angles.push(angle);
    }
  }
  return angles;
}
