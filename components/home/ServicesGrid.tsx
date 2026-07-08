import { services } from "@/config/site";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import ServicesBackdrop from "@/components/home/ServicesBackdrop";

export default function ServicesGrid() {
  return (
    <ServicesBackdrop>
      <Section
        id="services"
        tone="surface"
        className="relative overflow-hidden"
        eyebrow="What we offer"
        heading="Every kind of care, under one dedicated team"
        subheading="From a nurse's visit to a 2 a.m. emergency, one care manager coordinates all of it — so you never have to go looking for the right provider yourself."
      >
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={(index % 3) * 80}>
              <ServiceCard
                service={service}
                href={`/services/${service.slug}`}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>

        <div className="relative mt-14 text-center">
          <Button href="/services" variant="secondary" size="lg">
            Explore all services in detail
          </Button>
        </div>
      </Section>
    </ServicesBackdrop>
  );
}
