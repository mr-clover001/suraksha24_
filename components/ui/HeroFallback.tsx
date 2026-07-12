import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Full-bleed stand-in for a hero background photo. Used on pages whose real
 * wallpaper image hasn't been added to /public yet (see HeroWallpaper) so the
 * page still reads as an intentional, on-brand banner rather than a broken
 * image — swap in the real photo and this is never rendered again.
 */
export default function HeroFallback({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-forest via-forest-light to-forest",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 rounded-full bg-sage-light/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
      />
      <Icon className="relative h-16 w-16 text-cream/15" strokeWidth={1.25} />
    </div>
  );
}
