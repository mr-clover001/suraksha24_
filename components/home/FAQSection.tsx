import { faqs } from "@/config/site";
import Button from "@/components/ui/Button";
import PlusAccordion from "@/components/ui/PlusAccordion";
import FadeIn from "@/components/ui/FadeIn";

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sage-light/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/12 bg-surface px-4 py-1.5 text-sm font-medium text-forest shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-light" aria-hidden="true" />
            FAQs
          </span>
          <h2 className="font-display mt-6 text-4xl leading-[1.1] tracking-tight text-forest sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted">
            We&rsquo;re here to help with any questions you may have.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact" variant="gold" size="lg">
              Talk to a care advisor
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Read our story
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <PlusAccordion items={faqs} />
        </FadeIn>
      </div>
    </section>
  );
}
