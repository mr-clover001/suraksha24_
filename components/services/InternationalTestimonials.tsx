import { internationalPatientTestimonials } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import InternationalTestimonialSpotlight from "@/components/services/InternationalTestimonialSpotlight";

export default function InternationalTestimonials() {
  return (
    <Section
      tone="surface"
      eyebrow="Patient stories"
      heading="Hear it from the families we've cared for"
      subheading="Real patients from across Bangladesh, treated in Kolkata through Suraksha24 — in their own words."
    >
      <FadeIn>
        <InternationalTestimonialSpotlight items={internationalPatientTestimonials} />
      </FadeIn>
    </Section>
  );
}
