"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";

type GlowSpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Ambient backdrop for dark (forest-tone) sections: soft sage/gold glows
 * plus a cursor-following gold spotlight, written straight to CSS variables
 * on the DOM node (no re-renders) so it stays smooth on mouse move.
 */
export default function GlowSpotlight({ children, className }: GlowSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => ref.current?.style.setProperty("--spot-opacity", "1")}
      onMouseLeave={() => ref.current?.style.setProperty("--spot-opacity", "0")}
      className={cn("relative", className)}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-sage-light/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-out"
          style={{
            opacity: "var(--spot-opacity, 0)",
            background:
              "radial-gradient(560px circle at var(--spot-x, 50%) var(--spot-y, 20%), rgba(184,147,74,0.16), transparent 65%)",
          }}
        />
      </div>
      {children}
    </div>
  );
}
