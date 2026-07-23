"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/cn";
import type { PatientTestimonial } from "@/config/site";

const AUTO_ADVANCE_MS = 7000;

/**
 * Photo-led testimonial spotlight for the International Patient Services
 * page: one large story at a time (portrait photo + full quote), a strip of
 * every patient's photo beneath it so the whole network of real faces reads
 * at a glance, and auto-advance that pauses on hover/focus/touch.
 */
export default function InternationalTestimonialSpotlight({
  items,
}: {
  items: PatientTestimonial[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % items.length) + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    if (items.length <= 1 || paused) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [items.length, paused]);

  const active = items[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div
          key={`photo-${active.slug}`}
          className="order-1 relative mx-auto w-full max-w-sm animate-step-fade"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft-lg ring-1 ring-forest/10">
            <Image
              src={active.photo}
              alt={`${active.name}, ${active.location}`}
              fill
              sizes="(min-width: 1024px) 380px, 80vw"
              className="object-cover object-top"
              priority={index === 0}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/5 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-lg text-cream">{active.name}</p>
              <p className="text-sm text-cream/75">{active.location}, Bangladesh</p>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="absolute -left-4 -top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream shadow-soft-lg"
          >
            <Quote className="h-6 w-6" aria-hidden="true" />
          </span>
        </div>

        {/* Photo picker: right under the photo on phone/tablet so switching
            stories never needs a scroll past the quote; moves below both
            columns at lg where the photo and quote already sit side by side. */}
        <div className="order-2 flex flex-wrap items-center justify-center gap-4 lg:order-3 lg:col-span-2 lg:mt-6">
          {items.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Read ${item.name}'s story`}
              aria-current={i === index}
              className={cn(
                "relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 transition-all duration-300 sm:h-16 sm:w-16",
                i === index
                  ? "scale-110 ring-gold"
                  : "opacity-60 ring-transparent hover:opacity-100 hover:ring-forest/20",
              )}
            >
              <Image
                src={item.photo}
                alt=""
                fill
                sizes="64px"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>

        <div key={`quote-${active.slug}`} className="order-3 min-w-0 animate-step-fade lg:order-2">
          <blockquote
            lang="bn"
            className="font-display text-xl leading-[1.9] text-forest sm:text-[1.35rem]"
          >
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          <div className="mt-9 flex items-center gap-5">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest/70 transition-colors hover:border-forest/40 hover:text-forest"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="text-sm text-muted">
              {index + 1} / {items.length}
            </p>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest/70 transition-colors hover:border-forest/40 hover:text-forest"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
