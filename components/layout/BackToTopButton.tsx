"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-1.5 text-cream/60 transition-colors hover:text-cream"
    >
      Back to top
      <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
    </button>
  );
}
