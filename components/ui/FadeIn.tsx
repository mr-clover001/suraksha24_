"use client";

import { useEffect, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Subtle scroll-triggered fade/rise, used throughout the marketing pages.
 *
 * Renders visible by default (server-rendered HTML and pre-hydration state
 * both have data-fade="in") so content is never hidden without JavaScript.
 * Only once mounted do we check whether the element actually starts below
 * the fold — if so, we hide it and reveal it via IntersectionObserver as
 * the user scrolls to it. Above-the-fold content never gets hidden, so
 * there's no flash of visible-then-hidden content on load.
 */
export default function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"in" | "out">("in");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const startsOffscreen = rect.top > window.innerHeight * 0.9;
    if (!startsOffscreen) return;

    setState("out");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("in");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-fade={state}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
