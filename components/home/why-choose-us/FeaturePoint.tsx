"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { LABEL_RADIUS, pointOnCircle } from "./geometry";
import { cn } from "@/lib/cn";

type FeaturePointProps = {
  icon: LucideIcon;
  title: string;
  body: string;
  angle: number;
  index: number;
};

/** One feature label positioned on the circle, aligned left/right/centered depending on which side it falls on. */
export default function FeaturePoint({ icon: Icon, title, body, angle, index }: FeaturePointProps) {
  const { x, y } = pointOnCircle(angle, LABEL_RADIUS);
  const cosVal = Math.cos((angle * Math.PI) / 180);
  const isRightSide = cosVal > 0.3;
  const isLeftSide = cosVal < -0.3;

  return (
    // Plain (non-motion) wrapper owns the positioning transform. Framer
    // Motion writes its own `transform` for animated y/scale on whichever
    // element `motion.div` is applied to, which would silently clobber a
    // manual translate(-50%, -50%) on the same node — so centering has to
    // live one level up, on an element Framer Motion never touches.
    <div
      className="absolute w-[clamp(150px,19vw,230px)]"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.15 * index, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ y: -6, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className={cn(
            "group flex items-center gap-3 rounded-2xl border border-forest/8 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-md transition-shadow duration-300 hover:border-gold/25 hover:shadow-soft-lg",
            isRightSide && "flex-row text-left",
            isLeftSide && "flex-row-reverse text-right",
            !isRightSide && !isLeftSide && "flex-col text-center"
          )}
        >
          <motion.span
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold"
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </motion.span>
          <span className="min-w-0">
            <span className="font-display block text-[15px] leading-snug text-forest">{title}</span>
            <span className="mt-0.5 block text-xs leading-relaxed text-muted">{body}</span>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
