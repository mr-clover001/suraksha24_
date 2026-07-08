"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSafeReducedMotion } from "./useSafeReducedMotion";

const particles = [
  { top: "16%", left: "10%", duration: 5 },
  { top: "72%", left: "7%", duration: 6.5 },
  { top: "22%", left: "90%", duration: 5.5 },
  { top: "80%", left: "92%", duration: 6 },
  { top: "48%", left: "4%", duration: 7 },
];

/** Soft gradient wash, parallax blobs, a faint dot grid, and a few slow-floating particles. */
export default function DecorativeBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-40, 40]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [30, -30]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-[#FFF8F3] to-white" />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(184,147,74,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse 55% 45% at 50% 42%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 55% 45% at 50% 42%, black, transparent 75%)",
        }}
      />

      <motion.div style={{ y: y1 }} className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-sage-light/25 blur-3xl" />

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-gold/30"
          style={{ top: p.top, left: p.left }}
          animate={
            reduceMotion
              ? { opacity: 0.6 }
              : { y: [0, -12, 0], opacity: [0.4, 0.9, 0.4] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }
          }
        />
      ))}
    </div>
  );
}
