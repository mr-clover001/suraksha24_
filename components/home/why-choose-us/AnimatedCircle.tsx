"use client";

import { motion } from "framer-motion";
import {
  FEATURE_ANGLES,
  RING_RADIUS,
  SPOKE_OUTER_RADIUS,
  pointOnCircle,
  spokePath,
  decorativeDotAngles,
} from "./geometry";
import { useSafeReducedMotion } from "./useSafeReducedMotion";

const decorativeAngles = decorativeDotAngles(FEATURE_ANGLES);

/** The ring, its small decorative border dots, the 6 main feature dots, and the curved connector spokes. */
export default function AnimatedCircle() {
  const reduceMotion = useSafeReducedMotion();
  const ringTransition = reduceMotion ? { duration: 0 } : { duration: 1.3, ease: "easeInOut" as const };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
    >
      <motion.circle
        cx={50}
        cy={50}
        r={RING_RADIUS}
        fill="none"
        stroke="var(--color-gold)"
        strokeOpacity={0.3}
        strokeWidth={0.35}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={ringTransition}
      />

      {decorativeAngles.map((angle) => {
        const dot = pointOnCircle(angle, RING_RADIUS);
        return (
          <circle key={angle} cx={dot.x} cy={dot.y} r={0.35} fill="var(--color-gold)" opacity={0.35} />
        );
      })}

      {FEATURE_ANGLES.map((angle, i) => (
        <motion.path
          key={`spoke-${angle}`}
          d={spokePath(angle, RING_RADIUS, SPOKE_OUTER_RADIUS)}
          fill="none"
          stroke="var(--color-gold)"
          strokeOpacity={0.45}
          strokeWidth={0.4}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: "easeOut" }}
        />
      ))}

      {FEATURE_ANGLES.map((angle, i) => {
        const dot = pointOnCircle(angle, RING_RADIUS);
        return (
          <motion.circle
            key={`dot-${angle}`}
            cx={dot.x}
            cy={dot.y}
            r={1.1}
            fill="var(--color-gold)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
          />
        );
      })}
    </svg>
  );
}
