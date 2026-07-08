import { testimonials, nurseNote } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";

export default function Testimonials() {
  return (
    <Section tone="surface" eyebrow="In their words" heading="What families tell us">
      <div className="grid gap-8 lg:grid-cols-2">
        <FadeIn className="min-w-0">
          <figure className="h-full -rotate-1 rounded-2xl border border-gold/20 bg-surface-alt p-8 shadow-soft sm:p-10">
            <blockquote className="font-display text-xl leading-relaxed text-forest sm:text-2xl">
              &ldquo;{nurseNote.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted">
              <span className="font-medium text-forest">— {nurseNote.name}</span>, {nurseNote.role}
            </figcaption>
          </figure>
        </FadeIn>

        <FadeIn delay={100} className="min-w-0">
          <TestimonialCarousel items={testimonials} />
        </FadeIn>
      </div>
    </Section>
  );
}
