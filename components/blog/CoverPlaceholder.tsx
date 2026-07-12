import { HeartPulse } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Decorative stand-in for a real cover photo. No post ships with a real
 * image yet, so this renders a calm, on-palette pattern instead of a
 * broken <img>. Swap for next/image once real cover photos exist.
 */
export default function CoverPlaceholder({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-linear-to-r from-forest via-forest-light via-60% to-teal",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(20,184,166,0.5) 0, transparent 45%), radial-gradient(circle at 80% 70%, rgba(15,118,110,0.4) 0, transparent 45%)",
        }}
      />
      <HeartPulse className="relative h-9 w-9 text-cream/70" />
    </div>
  );
}
