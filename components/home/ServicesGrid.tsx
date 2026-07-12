import { services } from "@/config/site";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ServicesBackdrop from "@/components/home/ServicesBackdrop";
import ServicesCarousel from "@/components/home/ServicesCarousel";

export default function ServicesGrid() {
  return (
    <ServicesBackdrop>
      <Section
        id="services"
        tone="cream"
        className="relative overflow-hidden"
        eyebrow="What we offer"
        heading="Every kind of care, under one dedicated team"
        subheading="From a nurse's visit to a 2 a.m. emergency, one care manager coordinates all of it — so you never have to go looking for the right provider yourself."
      >
        <ServicesCarousel services={services} />

        <div className="relative mt-10 text-center">
          <Button
            href="/services"
            size="lg"
            className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium tracking-wide shadow-soft transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            Explore all services in detail
          </Button>
        </div>
      </Section>
    </ServicesBackdrop>
  );
}
