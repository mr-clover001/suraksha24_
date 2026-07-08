import { Compass } from "lucide-react";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import ServicePicker from "@/components/home/ServicePicker";

export default function ServicePickerSection() {
  return (
    <Section tone="surface">
      <div className="grid  gap-14 lg:grid-cols-2">
        <FadeIn>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-light/40 lg:mx-0">
            <Compass className="h-5 w-5 text-forest" aria-hidden="true" />
          </div>
          <p className="eyebrow mb-4 mt-6">Not sure where to start?</p>
          <h2 className="font-display text-3xl leading-[1.15] tracking-tight text-forest sm:text-4xl">
            Two questions to the right service
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Every family&rsquo;s situation is different — daily support,
            recovery after a hospital stay, or a medical emergency all call for
            something different. Answer a couple of quick questions and
            we&rsquo;ll point you to the right place to start.
          </p>
        </FadeIn>
        <FadeIn delay={120}>
          <ServicePicker hideIntro />
        </FadeIn>
      </div>
    </Section>
  );
}
