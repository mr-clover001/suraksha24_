"use client";

import { useEffect, useRef, useState } from "react";
import { parseStatValue } from "@/lib/parseStatValue";

const DURATION_MS = 1200;

type StatCounterProps = {
  value: string;
  /** Extra marker (e.g. an asterisk) appended after the animated value. */
  mark?: React.ReactNode;
};

export default function StatCounter({ value, mark }: StatCounterProps) {
  const parsed = parseStatValue(value);
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : value);

  useEffect(() => {
    if (!parsed) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) {
          setDisplay(value);
          return;
        }

        const start = performance.now();
        function tick(now: number) {
          const progress = Math.min(1, (now - start) / DURATION_MS);
          const eased = 1 - (1 - progress) * (1 - progress);
          const current = parsed!.target * eased;
          const formatted = current.toLocaleString("en-US", {
            minimumFractionDigits: parsed!.decimals,
            maximumFractionDigits: parsed!.decimals,
          });
          setDisplay(`${parsed!.prefix}${formatted}${parsed!.suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <p ref={ref} className="font-display text-2xl text-forest sm:text-3xl">
      {display}
      {mark}
    </p>
  );
}
