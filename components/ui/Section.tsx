import { cn } from "@/lib/cn";
import FadeIn from "@/components/ui/FadeIn";

type Tone = "cream" | "surface" | "forest" | "sage";

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream text-forest",
  surface: "bg-surface-alt text-forest",
  forest: "bg-linear-to-br from-forest via-forest to-forest-light text-cream",
  sage: "bg-sage-light/40 text-forest",
};

type SectionProps = {
  id?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  containerClassName?: string;
};

/**
 * Standard section shell used across the site: consistent vertical rhythm,
 * max-width container, and an optional eyebrow/heading/subheading header.
 */
export default function Section({
  id,
  eyebrow,
  heading,
  subheading,
  tone = "cream",
  align = "center",
  children,
  className,
  headerClassName,
  containerClassName,
}: SectionProps) {
  const hasHeader = eyebrow || heading || subheading;

  return (
    <section id={id} className={cn("py-20 sm:py-28", toneClasses[tone], className)}>
      <div className={cn("mx-auto max-w-7xl px-6 sm:px-8", containerClassName)}>
        {hasHeader && (
          <FadeIn
            className={cn(
              "mb-14 max-w-3xl",
              align === "center" ? "mx-auto text-center" : "text-left",
              headerClassName
            )}
          >
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {heading && (
              <h2 className="font-display text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                {heading}
              </h2>
            )}
            {subheading && (
              <p
                className={cn(
                  "mt-5 text-lg leading-relaxed",
                  tone === "forest" ? "text-cream/80" : "text-muted"
                )}
              >
                {subheading}
              </p>
            )}
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  );
}
