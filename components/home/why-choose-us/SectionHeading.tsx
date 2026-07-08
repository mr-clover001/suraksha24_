"use client";

import { motion } from "framer-motion";

export default function SectionHeading() {
  return (
    <div className="relative mx-auto max-w-2xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="eyebrow mb-4"
      >
        Why families choose us
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="font-display text-3xl leading-[1.15] tracking-tight text-forest sm:text-4xl lg:text-[2.75rem]"
      >
        Calm, consistent care you can verify
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="mt-5 text-lg leading-relaxed text-muted"
      >
        Trusted by families for transparent pricing, verified staff, and a care team that&rsquo;s
        reachable day or night.
      </motion.p>
    </div>
  );
}
