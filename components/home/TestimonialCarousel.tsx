"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Testimonial = { quote: string; attribution: string; placeholder?: boolean };

const AUTO_ADVANCE_MS = 6000;

/** Auto-advancing, pausable, swipeable (via native scroll-snap) testimonial carousel. */
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  const scrollToIndex = useCallback((i: number) => {
    const container = containerRef.current;
    const child = container?.children[i] as HTMLElement | undefined;
    if (!container || !child) return;
    isProgrammaticScroll.current = true;
    container.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 500);
  }, []);

  useEffect(() => {
    if (items.length <= 1 || paused) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [items.length, paused]);

  useEffect(() => {
    scrollToIndex(index);
  }, [index, scrollToIndex]);

  function handleScroll() {
    if (isProgrammaticScroll.current) return;
    const container = containerRef.current;
    if (!container) return;
    const nearest = Math.round(container.scrollLeft / Math.max(container.clientWidth, 1));
    setIndex((current) => (nearest !== current ? nearest : current));
  }

  return (
    <div
      className="relative min-w-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={containerRef}
        onScroll={handleScroll}
        role="region"
        aria-roledescription="carousel"
        aria-label="Family testimonials"
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <figure
            key={item.quote}
            aria-hidden={i !== index}
            className="relative w-full flex-shrink-0 snap-center rounded-2xl border border-forest/8 bg-surface-alt p-8 sm:p-10"
          >
            {item.placeholder && (
              <span className="eyebrow absolute right-6 top-6 text-[10px] text-gold/80">
                Placeholder
              </span>
            )}
            <blockquote className="font-display text-xl leading-relaxed text-forest sm:text-2xl">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted">{item.attribution}</figcaption>
          </figure>
        ))}
      </div>

      {items.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => setIndex((index - 1 + items.length) % items.length)}
            aria-label="Previous testimonial"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-forest/15 text-forest/70 transition-colors hover:border-forest/40 hover:text-forest"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <div className="flex gap-2">
            {items.map((item, i) => (
              <button
                key={item.quote}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className={cn("h-2 w-2 rounded-full transition-colors", i === index ? "bg-gold" : "bg-forest/20")}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIndex((index + 1) % items.length)}
            aria-label="Next testimonial"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-forest/15 text-forest/70 transition-colors hover:border-forest/40 hover:text-forest"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
