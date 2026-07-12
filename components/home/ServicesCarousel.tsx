"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Service } from "@/config/site";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

/** Horizontally swipeable/scrollable row of service cards, with edge chevrons on larger screens. */
export default function ServicesCarousel({
  services,
}: {
  services: Service[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  function scrollByCard(direction: 1 | -1) {
    const el = containerRef.current;
    if (!el) return;
    const firstCard = el.children[0] as HTMLElement | undefined;
    const amount = (firstCard?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onScroll={updateArrows}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service, index) => (
          <FadeIn
            key={service.slug}
            delay={(index % 4) * 80}
            className="w-[78vw] flex-shrink-0 snap-start sm:w-[480px]"
          >
            <ServiceCard
              service={service}
              href={`/services/${service.slug}`}
              className="h-full"
            />
          </FadeIn>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Scroll to previous services"
        className={cn(
          "absolute top-1/2 -left-4 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-forest/15 bg-surface text-forest shadow-soft-lg transition-all duration-200 hover:border-teal hover:text-teal sm:flex",
          !canScrollLeft && "pointer-events-none opacity-0",
        )}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Scroll to more services"
        className={cn(
          "absolute top-1/2 -right-4 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-forest/15 bg-surface text-forest shadow-soft-lg transition-all duration-200 hover:border-teal hover:text-teal sm:flex",
          !canScrollRight && "pointer-events-none opacity-0",
        )}
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
