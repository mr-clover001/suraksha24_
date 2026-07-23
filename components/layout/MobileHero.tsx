import Image from "next/image";
import { ShieldCheck, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/cn";

type MobileHeroProps = {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  image: { src: string; alt: string; objectPosition?: string };
  ctaHref: string;
  ctaLabel: string;
};

/**
 * Mobile-only hero (text-led, framed square photo, trust chips, full-width
 * CTA) matching the pattern in components/home/Hero.tsx, so every marketing
 * page shares the same mobile layout instead of reusing the desktop
 * full-bleed photo hero at small sizes. Desktop is untouched — pages render
 * this alongside their existing `hidden md:block` desktop hero markup.
 */
export default function MobileHero({ eyebrow, heading, description, image, ctaHref, ctaLabel }: MobileHeroProps) {
  return (
    <div className="bg-surface px-6 pt-24 pb-12 md:hidden">
      <FadeIn>
        <p className="eyebrow text-[11px] mb-4">{eyebrow}</p>
        <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-forest">
          {heading}
        </h1>

        <p className="mt-4 text-[15px] leading-relaxed text-muted">{description}</p>

        <div className="relative mt-6 mb-4 aspect-square w-full">
          <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-soft">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="100vw"
              className={cn("object-cover", image.objectPosition)}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-forest/10" />
          </div>

          <div className="absolute -top-3 -right-3 z-10 flex items-center gap-2 rounded-2xl border border-forest/8 bg-cream px-3.5 py-2.5 shadow-soft-lg">
            <ShieldCheck className="h-4 w-4 text-teal" aria-hidden="true" />
            <span className="text-xs font-medium text-forest">
              Licensed &amp; Insured
            </span>
          </div>

          <div className="absolute -bottom-3 -left-3 z-10 flex items-center gap-2 rounded-2xl border border-forest/8 bg-cream px-3.5 py-2.5 shadow-soft-lg">
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
            <span className="text-xs font-medium text-forest">
              4.7 rated · 500+ families
            </span>
          </div>
        </div>

        <Button
          href={ctaHref}
          size="lg"
          className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6! py-3! text-sm! font-medium tracking-wide shadow-soft transition-all duration-300 bg-linear-to-r from-forest via-forest-light via-60% to-teal text-cream hover:brightness-110 hover:shadow-soft-lg"
        >
          {ctaLabel}
        </Button>
      </FadeIn>
    </div>
  );
}
