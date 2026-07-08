"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whyUs } from "@/config/site";
import { FEATURE_ANGLES, RING_RADIUS } from "./geometry";
import { icons } from "./icons";
import AnimatedCircle from "./AnimatedCircle";
import FeaturePoint from "./FeaturePoint";

/** Photo diameter as a fraction of the ring's diameter — smaller than 1 so a sliver of ring shows around the photo. */
const IMAGE_SIZE_RATIO = 0.8;

/** Desktop-only orbital layout: central photo, animated ring, and 6 feature points arranged around it. */
export default function CircularFeatureLayout() {
  const imageSizePercent = RING_RADIUS * 2 * IMAGE_SIZE_RATIO;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[880px]">
      <AnimatedCircle />

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-soft-lg ring-8 ring-white"
        style={{ width: `${imageSizePercent}%`, height: `${imageSizePercent}%` }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/assests/WhyChooseUS.jpg"
          alt="A younger hand gently holding an elderly family member's hand"
          fill
          sizes="(min-width: 1024px) 40vw, 60vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-forest/10"
        />
      </motion.div>

      {whyUs.map((feature, index) => (
        <FeaturePoint
          key={feature.title}
          icon={icons[index]}
          title={feature.title}
          body={feature.body}
          angle={FEATURE_ANGLES[index]}
          index={index}
        />
      ))}
    </div>
  );
}
