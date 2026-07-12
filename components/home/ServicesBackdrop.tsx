"use client";

import { useRef } from "react";

/**
 * Ambient backdrop for the services grid: a faint structural grid, a gold
 * hairline, soft warm glows, and a cursor-following spotlight. The spotlight
 * position is written straight to CSS variables on the DOM node (no
 * re-renders) so it stays smooth on mouse move.
 */
export default function ServicesBackdrop({ children }: { children: React.ReactNode }) {
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
      className="relative"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-muted) 1px, transparent 1px), linear-gradient(to bottom, var(--color-muted) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 20%, black, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 20%, black, transparent 75%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
        <div className="absolute -top-32 right-0 h-104 w-104 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-104 w-104 rounded-full bg-gold/12 blur-3xl" />
        <div
          className="absolute inset-0 transition-opacity duration-300 ease-out"
          style={{
            opacity: "var(--spot-opacity, 0)",
            background:
              "radial-gradient(480px circle at var(--spot-x, 50%) var(--spot-y, 20%), rgba(15,118,110,0.16), transparent 65%)",
          }}
        />
      </div>
      {children}
    </div>
  );
}
