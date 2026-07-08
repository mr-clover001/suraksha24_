import { Calculator } from "lucide-react";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import CarePlanEstimator from "@/components/services/CarePlanEstimator";

export default function CarePlanEstimatorSection() {
  return (
    <Section tone="cream">
      <div className="grid  gap-14 lg:grid-cols-2">
        <FadeIn delay={120}>
          <CarePlanEstimator hideIntro />
        </FadeIn>
        <FadeIn>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 lg:mx-0">
            <Calculator className="h-5 w-5 text-gold" aria-hidden="true" />
          </div>
          <p className="eyebrow mb-4 mt-6">Indicative only</p>
          <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-forest sm:text-4xl">
            Get a sense of monthly cost
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Choose the kind of care and how many hours a day your parents might
            need. We&rsquo;ll show an approximate monthly range — your exact
            cost is confirmed after a free home assessment.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
