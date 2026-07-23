import type { Metadata } from "next";
import Image from "next/image";
import { services, siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import ServiceCard from "@/components/ui/ServiceCard";
import ServicePickerSection from "@/components/home/ServicePickerSection";
import FinalCTA from "@/components/home/FinalCTA";
import MobileHero from "@/components/layout/MobileHero";

export const metadata: Metadata = {
  title: "Way We Care",
  description:
    "Skilled nursing, companion care, physiotherapy, 24×7 emergency response, home ICU, medical equipment and doorstep diagnostics — home healthcare in Kolkata for families abroad.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <MobileHero
          eyebrow="Way We Care"
          heading={
            <>
              Comprehensive{" "}
              <span className="bg-linear-to-r from-forest via-forest-light to-teal bg-clip-text text-transparent font-bold">
                care
              </span>
              , without the guesswork
            </>
          }
          description="Every service below is coordinated by the same dedicated care manager, so your parents never experience a patchwork of unfamiliar providers — and you never have to manage it from a different timezone."
          image={{
            src: "/assests/ServicesB.jpg",
            alt: "A nurse in scrubs gently checks on an elderly man resting in a hospital-style bed at home",
            objectPosition: "object-[60%_40%]",
          }}
          ctaHref="/contact"
          ctaLabel="Talk to a care advisor"
        />

        <div className="relative hidden overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 md:block lg:pt-44 lg:pb-28">
          <div className="absolute inset-0 -z-20">
            <Image
              src="/assests/ServicesB.jpg"
              alt="A nurse in scrubs gently checks on an elderly man resting in a hospital-style bed at home"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[60%_40%]"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/30 to-black/20"
          />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
            <FadeIn>
              <div className="max-w-xl">
                <p className="eyebrow mb-6 text-sage-light">Way We Care</p>
                <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl">
                  Comprehensive{" "}
                  <span className="bg-linear-to-r from-teal via-sage to-sage-light bg-clip-text text-transparent font-bold [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
                    care
                  </span>
                  , without the guesswork
                </h1>
                <p className="mt-7 text-lg leading-relaxed text-cream/90">
                  Every service below is coordinated by the same dedicated care
                  manager, so your parents never experience a patchwork of
                  unfamiliar providers — and you never have to manage it from a
                  different timezone. Pick a card to read the full detail.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Section tone="cream" className="pt-16 pb-16 sm:pt-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={(index % 4) * 80}>
              <ServiceCard
                service={service}
                href={`/services/${service.slug}`}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      <ServicePickerSection />

      <FinalCTA />
    </>
  );
}
