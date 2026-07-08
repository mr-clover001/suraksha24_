"use client";

import { motion } from "framer-motion";
import { icons } from "./icons";

type MobileFeatureCardProps = {
  iconIndex: number;
  title: string;
  body: string;
  index: number;
};

/**
 * Stacked feature card used on mobile (single column) and tablet (2-column
 * grid). Takes `iconIndex` rather than the icon component itself — this is
 * rendered from a Server Component parent, and component/function references
 * can't cross that boundary as props, so the lookup happens client-side.
 */
export default function MobileFeatureCard({ iconIndex, title, body, index }: MobileFeatureCardProps) {
  const Icon = icons[iconIndex];
  const xOffset = index % 2 === 0 ? -16 : 16;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, y: 18 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="group flex items-start gap-4 rounded-[20px] border border-forest/8 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-soft-lg"
    >
      <motion.span
        whileHover={{ rotate: 8 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold"
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </motion.span>
      <div className="min-w-0">
        <h3 className="font-display text-base text-forest">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
      </div>
    </motion.div>
  );
}
