import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

type CtaBannerProps = {
  eyebrow: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
};

/** Closing CTA banner shared by the Careers and Partners pages. */
export default function CtaBanner({
  eyebrow,
  heading,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  secondaryExternal,
}: CtaBannerProps) {
  return (
    <Section tone="forest" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-sage-light/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />
      <FadeIn className="relative mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-cream sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-cream/75">{body}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="gold" size="lg">
            {primaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outline-light" size="lg" external={secondaryExternal}>
              {secondaryLabel}
            </Button>
          )}
        </div>
      </FadeIn>
    </Section>
  );
}
