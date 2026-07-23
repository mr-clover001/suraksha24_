import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, siteConfig } from "@/config/site";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import FinalCTA from "@/components/home/FinalCTA";
import InternationalPatientsContent from "@/components/services/InternationalPatientsContent";
import InternationalTestimonials from "@/components/services/InternationalTestimonials";
import { cn } from "@/lib/cn";

const INTERNATIONAL_PATIENTS_SLUG = "international-patient-services";

export const metadata: Metadata = {
  title: "International Patients Services",
  description:
    "End-to-end medical travel assistance for patients from Bangladesh seeking trusted treatment in Kolkata — airport pick-up, hospital coordination, accommodation and follow-up care.",
  alternates: { canonical: `${siteConfig.url}/international-patients-services` },
};

function getRelatedServices(currentSlug: string, limit = 3) {
  const currentIndex = services.findIndex((s) => s.slug === currentSlug);
  const related = [];
  for (let i = 1; related.length < limit && i <= services.length; i += 1) {
    const candidate = services[(currentIndex + i) % services.length];
    if (candidate.slug !== currentSlug) related.push(candidate);
  }
  return related;
}

export default function InternationalPatientsServicesPage() {
  const service = services.find((s) => s.slug === INTERNATIONAL_PATIENTS_SLUG);
  if (!service) notFound();

  const related = getRelatedServices(service.slug);
  const url = `${siteConfig.url}/international-patients-services`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: "Kolkata, India",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InternationalPatientsContent service={service} />

      <InternationalTestimonials />

      {related.length > 0 && (
        <Section tone="cream" className="pt-0 pb-24">
          <div className="mx-auto mt-8 max-w-5xl">
            <h2 className="font-display text-2xl text-forest">Related services</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <div
                  key={item.slug}
                  className={cn(
                    index === related.length - 1 &&
                      related.length % 2 === 1 &&
                      "sm:col-span-2 lg:col-span-1"
                  )}
                >
                  <ServiceCard service={item} href={`/services/${item.slug}`} className="h-full" />
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      <FinalCTA />
    </>
  );
}
